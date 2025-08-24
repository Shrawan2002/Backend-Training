
const genTeacherData = (count)=>{
    // const names = ["Aarav", "Ishita", "Rohan", "Priya", "Kunal", "Meera", "Dev", "Simran", "Neha", "Vikram"];
    const names = ["Anita", "Sunita", "Rajesh", "Suresh", "Meena", "Pooja", "Vikas", "Arun", "Kavita", "Manoj", "Seema", "Rakesh", "Geeta", "Amit", "Neeta"];
    const fatherNames = ["Rajesh", "Suresh", "Mahesh", "Ramesh", "Anil", "Sunil", "Mukesh", "Naresh", "Amit", "Manoj"];
    const teacherSubjects = ["Math", "Physics", "Chemistry", "Biology", "English", "History", "Geography", "Computer Science"];
    const departments = ["Science", "Arts", "Commerce", "Computer Applications"];
    const qualifications = ["B.Ed", "M.Ed", "PhD", "MSc", "MA"];
    const genders = ["Male", "Female"];
    const streetNames = [
        "MG Road", 
        "Brigade Road", 
        "Ring Road", 
        "Park Street", 
        "Linking Road", 
        "Anna Salai", 
        "Camac Street", 
        "FC Road", 
        "Civil Lines", 
        "Lajpat Nagar"
    ];

    let data = [];

    for(let i = 0; i<= count; i++){
        let name = names[Math.floor(Math.random()* names.length) ]
        let father_name = fatherNames[Math.floor(Math.random()*fatherNames.length)];
        let email = `${name.toLowerCase()}${Math.floor(Math.random()*10000)}@gmail.com`;
        let street = streetNames[Math.floor(Math.random()*streetNames.length)];
        let address = `House No ${Math.floor(Math.random()*500)}, Street ${street}, City ${["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"][Math.floor(Math.random()*5)]}`;
        let mobile = `9${1000000000+Math.floor(Math.random()*900000000)}`;
        let subjects = [
            teacherSubjects[Math.floor(Math.random()*teacherSubjects.length)],
            teacherSubjects[Math.floor(Math.random()*teacherSubjects.length)]
        ];
        let salary = Math.floor(30000+Math.random()*40000);
        let department = departments[Math.floor(Math.random()*departments.length)];
        let qualification = qualifications[Math.floor(Math.random()*qualifications.length)];
        let gender = genders[Math.floor(Math.random()*genders.length)];

        data.push({
            name,
            father_name,
            email,
            street,
            address,
            mobile,
            subjects,
            salary,
            department,
            qualification,
            gender
        })
    }
    return data;

}

let teacherData = genTeacherData(10);
// console.log(teacherData);

module.exports = teacherData;