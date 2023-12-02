<template>
    <div>
      <h2>Add New Client</h2>
      <form @submit.prevent="submitForm">

        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" v-model="clientData.first_name" required>

        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="clientData.last_name" required>

        <label for="telephone">Phone Number:</label>
        <input type="text" id="telephone" v-model="clientData.telephone">

        <label for="address">Address:</label>
        <input type="text" id="address" v-model="clientData.address" required>

        <label for="city">City:</label>
        <input type="text" id="city" v-model="clientData.city" required>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="clientData.email" required>

        <label for="prefType">House Type Pref:</label>
        <input type="text" id="prefType" v-model="clientData.prefType" required>

        <label for="maxRent">Max Rent:</label>
        <input type="number" id="maxRent" v-model="clientData.maxRent">

        <router-link to="/clientList">
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
        clientData: {
        clientNo: '',
        first_name: '',
        last_name: '',
        telephone: '',
        address: '',
        city: '',
        email: '',
        prefType: '',    
        maxRent: '',        
      },
      };
    },

    methods: {
      submitForm() {
        this.$apiService.createClient(this.clientData)
          .then(response => {
            console.log('Client created successfully:', response);
            this.$router.push({ name: 'clientList' });
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