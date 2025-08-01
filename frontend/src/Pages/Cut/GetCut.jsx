import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetCutItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/cut/');
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) return <div>در حال بارگذاری...</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>لیست برش‌ها</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>کد کوپ</th>
                <th>کد ال فریم</th>
                <th>تعداد برش</th>
                <th>تاریخ</th>
                <th>توضیحات</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.IDCUPE}</td>
                  <td>{item.Elferam}</td>
                  <td>{item.NumbersCut}</td>
                  <td>{item.DataTime}</td>
                  <td>{item.CutNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GetCutItemList;
