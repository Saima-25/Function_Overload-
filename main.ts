/* function overload
make functions with same name 
same paramertes with diff data types 
number of parameters should be same
*/
 function sum(a:number, b:number):number;
 function sum(a:string, b:string): string;
 function sum(a:boolean, b:boolean):boolean;
 function sum(a:any,b:any):any{
    return a+b
    }
    console.log(sum(5,6));
 console.log(sum("Saima","Kalam"));
 console.log(sum(true,false))
 

