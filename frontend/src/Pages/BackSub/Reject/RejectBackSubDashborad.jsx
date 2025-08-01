import { Link, Outlet } from 'react-router-dom';
import GetPishSabReject from './GetRejectBackSub'
function PishSabRejectDashboard() {
  return (
    <div>
      <nav>
        <Link to="pish_sab_reject_add">ثبت زمان جدید سنگ برگشتی</Link>
      </nav>
        <GetPishSabReject/>
    </div>
  );
}

export default (PishSabRejectDashboard);
