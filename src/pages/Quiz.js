import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './style';
import yellowbg from '../assets/yellowbg.jpg';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Quiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [questionNo, setQuestionNo] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(10 * 60); 
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      const url = 'https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple&encode=url3986';
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.results && Array.isArray(data.results)) {
          setQuestions(data.results);
          setOptions(getOptionsAndShuffle(data.results[questionNo]));
          setLoading(false);
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (error) {
        console.error("Failed to fetch questions:", error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchQuestions();

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          navigate("/feedback", { state: { score, answers: answeredQuestions, questions } });
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [navigate, questionNo]);

  useEffect(() => {
    if (questions.length > 0) {
      setOptions(getOptionsAndShuffle(questions[questionNo]));
    }
  }, [questionNo, questions]);

  const getOptionsAndShuffle = (question) => {
    const options = [...question.incorrect_answers, question.correct_answer];
    shuffle(options);
    return options;
  };

  const handleNextClick = () => {
    if (questionNo < questions.length - 1) {
      setQuestionNo((prevQuestionNo) => prevQuestionNo + 1);
      setSelectedOption(null);
    } else {
      navigate("/feedback", { state: { score, answers: answeredQuestions, questions } });
    }
  };

  const handlePrevClick = () => {
    if (questionNo === 0) return;
    setQuestionNo(questionNo - 1);
    setSelectedOption(answeredQuestions[questionNo - 1]?.selectedOption ?? null);
    setOptions(getOptionsAndShuffle(questions[questionNo - 1]));
  };

  const handleClickOption = (index) => {
    if (selectedOption === index) {
      setSelectedOption(null);
      const prevScore = answeredQuestions[questionNo]?.scoreAwarded || 0;
      setScore(score - prevScore);

      setAnsweredQuestions(prev => {
        const updated = { ...prev };
        delete updated[questionNo];
        return updated;
      });

      return;
    }

    setSelectedOption(index);

    const correctAnswer = decodeURIComponent(questions[questionNo].correct_answer);
    const selectedAnswer = decodeURIComponent(options[index]);
    const isCorrect = selectedAnswer === correctAnswer;

    setAnsweredQuestions(prev => {
      const updated = { ...prev };

      const prevState = updated[questionNo];
      const wasCorrectBefore = prevState?.isCorrect;
      const scoreBefore = prevState?.scoreAwarded || 0;

      let newScoreContribution = isCorrect ? 4 : -1;

      if ((wasCorrectBefore && !isCorrect) || (!wasCorrectBefore && isCorrect) || (wasCorrectBefore === undefined && !isCorrect)) {
        setScore((prevScore) => prevScore - scoreBefore + newScoreContribution);
      }

      updated[questionNo] = { isCorrect, scoreAwarded: newScoreContribution, selectedOption: index };

      return updated;
    });
  };

  const formatTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (loading) {
    return <Styled.Loader>
      <Styled.Wrapper>
        <Styled.Circle />
        <Styled.Circle />
        <Styled.Circle />
        <Styled.Shadow />
        <Styled.Shadow />
        <Styled.Shadow />
      </Styled.Wrapper>
    </Styled.Loader>;
  }

  return (
    <Styled.Background $background={yellowbg}>
      <Styled.Header>
        <Styled.Heading>
          General Questions
          <h5><FontAwesomeIcon icon={faStopwatch} /> <span>{formatTime()}</span></h5>
        </Styled.Heading>
        <Styled.QuizQuestions>
          {questions.length > 0 && (
            <h2>
              {`${questionNo + 1}. ${decodeURIComponent(questions[questionNo].question)}`}
            </h2>
          )}
        </Styled.QuizQuestions>
        <Styled.QuizOptions>
          {options.length > 0 && (
            <ol>
              {options.map((option, index) => (
                <li
                  className={index === selectedOption ? 'option selectOption' : 'option'}
                  key={index}
                  onClick={() => handleClickOption(index)}
                >
                  <span>{decodeURIComponent(option)}</span>
                </li>
              ))}
            </ol>
          )}
        </Styled.QuizOptions>
        <Styled.ButtonPannel>
          {questionNo > 0 && (
            <Styled.Btn onClick={handlePrevClick}>Previous</Styled.Btn>
          )}
          {questionNo < 14 ? (
            <Styled.Btn onClick={handleNextClick}>Next</Styled.Btn>
          ) : (
            <Styled.Btn onClick={() => navigate("/feedback", { state: { score, answers: answeredQuestions, questions } })}>Submit</Styled.Btn>
          )}
        </Styled.ButtonPannel>
      </Styled.Header>
    </Styled.Background>
  );
};

export default Quiz;
