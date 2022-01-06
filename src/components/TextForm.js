import React, { useState } from 'react'

export default function TextForm(props) {

    //~ State 
    const [text, setText] = useState("");
    //! useState is Hook 
    //! Hooks are functions that let you “hook into” React state and 
    //! lifecycle features from function components. 

    // text = "new text"; // WRONG WAY TO CHANGE THE STATE
    // setText = "new text"; // CORRECT WAY TO CHANGE THE STATE

    const handleUpClick = () => {
        // console.log('Uppercase was clicked : ' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        // console.log('Lowercase was clicked : ' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        alert("Copied to Clipboard !!")
    }

    const reverseString = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value)
    }

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" placeholder='Start typing, or copy and paste your document here...'></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mb-2 me-1' onClick={handleUpClick}>TO UPPERCASE</button>
                <button disabled={text.length === 0} className='btn btn-primary mb-2 me-1' onClick={handleLowClick}>to lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mb-2 me-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className='btn btn-primary mb-2 me-1' onClick={reverseString}><i class="fas fa-exchange-alt"></i> Reverse</button>
            </div>
            <button disabled={text.length === 0} className='btn btn-success me-1' onClick={handleCopy}><i class="far fa-copy"></i> Copy</button>
            <button disabled={text.length === 0} className='btn btn-danger me-1' onClick={handleClear}><i class="fas fa-eraser"></i> Clear</button>

            <div className='my-3'>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to Prewiew!!"}</p>
            </div>
        </>
    )
}
