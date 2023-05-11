const getArticles = async (DocType: number) => {
  try {
    const response = await fetch(
      `https://zarzmaapi.azurewebsites.net/api/Articls/ArticleData?docType=${DocType}`
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
