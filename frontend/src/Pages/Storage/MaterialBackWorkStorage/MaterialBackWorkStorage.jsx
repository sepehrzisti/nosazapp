import { Link, Outlet } from 'react-router-dom';
import GetItemListMaterialBackWorkStorage from './GetMaterialBackWorkStorage';
import './DashboardStyles.css'; // همون فایل CSS مشترک

function MaterialBackWorkStorageDashboard() {
  return (
    <div>
      <nav style={{ padding: '20px' }}>
        <Link to="add-back-work-material-storage" className="dashboard-button">
          ثبت زمان جدید
        </Link>
        <ul className="dashboard-list">
          <GetItemListMaterialBackWorkStorage />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MaterialBackWorkStorageDashboard;
