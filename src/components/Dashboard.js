import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherChart from '../components/WeatherChart';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token=  localStorage.getItem('token'); 
    //   const authToken=JSON.parse(token)

      try {
        const response = await axios.get('http://localhost:5000/api/weather',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.dashboard}>
      <h1>Weather Dashboard</h1>
      <WeatherChart data={data} />
    </div>
  );
};

export default Dashboard;
