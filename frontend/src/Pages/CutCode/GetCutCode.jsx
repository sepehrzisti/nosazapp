import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetCutCodeItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/cutcode/');
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
        <h1>لیست کدگذاری‌ها</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>کد کوپ</th>
                <th>توضیحات</th>
                <th>تاریخ</th>
                <th>سایزها</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.IDCUPE}</td>
                  <td>{item.NoteCutCode}</td>
                  <td>{new Date(item.DataTime).toLocaleString()}</td>
                  <td>
                    {item.sizes && item.sizes.length > 0 ? (
                      <ul style={{ paddingLeft: '25px', margin: 0 }}>
                        {item.sizes.map((size, i) => (
                          <li key={i} style={{ listStyleType: 'none', marginBottom: '4px' }}>
                            کد اسلب: {size.NumsCutCod} | ارتفاع: {size.HeihtCutCode} | عرض: {size.WidthCutCode} | ضخامت: {size.ThicknessCutCode}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      'سایزی موجود نیست'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GetCutCodeItemList;
