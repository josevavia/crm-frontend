import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Bienvenido, {currentUser.email}</p>
      {/* Aquí puedes añadir más contenido del dashboard */}
    </div>
  );
};

export default Dashboard;