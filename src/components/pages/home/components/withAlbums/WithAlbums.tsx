import { IAlbum } from '@/api/types/albumResponses';
import Albums from './components/albums/Albums';
import Photos from './components/photos/Photos';
import { useMemo } from 'react';

import { Container } from './WithAlbums.styles';

interface IWithAlbumsProps {
    albums: IAlbum[];
}

const isAnyAlbumLocked = (albums: IAlbum[]) => albums.some((album) => !album.isUnlocked);


function WithAlbums({ albums }: IWithAlbumsProps) {
    const showUnlockButton = useMemo(() => isAnyAlbumLocked(albums), [albums]);

    return (
        <Container>
            <Albums albums={albums}/>
            <Photos albums={albums}/>
            {
                showUnlockButton &&
                <button className="unlock-button">
                    Unlock your photos
                </button>
            }
        </Container>
    );
}

export default WithAlbums;
