import defaultClient from '../http/default';
import { IGetAlbumResponse, IGetAlbumsResponse } from '../types/albumResponses';

class AlbumService {
    getAlbums(): Promise<IGetAlbumsResponse> {
        return defaultClient.get('/dashboard/get-all')
            .then((response) => {
                return response.data;
            })
            .catch(e => {
                if (e.response.status === 404) {
                    return [];
                }
            });
    }

    getAlbum(id: string): Promise<IGetAlbumResponse> {
        return defaultClient.get(`/dashboard/album/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch(e => {
                console.log(e.response);
                if (e.response.status === 404) {
                    return [];
                }
            });
    }

    payAlbum(id: string): Promise<string> {
        return defaultClient.post(`/pay/album/create-payment/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch(e => {
                return e.response;
            });
    }
}

export default new AlbumService();
