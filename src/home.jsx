import React from "react"


export default function Home(props){
    return(
        <div className="home-page">
            <p className="home-page-title">Quizzical</p>
            <p className="home-page-desc">10 questions related to computer science</p>
            <button onClick = {props.onClick} className="start_but">Start quiz</button>
        </div>
    )
}