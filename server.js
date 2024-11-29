const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const getData = async () => {
  try {
    const response = await axios.get('http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};


const givenConditions = (data) => {
  const conditions = {
    valuationFeePaid: data.isValuationFeePaid === true,
    ukResident: data.isUkResident === true,
    riskRatingMedium: data.riskRating === 'Medium',
    ltvBelow60: (data.loanRequired / data.purchasePrice) * 100 < 60,
  };
 return conditions;
};


app.get('/data', async (req, res) => {
  const data = await getData();
  if (!data) {
    return res.status(500).send('Error');
  }
 const conditions = givenConditions(data);
 res.send("succussfulyy get the data");
});



