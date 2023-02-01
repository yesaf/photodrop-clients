import defaultAvatar from '../../../assets/images/default-avatar.svg';
import photoLibraryIcon from '../../../assets/images/icons/photo-library.svg';
import takePhotoIcon from '../../../assets/images/icons/take-photo.svg';
import chooseFileIcon from '../../../assets/images/icons/choose-file.svg';
import { useState } from 'react';
import { AvatarContainer, DropDownMenu, AddButton } from './Avatar.styles';

function Avatar() {
    const [avatar, setAvatar] = useState<string | undefined>();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <AvatarContainer>
            <header>Add a selfie</header>
            <p className="text-explain">A selfie allows your photos to be synced with your account.</p>
            <img className="avatar-image" src={avatar ? avatar : defaultAvatar} alt="Avatar"/>
            <AddButton onClick={() => setShowMenu(!showMenu)}/>
            {
                showMenu &&
                <DropDownMenu>
                    <button className="library-button" onClick={() => setShowMenu(false)}>
                        <span>Photo Library</span>
                        <img className="icon" src={photoLibraryIcon} alt=""/>
                    </button>
                    <button className="photo-button" onClick={() => setShowMenu(false)}>
                        <span>Take Photo</span>
                        <img className="icon" src={takePhotoIcon} alt=""/>
                    </button>
                    <button className="file-button" onClick={() => setShowMenu(false)}>
                        <span>Choose File</span>
                        <img className="icon" src={chooseFileIcon} alt=""/>
                    </button>
                </DropDownMenu>
            }
        </AvatarContainer>
    );
}

export default Avatar;
