import downloadIcon from '@/assets/images/icons/download.svg';
import shareIcon from '@/assets/images/icons/share.svg';
import { ActionsContainer } from './Actions.styles';
import { useCallback } from 'react';
import albumService from '@/api/services/album';

interface IActionsProps {
    photoUrl: string;
    isLocked: boolean;
    albumId: string;
}


function Actions({ photoUrl, isLocked, albumId }: IActionsProps) {
    const handleShare = useCallback(() => {
        if (navigator.share) {
            navigator.share({
                title: 'My photo',
                text: 'PhotoDrop',
                url: photoUrl,
            });
        } else {
            navigator.clipboard.writeText(photoUrl);
        }
    }, []);

    const handlePay = () => {
        albumService.payAlbum(albumId)
            .then((url) => {
                window.location.replace(url);
            });
    };

    if (isLocked) {
        return (
            <ActionsContainer className="locked">
                <button className="unlock-btn" onClick={handlePay}>Unlock photo</button>
            </ActionsContainer>
        );
    }

    return (
        <ActionsContainer>
            <a className="download-btn" href={photoUrl} download>
                <svg>
                    <image href={downloadIcon}/>
                </svg>
            </a>
            <button className="share-btn" onClick={handleShare}>
                <svg>
                    <image href={shareIcon}/>
                </svg>
            </button>
            <button className="frame-btn">
                See in a frame
            </button>
        </ActionsContainer>
    );
}

export default Actions;
