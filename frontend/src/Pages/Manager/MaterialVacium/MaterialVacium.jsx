import { Link, Outlet } from 'react-router-dom';
import GetItemListMaterialVacium from './GetMaterialVacium.jsx';
import './ManagerMaterialVaciumDashboard.css'; // حتماً اضافه کن

function ManagerMaterialVaciumDashboard() {
  return (
    <div>
      <nav style={{ padding: '20px' }}>
        <Link to="add-vacium-material" className="vacium-button">ثبت زمان جدید</Link>
        <ul className="vacium-list">
          <GetItemListMaterialVacium />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default ManagerMaterialVaciumDashboard;
