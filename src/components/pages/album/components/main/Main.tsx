import { memo } from 'react';
import { IPhoto } from '@/api/tmp/data';
import styled from 'styled-components';
import Photo from '@/components/shared/photo/Photo';

interface IAlbumProps {
    albumPhotos: IPhoto[];
}

// const calcPhotosHeight = (photosCount: number, photoHeight: number) => {
//     const photosCountInRow = 3;
//     const rowsCount = Math.ceil(photosCount / photosCountInRow);
//
//     return rowsCount * photoHeight;
// };

function Main({ albumPhotos }: IAlbumProps) {

    return (
        <StyledMain>
            <div className="photos-container">
                {
                    albumPhotos.map((photo: IPhoto, index) => (
                            <Photo key={index}
                                   photoUrl={photo.unlockedThumbnailUrl}
                                   width={125} height={125}/>
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

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .photos-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 375px;
  }

  & > .unlock-button {
    margin: 40px 0;
    width: 345px;
    height: 50px;
    cursor: pointer;

    background: #3300CC;
    border-radius: 50px;
    border: none;

    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    color: #FFFFFF;

    &:hover {
      background: #2A00A6;
    }

  }
`;

export default memo(Main);
