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


var loginPass = document.querySelector('#login-password');
var seeloginpass = document.querySelector('#seelogpass');
seeloginpass.addEventListener('click', () => {
      if (loginPass.type === "password") {
        loginPass.type = "text";
        seeloginpass.innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`;
    } else {
        loginPass.type = "password";
        seeloginpass.innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`;
    }
});

var seesignpassbtn = document.querySelector('#seesignpass');
var signpass = document.querySelector('#sign-up-password');
seesignpassbtn.addEventListener('click', () => {
     if (signpass.type === "password") {
        signpass.type = "text";
        seesignpassbtn.innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`;
    } else {
        signpass.type = "password";
        seesignpassbtn.innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`;
    }
});

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

 var tutorAppearBtn = document.querySelector('#tutor-profile-appear');
 var tutorProfile = document.querySelector('#tutor-profile');
 var tutorappear = "off";
  tutorAppearBtn.addEventListener('click', () => {
     if (tutorappear === "off") {
         tutorProfile.style.visibility = "visible";
         tutorProfile.style.zIndex = "1000";
         tutorAppearBtn.innerHTML = `<span class="material-symbols-outlined">
close
</span>`;
         tutorappear = "on";
     } else {
         tutorProfile.style.visibility = "hidden";
         tutorProfile.style.zIndex = "-1000";
         tutorAppearBtn.innerHTML = `<span class="material-symbols-outlined">
account_circle
</span>`;
         tutorappear = "off";
     }
  });
      
var studentProfileAppear = document.querySelector('#student-profile-appear');
var studentProfile = document.querySelector('#student-profile');
var studentAppear = "off";
studentProfileAppear.addEventListener('click', () => {
     if (studentAppear === "off") {
         studentProfile.style.visibility = "visible";
         studentProfile.style.zIndex = "1000";
         studentProfileAppear.innerHTML = `<span class="material-symbols-outlined">
close
</span>`;
         studentAppear = "on";
     } else {
         studentProfile.style.visibility = "hidden";
         studentProfile.style.zIndex = "-1000";
         studentProfileAppear.innerHTML = `<span class="material-symbols-outlined">
account_circle
</span>`;
         studentAppear = "off";
     }
  });

var videoUploadTab = document.querySelector('.videoUpload');
var lessonBtn = document.querySelector('.lessoner');
var closeBtn = document.querySelector('.close');
lessonBtn.addEventListener('click', () => {
    videoUploadTab.style.visibility = "visible";
    videoUploadTab.style.zIndex = "1000";
});
closeBtn.addEventListener('click', () => {
    videoUploadTab.style.visibility = "hidden";
    videoUploadTab.style.zIndex = "-1000";
});

var videoCategory = document.querySelector('#videoType');
var liveRecoderHolder = document.querySelector('.liveRecord');
var oldVideoUpload = document.querySelector('.oldvideoUpload');
videoCategory.addEventListener('change', (e) => {
   var category = e.target.value;
    if (category === "Video Upload") {
        oldVideoUpload.style.display = 'block';
        liveRecoderHolder.style.display = "none";
    } else {
        liveRecoderHolder.style.display = "block";
        oldVideoUpload.style.display = 'none';
    }
});

var publishLiveLesson = document.querySelector("#startlive");
var endLiveLesson = document.querySelector('#endlive');
var liveLessonTab = document.querySelector('.liveLesson');
var videoFeed = liveLessonTab.querySelector('#livefeed');
var receiverVideo = document.querySelector("#receiverVid");



        
