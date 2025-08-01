import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostFrontWorkAddItem() {
    const [formData, setFormData] = useState({
        IDCUPE: '',
        Elferam: '',
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
        if (!formData.IDCUPE || !formData.Datatime) {
            setError('لطفاً تمام فیلدها را پر کنید');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/frontwork/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            console.log('Item created:', response.data);
            setFormData({         
                IDCUPE: '',
                Elferam: '',
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
                    <label htmlFor="IDCUPE">کد کوپ :</label>
                    <input
                        id="IDCUPE"
                        type="text"
                        name="IDCUPE"
                        value={formData.IDCUPE}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Elferam"> کد ال فریم:</label>
                    <input
                        id="Elferam"
                        type="datetime-local"
                        name="Elferam"
                        value={formData.Elferam}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="DataTime">تاریخ:</label>
                    <input
                        id="DataTime"
                        type="text"
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

export default PostFrontWorkAddItem;