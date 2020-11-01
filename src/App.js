import './App.css';
import Question from './components/Question';
import SavedScores from './components/SavedScores';
import { useState } from 'react';


function App() {
  const [correct, setCorrect] = useState("");
  const [answer, setAnswer] = useState("");
  let [number, setNumber] = useState(0);
  let [score, setScore] = useState(0);
  const [reveal, setReveal] = useState(false);
  const [roundOne, setRoundOne] = useState(0);
  const [roundTwo, setRoundTwo] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault()

    if(answer === ""){
      setMessage("Please select an answer :)");
      setTimeout(() => {
        setMessage("")
      }, 800);
      return false;
    }

    setReveal(true)

    if(answer === correct){
      setScore(score++)
       setNumber(number++)
    } 
    else {
    setNumber(number++)
    }

    setTimeout(() => {
     setReveal(false)
     setNumber(number++)
     if( answer === correct ){
        setScore(score++)
      } 
    }, 500) 

    if( number === 10 ){
      setRoundOne(score)
    }
    if( number === 20 ){
      setRoundTwo((score - roundOne))
    };
  };

  const clear = () => {
    setCorrect("");
    setAnswer("");
    setNumber(0);
    setScore(0);
    setRoundOne(0);
    setRoundTwo(0);
  }
   
  const renderSubmitButton = () => {
    return <input type="submit" className="submit" onClick={e => submit(e)}/>;
  }

  const renderClearButton = () => {
    return <button onClick={() => clear()}>Play Again</button>;
  }

  const saveScore = () => {
    const newScore = {
      one: roundOne,
      two: roundTwo,
      total: score
    }
    if(localStorage.getItem("scores") === null){
      localStorage.setItem("scores", JSON.stringify([newScore]));
      setMessage("Score Saved!");
      setShowScore(true);
      setTimeout(() => {
        setMessage("")
      },800);
    } else {
      const pastScores = JSON.parse(localStorage.getItem("scores"));
      pastScores.push(newScore);
      localStorage.setItem("scores", JSON.stringify(pastScores));
      setMessage("Score Saved!");
      setShowScore(true);
      setTimeout(() => {
        setMessage("")
      },800);
    }
  };

  const renderSaveScore = () => {
    return <button onClick={() => saveScore()}>Save Score</button>;
  };

  const clearSavedScores = () => {
    if(window.confirm("Is it okay if I delete your saved scores?") === true){
      localStorage.removeItem("scores");
      setShowScore(false);
      setMessage("Scores Cleared!");
      setTimeout(() => {
        setMessage("")
      },500);
    } else return false; 
  };

  const renderClearSavedScores = () => {
    return <button onClick={() => clearSavedScores()}>Clear Scores</button>;
  };
 

  return (
    <div className="App">
      
      <form className="quiz">       
          {
            number <= 20 ?
              <Question number={number} score={score} setCorrect={setCorrect} 
              setAnswer={setAnswer} setNumber={setNumber} /> 
            : "THANKS FOR PLAYING!"
          }       
        {number <= 20 ? renderSubmitButton(): ""}
        </form>

        <p className="reveal" style={{ display: reveal ? "block" : "none"}}>
          {correct}
        </p>
        
        <section className="current-scores">
          {number >= 10 ?  <h4>Round 1:</h4>: ""}
          <p className="round-one">
            {number >= 10 ? `${roundOne}/10`: ""}
          </p>

          {number >= 20 ? <h4>Round 2:</h4>: ""}
          <p className="round-two">
            {number >= 20 ? `${roundTwo}/10`: ""}
          </p>
          
          {number > 20 && answer === correct  ? <h4>Bonus Point!</h4> : ""}
            
        </section>  

        <p className="message">{message}</p>

        <div className="save">
          {number > 20 ? renderSaveScore() : ""}
        </div>   

        <div className="clear">
          {number > 20 ? renderClearButton() : ""}
        </div> 

        <button onClick={() => setShowScore(showScore => !showScore)}>
          {!showScore ? "Show Scores" : "Hide Scores"}
        </button>

        {localStorage.getItem("scores") === null ? "" : renderClearSavedScores()}

        <SavedScores showScore={showScore}/>       

    </div>
  );
}

export default App;
