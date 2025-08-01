import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CoupeStorageItemList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/cupeinter/');
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchItems();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Items</h1>
            <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>کد کوپ</th>
                        <th>اسم سنک</th>
                        <th>نوع سنگ</th>
                        <th>ارتفاع</th>
                        <th>عرض</th>
                        <th>مالک</th>
                        <th>پلاک ماشین</th>
                        <th>تاریخ</th>

                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.IDCUPE}</td>
                            <td>{item.NameStone}</td>
                            <td>{item.CupeType}</td>
                            <td>{item.CupeHeight}</td>
                            <td>{item.CupeWidth}</td>
                            <td>{item.CupeOwner}</td>
                            <td>{item.CarTwoNumber}-{item.CarAlfabet}-{item.CarThreeNumber}</td>
                            <td>{new Date(item.DataTime).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CoupeStorageItemList;
