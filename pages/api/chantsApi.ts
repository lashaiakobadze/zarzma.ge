const getChants = async () => {
    try {
      const response = await fetch(
        `https://zarzmaapi.azurewebsites.net/api/chants/ChantData`
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
  
  export default getChants;
  