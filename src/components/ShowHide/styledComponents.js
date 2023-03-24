import styled from 'styled-components'

export const Container=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:linear-gradient(to right,#fa7257,#fc63a7);
    background-size:cover;
    min-height: 100vh;
`

export const Contain=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading=styled.h1`
    color:white;
    font-weight: bold;
    font-size:50px;
`

export const Con1=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:400px;
    @media screen and (max-width:576px){
        flex-direction: column;
        width:200px;
    }
`


export const Con2=styled.div`
    display:flex;
    flex-direction: column;
    margin:20px;
    
`

export const Button=styled.button`
    background-color:white;
    color:#dd1264;
    padding:10px;
    border-width:0px;
    border-radius:10px;
`

export const Para=styled.p`
    background-color:#fddddb;
    color:black;
    padding:20px;
    border-radius:10px;
    text-align: center;
`