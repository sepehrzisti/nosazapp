import { Link, Outlet } from 'react-router-dom';
import GetBackSubItemList from './GetBackSub'
function BackSabDashboard() {
  return (
    <div>
      <nav>
        <Link to="pish_sab_add">ثبت زمان جدید</Link>
      </nav>
      <GetBackSubItemList/>
    </div>
  );
}

export default BackSabDashboard;