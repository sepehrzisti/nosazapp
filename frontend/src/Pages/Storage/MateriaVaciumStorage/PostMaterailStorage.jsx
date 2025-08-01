import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostAddItemMaterialVaciumStorage() {
    const [formData, setFormData] = useState({
        material: '',
        tori400: '',
        toridocupe: '',
        torivacium: '',
        lolerodei: '',
        lolevacium: '',
        pelastic: '',
        epocsivacium: '',
        zhelvacium: '',
        rezin: '',
        chasbeghiri: '',
        chasbedotarafe: '',
        chasbe123: '',
        mayea123: '',
        DataTime: ''
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

        if (!formData.material) {
            setError('لطفاً فیلد "ایدی کوپ" را وارد کنید');
            setIsSubmitting(false);
            return;
        }

        // پاکسازی داده‌ها: تبدیل مقادیر خالی به null و اعداد به number
        const cleanData = Object.fromEntries(
            Object.entries(formData).map(([key, value]) => {
                if (value === '') return [key, null];
                if (!isNaN(value)) return [key, parseFloat(value)];
                return [key, value];
            })
        );

        try {
            const response = await axios.post(
                'http://localhost:8000/api/storage/vaciummaterial/',
                cleanData,
                { headers: { 'Content-Type': 'application/json' } }
            );

            console.log('Item created:', response.data);
            setFormData({
                material: '',
                tori400: '',
                toridocupe: '',
                torivacium: '',
                lolerodei: '',
                lolevacium: '',
                pelastic: '',
                epocsivacium: '',
                zhelvacium: '',
                rezin: '',
                chasbeghiri: '',
                chasbedotarafe: '',
                chasbe123: '',
                mayea123: '',
                DataTime: ''
            });
            navigate('', { state: { success: true } });
        } catch (error) {
            console.error('Error creating item:', error.response?.data || error.message);
            setError(error.response?.data || 'خطا در ارسال داده');
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
                    <label htmlFor="material">ایدی کوپ :</label>
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
                    <label htmlFor="tori400">توری:</label>
                    <input
                        id="tori400"
                        type="text"
                        name="tori400"
                        value={formData.tori400}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="toridocupe">توری کوپ:</label>
                    <input
                        id="toridocupe"
                        type="text"
                        name="toridocupe"
                        value={formData.toridocupe}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="torivacium">توری وکیوم:</label>
                    <input
                        id="torivacium"
                        type="text"
                        name="torivacium"
                        value={formData.torivacium}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lolerodei">لوله روده ای:</label>
                    <input
                        id="lolerodei"
                        type="text"
                        name="lolerodei"
                        value={formData.lolerodei}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lolevacium">لوله وکیوم :</label>
                    <input
                        id="lolevacium"
                        type="text"
                        name="lolevacium"
                        value={formData.lolevacium}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pelastic"> پلاستیک:</label>
                    <input
                        id="pelastic"
                        type="text"
                        name="pelastic"
                        value={formData.pelastic}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="epocsivacium">اپوکسی :</label>
                    <input
                        id="epocsivacium"
                        type="text"
                        name="epocsivacium"
                        value={formData.epocsivacium}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="zhelvacium"> ژل:</label>
                    <input
                        id="zhelvacium"
                        type="text"
                        name="zhelvacium"
                        value={formData.zhelvacium}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rezin"> رزین:</label>
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
                    <label htmlFor="chasbeghiri">چسب قیری:</label>
                    <input
                        id="chasbeghiri"
                        type="text"
                        name="chasbeghiri"
                        value={formData.chasbeghiri}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="chasbedotarafe">چسب دوطرفه:</label>
                    <input
                        id="chasbedotarafe"
                        type="text"
                        name="chasbedotarafe"
                        value={formData.chasbedotarafe}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="chasbe123">چسب 123:</label>
                    <input
                        id="chasbe123"
                        type="text"
                        name="chasbe123"
                        value={formData.chasbe123}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mayea123">مایع 123 :</label>
                    <input
                        id="mayea123"
                        type="text"
                        name="mayea123"
                        value={formData.mayea123}
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

export default PostAddItemMaterialVaciumStorage;