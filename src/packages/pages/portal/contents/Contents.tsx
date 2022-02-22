import LoginButton from 'src/packages/login/ui/LoginButton';
import styled from 'styled-components';
import MainImg1 from '../../../../assets/images/portal1.png';
import MainImg2 from '../../../../assets/images/portal2.png';
import MainImg3 from '../../../../assets/images/portal3.png';
import MainImg4 from '../../../../assets/images/portal4.png';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Contents() {
  return (
    <Main>
      <img src={MainImg1} alt="main1" />
      <img src={MainImg2} alt="main2" />
      <img src={MainImg3} alt="main3" />
      <img src={MainImg4} alt="main4" />
      <LoginButton />
    </Main>
  );
}

export default Contents;
