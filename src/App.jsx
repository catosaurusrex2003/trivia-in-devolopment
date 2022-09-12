import React from "react"
import Home from "./home.jsx"
import Page from "./page.jsx"

export default function App(){
  //change defaulte state back to false when done
  let [start,set_start] = React.useState(true)

  function startgame(){
    set_start(true)
  }
  return(
    <div>
      {start?<Page/>:<Home onClick = {startgame}/>}
    </div>  
  )
}