import './masterLayout.html';
Template.masterLayout.events ({
  'click .toggle-select': function (event) {
    const _this = event.currentTarget;
    if(!$(_this).hasClass('teal-active'))
      {
        $('.toggle-select').removeClass('teal-active');
        $(_this).addClass('teal-active');
      }
  },
});
