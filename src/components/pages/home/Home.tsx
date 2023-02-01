import { useState } from 'react';
import NoAlbums from './components/noAlbums/NoAlbums';

function Home() {
    const [albums, setAlbums] = useState<any[] | undefined>();

    return (
        <div className="home">
            {
                albums && albums.length > 0 ?
                    'Albums' :
                    <NoAlbums/>
            }
        </div>
    );
}

export default Home;
