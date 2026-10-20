import styled from 'styled-components';

const StyledFooter = styled.footer`
    text-align: center;
    padding: 15px 20px;
    background-color: burlywood;
`;

const StyledLink = styled.a`
    color: #000000;
`;

export default function Footer(){
    return(
        <StyledFooter>
            <p>All rights reserved: <StyledLink href="">Credits</StyledLink> &#169;</p>
        </StyledFooter>
    );
}