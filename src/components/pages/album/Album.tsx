import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import albums from '@/api/tmp/data';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from '@/components/shared/footer/Footer';
import Loader from '@/components/shared/loader/Loader';

function Album() {
    const { id } = useParams<{ id: string }>();
    const album = useMemo(() =>
        albums.find(album => album.albumId === id)
        , [id]);

    if (!album) {
        return <Loader/>;
    }

    return (
        <>
            <Header albumName={album.name}
                    albumDate={album.createdAt}
                    photosCount={album.photos.length}/>
            <Main albumPhotos={album.photos}/>
            <Footer/>
        </>
    )

}



export default Album;
