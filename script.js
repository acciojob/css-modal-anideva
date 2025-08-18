//your JS code here. If required.


// elements lena 
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// open modal
openBtn.onclick = () => modal.style.display = "flex";

// close modal (X button)
closeBtn.onclick = () => modal.style.display = "none";

// close modal (outside click)
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
//id => unique element
//class => list of elements

// 1. button => onclick (open modal) => modal opens, slide top to mid section, background => blurr
//div => (full screen ) => div => heading, content, button (modal)
// except modal=> click, modal => close