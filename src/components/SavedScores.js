import {useState, useEffect} from 'react';

function SavedScores(props) {
    const [savedScores, setSavedScores] = useState([])
    

    useEffect(()=> {
      if(localStorage.getItem("scores") === null){
        setSavedScores(null);
      }
      setSavedScores(JSON.parse(localStorage.getItem("scores")));
    },[props.showScore])

    return (
        <div className="saved-scores" style={{ display: props.showScore === false ? "none": "flex"}}>
        { savedScores === null ? "No Saved Scores!" :
        savedScores.map((score,index) => {
          return (
             <div className="score-card" key={index}>
              <h5>Score {index + 1}</h5>
              <div className="local-scores">
                <h6 className="local-title">Round 1</h6>
                  {score.one}
                <h6 className="local-title">Round 2</h6>
                  {score.two}
                <h6 className="local-title">Total</h6> 
                  {score.total} 
              </div>                     
             </div>
          )
        })}
      </div>  
    )
}

export default SavedScores;