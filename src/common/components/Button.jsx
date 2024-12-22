import styled from "styled-components";

const Button = styled.button`
 background-color: ${(props) => props.theme.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;

export default Button;
