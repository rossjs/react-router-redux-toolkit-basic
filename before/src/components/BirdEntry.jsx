export const styles = {
  birdEntry: {
    display: 'flex',
    gap: '10px',
    padding: '10px',
  },
};

export const BirdEntry = ({ name, hasBeenSpotted }) => {
  const spottedStatus = hasBeenSpotted ? '✅' : '❌';
  return (
    <div style={styles.birdEntry}>
      <button type="button">{spottedStatus}</button>
      <span>{name}</span>
    </div>
  );
};
