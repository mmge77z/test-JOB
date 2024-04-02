import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/navigations'); // Adjust the URL as needed
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Navigation Data</h1>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          Error fetching data: {error.message}
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Auth Roles</th>
                <th>Icon</th>
                <th>Comment</th>
                <th>Active</th>
                <th>Updated At</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.auth_roles.join(', ')}</td>
                  <td>{item.icon}</td>
                  <td>{item.comment}</td>
                  <td>{item.active ? 'Yes' : 'No'}</td>
                  <td>{item.updated_at}</td>
                  <td>{item.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
