

  connection.execute(
    'DELETE FROM dh_staff WHERE staffno = :emp_id',
    ['124'],
    { autoCommit: true },
    (err) => {
      if (err) {
        console.error('Error executing DELETE statement:', err.message);
      } else {
        console.log('Record deleted successfully');
      }
    }
  );  

  
  const params = {
    emp_id: '124',
    first_name: 'John',
    last_name: 'Doe',
    job_title: 'Manager',
    gender: 'M',
    hire_date: { type: oracledb.DATE, dir: oracledb.BIND_IN, val: new Date('1990-01-01') },
    salary: 50000,
    branch: 'B007',
    telephone: '1234567890123456',
    mobile: '9876543210987654',
    email: 'john.doe@example.com',
  };
  


  