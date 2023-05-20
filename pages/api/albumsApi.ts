const getAlbums = async () => {
  try {
    const response = await fetch(`${process.env.dataUrl}/api/Albums/GetAlbums`);

    if (!response.ok) {
      throw new Error("Failed to fetch Albums");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getAlbums;
