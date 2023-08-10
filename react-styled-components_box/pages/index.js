import styled from 'styled-components';
import BoxWithClassName from '../components/BoxWithClassName/BoxWithClassName';

const FlexContainer = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <FlexContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithClassName />
      <BoxWithClassName isBlack />
    </FlexContainer>
  );
}
