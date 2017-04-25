$(function() {
  var b = $("#button_1");
  var w = $("#wrapper_1");
  var l = $("#list_1");

  w.height(0);
  b.click(function() {

    if(w.hasClass('open_1')) {
      w.removeClass('open_1');
      w.height(0);
    } else {
      w.addClass('open_1');
      w.height(l.outerHeight(true));
    }

  });
});

$(function() {
  var b = $("#button_2");
  var w = $("#wrapper_2");
  var l = $("#list_2");

  w.height(0);
  b.click(function() {

    if(w.hasClass('open_2')) {
      w.removeClass('open_2');
      w.height(0);
    } else {
      w.addClass('open_2');
      w.height(l.outerHeight(true));
    }

  });
});
$(function() {
  var b = $("#button_3");
  var w = $("#wrapper_3");
  var l = $("#list_3");

  w.height(0);
  b.click(function() {

    if(w.hasClass('open_3')) {
      w.removeClass('open_3');
      w.height(0);
    } else {
      w.addClass('open_3');
      w.height(l.outerHeight(true));
    }

  });
});

$(function() {
  var b = $("#button_4");
  var w = $("#wrapper_4");
  var l = $("#list_4");

  w.height(0);
  b.click(function() {

    if(w.hasClass('open_4')) {
      w.removeClass('open_4');
      w.height(0);
    } else {
      w.addClass('open_4');
      w.height(l.outerHeight(true));
    }

  });
});
