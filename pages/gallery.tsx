import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Gallery = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/gallery/albums');
  }, []);

  return <div>Redirecting...</div>;
};

export default Gallery;
