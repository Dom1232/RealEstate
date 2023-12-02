<template>
    <div>
      <h2>Branch Finder</h2>
      <div>
        <form @submit.prevent="fetchBranch">
          <div>
            <label for="branchno">Branch Number</label>
            <input type="text" id="branchno" v-model="branchno" required>
          </div>
          <button type="submit">Submit</button>
        </form>
        <label for="address">Address</label>
        <input class="branch" type="text" id="address" v-model="branchAddress" required>
      </div>
      <RouterLink to="/listBranch">
        <button>List of Branches</button>
      </RouterLink>
    </div>
  </template>
    
    <script>
    export default {
      data() {
        return {
        branchno: '',
        branchAddress: '',
        };
      },

      methods: {
        async fetchBranch() {
          try {
          const rawBranchAddress = await this.$apiService.getBranch(this.branchno.toUpperCase());
          if (rawBranchAddress.branchAddress == null){
            this.branchAddress = "Branch Does Not Exist";
          }
          else{
            this.branchAddress = rawBranchAddress.branchAddress;
          }
          console.log(rawBranchAddress)
          } catch (error) {
            console.error('Error creating employee:', error);
          }
        },
      },
  };
    </script>

<style scoped>
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
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
}

button:hover {
  background-color: #45a049;
}

.branch {
  max-width: 400px;
  background-color: white;
}
</style>