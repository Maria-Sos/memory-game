import './App.css';
import Board from "./components/Board";
import {useEffect, useState} from "react";

function App() {
  const faces = ['☀️', '🟧', '♥️', '🟣', '👁', '🔳'];
  const [field, setField] = useState([])
  const [score, setScore] = useState([])

  const startGame = () => {
	const newField = new Array(12).fill(null).map(el => ({
	  id: Math.random(),
	  name: '',
	  isOpen: false
	}));

	for (let i = 0; i < faces.length; i++) {
	  for (let j = 0; j < 2; j++) {
		let index;
		do {
		  index = Math.trunc(Math.random() * 12)
		}
		while (newField[index].name !== '')
		newField[index].name = faces[i]
	  }
	}
	setField(newField)
	setHistory([])
  }
  const [history, setHistory] = useState([])

  const openCard = (id) => {
	if (field.filter(el => el.id === id)[0].isOpen === false) {
	  const newField = field.map(el => el.id === id ? {...el, isOpen: true} : el)
	  setField(newField)
	  setHistory([...history, newField.filter(el => el.id === id)[0].name])
	}
  }
  console.log(history)

  const checkPairs = () => {
	console.log('check')
	if (history[history.length - 1] !== history[history.length - 2]) {
	  const newField = field.map(el =>
		el.name === history[history.length - 1] || el.name === history[history.length - 2]
		  ? {...el, isOpen: false} : el)
	  setField(newField)
	}
  }

  const counterScore = () => {
	if (field.filter(el => el.isOpen === true).length === 12) {
	  setScore([...score, history.length / 2])
	}
  }

  useEffect(() => {
	if (history.length % 2 === 0) {
	  setTimeout(() => {
		checkPairs()
	  }, 500)
	}
	counterScore()
  }, [history])


  return (
	<div className="App">
	  <svg viewBox="0 0 1320 300">
		<text x="50%" y="50%" dy=".35em" textAnchor="middle">MEMORY GAME</text>
	  </svg>
	  <div>
	  <button className='main-btn' onClick={startGame}>{field.length === 0 ? 'Start Game' : 'Restart Game'}</button>
	  </div>
		<Board field={field} openCard={openCard}/>
	  <h2>
		{field.filter(el => el.isOpen === true).length === 12 ? '🎉Congratulations!' : ''}
	  </h2>
	  <h3>
	  <div>
		{score.length === 0 ? '' : `Your score: ${score.join(', ')}`}
	  </div>
	  </h3>
	</div>
  );
}

export default App;
