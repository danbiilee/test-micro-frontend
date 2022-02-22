import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 5px 10px;
  background-color: #4170f5;
  border-radius: 3px;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #335bcc;
  }
`;

function LoginButton() {
  return <StyledLink to="/login">Log in</StyledLink>;
}

export default LoginButton;
