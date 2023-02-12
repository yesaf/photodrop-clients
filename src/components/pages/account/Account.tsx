import defaultAvatar from '@/assets/images/default-avatar.svg';
import editIcon from '@/assets/images/icons/edit-selfie.svg';
import arrowRight from '@/assets/images/icons/arrow-right.svg';

import CropImage from '@/components/shared/cropImage/CropImage';

import { AccountContainer, SelfieContainer, EditButton, ActionButton } from './Account.styles';
import { useEffect, useState } from 'react';
import imageUrlToFile from '@/utils/imageUrlToFile';


function Account() {
    const user = {
        name: 'John Smith',
        phone: '+380 67 123 45 67',
        avatar: 'https://photodrop-lambda-bucket-test.s3.amazonaws.com/4f346692-2a57-41b5-90b4-2a2647cb774f.jpg',
    };

    const [isEditAvatar, setIsEditAvatar] = useState(false);
    const [selfie, setSelfie] = useState<File | undefined>();

    useEffect(() => {
        imageUrlToFile(user.avatar, 'avatar').then(file => setSelfie(file));
    }, []);

    const handleEditAvatarDone = () => {
        setIsEditAvatar(false);
    }

    return (
        <AccountContainer>
            <header>Welcome, {user.name}.</header>
            <SelfieContainer className="selfie-container">
                <span>Your selfie</span>
                <img src={user.avatar ? user.avatar : defaultAvatar} alt=""/>
                <EditButton className="edit-button" onClick={() => setIsEditAvatar(true)}>
                    <svg>
                        <image href={editIcon}/>
                    </svg>
                </EditButton>
                {
                    isEditAvatar && selfie &&
                    <CropImage initialImage={selfie}
                               onDone={handleEditAvatarDone}
                               onDiscard={() => setIsEditAvatar(false)}/>
                }
            </SelfieContainer>
            <div className="actions-container">
                <ActionButton to="/name">
                    <div className="text">
                        <span className="title">
                            Your name
                        </span>
                        <span className="explanation">
                            Tell us your name to personalize communications.
                        </span>
                    </div>
                    <svg>
                        <image href={arrowRight}/>
                    </svg>
                </ActionButton>
            </div>
        </AccountContainer>
    );
}



export default Account;
