import styled from 'styled-components';

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
