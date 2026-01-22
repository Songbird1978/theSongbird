// useImagePreloader.js
import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrl) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setLoaded(true);
  }, [imageUrl]);

  return loaded;
};

// App.js
function App() {
  const bgImageUrl = 'your-cloudinary-url';
  const imageLoaded = useImagePreloader(bgImageUrl);

  return (
    <div 
      className={`min-h-screen transition-opacity duration-500 ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {imageLoaded ? (
        // Your content
        <div>Content here</div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      )}
    </div>
  );
}