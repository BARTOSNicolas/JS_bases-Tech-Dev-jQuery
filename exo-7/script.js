console.log("exercice 7");
function getData() {
  return data; // data is defined in DATA.js file
}

$(document).ready(function () {



    function addLineToTable(objet) {
        let line = $('<tr>\n' +
            '<th scope="row">' + objet.id + '</th>\n' +
            '<td>' + objet.email + '</td>\n' +
            '<td>' + objet.name.last + '</td>\n' +
            '<td>' + objet.name.first + '</td>\n' +
            '<td>@' + objet.phone + '</td>\n' +
            '</tr>');
        $('#table tbody').append(line);
    }
    function addAllLines(){
      const datas = getData();
      for (let data of datas){
        addLineToTable(data);
      }
    }

    //Pagination
    function addWithPagi(min, max){
      const datas = getData();
      let pagData = datas.filter(data => min < data.id && data.id <= max);
      for (let data of pagData){
        addLineToTable(data);
      }
    }

    for (let i =0; i < getData().length; i = i+50){
      let number = ('<li class="page-item" min="'+i+'" max="'+(i+50)+'"><button  class="page-link" >'+ (i+1) + ' - ' + (i+50) +'</button></li>');
      $('#pagination').append(number);
    }
    $('#pagination li').each(function (){
      $(this).on('click', function (){
        let min = $(this).attr('min');
        let max = $(this).attr('max');
        console.log(min, max)
        $('#table tbody').empty();
        addWithPagi(min,max);
      })
    })
    addWithPagi(0,50);

    $('#table').tablesort();



})
