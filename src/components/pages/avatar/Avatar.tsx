import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddSelfie from './components/addSelfie/AddSelfie';
import CropImage from '../../shared/cropImage/CropImage';
import { Area } from 'react-easy-crop';

import accountService from '@/api/services/account';

function Avatar() {
    const [selfie, setSelfie] = useState<File | undefined>();
    const navigate = useNavigate();

    const handleAddSelfie = (image: File) => {
        setSelfie(image);
    };

    const handleDone = (image: File, croppedArea: Area, zoom: string) => {
        accountService.updateSelfie(image, croppedArea, zoom)
            .then(() => {
                setTimeout(() => {window.location.reload()}, 100);
                navigate('/', { replace: true });
            });
    };

    return (
        <>
            <AddSelfie onAddSelfie={handleAddSelfie}/>
            {
                selfie &&
                <CropImage initialImage={selfie}
                           onDone={handleDone}
                           onDiscard={() => {
                               setSelfie(undefined);
                           }}/>
            }
        </>
    );
}

export default Avatar;
