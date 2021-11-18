import styled from 'styled-components';
import Icon from '@ant-design/icons';

export const FooterContainer = styled.div`
    background-color: rgb(245, 245, 245);
`;

export const FooterSection = styled.div`
    padding-top: 170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 48px 24px;
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLogo = styled.div`
    font-weight: bold;
    font-size: 25px;
    align-items: center;
`;

export const SocialIcons = styled.div`
    align-items: center;
    
`;

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: ${({ color }) => color};
    margin-right: 15px;
`;
