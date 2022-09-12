import React from "react"


// need to pass incorrect and  correct and then jumbel them and then diplay
// then i need to store the choosen value into state to check if the value gotten is 
// correct or not to calculate score
function Multiple(props){
    let all_answers = [...props.incorrect_answers,props.correct_answer]
    let shuffled_answers = all_answers.sort((a,b) => 0.5 - Math.random());
    return(
        <div>
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {1}

            >{shuffled_answers[0]}</button> 
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {2}

            >{shuffled_answers[1]}</button>  
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {3}

            >{shuffled_answers[2]}</button>  
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {4}

            >{shuffled_answers[3]}</button>
        </div>
    )
}

function Bool(props){
    let correct_answer = props.correct_answer
    return(
        <div>
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {1}

            >True</button> 
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {2}

            >False</button>
        </div>
    )
}

export default function Question(props){
    let question = props.question
    const correct_answer = props.correct_answer
    const difficulty = props.difficulty
    const incorrect_answers = props.incorrect_answers
    const type = props.type

    return(
    <div className="each_question">
        <p className="props_question">{question}</p>
        {type == "multiple"  ? 
            <Multiple 
                incorrect_answers = {incorrect_answers} 
                correct_answer = {correct_answer}
                button_onclick = {props.button_onclick}
                id = {props.id}
                />
            : 
            <Bool
                incorrect_answers = {incorrect_answers} 
                correct_answer = {correct_answer}
                button_onclick = {props.button_onclick}
                id = {props.id}
            /> 
        }
    </div>
        
    )
}