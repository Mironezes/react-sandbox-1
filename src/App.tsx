import React from 'react';
import Start from './components/Start';
import Game from './components/Game';
import {nanoid} from 'nanoid';

import './App.css';

function App() {

  const DIFFICULTY = 6;
  
  const [numbers, setNumbers] = React.useState(allNewDice())
  const [tenzie, setTenzie] = React.useState(false)
  const [roll, setRoll] = React.useState(1)
  const [time, setTime] = React.useState(0)
  const [gameStart, setGameStart] = React.useState(false)


  function getRandomDice() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * DIFFICULTY ), 
      isHeld: false 
    }
  }


  function allNewDice():any[] {
    let arr = []
    for(let i = 0; i < 10; i++) {
        arr.push(getRandomDice())
    }
    return arr
  }
  

  React.useEffect(() => {
    let condition1 = numbers.every(number => {
      return number.isHeld
    })
    let firstValue = numbers[0].value
    let condition2 = numbers.every(number => {
      return number.value === firstValue
    })

    if(condition1 && condition2) {
        setTenzie(true)
        bestTimeHandler()
    }
  }, [numbers])
  

  React.useEffect(() => {
    if(gameStart && !tenzie) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime +1 )
      }, 1000)

      return() => {
        clearInterval(interval);
      }
    }
  }, [time, gameStart, tenzie])


  function diceClickHandler(id:string) {    
    setNumbers(prevNumbers => prevNumbers.map(number => {
      return number.id === id ? {...number, isHeld: !number.isHeld} : number
    }))
  }


  function rollDices() {
    if(!tenzie) {
      setRoll(prevRoll => prevRoll + 1)
      setNumbers(prevNumbers => prevNumbers.map(number => {
        return number.isHeld ? number : getRandomDice()
      }))
    }
    else {
      setNumbers(allNewDice())
      setTenzie(false)
    }
  }


  function bestTimeHandler() {
    if(!localStorage.getItem('tenzies-best-time') ) {
      localStorage.setItem('tenzies-best-time', time.toString())
    }
    let bestTime:string = localStorage.getItem('tenzies-best-time') || ''
    if(time < +bestTime) {
      localStorage.setItem('tenzies-best-time', time.toString())
    }
  }
  

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to 
      freeze it at its current value between rolls.</p>
      {!gameStart 
        ? <Start 
            startGame={() => setGameStart(true)} 
          />
        : <Game 
            diceClickHandler={diceClickHandler}
            tenzie={tenzie}
            time={time}
            roll={roll}
            numbers={numbers}
            rollDices={rollDices}
          />
      }
    </main>
  );
}

export default App;
