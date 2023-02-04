import { IAlbum } from '@/api/tmp/data';
import styled from 'styled-components';
import { memo, useMemo } from 'react';
import Photo from '@/components/shared/photo/Photo';

interface IPhotosProps {
    albums: IAlbum[];
}

function Photos({ albums }: IPhotosProps) {
    const photos = useMemo(() => {
        const photosArray: string[] = [];

        albums.forEach((album: IAlbum) => {
            album.photos.forEach((photo) => {
                photosArray.push(photo.lockedThumbnailUrl);
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
                        <Photo key={index} photoUrl={photo}
                               width={125} height={125}/>
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

