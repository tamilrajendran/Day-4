//create a resume in object and print the elements using dot method and box method
// name,age,gender,martial status,phone number,email id,education[],skills[],address{}

const resume ={
    name : "Tamil",
    age : 27,
    gender : "Female",
    martialstatus : "unmarried",
    phonenumber : 9078563412,
    emailid : "tamilarasi.rajendr@gmail.com",
    education : ["SSLC","HSC","Bsc"],
    skills : ["html","js","dotnet","css"],
    address : {
        no : 4,
        street :"1st street",
        Nagar :"Thiruvalluvar Nagar",
        Area : "Korukkupet",
        City : "Chennai-21"
    }
}
console.log(resume.name);
console.log(resume.age);
console.log(resume.gender);
console.log(resume.martialstatus);
console.log(resume.phonenumber);
console.log(resume.emailid);
for(let i=0;i<=resume.education.length;i=i+1)
{
    console.log(resume.education[i]);
}
for(let i=0;i<=resume.skills.length;i=i+1)
{
    console.log(resume.skills[i]);
}
console.log(resume.address.no);
console.log(resume.address.street);
console.log(resume.address.Nagar);
console.log(resume.address.Area);
console.log(resume.address.City);

// Box method
console.log(resume["name"]);
console.log(resume["age"]);
console.log(resume["gender"]);
console.log(resume["martialstatus"]);
console.log(resume["phonenumber"]);
console.log(resume["emailid"]);
for(let i=0;i<=resume["education"].length;i=i+1)
{
    console.log(resume["education"][i]);
}
for(let i=0;i<=resume["skills"].length;i=i+1)
{
    console.log(resume["skills"][i]);
}
console.log(resume["address"]["no"]);
console.log(resume["address"]["street"]);
console.log(resume["address"]["Nagar"]);
console.log(resume["address"]["Area"]);
console.log(resume["address"]["City"]);

// for in loop and for each loop

const resum ={
    name : "Tamil",
    age : 27,
    gender : "Female",
    martialstatus : "unmarried",
    phonenumber : 9078563412,
    emailid : "tamilarasi.rajendr@gmail.com",
    education : ["SSLC","HSC","Bsc"],
    skills : ["html","js","dotnet","css"],
    address : {
        no : 4,
        street :"1st street",
        Nagar :"Thiruvalluvar Nagar",
        Area : "Korukkupet",
        City : "Chennai-21"
    }
}
for (let key in resum)
{
    console.log(resum[key]);
}
resum.education.forEach(ele=>{console.log(ele)})
resum.skills.forEach(ele=>{console.log(ele)})

