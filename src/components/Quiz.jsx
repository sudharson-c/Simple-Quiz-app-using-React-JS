import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from './data';

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [question, setQues] = useState(data[0]);
    const [selected, setSelect] = useState(false);
    const [score, setScore] = useState(0);
    const [finished, setFin] = useState(false);

    const handleNext = (index) => {
        if (index < data.length - 1 && selected) {
            setIndex(index + 1);
            setQues(data[index + 1]);
            setSelect(false);
            option_array.forEach((option) => {
                option.current.classList.remove("correct");
                option.current.classList.remove("incorrect");
            });
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
            setScore(score - 1);
            setQues(data[index - 1]);
            setSelect(false);
            option_array.forEach((option) => {
                option.current.classList.remove("correct");
                option.current.classList.remove("incorrect");
            });
        }
    };

    const handleFinish = () => {
        setFin(true);
    };

    const handleReset = () => {
        setScore(0);
        setFin(false);
        setIndex(0);
        setQues(data[0]);
        setSelect(false);
        option_array.forEach((element) => {
            element.current.classList.remove("correct");
            element.current.classList.remove("incorrect");
        });
    };

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!selected) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setSelect(true);
                setScore(score + 1);
            } else {
                e.target.classList.add("incorrect");
                setSelect(true);
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }
    };

    return (
        <div className="container">
            <h2 className="heading">Quiz</h2>
            <hr />
            {!finished ? (
                <>
                    <h3 className="question">{index + 1}:{question.question}</h3>
                    <ul>
                        <li ref={Option1} onClick={(e) => checkAns(e, 1)}> {question.option1}</li>
                        <li ref={Option2} onClick={(e) => checkAns(e, 2)}> {question.option2}</li>
                        <li ref={Option3} onClick={(e) => checkAns(e, 3)}> {question.option3}</li>
                        <li ref={Option4} onClick={(e) => checkAns(e, 4)}> {question.option4}</li>
                    </ul>
                    <div className="buttons">
                        {index > 0 && <button onClick={() => handlePrev(index)}>Prev</button>}
                        {index === 4 ? <button onClick={() => handleFinish()}>Finish</button> : <button onClick={() => handleNext(index)}>Next</button>}
                    </div>
                    <span className="remaining">{index + 1} of {data.length} questions </span>
                </>
            ) : (
                    <>
                        <h2>Thank you</h2>
                        <p>Your score is {score}/{data.length}</p>
                        <button onClick={() => handleReset()}>Play Again</button>
                    </>
                )}
        </div>
    );
};

export default Quiz;
