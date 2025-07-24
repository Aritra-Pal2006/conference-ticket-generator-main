const ticketData = JSON.parse(localStorage.getItem("ticketData"));

if (ticketData) {
  
  document.getElementById("ticket-name").textContent = ticketData.fullname;
  document.getElementById("ticket-github").textContent = ticketData.github;
  document.getElementById("ticket-email").textContent = ticketData.email;
  document.getElementById("profile-photo").src = ticketData.photo; // base64 image
  document.getElementById("ticket-name1").textContent = ticketData.fullname;

  const ticketNumber = "CC" + Math.floor(100000 + Math.random() * 900000);

  document.getElementById("ticket-number").textContent = ticketNumber;




} else {
  console.log("No ticket data found in localStorage.");
}