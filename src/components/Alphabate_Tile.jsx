import { useState } from 'react'
import "./style.css"
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'J', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function Alphabate_Tile() {
  const [result, setResult] = useState("")
  const [repeatVal, setRepeatVal] = useState(0)
  const handleClick = (value) => {
    if (result != "" && value === result[result.length - 1]) {
      if (repeatVal < 1) {
        setResult(result + value)
        setRepeatVal(repeatVal + 1)
      } else {
        var tempString = result.substring(0, result.length - 2) + "_"
        setResult(tempString)
        setRepeatVal(0)
      }
    } else {
      setResult(result + value)
      setRepeatVal(0)
    }
  }


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
