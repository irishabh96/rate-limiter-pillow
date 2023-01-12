import axios, { AxiosError } from 'axios';
import * as faker from '@faker-js/faker';

(async () => {
  let requestCount = 0;

  while (true) {
    try {
      const response = await axios.post('http://localhost:4000/users', {
        name: faker.internet.userName(),
        email: faker.internet.email(),
      });

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
