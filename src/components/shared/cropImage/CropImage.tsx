import Cropper, { Area } from 'react-easy-crop';
import { useState, useCallback, useEffect } from 'react';
import closeIcon from '@/assets/images/icons/close.svg';
import { Background, Container, ActionsContainer, CropContainer, CropHeader } from './CropImage.styles';
import DotsAnimation from './components/dotsAnimation/DotsAnimation';

interface CropImageProps {
    initialImage: File;
    onDone: (image: File, croppedArea: Area, zoom: string) => void;
    onDiscard: () => void;
    isProcessing: boolean;
}

function CropImage({ initialImage, onDone, onDiscard, isProcessing }: CropImageProps) {
    const [image, setImage] = useState<File>(initialImage);
    const [imageSrc, setImageSrc] = useState<string | undefined>();
    const [coverType, setCoverType] = useState<'vertical-cover' | 'horizontal-cover' | undefined>();

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState<Area | null>(null);

    const handleRetake = useCallback(() => {
        document.getElementById('retake-input')?.click();
    }, []);

    useEffect(() => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
            setImageSrc(reader.result as string);
        };
    }, [image]);

    useEffect(() => {
        if (!imageSrc) return;
        const i = new Image();
        i.src = imageSrc;
        i.onload = () => {
            setCoverType(i.width > i.height ? 'vertical-cover' : 'horizontal-cover');
        }
    }, [imageSrc]);

    const handleSelfieChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
        }
    }, []);

    const onCropComplete = useCallback((croppedArea: Area) => {
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
                            image={imageSrc}
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
                    <button className="save"
                            disabled={isProcessing}
                            onClick={() => onDone(image, croppedArea!, `${zoom}`)}>
                        {
                            isProcessing ?
                                <DotsAnimation/> :
                                'Save'
                        }
                    </button>
                </ActionsContainer>
            </Container>
        </Background>
    );
}


export default CropImage;
