import React,{useState} from 'react'
import GameContainer from './GameContainer'

const GameController = (props) => {
    // Score calculator
    const [score, setScore] = useState(0)

    //HighScore calculator
    const [highScore, setHighScore] = useState(0)

    // to check if game is over
    

    // creating a stack to hold the position of selected card

    const[selectedCards, setSelectedCards] = useState([])
    const word = 'fuck'

    const handleScore = (isGameOver) =>{
        if(isGameOver){
            if (score > highScore){
                setHighScore(score)
            }
            setScore(
                0
            )
        }
        else{
            setScore(prevScore => prevScore + 1)
        }   
    }
  return (
    <div>
        <GameContainer handleScore={handleScore} setSelectedCards= {setSelectedCards} selectedCards={selectedCards}
        setScore={setScore} score= {score}highScore= {highScore} text = {word} />
    </div>
  )
}

export default GameController
