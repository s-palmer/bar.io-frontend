import { useState } from "react";

const UserInputForm = () => {
  const [text, setText] = useState('')
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log({text})
  }

  const handleChange = (event) =>{
    setText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={text} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>


    // <form>
    //   <input type='text' placeholder='enter postcode' value={text}>
    //   </input>
    //   <input type='submit' value='enter'>
    //   </input>
    // </form>
  )
}






export default UserInputForm
