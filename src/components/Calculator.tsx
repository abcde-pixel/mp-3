import styled from 'styled-components';
import {useState} from "react";

const StyledCalculator = styled.div`
    font-family: fantasy;
    font-weight: bold;
    font-size: calc(8px + 1.5vw);
    padding: 20px;
    text-align: center;

    @media screen and (max-width: 750px) {
        font-size: calc(8px + 2vw);
    }
`;

const StyledNumbers = styled.div`
    padding: 20px;

    @media screen and (max-width: 750px) {
        width: 80%;
        margin: 5px;
    }
`;

const StyledInput = styled.input`
    padding: 7px;
    display: block;
    margin: 10px auto;
    font-family: fantasy;
    font-size: calc(6px + 1vw);
    font-weight: bold;
`;

const StyledButton = styled.button`
    background-color: #1e3a5f;
    border-color: whitesmoke;
    color: white;
    padding: 10px 15px;
    margin: 5px;
    border-width: 2px;
    border-style: solid;
    font-size: calc(8px + 1vw);

    @media screen and (max-width: 750px) {
        margin: 3px;
        padding: 8px 10px;
    }
`;

const StyledOutputBox = styled.div`
    width: 50%;
    margin: 20px auto;
    padding: 20px;
    border-width: 1px;
    border-style: solid;
`;

export default function Calculator(){
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");
    // const calc = useCalculator();

    function doAdd(){
        setResult(String(Number(first) + Number(second)));
    }

    function doSub(){
        setResult(String(Number(first) - Number(second)));
    }

    function doMul(){
        setResult(String(Number(first) * Number(second)));
    }

    function doDiv(){
        setResult(String(Number(first) / Number(second)));
    }

    function doPow(){
        let temp=1;
        for (let i=0; i<Number(second); i++){
            temp=Number(first)*temp
        }
        setResult(String(temp))
    }

    function doClear(){
        setFirst("");
        setSecond("");
        setResult("");
    }


    return(
        <StyledCalculator>
            <StyledNumbers>
                <label htmlFor="first-number">First Number:</label>
                <StyledInput
                    type="text"
                    id="first-number"
                    value={first}
                    onChange={(e)=>setFirst(e.target.value)}
                />
                <label htmlFor="second-number">Second Number:</label>
                <StyledInput
                    type="text"
                    id="second-number"
                    value={second}
                    onChange={(e)=>setSecond(e.target.value)}
                />
            </StyledNumbers>


            <StyledButton onClick={doAdd}>+</StyledButton>
            <StyledButton onClick={doSub}>-</StyledButton>
            <StyledButton onClick={doMul}>*</StyledButton>
            <StyledButton onClick={doDiv}>/</StyledButton>
            <StyledButton onClick={doPow}>**</StyledButton>
            <StyledButton onClick={doClear}>clear</StyledButton>


            <StyledOutputBox>
                <h3 style={{color: Number(result)  < 0 ? "red" : "black"}}>
                    {result}
                </h3>
            </StyledOutputBox>
        </StyledCalculator>
    );
}