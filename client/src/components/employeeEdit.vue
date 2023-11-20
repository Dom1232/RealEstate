<template>
    <div>
      <h2>Update Employee Info</h2>
      <form @submit.prevent="update">

        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" v-model="employeeData.first_name" required disabled>

        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="employeeData.last_name" required disabled>

        <label for="job_title">Position:</label>
        <input type="text" id="job_title" v-model="employeeData.job_title" required disabled>

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" v-model="employeeData.dob" required disabled>

        <label for="salary">Salary:</label>
        <input type="number" id="salary" v-model="employeeData.salary" required>

        <label for="branch">Branch:</label>
        <select id="branch" v-model="employeeData.branch" required disabled>
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
  props: ['employeeID', 'employeeFNAME', 'employeeLNAME', 'employeePosition', 'employeeDOB', 'employeeSalary', 'employeeBranch', 'employeeHomeP', 'employeeCellP', 'employeeEmail'],
  
  data() {
    return {
      employeeData: {
        id: '',
        first_name: '',
        last_name: '',
        job_title: '',
        dob: '',
        salary: '',
        branch: '',
        telephone: '',
        mobile: '',
        email: '',
      },
    };
  },

  mounted() {
    const employeeDOB = this.$route.query.employeeDOB;
    const dateObject = new Date(employeeDOB);
    const formattedDate = dateObject.toISOString().split('T')[0];
    
    this.employeeData.id = this.$route.query.employeeID;
    this.employeeData.first_name = this.$route.query.employeeFNAME;
    this.employeeData.last_name = this.$route.query.employeeLNAME;
    this.employeeData.job_title = this.$route.query.employeePosition;
    this.employeeData.dob = formattedDate;
    this.employeeData.salary = this.$route.query.employeeSalary;
    this.employeeData.branch = this.$route.query.employeeBranch;
    this.employeeData.telephone = this.$route.query.employeeHomeP;
    this.employeeData.mobile = this.$route.query.employeeCellP;
    this.employeeData.email = this.$route.query.employeeEmail;
  },

  methods: {
    update() {      
      this.$apiService.updateEmployee(this.employeeData)
        .then(response => {
          console.log('Employee updated successfully:', response);
          this.$router.push({ name: 'listEmployees' });
        })
        .catch(error => {
          console.error('Error updating employee:', error);
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