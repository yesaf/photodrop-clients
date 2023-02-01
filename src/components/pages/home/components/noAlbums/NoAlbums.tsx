import styled from 'styled-components';
import message from '../../../../../assets/images/message.svg';

function NoAlbums() {
    return (
        <NoAlbumsContainer>
            <img className="message" src={message} alt=""/>
            <p className="text-bold">Your photos will drop soon.</p>
            <p className="text-explain">You will get a text message when they are ready. It can take up to 48 hours.</p>
            <hr/>
        </NoAlbumsContainer>
    );
}

const NoAlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;

  & > .message {
    width: 81.8px;
    height: 75px;
    margin-top: 20px;
  }

  & > .text-bold {
    margin: 21px 0 0 0;

    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #262626;
  }

  & > .text-explain {
    margin: 16px 0 0 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #262626;
  }

  & > hr {
    margin-top: 41px;
    margin-bottom: 0;
    width: 100%;
    border-top: 5px solid #F4F4F4;
    border-left: 0;
  }
`;
export default NoAlbums;
