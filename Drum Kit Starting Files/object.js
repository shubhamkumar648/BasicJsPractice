let bellBoy = [

{name: 'soham',
role: 'cheife',
age: 23
},

{

    name: 'raj',
    role: "atheltics",
    age: 29
}

]



//using constructor function

function Groundmen (name,age,role) {


    this.name= name,
    this.age= age
    this.role= role
    this.clean = function (){
         alert(" i am don")
    }
}


let checkprofile = new Groundmen("rohan", 32,'groundstaff')

console.log(checkprofile);

console.log(bellBoy.name)
console.log(bellBoy[1].age)