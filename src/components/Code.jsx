// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Code.css"

const Code = () => {
  return (
    <div>
        <div className="code-box">
            <div className="header">
                <div className="left">
                    Question Name
                </div>
                <div className="right">
                    <ul>
                        <li>Python</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>Java</li>
                    </ul>
                </div>

            </div>
            <main>
                <code>
                    
                    Main code goess here...
                </code>
                <span className='copy'>copy</span>
            </main>
        </div>
    </div>
  )
}

export default Code