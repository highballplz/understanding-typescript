// abstract class Department{

//   protected empolyees:string[] = [];

//   constructor(private readonly id: string, public name: string){
//   }

//   abstract describe(this:Department): void;

//   addEmployee(employee:string){
//     this.empolyees.push(employee);
//   }

//   printEmployeeInformation(){
//     console.log(this.empolyees.length);
//     console.log(this.empolyees);
//   }
// }

// class AccountingDepartment extends Department{

//   constructor(id: string, private reports: string[]){
//     super(id, 'Accounting');
//   }

//   describe(){
//     console.log('additional line');
//   }

//   addEmployee(name: string){
//     if(name==='Max'){return;}
//     this.empolyees.push(name);
//   }

// }

// const accDep = new AccountingDepartment('awef', ['report1']);

// accDep.describe();
