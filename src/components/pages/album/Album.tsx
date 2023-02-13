import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from '@/components/shared/footer/Footer';
import Loader from '@/components/shared/loader/Loader';
import { IAlbum } from '@/api/types/albumResponses';

import albumService from '@/api/services/album';

function Album() {
    const { id } = useParams<{ id: string }>();
    const [album, setAlbum] = useState<IAlbum | undefined>();

    useEffect(() => {
        if (id) {
            albumService.getAlbum(id).then((albums) => setAlbum(albums[0]));
        }
    }, [id]);

    if (!album) {
        return <Loader/>;
    }

    return (
        <>
            <Header albumName={album.name}
                    albumDate={album.createdAt}
                    photosCount={album.photos.length}/>
            <Main albumPhotos={album.photos} isLocked={!album.isUnlocked}/>
            <Footer/>
        </>
    );

}


export default Album;
