import { useEffect } from 'react';
import data from './data'

function Question(props) {
    //const [questions, setQuestions] = useState(data);
    //const [correct, setCorrect] = useState("");
    //const [number, setNumber] = useState("");
    //const questionNumber = () => {
      //  return -Math.floor(Math.random() * (0 - 21) + 0) - 1 
    //}
    //const [answer, setAnswer] = useState("");

    useEffect(() => {

        //Fisher-Yates Shuffle used to randomize the answer order.
        let m = data[props.number].incorrect.length, t, i;
        while(m) {
            
            i = Math.floor(Math.random() * (0 - 3) + 0)  ;

            t = data[props.number].incorrect[m];
            data[props.number].incorrect[m] = data[props.number].incorrect[i];
            data[props.number].incorrect[i] = t;
        }
    }, [props.number])

    const generateQuestion = () => {
        //const number = questionNumber();
        //props.setNumbers(numbers => [...numbers, number]);
        props.setCorrect(data[props.number].correct);

        //const choices = data[props.number].incorrect.push(data[props.number].correct);
        
        
        
        

        //I noticed duplicated answers would sometimes render, I feel like the issue is in the index generation in the
        // above while loop and I will do my best to fix down the line. 

        //data[props.number].incorrect = Array.from(new Set(data[props.number].incorrect))
        
        //console.log(data[number].incorrect)

        return (
            <>
            {data[props.number].question}

            <div>
                {data[props.number].incorrect.map((answer,index) => {
                    return (
                        <div key={index}>
                            <input type="radio" name="answers" value={answer} 
                            onClick={(e) => props.setAnswer(answer)}/>
                            <label htmlFor={`Answer${index}`}>{answer}</label>
                        </div>
                    )
                })}
            </div>
            </>
        )
    }

  
    //console.log(questionNumber(), questions)

    
    //const first = questionNumber();


    return generateQuestion()
    
}

export default Question;