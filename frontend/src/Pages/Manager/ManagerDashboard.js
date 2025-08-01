import { Link, Outlet } from 'react-router-dom';
import './ManagerDashboard.css'; // فرض بر این که فایل CSS جدا داری

const ManagerDashboard = () => {
  return (
    <div>
      <nav className="dashboard-nav">
        <Link className="dashboard-button" to="back-material">داشبورد گاری پشت</Link>
        <Link className="dashboard-button" to="front-material">ثبت ماده اولیه رو</Link>
        <Link className="dashboard-button" to="cupe_selection">انتخاب کوپ</Link>
        <Link className="dashboard-button" to="vacium_material">ثبت ماده اولیه وکیوم</Link>
        <Link className="dashboard-button" to="reject_stone">سنگ های برگشتی</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default ManagerDashboard;
