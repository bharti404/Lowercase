import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Curvedcard from '../../Cards/Curvedcard'

const Abumlist = () => {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/album/getall');
        setData(response.data); // Adjust this to match the data structure returned by the API
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("iam thhd dtat", data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;



  return (
    <div>

      <Curvedcard albums={data}/>


        
    </div>
  )
}

export default Abumlist