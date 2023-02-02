import styled from 'styled-components';
import defaultAvatar from '../../../assets/images/default-avatar.svg';
import editIcon from '../../../assets/images/icons/edit-selfie.svg';
import arrowRight from '../../../assets/images/icons/arrow-right.svg';

function Account() {

    const user = {
        name: 'John Doe',
        phone: '+380 67 123 45 67',
        avatar: undefined,
    };

    return (
        <AccountContainer>
            <header>Welcome, Jane Smith.</header>
            <SelfieContainer className="selfie-container">
                <span>Your selfie</span>
                <img src={user.avatar ? user.avatar : defaultAvatar} alt=""/>
                <EditButton className="edit-button">
                    <svg>
                        <image href={editIcon}/>
                    </svg>
                </EditButton>
            </SelfieContainer>
            <div className="actions-container">
                <ActionButton>
                    <div className="text">
                        <span className="title">
                            Your name
                        </span>
                        <span className="explanation">
                            Tell us your name to personalize communications.
                        </span>
                    </div>
                    <svg>
                        <image href={arrowRight}/>
                    </svg>
                </ActionButton>
            </div>
        </AccountContainer>
    );
}

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
  padding: 0 15px;

  & > header {
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #262626;
  }

  & > .actions-container {
    display: flex;
    flex-direction: column;
    margin-top: 19.5px;
  }
`;

const SelfieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  margin-top: 20px;

  & > span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #262626;
  }

  & > img {
    margin-top: 13px;
    border: 1px solid #CECCB5;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  
`;

const EditButton = styled.button`
  position: absolute;
  width: 36.5px;
  height: 36.5px;
  top: 101px;
  left: 81.25px;
  border: none;
  cursor: pointer;
  padding: 0;
    background-color: transparent;

  & > svg {
    width: 100%;
    height: 100%;

    & > image {
      width: 36.5px;
      height: 36.5px;
    }
  }
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 345px;
  height: 50px;

  cursor: pointer;

  background: #FFFFFF;
  border: 1px solid #CECCB5;
  border-radius: 10px;

  padding: 10px 16px 9px 15px;
  
  &:hover {
    background: #F5F5F5;
  }

  & > .text {
    display: flex;
    flex-direction: column;

    & > span {
      text-align: start;
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      color: #262626;
    }

    & > .title {
      font-weight: 500;
    }

    & > .explanation {
      font-weight: 400;
    }
  }

  & > svg {
    width: 8px;
    height: 16px;

    & > image {
      width: 8px;
      height: 16px;
    }
  }
`;

export default Account;
