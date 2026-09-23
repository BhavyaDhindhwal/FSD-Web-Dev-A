use("CollegeDB");
db.createCollection("students");

// db.students.insertOne(
// {rollNo:1, name:"Bhavya",section:"FSD-A",marks:80}
// )

//db.students.insertMany([
//     {rollNo:2, name:"Ananya",section:"FSD-A",marks:90},
//     {rollNo:3, name:"Rohit",section:"FSD-A",marks:70},
//     {rollNo:4, name:"Sakshi",section:"FSD-A",marks:85},
//     {rollNo:5, name:"Amit",section:"FSD-A",marks:75}
//       {rollNo:5, name:"Amit",section:"FSD-A",marks:75}
// ])

// db.students.insert(
//     {rollNo:6, name:"Riya",section:"FSD-B",marks:95}
// )

// db.students.findOne();
//db.students.find();

// db.students.find({section:"FSD-B"});

// db.students.find({name:"Rohit"});

//db.students.updateOne({name:"Rohit"}, {$set: {marks: 75}})


//db.students.updateMany({section:"FSD-A"}, {$set: {section: "FSD-B"}})
//db.students.deleteOne({rollNo: 6});
//db.students.deleteMany({section: "FSD-B"});
db.students.findOne();