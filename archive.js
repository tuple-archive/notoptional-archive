// Disable forms on this archive
var forms = document.querySelectorAll("form");
for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", function (e) {
    e.preventDefault();
    if (
      window.confirm(
        "Forms are disabled for this archive. Would you like to be taken to the new website?"
      )
    ) {
      window.location.href = "https://notoptional.eu";
    }
  });
}
