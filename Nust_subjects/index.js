
const allModules = [
    {
      id: 1,
      semester: "Semester 1",
      courseCode: "EAP511S",
      courseTitle: "English for academic purposes",
      prerequisites: "English in practice, or Language in apractice B, or Module 3, or Exemption",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 2,
      semester: "Semester 1",
      courseCode: "CEN510S",
      courseTitle: "Computing for Engineers 114",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 3,
      semester: "Semester 1",
      courseCode: "IED511S",
      courseTitle: "Introduction to Engineering Drawing 115",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 4,
      semester: "Semester 1",
      courseCode: "MTM511S",
      courseTitle: "Engineering Mathematics 115",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },
    
    {
      id: 5,
      semester: "Semester 1",
      courseCode: "AMC511S",
      courseTitle: "Engineering Mechanics 114",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 6,
      semester: "Semester 1",
      courseCode: "APH511S",
      courseTitle: "Engineering Physics 114",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 7,
      semester: "Semester 2",
      courseCode: "IIN521S ",
      courseTitle: "Introduction to Industry 4.0",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 8,
      semester: "Semester 2",
      courseCode: "ELC520S",
      courseTitle: "Electrical Circuits 124",
      prerequisites: "Engineering Physics 114, Engineering Mathematics 115",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 9,
      semester: "Semester 2",
      courseCode: "ACH521S",
      courseTitle: "Engineering Chemistry 123",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 10,
      semester: "Semester 2",
      courseCode: "MTM521S",
      courseTitle: "Engineering Mathematics 125",
      prerequisites: "Engineering Mathematics 115",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 11,
      semester: "Semester 2",
      courseCode: "MLS520S",
      courseTitle: "Materials Science 124",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 12,
      semester: "Semester 2",
      courseCode: "MOM521S",
      courseTitle: "Mechanics of Materials 124",
      prerequisites: "Engineering Mechanics 114",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 13,
      semester: "Semester 2",
      courseCode: "",
      courseTitle: "",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 14,
      semester: "Semester 2",
      courseCode: "WPR421S",
      courseTitle: "Workshop Practice 120",
      prerequisites: "none",
      year: "Year 1",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 15,
      semester: "Semester 3",
      courseCode: "MTM611S",
      courseTitle: "Engineering Mathematics 215",
      prerequisites: "Engineering Mathematics 125",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 16,
      semester: "Semester 3",
      courseCode: "IMM610S",
      courseTitle: "Introduction to Mining and Metallurgy 214",
      prerequisites: "none",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 17,
      semester: "Semester 3",
      courseCode: "GFE611S",
      courseTitle: "Geology for Engineers 214",
      prerequisites: "none",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },
    {
      id: 18,
      semester: "Semester 3",
      courseCode: "ENS611S",
      courseTitle: "Engineering Surveying 214 ",
      prerequisites: "none",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 19,
      semester: "Semester 3",
      courseCode: "FMC610S",
      courseTitle: "Fluid Mechanics 214",
      prerequisites: "Engineering Mechanics 114",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 20,
      semester: "Semester 3",
      courseCode: "EMC611S",
      courseTitle: "Electrical Machines 214",
      prerequisites: "none",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 21,
      semester: "Semester 4",
      courseCode: "NMS620S",
      courseTitle: "Numerical Methods 224",
      prerequisites: "Engineering Mathematics 215",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 22,
      semester: "Semester 4",
      courseCode: "GMS620S",
      courseTitle: "Geo Mechanics 224 ",
      prerequisites: "none",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 23,
      semester: "Semester 4",
      courseCode: "SSS621S",
      courseTitle: "Statistics 224",
      prerequisites: "Engineering Mathematics 215",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 24,
      semester: "Semester 4",
      courseCode: "MGY621S",
      courseTitle: "Mining Geology 224",
      prerequisites: "Geology for Engineers 214",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 25,
      semester: "Semester 4",
      courseCode: "MSG621S",
      courseTitle: "Mine Surveying 224",
      prerequisites: "Engineering Surveying 214",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 26,
      semester: "Semester 4",
      courseCode: "TDN620S ",
      courseTitle: "Thermodynamics 225",
      prerequisites: "Engineering Mathematics 115",
      year: "Year 2",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 27,
      semester: "Semester 5",
      courseCode: "ORC711S",
      courseTitle: "Operations Research 313",
      prerequisites: "Statistics 224",
      year: "Year 3",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 28,
      semester: "Semester 5",
      courseCode: "RMC711S",
      courseTitle: "Rock Mechanics 314",
      prerequisites: "Soil Mechanics 224",
      year: "Year 3",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    

    {
      id: 29,
      semester: "Semester 5",
      courseCode: "UDM711S",
      courseTitle: "Underground Mining 315",
      prerequisites: "Introduction to Mining and Metallurgy 214",
      year: "Year 3",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 30,
      semester: "Semester 5",
      courseCode: "SUM710S",
      courseTitle: "Surface Mining 315",
      prerequisites: "Introduction to Mining and Metallurgy 214",
      year: "Year 3",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 31,
      semester: "Semester 5",
      courseCode: "GSS711S",
      courseTitle: "Geo Statistics 314",
      prerequisites: "Mining Geology 224; Statistics 224",
      year: "Year 3",
      departement: "MINING AND PROCESS ENGINEERING",
    },

    {
      id: 32,
      semester: "Semester 5",
      courseCode: "MPC711S",
      courseTitle: "Mineral Separation Processes 314",
      prerequisites: "Introduction to Mining and Metallurgy 214",
      year: "Year 3",
      departement: "MINING AND PROCESS ENGINEERING",
    },





];
console.log(allModules);


