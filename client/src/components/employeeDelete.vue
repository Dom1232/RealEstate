<template>
    <div class="center">
      <h2>Are you sure you want to remove this employee</h2>
      <h2>from the system? This will be permanent.</h2>
      <form @submit.prevent="deleteUser">
        <div>
            <input class="text" type="text" v-model="employeeData.first_name" required disabled>
            <input class="text2" type="text" v-model="employeeData.last_name" required disabled>
        </div>
        <router-link to="/list">
          <button>Cancel</button>
        </router-link>
        <button type="submit">Submit</button>
      </form>
    </div>
</template>

<script>
export default {
  props: ['employeeID', 'employeeFNAME', 'employeeLNAME'],
  
  data() {
    return {
      employeeData: {
        id: '',
      },
    };  
  },

  mounted() {
    this.employeeData.id = this.$route.query.employeeID;
    this.employeeData.first_name = this.$route.query.employeeFNAME;
    this.employeeData.last_name = this.$route.query.employeeLNAME;
  },

  methods: {
    deleteUser() {      
      this.$apiService.deleteEmployee(this.employeeData.id)
        .then(response => {
          console.log('Employee deleted successfully:', response);
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


.text {
    font-weight: bold;
    font-size: large;
    border: 0px;
    background-color: white;
    color: red;
    text-align: right;
}

.text2 {
    font-weight: bold;
    font-size: large;
    border: 0px;
    background-color: white;
    color: red;
}


/* Additional styling for the button if needed */
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
}

button:hover {
  background-color: #45a049;
}

.center {
    margin-top: 100px;
}

</style>