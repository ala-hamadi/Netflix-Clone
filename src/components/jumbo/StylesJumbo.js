import styled from 'styled-components/macro';

export const Inner=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    max-width: 80%;
    margin: auto;
    width: 100%;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Item=styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

export const Pane=styled.div`
    width: 50%;
    position:relative;
    display:inline-grid;
    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title=styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
    font-size: 35px;
    }
`;
export const SubTitle=styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
    font-size: 18px;
    }
`;

export const Image=styled.img`
    max-width:100%;
    grid-column:2/2;
    grid-row:1/2;
    height:auto;
    z-index:2;
`;

export const Video=styled.video`
    position:relative;
    width:${({width})=>width ? "65%" : "100%"};
    height:${({height})=>height ? "86%" : "54%"};
    grid-column:2/2;
    grid-row:1/2;
    left:${({left})=>left};
    top:${({top})=>top};

    
`;



export const Container=styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;