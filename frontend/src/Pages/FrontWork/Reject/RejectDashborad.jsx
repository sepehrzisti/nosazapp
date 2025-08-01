import { Link, Outlet } from 'react-router-dom';
import GetRejectFrontWorkItemList from './GetRejectFrontWork'
function FrontWorkRejectDashboard() {
  return (
    <div>
      <nav>
        <Link to="front_work_reject_add">ثبت زمان جدید سنگ برگشتی</Link>
      </nav>
        <GetRejectFrontWorkItemList/>
    </div>
  );
}

export default (FrontWorkRejectDashboard);
