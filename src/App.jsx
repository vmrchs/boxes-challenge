import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";
import "./App.css";

export default function App() {
  // Declare new state variable called squares
  const [squares, setSquares] = React.useState(boxes);

  // To change background we create a function that toggles the boolean property of each square
  function toggle(id) {
    // We use setSquares to update our state, passing down a function to create a memory of our array of objects before any change happens
    setSquares((prevSquares) => {
      // We map over each square in the array we just created
      return prevSquares.map((square) => {
        // With a ternary operator we change the state of the square with the same id as the one we clicked
        return square.id === id ? { ...square, on: !square.on } : square;
        // the other ones return as they were
      });
    });
  }

  const squareElements = squares.map((square) => (
    // We map through squares and assign the data to each one as props
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
    // To use the data we need on the Element we click, we pass down a prop arbitrarily named toggle with an arrow function and the data we need as a parameter
  ));
  return <main>{squareElements}</main>;
}
