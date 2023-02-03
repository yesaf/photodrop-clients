import { IAlbum } from '@/api/tmp/data';
import styled from 'styled-components';
import { memo, useMemo } from 'react';

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
                        <Photo key={index}>
                            <img src={photo} alt=""/>
                        </Photo>
                    ))
                }
            </div>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
    
    width: 375px;
  }
`;

const Photo = styled.div`
  width: 125px;
  height: 125px;
  
  display: flex;
  justify-content: center;

  overflow: hidden;

  & > img {
    height: 125px;
  }
`;

export default memo(Photos);

