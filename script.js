function display(){

    const fullname = document.getElementById("name").value;
    const email = document.getElementById("Email").value;
    const github = document.getElementById("githubusername").value;
    var pic = document.getElementById("dp")

    if (pic.files.length==0)
    {
        alert("please upload a photo");
        return;
    }

    var file =pic.files[0];
    var reader = new FileReader();

    reader.onload = function(){
        var imagebase64 = reader.result;

        ticketdata={
          fullname: fullname,
          email: email,
          github: github,
          photo: imagebase64
    };

    localStorage.setItem("ticketData",JSON.stringify(ticketdata));

    window.location.href="generated.html";
    };

   

    

    reader.readAsDataURL(file);




    


}

