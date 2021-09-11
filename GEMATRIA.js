const gematriaInts = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];
const gematriaTens = ["י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"];
const gematriaHundreds= ["ק", "ר", "ש", "ת", "תק", "תר", "תש", "תת", "תתק", "תתר",];

console.log("By Empress Josephine");

var postInfo2 = document.getElementsByClassName("postInfo");

for(var i = 0; i < postInfo2.length; i++){		
	//postInfo[i].insertAdjacentHTML("beforeend", "HELLO WORLD");
    var lastChild = postInfo2[i].getElementsByClassName("postNum")[0].getElementsByTagName("a")[1];
    if(lastChild.href.includes("'")){
    	var mySubString = lastChild.href.split("'")[1];

    	postInfo2[i].insertAdjacentHTML("afterend", convertToGematria(mySubString.substring(mySubString.length - 3)));
    }	
    else{
    	postInfo2[i].insertAdjacentHTML("afterend", convertToGematria(lastChild.href.substring(lastChild.length - 3)));   

    }

}

// i am the most high




//from codepen
function convertToGematria(inputString){
    const inputNum = parseInt(inputString);
    let gemMsg;
    let gemOnes = inputString[inputString.length - 1];
    let gemTens = inputString[inputString.length -2];
    let gemHuns = inputString[inputString.length - 3];
  
    let gemMeah = gematriaHundreds[gemHuns -1];
    let gemAsra = gematriaTens[gemTens - 1];
    let gemEchad = gematriaInts[gemOnes - 1];

    gemEchad = gemEchad === undefined ? "" : gemEchad;
    gemAsra = gemAsra === undefined ? "" : gemAsra;
    gemMeah = gemMeah === undefined ? "" : gemMeah;

    if(gemAsra === "י" && gemEchad === "ה"){
        gemEchad = "ו";
        gemAsra = "ט";
    } else if( gemAsra === "י" && gemEchad === "ו"){
        gemEchad = "ז";
        gemAsra = "ט";
    }

    return gemMsg = gemMeah + gemAsra + gemEchad;
    
}

function gemCalc(){
    const alephBeis = {
        "א": 1,
        "ב": 2,
        "ג": 3,
        "ד": 4,
        "ה": 5,
        "ו": 6,
        "ז": 7,
        "ח": 8,
        "ט": 9,
        "י": 10,
        "כ": 20,
        "ך": 20,
        "ל": 30,
        "מ": 40,
        "ם": 40,
        "נ": 50,
        "ן": 50,
        "ס": 60,
        "ע": 70,
        "פ": 80,
        "ף": 80,
        "צ": 90,
        "ץ": 90,
        "ק": 100,
        "ר": 200,
        "ש": 300,
        "ת": 400
    }
    const gemString = document.getElementById("gemText").value;
    let gemSum = 0;
    for(let i = 0; i < gemString.length; i++){
        let c = gemString[i];
        let patt = new RegExp("[\u0590-\u05FF]");
        let res = patt.test(gemString[i]);
        if(res){
           gemSum = gemSum + alephBeis[c]; 
        }
    }

    document.getElementById('gem-sum').innerHTML = gemSum;
}

