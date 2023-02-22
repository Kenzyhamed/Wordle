const row1 = document.getElementsByClassName("grid-item1");
const row2 = document.getElementsByClassName("grid-item2");
const row3 = document.getElementsByClassName("grid-item3");
const row4 = document.getElementsByClassName("grid-item4");

const rows=[row1, row2, row3, row4]
var changecc = true ;
var changei = true; 
var changeh = true;
let rowc=0
let column=0;
var chosenword;
var word;
var listing;
let response;

window.onload = async () => {
  const button= document.getElementById("hello");
    button.disabled = true;
    button.innerText = "Loading...";

  const res = await fetch("https://api.masoudkf.com/v1/wordle", {
    headers: {
      "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
    },
  });
  response =await res.json();
  console.log(response)
  button.disabled = false;
  button.innerText = "Start Over";
  listing=Math.floor(Math.random() * ((response.dictionary.length)));
  console.log(listing);
  word=response['dictionary'][listing].word;
  chosenword=word.split("");
}


function hintfeed(){
  if(changeh){
    hintinfo.classList.add("hintpressed");
    hintinfo.innerText="Hint: " + response['dictionary'][listing].hint;
    changeh=false;
  }
  else{
    hintinfo.innerText= "";
    hintinfo.classList.remove("hintpressed");
    changeh=true;
  }

}

function mistake(){
  hintinfo.classList.add("mistake");
  hintinfo.innerText="You missed the word  " +   word + " and lost!";
}
function correct(){
  hintinfo.classList.add("correct");
  hintinfo.innerText="You guess the word  " +   word + " and correctly!";
}



function empty(){
  rowc=0;
  column=0;
  for (let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++){
      rows[i][j].innerText="";
      rows[i][j].classList.remove("right");
      rows[i][j].classList.remove("wrong");
      rows[i][j].classList.remove("maybe");
    }
    image.classList.remove("image");
    image.classList.add("infovis");
    box.classList.add("grid-container");
    box.classList.remove("infovis");
    hintinfo.innerText= "";
    hintinfo.classList.remove("mistake");
    changeh=true;
}
}




function strtoverbutton(){
  empty();
  hint.disabled=false;
  hintinfo.classList.remove("hintpressed");
  hintinfo.classList.remove("correct");
  hintinfo.classList.remove("mistake");
  listing=Math.floor(Math.random() * ((response.dictionary.length)));
  console.log(listing)
  word=response['dictionary'][listing].word;
  chosenword=word.split("");
}


function changeColor(){ 
 if(changecc){
  document.body.style.backgroundColor =   '#242424';
  hint.style.color = "white";
  info.style.color = "white";
  backcolor.style.color = "white";
  titlew.style.color = "white";
  box1.style.color = "white";
  box2.style.color = "white";
  box3.style.color = "white";
  box4.style.color = "white";
  box5.style.color = "white";
  box6.style.color = "white";
  box7.style.color = "white";
  box8.style.color = "white";
  box9.style.color = "white";
  box10.style.color = "white";
  box11.style.color = "white";
  box12.style.color = "white";
  box13.style.color = "white";
  box14.style.color = "white";
  box15.style.color = "white";
  box16.style.color = "white";
  list1.style.color = "white";
  list2.style.color = "white";
  list3.style.color = "white";
  list4.style.color = "white";
  list5.style.color = "white";
  list6.style.color = "white";
  list7.style.color = "white";
  footer.style.color = "white";
  listtitle.style.color = "white";
  changecc=false;

 }                    
 else{
  document.body.style.backgroundColor = "white";
  hint.style.color = "black";
  info.style.color = "black";
  backcolor.style.color = "black";
  titlew.style.color = "black";
  box1.style.color = "black";
  box2.style.color = "black";
  box3.style.color = "black";
  box4.style.color = "black";
  box5.style.color = "black";
  box6.style.color = "black";
  box7.style.color = "black";
  box8.style.color = "black";
  box9.style.color = "black";
  box10.style.color = "black";
  box11.style.color = "black";
  box12.style.color = "black";
  box13.style.color = "black";
  box14.style.color = "black";
  box15.style.color = "black";
  box16.style.color = "black";
  list1.style.color = "black";
  list2.style.color = "black";
  list3.style.color = "black";
  list4.style.color = "black";
  list5.style.color = "black";
  list6.style.color = "black";
  list7.style.color = "black";
  footer.style.color = "black";
  listtitle.style.color = "black";
  changecc=true;
 }
  
}

function help(){
  if(changei){
    button.classList.remove("buttonplacement");
    button.classList.add("infoclickbutton");
    box.classList.add("infoclickgrid");
    instructions.classList.remove("infovis");
    instructions.classList.add("infoblock");
    changei=false;
  }
  
  else{
    button.classList.remove("infoclickbutton");
    button.classList.add("buttonplacement");
    box.classList.remove("infoclickgrid");
    instructions.classList.add("infovis");
    instructions.classList.remove("infoblock");
    changei=true;
  }}







document.addEventListener("keypress", (event)=>{

  const value=event.key.toUpperCase();
  const key = event.key;

 
  if((key!="Backspace") && (key!="Enter")) {
    if (key.match(/[a-zA-Z]/i)){

      rows[rowc][column].innerText=value;  
      column+=1;}}
  else if (key=="Enter"){
      if (rows[rowc][0].innerText==""){
        window.alert("You need to complete the word");}
      else if (rows[rowc][1].innerText==""){
        window.alert("You need to complete the word");}
      else if (rows[rowc][2].innerText==""){
        window.alert("You need to complete the word");}
      else if (rows[rowc][3].innerText==""){
        window.alert("You need to complete the word");}
      else{
        var temp2 = chosenword.map(wor => wor.toLowerCase());
        for (let i = 0; i < 4; i++) {
          var temp1 = rows[rowc][i].innerText.toLowerCase();
          if(temp1==temp2[i]){
            rows[rowc][i].classList.add("right");
            temp2.splice(i, i);}
          else if (temp2.includes(temp1)){
            rows[rowc][i].classList.add("maybe");
            let j;
            for (j=0; j<rows[rowc].length; j++){
              if(temp1==temp2[j]){
                temp2.splice(j, j);
                break;
              }
            }}
          else{
            rows[rowc][i].classList.add("wrong");}}
        temp2 = chosenword.map(wor => wor.toLowerCase());
        if (rows[rowc][0].innerText.toLowerCase()==temp2[0]){
          if(rows[rowc][1].innerText.toLowerCase()==temp2[1]){
            if (rows[rowc][2].innerText.toLowerCase()==temp2[2]){
              if(rows[rowc][3].innerText.toLowerCase()==temp2[3]){
                correct();
                image.classList.add("image");
                image.classList.remove("infovis");
                box.classList.remove("grid-container");
                box.classList.add("infovis");
                instructions.classList.add("infovis");
                instructions.classList.remove("infoblock");
                button.classList.remove("infoclickbutton");
                button.classList.add("buttonplacement");
                box.classList.remove("infoclickgrid");
                hint.disabled=true;}}}}



        let test=true;
        for (let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++){
            if (rows[i][j].innerText==""){
              test=false;
            }
          }
        }
        if (test==true){
          for (let i = 0; i < 4; i++) {
              if (rows[3][i].innerText!=temp2[i]){
                mistake();
                hint.disabled=true;
                break;
              }
        }}
        rowc+=1;
        column=0;}}
  else if(key=='Backspace'){
    if(column==0){column=column;}
    else{column-=1;}
    rows[rowc][column].innerText= "";}


});

  
  
  
  