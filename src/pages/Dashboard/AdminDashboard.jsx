import { NavLink, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import AI from './AI';
import Statistics from "./Statistics/Statistics";

import CreateUser from './CreateUser';
import ManageMenu from './ManageMenu';
import ViewCustomers from './ViewCustomer';

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <div className="bg-light border-end" style={{ width: isOpen ? '250px' : '60px', transition: '0.3s' }}>
        <div className="p-3">
         <button
  onClick={() => setIsOpen(!isOpen)}
  className={`hamburger ${isOpen ? 'open' : ''}`}
  aria-label="Toggle Sidebar"
>
  <span></span>
  <span></span>
  <span></span>
</button>

          {isOpen && (
            <>
             <h5 className="fw-bold" style={{ color: '#003366' }}>Dashboard</h5>

             <ul className="nav flex-column">
  {[
    { name: 'AI', to: '/AdminDashboard/ai' },
    { name: 'Statistics', to: '/AdminDashboard/statistics' },
    { name: 'Customer', to: '/AdminDashboard/ViewCustomer' },
    { name: 'Menu', to: '/AdminDashboard/menu' },
  ].map(({ name, to }) => (
    <li className="nav-item mb-2" key={name}>
<NavLink
  to={to}
  className={({ isActive }) =>
    `nav-link px-3 py-2 rounded fw-semibold ${
      isActive ? 'active-link-blue' : 'hover-bg-light-blue text-dark'
    }`
  }
  style={{ transition: 'all 0.3s ease' }}
>
  {name}
</NavLink>

    </li>
  ))}
</ul>

            </>
          )}
        </div>
      </div>

      <div className="flex-grow-1 p-4">
        <Routes>
          <Route path="ai" element={<AI />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="ViewCustomer" element={<ViewCustomers />} />
          <Route path="create_user" element={<CreateUser />} /> 
          <Route path="menu" element={<ManageMenu />} />
        </Routes>
      </div>  
    </div>
  );
}
