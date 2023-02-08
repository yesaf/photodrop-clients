import { IAlbum } from '@/api/tmp/data';
import Albums from './components/albums/Albums';
import Photos from './components/photos/Photos';
import { useState } from 'react';

import { Container } from './WithAlbums.styles';

interface IWithAlbumsProps {
    albums: IAlbum[];
}

function WithAlbums({ albums }: IWithAlbumsProps) {
    const [showUnlockButton, setShowUnlockButton] = useState(true);

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
