  function regesterd(){
let userName = document.getElementById("userName").value;
let userAge = document.getElementById("userAge").value;
let phoneNumber = document.getElementById("phoneNumber").value;
let seatSelection = document.getElementById("dropOption").value;
let cardElement = document.createElement('div');
  cardElement.className = 'card';
let url = "https://www.example.com";
let qr = qrcode(0, 'H');
  qr.addData(url);
  qr.make();
  cardElement.innerHTML = '<div class="cardColor"><p class="userName"> Name: <span id="name">' +userName+'</span> '+'</p>'+ '<p class="userName">  Age:  <span id="userAg">'+userAge+'</span></p>'+'<p class="userName">Phone number: <span id="phoneNum" >'+phoneNumber+'</span>'+'<p class="userName"> Seat Number:  <span id="seatNum">'+seatSelection+'<center id="cen">'+ qr.createImgTag(4, 0)+'<center/>'+'</span>'+'</p>'+'</div>';
let cardContainer = document.getElementById('cardContainer');
  cardContainer.appendChild(cardElement);
  userName.value = clearInterval();
 document.getElementById("ticket_button").disabled = true;
 };