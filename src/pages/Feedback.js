import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import * as Styled from './style';
import yellowbg from '../assets/yellowbg.jpg';
import { useNavigate, useLocation } from 'react-router-dom';


function FeedbackForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, answers, questions } = location.state || { score: 0, answers: [], questions: [] };

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState('');
  const [responses, setResponses] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setResponses(prevResponses => ({
      ...prevResponses,
      [name]: value,
    }));
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullFeedback = {
      ...responses,
      rating,
      review,
    };
    console.log('Submitted feedback:', fullFeedback);
    navigate('/result', { state: { score, answers, questions } });
  };

  return (
    <Styled.FeedbackContainer>
      <Styled.Background $background={yellowbg}>
  <Styled.Box>
    <Styled.Form onSubmit={handleSubmit}>
      <div className='heading'>Please provide your feedback
        <p>After submitting the feedback your score will be visible.</p>
      </div>
      <Styled.Container>
      <div>
      <div>
        <p>Overall, my experience was a positive one.</p>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question1"
            value="Strongly Disagree"
            checked={responses.question1 === 'Strongly Disagree'}
            onChange={handleOptionChange}
          />
          Strongly Disagree
        </Styled.Label>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question1"
            value="Disagree"
            checked={responses.question1 === 'Disagree'}
            onChange={handleOptionChange}
          />
          Disagree
        </Styled.Label>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question1"
            value="Neutral"
            checked={responses.question1 === 'Neutral'}
            onChange={handleOptionChange}
          />
          Neutral
        </Styled.Label>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question1"
            value="Agree"
            checked={responses.question1 === 'Agree'}
            onChange={handleOptionChange}
          />
         Agree
        </Styled.Label>
        
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question1"
            value="Strongly Agree"
            checked={responses.question1 === 'Strongly Agree'}
            onChange={handleOptionChange}
          />
         Strongly Agree
        </Styled.Label>
      </div>
      <div>
        <p>Test was on right pace.</p>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question2"
            value="Strongly Disagree"
            checked={responses.question2 === 'Strongly Disagree'}
            onChange={handleOptionChange}
          />
          Strongly Disagree
        </Styled.Label>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question2"
            value="Disagree"
            checked={responses.question2 === 'Disagree'}
            onChange={handleOptionChange}
          />
          Disagree
        </Styled.Label>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question2"
            value="Neutral"
            checked={responses.question2 === 'Neutral'}
            onChange={handleOptionChange}
          />
          Neutral
        </Styled.Label>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question2"
            value="Agree"
            checked={responses.question2 === 'Agree'}
            onChange={handleOptionChange}
          />
         Agree
        </Styled.Label>
        
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question2"
            value="Strongly Agree"
            checked={responses.question2 === 'Strongly Agree'}
            onChange={handleOptionChange}
          />
         Strongly Agree
        </Styled.Label>
         </div>
         <div>
        <p>Instructions were clear.</p>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question3"
            value="Strongly Disagree"
            checked={responses.question3 === 'Strongly Disagree'}
            onChange={handleOptionChange}
          />
          Strongly Disagree
        </Styled.Label>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question3"
            value="Disagree"
            checked={responses.question3 === 'Disagree'}
            onChange={handleOptionChange}
          />
          Disagree
        </Styled.Label>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question3"
            value="Neutral"
            checked={responses.question3 === 'Neutral'}
            onChange={handleOptionChange}
          />
          Neutral
        </Styled.Label>
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question3"
            value="Agree"
            checked={responses.question3 === 'Agree'}
            onChange={handleOptionChange}
          />
         Agree
        </Styled.Label>
        
        <Styled.Label>
          <Styled.Input className='color'
            type="radio"
            name="question3"
            value="Strongly Agree"
            checked={responses.question3 === 'Strongly Agree'}
            onChange={handleOptionChange}
          />
         Strongly Agree
        </Styled.Label>
         </div>
</div>
<Styled.Overall>
  <Styled.Rate>
  <p>Overall Rating</p>
  <div>
    {[...Array(5)].map((star,index) =>{
      const currentRating = index + 1
    return(
      <Styled.StarLabel key={index}>
        <Styled.StarInput
         className='qwer'
        type='radio'
        name='rating'
        value={currentRating}
        onClick={()=> setRating(currentRating)}
        />
      <FaStar
       className='star' 
       size={50}
       color={currentRating <= (hover || rating) ? "#ffc107" :"gray"} 
       onMouseEnter={()=>setHover(currentRating)}
       onMouseLeave={()=> setHover(null)}
       />
      </Styled.StarLabel>
    ) 
    })}
    </div>
  </Styled.Rate>
  <Styled.Review>
    <textarea placeholder="What's your feedback for us?"
    value={review}
    onChange={handleReviewChange}
    ></textarea>
  </Styled.Review>
</Styled.Overall>
</Styled.Container>
<Styled.Btnpos>
      <Styled.SubmitBtn type="submit" onClick={handleSubmit} >Submit</Styled.SubmitBtn>
      </Styled.Btnpos>
    </Styled.Form>
    </Styled.Box>
    </Styled.Background>
    </Styled.FeedbackContainer>
  );
}

export default FeedbackForm;