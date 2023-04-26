import { useDispatch } from 'react-redux';
import { addBirdToSpotted, removeBirdFromSpotted } from '../slices/birds';

export const styles = {
  birdEntry: {
    display: 'flex',
    gap: '10px',
    padding: '10px',
  },
};

export const BirdEntry = ({ name, hasBeenSpotted }) => {
  const spottedStatus = hasBeenSpotted ? '✅' : '❌';
  const dispatch = useDispatch();
  const handleClick = () => {
    if (hasBeenSpotted) {
      return dispatch(removeBirdFromSpotted(name));
    }
    dispatch(addBirdToSpotted(name));
  };
  return (
    <div style={styles.birdEntry}>
      <button type="button" onClick={handleClick}>{spottedStatus}</button>
      <span>{name}</span>
    </div>
  );
};
