const getAlbumPhotoURL = async (id: number) => {
    try {
      const response = await fetch(
        `${process.env.dataUrl}/api/Albums/GetAlbumPhotoURL?ID=${id}`
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch Album photo url"); // 104
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  export default getAlbumPhotoURL;
  