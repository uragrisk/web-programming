import React from "react";
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import {FooterSection, FooterContainer, FooterLogo, IconBase, SocialIcons} from "./Footer.styles";

const Footer = () =>(
    <FooterContainer>
        <FooterSection>
            <FooterLogo>
                The Cup Shop
            </FooterLogo>
            <h5>IoT Ⓒ 2021. All rights reserved.</h5>
            <SocialIcons>
                <IconBase component={YoutubeOutlined} color='#FF0000'/>
                <IconBase component={TwitterOutlined} color='#03A9F4' />
                <IconBase component={LinkedinOutlined} color='#007AB9'/>
                <IconBase component={InstagramOutlined} color='#3A9F4'/>
            </SocialIcons>
        </FooterSection>
    </FooterContainer>
    
)

export default Footer;