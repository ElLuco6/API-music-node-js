const axios = require('axios');


//metre l'objet de la recherche dans un query a l'intérieur url exemple : http://localhost:3000/music/ytb?query=kaaris
exports.getDiscographie = async (req, res, next) => {

 
  const ytboptions = {
    method: 'GET',
    params: {query: req.params.artiste },     
    url: 'https://youtube-music1.p.rapidapi.com/v2/search',
    headers: {
      'X-RapidAPI-Key': '40e54bf14amsh48b4a778fe941a7p108f9bjsn7bd56ef28cb8',
      'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    }
  };

  const result = await axios.request(ytboptions)
  if (result) {
    res.status(200).json(result.data)
  } else {
    res.status(400).json({
      success: false,
      message: 'Cannot get  result'
    });
  }
}

exports.top20 = async (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners',
    headers: {
      'X-RapidAPI-Key': '40e54bf14amsh48b4a778fe941a7p108f9bjsn7bd56ef28cb8',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  };


  const result = await axios.request(options)
  if (result) {
   
    res.status(200).json(result.data);
  } else {
    res.status(400).json({
      success: false,
      message: 'Cannot get  result'
    });
  }
}