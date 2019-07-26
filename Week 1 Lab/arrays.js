var numarr = [1, 2, 3, 4, 5];
console.log(numarr);

numarr.push(6);             // Adds 6 to End
console.log(numarr);

numarr.unshift(0)           // Add 0 to the Start
console.log(numarr);

numarr.splice(3,0,2.5)      // Adds 2.5 before the third position in the array
console.log(numarr);

numarr.pop();               // Removes the last value in the array
console.log(numarr);

numarr.splice(1,1);         // Navigates to the Nth index and deletes 1 value after it 
console.log(numarr);

numarr[4]=100;              // Sets the 4th index to 100
console.log(numarr);

numarr.sort(function(a, b){return a - b});  // Sorts the array ascendingly by comparing each value in the array to the previous
console.log(numarr);