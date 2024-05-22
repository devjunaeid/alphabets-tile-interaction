import { useState } from 'react'
import "./style.css"

// Alphabets list.
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'J', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function Alphabate_Tile() {
  const [result, setResult] = useState("") // Result state
  const [repeatVal, setRepeatVal] = useState(0) // Traking number of repeated values.

  // Each alphabets click hanndler function.
  const handleClick = (value) => {
    if (result != "" && value === result[result.length - 1]) { // check if the result is not empty and char is repeated
      // char repeated meaning. There is two same char in the result.
      if (repeatVal < 1) {
        setResult(result + value)
        setRepeatVal(repeatVal + 1)
      } else {
        // Replace repeated chars with "_".
        var tempString = result.substring(0, result.length - 2) + "_"
        setResult(tempString)
        setRepeatVal(0)
      }
    } else {
      setResult(result + value)
      setRepeatVal(0)
    }
  }

  // Resets the app state.
  const handleReset = () => {
    setResult("");
    setRepeatVal(0);
  }


  return (
    <div className="container">
      <input value={result} className='result' id='outputString' readOnly={true} />
      <div className='grid-cont'>
        {
          alphabets.map((element, index) => (
            <button onClick={() => handleClick(element)} key={index}>
              {element}
            </button>
          ))
        }
        <button className='reset-btn' onClick={() => handleReset()}>R</button>
      </div>
    </div>
  )
}

export default Alphabate_Tile
