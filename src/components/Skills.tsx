import styled from 'styled-components';

const StyledSkills = styled.main`
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

const StyledP = styled.p`
    font-size: calc(16px + 0.6vw);
    margin-bottom: 15px;
`;

export default function Skills(){
    return(
        <StyledSkills>
            <StyledHeader>Programming</StyledHeader>
            <StyledP>Python, Java, SQL, JavaScript/TypeScript, HTML&CSS</StyledP>
            <br/>
            <StyledHeader>Business Tools</StyledHeader>
            <StyledP>HubSpot, Google Workspace, Excel, Tableau</StyledP>
            <br/>
            <StyledHeader>Data & Cloud</StyledHeader>
            <StyledP>MySQL, AWS, Docker, REST APIs</StyledP>
            <br/>
            <StyledHeader>Frameworks</StyledHeader>
            <StyledP>Spring Boot, React/Next.js, Node.js</StyledP>
        </StyledSkills>
    );
}