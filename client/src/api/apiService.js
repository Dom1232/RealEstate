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

    getBranches: async () => {
      try {
        const response = await axios.get(`${API_URL}/branch`);
        return response.data;
      } catch (error) {
        console.error('Error getting branch address:', error);
      }
    },

    getAllBranches: async () => {
      try {
        const response = await axios.get(`${API_URL}/branchAll`);
        return response.data;
      } catch (error) {
        console.error('Error getting branch address:', error);
      }
    },

    updateBranch: async (branchData) => {
      try {
        console.log(branchData);
        const response = await axios.put(`${API_URL}/updateBranch/${branchData.branchno}`, branchData);
        console.log('Response:', response.data);
        console.log(branchData)
      } catch (error) {
        console.error('Error updating branch:', error);
        throw error;
      }
    },

    createBranch: async (branchData) => {
      try {
        const response = await axios.post(`${API_URL}/location`, branchData);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error creating branch:', error);
        throw error;
      }
    },

    getClients: async () => {
      try {
        const response = await axios.get(`${API_URL}/clients`);
        return response.data;
      } catch (error) {
        console.error('Error fetching clients:', error);
        throw error;
      }
    },

    updateClient: async (clientData) => {
      try {
        const response = await axios.put(`${API_URL}/updateClient/${clientData.clientNo}`, clientData);
        console.log('Response:', response.data);
        console.log(clientData)
      } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
      }
    },
  };
