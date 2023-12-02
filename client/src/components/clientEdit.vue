<template>
    <div>
      <h2>Update client Info</h2>
      <form @submit.prevent="update">

        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" v-model="clientData.first_name" required disabled>

        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="clientData.last_name" required disabled>

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
  props: ['clientNo', 'clientFNAME', 'clientLNAME', 'clientTelephone',  'clientStreet', 'clientCity', 'clientEmail', 'clientHomeType', 'clientMaxRent'],
  
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

  mounted() {
    this.clientData.clientNo = this.$route.query.clientNo;
    this.clientData.first_name = this.$route.query.clientFNAME;
    this.clientData.last_name = this.$route.query.clientLNAME;
    this.clientData.telephone = this.$route.query.clientTelephone;
    this.clientData.address = this.$route.query.clientStreet;
    this.clientData.city = this.$route.query.clientCity;
    this.clientData.email = this.$route.query.clientEmail;
    this.clientData.prefType = this.$route.query.clientHomeType;
    this.clientData.maxRent = this.$route.query.clientMaxRent; 
  },

  methods: {
    update() {      
      this.$apiService.updateClient(this.clientData)
        .then(response => {
          console.log('client updated successfully:', response);
          this.$router.push({ name: 'clientList' });
        })
        .catch(error => {
          console.error('Error updating Client:', error);
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