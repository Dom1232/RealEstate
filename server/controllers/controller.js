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
    const result = await connection.execute(
      `BEGIN :result := get_branch_Address(:branchno); END;`,
      {
        branchno: { dir: oracledb.BIND_IN, val: branchno },
        result: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
      }
    );

    const branchAddress = result.outBinds.result;

    res.status(200).json({ branchAddress });
  } catch (error) {
    console.error('Error getting branch address:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//Get list of Branches
const getBranches = async (req, res) => {
  const connection = req.db;
  try {

    const result = await connection.execute(
      'SELECT branchno FROM DH_BRANCH',
      [],
    );

    const branches = result.rows;

    res.status(200).json({ branches});
  } catch (error) {
    console.error('Error getting branches:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllBranches = async (req, res) => {
  const connection = req.db;
  try {

    const result = await connection.execute(
      'SELECT * FROM DH_BRANCH',
      [],
    );

    const branches = result.rows;

    res.status(200).json({ branches});
  } catch (error) {
    console.error('Error getting branches:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//Update Branch
const updateBranch = async (req, res) => {
  const connection = req.db;

  try {
      const { branchno, address, city, postalCode } = req.body;
      const params = {
        branchno,
        address,
        city,
        postalCode,
      };
      console.log(params);
      await connection.execute(
          `UPDATE DH_BRANCH 
           SET STREET = :address, 
               CITY = :city, 
               POSTCODE = :postalCode 
           WHERE BRANCHNO = :branchno`,
          params,
          { autoCommit: true }
      );
  
      console.log('Branch Updated');
  
      res.status(200).json({ message: 'Branch updated successfully' });
  } catch (error) {
      console.error('Error updating Branch:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

//Create New Branch
const createBranch = async(req, res) => {
  const connection = req.db;
  try {
    const { branchno, address, city, postalCode } = req.body;

    const params = {
      branchno,
      address,
      city,
      postalCode,
    };
    console.log(params)
    await connection.execute(
        'BEGIN new_branch(:branchno, :address, :city, :postalCode); END;',
        params,
        { autoCommit: true }
    );

  console.log('New Branch Added');

  res.status(200).json({ message: 'Branch created successfully' });
  } catch (error) {
      console.error('Error creating Branch:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

//List Clients
const getClients = async (req, res) => {
  const connection = req.db;

  try {
    const result = await connection.execute(
      'SELECT * FROM DH_CLIENT',
    );

    const clients = result.rows;
    console.log('Client List Created');
    res.status(200).json({ clients });
  } catch (error) {
    console.error('Error getting clients:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

//Update Client
const updateClient = async (req, res) => {
  const connection = req.db;

  try {
      const { clientNo, first_name, last_name, telephone, address, city, email, prefType, maxRent } = req.body;
      const params = {
          clientNo,
          first_name,
          last_name,
          telephone,
          address,
          city,
          email,
          prefType,
          maxRent,
          
      };
      console.log(params);
      await connection.execute(
          `UPDATE DH_CLIENT 
           SET FNAME = :first_name, 
               LNAME = :last_name, 
               TELNO = :telephone, 
               STREET = :address, 
               CITY = :city, 
               EMAIL = :email, 
               PREFTYPE = :prefType, 
               MAXRENT = :maxRent 
           WHERE CLIENTNO = :clientNo`,
          params,
          { autoCommit: true }
      );
  
      console.log('Client Updated');
  
      res.status(200).json({ message: 'Client updated successfully' });
  } catch (error) {
      console.error('Error updating client:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {hireEmployee, getEmployees, updateEmployee, deleteEmployee, getBranchAddress, getBranches, getAllBranches, updateBranch, createBranch, getClients, updateClient};