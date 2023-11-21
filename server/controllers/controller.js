const oracledb = require('oracledb');

//Create New Employees
const hireEmployee = async(req, res) => {
    const connection = req.db;
    try {
    const {first_name, last_name, job_title, dob, salary, branch, telephone, mobile, email } = req.body;

    const params = { 
        first_name,
        last_name,
        job_title,
        dob: { type: oracledb.DATE, dir: oracledb.BIND_IN, val: new Date(dob) },
        salary,
        branch,
        telephone,
        mobile,
        email,
    };

    await connection.execute(
        'BEGIN Staff_hire_sp(:first_name, :last_name, :job_title, :dob, :salary, :branch, :telephone, :mobile, :email); END;',
        params,
        { autoCommit: true }
    );
  
    console.log('New Employee Added');
  
    res.status(200).json({ message: 'Employee hired successfully' });
    } catch (error) {
        console.error('Error hiring employee:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//List Employees
const getEmployees = async (req, res) => {
    const connection = req.db;
  
    try {
      const result = await connection.execute(
        'SELECT * FROM DH_STAFF',
      );
  
      const employees = result.rows;
      console.log('Employee List Created');
      res.status(200).json({ employees });
    } catch (error) {
      console.error('Error getting employees:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

//Update Employee
const updateEmployee = async (req, res) => {
  const connection = req.db;

  try {
      const { id, first_name, last_name, job_title, dob, salary, branch, telephone, mobile, email } = req.body;
      const params = {
          id,
          first_name,
          last_name,
          job_title,
          dob: { type: oracledb.DATE, dir: oracledb.BIND_IN, val: new Date(dob) },
          salary,
          branch,
          telephone,
          mobile,
          email,
      };
      console.log(params);
      await connection.execute(
          `UPDATE DH_STAFF 
           SET FNAME = :first_name, 
               LNAME = :last_name, 
               POSITION = :job_title, 
               DOB = :dob, 
               SALARY = :salary, 
               BRANCHNO = :branch, 
               TELEPHONE = :telephone, 
               MOBILE = :mobile, 
               EMAIL = :email 
           WHERE STAFFNO = :id`,
          params,
          { autoCommit: true }
      );
  
      console.log('Employee Updated');
  
      res.status(200).json({ message: 'Employee updated successfully' });
  } catch (error) {
      console.error('Error updating employee:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}

//Delete Employee
const deleteEmployee = async (req, res) => {
  const connection = req.db;
  try {
    const { id } = req.params;
    console.log(id);
    await connection.execute(
      `DELETE FROM DH_STAFF 
       WHERE STAFFNO = :id`,
      [id],
      { autoCommit: true }
    );
  
      console.log('Employee Deleted');
  
      res.status(200).json({ message: 'Employee Deleted' });
  } catch (error) {
      console.error('Error deleting employee:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}


//Get Branch
const getBranchAddress = async (req, res) => {
  const connection = req.db;
  try {
    const { branchno } = req.params;
    console.log('In' + branchno);
    const result = await connection.execute(
      `BEGIN :result := get_branch_Address(:branchno); END;`,
      {
        branchno: { dir: oracledb.BIND_IN, val: branchno },
        result: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
      }
    );

    const branchAddress = result.outBinds.result;
    console.log('Branch Address (In Controller):', branchAddress);

    res.status(200).json({ branchAddress });
  } catch (error) {
    console.error('Error getting branch address:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {hireEmployee, getEmployees, updateEmployee, deleteEmployee, getBranchAddress};