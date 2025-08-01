import { Link, Outlet, Route, Router, Routes } from 'react-router-dom';

const PishSabDashboard = () => {
  return (
    <div>
      <nav>
        <li>
        <Link to="pish_sab">ثبت زمان</Link>
        </li>
        <li>
        <Link to="pish_sab_reject">ثبت سنگ برگشتی</Link>
        </li>
      </nav>
      <Outlet/>
    </div>
  );
}
export default (PishSabDashboard);