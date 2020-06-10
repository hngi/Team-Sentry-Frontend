function changeLocation(location) {
    console.log(location, "kkkkk");
    const lagosLoc =
      "<p>" +
      '<span><i class="fa fa-map-marker" aria-hidden="true"></i></span>' +
      " Quarter 38F, First Cooper Road, Ebute Metta." +
      "</p>" +
      "<p>" +
      '<span><i class="fa fa-phone" aria-hidden="true"></i></span>' +
      " +234 805 525 1613, +234 703 796 5335" +
      "</p>" +
      "<p>" +
      "<span" +
      '><i class="fa fa-envelope-square" aria-hidden="true"></i>' +
      "</span>" +
      " edges@info.com" +
      "</p>" +
      "<div>" +
      ' <i class="fa fa-facebook" aria-hidden="true"></i>' +
      ' <i class="fa fa-twitter" aria-hidden="true"></i>' +
      ' <i class="fa fa-instagram" aria-hidden="true"></i>' +
      ' <i class="fa fa-linkedin" aria-hidden="true"></i>' +
      "</div>";
    const abujaLoc =
      "<p>" +
      '<span><i class="fa fa-map-marker" aria-hidden="true"></i></span>' +
      " Garki Estate, First Alhaji Aina Road, Maitama." +
      "</p>" +
      "<p>" +
      '<span><i class="fa fa-phone" aria-hidden="true"></i></span>' +
      " +234 805 525 1613, +234 703 796 5335" +
      "</p>" +
      "<p>" +
      "<span" +
      '><i class="fa fa-envelope-square" aria-hidden="true"></i>' +
      "</span>" +
      " edges@info.com" +
      "</p>" +
      "<div>" +
      ' <i class="fa fa-facebook" aria-hidden="true"></i>' +
      ' <i class="fa fa-twitter" aria-hidden="true"></i>' +
      ' <i class="fa fa-instagram" aria-hidden="true"></i>' +
      ' <i class="fa fa-linkedin" aria-hidden="true"></i>' +
      "</div>";
    const kwaraLoc =
      "<p>" +
      '<span><i class="fa fa-map-marker" aria-hidden="true"></i></span>' +
      " Saraki Estate, First Dele Aina Road, ijagun." +
      "</p>" +
      "<p>" +
      '<span><i class="fa fa-phone" aria-hidden="true"></i></span>' +
      " +234 805 525 1613, +234 703 796 5335" +
      "</p>" +
      "<p>" +
      "<span" +
      '><i class="fa fa-envelope-square" aria-hidden="true"></i>' +
      "</span>" +
      " edges@info.com" +
      "</p>" +
      "<div>" +
      ' <i class="fa fa-facebook" aria-hidden="true"></i>' +
      ' <i class="fa fa-twitter" aria-hidden="true"></i>' +
      ' <i class="fa fa-instagram" aria-hidden="true"></i>' +
      ' <i class="fa fa-linkedin" aria-hidden="true"></i>' +
      "</div>";
  
    const locationElement = document.getElementById("address");
    if (location === "abuja") {
      locationElement.innerHTML = abujaLoc;
    }
    if (location === "kwara") {
      locationElement.innerHTML = kwaraLoc;
    }
    if (location === "lagos") {
      locationElement.innerHTML = lagosLoc;
    }
  }