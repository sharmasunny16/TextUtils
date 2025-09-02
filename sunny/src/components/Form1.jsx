import React, { useState } from "react";

function Form1(props) {
  const [text, settext] = useState("");

  const handleUPclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("converted to UpperCase", "success")
  };
  const handleLoclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("converted to LowerCase", "success")
  };
  const handleClearclick = () => {
    let newtext = "";
    settext(newtext);
    props.showAlert("clear text", "success")
  };

  const handleOnChange = (Event) => {
    settext(Event.target.value);
  };
  const gettextcolor=()=>{
     if (props.mode === 'dark' || props.green26 === 'green') {
    return 'white';
  }
  return 'black';
};
const getBackcolor =()=>{
   if(props.mode==='dark')return 'grey'
    if(props.green26==='green')return '#1C352D'
    return "white";
}

  return (
    <div
      className="container"
      style={{ color: gettextcolor() }}
    >
      <h2> {props.heading}</h2>
      <div
        className="mb-3"
        style={{ color: gettextcolor() }}
      >
        <textarea
          className="form-control"
          style={{
            backgroundColor: getBackcolor(),
            color: gettextcolor(),
          }}
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter the message"
        ></textarea>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUPclick}
        >
          Convert to Uppercase{" "}
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLoclick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleClearclick}
        >
          Clear Text
        </button>
      </div>
    </div>
  );
}

export default Form1;
