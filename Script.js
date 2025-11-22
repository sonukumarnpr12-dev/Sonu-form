// Auto-fill today's date
const todayField = document.getElementById("today");
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
todayField.value = `${dd}/${mm}/${yyyy}`;

// DOB auto-slash
const dobInput = document.getElementById("dob");
dobInput.addEventListener("keydown", function(e) {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    let val = dobInput.value.replace(/[^\d]/g, "");
    if (val.length === 2) {
      dobInput.value = val.slice(0,2) + "/";
    } else if (val.length === 4) {
      dobInput.value = val.slice(0,2) + "/" + val.slice(2,4) + "/";
    } else if (val.length === 8) {
      dobInput.value = val.slice(0,2) + "/" + val.slice(2,4) + "/" + val.slice(4,8);
    }
  }
}

// WhatsApp submit
document.getElementById("sonuForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const date = document.getElementById("today").value.trim();
  const phoneNumber = "917352613736";
  const message = `Form Submitted:\nName: ${firstName} ${lastName}\nD.O.B: ${dob}\nDate: ${date}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
