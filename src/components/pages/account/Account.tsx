import defaultAvatar from '@/assets/images/default-avatar.svg';
import editIcon from '@/assets/images/icons/edit-selfie.svg';
import arrowRight from '@/assets/images/icons/arrow-right.svg';

import CropImage from '@/components/shared/cropImage/CropImage';

import { AccountContainer, SelfieContainer,
    EditButton, ActionButton, AccountImage } from './Account.styles';
import { ChangeEvent, useCallback, useContext, useState } from 'react';
import { AuthContext } from '@/routes/ProtectedRoute';
import { Area } from 'react-easy-crop';

import accountService from '@/api/services/account';
import { IAccount } from '@/components/hooks/useAccount';

function Account() {
    const account: IAccount = useContext(AuthContext);

    const [isEditAvatar, setIsEditAvatar] = useState(false);
    const [selfie, setSelfie] = useState<File | undefined>();

    const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelfie(file);
            setIsEditAvatar(true);
        }
    }, [setSelfie, setIsEditAvatar]);

    const handleEditAvatarDone = (image: File, croppedArea: Area, zoom: string) => {
        accountService.updateSelfie(image, croppedArea, zoom)
            .then(() => {
                window.location.reload();
            });
    }

    return (
        <AccountContainer>
            <header>Welcome, {account.user?.fullName ? account.user?.fullName : 'user'}.</header>
            <SelfieContainer >
                <span>Your selfie</span>
                <div className="image-container">
                    <AccountImage
                        selfie={account.selfie}
                        src={account.selfie?.selfieUrl ? account.selfie?.selfieUrl : defaultAvatar} alt=""/>
                </div>

                <EditButton className="edit-button"
                            onClick={() =>
                                document.getElementById('file-input')?.click()
                            }>
                    <input type="file" id="file-input" onChange={handleFileChange}/>
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
