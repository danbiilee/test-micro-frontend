import styled from 'styled-components';
import Contents from './contents/Contents';
import Header from './header/Header';
import Sidemenu from './sidemenu/Sidemenu';

const Container = styled.div`
  display: flex;
`;

function Workspace() {
  return (
    <>
      <Header />
      <Container>
        <Sidemenu />
        <Contents />
      </Container>
    </>
  );
}

export default Workspace;
