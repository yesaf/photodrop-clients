import defaultClient from '../http/default';
import { IGetAlbumResponse, IGetAlbumsResponse } from '../types/albumResponses';

class AlbumService {
    getAlbums(): Promise<IGetAlbumsResponse> {
        return defaultClient.get('/dashboard/get-all')
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
}

export default new AlbumService();
