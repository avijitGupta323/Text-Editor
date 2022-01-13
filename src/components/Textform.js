import React, { useState } from "react";

export default function Textform(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // alert("Your text has been converted into Uppercase Successfully.");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // alert("Your text has been converted into Lowercase Successfully.");
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    // alert("Your text has Cleared Successfully.");
  };
  const handleTiClick = () => {
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
    } 
  const handleSeClick = () => {
    let newText = text.split(".").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join("."));
    } 
  const handleExClick = () => {
    let newText = text.replace(/\s + /g, ' ').trim();
    setText(newText)
  };
  const handleCoClick = () => {
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  const [preview, setPreview] = useState("");
  const change = ()=>{
    setPreview("Preview")
  }
  return (
  <div className = {`container-fluid bg-${props.color} text-${props.textColor}`}>
    <div className={`container pt-3 bg-${props.color}`}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h2>Enter Text</h2>
        <p>
          {text.length} Letters | {text.split(" ").length - 1} Words | {text.split(".").length-1} Sentences |  
           {0.008 * text.split(" ").length} Minutes read
        </p>
      </label>
      <textarea className={`form-control bg-${props.color2} text-${props.textColor}`}value={text} onChange={handleOnChange} onClick={change} id="exampleFormControlTextarea1"rows="18"></textarea>
      <button type="button"className={`btn btn-${props.buttonColor} mt-3 me-1`}onClick={handleUpClick}>Convert into Uppercase</button>
      <button type="button" className={`btn btn-${props.buttonColor} mt-3 me-1`} onClick={handleLoClick}>Convert into Lowercase</button>
      <button type="button" className={`btn btn-${props.buttonColor} mt-3 me-1`} onClick={handleSeClick} > Convert into Sentence Case</button>
      <button type="button" className={`btn btn-${props.buttonColor} mt-3 me-1`} onClick={handleTiClick} > Convert into Titlecase</button>
      <button type="button" className={`btn btn-${props.buttonColor} mt-3 me-1`} onClick={handleExClick} > Remove Extra Spaces</button>
      <button type="button" className={`btn btn-${props.buttonColor} mt-3 me-1`} onClick={handleClClick} > Clear Text</button>
      <button type="button" className={`btn btn-${props.buttonColor} mt-3 me-1`} onClick={handleCoClick} > Copy Text</button>
      <div className="container-center mt-2">
        <h3 className="text-center">{preview}</h3>
        <p>{text}</p> 
      </div>
    </div>
  </div>
  );
}
