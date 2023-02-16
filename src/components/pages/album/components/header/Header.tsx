import BackButton from '@/components/shared/backButton/BackButton';

import { useMemo } from 'react';

import { CustomHeader, InfoContainer } from './Header.styles';
import useIsMobile from '@/components/hooks/useIsMobile';
import albumService from '@/api/services/album';
import { useParams } from 'react-router-dom';
import { IAlbum } from '@/api/types/albumResponses';

interface IHeaderProps {
    album: IAlbum;
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Header({ album }: IHeaderProps) {
    const { id } = useParams<{ id: string }>();
    const isMobile = useIsMobile();

    const formattedDate = useMemo(() => {
        const date = new Date(album.createdAt);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        return `${monthNames[month]} ${day}, ${year}`;
    }, [album]);

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
                <h2 className="title">{album.name}</h2>
                <p className="details">{formattedDate} • <span className="photos">{album.photos.length} photos</span></p>
            </InfoContainer>
            {
                !isMobile && !album.isUnlocked &&
                    <button className="unlock-button" onClick={handlePay}>
                        Unlock your photos
                    </button>
            }
        </CustomHeader>
    );
}

export default Header;
