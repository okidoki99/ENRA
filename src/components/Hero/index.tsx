import React from "react";
import Video from "assets/videos/video.mp4";
import { Button } from "../Button";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from "./HeroElements";

const Hero = () => {
    return (
        <HeroContainer id="home-hero">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video}></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1><strong>Elrond NFTs made easy</strong></HeroH1>
                <HeroP>Manage, configure and customize your server roles based on NFTs owned by users.</HeroP>
                <HeroBtnWrapper>
                    <Button to=''>
                    <img src="https://d14eu5yur8w3te.cloudfront.net/cstatic/icons/Discord/WhiteDiscord.svg" height="24" width="24" margin-right="2px"/>
                        Add to Discord
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;