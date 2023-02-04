import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface IImageStyle {
    height?: string;
    width?: string;
}

interface IPhotoProps {
    photoUrl: string;
    height: number;
    width: number;
}

function Photo({ photoUrl, height, width }: IPhotoProps) {
    const [imageStyle, setImageStyle] = useState<IImageStyle | undefined>();

    useEffect(() => {
        const image = new Image();
        image.src = photoUrl;
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
    }, [photoUrl]);

    return (
        <PhotoContainer style={{ height: height + 'px', width: width + 'px' }}>
            {
                imageStyle && <img src={photoUrl} alt="photo" style={imageStyle}/>
            }
        </PhotoContainer>
    );
}

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export default Photo;
