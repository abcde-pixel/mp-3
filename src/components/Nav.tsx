import {Link} from "react-router";
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 30%;
    background-color: #FFDAB9;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 900px) {
        flex-direction: row;
        justify-content: center;
    }
`;

const StyledLi = styled.li`
    border: solid black 2px;
    text-align: center;
    margin: 10%;
    background-color: #EEE8AA;

    @media screen and (max-width: 900px) {
        width: 15%;
        margin: 0.5%;
    }
`;

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: #A0522D;
    font-size: calc(2px + 2vw);
    font-weight: bold;
    text-align: center;
    padding: 10px;
    margin-bottom: 35px;

    @media screen and (max-width: 900px) {
        font-size: calc(8px + 0.8vw);
        margin-bottom: 0;
    }
`;

export default function Nav(){
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to={`/`}>Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/educations`}>Education</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/experiences`}>Experience</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/projects`}>Projects</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/skills`}>Skills</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/contacts`}>Contacts</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}