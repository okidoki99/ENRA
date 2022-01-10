import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #18191a;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    z-index: 1;
    margin-left: 15px;

    @media screen and (max-width: 768px) {
        height: 600px;
    }
`;
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    autoplay: true;
`;
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 10px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
`;
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 58px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;
export const HeroP = styled.p`
    margin-top: 18px;
    color: rgb(155, 157, 159);
    font-size: 24px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: left;
    max-width: 40%;

    @media screen and (max-width: 480px) {
        max-width: 60%;
    }
`;

