import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import geoCoder from "../services/geoCoder";

const UserInputForm = ( {setUserLocation} ) => {
  const [text, setText] = useState("");
  const [mins, setMins] = useState(15);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!text) {
      alert('Please enter a location')
      return
    }
    console.log({ text });
    console.log({ mins });

    geoCoder(setUserLocation, text);

    setText('');
  };

  const setTextChange = (event) => {
    setText(event.target.value);
  };

  const setMinutesChange = (event) => {
    setMins(event.target.value);
  };

  const sliderValue = (value) => {
    return `${value}`;
  };

  return (
    <div className="userInput">
      <form onSubmit={onSubmit}>
        <label>
          Enter Your Location:
          <input
            type="text"
            placeholder="Enter Postcode"
            value={text}
            onChange={setTextChange}
          />
        </label>
        <Box sx={{ width: 300 }}>
          <label>
            How far do you want to walk?
            <Slider
              aria-label="How far do you want to walk?"
              defaultValue={15}
              getAriaValueText={sliderValue}
              onChange={setMinutesChange}
              valueLabelDisplay="auto"
              step={5}
              marks={true}
              min={5}
              max={30}
            />
          </label>
        </Box>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserInputForm;
