let age:number = 28;
let score:number = 0;
let username:string = "";
let isAdmin:boolean = false;
for(let i = 0; i <= age; i++){
    console.log(i);
};
if(age > 18){
    console.log("You are older than 18.")
} else{
    console.log("You are 18 or below.")
};
if (score !== 0) {
    console.log("Score is available.")
} else{
    console.log("Score is not available.")
};
if (score){
    console.log("Score is evaluated as truthy.")
} else{
    console.log("Score is evaluated as falsy or has a value of 0.")
};
if (username){
    console.log("Username is available.")
} else{
    console.log("Username is not available.")
};
if (!username){
    console.log("Username is evaluated as falsy.")
} else{
    console.log("Username is not falsy.")
};
if (isAdmin){
    console.log("isAdmin is evaluated as truthy.")
} else{
    console.log("isAdmin is evaluated as falsy or has a value of 0.")
};
if (!isAdmin){
    console.log("isAdmin is false.")
} else{
    console.log("isAdmin is not false.")
}
