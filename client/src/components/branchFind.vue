<template>
    <div>
      <h2>Branch Finder</h2>
      <div>
        <form>
          <div>
            <label for="branchno">Branch Number</label>
            <input type="text" id="branchno" required>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </template>
    
    <script>
    export default {
      data() {
        return {
        
        };
      },

      methods: {
        //Get Employees
        async fetchBranch() {
          
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
}

button:hover {
  background-color: #45a049;
}

</style>