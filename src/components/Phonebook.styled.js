import styled from 'styled-components';

export const SectionStyled = styled.section`
  width: 350px;
  margin: 25px auto 0;
`;
export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0;
  text-align: center;
  font-weight: normal;
`;
export const InputStyled = styled.input`
  display: block;
  margin: 5px 0;
  border: 1px solid #dcdcdc;
`;
export const Btn = styled.button`
  background-color: white;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #dcdcdc;
  box-shadow: 10px 5px 5px #dcdcdc;
  padding: 5px 15px;
  cursor: pointer;
  :hover {
    background-color: blue;
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`;
export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #DCDCDC;
    max-width: 350px;
    padding: 5px 15px;
    box-shadow: 10px 5px 5px #DCDCDC;
    margin: 5px 0;
    border-radius: 5px;
}
`;
