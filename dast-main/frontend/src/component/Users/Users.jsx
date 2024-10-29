import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios'; 

export default function Users({ userId }) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://http://api.dastakappecitizenkp.com/weapons`);
        setUserData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchData(userId);
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-y-scroll'>
      {userData.map((item) => {
        return (
          <Cards
            key={item.id}
            img={item.img}
            name={item.name}
            fname={item.fname}
            cnic={item.cnic}
            address={item.address}
            license={item.license}
            weapon={item.weapon}
            cartidges={item.cartidges}
            issue={item.issue}
            valid={item.valid}
          />
        );
      })}
    </div>
  );
}
