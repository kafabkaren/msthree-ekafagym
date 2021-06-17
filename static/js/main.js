$(document).ready(function(){
    // Sidenav position
    $('.sidenav').sidenav({edge: "right"});
    // Initializing Collapsible feature
    $('.collapsible').collapsible();
    // Initializing datepicker
    $('.datepicker').datepicker({
        format:"dd mmmm, yyyy",
        showClearBtn: true,
        i18n: {
            done:"select"
        }
    })
  });


