function showOtherSkills(caller, otherSkillsId) {
  document.getElementById(otherSkillsId)
    .classList.remove('d-none');
  caller.classList.add('disabled');
}

function scroll() {
  var $window = $(window),
    navbar = $('nav');

  if ($window.scrollTop() > 0) {
    navbar.addClass('top-nav-collapse');
  } else {
    navbar.removeClass('top-nav-collapse');
  }
}

$(window).scroll(scroll);
