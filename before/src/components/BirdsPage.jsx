import { BirdEntry } from './BirdEntry';

const birds = [];

const BirdsPage = () => (
  <div>
    <h1>Bert&apos;s Birding Bucket List</h1>
    {!birds.length && <p>Loading...</p>}
    {birds.map((name) => (
      <BirdEntry
        key={name}
        name={name}
      />
    ))}
  </div>
);

export default BirdsPage;
