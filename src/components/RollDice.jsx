import React, { useState } from 'react'
import styled from 'styled-components'
import image1 from "../assets/images/image1.png"
const RollDice = ({currentDate, roleDice}) => {

 

  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}> 
        <img src={image1} alt="dice Image"
      /></div>
      <p>Click On Dice to Roll</p>
     

    </DiceContainer>
  )
}

export default RollDice


const DiceContainer =  styled.div`
.dice{
  cursor: pointer;
}
img{
  width: 250px;
  height: 250px;
  border-radius: 10px;
}
p{
  font-size: 24px;
}
margin-top:48px ;
display: flex;
flex-direction: column;
align-items: center;
`
