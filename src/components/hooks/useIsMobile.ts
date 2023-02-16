import { useEffect, useState } from 'react';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1440);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}

export default useIsMobile;
