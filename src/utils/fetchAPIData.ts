const axios = require("axios");
require('dotenv').config()

async function fetchData(stock: string) {
  try {
    const apiKey = process.env.API_KEY_2
    const response = await axios.get(
      'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=' +
        stock +
        '&apikey=' + apiKey
    );
 
    return response.data;

  } catch (error) {
    console.log(error);
    return error
  }
}

export { fetchData };
