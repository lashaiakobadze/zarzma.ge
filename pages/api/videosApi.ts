const getVideos = async () => {
  try {
    const response = await fetch(
      "https://zarzmaapi.azurewebsites.net/api/Videos/VideoData"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getVideos;
