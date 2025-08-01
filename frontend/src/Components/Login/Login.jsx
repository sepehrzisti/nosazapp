// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/auth/login/', formData);
      
      // ذخیره توکن و اطلاعات کاربر
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      // هدایت بر اساس نقش کاربر
      switch(res.data.user.role) {
        case 'managerfactory':
          navigate('/manager-dashboard');
          break;
          case 'backwork':
            navigate('/backwork-dashboard');
            break;
          case 'cupeinter':
            navigate('/cupeinter-dashboard');
            break;
          case 'cut':
            navigate('/cut-dashboard');
            break;
          case 'pishsab':
            navigate('/pishsab-dashboard');
            break;
          case 'vacium':
            navigate('/vacium-dashboard');
            break;
          case 'sab':
            navigate('/sab-dashboard');
            break;
          case 'furnace':
            navigate('/furnace-dashboard');
            break;
          case 'storage':
            navigate('/storage-dashboard');
            break;
          case 'cutcode':
            navigate('/cutcode-dashboard');
            break;
          case 'frontwork':
            navigate('/frontwork-dashboard');
            break;
        }
    } catch (err) {
      setError('نام کاربری یا رمز عبور اشتباه است');
    }
  };

  return (
       
<div className="container">
  <div className="form">
    <header>ورود به سیستم</header>
    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="نام کاربری"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="رمز عبور"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="ورود"
        className="button"
      />
    </form>
  </div>
</div>
  );
};

export default Login;