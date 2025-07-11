import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type RootState } from '../app/store';
// import Navbar from '../common/components/Navbar';
import "./layout.css";
import Navbar from './components/Navbar';

const MainLayout = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  // SignalR notification handling (hook-based)
//   useNotifications((message, id) => {
//     if (user && user.id === id) {
//       toast.success(message);
//     }
//   });

  if (!user) return null;
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar/>
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
