// Create an array of objects and print the object with the highest value.
const objects = [
    { Fname: 'Abu Bakar', Lname : 'Saddique', value: 10 },
    { Fname: 'Ali', Lname : 'Raza', value: 15 },
    { Fname: 'Usman', Lname : 'Umer', value: 5 }
    ];
    var highestObj = null;
    var max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < objects.length; i++){
    if(objects[i].value > max){
        max = objects[i].value;
        highestObj = objects[i];
    }
}
console.log("The object with the highest value is ", highestObj);