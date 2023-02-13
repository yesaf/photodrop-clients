import frameologyLogo from '@/assets/images/frameology-logo.svg';
import climateNeutralLogo from '@/assets/images/climate-neutral-logo.svg';
import { Link } from 'react-router-dom';
import { StyledFooter, Container } from './Footer.styles';
import useIsMobile from '@/components/hooks/useIsMobile';

function Footer() {
    const isMobile = useIsMobile();

    return (
        <StyledFooter>
            <Container>
                <h2>PhotoDrop is brought to you by</h2>
                <svg className="frameology-logo">
                    <image href={frameologyLogo}/>
                </svg>
                <p className="info">
                    Our mission is to help people connect with their memories. If you framing some of the photos from
                    your experience, please consider using Frameology. It supports the photographers and makes PhotoDrop
                    possible.
                </p>
                <button className="frame-button">{isMobile ? 'Frame a photo' : 'Order photo'}</button>
                {
                    !isMobile &&
                    <p className="copyright">© 2022 FOM Online Inc</p>

                }
                <p className="contact">Questions? Get in touch - hello@photodrop.me</p>
                <svg className="climate-logo">
                    <image href={climateNeutralLogo}/>
                </svg>
                {
                    isMobile &&
                    <p className="copyright">© 2022 FOM Online Inc</p>
                }
                <Link to="/" className="terms">Terms</Link>
                <Link to="/" className="privacy">Privacy Party</Link>
            </Container>
        </StyledFooter>
    );
}

export default Footer;
