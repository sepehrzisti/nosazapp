import { Link, Outlet } from 'react-router-dom';
import GetItemListMaterialBackWork from './GetMaterialBackWork';
import './DashboardStyles.css'; // فایل CSS مشترک برای همه داشبوردها

function MaterialBackWorkDashboard() {
  return (
    <div>
      <nav style={{ padding: '20px' }}>
        <Link to="add-back-material" className="dashboard-button">ثبت زمان جدید</Link>
        <ul className="dashboard-list">
          <GetItemListMaterialBackWork />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MaterialBackWorkDashboard;
