import { useState } from 'react';
import AddSelfie from './components/addSelfie/AddSelfie';
import CropImage from '../../shared/cropImage/CropImage';
import axios from 'axios';

function Avatar() {
    const [selfie, setSelfie] = useState<string | undefined>();

    const handleAddSelfie = (image: string) => {
        setSelfie(image)
    }

    return (
        <>
            <AddSelfie onAddSelfie={handleAddSelfie}/>
            {
                selfie &&
                    <CropImage initialImage={selfie} onDone={(image, croppedArea, zoom) => {
                        const formData = new FormData();
                        formData.append('files', image);
                        formData.append('shiftX', `${croppedArea.x}`);
                        formData.append('shiftY', `${croppedArea.y}`);
                        formData.append('width', `${croppedArea.width}`);
                        formData.append('height', `${croppedArea.height}`);
                        formData.append('zoom', zoom)

                        axios.post('/api/avatar', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                    }} onDiscard={() => {setSelfie(undefined)}} />
            }
        </>
    );
}

export default Avatar;
