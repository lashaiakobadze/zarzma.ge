const getArticles = async (DocType: number) => {
  try {
    const response = await fetch(
      `${process.env.dataUrl}/api/Articls/ArticleData?docType=${DocType}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Articles");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getArticles;
