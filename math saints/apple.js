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

let localStream, pc1, pc2;
const offerOptions = { offerToReceiveAudio: true, offerToReceiveVideo: true };

publishLiveLesson.addEventListener("click", () => {
    
    if (videoFeed.captureStream) {
      localStream = videoFeed.captureStream();
        call();
    } else if (videoFeed.mozCaptureStream) {
      localStream = videoFeed.mozCaptureStream();
        call();
    } else {
      showAlert("Your browser does not Support this..");
    }
  });
  function call () {
      showAlert('Starting Call');
      pc1 = createPeerConnection('pc1');
      pc2 = createPeerConnection('pc2', (event) => {
          receiverVideo.srcObject = event.streams[0];
      });
      
      localStream.getTracks().forEach((track) => pc1.addTrack(track, localStream));
      
      pc1.createOffer(offerOptions).then((offer) => {
    pc1.setLocalDescription(offer);
    pc2.setRemoteDescription(offer);
    return pc2.createAnswer();
  }).then((answer) => {
    pc2.setLocalDescription(answer);
    pc1.setRemoteDescription(answer);
  }).catch((error) => console.error('Error during SDP exchange:', error));

  }
function createPeerConnection(name, onTrackCallback) {
  const pc = new RTCPeerConnection();
  console.log(`Created ${name}`);

  pc.onicecandidate = (event) => {
    if (event.candidate) {
      const otherPC = name === 'pc1' ? pc2 : pc1;
      otherPC.addIceCandidate(event.candidate).catch((err) =>
        console.error(`${name} failed to add ICE candidate`, err)
      );
    }
  };

  pc.oniceconnectionstatechange = () => {
    console.log(`${name} ICE state: ${pc.iceConnectionState}`);
  };

  if (onTrackCallback) {
    pc.ontrack = onTrackCallback;
  }

  return pc;
}

function watchTimeGet (watchTime) {
    const allVideos = document.querySelectorAll("video");
const watchTimeHolder = document.querySelector("#watchTime");

const watchedIntervalsMap = new Map(); 
    
allVideos.forEach((video) => {
    watchedIntervalsMap.set(video, new Set()); 

    video.addEventListener("timeupdate", () => {
        const currentTime = Math.floor(video.currentTime); 
        const watchedIntervals = watchedIntervalsMap.get(video); 

        
        if (!watchedIntervals.has(currentTime)) {
            watchedIntervals.add(currentTime);
            watchTime++; 
            watchTimeHolder.textContent = watchTime; 
        }
    });
});
    
console.log("All videos initialized:", allVideos.length);
allVideos.forEach((video, index) => {
    console.log(`Video ${index + 1} duration:`, video.duration);
});

}
watchTimeGet(watchTime);
setTimeInterval(watchTimeGet,5000);

                           
