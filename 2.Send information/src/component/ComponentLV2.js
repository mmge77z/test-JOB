import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ComponentLv3 from './ComponentLV3';

const ComponentLv2 = () => {

  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:5000/api/web-categories')
      .then(response => {
        setCategory(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching categories:', err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return <div>
    
    <h2>ComponentLv2-web_categories</h2>
       {isLoading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p>Error: {error.response ? error.response.data.message : error.message}</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 mx-2">
            {category.map((categoryItem) => (
              <div key={categoryItem.id} className="col">
                <div className="card">
                  <img src='https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg' className="card-img-top" alt={categoryItem.title_th} style={{width:'100%'}} />
                  <div className="card-body">
                    <h6 className="card-title">{categoryItem.title_th}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <hr/>
    <ComponentLv3/>
  </div>;
};
export default ComponentLv2;
