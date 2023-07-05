import React, { useState } from 'react'
import style from './Qna.module.css'

const Qna = ({question,answer,toggle}) => {
    const [isClicked, setClicked] = useState(toggle)
    const className= isClicked?style.clicked:style.unclicked;
  return (
    <div className={style.container} >
        <div style={{display:'flex', gap:'1rem'}}>
       <svg className={className} style={{justifySelf:"flex-start",alignSelf:'center'}} onClick={()=>{
setClicked(!isClicked)
       }}  width="16" height="19" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.31089 23.0692C1.97755 23.839 0.310889 22.8768 0.310889 21.3372L0.310889 2.28461C0.310889 0.745007 1.97756 -0.217242 3.31089 0.552558L19.8109 10.0788C21.1442 10.8486 21.1442 12.7731 19.8109 13.5429L3.31089 23.0692Z" fill="black"/>
</svg>


      <h3 >{question}</h3>
      </div>
  {isClicked &&    <p className={style.answer}>  {answer}</p>}
    </div>
  )
}

export default Qna
