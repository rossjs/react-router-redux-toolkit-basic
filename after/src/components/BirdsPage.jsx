import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBirdsThunk } from '../thunks/fetchBirds';
import { getBirdCatalog, getBirdsSpotted } from '../slices/birds';
import { BirdEntry } from './BirdEntry';

const BirdsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBirdsThunk());
  }, []);

  const birds = useSelector(getBirdCatalog);
  const spotted = useSelector(getBirdsSpotted);

  return (
    <div>
      <h1>Bert&apos;s Birding Bucket List</h1>
      {!birds.length && <p>Loading...</p>}
      {birds.map((name) => (
        <BirdEntry
          key={name}
          name={name}
          hasBeenSpotted={spotted.includes(name)}
        />
      ))}
    </div>
  );
};

export default BirdsPage;
