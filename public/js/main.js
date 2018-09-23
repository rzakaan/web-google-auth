function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#user-credentials").empty();

    var tmp = "<a>Id " + profile.getId() + "</a><br>";
    $("#user-credentials").append(tmp);

    tmp = "<a>Name " + profile.getName() + "</a><br>";
    $("#user-credentials").append(tmp);

    tmp = "<a href='" + profile.getImageUrl() + "'>Profile Image Link</a><br>";
    $("#user-credentials").append(tmp);

    tmp = "<a>Email " + profile.getEmail() + "</a><br>";
    $("#user-credentials").append(tmp);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

$(function () {
});