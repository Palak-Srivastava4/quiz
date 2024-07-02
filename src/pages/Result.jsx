import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './style';
import yellowbg from '../assets/yellowbg.jpg';
import ResultPieChart from '../components/ResultPieChart';

const Result = () => {
  const location = useLocation();
  const { score, answers, questions } = location.state || { score: 0, answers: {}, questions: [] };

  const totalQuestions = questions.length;
  const attemptedQuestions = Object.keys(answers).length;
  const correctAnswers = Object.values(answers).filter(answer => answer.isCorrect).length;
  const incorrectAnswers = attemptedQuestions - correctAnswers;
  const unattemptedQuestions = totalQuestions - attemptedQuestions;

  return (
    <Styled.Background $background={yellowbg}>
      <Styled.Box>
        <Styled.ResultHeader>Your Quiz Result</Styled.ResultHeader>
        <Styled.ResultDetails>
          <h1>Score: <span>{score}/60</span></h1>
          <ResultPieChart correct={correctAnswers} incorrect={incorrectAnswers} unattempted={unattemptedQuestions} />
          <Styled.CardContainer>
          {/* <Styled.Card className='glass'>Total Questions: {totalQuestions}</Styled.Card> */}
          <Styled.Card className='glass'>
             <h6>Attempted Questions:</h6>
              <p>  {attemptedQuestions} </p>
               </Styled.Card>
          <Styled.Card className='glass'> 
            <h6>Unattempted Questions:</h6>
             <p> {unattemptedQuestions} </p>
              </Styled.Card>
          <Styled.Card className='glass'>
             <h6>Correct Answers:</h6>
              <p> {correctAnswers} </p>
               </Styled.Card>
          <Styled.Card className='glass'> 
            <h6>Incorrect Answers:</h6> 
            <p> {incorrectAnswers} </p>
             </Styled.Card>
          </Styled.CardContainer>
        </Styled.ResultDetails>
        {/* <Styled.Button onClick={() => navigate('/')}>Back to Home</Styled.Button> */}
      </Styled.Box>
    </Styled.Background>
  );
};

export default Result;
