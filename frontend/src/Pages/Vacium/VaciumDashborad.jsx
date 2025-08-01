import { Link, Outlet } from 'react-router-dom';

function VaciumDashboard() {
  return (
    <div>
      <nav>
        <Link to="vacium">ثبت زمان جدید</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default VaciumDashboard;
