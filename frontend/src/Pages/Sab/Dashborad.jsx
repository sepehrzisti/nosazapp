import { Link, Outlet, Route, Router, Routes } from 'react-router-dom';

const SabDashboard = () => {
  return (
    <div>
      <nav>
        <li>
        <Link to="sab">ثبت زمان</Link>
        </li>
        <li>
        <Link to="sab_reject">ثبت سنگ برگشتی</Link>
        </li>
      </nav>
      <Outlet/>
    </div>
  );
}
export default (SabDashboard);