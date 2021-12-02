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
        Location:
        <input type="text" placeholder="Enter Postcode" value={text} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}






export default UserInputForm
