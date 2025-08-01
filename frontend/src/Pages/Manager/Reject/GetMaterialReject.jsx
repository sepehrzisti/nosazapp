import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetItemListReject() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/manager/reject/');
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
        <h1>لیست برگشتی</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>کد اسلب</th>
                <th> برگشت به گاری پشت </th>
                <th> برگشت به گاری رو </th>
                <th> برگشت به پیش ساب  </th>
                <th> برگشت به ساب </th>
                <th>تاریخ و زمان</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.numslab}</td>
                  <td>{item.BackWorkToReject}</td>
                  <td>{item.FrontWorkToReject}</td>
                  <td>{item.PishSabReject}</td>
                  <td>{item.SabReject}</td>
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

export default GetItemListReject;
