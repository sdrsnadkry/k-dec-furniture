const student = {
    name: "Kripa",
    address: "Kathmandu",
    age: 50,
};
const student2 = {
    name: "Heena",
    address: "Kathmandu",
    age: 60,
};


//de structuring

const { name, ...rest } = student;
const { name: name2 } = student2;


console.log(name2)