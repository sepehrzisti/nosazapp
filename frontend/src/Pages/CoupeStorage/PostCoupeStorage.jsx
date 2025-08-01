import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function CoupeStorageAddItem() {
  const [formData, setFormData] = useState({
    IDCUPE: '',
    NameStone: '',
    CupeType: '',
    CupeHeight: '',
    CupeWeight: '',
    CupeWidth: '',
    CupeOwner: '',
    CarThreeNumber: '',
    CarAlfabet: '',
    CarTwoNumber: '',
    DataTime: '',
  });

  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.IDCUPE || !formData.DataTime) {
      setError('لطفاً تمام فیلدها را پر کنید');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/cupeinter/', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Item created:', response.data);
      setFormData({
        IDCUPE: '',
        NameStone: '',
        CupeType: '',
        CupeHeight: '',
        CupeWeight: '',
        CupeWidth: '',
        CupeOwner: '',
        CarThreeNumber: '',
        CarAlfabet: '',
        CarTwoNumber: '',
        DataTime: '',
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
    <div className="scroll-wrapper">
      <div className="form-container">
        <h2>ثبت زمان جدید</h2>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          {[
            { label: 'کد کوپ', name: 'IDCUPE' },
            { label: 'نام سنگ', name: 'NameStone' },
            { label: 'نوع سنگ', name: 'CupeType' },
            { label: 'ارتفاع سنگ', name: 'CupeHeight' },
            { label: 'عرض سنگ', name: 'CupeWidth' },
            { label: 'وزن سنگ', name: 'CupeWeight' },
            { label: 'صاحب سنگ', name: 'CupeOwner' },
            { label: 'پلاک ماشین', name: 'CarThreeNumber' },
            { label: 'الفبای ماشین', name: 'CarAlfabet' },
            { label: 'شماره ماشین دو رقم', name: 'CarTwoNumber' },
          ].map(({ label, name }) => (
            <div className="form-group" key={name}>
              <label htmlFor={name}>{label}:</label>
              <input
                id={name}
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

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

          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? 'در حال ثبت...' : 'ثبت زمان'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CoupeStorageAddItem;
