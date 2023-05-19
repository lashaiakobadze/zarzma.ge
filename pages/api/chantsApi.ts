const getChants = async () => {
  try {
    const response = await fetch(`${process.env.dataUrl}/api/chants/ChantData`);

    if (!response.ok) {
      throw new Error("Failed to fetch Chants");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getChants;
