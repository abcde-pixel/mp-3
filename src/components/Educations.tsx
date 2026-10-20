import styled from 'styled-components';

const StyledEducations = styled.main`
    width: 70%;
    font-size: calc(2px + 1.5vw);
    text-align: center;
    background-color: #F5F5DC;
    padding: 1%;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    margin-top: 20px;
`;

const StyledLi = styled.li`
    font-size: calc(16px + 0.6vw);
    margin-bottom: 40px;
`;

const StyledP = styled.p`
    font-size: calc(16px + 0.6vw);
    margin-bottom: 15px;
`;

export default function Educations(){
    return(
        <StyledEducations>
            <StyledP><strong>Bachelor of Science in Computer Science and Economics</strong>, Boston University</StyledP>
            <StyledP>January 2025 - August 2028</StyledP>

            <StyledP><strong>Courses Taken:</strong></StyledP>
            <StyledUl>
                <StyledLi>
                    CS111 - Python Programming
                    <StyledP>Description: Building computational problem-solving skills through Python programming.</StyledP>
                </StyledLi>

                <StyledLi>
                    CS112 - Java Programming
                    <StyledP>
                        Description: About advanced programming techniques and core data structures like recursion,
                        linked lists, stacks and so on in Java language.
                    </StyledP>
                </StyledLi>

                <StyledLi>
                    CS210 - Computer Systems
                    <StyledP>Description: Fundamental concepts of computer systems and systems programming.</StyledP>
                </StyledLi>

                <StyledLi>
                    CS303 - Web Application Development
                    <StyledP>
                        Description: About front-end design with HTML, CSS, JavaScript, and React, alongside
                        backend programming using Node.js, Express, and MongoDB.
                    </StyledP>
                </StyledLi>
            </StyledUl>
        </StyledEducations>
    );
}