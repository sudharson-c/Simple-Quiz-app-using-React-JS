// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// import AddQuestion from './AddQuestion';

const CreateQuiz = () => {
    const [quizName,setName] = useState("");
  return (
    <div>
        <label htmlFor="quizName">Enter Quiz name:  </label>
        <input type="text" id="quizName" value={quizName} onChange={(e)=>{setName(e.target.value)}}/><br/>
        <AddQuestion />
    </div>
  )
}

export default CreateQuiz