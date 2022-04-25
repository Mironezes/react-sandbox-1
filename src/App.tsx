import {useCallback, useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import Instructions from './components/Instructions';
import Start from './components/Start';
import Game from './components/Game';

import './App.scss';

function App() {
  interface IDifficulty {
    preset: string,
    amount: number
  }

  const [difficulty, setDifficulty]  = useState<IDifficulty>({preset: 'Normal', amount: 6})
  const [numbers, setNumbers] = useState(generateNewDices())
  const [completed, setCompleted] = useState<boolean>(false)
  const [roll, setRoll] = useState<number>(1)
  const [time, setTime] = useState<number>(0)
  const [gameStart, setGameStart] = useState<boolean>(false)
  

  function difficultyHandler(event:any) {
    setDifficulty(prevDifficulty => {
      return {
        ...prevDifficulty,
        preset: event.label,
        amount: event.value
      }
    })
  }

  interface IGetRandomDice {
    id: string,
    value: number,
    isHeld: boolean
  }
  function getRandomDice():IGetRandomDice {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * difficulty.amount), 
      isHeld: false 
    }
  }


  function startGameHandler() {
    setNumbers(generateNewDices())
    setGameStart(true)
  }
  
  function generateNewDices() {
    let dices = []
    for(let i = 0; i < 10; i++) {
      dices.push(getRandomDice())
    }
    return dices
  }


  const bestTimeHandler = useCallback(
    () => {
      if(!localStorage.getItem('tenzies-best-time') ) {
        localStorage.setItem('tenzies-best-time', time.toString())
      }
      let bestTime:string = localStorage.getItem('tenzies-best-time') || ''
      if(time < +bestTime) {
        localStorage.setItem('tenzies-best-time', time.toString())
      }
    },
    [time],
  );


  useEffect(() => {
    let isAllHeld = numbers.every(number => {
      return number.isHeld
    })
    let firstValue = numbers[0].value
    let isAllSame = numbers.every(number => {
      return number.value === firstValue
    })

    if(isAllHeld && isAllSame) {
        setCompleted(true)
        bestTimeHandler()
    }
  }, [numbers, bestTimeHandler])
  

  useEffect(() => {
    if(gameStart && !completed) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime + 1 )
      }, 1000)

      return() => {
        clearInterval(interval);
      }
    }
  }, [time, gameStart, completed])


  function diceClickHandler(id:string) {    
    setNumbers(prevNumbers => prevNumbers.map(number => {
      return number.id === id ? {...number, isHeld: !number.isHeld} : number
    }))
  }


  function rollDices() {
    if(!completed) {
      setRoll(prevRoll => prevRoll + 1)
      setNumbers(prevNumbers => prevNumbers.map(number => {
        return number.isHeld ? number : getRandomDice()
      }))
    }
  }

  function resetGameHandler() {
      setNumbers(generateNewDices())
      setRoll(1)
      setTime(0)
      setGameStart(false)
      setCompleted(false)
  }

  return (
    <main id='main-screen'>
      <Instructions 
        gameStart={gameStart} 
        difficultyHandler={(event:any) => difficultyHandler(event)}
        difficulty={difficulty}
      />
      {!gameStart 
        ? <Start 
            startGame={startGameHandler} 
          />
        : <Game 
            diceClickHandler={diceClickHandler}
            resetGameHandler={resetGameHandler}
            completed={completed}
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
