import { useCallback, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import AddSelfie from './components/addSelfie/AddSelfie';
import CropImage from '../../shared/cropImage/CropImage';
import { Area } from 'react-easy-crop';

import accountService from '@/api/services/account';
import { useSelector } from 'react-redux';
import { accountSelector } from '@/store/selectors/authSelectors';

function Avatar() {
    const account = useSelector(accountSelector);
    const [selfie, setSelfie] = useState<File | undefined>();
    const navigate = useNavigate();

    if (account.user?.selfieId) {
        return <Navigate to="/" replace/>
    }

    const handleAddSelfie = useCallback((image: File) => {
        setSelfie(image);
    }, [setSelfie]);

    const handleDone = useCallback((image: File, croppedArea: Area, zoom: string) => {
        accountService.updateSelfie(image, croppedArea, zoom)
            .then(() => {
                navigate('/', { replace: true });
            });
    }, []);

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
