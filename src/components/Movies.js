import React , {useState,useEffect}from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Movies() {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
   const [Movies, setMovies] = useState([])
useEffect(() => {
    getMovies();
}, [])
const getMovies = async () =>{
    const url ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    
    let data = await fetch(url);
    let parsedData =await data.json();
    setMovies(parsedData.results);
}

    // console.log("moveis",Movies);
    
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>

                {Movies.map((movie)=>{
                    return(

                    <Wrap key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                        <img src={IMGPATH + movie.poster_path} alt="" />
                        </Link>
                    </Wrap>
                    )
                })}
         
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
   
`;

const Content = styled.div`
    margin-top : 48px;
    display : grid;
    grid-template-columns : repeat(4, minmax(0, 1fr));
    grid-gap : 25px;
`;

const Wrap = styled.div`
    border-radius : 10px;
    cursor : pointer;
    overflow : hidden;
    border : 3px solid rgba(249 ,249 , 249 ,0.1);
    box-shadow : rgb( 0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0  0 / 73%) 0px 16px 10px -10px; 
    transition : all 250ms cubic-bezire(0.25,0.46,0.45,0.94 ) 0s;

    img{
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    &:hover{
        transform : scale(1.05); 
        box-shadow : rgb( 0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0  0 / 72%) 0px 30px 22px -10px; 
        border-color : rgba(249,249,249,0.8);
}

`;
