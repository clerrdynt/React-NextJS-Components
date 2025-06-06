// components/Counter.js
'use client';  // Important for state/hooks in App Router components!

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Counter: {count}</h2>
        <div style={styles.buttons}>
          <button style={styles.button} onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button style={styles.button} onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#0d0d0d', // match page bg
    padding: '20px',
  },
  card: {
    border: '1px solid #ff7f88',
    borderRadius: '12px',
    padding: '30px',
    backgroundColor: '#1a1a1a',
    color: '#f5f5f5',
    boxShadow: '0 0 15px #ff7f88',
    maxWidth: '400px',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    marginBottom: '20px',
    color: '#ff7f88',
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ff7f88',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Counter;
