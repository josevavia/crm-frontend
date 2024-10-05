import React, { useState, useEffect } from 'react';
import { fetchDashboardStats } from '../services/api';
import StatCard from './StatCard';
import { Icons } from './ui/icons';

const Dashboard = () => {
  const [stats, setStats] = useState({
    clientes: 0,
    servicios: 0,
    facturacionAnual: 0,
    gastosAnuales: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDashboardStats = async () => {
      try {
        setLoading(true);
        const data = await fetchDashboardStats();
        setStats(data);
      } catch (err) {
        setError('Error al cargar los datos del dashboard');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardStats();
  }, []);

  if (loading) return <div className="text-center mt-8">Cargando...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Clientes"
          value={stats.clientes}
          icon={<Icons.users className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="Servicios Contratados"
          value={stats.servicios}
          icon={<Icons.server className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="Facturación Anual"
          value={`${stats.facturacionAnual.toFixed(2)}€`}
          icon={<Icons.dollarSign className="h-4 w-4 text-muted-foreground" />}
        />
        <StatCard
          title="Gastos Anuales"
          value={`${stats.gastosAnuales.toFixed(2)}€`}
          icon={<Icons.creditCard className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
    </div>
  );
};

export default Dashboard;