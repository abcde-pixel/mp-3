import styled from 'styled-components';

const StyledContacts = styled.main`
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

export default function Contacts(){
    return(
        <StyledContacts>
            <StyledHeader>Contact Information</StyledHeader>
            <StyledUl>
                <StyledLi>Phone: (+1) 617-735-7329</StyledLi>
                <StyledLi>Email: wutong060330@yeah.net</StyledLi>
                <StyledLi>GitHub: github.com/Vicky-BU</StyledLi>
                <StyledLi>LinkedIn: linkedin.com/in/wt-46a1ba36b/</StyledLi>
            </StyledUl>
            <StyledP>
                Feel free to reach out if you'd like to connect, discuss opportunities, or just chat
                about technology and data with me.
            </StyledP>
            <StyledP>
                I am always open to networking with fellow students,
                professionals, and anyone interested in computer science or data analytics.
            </StyledP>
        </StyledContacts>
    );
}