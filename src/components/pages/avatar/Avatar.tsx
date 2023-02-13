import { useState } from 'react';
import AddSelfie from './components/addSelfie/AddSelfie';
import CropImage from '../../shared/cropImage/CropImage';
import axios from 'axios';
import { Area } from 'react-easy-crop';

function Avatar() {
    const [selfie, setSelfie] = useState<File | undefined>();

    const handleAddSelfie = (image: File) => {
        setSelfie(image)
    }

    const handleDone = (image: File, croppedArea: Area, zoom: string) => {
        const formData = new FormData();
        formData.append('files', image);
        formData.append('shiftX', `${croppedArea.x}`);
        formData.append('shiftY', `${croppedArea.y}`);
        formData.append('width', `${croppedArea.width}`);
        formData.append('height', `${croppedArea.height}`);
        formData.append('zoom', zoom)

        axios.post('https://9aff-85-255-232-213.eu.ngrok.io/user/upload-selfie', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IjQ3ZDYxODE3LWExNzAtNDg5OC05NTE3LThmMTNkMzYwYzVlNiIsImlhdCI6MTY3NTk0MTE3NywiZXhwIjoxNjc2MDI3NTc3fQ.Msfu1f4osabfRujNhiPO0JyPz7_Uaf9lc-ULFuiTvUs`
            }
        }).catch(e => console.log(e.response))
    }

    return (
        <>
            <AddSelfie onAddSelfie={handleAddSelfie}/>
            {
                selfie &&
                    <CropImage initialImage={selfie}
                               onDone={handleDone}
                               onDiscard={() => {setSelfie(undefined)}} />
            }
        </>
    );
}

export default Avatar;
