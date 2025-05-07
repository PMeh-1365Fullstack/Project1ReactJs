import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      height: '100vh',
      background: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
      textAlign: 'center',
      width: '320px',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '10px',
      fontWeight: 'bold',
      color: '#333',
    },
    subtitle: {
      fontSize: '1rem',
      marginBottom: '20px',
      color: '#777',
    },
    count: {
      fontSize: '3rem',
      margin: '20px 0',
      color: '#333',
    },
    button: {
      margin: '0 10px',
      padding: '10px 20px',
      fontSize: '1rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: '0.3s ease',
    },
    btnInc: {
      backgroundColor: '#4caf50',
      color: '#fff',
    },
    btnDec: {
      backgroundColor: '#f44336',
      color: '#fff',
    },
    btnReset: {
      backgroundColor: '#2196f3',
      color: '#fff',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🌟 React Counter App</h1>
        <p style={styles.subtitle}>Track your count with Increase, Decrease, and Reset actions.</p>
        <div style={styles.count}>{count}</div>
        <div>
          <button
            style={{ ...styles.button, ...styles.btnDec }}
            onClick={() => setCount(count - 1)}
          >
            - Decrease
          </button>
          <button
            style={{ ...styles.button, ...styles.btnInc }}
            onClick={() => setCount(count + 1)}
          >
            + Increase
          </button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button
            style={{ ...styles.button, ...styles.btnReset }}
            onClick={() => setCount(0)}
          >
             Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
