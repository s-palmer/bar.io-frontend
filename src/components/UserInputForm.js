import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import geoCoder from "../services/geoCoder";
import './Form/Form.css'

const UserInputForm = ({ setUserLocation, fetchBars, setUserInputPresent }) => {
  const [text, setText] = useState("");
  const [mins, setMins] = useState(15);

  const onSubmit = async (event) => {
    event.preventDefault();
    setUserInputPresent(true);
    console.log(text, mins);
    const res = await geoCoder(setUserLocation, text);
    fetchBars(res, mins);

    setText("");
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
      <form onSubmit={onSubmit} className="centre location-form">
        <div className="form-item">
          <label>
            <h3>Enter Postcode:</h3>
            <input
              type="text"
              placeholder="Ex. SW1A 1AA"
              value={text}
              onChange={setTextChange}
              data-testid="location-input"
              required
              className="location-input centre"
            />
          </label>
          <Box sx={{ width: 300 }} className="centre">
            <label>
              <h3>How many minutes do you want to walk?</h3>
              <Slider
                aria-label="How many minutes do you want to walk?"
                defaultValue={15}
                getAriaValueText={sliderValue}
                onChange={setMinutesChange}
                valueLabelDisplay="auto"
                step={5}
                marks={true}
                min={5}
                max={30}
                data-testid="minutes-input"
              />
            </label>
          </Box>
        <input type="submit" value="Submit" className="btn submit" data-testid="submit-btn"/>
        </div>
      </form>
    </div>
  );
};

export default UserInputForm;
