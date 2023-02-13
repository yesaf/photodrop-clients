import styled from 'styled-components';
import { Link } from 'react-router-dom';
import defaultAvatar from '@/assets/images/default-avatar.svg';
import { memo, useContext } from 'react';
import { AuthContext } from '@/routes/ProtectedRoute';
import { ISelfie } from '@/api/types/authResponses';

function AccountButton() {
    const account = useContext(AuthContext);

    return (
        <AccountLink to="/me">
            <AccountImage src={account.user?.selfieId ? account.selfie?.selfieThumbnail : defaultAvatar}
                          selfie={account.selfie} alt=""/>
        </AccountLink>
    );
}

const AccountLink = styled(Link)`
  display: block;
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;
`;

interface IAccountImageProps {
    selfie: ISelfie | undefined;
}

const AccountImage = styled.img.attrs<IAccountImageProps>(
    ({ selfie }) => {
        console.log(selfie);
        if (!selfie)
            return {style: {height: '100%', width: '100%'}};

        const {width, height, shiftX, shiftY, zoom} = selfie;
        const isVertical = width > height;

        return {
            style: {
                width: isVertical ? '100%' : 'auto',
                height: isVertical ? 'auto' : '100%',
                transform:
                    `translate(-${shiftX/zoom/2}%, ${shiftY*zoom}%)` +
                    `scale(${zoom})`,
            }
        };

    })<IAccountImageProps>``;
export default memo(AccountButton);
