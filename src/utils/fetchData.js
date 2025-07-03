export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1ed2063d74msh8c1937689ce1bfdp180c34jsnb776e559ea24',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1ed2063d74msh8c1937689ce1bfdp180c34jsnb776e559ea24',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ fetchData error:', error);
    return [];
  }
};
