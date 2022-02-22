import { useUserStorage } from 'src/packages/login/adapter/storageAdapter';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid;
`;

function Header() {
  const { user } = useUserStorage();
  return (
    <StyledHeader>
      <h1>Demo</h1>
      <button type="button">create</button>
      <div>{`Hello👋, ${user!.name}`}</div>
    </StyledHeader>
  );
}

export default Header;
