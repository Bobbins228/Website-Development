$(document).ready(function() {

const dojos = [
{
  'Dublin': "tallaght",
  'Wexford': "rosslare",
  'Cork': "ballycotton",
  'Tipperary': "clonmel"
},
{
  'Dublin': "adamstown",
  'Wexford': "castle bridge",
  'Cork': "midleton",
  'Tipperary': "cahir"
},
{
  'Dublin': "ashtown",
  'Wexford': "wexford town",
  'Cork': "millstreet",
  'Tipperary': "cashel"
},
{
  'Dublin': "balcartie",
  'Wexford': "new ross",
  'Cork': "blarney",
  'Tipperary': "roscrea"
}
];

Handlebars.registerHelper('capitalise', function(str) {
  let data = str.split(" ");
  let formattedtown="";
  for (i in data) {
     formattedtown+= data[i].charAt(0).toUpperCase() + data[i].substring(1).toLowerCase() + " ";
  }
  return formattedtown;
});

let template   = Handlebars.compile($("#dojos").html());
let theCompiledHtml = template(dojos);
$("#content-placeholder").html(theCompiledHtml);

$('#dojoform').submit(function(evt) {
	evt.preventDefault();
    newdojo= {
	 Dublin:$('#Dublin').val(),
	 Wexford:$('#Wexford').val(),
	 Cork:$('#Cork').val(),
	 Tipperary:$('#Tipperary').val()
    }
    dojos.push(newdojo);

    let theCompiledHtml = template(dojos);
    $("#content-placeholder").html(theCompiledHtml);

    $('.dojoModal').modal('hide');
    $('input[type="text"]').each(function() {
		$(this).val("");
    });
    $('input[type="email"]').val("");
});

$("#btn").on('click', function(){
		$(".dojoModal").modal('show');
});

});











