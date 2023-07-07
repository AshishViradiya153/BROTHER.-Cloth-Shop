import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
import Styled from "styled-components";
import { mobile } from "../responsive";

const Container = Styled.div`
  display: flex; 
  ${mobile({ flexDirection: "column" })}
`;

const Left = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = Styled.h1`
    cursor: pointer;
`;

const Desc = Styled.p`
  margin: 20px 0px;
`;

const SocialContainer = Styled.div`
  display: flex;
`;

const SocialIcon = Styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = Styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = Styled.h3`
  margin-bottom: 30px;
`;

const List = Styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

const ListItem = Styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = Styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = Styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BROTHER.</Logo>
        <Desc>
          Influential, innovative and progressive, BROTHER. is reinventing a
          wholly modern approach to fashion. Under the new vision of creative
          director ELAHE, the House has redefined luxury for the 21st century,
          further reinforcing its position as one of the world’s most desirable
          fashion houses. Eclectic, contemporary, romantic—BROTHER. products
          represent the pinnacle of Italian craftsmanship and are unsurpassed
          for their quality and attention to detail.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Me&My</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} /> 909 Sky Path , HEAVEN
          909909
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} /> +91 8200 34 5835
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} /> contact@BROTHER.
        </ContactItem>
        <ContactItem>
          <SportsMartialArtsIcon style={{ marginRight: "10px" }} />{" "}
          @shishViradiya
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
