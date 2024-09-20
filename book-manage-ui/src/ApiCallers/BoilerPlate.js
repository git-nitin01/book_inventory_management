import axios from 'axios';
export const  ApiBoilerPlate = async (method, url, data, sendType) => {
  const config = {
    method: method,
    url: url,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if(method !== 'GET')
    switch (sendType) {
      case 'json':
        config.data = data;
        break;
      case 'path':
        config.url = `${url}/${data}`;
        break;
      case 'query':
        config.url = `${url}?${data}`;
        break;
      default:
        throw new Error('Invalid sendType');
    }
  return await axios(config);
}