import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>convert to uppercase</button>
                    <button className="btn btn-primary mx-3" onClick={handleLowClick}>convert to lowercase</button>
                </div>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm