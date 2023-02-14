import { useEffect, useState } from 'react';

import NoAlbums from './components/noAlbums/NoAlbums';
import WithAlbums from './components/withAlbums/WithAlbums';

import albumService from '@/api/services/album';
import { IAlbum } from '@/api/types/albumResponses';
import Loader from '@/components/shared/loader/Loader';

function Home() {
    const [albums, setAlbums] = useState<IAlbum[] | undefined>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        albumService.getAlbums().then((albums) => {
            albums.reverse()
            setAlbums(albums);
            setLoading(false)
        });
    }, []);

    return (
        <>
            {
                loading &&
                <Loader/>
            }
            {
                albums &&
                <div className="home">
                    {
                        albums.length > 0 ?
                            <WithAlbums albums={albums}/> :
                            <NoAlbums/>
                    }
                </div>
            }
        </>

    );
}

export default Home;
