import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
function Details() {

    const {id} =useParams();
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const [Movies, setMovies] = useState([])

 useEffect(() => {
     getMovies();
    //  getSelected();
 }, [])
 const getMovies = async () =>{
     const url ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
     
     let data = await fetch(url);
     let parsedData =await data.json();
     setMovies(parsedData.results);
 }
 console.log(Movies[0]);
 let w =Movies.filter((movie)=>{
    return movie.id == id
  });

    return (
        <Container>
            { w[0] &&  (
            <>
            <Background>
                <img src={IMGPATH+w[0].backdrop_path} alt="" />
            </Background>
                <ImageTitle>
                    <img src={IMGPATH+w[0].poster_path} alt="" />
                </ImageTitle>
            <Controls>
                <PlayBtn>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayBtn>
                <TrailerBtn>
                   <img src="/images/play-icon-white.png" alt="" />
                   <span>TRAILER</span>
                </TrailerBtn>
                <AddBtn>
                    <span>+</span>
                </AddBtn>
                <GroupWatchBtn>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchBtn>
            </Controls>
            <Text>
                <Subtitle>
                    { w[0].title}&nbsp;&nbsp;&nbsp;&nbsp; {w[0].release_date}
                </Subtitle>
                <Description> { w[0].overview} </Description>
            </Text>
            </>)}
           
        </Container>
    )
}

export default Details

const Container = styled.div`
    min-height : calc(100vh - 70px);
    // padding : 0 calc(3.5vw + 5px);
    position : relative;
`;
const Background = styled.div`
    
        postion : absolute;
        top : 0;
        left : 0;
        right: 0;
        bottom : 0;
        z-index : -1;
        opacity : 0.8;
    img{
        width: 100%;
        height: calc(100vh - 70px);;
        object-fix : cover; 
        }
`;

const ImageTitle = styled.div`
    height : 30vh;
    min-height:170px;
    width : 35vw;
    min-widht: 200px;
    position : absolute;
    top : 0;

    img{
        width : 100%;
        height : 100%;
        object-fit : contain;
    }
`

const Controls  = styled.div`
    position : absolute;
    padding : 0 0 0 20px;
    top : 32vh;
    left: 1;
    display: flex;
    align-items  : center ;  
    justify-content :space-between;
  
`
const PlayBtn = styled.div`
    display:flex;
    align-items : center;
    border : none;
    height : 56px;
    padding : 0 24px;
    margin-right : 22px;
    background : rgb(249,249,249);
    font-size : 15px;
    letter-spacing : 1.8px;
    cursor : pointer;
    span{
        color : black;
    }
    &:hover {
        background : rgb(198,198,198);          
    }
`
const TrailerBtn = styled.div`
display:flex;
align-items : center;
border : none;
height : 56px;
padding : 0 24px;
margin-right : 22px;
background : rgba(0, 0 ,0, 0.3);
border : 1px solid rgb(249,249,249);
color : rgb(249,249,249);
font-size : 15px;
letter-spacing : 1.8px;
cursor : pointer;

`
const AddBtn = styled.div`

    width :44px;
    height :44px;
    display: flex;
    align-items : center;
    justify-content : center;
    cursor : pointer;
    border-radius : 50%;
    background-color : rgba(0 ,0,0,0.6);
    border : 2px solid white;
    span{
      
        font-size : 30px;
        
    }
`
const GroupWatchBtn = styled.div`
    width :44px;
    height :44px;
    display: flex;
    align-items : center;
    cursor : pointer;
    justify-content : center;
    background-color : rgb(0 ,0,0);
    border-radius : 50%;
    border: 2px solid white;
    margin-left : 10px;
`

const Text  = styled.div`
    position : absolute;
    top : 39vh;
    max-width : 70vw;
    padding : 0 22px ;
    @media(max-width : 768px){
        width : 100%;
    }
`
const Subtitle  = styled.div`   
    margin-top : 26px;
    font-size : 15px;
    min-height: 20px; 
    color : rgb(249,249,249);
`
const Description = styled.div`
    color : rgb(249,249,249);
    line-height : 1.4;
    margin-top : 25px;
    
`