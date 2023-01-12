import axios, { AxiosError } from 'axios';

(async () => {
  let requestCount = 0;

  while (true) {
    try {
      const response = await axios.get('http://localhost:4000/users');
      console.log(`Request ${++requestCount} => Success => Status code: ${response.status}`);
    } catch (e: any) {
      if (e instanceof AxiosError) {
        console.log(`Request ${++requestCount} => Failed => Status code: ${e.response?.status}`);
      } else {
        console.log(`Error - ${e.message}`);
      }
    }
  }
})();
