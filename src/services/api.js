import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1337/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchDashboardStats = async () => {
  try {
    const [clientesResponse, serviciosResponse, facturacionResponse, gastosResponse] = await Promise.all([
      api.get('/clientes'),
      api.get('/servicios'),
      api.get('/facturacions'),
      api.get('/gastos'),
    ]);

    const clientesCount = clientesResponse.data.meta.pagination.total;
    const serviciosCount = serviciosResponse.data.meta.pagination.total;
    
    const facturacionAnual = facturacionResponse.data.data.reduce((total, item) => {
      return total + (item.attributes.monto || 0);
    }, 0);

    const gastosAnuales = gastosResponse.data.data.reduce((total, item) => {
      return total + (item.attributes.monto || 0);
    }, 0);

    return {
      clientes: clientesCount,
      servicios: serviciosCount,
      facturacionAnual,
      gastosAnuales,
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
};

export default api;