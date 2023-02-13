import { memo, useEffect, useState } from 'react';
import Photo from '@/components/shared/photo/Photo';

import { StyledMain } from './Main.styles';

import { IPhoto } from '@/api/types/albumResponses';

interface IAlbumProps {
    albumPhotos: IPhoto[];
    isLocked: boolean;
}

const getAdaptedSizes = () => {
    const width = window.innerWidth;

    return width < 1440 ?
        { width: 125, height: 125 } :
        { width: 400, height: 400 };
};

function Main({ albumPhotos, isLocked }: IAlbumProps) {
    const [sizes, setSizes] = useState(getAdaptedSizes());

    useEffect(() => {
        const handleResize = () => setSizes(getAdaptedSizes());
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StyledMain>
            <div className="photos-container">
                {
                    albumPhotos.map((photo: IPhoto, index) => (
                            <Photo key={index}
                                   photo={photo}
                                   isLocked={isLocked}
                                   {...sizes}/>
                        ),
                    )
                }
            </div>
            {
                isLocked &&
                <button className="unlock-button">
                    Unlock your photos
                </button>
            }

        </StyledMain>
    );
}


export default memo(Main);
