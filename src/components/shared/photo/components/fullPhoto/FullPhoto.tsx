import closeIcon from '@/assets/images/icons/close.svg';

import { Background, Container, CloseButton } from './FullPhoto.styles';
import Actions from './components/actions/Actions';

interface IFullPhotoProps {
    photoUrl: string;
    albumId: string;
    onClose: () => void;
    isLocked: boolean;
}

function FullPhoto({ photoUrl, onClose, isLocked, albumId }: IFullPhotoProps) {
    return (
        <Background>
            <Container>
                <CloseButton onClick={onClose}>
                    <svg>
                        <image href={closeIcon}/>
                    </svg>
                </CloseButton>
                <img src={photoUrl} alt=""/>
                <Actions isLocked={isLocked} photoUrl={photoUrl} albumId={albumId}/>
            </Container>
        </Background>
    );
}

export default FullPhoto;
