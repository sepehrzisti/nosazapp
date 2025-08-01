import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

function CutDashboard() {
  return (
    <div>
      <nav>
        <Link to="cut">ثبت زمان جدید</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default CutDashboard;
