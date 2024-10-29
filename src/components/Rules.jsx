import React from 'react'
import styled from 'styled-components'

const Rules = ({open}) => {
  return (
    <RuleContainer><h1>
        How TO Play The Game
        </h1>
        <p> Select Any Number</p>
        <p> Click On Dice Image</p>
        <p> After Click On Dice If Selected number is equal to dice number you will get same score as dice</p>
        <p> If You guess wrong 2 points will be deducted </p>
        </RuleContainer>
  )
}

export default Rules

const RuleContainer = styled.div`
background-color: #FBF1F1;
padding: 20px;
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius:10px;

h1{
    font-size:24px;
    
}
.text{
    margin-top: 24px;
}
    
`