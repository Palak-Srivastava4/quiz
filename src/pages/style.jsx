import styled from "styled-components";

export const Blur = styled.div`
    /* background-color: white;
  height: 100vh;
  width: 100%;
  z-index: -1; */
`;
export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(50vh);
`;
export const Wrapper = styled.div`
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 4;
`;
export const Circle = styled.div`
width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #000;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 .5s alternate infinite ease;

  @keyframes circle7124 {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}
&:nth-child(2) {
  left: 45%;
  animation-delay: .2s;
}
&:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}
`;
export const Shadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 .5s alternate infinite ease;
  @keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: .7;
  }

  100% {
    transform: scaleX(.2);
    opacity: .4;
  }
}

&:nth-child(4) {
  left: 45%;
  animation-delay: .2s
}

&:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}

`;

export const Home = styled.div`
      display: flex;
     align-items: center;
     justify-content: center;
     /* height: 70vh;
     width: 60%; */
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   margin: 4% 14%;
     padding: 40px;
     z-index: 1;
     background-color: rgba(236, 235, 235, 0.781);
       @media (max-width: 660px){
    padding: 0;
    margin: 0 4%;
  }
`;
export const Start = styled.div`
display: flex;
`;
export const QuizImage = styled.div`
  margin-top: -10px;
  margin-right: 10px;
  @media (max-width: 660px){
    display: none;
  }
`;
export const Title = styled.div`
  justify-content: center;
  align-items: center;
  h4{
    font-size: 54px;
  font-weight: 700;
  color: #2a2a2a;
  margin-top: 20px;
  margin-bottom: 0px;
    @media (max-width: 660px){
    text-align: center;
    font-size: 42px;
  }
  }
  p{
  font-size: 22px;
color: grey;
line-height: 32px;
margin-right: 20px;
text-align: justify;
  @media (max-width: 660px){
    font-size: 18px;
    line-height: 22px;
    margin: 6%;
  }
}
`;
export const Button = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  /* margin: 0 240px 0 00px; */
  padding: 10px 20px;
  color: #5b5b5b;
  border: none;
  border-radius: 6px;
  background-color: rgb(130, 241, 124);
  cursor: pointer;
  @media (max-width: 660px){
    margin: 2% 28px 8% ;
  }
`;

export const Background = styled.div`
background-image: url(${props => props.$background});
background-repeat:no-repeat;
background-position:center;
background-size: cover;
 min-height:100vh;
display:flex;
justify-content:center;
align-items: center;
`;
export const Header = styled.div`
background-color: #fffbfbef;
min-height:90vh;
width:80%;
float:center;
/* width:60%; */
/* float:right; */
 @media (max-width: 600px){
  width: 100%;
  }
`;
export const Heading = styled.div`
background-color: #55eda1;
  font-size: 38px;
  font-weight: 700;
  padding-top:16px;
  padding-bottom:1px;
  padding-left:40px;
   @media (max-width: 600px){
    font-size: 28px;
    padding-left:2%;
    padding-top: 5%;
  }
span{
font-size: 26px;
display:flex;
justify-content:right;
margin-right:30px;
margin-top:-4px;
margin-left:6px;
  @media (max-width: 600px){
    font-size: 20px;
    margin-right: 0;
    margin-top: 1%;
  }
}
h5{
    font-size: 26px;
display:flex;
justify-content:right;
margin-right:30px;
margin-top:-36px;
@media (max-width: 600px){
    font-size: 28px;
  }
}
`;
export const QuizQuestions = styled.div`
    padding: 0 40px;
    @media (max-width: 600px){
    padding: 0 4%;
  }
    h2{
 font-size:28px;
      @media (max-width: 600px){
    font-size: 18px;
    font-weight: 400;
  }
}
`;
export const QuizOptions = styled.div`
    padding-left:16px;
    padding-right:46px;
font-size:22px;
font-weight: 500;
     @media (max-width: 600px){
    padding: 0 4% 0 0;
    font-size: 16px;
  }
ol{
    list-style: lower-roman;
}
span{
    color:white;
}
.option{
    margin: 20px auto;
    background-color: #017dd5;
    padding: 10px 20px;
  cursor: pointer;
}
.selectOption{
  background-color: black;
  color: white;
}
`;
export const ButtonPannel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
padding:50px;
  @media (max-width: 660px){
    padding: 5%;
  }
`;
export const Btn = styled.button`
position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
  height: 40px;
  border: none;
  padding: 0px 20px;
  background-color: black;
  color: white;
  font-size:20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #828282;
  transition-duration: .3s;
  @media (max-width: 660px){
    font-size: 14px;
    height: 26px;
    width: 66px;
    padding: 2%;
  }
`;

export const FeedbackContainer = styled.div`
/* display: flex;
  align-items: center;
  justify-content: center; */
  /* min-height: 100vh; */
  `;
export const Box = styled.div`
/* display: block; */
     /* align-items: center;
     justify-content: center; */
     /* width: 76%; */
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     padding: 0px 40px;
     background-color: rgba(236, 235, 235, 0.947);
      @media (max-width: 660px){
        padding:0px;
        width: 100%;
        }
`;
export const Form = styled.form`

.heading{
  text-align: center;
  font-size: 42px;
  font-weight: 600;
  margin-top: 60px;
  color: rgb(236, 138, 138);
  @media (max-width: 600px){
    font-size: 26px;
  }
  p{
    font-size: 20px;
    color: #828282;
    font-weight: 400;
    @media (max-width: 600px){
    font-size: 12px;
  }
  }
}
p{
  font-size: 26px;
  padding-left: 30px;
}
`;
export const Label = styled.label`
font-size: 18px;
  padding-left:20px;
  @media (max-width: 660px){
    font-size: 12px;
    padding: 0;
    margin: 2%;
  }

`;
export const StarLabel = styled.label`
font-size: 18px;
  padding-left:20px;
  @media (max-width: 660px){
    font-size: 12px;
    padding: 0%;
  }
`;
export const Input = styled.input`
  appearance: none;
  display: inline-block;
  width: 16px;
  height: 16px;
  padding: 3px;
  background-clip: content-box;
  border: 0.1px solid #bbbbbb;
  border-radius: 50%;

&:checked {
  background-color: rgb(236, 138, 138);
}
`;
export const Container = styled.div`
 display: flex;
 /* align-items: end; */
 align-items: flex-start;
 p{
  font-size: 26px;
   @media (max-width: 660px){
    font-size: 16px;
    margin: 2% ;
    padding: 0;
  }
 }
  @media (max-width: 660px){
display: inline-block;
  }
`;
export const Review = styled.div`
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-top: 40px;
   @media (max-width: 600px){
    padding-left: 0;
  }
  textarea{
     height: 120px;
  width: 340px;
  padding: 10px;
  }
`;
export const Overall = styled.div`
  /* padding-left: 120px; */
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   @media (max-width: 600px){
padding: 0;
  }
`;
export const Rate = styled.div`
p{
  margin-left: 50px;
  color: rgb(101, 101, 255);
  font-size: 32px;
   @media (max-width: 600px){
    font-size: 24px;
    margin-left: 44px;
    margin-top: 40px;
  }
}
`;
export const StarInput = styled.input`
  display: none;
`;
export const Star = styled.input`

`;
export const SubmitBtn = styled.div`
margin-top: 40px;
--color: rgb(236, 138, 138);
 padding: 0.8em 1.7em;
 background-color: transparent;
 border-radius: .3em;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 transition: .5s;
 font-weight: 400;
 font-size: 17px;
 border: 1px solid;
 font-family: inherit;
 text-transform: uppercase;
 color: var(--color);
 z-index: 1;

&::before, &::after {
 content: '';
 display: block;
 width: 50px;
 height: 50px;
 transform: translate(-50%, -50%);
 position: absolute;
 border-radius: 50%;
 z-index: -1;
 background-color: var(--color);
 transition: 1s ease;
}

&::before {
 top: -1em;
 left: -1em;
}

&::after {
 left: calc(100% + 1em);
 top: calc(100% + 1em);
}

&:hover::before, &:hover::after {
 height: 410px;
 width: 410px;
}

&:hover {
 color: rgb(10, 25, 30);
}

&:active {
 filter: brightness(.8);
}

`;

export const Btnpos =styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-bottom:20px;
`;
export const LoginForm = styled.form`
background-color:#ffffff61;
width:36%;
text-align:center;
/* border: 2px solid lightgray; */
/* border-radius:6px; */
padding:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
gap: 30px;
@media (max-width:660px){
  width: 100%;
  margin: 0 6%;
}
span{
    color:black;
    text-decoration:underline;
    cursor: pointer;
    font-weight:600;
}
h6{
  color:red;
  
}
input{
    height: 40px;
  background-color: white;
  outline: none;
  width: 70%;
  border: none;
  padding: 8px 20px;
  color: #424242;
  font-weight: 500;
  font-size: 16px;

}
`;
export const LogInput = styled.input`
  /* height: 40px; */
  /* background-color: white; */
  outline: none;
  /* width: 70%; */
  border: none;
  /* padding: 8px 20px; */
  color:white;
  &::placeholder {
    color: #424242;
    font-weight: 500;
    /* font-size: 16px; */
  }
`;
export const ScoreSection = styled.div``;
export const ResultHeader = styled.div`
font-size: 42px;
font-weight: 700;
color: #424242;
display: flex;
justify-content: center;
align-items: center;
padding: 30px 120px;
  @media (max-width: 660px){
    font-size: 32px;
    padding: 0;
    margin-top: 16%;
  }
`;
export const ResultDetails = styled.div`
h1{
  text-align: center;
  @media (max-width: 660px){
    font-size: 28px;
  }
}`;
export const CardContainer = styled.div`
 position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 660px){
    flex-direction: column;
    margin: 0;
  }
  &:hover .glass {
  transform: rotate(0deg);
  margin: 40px 14px;
}

&::before {
  content: attr(data-text);
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: #1c1c1c; */
}
`;
export const Card = styled.div`
h6{
  font-weight: 400;
  font-size: 16px;
  margin:40px 0 10px 0;
}
p{
  font-size: 42px;
  font-weight: 600;
  margin: 10px;
}
text-align: center;
position: relative;
  width: 180px;
  height: 160px;
  background: linear-gradient(#6fa2e082, transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  /* display: flex;
  flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  transition: 0.5s;
  border-radius: 10px;
  margin: 40px -55px;
  backdrop-filter: blur(10px);
  transform: rotate(calc(var(--r) * 1deg));
/*  
  &::before {
  content: attr(data-text);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
} */
`;
