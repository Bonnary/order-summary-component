import styled from "styled-components";
import Hero from "./Images/illustration-hero.svg";
import Icon from "./Images/icon-music.svg";
function App() {
  return (
    <Container>
      <HeroImage src={Hero} alt="" />
      <CardContainer>
        <Title>Order Summary</Title>
        <Description>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </Description>
        <ShoppingCard>
          <MusicContainer>
            <MusicIcon src={Icon} />
            <ShoppingCardText>
              <StrongText>Annual Plan</StrongText>
              <Text>$59.99/year</Text>
            </ShoppingCardText>
          </MusicContainer>
          <Change>Change</Change>
        </ShoppingCard>
        <ButtonWrapper>
          <Payment>Proceed to Payment</Payment>
          <Cancel>Cancel Order</Cancel>
        </ButtonWrapper>
      </CardContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin-top: 200px;
  height: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: 20px;
  display: inline-block;
  justify-self: center;
  align-self: center;
  margin: 0.5rem;

  @media (max-width: 1024px) {
    width: 320px;
  }
`;

const HeroImage = styled.img`
  border-radius: 20px 20px 0 0; // topright topleft bottomleft bottomright

  @media (max-width: 1024px) {
    width: 320px;
  }
`;

const CardContainer = styled.div`
  margin: 3rem;

  @media (max-width: 1024px) {
    margin: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: var(--bold);
  text-align: center;
  color: var(--dark-blue);
`;

const Description = styled.p`
  font-weight: var(--thin);
  font-size: 16px;
  color: var(--desaturated-blue);
  text-align: center;
  margin-top: 2rem;
`;

const ShoppingCard = styled.div`
  background-color: var(--very-pale-blue);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 15px;
  margin-top: 2rem;
`;

const MusicContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MusicIcon = styled.img`
  display: inline;
  margin-right: 1rem;
`;

const ShoppingCardText = styled.div`
  display: inline;
`;

const StrongText = styled.p`
  font-weight: var(--thin);
  font-size: 16px;
  color: var(--dark-blue);
  margin-bottom: 0.25rem;
`;

const Text = styled.p`
  font-weight: var(--thin);
  font-size: 16px;
  color: var(--desaturated-blue);
`;

const Change = styled.a`
  cursor: pointer;
  align-self: center;
  color: var(--bright-blue);
  transition: 100ms; // The speed of hover

  &:hover {
    text-decoration: none;
    color: var(--bright-blue);
    opacity: 20%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Payment = styled.button`
  display: block;
  width: 100%;
  color: var(--pale-blue);
  background-color: var(--bright-blue);
  text-decoration: none;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
  box-shadow: var(--bright-blue) 0px 8px 24px;
  transition: ease-in-out 300ms;

  &:hover {
    scale: 1.02;
    background-color: hsl(245, 75%, 52%, 0.7);
    box-shadow: var(--bright-blue) 0px 3px 12px;
  }
`;

const Cancel = styled.button`
  display: block;
  margin-top: 2rem;
  text-align: center;
  text-decoration: none;
  color: var(--desaturated-blue);
  transition: 100ms;

  &:hover {
    color: var(--dark-blue);
  }
`;
