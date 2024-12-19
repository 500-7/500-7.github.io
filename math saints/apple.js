var loginTab = document.querySelector('.login');
var signInTab = document.querySelector('.sign-up');

var toSignTabBtn = document.querySelector('#createaccount');
toSignTabBtn.addEventListener('click', () => {
    loginTab.style.visibility = 'hidden';
    signInTab.style.visibility = 'visible';
});

var toLoginTabBtn = document.querySelector('.logintab');
toLoginTabBtn.addEventListener('click', () => {
    loginTab.style.visibility = 'visible';
    signInTab.style.visibility = 'hidden';
});


 function makePayment() {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-c4bdcaeddf2e819538569bf7a18a6b1c-X",
      tx_ref: "txref-DI0NzMx13",
      amount: 2500,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      meta: {
        source: "docs-inline-test",
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "test@mailinator.com",
        phone_number: "08100000000",
        name: "Ayomide Jimi-Oni",
      },
      customizations: {
        title: "Flutterwave Developers",
        description: "Test Payment",
        logo: "https://checkout.flutterwave.com/assets/img/rave-logo.png",
      },
      callback: function (data){
        console.log("payment callback:", data);
      },
      onclose: function() {
        console.log("Payment cancelled!");
      }
    });
  }

function showAlert(message) {
  return new Promise((resolve) => {
    var alertBox = document.createElement('div');
    alertBox.classList.add('alert');
    alertBox.classList.add('permanent-marker-regular');
    setTimeout(() => {
       var i = 0;
    var interval = setInterval(function() {
      alertBox.textContent += message.charAt(i);
      i++;
      if (i >= message.length) {
        clearInterval(interval);
        setTimeout(() => {
          document.body.removeChild(alertBox);
          resolve(); 
        }, 1500);
      }
    }, 50);
    document.body.appendChild(alertBox);
  
    },600);
   });
}

 
      