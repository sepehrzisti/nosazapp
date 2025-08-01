import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostAddItemMaterialBackWork() {
    const [formData, setFormData] = useState({
        cut_code: '',
        Datatime:'',


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
        if (!formData.cut_code || !formData.DataTime) {
            setError('لطفاً تمام فیلدها را پر کنید');
            setIsSubmitting(false);
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/api/manager/materialbackwork/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            console.log('Item created:', response.data);
            setFormData({ cut_code: '', DataTime: '' });
            navigate('', { state: { success: true } });
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
                    <label htmlFor="cut_code">ایدی کوپ :</label>
                    <input
                        id="cut_code"
                        type="text"
                        name="cut_code"
                        value={formData.cut_code}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="epocsi_active">اپوکسی:</label>
                    <input
                        id="epocsi_active"
                        type="checkbox"
                        name="epocsi_active"
                        value={formData.epocsi_active}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="zhel_active">ژل:</label>
                    <input
                        id="zhel_active"
                        type="checkbox"
                        name="zhel_active"
                        value={formData.zhel_active}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mastic_active">ماستیک:</label>
                    <input
                        id="mastic_active"
                        type="checkbox"
                        name="mastic_active"
                        value={formData.mastic_active}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rezin_active">رزین:</label>
                    <input
                        id="rezin_active"
                        type="checkbox"
                        name="rezin_active"
                        value={formData.rezin_active}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bakiye_active">بخیه:</label>
                    <input
                        id="bakiye_active"
                        type="checkbox"
                        name="bakiye_active"
                        value={formData.bakiye_active}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tori_active">توری:</label>
                    <input
                        id="tori_active"
                        type="checkbox"
                        name="tori_active"
                        value={formData.tori_active}
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

export default PostAddItemMaterialBackWork;