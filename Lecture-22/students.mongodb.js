use("CollegeDB");
db.createCollection("students2");
// db.students2.insert([
//     {
//         name:"Alex",
//         age: 20,
//         city: "Noida",
//         semester:3,
//         marks: 80,
//         course: "FSD",
//         fees:10000
//     },
//     {
//         name:"Sarah",
//         age: 22,
//         city: "Delhi",
//         semester:4,
//         marks: 85,
//         course: "CyberSecurity",
//         fees:20000
//     },
//     {
//         name:"John",
//         age: 21,
//         city: "Mumbai",
//         semester:2,
//         marks: 90,
//         course: "AI-ML",
//     }
// ])
// db.students2.findOne();

// db.students2.find({city: "Mumbai"});

// db.students2.find({marks: {$gte: 80}});

students2.find({city: "Noida", marks: {$gte: 75}});