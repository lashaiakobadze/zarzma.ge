const getAlbumItem = async (id: string) => {
    try {
        const response = await fetch(
          `${process.env.dataUrl}/api/Albums/GetAlbumItem?ID=${id}`
        );
    
        if (!response.ok) {
          throw new Error("Failed to fetch Album Item");
        }
    
        const data = await response.json();
    
        return data;
      } catch (error) {
        console.error(error);
        return [];
      }
  };
  
  export default getAlbumItem;
  