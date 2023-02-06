import closeIcon from '@/assets/images/icons/close.svg';
import downloadIcon from '@/assets/images/icons/download.svg';
import shareIcon from '@/assets/images/icons/share.svg';

import { Background, Container, CloseButton, ActionsContainer } from './FullPhoto.styles';
import { useCallback } from 'react';

interface IFullPhotoProps {
    photoUrl: string;
    onClose: () => void;
}

function FullPhoto({ photoUrl, onClose }: IFullPhotoProps) {
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

    return (
        <Background>
            <Container>
                <CloseButton onClick={onClose}>
                    <svg>
                        <image href={closeIcon}/>
                    </svg>
                </CloseButton>
                <img src={photoUrl} alt=""/>
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
            </Container>
        </Background>
    );
}

export default FullPhoto;
