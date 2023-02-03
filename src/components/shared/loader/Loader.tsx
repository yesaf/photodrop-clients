import gifLoader from '@/assets/images/gif-loader.gif';
import styled from 'styled-components';

function Loader() {
    return (
        <LoaderContainer>
            <img src={gifLoader} alt="loader"/>
            <span>Almost there...</span>
        </LoaderContainer>
    );
}

const LoaderContainer = styled.div`
  position: absolute;
  top: -55px;
  left: 0;

  height: 100vh;
  width: 100%;

  display: flex;
    flex-direction: column;
  align-items: center;

  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  
  & > img {
    width: 75px;
    height: 75px;
    
    margin-top: 250px;
  }
  
    & > span {
      margin-top: 20px;
      
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
    }
`;

export default Loader;
