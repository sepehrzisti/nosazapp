import { Link, Outlet } from 'react-router-dom';
import GetItemListMaterialVaciumMaterialStorage from './GetMaterailStorage.jsx';
import './DashboardStyles.css'; // استفاده از همون CSS مشترک

function MaterialVaciumDashboard() {
  return (
    <div>
      <nav style={{ padding: '20px' }}>
        <Link to="add-vaciummaterial" className="dashboard-button">
          ثبت زمان جدید
        </Link>
        <ul className="dashboard-list">
          <GetItemListMaterialVaciumMaterialStorage />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MaterialVaciumDashboard;
