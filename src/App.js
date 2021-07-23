import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

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

	return (
		<div className="App">
			<h1>Counter Punch</h1>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>
		</div>
	);
}

export default App;
