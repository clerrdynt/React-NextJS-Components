// components/WelcomeCard.js
function WelcomeCard({ name }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>
          Welcome! Fellow <span style={styles.name}>{name}</span>
        </h1>
        <h2 style={styles.subheading}>I'm a Computer Engineering Student!</h2>
        <p style={styles.paragraph}>
          Currently patching bugs in the code of life—sometimes it compiles, sometimes I just pray and hit 'run'. Trying to script my own path, but God's still the lead developer. Life may throw exceptions, but hey, you're not the only one debugging at 3am.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0d0d0d', 
    color: '#ffffff',
    padding: '20px',
  },
  card: {
    maxWidth: '700px',
    textAlign: 'left',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  name: {
    color: '#ff7f88', 
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#ff7f88',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#cccccc',
  },
};

export default WelcomeCard;
