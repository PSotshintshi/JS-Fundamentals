/**let numPeople = 10
if (numPeople >= 10){
  console.log("No argument");
}else console.log("School");**/
const numAvg = process.argv[2];
if (numAvg !== undefined) {
  console.log(numAvg);
} else {
  console.log("No argument");
}
