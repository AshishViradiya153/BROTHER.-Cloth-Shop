import {categories, categories2} from '../data';
import Styled from 'styled-components';
import CategoryItem from './CategoryItem';
import {mobile} from '../responsive';

const Container = Styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;



const Categories = () => {
    return(
        <>
        <Container>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
        <Container>
            {categories2.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
        </>
    )
}

export default Categories;