import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetSabReject() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/sabreject/');
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
            <h1>برگشتی </h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.SlabNumber} - {item.ResicetoSab} - {item.DataTime}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GetSabReject;