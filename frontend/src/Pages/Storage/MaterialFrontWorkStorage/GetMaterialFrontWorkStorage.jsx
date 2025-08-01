import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetItemListMaterialFrontWorkStorage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/storage/frontworkmatrial/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div>در حال بارگذاری...</div>;

   return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>لیست مواد گاری رو </h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th> کد کوپ </th>
                <th>مواد اپوکسی</th>
                <th> مواد ژل </th>
                <th>مواد ماستیک</th>
                <th>مواد رزین</th>
                <th>مواد بخیه</th>
                <th>مواد توری</th>
                <th>تاریخ و زمان</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.material}</td>
                  <td>{item.epocsi}</td>
                  <td>{item.zhel}</td>
                  <td>{item.mastic}</td>
                  <td>{item.rezin}</td>
                  <td>{item.bakiye}</td>
                  <td>{item.tori}</td>
                  <td>{new Date(item.DataTime).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default GetItemListMaterialFrontWorkStorage;
