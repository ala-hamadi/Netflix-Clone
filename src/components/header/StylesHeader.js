import styled from 'styled-components/macro';
import {Link} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;
    

    a {
    display: flex;
    }
    @media (max-width: 1000px) {
    margin: 0 30px;
    }
`;

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `../assets/images/misc/${src}.jpg` : '../assets/images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

    @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`;


export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
    }
`;

export const ButtonLink = styled(Link)`
    display: block;
    background-color: #e50914;
    width: 91px;
    height: fit-content;
    color: white;
    border: 0; 
    font-size: 1rem;
    font-weight:400;
    border-radius: 3px;
    padding: 9px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background: #f40612;
    }
`;



export const Inner = styled.div`
  display: flex;
  width:800px;
  flex-direction: column;
  margin: auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 152px 45px;
`;
export const FeatureTitle = styled.h1`
    color: white;
    max-width: 800px;
    font-size: 4rem;
    font-weight: bold;
    margin: auto;

    @media (max-width: 600px) {
    font-size: 35px;
    }
`;
export const FeatureSubtitle = styled.h2`
    color: white;
    font-size: 1.625rem;
    font-weight: bold;
    margin: 16px auto;

    @media (max-width: 600px) {
    font-size: 18px;
    }
`;

export const FeatureBrowseContainer = styled(Container)`
  padding: 150px 0 430px 0;

  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureBrowseCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const FeatureBrowseText = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const BrowseLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.button`
  background: url(${({ src }) => (src && `../assets/images/users/${src}.png`)});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${BrowseLink} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${BrowseLink}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 15px;
    margin-bottom: 0;
    margin-top: 0;
  }
  
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;


export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline:none;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;

  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};
  
  `;


export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 1s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;