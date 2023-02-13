import styled from 'styled-components';
import { memo, useEffect, useMemo, useState } from 'react';
import Photo from '@/components/shared/photo/Photo';
import { IAlbum, IPhoto } from '@/api/types/albumResponses';

interface IPhotosProps {
    albums: IAlbum[];
}

interface IPhotoWithIsLocked extends IPhoto {
    isLocked: boolean;
}

const getAdaptedSizes = () => {
    const width = window.innerWidth;

    return  width < 1440 ?
        { width: 125, height: 125 } :
        { width: 400, height: 400 };
}

function Photos({ albums }: IPhotosProps) {
    const [sizes, setSizes] = useState(getAdaptedSizes());

    const photos: IPhotoWithIsLocked[] = useMemo(() => {
        const photosArray: IPhotoWithIsLocked[] = [];

        albums.forEach((album: IAlbum) => {
            album.photos.forEach((photo) => {
                const photoWithIsLocked = Object.assign(photo, { isLocked: !album.isUnlocked });
                photosArray.push(photoWithIsLocked);
            });
        });

        return photosArray;
    }, [albums]);

    useEffect(() => {
        const handleResize = () => setSizes(getAdaptedSizes());
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>
            <header>All photos</header>
            <div className="photos-container">
                {
                    photos.map((photo, index) => (
                        <Photo key={index} photo={photo}
                               isLocked={photo.isLocked}
                               {...sizes}/>
                    ))
                }
            </div>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin-top: 40px;

  @media screen and (min-width: 1440px) {
    width: 1200px;
    margin-top: 100px;
  }

  & > header {
    padding: 0 15px;

    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  & > .photos-container {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
`;

export default memo(Photos);

