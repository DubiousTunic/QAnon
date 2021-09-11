
var postInfo = document.getElementsByClassName("postInfo");


console.log("inoffensive nobody showing upon the golden attendance with profound and ecstatic respect engineer stunts upon the golden fires of spring whose oracles cannot be opposed")


function quantumProject(q){
    $(q).text($(q).text() + "!");
    $.ajax({
      url: "https://qrng.anu.edu.au/API/jsonI.php?length=1&type=hex16&size=16",
      type: "GET",
      dataType: "json",
      success : function(data){
        $(q).text(data.data[0])
      },
     error:function(x,e) {
        if (x.status==0) {
            alert('You are offline!!\n Please Check Your Network.');
        } else if(x.status==404) {
            alert('Requested URL not found.');
        } else if(x.status==500) {
            alert('Internel Server Error.');
        } else if(e=='parsererror') {
            alert('Error.\nParsing JSON Request failed.');
        } else if(e=='timeout'){
            alert('Request Time out.');
        } else {
            alert('Unknow Error.\n'+x.responseText);
        }
      }
    })
}

beginMaester();

function beginMaester(){
    for(var i = 0; i < postInfo.length; i++){       
    //postInfo[i].insertAdjacentHTML("beforeend", "HELLO WORLD");
        var lastChild = postInfo[i].getElementsByClassName("postNum")[0].getElementsByTagName("a")[1];
       // if(lastChild.href.includes("'")){           
            postInfo[i].insertAdjacentHTML("beforeend", "<a class='q-clicker' href='#'> Q</a>");
        //}   
       // else{
       //     postInfo[i].insertAdjacentHTML("beforeend", "<a class='q-clicker' href='#'>Q</a>");   
        //}
        var anchors = document.getElementsByClassName('q-clicker');
        for(var z = 0; z < anchors.length; z++) {
            var elem = anchors[z];   
            elem.onclick = function(e) { 
                console.log("click");           
                quantumProject(this);
                return false;
            };
        }

    }
}