import { useState } from 'react';
import AddSelfie from './components/addSelfie/AddSelfie';
import CropImage from '../../shared/cropImage/CropImage';

function Avatar() {
    const [selfie, setSelfie] = useState<string | undefined>();

    const handleAddSelfie = (image: string) => {
        setSelfie(image)
    }

    return (
        <>
            {
                selfie ?
                    <CropImage initialImage={selfie} onDone={() => {}} onDiscard={() => {setSelfie(undefined)}} /> :
                    <AddSelfie onAddSelfie={handleAddSelfie}/>
            }
        </>
    );
}

export default Avatar;
