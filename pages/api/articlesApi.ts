const getArticles = async (DocType: number, lang?: string) => {
  try {
    const response = await fetch(
      `${process.env.dataUrl}/api/Articls/ArticleData?docType=${DocType}&docLang=${lang}`
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
