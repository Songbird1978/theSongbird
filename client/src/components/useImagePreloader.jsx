// useImagePreloader.js
import { useState, useEffect } from 'react';

function UseImagePreloader(bgImageUrl) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImageUrl;
    img.onload = () => setLoaded(true);
  }, [bgImageUrl]);

  return loaded;
};

export default UseImagePreloader;

