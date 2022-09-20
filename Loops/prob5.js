
let sum = 0;
let count = 0;

for (let i=1;i<=15;i++){
  if(i%2==1){
    sum=sum+i;
    count=count+1;
  }
}
console.log("avg =",sum/count);
  
