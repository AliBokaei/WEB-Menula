const faqLink = document.querySelector('a[href="#faq-Section"]');

faqLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor link behavior

  const targetSection = document.getElementById("faq-Section");
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Scroll to the top of the section
    });
  }
});
