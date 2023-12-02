import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import HireEmployee from '../components/employeeForm.vue'
import ListEmployees from '../components/employeeList.vue'
import editEmployee from '../components/employeeEdit.vue'
import deleteEmployee from '../components/employeeDelete.vue'
import findBranch from '../components/branchFind.vue'
import listBranch from '../components/branchList.vue'
import editBranch from '../components/branchEdit.vue'
import createBranch from '../components/branchCreate.vue'
import listClients from '../components/clientList.vue'
import editClients from '../components/clientEdit.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/hire',
        name: 'hireEmployee',
        component: HireEmployee,
      },
      {
        path: '/list',
        name: 'listEmployees',
        component: ListEmployees,
      },
      {
        path: '/edit',
        name: 'editEmployee',
        component: editEmployee,
        props: route => ({ 
          employeeID : route.query.employeeID,
          employeeFNAME: route.query.employeeFNAME,
          employeeLNAME: route.query.employeeLNAME,
          employeePosition: route.query.employeePosition,
          employeeDOB: route.query.employeeDOB,
          employeeSalary: route.query.employeeSalary,
          employeeBranch: route.query.employeeBranch,
          employeeHomeP: route.query.employeeHomeP,
          employeeCellP: route.query.employeeCellP,
          employeeEmail: route.query.employeeEmail,
        })
      },
      {
        path: '/delete',
        name: 'deleteEmployee',
        component: deleteEmployee,
        props: route => ({ 
          employeeID : route.query.employeeID,
        })
      },
      {
        path: '/find',
        name: 'findBranch',
        component: findBranch,
      },
      {
        path: '/listBranch',
        name: 'listBranch',
        component: listBranch,
      },
      {
        path: '/editBranch',
        name: 'editBranch',
        component: editBranch,
        props: route => ({ 
          branchno : route.query.branchno,
          branchAddress: route.query.branchAddress,
          branchCity: route.query.branchCity,
          branchPostalCode: route.query.branchPostalCode,
        })
      },
      {
        path: '/createBranch',
        name: 'createBranch',
        component: createBranch,
      },
      {
        path: '/clientList',
        name: 'clientList',
        component: listClients,
      },
      {
        path: '/clientEdit',
        name: 'clientEdit',
        component: editClients,
        props: route => ({ 
          clientNo: route.query.clientNo,
          first_name: route.query.clientFNAME,
          last_name: route.query.clientLNAME,
          telephone: route.query.clientTelephone,
          address: route.query.clientStreet,
          city: route.query.clientCity,
          email: route.query.clientEmail,
          prefType: route.query.clientHomeType,
          maxRent: route.query.clientMaxRent, 
        })
      },
    ],
});

export default router;