export class Employee {
  name: string;
  age: number;
  isManager: boolean;
  projects: Array<string>;
  tuple: [number, string];
  task1Status: status;
  city: any;
  sex: undefined;
  salary: null;
  department: object;

  test() {


    this.age = '100'; // Error: Type '"100"' is not assignable to type 'number'.ts(2322)
    this.age = 100;
    this.age = undefined;
    this.age = null;

    this.isManager = 'yes'; // Error: Type '"yes"' is not assignable to type 'boolean'.ts(2322)
    this.isManager = false;

    this.projects = [1,2,3]; // Error: Type 'number' is not assignable to type 'string'.ts(2322)
    this.projects = ['1','2','3']; 

    this.tuple = [1,'xxx'];
    
    this.task1Status = status; // Type 'typeof status' is not assignable to type 'status'.ts(2322)
    this.task1Status = status.started;

    this.city = 1;
    this.city = 'london';
    this.city = false;
    this.city = [1,2,3];
    this.city = ['1','2','3'];
    this.city = {};
    this.city = status;
    this.city = status.started;

    this.sex = "male"; // Error: Type '"male"' is not assignable to type 'undefined'.ts(2322)
    this.sex = undefined;

    this.salary = 1000; // Error: Type '1000' is not assignable to type 'null'.ts(2322)
    this.salary = null;

    this.department =10; // Error: Type '10' is not assignable to type 'object'.ts(2322)
    this.department = {};

  }
}

enum status {
  "started",
  "in-progress",
  "finished"
}
