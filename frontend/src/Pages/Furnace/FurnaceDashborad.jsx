import { Link, Outlet } from 'react-router-dom';

function FurnaceDashboard() {
  return (
    <div>
      <nav>
        <Link to="furnace">ثبت زمان جدید</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default FurnaceDashboard;
