import { mobile } from "../responsive";
import Styled from 'styled-components';

const Container = Styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Img = Styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  // object-fit: contain;
  ${mobile({ height: "20vh" })}
`;

const Info = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = Styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = Styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Img src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;