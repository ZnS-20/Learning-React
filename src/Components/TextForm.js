import PropTypes from 'prop-types';
import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const toUpperCase = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to Upper Case!", "success");
        document.getSelection().removeAllRanges();
    }

    const toLowerCase = () => {
      setText(text.toLowerCase())
      props.showAlert("Converted to Lower Case!", "success")
      document.getSelection().removeAllRanges();
  }

  const toToggleCase = () => {
    let newText = ""
    for(let i=0;i<text.length;i++){
      if(text.charAt(i) >= 'A' && text.charAt(i) <= 'Z'){
        newText = newText.concat(text.charAt(i).toLowerCase());
      }
      else if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z'){
        newText = newText.concat(text.charAt(i).toUpperCase());
      }
      else{
        newText = newText.concat(text.charAt(i));
      }
    }
    setText(newText)
    props.showAlert("Converted to Toggle Case!", "success")
    document.getSelection().removeAllRanges();
  }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

  return (
    <>
    <div>
        <h1 style={{color : props.mode==='dark' ? 'white' : '#042743'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="text"
          rows="8"
          value={text}
          style={{backgroundColor: props.mode==='dark' ? '#042740' : 'white' ,
    color: props.mode==='dark' ? 'white' : '#042743'}}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" disabled={text.length===0} onClick={toUpperCase}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={toLowerCase}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={toToggleCase}>tOGGLE cASE</button>
    </div>
    <div className = "container" style={{color : props.mode==='dark' ? 'white' : '#042743'}}>
      <h1>Your text summary</h1>
      <p> {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters </p>
      <p> Minutes to read {text.length*0.008}</p>
      <h2>Preview Text</h2>
      <p> {text} </p>
    </div>
    </>
  );
}

TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: 'Insert your Text Below'
}