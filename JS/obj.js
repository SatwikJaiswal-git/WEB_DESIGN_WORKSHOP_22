let student = {
   name:"Krishna",
   Roll:21,
   CGPA:10,
   isPass:true,
};
console.log(student);
student.name="Kanha";
console.log(student.name);

let marks=[34,32,22,53,24,70];
marks[0]=45;
let table=[{name:"Amit",city:"Delhi",CGPA:9},{name:"Rahul",city:"Ghaziabad",CGPA:7},{name:"Prateek",city:"Mumbai",CGPA:10},{name:"Amit",city:"Delhi",CGPA:9},{name:"SAtu",city:"Ghaziabad",CGPA:7},{name:"Prateek",city:"Mumbai",CGPA:10},{name:"Amit",city:"Delhi",CGPA:9},{name:"Shyam",city:"Ghaziabad",CGPA:7},{name:"Prateek",city:"Mumbai",CGPA:10}]
console.table(table);
for(let i=0;i<table.length;i++){
  if(table[i].city=="Ghaziabad"){
    console.log(table[i].name);
  }
}
let string="happy";
let i=0;
for(let ch of string){
  i++;
}
console.log[(i)]


