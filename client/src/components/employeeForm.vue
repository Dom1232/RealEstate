<template>
    <div>
      <h2>Hiring Form</h2>
      <form @submit.prevent="submitForm">

        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" v-model="employeeData.first_name" required>

        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="employeeData.last_name" required>

        <label for="job_title">Position:</label>
        <input type="text" id="job_title" v-model="employeeData.job_title" required>

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" v-model="employeeData.dob" required>

        <label for="salary">Salary:</label>
        <input type="number" id="salary" v-model="employeeData.salary" required>

        <label for="branch">Branch:</label>
        <select id="branch" v-model="employeeData.branch" required>
            <option value="B002">B002</option>
            <option value="B003">B003</option>
            <option value="B004">B004</option>
            <option value="B005">B005</option>
            <option value="B007">B007</option>
        </select>

        <label for="telephone">Phone Number:</label>
        <input type="text" id="telephone" v-model="employeeData.telephone">

        <label for="mobile">Cell Number:</label>
        <input type="text" id="mobile" v-model="employeeData.mobile">

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="employeeData.email" required>
        <router-link to="/list">
          <button>Cancel</button>
        </router-link>
        <button type="submit">Submit</button>
      </form>
    </div>
</template>
  
<script>
export default {
    data() {
    return {
      employeeData: {
        first_name: '',
        last_name: '',
        job_title: '',
        dob: '',
        salary: 0,
        branch: '',
        telephone: '',
        mobile: '',
        email: '',
      },
    };
    },
    methods: {
      submitForm() {
        this.$apiService.createEmployee(this.employeeData)
          .then(response => {
            console.log('Employee created successfully:', response);
            this.$router.push({ name: 'home' });
          })
          .catch(error => {
            console.error('Error creating employee:', error);
          });
      },
    },
  };
</script>

<style scoped>
  h2 {
    color: #333;
    text-align: center;
  }

  form {
    max-width: 400px;
    margin: 0 auto;
  }

  label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    text-align: center;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }

  button:hover {
    background-color: #45a049;
  }

  select {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
</style>