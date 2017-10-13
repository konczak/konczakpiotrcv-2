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

$('section').each(function () {
  var $this = $(this);

  $this.addClass('wow fadeIn');

  $this.attr('data-wow-delay', '0.2s')
    .attr('data-wow-duration', '2s');
});

new WOW().init();


function startExploreHoverIn() {
  $('#start-exploring').addClass('animated pulse infinite');
};

function startExploreHoverOut() {
  $('#start-exploring').removeClass('animated pulse infinite');
};

$('#start-exploring').hover(startExploreHoverIn, startExploreHoverOut);

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

