<template>
    <div>
      <h2>Open Branch</h2>
      <form @submit.prevent="submitForm">

        <label for="branchno">Branch Number:</label>
        <input type="text" id="branchno" v-model="branchData.branchno" required>

        <label for="address">Address:</label>
        <input type="text" id="address" v-model="branchData.address" required>

        <label for="city">City:</label>
        <input type="text" id="city" v-model="branchData.city" required>

        <label for="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" v-model="branchData.postalCode" required>

 
        <router-link to="/listBranch">
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
        branchData: {
            branchno: '',
            address: '',
            city: '',
            postalCode: '',

        },
      };
    },

    methods: {
      submitForm() {
        console.log(this.branchData)
        this.$apiService.createBranch(this.branchData)
          .then(response => {
            console.log('Branch created successfully:', response);
            this.$router.push({ name: 'listBranch' });
          })
          .catch(error => {
            console.error('Error creating branch:', error);
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