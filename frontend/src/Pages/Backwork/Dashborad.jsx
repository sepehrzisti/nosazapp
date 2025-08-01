import { Link, Outlet, Route, Router, Routes } from 'react-router-dom';

const BackWorkDashboard = () => {
  return (
    <div>
      <nav>
        <li>
        <Link to="back_work">ثبت زمان</Link>
        </li>
        <li>
        <Link to="back_work_reject">ثبت سنگ برگشتی</Link>
        </li>
      </nav>
      <Outlet/>
    </div>
  );
}
export default (BackWorkDashboard);