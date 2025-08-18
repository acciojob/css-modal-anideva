//your JS code here. If required.


// elements lena 
const modal= document.querySelector(".modal");
const openBtn= document.getElementById("openModal"); //yeh ho gaya oppen modal(button) 
const closeBtn= document.getElementById("closeModal"); //yeh ho gaya close modal(button) 


 // CSS se dikh jaayega
openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});


 // chhup jaayega
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

//ab agar bahar kahi peh bhi cl bhi click karu toh bhi wo close kar dega

// Close modal (by clicking outside)
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});
//id => unique element
//class => list of elements

// 1. button => onclick (open modal) => modal opens, slide top to mid section, background => blurr
//div => (full screen ) => div => heading, content, button (modal)
// except modal=> click, modal => close