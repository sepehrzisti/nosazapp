import { Link, Outlet } from 'react-router-dom';

function CutCodeDashboard() {
  return (
    <div>
      <nav>
        <Link to="cut_code">ثبت زمان جدید</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default CutCodeDashboard;
