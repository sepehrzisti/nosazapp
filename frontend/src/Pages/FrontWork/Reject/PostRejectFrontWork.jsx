import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostRejectFrontWorkAddItem() {
    const [formData, setFormData] = useState({
        SlabNumber: '',
        Resicetobackwork:'',
        DataTime:'',
    });
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // اعتبارسنجی اولیه
        if (!formData.DataTime) {
            setError('لطفاً تمام فیلدها را پر کنید');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/reject_front_work/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            console.log('Item created:', response.data);
            setFormData({         
                SlabNumber: '',
                Resicetobackwork: '',
                DataTime: '',
            });
            navigate('/', { state: { success: true } });
        } catch (error) {
            console.error('Error creating item:', error);
            setError(error.response?.data?.message || 'خطا در ارسال داده');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <h2>ثبت زمان جدید</h2>
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="SlabNumber"> برگشتی از مدیر تولید :</label>
                    <input
                        id="SlabNumber"
                        type="text"
                        name="SlabNumber"
                        value={formData.SlabNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Resicetobackwork"> برگشت سنگ از پیش ساب:</label>
                    <input
                        id="Resicetobackwork"
                        type="text" 
                        name="Resicetobackwork"
                        value={formData.Resicetobackwork}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="DataTime">تاریخ و زمان:</label>
                    <input
                        id="DataTime"
                        type="datetime-local"
                        name="DataTime"
                        value={formData.DataTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="submit-button"
                >
                    {isSubmitting ? 'در حال ثبت...' : 'ثبت زمان'}
                </button>
            </form>
        </div>
    );
}

export default PostRejectFrontWorkAddItem;