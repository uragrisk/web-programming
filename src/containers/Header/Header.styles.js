import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: rgb(245, 245, 245);
    height: 70px;
    > div {
        display: flex;
        
    }
    align-items: center;
`;

export const NavLogo = styled.div`
    font-weight: bold;
    font-size: 25px;
    align-items: center;
`;



export const Nav = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
`;

export const NavItem = styled.li`
    padding: 0 1rem;
    font-size: 18px;
    a{
        color: black;
        padding: 5px 15px;
        border-radius: 20px;
    }
`;

export const HeadetButtons = styled.div`
    display: flex;
    align-items: center;
    display: none;
`;

export const SignInButton = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-weight: 500;
    font-size: 16px;
    margin-right: 30px;
    &:hover{
        font-weight: 600;
        cursor: pointer;
    }
`;

export const SignUpButton = styled.button`
    width: 150px;
    height: 45px;
    border: 1px solid #F53855;
    background: none;
    border-radius: 50px;
    font-weight: 500;
    font-size: 16px;
    color: #F53855;
    &:hover{
        color: #ffffff;
        background: #F53855;
    }
`;


export const IconsWrapper = styled.div`
    display: flex;
    > span {
        margin: 0 12px;
    }
`