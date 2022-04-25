import {useCallback, useState, useEffect} from "react";
import {nanoid} from "nanoid";
import Instructions from "./components/Instructions";
import Start from "./components/Start";
import Game from "./components/Game";

import "./App.scss";

type TDifficulty = {
  preset: string,
  amount: number
}

type TGetRandomDice = {
  id: string,
  value: number,
  isHeld: boolean
}

type TDifficultyEvent = {
  label: string,
  value: number
}


function App() {
  
  const [difficulty, setDifficulty]  = useState<TDifficulty>({preset: "Normal", amount: 6})
  const [numbers, setNumbers] = useState(generateNewDices())
  const [completed, setCompleted] = useState<boolean>(false)
  const [roll, setRoll] = useState<number>(1)
  const [timer, setTime] = useState<number>(0)
  const [gameStarted, setGameStarted] = useState<boolean>(false)
  

  const bestTimeHandler = useCallback(
    () => {
      if(!localStorage.getItem("tenzies-best-time") ) {
        localStorage.setItem("tenzies-best-time", timer.toString())
      }
      let bestTime:string = localStorage.getItem("tenzies-best-time") || ""
      if(timer < +bestTime) {
        localStorage.setItem("tenzies-best-time", timer.toString())
      }
    },
    [timer],
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
    if(gameStarted && !completed) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime + 1 )
      }, 1000)

      return() => {
        clearInterval(interval);
      }
    }
  }, [timer, gameStarted, completed])


  function difficultyHandler(event:TDifficultyEvent) {
    setDifficulty(prevDifficulty => {
      return {
        ...prevDifficulty,
        preset: event.label,
        amount: event.value
      }
    })
  }


  function getRandomDice():TGetRandomDice {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * difficulty.amount), 
      isHeld: false 
    }
  }


  function startGameHandler():void {
    setNumbers(generateNewDices())
    setGameStarted(true)
  }
  
  function generateNewDices():TGetRandomDice[] {
    let dices = []
    for(let i = 0; i < 10; i++) {
      dices.push(getRandomDice())
    }
    return dices
  }


  function diceClickHandler(id:string):void {    
    setNumbers(prevNumbers => prevNumbers.map(number => {
      return number.id === id ? {...number, isHeld: !number.isHeld} : number
    }))
  }


  function rollDices():void {
    if(!completed) {
      setRoll(prevRoll => prevRoll + 1)
      setNumbers(prevNumbers => prevNumbers.map(number => {
        return number.isHeld ? number : getRandomDice()
      }))
    }
  }


  function resetGameHandler():void {
      setNumbers(generateNewDices())
      setRoll(1)
      setTime(0)
      setGameStarted(false)
      setCompleted(false)
  }


  return (
    <main id="main-screen">
      <Instructions 
        gameStarted={gameStarted} 
        difficultyHandler={(event:any) => difficultyHandler(event)}
        difficulty={difficulty}
      />
      {!gameStarted 
        ? <Start 
            startGame={startGameHandler} 
          />
        : <Game 
            diceClickHandler={diceClickHandler}
            resetGameHandler={resetGameHandler}
            completed={completed}
            timer={timer}
            roll={roll}
            numbers={numbers}
            rollDices={rollDices}
          />
      }
    </main>
  );
}

export default App;
