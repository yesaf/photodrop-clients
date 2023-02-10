import { useContext, useState } from 'react';
import NoAlbums from './components/noAlbums/NoAlbums';
import WithAlbums from './components/withAlbums/WithAlbums';

import data, { IAlbum } from '@/api/tmp/data';
import { AuthContext } from '@/routes/ProtectedRoute';

function Home() {
    const user = useContext(AuthContext);
    const [albums, setAlbums] = useState<IAlbum[] | undefined>(data);

    return (
        <div className="home">
            {
                albums && albums.length > 0 ?
                    <WithAlbums albums={albums}/> :
                    <NoAlbums/>
            }
        </div>
    );
}

export default Home;
