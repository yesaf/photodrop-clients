import BackButton from '@/components/shared/backButton/BackButton';

import { useMemo } from 'react';

import { CustomHeader, InfoContainer } from './Header.styles';
import useIsMobile from '@/components/hooks/useIsMobile';
import albumService from '@/api/services/album';
import { useParams } from 'react-router-dom';

interface IHeaderProps {
    albumName: string;
    albumDate: string;
    photosCount: number;
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Header({ albumName, albumDate, photosCount }: IHeaderProps) {
    const { id } = useParams<{ id: string }>();
    const isMobile = useIsMobile();

    const formattedDate = useMemo(() => {
        const date = new Date(albumDate);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        return `${monthNames[month]} ${day}, ${year}`;
    }, [albumDate]);

    const handlePay = () => {
        if (id)
            albumService.payAlbum(id)
                .then((url) => {
                    window.location.replace(url);
                });
    }


    return (
        <CustomHeader>
            <div className="back-button-container">
                <BackButton to="/"/>
            </div>
            <InfoContainer>
                <h2 className="title">{albumName}</h2>
                <p className="details">{formattedDate} • <span className="photos">{photosCount} photos</span></p>
            </InfoContainer>
            {
                !isMobile &&
                    <button className="unlock-button" onClick={handlePay}>
                        Unlock your photos
                    </button>
            }
        </CustomHeader>
    );
}

export default Header;
