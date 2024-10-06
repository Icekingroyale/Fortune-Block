import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/test')  // Link to your Flask API
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className='dashboard-container'>
      <h1>Dashboard</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
