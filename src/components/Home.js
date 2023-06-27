import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'

// import {setMovies} from '../features/movie/movieSlice'



function Home() {   
    

  
    return (
        <Container>
            <ImageSlider/>  
            <Viewers/>
            <Movies/>
        </Container>
    )
}

export default Home

const Container  = styled.div`
    min-height : calc(100vh - 70px);
    padding : 0 calc(3.5vw + 5px);
    position : relative;
    overflow: hidden;
    &:before {
        background  : url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position : absolute;
        top : 0;
        z-index: -1;
        right: 0;
        left: 0;
        bottom : 0; 

    }
`
