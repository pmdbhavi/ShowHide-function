import {useState} from 'react'

import {Container,Contain,Heading,Con1,Con2,Button,Para} from './styledComponents'

const ShowHide=()=>{
    const [firstName,setFirstName]=useState(false);
    const [lastName,setLastName]=useState(false);

    const onClickFirstName=()=>{
        setFirstName(prevState=>(!prevState))
    }

    const onClickLastName=()=>{
        setLastName(prevState=>(!prevState))
    }

    return(
        <Container>
            <Contain>
                <Heading>Show/Hide</Heading>
                <Con1>
                    <Con2>
                        <Button onClick={onClickFirstName}>Show/Hide Firstname</Button>
                        {firstName && <Para>Joe</Para>}
                    </Con2>
                    <Con2>
                        <Button onClick={onClickLastName}>Show/Hide LastName</Button>
                        {lastName && <Para>Jonas</Para>}
                    </Con2>
                </Con1>
            </Contain>
        </Container>
    )
}

export default ShowHide