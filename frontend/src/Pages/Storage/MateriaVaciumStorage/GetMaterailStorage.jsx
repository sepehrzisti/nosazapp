import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetItemListMaterialVaciumMaterialStorage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/storage/vaciummaterial/');
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
        <h1>لیست مواد وکیوم</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>کد کوپ</th>
                <th>توری 400</th>
                <th>توری کوپ</th>
                <th>توری وکیوم</th>
                <th>لوله روده ای</th>
                <th>لوله وکیوم</th>
                <th>پلاستیک</th>
                <th>اپوکسی وکیوم</th>
                <th>ژل وکیوم</th>
                <th>رزین</th>
                <th>چسب قیری</th>
                <th>چسب دوطرفه</th>
                <th>چسب 123</th>
                <th>مایع 123</th>
                <th>تاریخ و زمان</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.material}</td>
                  <td>{item.tori400}</td>
                  <td>{item.toridocupe}</td>
                  <td>{item.torivacium}</td>
                  <td>{item.lolerodei}</td>
                  <td>{item.lolevacium}</td>
                  <td>{item.pelastic}</td>
                  <td>{item.epocsivacium}</td>
                  <td>{item.zhelvacium}</td>
                  <td>{item.rezin}</td>
                  <td>{item.chasbeghiri}</td>
                  <td>{item.chasbe123}</td>
                  <td>{item.mayea123}</td>
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

export default GetItemListMaterialVaciumMaterialStorage;
