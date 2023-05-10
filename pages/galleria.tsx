import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Gallery = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/galleria/videos');
  }, []);

  return <div>Redirecting...</div>;
};

export default Gallery;
