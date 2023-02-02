import styled from 'styled-components';
import { Link } from 'react-router-dom';
import defaultAvatar from '../../../assets/images/default-avatar.svg';

function AccountButton() {
    return (
        <AccountLink to="/me">
            <svg>
                <image href={defaultAvatar}/>
            </svg>
        </AccountLink>
    );
}

const AccountLink = styled(Link)`
  & > svg {
    width: 35px;
    height: 35px;
    border: 1px solid #CECCB5;
    border-radius: 50%;

    image {
      width: 34px;
      height: 34px;
    }
  }
`;

export default AccountButton;
