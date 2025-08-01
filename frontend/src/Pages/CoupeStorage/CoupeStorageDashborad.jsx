import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

function CoupeStorageDashboard() {
  return (
    <div className="dashboard-container">
    <nav>
      <Link to="coupe-storage" className="nav-button">ثبت زمان جدید</Link>
    </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default CoupeStorageDashboard;
