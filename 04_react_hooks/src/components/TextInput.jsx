import {useState} from 'react'

const TextInput = () => {
  const[inPutValue,setInPutValue] = useState("abc")

  const HandleChange = (e) =>{
    setInPutValue(e.target.value)
  }

  return (
    <div>
      <input type="text" value={inPutValue} onChange={HandleChange} />
      <p>你输入了{inPutValue}</p>
    </div>
  )
}

export default TextInput
