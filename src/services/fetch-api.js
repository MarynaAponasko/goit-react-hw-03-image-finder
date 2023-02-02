import axios from 'axios';

export const fetchImages = async (searchQuery, page) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '31959866-848f36ee956c46b4ab479fa6b',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      q: searchQuery,
      per_page: '12',
    },
  });
};
