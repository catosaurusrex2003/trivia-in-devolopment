import React from "react"


// need to pass incorrect and  correct and then jumbel them and then diplay
// then i need to store the choosen value into state to check if the value gotten is 
// correct or not to calculate score
function Multiple(props){
    let shuffled_answers = [...props.incorrect_answers,props.correct_answer].sort((a,b) => 0.5 - Math.random());
    const selected_style = {backgroundColor : "#D6DBF5" }
    const correct_style = {backgroundColor : "#94D7A2" , Color : "black"}
    const wrong_style = {backgroundColor : "#F8BCBC" , Color : "#293264"}
    
    console.log("ABCDEFGHI")
    console.log(props.choice)
    return(
        <div>
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {1}
                style = {props.display_status? (props.correct_answer == props.choice[props.id-1].value ? correct_style : wrong_style) : (1 == props.choice[props.id-1].selected_but_id ?  selected_style : null) }

            >{shuffled_answers[0]}</button> 
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {2}
                style = {props.display_status? (props.correct_answer == props.choice[props.id-1].value ? correct_style : wrong_style) : (2 == props.choice[props.id-1].selected_but_id ?  selected_style : null) }

            >{shuffled_answers[1]}</button>  
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {3}
                style = {props.display_status? (props.correct_answer == props.choice[props.id-1].value ? correct_style : wrong_style) : (3 == props.choice[props.id-1].selected_but_id ?  selected_style : null) }

            >{shuffled_answers[2]}</button>  
            <button
                onClick = {props.button_onclick}
                id = {props.id}
                but_id = {4}
                style = {props.display_status? (props.correct_answer == props.choice[props.id-1].value ? correct_style : wrong_style) : (4 == props.choice[props.id-1].selected_but_id ?  selected_style : null) }

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
    // console.log("choice is ",props.choice[props.id-1])
    return(
    <div className="each_question">
        <p className="props_question">{question}</p>
        {type == "multiple"  ? 
            <Multiple
                incorrect_answers = {incorrect_answers} 
                correct_answer = {correct_answer}
                button_onclick = {props.button_onclick}
                id = {props.id}
                display_status = {props.display_status}
                choice = {props.choice}  
                
                />
            : 
            <Bool
                incorrect_answers = {incorrect_answers} 
                correct_answer = {correct_answer}
                button_onclick = {props.button_onclick}
                id = {props.id}
                display_status = {props.display_status}
                choice = {props.choice}  
                

            /> 
        }
    </div>
        
    )
}