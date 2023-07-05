// import React from 'react'
import Qna from "./Qna"
const FAQ = ({questions}) => {
  return (
    <div style={{width:'600px',padding:'2rem'}}>
      <h1>Frequently Asked Questions</h1>
      <ul style={{listStyle:'none',padding:'0', margin:'0'}}>
        {questions.map((obj,i)=>{
            if(i===0) return <Qna key={obj.question} question={obj.question} answer={obj.answer} toggle={true}/>
        return <Qna key={obj.question} question={obj.question} answer={obj.answer} toggle={false}/>
        }
             )
             
             
             }
      </ul>
    </div>
  )
}

export default FAQ
