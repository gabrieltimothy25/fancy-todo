function onSignIn(googleUser) {
    var google_token = googleUser.getAuthResponse().id_token;
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
                    let overdue = 0;
                    let todo = 0;
                    let dueToday = 0;
                    let completed = 0;
                    if (data.data.length !== 0) {
                        data.forEach(todo => {
                            if (new Date() > new Date(todo.due_date)) overdue++;
                            if (todo.status === 'pending') todo++;
                            if (new Date(todo.due_date) === new Date()) dueToday++;
                            if (todo.status === 'completed') completed++ 
                            $('#heading-stats').append(`
                            <div class="card">
                                <div class="card-content white-text todo-card">
                                    <span class="card-title">Card Title</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">This is a link</a>
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                            `)
                        })
                    }
                    $('#overdue').append(`<a href='#' class='stats'>${overdue}</a>`)
                    $('#todo').append(`<a href='#' class='stats'>${todo}</a>`)
                    $('#due-today').append(`<a href='#' class='stats'>${dueToday}</a>`)
                    $('#completed').append(`<a href='#' class='stats'>${completed}</a>`)
                })
                .fail(err => {
                    console.log(err.message)
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