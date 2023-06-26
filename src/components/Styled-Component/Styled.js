import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px auto;
  padding: 40px;
  width: 700px;
  border: 1px solid black;
  box-shadow: 10px 10px 17px 6px rgba(0, 0, 0, 0.75);
`;

export const FormTag = styled.form`
  box-sizing: border-box;
  padding: 30px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
`;

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin-top: 5px;
  padding: 5px;
`;

export const Button = styled.button`
  width: 100px;
`;

export const Ul = styled.ul`
padding: 0;
display: flex;
flex-direction: column;
gap: 20px;
`;

export const Li = styled.li`
padding: 10px;
  display: flex;
justify-content: space-between;
border: 1px solid black;
`;


