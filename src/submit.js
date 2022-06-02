let ratePtag = document.getElementById("rate-text");
let rate = sessionStorage.getItem("rate");

ratePtag.innerHTML = `You selected ${rate} out of 5.`;