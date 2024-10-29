import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'

const GamePlay = () => {
  const [selected, setSelecetd]=useState();
  const [currentDate, setCurrentDate] = useState(1);
  const [score, setScore] = useState(0);
 const[open ,setOpen] =useState(false);
  const[error, setError]=useState("");



  const generateRadomNumber=(min,max)=>{
    console.log(Math.floor(Math.random() * (max + min) + min))
    return Math.floor(Math.random() * (max + min) + min)
  }

  const handleReset=()=>{
    setScore(0);
  }

  const roleDice =()=>
    {
      
      if(!selected){
        //setOpen(true);
        setError("You Have not selected any Number")
        return;
      }
    // setError("")
        
   const randomNumber =generateRadomNumber(1,5);
      
      setCurrentDate((prev)=>randomNumber);

     


      if(selected ===randomNumber){
        setScore((prev)=>prev +randomNumber);
      }
      else{
        setScore((prev)=>prev-2)
      }
      setSelecetd(undefined)
    }


  const handleOpenrules=()=>{
    setOpen(true)
  }

  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelect 
       // open={open}
       setError={setError}
        error={error}
        selected={selected}
        setSelecetd={setSelecetd}
        />
        </div>
       <RollDice
       currentDate={currentDate}
       roleDice={roleDice} 
       />
       <div className="btns"><Button onClick={handleReset}>Reset</Button>
       <Button onClick={()=>setOpen((prev)=>!prev)}>{open? "Hide":"Show"} Rules</Button></div>
      {open && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.div`
padding-top: 70px;
.btns{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
 // max-width: 220px;
  align-items: center;
  gap: 10px;
}
    .top_section{
display: flex;
justify-content:space-around;
align-items:end    }
`
const Button=styled.button`
 
  color:white;
  padding: 10px 18px;
  //margin-left: 50px;
  
  background-color: black;
  border-radius: 5px;
  min-width:220px;
  border: none;
  font-size: 26px;
  transition: 0.4s background ease-in;
  cursor: pointer;
  &:hover{
    background-color: white;
    border:1px solid black;
    color: black;
    transition: 0.3s background ease-in;

  }
`
