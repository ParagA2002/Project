import React from 'react'
import styled from 'styled-components'
function Login() {
    return (
       <Container>
           <CTA>
               <CTAlogoone src="/images/cta-logo-one.svg" />
               <SignUp>
                   <a href="">GET ALL THERE</a>
               </SignUp>
               <Description>
                   Get Premium Acess to aya and the Last Dragon takes place in the fantasy world of Kumandra, where humans and dragons once were able to live together in harmony. When monsters threatened the land
                ..</Description>
                <CTAlogotwo src="/images/cta-logo-two.png" />
           </CTA>

       </Container>
    )
}

export default Login

const Container = styled.div`
    position : relative;
    height : calc(100vh - 80px);
    display : flex;
    align-items : top;
    justify-content : center;
    &:before{
        content : "";

        position : absolute;
        background-position  : top;
        background-size : cover;
        z-index : -1;
        background-repeat : no-repeat;
        background-image : url("/images/login-background.jpg");
        top : 0;
        bottom : 0;
        left : 0;
        right : 0;
        opactiy  : 0.7; 
    }

    `
    const CTA = styled.div`
        max-width : 650px;
        width : 75%;
        padding : 80px 40px; 
        display: flex;
        flex-direction : column;
        aiign-items : center;
        margin-top : 100px;
    `
    const CTAlogoone = styled.img``

    const SignUp = styled.div`
        background-color : #0063e5;
        display : flex;
        align-items : center;
        justify-content : center;
        border-radius : 5px;
        &:hover{
            background-color : #0483ee; 
        }
        a{
            color : #f9f9f9;
            padding : 17px 0;
            font-size :18px;
            letter-spacing : 1.5px; 
        }
    `
    const Description = styled.p`
        font-size : 11px;
        letter-spacing : 1.5px;
        line-height : 1.5;
        text-align : center;
    `
    const CTAlogotwo = styled.img`
        width : 100%;
    `