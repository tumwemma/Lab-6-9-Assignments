

    

$("document").ready(function(){

    setInterval(() => {
        $("#time").text(new Date());
    }, 1000);

    
    

   $.getJSON("../data/studentData.json", function(dataJson){
        $.each(dataJson, function(key, value){
            $("#datapopulate").append("<tr> <td>"+ value.studentId+"- "+ value.firstName+"</td> </tr>")
        })
        for (var i = 0; i < localStorage.length; i++){
            console.log(localStorage.getItem(localStorage.key(i)))
            var obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
            var student_id  = obj.id;
            var student_name = obj.name;
            $('#datapopulate').append("<tr> <td>"+student_id+ " - "+ student_name+"</td> </tr>");
        }
   })
   
   $("#submit").click(function(event){
   
            
            let txtfild1= $("#stuid").val()
            let txtfild2= $("#fname").val()
            console.log($("#stuid").val())
            if(txtfild1=="" || txtfild2==""){
                console.log("Empty input not allowed")
            }else{
                $("#datapopulate").append("<tr> <td>"+ txtfild1+"- "+ txtfild2+"</td> </tr>")

                if(typeof(Storage) !== undefined){
                   // localStorage.setItem(txtfild1,txtfild1+" - "+ txtfild2)
                   // localStorage.setItem(txtfild2,txtfild2)
                   var obj = {"id":txtfild1,"name":txtfild2}
                   console.log(JSON.stringify(obj))
                   localStorage.setItem(txtfild1,JSON.stringify(obj))
                }
                else{
                    console.log("no web storage supported")
                }

            $("#stuid").val('')
            $("#fname").val('')
            event.preventDefault();

            }
           
   })
   
})


