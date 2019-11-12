function set_timer(){
    setTimeout('display_time()',1000)
    }
    
    function display_time() {
    var x = new Date();
    document.getElementById('time').innerHTML = x;
    set_timer();
     }   


let studentsInfo = [ 
    { "studentId": "000-98-0001", "firstName": "James" }, 
    { "studentId": "000-98-0002", "firstName": "Anna" }, 
    { "studentId": "000-98-0003", "firstName": "Jeffrey" } 
];

function init() {
    jsonDataLoad();
    document.getElementById("studentRegisterForm").onsubmit = add;
    display_time();
   
}

let jsonDataLoad=(function(){
    if(studentsInfo.length !=0){
        let template="";
        studentsInfo.forEach(x=>{
            template += '<tr>' 
            template += '<td>' +x.studentId+ "- "+ x.firstName+'</td';
           // template += '<td>' +x.firstName+'</td';
            template += '</tr>' ;

        }); 

        document.getElementById('datapopulate').innerHTML=template;
    }
    
});

window.onload=init;

function add(e) {
    e.preventDefault();
    let template2=""

    let student={
         studId:document.getElementById('stuid').value,
        fname:document.getElementById('fname').value
        
    }
    let node = document.createElement("tr");
    if(student.studId != "" && student.fname != ""){
       let tdElement = document.createElement("td");
        let tdInfo = document.createTextNode(student.studId+" - "+student.fname);
      // node.appendChild(document.createElement("td").appendChild(document.createTextNode(student.studId+" - "+student.fname)));
        tdElement.appendChild(tdInfo);
        node.appendChild(tdElement);
        // node.appendChild(document.createElement("td").appendChild(document.createTextNode(student.studId+" - "+student.fname)));
        // node.appendChild(document.createElement("td").appendChild(document.createTextNode(student.fname)));
    }
    document.getElementById('datapopulate').appendChild(node);
    document.getElementById("stuid").value = "";
    document.getElementById("fname").value = "";
}

/*
document.getElementById('studentRegisterForm').addEventListener('submit', function(event){
    event.preventDefault()
    let student={
        "studId":"document.getElementById('stuid').value",
        "fname":"document.getElementById('fname').value"
        
    }

    if(student.studId != "" && student.fname != ""){
        studentsInfo.push(student)
    }
    jsonDataLoad();
    studId=document.getElementById('stuid').value='',
    fname=document.getElementById('fname').value=';'
       
})*/






/*
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault()
    let stu = {}

    stu.studentId = document.getElementById('stuId').value
    stu.firstName = document.getElementById('name').value
    
    if(stu.studentId != "" & stu.firstName != ""){
        students.push(stu)
    }
    document.querySelector('#stuId').value = ''
    document.querySelector('#name').value = ''
    
    // console.log(stu)
    // console.log(students)
    loadData()
})*/
