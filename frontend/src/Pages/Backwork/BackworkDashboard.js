import { Link, Outlet } from 'react-router-dom';
import ItemList from './get'
function Back_workDashboard() {
  return (
    <div>
      <nav>
        <Link to="back_work_add">ثبت زمان جدید</Link>
      </nav>
      <ItemList/>
    </div>
  );
}

export default Back_workDashboard;
