import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostAddItemReject() {
    const [formData, setFormData] = useState({
        numslab: '',
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
        if (!formData.IDCUPE || !formData.DataTime) {
            setError('لطفاً تمام فیلدها را پر کنید');
            setIsSubmitting(false);
            return;
        }
        try {
            const response = await axios.post('http://localhost:8000/api/manager/reject/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            console.log('Item created:', response.data);
            setFormData({ numslab: '', DataTime: '' });
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
                    <label htmlFor="numslab">کد ورق:</label>
                    <input
                        id="numslab"
                        type="text"
                        name="numslab"
                        value={formData.numslab}
                        onChange={handleChange}
                        placeholder="مثال: 12345"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="BackWorkToReject"> برگشت به گاری بشت:</label>
                    <input
                        id="BackWorkToReject"
                        type="checkbox"
                        name="BackWorkToReject"
                        value={formData.BackWorkToReject}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="FrontWorkToReject">برگشت به گاری رو:</label>
                    <input
                        id="FrontWorkToReject"
                        type="checkbox"
                        name="FrontWorkToReject"
                        value={formData.FrontWorkToReject}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="PishSabReject">برگشت به پیش ساب :</label>
                    <input
                        id="PishSabReject"
                        type="checkbox"
                        name="PishSabReject"
                        value={formData.PishSabReject}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="SabReject">برگشت به ساب:</label>
                    <input
                        id="SabReject"
                        type="checkbox"
                        name="SabReject"
                        value={formData.SabReject}
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

export default PostAddItemReject;