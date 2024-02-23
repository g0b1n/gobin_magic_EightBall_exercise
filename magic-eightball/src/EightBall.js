import React, {useState} from "react";
import "./EightBall.css"
import defaultAnswers from "./answers.json"
import { choice } from "./random"

// const EightBall = () => {
//     return (
//         <div className="EightBall">
//             <h1 className="EightBall-circle" onClick={{color: 'green'}}></h1>
//             <p className="EightBall-text">Think of a Question!!!</p>
//         </div>
//     )
// }


function EightBall ({ answers = defaultAnswers }) {
    const [ currentAnswer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: "black"
    });

    const handleClick = () => {
        const newAnswer = choice(answers);
        setAnswer(newAnswer);
    }

    return (
        <div className="EightBall" onClick={handleClick} style={{backgroundColor: currentAnswer.color}}>
            <b>{currentAnswer.msg}</b>
        </div>
    )
}
export default EightBall;