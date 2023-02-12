import downloadIcon from '@/assets/images/icons/download.svg';
import shareIcon from '@/assets/images/icons/share.svg';
import { ActionsContainer } from './Actions.styles';
import { useCallback } from 'react';

interface IActionsProps {
    photoUrl: string;
    isLocked: boolean;
}


function Actions({ photoUrl, isLocked }: IActionsProps) {
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

    if (isLocked) {
        return (
            <ActionsContainer className="locked">
                <button className="unlock-btn">Unlock photo</button>
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
