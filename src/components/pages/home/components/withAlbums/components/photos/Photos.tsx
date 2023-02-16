import styled from 'styled-components';
import { memo, useMemo } from 'react';
import Photo from '@/components/shared/photo/Photo';
import { IAlbum, IPhoto } from '@/api/types/albumResponses';
import useIsMobile from '@/components/hooks/useIsMobile';

interface IPhotosProps {
    albums: IAlbum[];
}

interface IPhotoWithIsLocked extends IPhoto {
    isLocked: boolean;
}

interface ISizes {
    width: number;
    height: number;
}

function Photos({ albums }: IPhotosProps) {
    const isMobile = useIsMobile();
    const sizes: ISizes = useMemo(() => {
        return  isMobile ?
            { width: 125, height: 125 } :
            { width: 400, height: 400 };
    }, [isMobile])

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

