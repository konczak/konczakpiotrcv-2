function showOtherSkills(caller, otherSkillsId) {
  document.getElementById(otherSkillsId)
    .classList.remove('d-none');
  caller.classList.add('disabled');
}
