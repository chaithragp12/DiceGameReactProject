import React, { useState } from 'react'
import styled from 'styled-components'
import image1 from "../assets/images/image1.png"
import image2 from "../assets/images/image2.png"
import image3 from "../assets/images/image3.png"
import image4 from "../assets/images/image4.png"
import image5 from "../assets/images/image5.png"
import image6 from "../assets/images/image6.png"
const RollDice = ({currentDate, roleDice}) => {

 

  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}> 
       <img src={currentDate==1 ? image1 :currentDate==2 ? image2 :currentDate==3 ? image3 :currentDate==4 ? image4 :currentDate==5 ? image5 :image6} alt="dice game"
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
