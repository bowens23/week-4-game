
 $(document).ready(function() {
$(".choose").on("click", function( event ){
$(this).appendTo("#chosen");
$(this).removeClass("choose").addClass("chosen");
$(".choose").removeClass("choose").addClass("attackers");
$(".attackers").appendTo("#attackers");

var chosenId=$(this).attr("id");

var chosenHp=$(this).attr("value");

$(".attackers").on("click", function( event ){
 
$(this).appendTo("#defender").removeClass("attackers").addClass("defender");


var defenderId=$(this).attr("id");
var defenderHp=$(this).attr("value");



var yourAttack=''
var theirAttack=''
var counter=0;
$("#attack").on("click", function( event ){


counter++;

var yourAttack = 5*counter;
var theirAttack= 5;


defenderHp=defenderHp-yourAttack;
chosenHp=chosenHp-theirAttack;



$("#theirDamage").text("You hit "+($(".defender").attr("id"))+" for "+(yourAttack)+" damage.");
$("#yourDamage").text(($(".defender").attr("id"))+" hit you for " +(theirAttack)+" damage.");
// console.log(defenderHp);
// console.log(chosenHp);
//i have no idea why i had to add the following line but it was the only way to fix a bug
$(".defender").removeClass("chosen");
$(".defender>.points").text(defenderHp);
$(".chosen>.points").text(chosenHp);

if (chosenHp<=0 & chosenHp<=defenderHp) {
	$("#theirDamage").html("");
	$("#yourDamage").html("");
 $("#reset").text("reset");
$("#losingMessage").html("you have been defeated by " + (defenderId))
$("#attack").prop("disabled", true);
}

else if (defenderHp<=0 & chosenHp>defenderHp){
	$(".defender").addClass("out").hide();
	$("#losingMessage").html("you have defeated " + (defenderId) +" choose another defender.")

}




  });

		$("#reset").on("click", function(event){
		$(".chosen").removeClass("chosen").addClass("choose").appendTo("#choices");
		$(".defender").removeClass("defender").addClass("choose").appendTo("#choices");
		$(".attackers").removeClass("attackers").addClass("choose").appendTo("#choices");
		$("#losingMessage").html("");
		$("#reset").html("");
		$("#attack").prop("disabled",false);
		$(".choose").text(attr("value"));
		console.log ($(".choose").attr("value"));
		//$("#yourDamage").text(($(".defender").attr("id"))
		});

 });

 });


});
//  $(".attackers").on("click", function( event ){
//what is the difference between var id = '' and id = ''.
// $(".attackers").removeClass(chosen);
// $(".attackers").addClass()

//  $(this).appendTo("#defender");

//  $(this).addClass("defender");

 
//  

//  });


//  $("defender").addClass("yellow");




// console.log ($(".defender").attr("id"));
// console.log ($(".chosen").attr("id"));
// console.log (yourAttack);
// console.log (theirAttack);
//  console.log($("#defender").attr("id"))

// console.log($("#defender").attr("value"));


//for (i=0;i<fighters.length; i++){if $(this)}