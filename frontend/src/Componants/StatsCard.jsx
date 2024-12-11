import React, { useState, useEffect } from 'react';

const StatsCard = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/stats')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setStats(data))
      .catch((error) => {
        console.error('Error fetching stats:', error);
        setError('Failed to load stats');
      });
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  if (!stats) return <div className="text-gray-500">Loading...</div>;

  return (
    <div className="flex justify-between p-5">
      {Object.keys(stats).map((key) => (
        <div
          key={key}
          className="bg-white rounded-lg shadow-md w-1/4 p-4 flex  m-3 "
        >
          <div className=" flex  items-center justify-between ">
            <div className='ml-2'>
            <p className='text-3xl'>{stats[key].icon}</p>
            <p className="text-lg font-bold mb-2">{stats[key].value}</p>
            <p className="text-sm text-gray-600 mb-2">{stats[key].title}</p>
            </div>
            <div
              className={`text-sm  ml-16 mt-16 ${
                stats[key].direction === 'up' ? 'text-red-500' : 'text-green-500'
              }`}
            >
              <div className='justify-'>
              {stats[key].percentage} {stats[key].direction}
              </div>
            <div/>
          
            
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
