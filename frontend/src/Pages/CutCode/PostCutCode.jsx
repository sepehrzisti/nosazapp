import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostCutCodeAddItem() {
    const [furnaceList, setFurnaceList] = useState([]);
    const [formData, setFormData] = useState({
        IDCUPE: '',
        NoteCutCode: '',
        DataTime: '',
        sizes: [
            { NumsCutCod: '', HeihtCutCode: '', WidthCutCode: '', ThicknessCutCode: '' }
        ]
    });
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/furnace/')
            .then(response => {
                setFurnaceList(response.data);
                console.log("Furnace list:", response.data);
            })
            .catch(error => {
                console.error("خطا در دریافت لیست کدها", error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "IDCUPE") {
            setFormData(prev => ({
                ...prev,
                [name]: value === '' ? '' : Number(value)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));   
        }
    };

    const handleSizeChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSizes = [...formData.sizes];
        updatedSizes[index][name] = value === '' ? '' : Number(value);
        setFormData(prev => ({
            ...prev,
            sizes: updatedSizes
        }));
    };

    const addSize = () => {
        setFormData(prev => ({
            ...prev,
            sizes: [...prev.sizes, { NumsCutCod: '', HeihtCutCode: '', WidthCutCode: '', ThicknessCutCode: '' }]
        }));
    };

    const removeSize = (index) => {
        const updatedSizes = formData.sizes.filter((_, i) => i !== index);
        setFormData(prev => ({
            ...prev,
            sizes: updatedSizes
        }));
    };

    const prepareDataForSubmit = (data) => {
        return {
            ...data,
            IDCUPE: Number(data.IDCUPE),
            sizes: data.sizes.map(size => ({
                NumsCutCod: Number(size.NumsCutCod),
                HeihtCutCode: Number(size.HeihtCutCode),
                WidthCutCode: Number(size.WidthCutCode),
                ThicknessCutCode: Number(size.ThicknessCutCode),
            }))
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        if (!formData.IDCUPE || !formData.NoteCutCode || !formData.DataTime) {
            setError('لطفاً تمام فیلدهای اصلی را پر کنید');
            setIsSubmitting(false);
            return;
        }

        try {
            const payload = prepareDataForSubmit(formData);
            console.log('Sending data:', JSON.stringify(payload, null, 2));

            const response = await axios.post('http://localhost:8000/api/cutcode/', payload, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('Created:', response.data);
            setFormData({
                IDCUPE: '',
                NoteCutCode: '',
                DataTime: '',
                sizes: [{ NumsCutCod: '', HeihtCutCode: '', WidthCutCode: '', ThicknessCutCode: '' }]
            });
            navigate('/', { state: { success: true } });
        } catch (error) {
    if (error.response) {
        console.error('Response data:', error.response.data);
        alert('Error from server:\n' + JSON.stringify(error.response.data, null, 2));
        setError(JSON.stringify(error.response.data));
    } else {
        console.error('Error:', error.message);
        setError('خطا در ارسال داده');
    }
}
 
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <h2>ثبت کد برش جدید</h2>
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>کد کوپ:</label>
                    <select name="IDCUPE" value={formData.IDCUPE} onChange={handleChange} required>
                        <option value="">انتخاب کنید</option>
                        {furnaceList.map(item => (
                            <option >
                                {item.IDCUPE}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>توضیحات:</label>
                    <input type="text" name="NoteCutCode" value={formData.NoteCutCode} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>تاریخ و زمان:</label>
                    <input type="datetime-local" name="DataTime" value={formData.DataTime} onChange={handleChange} required />
                </div>

                <h4>سایزها</h4>
                {formData.sizes.map((size, index) => (
                    <div key={index} style={{ border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
                        <input
                            type="number"
                            name="NumsCutCod"
                            placeholder="تعداد"
                            value={size.NumsCutCod}
                            onChange={(e) => handleSizeChange(index, e)}
                        />
                        <input
                            type="number"
                            name="HeihtCutCode"
                            placeholder="ارتفاع"
                            value={size.HeihtCutCode}
                            onChange={(e) => handleSizeChange(index, e)}
                        />
                        <input
                            type="number"
                            name="WidthCutCode"
                            placeholder="عرض"
                            value={size.WidthCutCode}
                            onChange={(e) => handleSizeChange(index, e)}
                        />
                        <input
                            type="number"
                            name="ThicknessCutCode"
                            placeholder="ضخامت"
                            value={size.ThicknessCutCode}
                            onChange={(e) => handleSizeChange(index, e)}
                        />
                        {formData.sizes.length > 1 && (
                            <button type="button" onClick={() => removeSize(index)}>حذف</button>
                        )}
                    </div>
                ))}

                <button type="button" onClick={addSize}>افزودن سایز</button>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'در حال ارسال...' : 'ارسال'}
                </button>
            </form>
        </div>
    );
}

export default PostCutCodeAddItem;
