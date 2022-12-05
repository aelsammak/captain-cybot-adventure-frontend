import styled from "styled-components";

export const QuestionContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50.781vw;
    height: 40vw;
    transform: translate(-50%, -50%);
    border-radius: 1.172vw;
    background: #000A;
    align-items: center;
    text-align: center;
    padding: 2% 3% 0% 3%;
    border: 0.2vw solid white;
` 

export const QuestionTypeText = styled.h1`
    padding-bottom: 3.5%;
    color: #fff;
    font-weight: 800;
    font-size: 1.5vw;
`

export const HowToPlayText = styled.h1`
    padding-bottom: 3.5%;
    color: #fff;
    font-weight: 400;
`

export const ScrmabledWordText = styled.h1`
    padding-bottom: 10%;
    padding-top: 10%;
    color: #fff;
    font-weight: 800;
    font-size: 1.953vw;
`

export const InputDiv = styled.div`
    position: relative; 
    width: 100%;
`

export const Line = styled.hr`
    background-color: #c548ff;
    margin: auto; 
    width: ${(props) => props.width};
    height: 0.195vw;
    border: 0.1px solid black;
`

export const BackgroundImg = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.img});
    background-size: cover;
`

export const Error = styled.p`
    color: red;
    font-size: 0.469vw;
`

export const ErrorContainer = styled.div`
    padding-top: 3.5%;
    height: 100%;
    width: 100%;
    text-align: center;
    padding-bottom: 3.5%;
`

export const Wrapper = styled.div`
  margin: auto;
  padding: 0.391vw;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial sans-serif;
  color: white;
  width: 100%;
  text-align: center;
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
`

export const CrosswordContainer = styled.div`
    display: flex;
    color: white;
    padding-top: 2%; 
    font-size:0.8vw;
    .crossword.correct {
    rect {
      stroke: rgb(100, 200, 100) !important;
    }
    svg > rect {
      fill: rgb(100, 200, 100) !important;
    }
    text {
      fill: rgb(100, 200, 100) !important;
    }
  }

  .clue.correct {
    ::before {
      content: '\u2713'; /* a.k.a. checkmark: ✓ */
      display: inline-block;
      text-decoration: none;
      color: rgb(100, 200, 100);
      margin-right: 0.25em;
    }

    text-decoration: line-through;
    color: rgb(130, 130, 130);
  }
`
