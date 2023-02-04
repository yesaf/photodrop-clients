import BackButton from '@/components/shared/backButton/BackButton';
import styled from 'styled-components';
import { useMemo } from 'react';

interface IHeaderProps {
    albumName: string;
    albumDate: string;
    photosCount: number;
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Header({ albumName, albumDate, photosCount }: IHeaderProps) {
    const formattedDate = useMemo(() => {
        const date = new Date(albumDate);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        return `${monthNames[month]} ${day}, ${year}`;
    }, [albumDate]);

    return (
        <CustomHeader>
            <div className="back-button-container">
                <BackButton to="/"/>
            </div>
            <InfoContainer>
                <h2 className="title">{albumName}</h2>
                <p className="details">{formattedDate} • <span className="photos">{photosCount} photos</span></p>
            </InfoContainer>
        </CustomHeader>
    );
}

const CustomHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 11px 0 10px 15px;

  width: 100%;
  height: 55px;
  
  & > .back-button-container {
    position: absolute;
    left: 0;
    top: 0;
    margin: 19.5px 15px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 38px;
  height: 55px;
  width: 375px;

  & > .title {
    font-size: 18px;
    line-height: 22px;
    height: 18px;
    text-align: start;
    margin-top: 6px;
  }

  & > .details {
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    margin: 10px 0 0 0;

    & > .photos {
      color: #3300CC;
    }
  }
`;

export default Header;
