import { Link, Outlet, Route, Router, Routes } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <nav>
        <li>
        <Link to="front_work">ثبت زمان</Link>
        </li>
        <li>
        <Link to="front_work_reject">ثبت سنگ برگشتی</Link>
        </li>
      </nav>
      <Outlet/>
    </div>
  );
}
export default (Dashboard);