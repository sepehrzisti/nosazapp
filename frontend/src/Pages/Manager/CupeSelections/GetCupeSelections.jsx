import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetItemListCupeSelection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/manager/stonductionstone/');
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
        <h1>لیست سنگ های انتخاب شده</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>کد کوپ</th>
                <th>تاریخ و زمان</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.IDCUPE}</td>
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

export default GetItemListCupeSelection;
