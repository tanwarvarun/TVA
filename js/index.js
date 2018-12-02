$('.messageNameInput').on('keyup change', function(){
  $t = $(this);
  
  if ($t.val().length > 3) {
    $t.next().focus();
  }
  
  var card_number = '';
  $('.messageNameInput').each(function(){
    card_number += $(this).val() + ' ';
    if ($(this).val().length == 4) {
      $(this).next().focus();
    }
  })
  
  $('.previewCamp .name').html(card_number);
});

$('#list_id').change(function(){
  m=$( "#list_id option:selected" ).text();
  $('.name').html(m);
})

$('#template').on('keyup change', function(e){
  $t = $(this);
  var newval = '';
  newval = $t.val();
  if(e.keyCode == 13) 
	{
		newval += '<br>';
		$('#template').val(newval);
	}
	console.log("val== "+ newval);
  $('.previewCamp .messageDetail div').html(newval);
});

