import { Link, Outlet } from 'react-router-dom';
import GetRejectBackWorkItemList from './GetRejectBackWork'
function BackWorkRejectDashboard() {
  return (
    <div>
      <nav>
        <Link to="back_work_reject_add">ثبت زمان جدید سنگ برگشتی</Link>
      </nav>
        <GetRejectBackWorkItemList/>
    </div>
  );
}

export default (BackWorkRejectDashboard);
