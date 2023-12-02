<template>
    <div>
      <h2>Update Branch Info</h2>
      <form @submit.prevent="update">

        <label for="branchno">Branch Number:</label>
        <input type="text" id="branchno" v-model="branchData.branchno" required disabled>

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
  props: ['branchno, branchAddress, branchCity, branchPostCode'],
  
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

  mounted() {  
    this.branchData.branchno = this.$route.query.branchno;
    this.branchData.address = this.$route.query.branchAddress;
    this.branchData.city = this.$route.query.branchCity;
    this.branchData.postalCode = this.$route.query.branchPostCode;
  },

  methods: {
    update() {      
        console.log(this.branchData);
      this.$apiService.updateBranch(this.branchData)
        .then(response => {
          console.log('Branch updated successfully:', response);
          this.$router.push({ name: 'listBranch' });
        })
        .catch(error => {
          console.error('Error updating branch:', error);
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