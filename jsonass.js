const Data = {
    "employees": [
      {"name": "Shyam", "email": "shyamjaiswal@gmail.com"},
      {"name": "Bob", "email": "bob32@gmail.com"},
      {"name": "Jai", "email": "jai87@gmail.com"}
    ]
  };
  

  console.log("Using for loop:");
  for (let i = 0; i < Data.employees.length; i++) {
    const employee = Data.employees[i];
    console.log(`Name: ${employee.name}, Email: ${employee.email}`);
  }
  

  console.log("\nUsing for...in loop:");
  for (const index in Data.employees) {
    const employee = Data.employees[index];
    console.log(`Name: ${employee.name}, Email: ${employee.email}`);
  }
  
  
  console.log("\nUsing for...of loop:");
  for (const employee of Data.employees) {
    console.log(`Name: ${employee.name}, Email: ${employee.email}`);
  }
  

  console.log("\nUsing forEach loop:");
  Data.employees.forEach(employee => {
    console.log(`Name: ${employee.name}, Email: ${employee.email}`);
  });
  