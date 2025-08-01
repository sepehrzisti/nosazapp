import { Link, Outlet } from 'react-router-dom';
import GetSabReject from './GetRejectSab'
function SabRejectDashboard() {
  return (
    <div>
      <nav>
        <Link to="sab_reject_add">ثبت زمان جدید سنگ برگشتی</Link>
      </nav>
        <GetSabReject/>
    </div>
  );
}

export default (SabRejectDashboard);
