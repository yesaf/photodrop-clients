import styled from 'styled-components';
import { Link } from 'react-router-dom';
import defaultAvatar from '@/assets/images/default-avatar.svg';
import { memo } from 'react';
import { ISelfie } from '@/api/types/authResponses';
import { useSelector } from 'react-redux';
import { accountSelector } from '@/store/selectors/authSelectors';

function AccountButton() {
    const account = useSelector(accountSelector)

    return (
        <AccountLink to="/me">
            <AccountImage src={account.user?.selfieId ? account.selfie?.selfieThumbnail : defaultAvatar}
                          selfie={account.selfie} alt=""/>
        </AccountLink>
    );
}

const AccountLink = styled(Link)`
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IAccountImageProps {
    selfie: ISelfie | undefined;
}

const AccountImage = styled.img.attrs<IAccountImageProps>(
    ({ selfie }) => {
        if (!selfie)
            return {style: {height: '100%', width: '100%'}};

        const {width, height, shiftX, shiftY, zoom} = selfie;
        const isVertical = width > height;

        return {
            style: {
                width: isVertical ? '100%' : 'auto',
                height: isVertical ? 'auto' : '100%',
                transform:
                    `translate(${-shiftX*zoom + (50*zoom - 50)}%, ${-shiftY*zoom*2 + (50*zoom - 50)}%)` +
                    `scale(${zoom})`,
            }
        };

    })<IAccountImageProps>``;
export default memo(AccountButton);
