import React from "react"
import data from "./data.jsx"
import Question from "./question.jsx"

export default function Page(){

    const [array_render , set_array_render] = React.useState()

    const [question_data , set_question_data] = React.useState()

    const [choice , set_choice] = React.useState()

    // filtering data to make state of required data objects
    React.useEffect( ()=>{
        let array_of_data = data.results
        let key = 0
        let blank_choice = []
        let array_data = array_of_data.map(unit => {
            key = key + 1
            const question = unit.question
            const correct_answer = unit.correct_answer
            const difficulty = unit.difficulty
            const incorrect_answers = unit.incorrect_answers
            const type = unit.type
            const id = key

            blank_choice.push(
                { id : id , value : "" }
            )
            return(
                {
                    question,
                    correct_answer,
                    difficulty,
                    incorrect_answers,
                    type,
                    id
                }
            )
        })
        set_choice(blank_choice) // running again
        set_question_data(array_data)    
    },[])

    // saves the value of the button clicked into a atate
    function valueclicked(event){
        console.log("val;ue is",event.target.innerHTML)
        console.log("id is ",event.target.id)
        
        let elementid =  event.target.id

        set_choice(prev => {
            let cache_array = prev.map(unit => {
                console.log(unit)
                return(
                    unit.id == elementid ? {...unit , value : `${event.target.innerHTML}`} : unit 
                )
            })
            return(cache_array)
        })
        console.log(choice)

    }



    // adds all the props to <Question/>
    React.useEffect( ()=>{
        if(question_data != undefined){
            let array_to_return =  question_data.map(each => {
            return(<Question 
                        question = {each.question} 
                        correct_answer = {each.correct_answer} 
                        difficulty = {each.difficulty} 
                        incorrect_answers = {each.incorrect_answers}
                        type = {each.type}  
                        id = {each.id}
                        button_onclick = {(event) => valueclicked(event)}
                    />  )})
            set_array_render(array_to_return)
        }
    },[question_data]
    )

    

    return(
        <div>{array_render}</div>
    )
}