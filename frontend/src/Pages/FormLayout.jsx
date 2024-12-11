import React, { useState, useEffect } from 'react';
import AdminPanel from '../Componants/AdminPanel';
import Navbaar from '../Utility/Navbaar';
import ProForm from './ProForm';
import Charboard from './Charboard';
import { useLocation } from 'react-router-dom';

function FormLayout() {
  const location = useLocation();  // To get current route
  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    // Check the current path and update the active component accordingly
    if (location.pathname === "/pro-form-layout") {
      setActiveComponent(<ProForm />);
    } else if (location.pathname === "/eCommerce") {
      setActiveComponent(<Charboard />);
    } else {
      setActiveComponent(null);
    }
  }, [location]);

  return (
    <div className='flex flex-row max-w-full max-h-full'>
      <AdminPanel />
      <div className='flex-grow'>
        <Navbaar />
        {/* Render the active component */}
        {activeComponent || <p>Choose an option from the sidebar.</p>}
      </div>
    </div>
  );
}

export default FormLayout;
