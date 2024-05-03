import axios from 'axios';

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const getDefinitions = async (word) => {
  try {
    const response = await axios.get(`${BASE_URL}${word}`);

    if (response.data.title === "No Definitions Found") {
      return { error: { title: "No Definitions Found" } };
    }

    const definitions = response.data.map((result) => ({
      definition: result.meanings[0]?.definitions[0]?.definition || 'Definition not found',
    }));

    return definitions;
  } catch (error) {
    if (error.response) {
      console.error('Error fetching definitions:', error.response.data);
      return { error: { title: "Error fetching definitions" } };
    } else if (error.request) {
      console.error('No response received from the server:', error.request);
      return { error: { title: "No response received from the server" } };
    } else {
      console.error('Error setting up the request:', error.message);
      return { error: { title: "Error setting up the request" } };
    }
  }
};
