import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://backend:5000/api/data`);
      setData(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data from the backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>PostgreSQL Data Viewer</h1>
      <button onClick={fetchData} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Load Data
      </button>

      {loading && <p>Loading...</p>}

      {data.length > 0 && (
        <ul style={{ marginTop: '1rem' }}>
          {data.map((item, index) => (
            <li key={item.id || index}>
              {JSON.stringify(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
