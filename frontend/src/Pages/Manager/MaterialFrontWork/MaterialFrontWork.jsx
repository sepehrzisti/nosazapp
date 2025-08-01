import { Link, Outlet } from 'react-router-dom';
import GetItemListMaterialFrontWork from './GetMaterialFrontWork';
import './MaterialFrontWorkDashboard.css'; // استایل دکمه

function MaterialFronWorkDashboard() {
  return (
    <div>
      <nav style={{ padding: '20px' }}>
        <Link to="add-front-material" className="front-button">ثبت زمان جدید</Link>
        <ul className="front-list">
          <GetItemListMaterialFrontWork />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default MaterialFronWorkDashboard;
  