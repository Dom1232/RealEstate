<template>
    <div>
      <h2>Branch Directory</h2>
      <div>
        <router-link to="/hire" class="button-link">Create New Branch</router-link>
      </div>
  
      <div class="branch-grid">
        <div class="branch-row" v-if="branches.length > 0">
          <div class="branch-column"><strong>Branch Number</strong></div>
          <div class="branch-column"><strong>Street Address</strong></div>
          <div class="branch-column"><strong>City</strong></div>
          <div class="branch-column"><strong>Postal Code</strong></div>
          <div class="branch-column"></div>
  
        </div>
  
        <!--List Branches-->
        <div class="branch-row" v-for="branch in branches" :key="branch[0]">
          <div class="branch-column">{{ branch[0] }}</div>
          <div class="branch-column">{{ branch[1] }}</div>
          <div class="branch-column">{{ branch[2] }}</div>
          <div class="branch-column">{{ branch[3] }}</div>
          <!--Button for Editing-->
          <div class="branch-column">
            <button @click="startEdit(branch)" class="button-update">Edit</button>
          </div> 
        </div>
      </div>
    </div>
  </template>


<script>
  export default {
    data() {
      return {
        branches: [],
      };
    },
    mounted() {
      this.fetchBranches();
    },
    methods: {
      //Get Employees
      async fetchBranches() {
        try {
          const rawBranches = await this.$apiService.getAllBranches();
          this.branches = this.transformBranches(rawBranches);
        } catch (error) {
          console.error('Error fetching employees:', error);
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
      //Edit User
      startEdit(branch) {
        const branchno = branch[0];
        const branchAddress = branch[1];
        const branchCity = branch[2];
        const branchPostCode = branch[3];

        this.$router.push({ name: 'editBranch', query: {branchno, branchAddress, branchCity, branchPostCode} });
      },
    },
};
  </script>









<style scoped>
  .branch-grid {
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #ccc;
  }

  .branch-row {
    display: flex;
    width: 100%;
  }

  .branch-column {
    flex: 1;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    border-right: 1px solid #ccc; 
    min-width: 50px;
  }

  .branch-column:last-child {
    border-right: none;
    min-width: 50px;
  }

.button-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-bottom: 15px;
}

.button-link:hover {
  background-color: #297fb8;
}

.button-update{
  background-color: #3498db;
  color: #ffffff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #166da7;
}

.button-update:hover {
  background-color: #297fb8;
}

.button-delete{
  background-color: #db3434;
  color: #ffffff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #a71616;
}

.button-delete:hover {
  background-color: #b82929;
}
</style>