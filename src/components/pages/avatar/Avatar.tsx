import { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';

import AddSelfie from './components/addSelfie/AddSelfie';
import CropImage from '../../shared/cropImage/CropImage';
import { Area } from 'react-easy-crop';

import accountService from '@/api/services/account';
import { useDispatch, useSelector } from 'react-redux';
import { accountSelector } from '@/store/selectors/authSelectors';
import { setAccountAction } from '@/store/actions/authActions';

function Avatar() {
    const account = useSelector(accountSelector);
    const [selfie, setSelfie] = useState<File | undefined>();
    const [isProcessing, setIsProcessing] = useState(false);
    const dispatch = useDispatch();

    const handleAddSelfie = useCallback((image: File) => {
        setSelfie(image);
    }, [setSelfie]);

    const handleDone = useCallback((image: File, croppedArea: Area, zoom: string) => {
        setIsProcessing(true)
        accountService.updateSelfie(image, croppedArea, zoom)
            .then((res) => {
                const account = res.data;
                dispatch(setAccountAction({ isLoaded: true, ...account }))
            });
    }, []);

    if (account.user?.selfieId) {
        return <Navigate to="/" replace/>
    }

    return (
        <>
            <AddSelfie onAddSelfie={handleAddSelfie}/>
            {
                selfie &&
                <CropImage initialImage={selfie}
                           isProcessing={isProcessing}
                           onDone={handleDone}
                           onDiscard={() => {
                               setSelfie(undefined);
                           }}/>
            }
        </>
    );
}

export default Avatar;
