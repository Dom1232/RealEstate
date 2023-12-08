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
          <option v-for="branch in branches" :key="branch[0]" :value="branch[0]" >{{branch[0]}}</option>
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
        branches: [],
      };
    },
    created() {
      this.fetchBranches();
    },
    methods: {
      submitForm() {
        this.$apiService.createEmployee(this.employeeData)
          .then(response => {
            console.log('Employee created successfully:', response);
            this.$router.push({ name: 'list' });
          })
          .catch(error => {
            console.error('Error creating employee:', error);
          });
      },
      async fetchBranches() {
        try {
          const rawBranches = await this.$apiService.getBranches();
          this.branches = this.transformBranches(rawBranches);
        } catch (error) {
          console.error('Error fetching branches:', error);
        }
      },
      transformBranches(rawBranches) {
        if (Array.isArray(rawBranches)) {
          return rawBranches;
        } else if (rawBranches && rawBranches.branches) {
          return rawBranches.branches;
        } else {
          console.error('Unexpected data structure:', rawBranches);
          return [];
        }
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