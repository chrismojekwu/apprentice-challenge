import './App.css';
//import data from './components/data';
import Question from './components/Question';
import { useState } from 'react';

function App() {
  const [correct, setCorrect] = useState("");
  let [number, setNumber] = useState(0);
  const [answer, setAnswer] = useState();
 // const [questionNumber, setQuestionNumber] = useState(0);
  let [score, setScore] = useState(0);

  const submit = (e) => {
    e.preventDefault()

    if(answer === correct){
      setScore(score++)
       setNumber(number++)
    } else {
    setNumber(number++)
    }
};

  //console.log(correct)


  return (
    <div className="App">
      <form onSubmit={e => submit(e)}>
      <Question number={number} score={score} setCorrect={setCorrect} setAnswer={setAnswer} setNumber={setNumber} />
        <input type="submit"/>
        </form>
        
        <p>
          {score}/10
        </p>
    </div>
  );
}

export default App;
