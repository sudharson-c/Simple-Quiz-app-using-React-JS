/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleCorrectOptionChange = (e) => {
    setCorrectOptionIndex(parseInt(e.target.value));
  };

  return (
    <div>
      <h3>Enter question</h3>
      <br />
      <label htmlFor="question">Question:</label>
      <input
        type="text"
        name="question"
        id="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <br />
      <div className="answers">
        {[1, 2, 3, 4].map((index) => (
          <div key={index}>
            <label htmlFor={`option${index}`}>Option {index}:</label>
            <input
              type="text"
              name={`option${index}`}
              id={`option${index}`}
              value={options[index - 1]}
              onChange={(e) => handleOptionChange(index - 1, e.target.value)}
            />
            <br />
          </div>
        ))}
        <label htmlFor="correctOption">Choose correct Answer:</label>
        <select
          name="correctOption"
          id="correctOption"
          value={correctOptionIndex}
          onChange={handleCorrectOptionChange}
        >
          <option disabled value={null}>Choose a value</option>
          {[0, 1, 2, 3].map((index) => (
            <option key={index} value={index}>{`Option ${index + 1}`}</option>
          ))}
        </select>
        <br />
      </div>
    </div>
  );
};

export default AddQuestion;
