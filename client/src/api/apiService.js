import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  
    createEmployee: async (employeeData) => {
      try {
        const response = await axios.post(`${API_URL}/hire`, employeeData);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error creating employee:', error);
        throw error;
      }
    },

    getEmployees: async () => {
      try {
        const response = await axios.get(`${API_URL}/employees`);
        return response.data;
      } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
      }
    },
    
    updateEmployee: async (employeeData) => {
      try {
        const response = await axios.put(`${API_URL}/update/${employeeData.id}`, employeeData);
        console.log('Response:', response.data);
        console.log(employeeData)
      } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
      }
    },

    deleteEmployee: async (id) => {
      try {
        const response = await axios.delete(`${API_URL}/delete/${id}`,);
        console.log('Response:', response.data);
        console.log(id)
      } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
      }
    },
    
    getBranch: async (branchno) => {
      try {
        console.log(branchno)
        const response = await axios.get(`${API_URL}/branch/${branchno}`, branchno);
        return response.data;
      } catch (error) {
        console.error('Error getting branch address:', error);
      }
    },
  };
