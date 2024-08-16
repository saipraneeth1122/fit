function initGoogleFit() {
  gapi.client.init({
    apiKey: 'AIzaSyDgP3JoWMilh4fb6DWC1kPd1I3Ld6SP3_4',
    clientId: '647037879688-p5bog3s7agv892d0iis6j265r50mtoa5.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/fitness/v1/rest'],
    scope: 'https://www.googleapis.com/auth/fitness.activity.read',
  }).then(function () {
  });
}

function signInGoogleFit() {
  gapi.auth2.getAuthInstance().signIn().then(initGoogleFit);
}

function displayFitnessData() {
  gapi.client.fitness.users.dataSources.list({
    "userId": "me"
  }).then(function (response) {
    const fitnessResults = document.getElementById('fitness-results');
    fitnessResults.innerHTML = JSON.stringify(response.result, null, 2);
  });
}

gapi.load('client:auth2', signInGoogleFit);
