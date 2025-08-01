import { Link, Outlet } from 'react-router-dom';
import GetItemListReject from './GetMaterialReject';
import './ManagerRejectDashboard.css'; // حتماً این رو اضافه کن

function ManagerRejectDashboard() {
  return (
    <div>
      <nav style={{ padding: '20px' }}>
        <Link to="add-reject" className="reject-button">ثبت زمان جدید</Link>
        <ul className="reject-list">
          <GetItemListReject />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default ManagerRejectDashboard;
