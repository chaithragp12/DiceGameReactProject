import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img 
      src="https://clipart-library.com/images/rinraayrT.jpg"
      className='image'
      />
      <div className='content'><h1>Dice Game</h1> 
      <Button onClick={toggle}>Play NOw</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container=styled.div`
max-width: "1180px";
display: flex;
margin: 0 auto;
align-items: center;
//border: 1px solid red;

.image{
  width: 600px;
  height: 600px;
  
  padding: 60px;
}
.content{
  h1{
    font-size: 96px;
    white-space: nowrap;
    margin-left: 50px;
  }
}
`
const Button=styled.button`
 
  color:white;
  padding: 10px 18px;
  margin-left: 50px;
  
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
