import React,{useState,useEffect} from 'react'

function GameContainer() {
    // creating a list of characters that will be in the game
    const charNames =['Denji','Power','Makima','Kobeni','Yoru','Himeno',
                      'Aki Hayakawa','Pochita','Angel','Captain Kishibe','Reze']
    const [characters, setCharacters]  = useState([])
    const [score, setScore] = useState(0)
    const [highScore,setHighScore] = useState(0)
    const [selectedCards, setSelectedCards] = useState([0])
    // A function that shuffles the order in which a character appears
    console.log("This is selected ",selectedCards)
    const shuffleChars = (charNames)=>{
      const shuffledChars = []
      const newChars = charNames
      console.log(charNames.length)
      for (let i = charNames.length;i>0 ; i--){
        let randomIndex = Math.floor(Math.random()*i)
        shuffledChars.push(newChars[randomIndex])
        newChars.splice(randomIndex,1)

      }
      return shuffledChars
    }


    const reshuffle = (charNames)=>
    {
      const shuffled = shuffleChars(charNames)
      console.log(shuffled)
      setCharacters(
        shuffled
      )
    }
    const updateScore = (character,cards) =>{
      if (!cards.includes(character))
      {
        setScore(
          score + 1
        )
        let newVal = cards.concat(character)
        setSelectedCards(newVal)
        
      }else{
        setSelectedCards(
          []
        )
        setScore(
          0
        )
        if (score > highScore){
          setHighScore(
            score
          )
        }

      }
    }

    useEffect(()=>{
      const charNames =['Denji','Power','Makima','Kobeni','Yoru','Himeno',
                      'Aki Hayakawa','Pochita','Angel','Captain Kishibe','Reze']
      console.log('This are charNames', charNames)
      console.log(charNames)
      reshuffle(charNames)
      
      
    },[])

  return (
    <div className='gameContainer'>
        <div className="scores">
          <h2>score {score}</h2>
          <h2>HighScore {highScore}</h2>
          </div>
      <div className='gameImage-'>
        
        
        {
          characters.map(character=>{
            return(
              <div>
                <img onClick={()=>
                  {reshuffle(charNames)
                    updateScore(character,selectedCards)}
                  } src={`/images/${character}.jpeg`} alt="" height={"300px"} width={"200px"}/>
              </div>
            )
            
          })
        }
      </div>
      
    </div>
  )
}

export default GameContainer