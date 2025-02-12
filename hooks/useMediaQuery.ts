// hooks/useMediaQuery.js
import { useState, useEffect } from 'react';

function useMediaQuery(query : string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handler = (event: any) => setMatches(event.matches);
        mediaQuery.addEventListener('change', handler);
        setMatches(mediaQuery.matches);

        return () => {
            mediaQuery.removeEventListener('change', handler);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;
