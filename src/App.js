import React, { setGlobal, useGlobal } from 'reactn';
import { render } from "react-dom";
import './App.css';
import GatorTrap from './GatorTrap';

// Initialize our state:
setGlobal({
  baits: ["fish", "turtle", "coypu", "muskrat", "deer"],
  caught: 0
});

const GatorCatchinApp = () => {
  const [caught] = useGlobal('caught');
  return (
    <div>
      <h1>Gator Catchin' App</h1>
      <GatorTrap />
      <GatorTrap />
      <GatorTrap />
      <GatorTrap />
      <GatorTrap />
      <h2>Caught: {caught}</h2>
    </div>
  )
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<GatorCatchinApp />, container);
