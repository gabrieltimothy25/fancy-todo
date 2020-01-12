function onSignIn(googleUser) {
    let google_token = googleUser.getAuthRespone().id_token;
    console.log('yes')
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/users/google-sign-in',
        data: {
            google_token
        }
    })
        .done(data => {
            localStorage.setItem('access_token', data.access_token)
            $.ajax({
                method: 'GET',
                url: `http://localhost:3000/todos`,
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .done(data => {
                    $('#menu-nav-btn').remove()
                    $('#new-task-btn').remove()
                    $('#navbtn').append(`<a href="#" data-target="slide-out" class="sidenav-trigger" id='menu-nav-btn'><i class="material-icons" id="nav-access">menu</i></a>`)
                    $('#add-btn-container').append(`<a href="#"><i class="material-icons" id='new-task-btn'>add</i></a>`)
                    $('#signup').hide()
                    $('main').show()
                })
                .fail(err => {
                    console.log(err)
                })
        })
        .fail(err => {
            console.log(err.message)
        })
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      $('#menu-nav-btn').remove()
      $('#new-task-btn').remove()
      $('#navbtn').append(`<a href="#" data-target="slide-out" class="sidenav-trigger disabled" id='menu-nav-btn'><i class="material-icons" id="nav-access">menu</i></a>`)
      $('#add-btn-container').append(`<a href="#" class='disabled'><i class="material-icons" id='new-task-btn'>add</i></a>`)
      $('#signup').show()
    });
}