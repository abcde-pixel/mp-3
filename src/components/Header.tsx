import styled from 'styled-components';

const StyledHeader = styled.header`
    text-align: left;
    padding: 20px;
    background-color: #F0E68C;
    color: #8B4513;
`;

const StyledH1 = styled.h1`
    font-size: calc(16px + 1.5vw);
`;

const StyledP = styled.p`
    font-size: calc(8px + 1vw);
`;

export default function Header(){
    return(
        <StyledHeader>
            <StyledH1>Vicky Wu</StyledH1>
            <StyledP>My Online Resume</StyledP>
        </StyledHeader>
    );
}