let deferredPrompt;

//notify user they can update
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  btnAdd.style.display = 'block';
});

//Check if the button on the phone is pressed
btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});


//determine if the app was successfully installed
window.addEventListener('appinstalled', (evt) => {
  app.logEvent('a2hs', 'installed');
});