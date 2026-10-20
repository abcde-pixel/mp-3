import styled from 'styled-components';
import Calculator from "./Calculator.tsx";

const StyledProjects = styled.main`
    background-color: #f5f5f5;
    text-align: center;
    padding: 20px;
    width: 75%;

    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 10px;
    }
`;

const StyledImage = styled.img`
    max-width: 80%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 30px;

    @media screen and (max-width: 750px) {
        max-width: 100%;
    }
`;

export default function Projects(){
    return(
        <StyledProjects>
            <StyledImage src="/magic.jpg" alt="magic"/>
            <Calculator/>
        </StyledProjects>
    );
}