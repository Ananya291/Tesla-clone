import React from 'react'
import './Home.css'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container className='home'>
            <Section/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`