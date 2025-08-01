import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostAddItemMaterialVacium() {
  const [formData, setFormData] = useState({
    IDCUPE: '',
    DataTime: '',
    vacium: false,
    Boghche: false,
    DontUse: false,
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cupeOptions, setCupeOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // بارگذاری گزینه‌های کوپ از API
    async function fetchCupeOptions() {
      try {
        const response = await axios.get('http://localhost:8000/api/cupeinter/'); // آدرس API خودت رو قرار بده
        setCupeOptions(response.data);
      } catch (err) {
        console.error('خطا در دریافت کوپ‌ها:', err);
      }
    }
    fetchCupeOptions();
  }, []);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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
      const response = await axios.post('http://localhost:8000/api/manager/materialvacium/', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Item created:', response.data);
      setFormData({
        IDCUPE: '',
        DataTime: '',
        vacium: false,
        Boghche: false,
        DontUse: false,
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
          <label htmlFor="IDCUPE">کد کوپ :</label>
          <select
            id="IDCUPE"
            name="IDCUPE"
            value={formData.IDCUPE}
            onChange={handleChange}
            required
          >
            <option value="">-- انتخاب کوپ --</option>
            {cupeOptions.map(cupe => (
              <option key={cupe.IDCUPE} value={cupe.IDCUPE}>
                {cupe.NameStone || cupe.IDCUPE}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="vacium">وکیوم:</label>
          <input
            id="vacium"
            type="checkbox"
            name="vacium"
            checked={formData.vacium}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Boghche">بقچه:</label>
          <input
            id="Boghche"
            type="checkbox"
            name="Boghche"
            checked={formData.Boghche}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="DontUse">هیچ کدام:</label>
          <input
            id="DontUse"
            type="checkbox"
            name="DontUse"
            checked={formData.DontUse}
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

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? 'در حال ثبت...' : 'ثبت زمان'}
        </button>
      </form>
    </div>
  );
}

export default PostAddItemMaterialVacium;
