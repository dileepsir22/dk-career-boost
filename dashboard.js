// Optional: Dynamic name rendering after login
document.addEventListener("DOMContentLoaded", () => {
  const student = {
    name: "Dileep Kumar Banjare",
    id: "S123456",
    gender: "Male",
    class: "12th",
    dob: "10-Jan-2006",
    mobile: "9876543210",
    email: "student@example.com",
    address: "Raipur, Chhattisgarh",
    photo: "https://via.placeholder.com/150"
  };

  document.getElementById("studentName").innerText = student.name;
  document.getElementById("name").innerText = student.name;
  document.getElementById("id").innerText = student.id;
  document.getElementById("gender").innerText = student.gender;
  document.getElementById("class").innerText = student.class;
  document.getElementById("dob").innerText = student.dob;
  document.getElementById("mobile").innerText = student.mobile;
  document.getElementById("email").innerText = student.email;
  document.getElementById("address").innerText = student.address;
  document.getElementById("photo").src = student.photo;
});

// Logout event
document.getElementById("logout").addEventListener("click", () => {
  alert("Logging out...");
  // You can redirect to login page here
});
