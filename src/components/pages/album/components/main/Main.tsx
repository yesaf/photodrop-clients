import { memo, useCallback, useEffect, useState } from 'react';
import Photo from '@/components/shared/photo/Photo';

import { StyledMain } from './Main.styles';

import { IPhoto } from '@/api/tmp/data';

interface IAlbumProps {
    albumPhotos: IPhoto[];
}

function Main({ albumPhotos }: IAlbumProps) {
    const [sizes, setSizes] = useState({
        width: 0,
        height: 0,
    });

    const adaptSize = useCallback(() => {
        const width = window.innerWidth;

        width < 1440 ?
            setSizes({ width: 125, height: 125 }) :
            setSizes({ width: 400, height: 400 });
    }, []);

    useEffect(() => {
        adaptSize();
        window.addEventListener('resize', adaptSize);

        return () => {
            window.removeEventListener('resize', adaptSize);
        };
    }, []);

    return (
        <StyledMain>
            <div className="photos-container">
                {
                    albumPhotos.map((photo: IPhoto, index) => (
                            <Photo key={index}
                                   photo={photo}
                                   {...sizes}/>
                        ),
                    )
                }
            </div>
            <button className="unlock-button">
                Unlock your photos
            </button>
        </StyledMain>
    );
}


export default memo(Main);
