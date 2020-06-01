import $ from 'jquery';

global.jQuery = $;
global.$ = $;

$('form').on('submit', function (e) {
  e.preventDefault();
  var form = $(this);
  var error = false;

  form.find('textaria, input').each(function () {
    if ($(this).val() == '') {
      error = true;
    }
  });
  if (!error) {
    var data = form.serialize();
    $.ajax({
      type: 'POST',
      url: './index.php',
      dataType: 'json',
      data: data,
      // beforeSend: function beforeSend(data) {
      //   form.find('.create-order__button').attr('disabled', 'disabled');
      // },
      success: function (response) {
        alert('thank you!');
        console.log("done!")
        // window.location.href = "./success/index.html"
        //window.open("http://http://1652079.smokerst.web.hosting-test.net/index2.html");
      },
      // complete: function complete(data) {
      //   form.find('.create-order__button').prop('disabled', false);
      // },
    });
  }
  console.log("error" )
  return false;
});
