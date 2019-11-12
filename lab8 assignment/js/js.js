

    

$("document").ready(function(){

    setInterval(() => {
        $("#time").text(new Date());
    }, 1000);

    
    

   $.getJSON("../data/studentData.json", function(dataJson){
        $.each(dataJson, function(key, value){
            $("#datapopulate").append("<tr> <td>"+ value.studentId+"- "+ value.firstName+"</td> </tr>")
        })
       
   })
   
   $("#submit").click(function(event){
   
            
            let txtfild1= $("#stuid").val()
            let txtfild2= $("#fname").val()
            console.log($("#stuid").val())
            if(txtfild1=="" || txtfild2==""){
                console.log("Empty input not allowed")
            }else{
                $("#datapopulate").append("<tr> <td>"+ txtfild1+"- "+ txtfild2+"</td> </tr>")
                

            $("#stuid").val('')
            $("#fname").val('')
            event.preventDefault();

            }
           
   })
   
})


