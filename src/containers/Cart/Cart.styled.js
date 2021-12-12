import styled from 'styled-components';

export const CartTitle = styled.h1 `
    text-align: center;
    font-size: 45px;
    font-weight: 700;
`;

export const CartFooter = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top:100px;
    align-items: center;
    padding: 0 150px;
`;

export const CartButtons = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CartFields = styled.div `
    display: flex;
    align-items: center;
    margin-top: 75px
`;

export const ButtonStyle = {
    marginRight: 15,
    height: 55,
    paddingBottom: 30,
    fontWeight: 500,
    fontSize: 24,
    borderRadius: 30
}

export const CartStyle = {
    marginRight: 15,
    height: 55,
    paddingBottom: 30,
    fontWeight: 500,
    fontSize: 24,
    borderRadius: 30
}

export const CartSection = styled.div `
    padding: 140px 0;
    align-items: center;

    margin:auto;
    border: "3px solid rgba(0,0,0,.125)";
`;

export const CartContainer = styled.div `
    margin: 0 auto;
    max-width: 1000px;
    margin-bottom: 10px;
    margin-top: 7px;
    
`;


export const CartItemStyled = styled.div `
    width: 70vw;
    margin: auto;
    margin-bottom: 3vh;
    border: 3px solid rgba(0,0,0,.125);
    border-radius: 25px;
    display: flex;
    align-items: center;
    text-align: enter;
    justify-content: space-between;
`
export const CartImage = styled.img `
    width: 200px;
    padding: 10px;
`
export const CartWrapper = styled.div `
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 75px;
    flex-wrap: wrap;
`

export const NumberOfCups = styled.div `
    display: flex;
    justify-content: space-around;
    margin-right: 20px;

`

export const IncreaseButton = styled.button `
    margin: auto 2vw;
    width: 35px;
    height: 35px;
    text-align: center;
    font-weight:bold;
    background-color: white;
    border: 3px solid rgba(0,0,0,.200);
    font-weight:bold;
    border-radius: 6px;
    :hover{
    background-color: rgb(46, 46, 46);
    color: white;
    
}
`

export const Amount = styled.p `
margin: auto 1vw;
font-size: 25px;
font-weight:bold;
`

export const DecreaseButton = styled.button `
    margin: auto 3vw;
    width: 35px;
    height: 35px;
    font-weight:bold;
    background-color: white;
    border: 3px solid rgba(0,0,0,.200);
    border-radius: 6px;
    :hover{
    background-color: rgb(46, 46, 46);
    color: white;
}`
