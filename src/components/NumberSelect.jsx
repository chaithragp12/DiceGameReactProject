
import React, { useState } from 'react'
import styled from 'styled-components'








const NumberSelect = ({setError,error,selected, setSelecetd}) => {
   const nums=[1,2,3,4,5,6];

   const handleNumberSelector=(value)=>{
    setSelecetd(value);
    setError("")
   }


  return (
    <NumberSelectorContainer>
         <p className='e'>{error}</p>
        <div className='flex'>
        {nums.map((num,i)=>
        <Box 
        isSelected={num ===selected}
        key={i} 
        onClick={()=>handleNumberSelector(num)}>{num}</Box>
        )}
        </div>
        <p>Select Number</p>
  </NumberSelectorContainer>
    
  )
}

export default NumberSelect

const NumberSelectorContainer=styled.div`
   display: flex;
   flex-direction: column;
      .e{
        color: red;
      }
    .flex{
        display: flex;
        gap: 24px;
        align-items: end;
    }
    p{
        font-size:24px;
        font-weight: 700px;
    }
  
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    display: grid;
    border: 1px solid black;
    place-items: center;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>props.isSelected?"black":"white"};
    color:${(props)=>props.isSelected?"white":"black"};
`
