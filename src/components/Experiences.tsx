import styled from 'styled-components';

const StyledExperiences = styled.main`
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

export default function Experiences(){
    return(
        <StyledExperiences>
            <StyledHeader>Internship</StyledHeader>
            <br/>
            <StyledUl>
                <StyledLi><strong>Hongguan Company, Data Analyst, 2025</strong></StyledLi>
            </StyledUl>
            <StyledP>
                I interned as a data analyst in Hongguan Company in China in 2025. My main job was to support the
                business teams by doing data cleaning, data pulling, and building dashboards using the tools like
                Excel and SQL.
            </StyledP>

            <StyledHeader>Club</StyledHeader>
            <br/>
            <StyledUl>
                <StyledLi><strong>Computer Science Club</strong></StyledLi>
            </StyledUl>
            <StyledP>
                I joined the Computer Science Club in my sophomore year, where I participated in weekly coding
                workshops and attended talks from industry speakers. Through this club, I deepened my understanding
                about computer science and gained insight into current industry standards in computer science as well.
            </StyledP>
        </StyledExperiences>
    );
}