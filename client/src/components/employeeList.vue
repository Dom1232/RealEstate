<template>
  <div>
    <h2>Employee Directory</h2>
    <div>
      <router-link to="/hire" class="button-link">Hire New Employee</router-link>
    </div>

    <div class="employee-grid">
      <!-- Headings-->
      <div class="employee-row" v-if="employees.length > 0">
        <div class="employee-column"><strong>Name</strong></div>
        <div class="employee-column"><strong>Position</strong></div>
        <div class="employee-column"><strong>Date of Birth</strong></div>
        <div class="employee-column"><strong>Salary</strong></div>
        <div class="employee-column"><strong>Branch #</strong></div>
        <div class="employee-column"><strong>Home Number</strong></div>
        <div class="employee-column"><strong>Mobile Number</strong></div>
        <div class="employee-column"><strong>Email</strong></div>
        <div class="employee-column"></div>
        <div class="employee-column"></div>

      </div>

      <!--List Employees-->
      <div class="employee-row" v-for="employee in employees" :key="employee[0]">
        <div class="employee-column">{{ employee[1] }} {{ employee[2] }}</div>
        <div class="employee-column">{{ employee[3] }}</div>
        <div class="employee-column">{{ formatDate(employee[5]) }}</div>
        <div class="employee-column">{{ employee[6] }}</div>
        <div class="employee-column">{{ employee[7] }}</div>
        <div class="employee-column">{{ employee[8] }}</div>
        <div class="employee-column">{{ employee[9] }}</div>
        <div class="employee-column">{{ employee[10] }}</div>
        <!--Button for Editing-->
        <div class="employee-column">
          <button @click="startEdit(employee)" class="button-update">Edit</button>
        </div>
        <!--Button for Deleting-->
        <div class="employee-column">
          <button @click="startDelete(employee)" class="button-delete">Delete</button>
        </div>

      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        employees: [],
      };
    },
    mounted() {
      this.fetchEmployees();
    },
    methods: {
      //Get Employees
      async fetchEmployees() {
        try {
          const rawEmployees = await this.$apiService.getEmployees();
          this.employees = this.transformEmployees(rawEmployees);
        } catch (error) {
          console.error('Error fetching employees:', error);
        }
      },
      transformEmployees(rawEmployees) {
        if (Array.isArray(rawEmployees)) {
          return rawEmployees;
        } else if (rawEmployees && rawEmployees.employees) {
          return rawEmployees.employees;
        } else {
          console.error('Unexpected data structure:', rawEmployees);
          return [];
        }
      },
      //Format Date
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-CA', options);
      },
      //Edit User
      startEdit(employee) {
        const employeeID = employee[0];
        const employeeFNAME = employee[1];
        const employeeLNAME = employee[2];
        const employeePosition = employee[3];
        const employeeDOB = employee[5];
        const employeeSalary = employee[6];
        const employeeBranch = employee[7];
        const employeeHomeP = employee[8];
        const employeeCellP = employee[9];
        const employeeEmail = employee[10];
        this.$router.push({ name: 'editEmployee', query: { employeeID, employeeFNAME, employeeLNAME, employeePosition, employeeDOB, employeeSalary, employeeBranch, employeeHomeP, employeeCellP, employeeEmail } });
      },
      //Delete Employee
      startDelete(employee) {
        const employeeID = employee[0];
        const employeeFNAME = employee[1];
        const employeeLNAME = employee[2];

        this.$router.push({ name: 'deleteEmployee', query: { employeeID, employeeFNAME, employeeLNAME } });
      }
    },
};
  </script>

<style scoped>
  .employee-grid {
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #ccc;
  }

  .employee-row {
    display: flex;
    width: 100%;
  }

  .employee-column {
    flex: 1;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    border-right: 1px solid #ccc; 
    min-width: 50px;
  }

  .employee-column:last-child {
    border-right: none;
    min-width: 50px;
  }

  .employee-column:nth-last-child(3) {
    min-width: 300px;
}

.employee-column:nth-last-child(-n+2) {
    max-width: 50px;
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


  

