import { AxiosResponse } from 'axios';
import defaultClient from '../http/default';
import { Area } from 'react-easy-crop';

class AuthService {
    setSelfie(image: File, croppedArea: Area, zoom: string): Promise<AxiosResponse<any>> {
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
            console.log(e.response);
            return e.response;
        });
    }

    changeName(name: string): Promise<AxiosResponse<any>> {
        return defaultClient.post('/user/change-name', {
            name,
        }).catch(e => {
            console.log(e.response);
            return e.response;
        });
    }
}

export default new AuthService();
