import styled from 'styled-components';


const StyledHome = styled.main`
    width: 70%;
    font-size: calc(2px + 1.5vw);
    text-align: center;
    background-color: #F5F5DC;
    padding: 1%;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledHeader = styled.h3`
    font-size: calc(20px + 1vw);
    margin-top: 40px;
    margin-bottom: 25px;
    color: #2c3e50;
`;

const StyledImage = styled.img`
    max-width: 80%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 40px;
`;

const StyledP = styled.p`
    font-size: calc(16px + 0.6vw);
    margin-bottom: 15px;
`;


export default function Home(){
    return(
        <StyledHome>
            <StyledHeader>Home</StyledHeader>
            <StyledImage src="vicky.jpg" alt="Vicky Wu"/>
            <br/>
            <StyledP>My name is Vicky Wu, and I am currently an international student at Boston University.</StyledP>
            <StyledP>I am a junior and I major in CS and Economics. I am interested in CS especially web application.</StyledP>
            <StyledP>I would like to further my professional skills in this field and look forward to becoming an expert in
                the future.
            </StyledP>
            <br/>
            <StyledP>Welcome to my website, here you can see my Educational backgrounds and view the Projects I did.</StyledP>
            <StyledP>Feel free to look anything that interests you.</StyledP>
        </StyledHome>

    )
}