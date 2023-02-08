import { IAlbum, IPhoto } from '@/api/tmp/data';
import styled from 'styled-components';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Photo from '@/components/shared/photo/Photo';

interface IPhotosProps {
    albums: IAlbum[];
}

function Photos({ albums }: IPhotosProps) {
    const [sizes, setSizes] = useState({
        width: 0,
        height: 0,
    });

    const photos: IPhoto[] = useMemo(() => {
        const photosArray: IPhoto[] = [];

        albums.forEach((album: IAlbum) => {
            album.photos.forEach((photo) => {
                photosArray.push(photo);
            });
        });

        return photosArray;
    }, [albums]);

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
        <Container>
            <header>All photos</header>
            <div className="photos-container">
                {
                    photos.map((photo, index) => (
                        <Photo key={index} photo={photo}
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

