class Employee {
    constructor(name, email,department,startDate)
    {
        this.name = name
        this.email = email
        this.department = department
        this.startDate = startDate

    }
}

let Employee = new Employee ("Test", "Test@gmail.com","Account","01/01/2015");

delete Employee;

