import styled from 'styled-components';
import { Button } from "antd";



export const HomeSection = styled.div`
    background: linear-gradient(180deg, #F6F5F5 -45.04%, #FFFFFF 19.67%, #F4F3F3 88.56%);
    padding: 140px 0;
    display: flex;
    align-items: center;
`;

export const HomeContainer = styled.div`
    margin: 0 auto;
    max-width: 1140px;
`;

export const Hero = styled.div`
    display: flex;
`;

export const Ilustration = styled.img`
    width: 508.12px;

`;

export const HomeParagraph = styled.p`
    line-height: 30px;
    font-size: 25px;
    color: #4F5665;
    margin-left: 60px;
`;

export const CardWrapper = styled.p`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 75px;
`;

export const MoreButton = styled(Button)`
    &&& {
        margin: auto 0;
        text-align: center;
        font-size: 25px;
        height: auto;
        width: auto;
    }
`;

export const HomeButton = styled.div`
    margin-top: 70px;
    text-align: center;
`;