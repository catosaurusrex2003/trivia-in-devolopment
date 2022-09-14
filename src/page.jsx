import React from "react";
import data from "./data.jsx";
import Question from "./question.jsx";

export default function Page() {
  const [array_render, set_array_render] = React.useState();

  const [question_data, set_question_data] = React.useState();

  const [display_status , set_display_status] = React.useState(false);

  let blank_choice = [
    { id: 1, value: ""  , selected_but_id : ""  },
    { id: 2, value: ""  , selected_but_id : ""  },
    { id: 3, value: ""  , selected_but_id : ""  },
    { id: 4, value: ""  , selected_but_id : ""  },
    { id: 5, value: ""  , selected_but_id : ""  },
    { id: 6, value: ""  , selected_but_id : ""  },
    { id: 7, value: ""  , selected_but_id : ""  },
    { id: 8, value: ""  , selected_but_id : ""  },
    { id: 9, value: ""  , selected_but_id : ""  },
    { id: 10, value: "" , selected_but_id : ""  },
  ];
  
  const [choice, set_choice] = React.useState(blank_choice);




  // filtering data to make state of required data objects
  React.useEffect(() => {
    let array_of_data = data.results;
    let key = 0;
    let array_data = array_of_data.map((unit) => {
      key = key + 1;
      const question = unit.question;
      const correct_answer = unit.correct_answer;
      const difficulty = unit.difficulty;
      const incorrect_answers = unit.incorrect_answers;
      const type = unit.type;
      const id = key;
      return {
        question,
        correct_answer,
        difficulty,
        incorrect_answers,
        type,
        id,
      };
    });
    set_question_data(array_data);
  }, []);



  // saves the value of the button clicked into a atate
  function valueclicked(event , correct_answer) {
    let elementid = event.target.id;
    let but_id = event.target.getAttribute("but_id")
    
    set_choice((prev) => {
      let cache_array = prev.map((unit) => {
        return unit.id == elementid
            ? { ...unit, value: `${event.target.innerHTML}` , selected_but_id : `${but_id}` }
            : unit;
      });
      return cache_array;
    });
  }




  // adds all the props to <Question/>
  React.useEffect(() => {
    if (question_data != undefined) {
      let array_to_return = question_data.map((each) => {
        return (
          <Question
            question={each.question}
            correct_answer={each.correct_answer}
            difficulty={each.difficulty}
            incorrect_answers={each.incorrect_answers}
            type={each.type}
            id={each.id}
            button_onclick={(event) => valueclicked(event , each.correct_answer)}
            display_status = {display_status} // display_status ek state hai
            choice = {choice}                 // choice ek state hai
            question_data = {question_data}
          />
        );
      });
      set_array_render(array_to_return);
    }
  }, [question_data,choice, display_status]);



  React.useEffect(() => {
    // console.log("choice is ",choice);
  }, [choice]);



  return (
    <div>
      {array_render}
      <button className="show results" onClick = {() => { set_display_status(true)}} >Results</button>
    </div>
  )
}
