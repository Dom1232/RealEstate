import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import HireEmployee from '../components/employeeForm.vue'
import ListEmployees from '../components/employeeList.vue'
import editEmployee from '../components/employeeEdit.vue'
import deleteEmployee from '../components/employeeDelete.vue'
import findBranch from '../components/branchFind.vue'

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
    ],
});

export default router;