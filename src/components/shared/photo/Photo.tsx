import styled from 'styled-components';
import { memo, useEffect, useState } from 'react';
import { IPhoto } from '@/api/tmp/data';

import FullPhoto from './components/fullPhoto/FullPhoto';

interface IImageStyle {
    height?: string;
    width?: string;
}

interface IPhotoProps {
    photo: IPhoto;
    height: number;
    width: number;
}

function Photo({ photo, height, width }: IPhotoProps) {
    const [imageStyle, setImageStyle] = useState<IImageStyle | undefined>();
    const [showFullImage, setShowFullImage] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = photo.unlockedThumbnailUrl;
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
    }, [photo]);

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
                    imageStyle && <img src={photo.unlockedThumbnailUrl} alt="photo" style={imageStyle}/>
                }
            </PhotoContainer>

            {
                showFullImage &&
                <FullPhoto photoUrl={photo.unlockedPhotoUrl}
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
