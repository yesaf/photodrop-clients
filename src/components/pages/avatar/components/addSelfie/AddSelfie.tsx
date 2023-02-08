import defaultAvatar from '../../../../../assets/images/default-avatar.svg';
import { AddButton, SelfieContainer } from './AddSelfie.styles';
import { ChangeEvent } from 'react';

interface IAddSelfieProps {
    onAddSelfie: (image: string) => void;
}

function AddSelfie({ onAddSelfie }: IAddSelfieProps) {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                onAddSelfie(reader.result as string);
            };
        }
    };

    return (
        <SelfieContainer>
            <h2>Add a selfie</h2>
            <p className="text-explain">A selfie allows your photos to be synced with your account.</p>
            <div className="selfie-input-container">

                <img className="avatar-image" src={defaultAvatar} alt="Avatar"/>
                <input id="file-input" type="file" accept="image/" onChange={handleFileChange}/>
                <AddButton onClick={() => {
                    document.getElementById('file-input')?.click();
                }}/>
            </div>
        </SelfieContainer>
    );
}

export default AddSelfie;
