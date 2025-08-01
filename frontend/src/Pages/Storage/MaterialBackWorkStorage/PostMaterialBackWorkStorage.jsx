import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostAddItemMaterialFrontWorkStorage() {
    const [formData, setFormData] = useState({
        material: '',
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
        if (!formData.material || !formData.DataTime) {
            setError('لطفاً تمام فیلدها را پر کنید');
            setIsSubmitting(false);
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/api/storage/backworkmatrial/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            console.log('Item created:', response.data);
            setFormData({        
                    material: '',
                    DataTime:'', 
                });
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
                    <label htmlFor="material">کد کوپ :</label>
                    <input
                        id="material"
                        type="text"
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="epocsi">اپوکسی:</label>
                    <input
                        id="epocsi"
                        type="text"
                        name="epocsi"
                        value={formData.epocsi}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
    
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="zhel">ژل:</label>
                    <input
                        id="zhel"
                        type="text"
                        name="zhel"
                        value={formData.zhel}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mastic">ماستیک:</label>
                    <input
                        id="mastic"
                        type="text"
                        name="mastic"
                        value={formData.mastic}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rezin">رزین:</label>
                    <input
                        id="rezin"
                        type="text"
                        name="rezin"
                        value={formData.rezin}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bakiye">بخیه:</label>
                    <input
                        id="bakiye"
                        type="text"
                        name="bakiye"
                        value={formData.bakiye}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tori">توری:</label>
                    <input
                        id="tori"
                        type="text"
                        name="tori"
                        value={formData.tori}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
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

export default PostAddItemMaterialFrontWorkStorage;