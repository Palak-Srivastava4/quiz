import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './style';
import yellowbg from '../assets/yellowbg.jpg';
import { useAuth } from '../components/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Render nothing while redirecting
  }

  return (
    <div>
      <Styled.Background $background={yellowbg}>
        <Styled.Home>
          <Styled.Start>
            <Styled.QuizImage>
              <img src='https://cdn3d.iconscout.com/3d/premium/thumb/online-exam-5225483-4369737.png?f=webp' alt='' />
            </Styled.QuizImage>
            <Styled.Title>
              <h4>Start Quiz</h4>
              <p>This quiz contains 15 Questions. Each Question has only 'one' option correct, you have to choose the correct option. The marking scheme is as following:<br /><hr/>
              For every correct answer: +4<hr />
              For incorrect answer: -1 <hr/> </p>
              <Styled.Button onClick={() => navigate("/quiz")}>Let's Get started</Styled.Button>
            </Styled.Title>
          </Styled.Start>
        </Styled.Home>
      </Styled.Background>
    </div>
  );
}

export default Home;
