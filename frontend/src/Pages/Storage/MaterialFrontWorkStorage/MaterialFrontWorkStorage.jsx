import { Link, Outlet } from 'react-router-dom';
import GetItemListMaterialFrontWorkStorage from './GetMaterialFrontWorkStorage';
import './DashboardStyles.css'; // فرض بر اینکه CSS مشترک داری

function MaterialFrontWorkStorageDashboard() {
  return (
    <div>
      <nav style={{ padding: '20px' }}>
        <Link to="add-front-work-material-storage" className="dashboard-button">
          ثبت زمان جدید
        </Link>
        <ul className="dashboard-list">
          <GetItemListMaterialFrontWorkStorage />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MaterialFrontWorkStorageDashboard;
