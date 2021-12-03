import { render, screen } from "@testing-library/react"
import UserInputForm from "../UserInputForm"

test('user should be able to enter a location into a form', () => {
  render(<UserInputForm/>)
  const locationInput = screen.getByTestId('location-input');

  expect(locationInput).toBeEnabled();
})

test('location input should be required', () => {
  render(<UserInputForm/>)
  const requiredInput = screen.getByTestId('location-input');

  expect(requiredInput).toBeRequired();
})

test('user should be able to select a number of minutes', () => {
  render(<UserInputForm/>)

  const sliderInput = screen.getByTestId('minutes-input')
  expect(sliderInput).toBeEnabled();
})