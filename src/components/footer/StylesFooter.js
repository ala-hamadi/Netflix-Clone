import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 65%;
  justify-content: center;

  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;


export const Row = styled.div`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

`;
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
