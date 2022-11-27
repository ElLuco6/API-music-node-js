const axios = require('axios');

// This route is handled by a cache middleware, see the axios router
exports.getMeteo = async (req, res, next) => {
    const meteoResult = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=48.8567&longitude=2.3510&hourly=temperature_2m');
    if (meteoResult && meteoResult.data) {
        res.json(meteoResult.data);
    } else {
        res.status(400).json({success: false, message: 'Cannot get meteo result'});
    }
}


  //metre l'objet de la recherche dans un query dans url exemple : http://localhost:3000/music/ytb?query=kaaris
  exports.getDiscographie= async(req, res, next)=>{
    
    console.log(toto);
    const ytboptions = {
    method: 'GET',
    url: 'https://youtube-music1.p.rapidapi.com/v2/search',
    /* params: {query: toto}, */
    headers: {
      'X-RapidAPI-Key': '40e54bf14amsh48b4a778fe941a7p108f9bjsn7bd56ef28cb8',
      'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    }
  };

  const result = await  axios.request(ytboptions)
  if (result) {
    res.json(result.data);
} else {
    res.status(400).json({success: false, message: 'Cannot get  result'});
}
  }
  
  exports.top20 = async(req,res,next)=>{
    const options = {
      method: 'GET',
      url: 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners',
      headers: {
        'X-RapidAPI-Key': '40e54bf14amsh48b4a778fe941a7p108f9bjsn7bd56ef28cb8',
        'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
      }
    };
    
    
  const result = await  axios.request(options)
  if (result) {
    res.json(result.data);
} else {
    res.status(400).json({success: false, message: 'Cannot get  result'});
}
  }
