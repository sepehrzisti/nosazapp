import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetRejectBackWorkItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/backworkreject/');
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
        <h1>لیست موارد برگشت شده گاری پشت</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>برگشت از مدیر تولیر</th>
                <th>تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.SlabNumber}</td>
                  <td>{item.DataTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GetRejectBackWorkItemList;
