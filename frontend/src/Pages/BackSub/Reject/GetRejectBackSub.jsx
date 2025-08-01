import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetPishSabReject() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // احتمالا باید آدرس api رو تغییر بدی اگر داده‌ها از backworkreject یا pishsabreject هست
        const response = await axios.get('http://localhost:8000/api/pishsabreject/'); 
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
        <h1>لیست PishSabReject</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>شماره Slab</th>
                <th>Resicetobackwork</th>
                <th>تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.SlabNumber}</td>
                  <td>{item.Resicetobackwork}</td>
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

export default GetPishSabReject;
