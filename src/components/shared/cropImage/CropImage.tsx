import Cropper, { Area } from 'react-easy-crop';
import { useState, useCallback, useEffect } from 'react';
import closeIcon from '@/assets/images/icons/close.svg';
import { Background, Container, ActionsContainer, CropContainer, CropHeader } from './CropImage.styles';

interface CropImageProps {
    initialImage: string;
    onDone: (croppedArea: Area, croppedImage: string) => void;
    onDiscard: () => void;
}

function CropImage({ initialImage, onDone, onDiscard }: CropImageProps) {
    const [image, setImage] = useState(initialImage);
    const [coverType, setCoverType] = useState<'vertical-cover' | 'horizontal-cover' | undefined>();

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState<Area | null>(null);

    const handleRetake = useCallback(() => {
        document.getElementById('retake-input')?.click();
    }, []);

    useEffect(() => {
        const i = new Image();
        i.src = image;
        i.onload = () => {
            setCoverType(i.width > i.height ? 'vertical-cover' : 'horizontal-cover');
        };
    }, [image]);

    const handleSelfieChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result as string);
            };
        }
    }, []);

    const onCropComplete = useCallback((croppedArea: Area) => {
        console.log(croppedArea);
        setCroppedArea(croppedArea);
    }, [setCroppedArea]);

    return (
        <Background>
            <Container>
                <CropHeader>
                    <button onClick={onDiscard} className="close">
                        <svg>
                            <image href={closeIcon}/>
                        </svg>
                    </button>

                    <span>Take selfie</span>
                </CropHeader>

                <span className="explain">
                    Drag and zoom image to crop
                </span>

                <CropContainer>
                    {
                        coverType &&
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            cropShape={'round'}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            showGrid={false}
                            cropSize={{ width: 285, height: 285 }}
                            objectFit={coverType}
                        />
                    }
                </CropContainer>

                <ActionsContainer>
                    <input id="retake-input" type="file"
                           accept="image/*" onChange={handleSelfieChange}/>
                    <button className="retake" onClick={handleRetake}>Retake</button>
                    <button className="save" onClick={() => onDone(croppedArea!, initialImage)}>Done</button>
                </ActionsContainer>
            </Container>
        </Background>
    );
}


export default CropImage;
