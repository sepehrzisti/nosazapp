import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetItemListMaterialFrontWork() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/manager/matrialfrontwork/');
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
        <h1>لیست مواد گاری رو</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>کد کوپ</th>
                <th> فعال شدن اپوکسی </th>
                <th> فعال شدن ژل </th>
                <th> فعال شدن ماستیک </th>
                <th> فعال شدن رزین </th>
                <th> فعال شدن بخیه </th>
                <th> فعال شدن توری </th>
                <th>تاریخ و زمان</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.cut_code}</td>
                  <td>{item.epocsi_active}</td>
                  <td>{item.zhel_active}</td>
                  <td>{item.mastic_active}</td>
                  <td>{item.rezin_active}</td>
                  <td>{item.bakiye_active}</td>
                  <td>{item.tori_active}</td>
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

export default GetItemListMaterialFrontWork;
