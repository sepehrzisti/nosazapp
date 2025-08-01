import { Link, Outlet } from 'react-router-dom';
import GetFrontWorkItemList from './GetFrontWork'
function FrontWorkDashboard() {
  return (
    <div>
      <nav>
        <Link to="front_work_add">ثبت زمان جدید</Link>
      </nav>
      <GetFrontWorkItemList />
    </div>
  );
}

export default FrontWorkDashboard;
