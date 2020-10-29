import { useEffect } from 'react';
import data from './utils/data'

function Question(props) {
   
    useEffect(() => {
        let num = -Math.floor(Math.random() * (0 - 3) + 0) - 1;
        let swap = data[props.number].incorrect[num];
        data[props.number].incorrect[num] = data[props.number].correct;
        data[props.number].incorrect.push(swap);
        props.setAnswer("");
        props.setCorrect(data[props.number].correct);
    },[props.number]);
    
    
    const generateQuestion = () => {
        return (
            <>
            <h3>
                {data[props.number].question}
            </h3>
            <div>
                {data[props.number].incorrect.map((answer,index) => {
                    return (
                        <div key={index} >
                            <input type="radio" name="answers" value={answer}
                            onClick={() => props.setAnswer(answer)}
                            />
                            <label htmlFor={`Answer${index}`}>{answer}</label>
                        </div>
                    )
                })}
            </div>
            </>
        )
    }


    return generateQuestion();
         
    
}

export default Question;