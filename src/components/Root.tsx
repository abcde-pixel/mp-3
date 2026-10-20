import {Routes, Route} from "react-router";
import styled from 'styled-components';
import Home from "./Home";
import Educations from "./Educations";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";
import Contacts from "./Contacts";
import Header from "./Header.tsx";
import Nav from "./Nav";
import Footer from "./Footer.tsx";

const StyledPageWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    min-height: 100vh;
    font-family: Poppins, "Helvetica Neue", Helvetica, sans-serif;
    background-color: #F5F5DC;
    display: flex;
    flex-direction: column;
`;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    min-height: 80vh;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        min-height: 0;
    }
`;

export default function Root() {
    return(
        <StyledPageWrapper>
            <Header />
            <StyledContainer>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/educations`} element={<Educations/>}/>
                    <Route path={`/experiences`} element={<Experiences/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>
                    <Route path={`/skills`} element={<Skills/>}/>
                    <Route path={`/contacts`} element={<Contacts/>}/>
                </Routes>
            </StyledContainer>
            <Footer/>
        </StyledPageWrapper>
    )
}