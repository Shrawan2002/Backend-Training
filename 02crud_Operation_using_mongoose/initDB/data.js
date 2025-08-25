

function genData(count){
    const names = ["Aarav", "Ishita", "Rohan", "Priya", "Kunal", "Meera", "Dev", "Simran", "Neha", "Vikram"];
    const data = []

    for(let i = 0; i<count; i++ ) {
        let name = names[Math.floor(Math.random()*names.length)];
        let email = `${name.toLowerCase()}${Math.floor(Math.random()*10000)}@gmail.com`;
        const password = Math.floor(100000 + Math.random() * 900000);
        data.push({name,email,password});
    }

    return data;
}

let data = genData(30);
// console.log(data);

module.exports = data;