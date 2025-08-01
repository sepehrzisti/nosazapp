import { Link, Outlet } from 'react-router-dom';
import GetSabItemList from './GetSab'
function Sab_Dashboard() {
  return (
    <div>
      <nav>
        <Link to="sab_add">ثبت زمان جدید</Link>
      </nav>
      <GetSabItemList/>
    </div>
  );
}

export default Sab_Dashboard;
