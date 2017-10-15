(function () {
  function resizeNavbarAnimation() {
    var $window = $(window),
      navbar = $('nav');

    if ($window.scrollTop() > 0) {
      navbar.addClass('top-nav-collapse');
    } else {
      navbar.removeClass('top-nav-collapse');
    }
  }

  function startPulseOnHoverIn() {
    $(this).addClass('animated pulse infinite');
  };

  function stopPulseOnHoverOut() {
    $(this).removeClass('animated pulse infinite');
  };

  function showOtherSkills(event) {
    event.preventDefault();

    var $this = $(this);

    const idOfOtherSkillsToShow = $this.attr('data-skills-other');
    document.getElementById(idOfOtherSkillsToShow)
      .classList.remove('d-none');
    $this.classList.add('disabled');
  };

  function addEntranceAnimation() {
    var $this = $(this);

    $this.addClass('wow fadeIn');

    $this.attr('data-wow-delay', '0.2s')
      .attr('data-wow-duration', '2s');
  };

  function scrollSmoothly(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  };

  $(document).on('click', 'a[data-skills-other]', showOtherSkills);
  $(window).scroll(resizeNavbarAnimation);
  $('section').each(addEntranceAnimation);
  $('#start-exploring').hover(startPulseOnHoverIn, stopPulseOnHoverOut);
  $(document).on('click', 'a[href^="#"]', scrollSmoothly);

  new WOW().init();
})();
