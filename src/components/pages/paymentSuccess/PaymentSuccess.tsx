import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IAlbum } from '@/api/types/albumResponses';
import albumService from '@/api/services/album';

import Loader from '@/components/shared/loader/Loader';
import { Container, AlbumCoverContainer, SeePhotosButton } from './PaymentSuccess.styles';
import useIsMobile from '@/components/hooks/useIsMobile';

function PaymentSuccess() {
    const { id } = useParams<{ id: string }>();
    const [album, setAlbum] = useState<IAlbum | undefined>();
    const [coverStyle, setCoverStyle] = useState<{ width: string, height: string } | undefined>();
    const isMobile = useIsMobile();

    useEffect(() => {
        if (id) {
            albumService.getAlbum(id)
                .then((albums) => {
                    setAlbum(albums[0]);
                });
        }
    }, []);

    useEffect(() => {
        if (!album) return;
        const i = new Image();
        i.src = album.photos[0].url;
        i.onload = () => {
            const ratio = i.width / i.height;
            setCoverStyle({
                width: ratio > 1 ? '100%' : 'auto',
                height: ratio > 1 ? 'auto' : '100%',
            });
        }
    }, [album]);

    if (!album) {
        return <Loader/>;
    }

    return (
        <Container>
            <h2>Thank you!</h2>
            <span className="album-unlocked">The album <b>{album.name}</b> is now unlocked.</span>
            <span className="user-can">
                You can now download, share, post, and print your hi-res,
                watermark-free, glorious memories.
            </span>
            <AlbumCoverContainer>
                {
                    coverStyle &&
                    <img src={album.photos[0].url} alt="" style={coverStyle}/>
                }
            </AlbumCoverContainer>
            <SeePhotosButton to={'/albums/' + album.albumId}>
                See photos
            </SeePhotosButton>
            {
                !isMobile &&
                    <span className="details">You will receive an email with your order details.</span>
            }
        </Container>
    );
}

export default PaymentSuccess;
