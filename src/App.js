import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [dice, setDice] = useState(1);

	console.log(dice);

	// function to decrement count
	const decrementCount = () => {
		if (count > -10) {
			setCount(count - 1);
		}
	};

	// function to increment count
	const incrementCount = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	// function that spits random number
	const roll = () => {
		setDice(Math.ceil(Math.random() * 5 + 1));
	};

	const mapDice = () => {
		return dice.map((num) => <h1>{num}</h1>);
	};

	return (
		<div className="App">
			<h1>Counter Punch</h1>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>

			<h1>Dice Game</h1>
			<span>{dice}</span>
			<button onClick={roll}>Roll</button>
		</div>
	);
}

export default App;
