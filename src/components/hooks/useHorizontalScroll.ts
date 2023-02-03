import { useRef, useEffect } from 'react';

export function useHorizontalScroll() {
    // Create a ref that we add to the element (div container) for which we want to detect horizontal scroll

    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: 'smooth',
                });
            };
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);
    return elRef;
}
