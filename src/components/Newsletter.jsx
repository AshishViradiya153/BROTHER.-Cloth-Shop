import Styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../responsive";


const Container = Styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

const Title = Styled.div`
    font-size: 50px;
    font-weight: 400;
    margin-bottom: 20px;
`;

const Discription = Styled.div`
    font-size: 24px;
    font-weight: 300;
    ${mobile({ textAlign: "center" })}
`;

const ImputContainer = Styled.div`
    width: 50%;
    height: 40px;
    background-color: wight;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
     ${mobile({ width: "80%" })}
`;

const Input = Styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = Styled.button`
    flex: 1;
    color: wight;
    border: none;
    background-color: teal; 
    cursor: pointer;
`;


const Newsletter = () => {
    return(
        <Container>
            <Title>Let’s Keep The Conversation Going</Title>
            <Discription>
               Get Timely Update From Your Favrite Products. 
            </Discription>
            <ImputContainer>
                <Input placeholder='Your email'/>
                <Button>
                    <SendIcon />
                </Button>
            </ImputContainer>
        </Container>
    )
}

export default Newsletter;