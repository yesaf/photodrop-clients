import styled from 'styled-components';
import { memo, useEffect, useState } from 'react';
import { IPhoto } from '@/api/types/albumResponses';

import FullPhoto from './components/fullPhoto/FullPhoto';

interface IImageStyle {
    height?: string;
    width?: string;
}

interface IPhotoProps {
    photo: IPhoto;
    height: number;
    width: number;
    isLocked: boolean;
}

function Photo({ photo, height, width, isLocked }: IPhotoProps) {
    const [imageStyle, setImageStyle] = useState<IImageStyle | undefined>();
    const [showFullImage, setShowFullImage] = useState(false);

    useEffect(() => {
        if (!width || !height) return;
        const image = new Image();
        image.src = photo.thumbnail;
        image.onload = () => {
            const imageWidth = image.width;
            const imageHeight = image.height;

            const imageStyle: IImageStyle = {};

            if (imageWidth > imageHeight) {
                imageStyle.height = `${height}px`;
            } else {
                imageStyle.width = `${width}px`;
            }

            setImageStyle(imageStyle);
        };
    }, [photo, width, height]);

    const handleImageClick = () => {
        setShowFullImage(true);
    };

    const handleFullImageClose = () => {
        setShowFullImage(false);
    }

    return (
        <>
            <PhotoContainer onClick={handleImageClick}
                            tabIndex={0}
                            onKeyPress={(e) =>
                                e.key === 'Enter' && handleImageClick()}
                            style={{ height: height + 'px', width: width + 'px' }}>
                {
                    imageStyle && <img src={photo.thumbnail} alt="photo" style={imageStyle}/>
                }
            </PhotoContainer>

            {
                showFullImage &&
                <FullPhoto photoUrl={photo.url}
                           albumId={photo.albumId}
                           isLocked={isLocked}
                           onClose={handleFullImageClose}/>
            }
        </>
    );
}

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`;

export default memo(Photo);
