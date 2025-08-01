import { Link, Outlet } from 'react-router-dom';
import './StorageDashboard.css'; // فرض بر اینکه همین CSS رو داری

const StorageDashboard = () => {
  return (
    <div>
      <nav className="dashboard-nav">
        <Link to="vaciumstorage" className="dashboard-button">مواد وکیوم</Link>
        <Link to="front-work-material-storage" className="dashboard-button">مواد گاری رو</Link>
        <Link to="back-work-material-storage" className="dashboard-button">مواد گاری پشت</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default StorageDashboard;
