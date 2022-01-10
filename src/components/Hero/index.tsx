import React from "react";
import Video from "assets/videos/video.mp4";
import { Button } from "../Button";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from "./HeroElements";

const Hero = () => {

    const handleClick = () => {
        window.location.assign("https://bit.ly/ENRA5109");
    };

    return (
        <HeroContainer id="home-hero">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video}></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1><strong>E.N.R.A. - Elrond NFT Role Assigner</strong></HeroH1>
                <HeroP>Elrond NFT Discord servers can auto assign roles to their members based on how many NFT from a certain collection they have.</HeroP>
                <HeroBtnWrapper>
                    <Button to='' onClick={handleClick}>
                    <img src="https://d14eu5yur8w3te.cloudfront.net/cstatic/icons/Discord/WhiteDiscord.svg" height="24" width="24" margin-right="2px"/>
                        Add to Discord
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;