$('.copy_group').click(function (e) { 
  e.preventDefault();
  
  navigator.clipboard.writeText('khuukhoidanh@gmail.com').then(function () {
    $('#copy_text').text('Copied !');
    setTimeout(function(){
      $('#copy_text').text('Click to copy');
    }, 1500);
    });
});


let main_on = true;
$('#qr_btn').click(function (e) { 
  e.preventDefault();
  
  if(main_on === true){
    $('main').prop('hidden', true);
    $('#qrcode_page').prop('hidden', false);
    $('#qr_btn').text('Return');
    main_on = false;
  }
  else{
    $('main').prop('hidden', false);
    $('#qrcode_page').prop('hidden', true);
    $('#qr_btn').text('QR Code');
    main_on = true;
  }
});