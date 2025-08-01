import { Link, Outlet } from 'react-router-dom';
import GetItemListCupeSelection from './GetCupeSelections';
import './CupeSelectionDashboard.css'; // فایل CSS مخصوص این بخش

function CupeSelectionkDashboard() {
  return (
    <div>
      <nav style={{ padding: '20px' }}>
        <Link to="cupe_selection" className="cupe-button">ثبت زمان جدید</Link>
        <ul className="cupe-list">
          <GetItemListCupeSelection />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default CupeSelectionkDashboard;
