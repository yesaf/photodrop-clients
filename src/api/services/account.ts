import { AxiosResponse } from 'axios';
import defaultClient from '../http/default';
import { Area } from 'react-easy-crop';
import { IAccountResponse } from '@/api/types/authResponses';

class AuthService {
    updateSelfie(image: File, croppedArea: Area, zoom: string): Promise<AxiosResponse<IAccountResponse>> {
        const formData = new FormData();

        formData.append('files', image);
        formData.append('shiftX', `${croppedArea.x}`);
        formData.append('shiftY', `${croppedArea.y}`);
        formData.append('width', `${croppedArea.width}`);
        formData.append('height', `${croppedArea.height}`);
        formData.append('zoom', zoom)

        return defaultClient.post('/user/upload-selfie', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).catch(e => {
            return e.response;
        });
    }

    updateName(fullName: string): Promise<AxiosResponse<IAccountResponse>> {
        return defaultClient.put('/user/update-name', {
            fullName,
        }).catch(e => {
            return e.response;
        });
    }
}

export default new AuthService();
