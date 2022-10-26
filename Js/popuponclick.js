document.querySelector("button").addEventListener("click", function(){
  setTimeout(function() {
    alert("you have clicked");
  },2000);
});
/let arr =[0,1,2,3];
let x = arr[4]
try{
  nonExistentfunction();
}
catch(error){
  alert(error);

}
