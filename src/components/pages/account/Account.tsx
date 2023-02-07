import defaultAvatar from '@/assets/images/default-avatar.svg';
import editIcon from '@/assets/images/icons/edit-selfie.svg';
import arrowRight from '@/assets/images/icons/arrow-right.svg';

import CropImage from '@/components/shared/cropImage/CropImage';

import { AccountContainer, SelfieContainer, EditButton, ActionButton } from './Account.styles';
import { useState } from 'react';


function Account() {
    const user = {
        name: 'John Smith',
        phone: '+380 67 123 45 67',
        avatar: undefined,
    };

    const [isEditAvatar, setIsEditAvatar] = useState(false);

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
                    isEditAvatar &&
                    <CropImage initialImage={user.avatar || defaultAvatar}
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
