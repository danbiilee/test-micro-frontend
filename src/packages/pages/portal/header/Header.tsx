import styled from 'styled-components';
import LoginButton from 'src/packages/login/ui/LoginButton';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Demo</h1>
      <LoginButton />
    </StyledHeader>
  );
}

export default Header;
