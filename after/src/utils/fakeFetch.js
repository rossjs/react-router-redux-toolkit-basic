import { faker } from '@faker-js/faker';

const birds = Array.from(new Set(Array(50).fill(null).map(faker.animal.bird))).sort();

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fakeFetch = async () => {
  await wait(1000);
  return {
    ok: true,
    status: 200,
    json: async () => birds,
  };
};
