function register() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let users, currentUser;
    if (localStorage.getItem('users') == null) {
        users = {};
        currentUser = '';
    }
    else {
        users = JSON.parse(localStorage.getItem('users'));
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    if (username.length > 0 && password.length > 0) {
        if (username in users) {
            swal({
                title: "Username Already Taken!",
                text: `Somebody already used ${username} as their username! Try another one!`,
                icon: "warning",
                button: "Okay"
            }).then(okay => {
                if (okay) {
                    window.location.href = "/register.html";
                }
            });
        }
        else {
            users[username] = password;
            currentUser = username;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            swal({
                title: "Account Created",
                text: `Account created with the username ${username}. You can play Tower Game now!`,
                icon: "success",
                button: "Play Tower Game"
            }).then(okay => {
                if (okay) {
                    window.location.href = "/game.html";
                }
            });
        }
    }
    else {
        swal({
            title: "Invalid Username & Password Length!",
            text: `Use a valid Username and password !`,
            icon: "warning",
            button: "Okay"
        }).then(okay => {
            if (okay) {
                window.location.href = "/register.html";
            }
        });
    }
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let users, currentUser;
    if (localStorage.getItem('users') == null) {
        users = {};
        currentUser = {};
    }
    else {
        users = JSON.parse(localStorage.getItem('users'));
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    if (username in users) {
        if (password == users[username]) {
            currentUser['currentuser'] = username;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            swal({
                title: "Login Successul",
                text: `Welcome back ${username}. You can play Tower Game now!`,
                icon: "success",
                button: "Play Tower Game"
            }).then(okay => {
                if (okay) {
                    window.location.href = "/game.html";
                }
            });
        }
        else {
            swal({
                title: "Wrong Password!",
                text: `You used the wrong password for the username ${username}! Please try again!`,
                icon: "warning",
                button: "Okay"
            }).then(okay => {
                if (okay) {
                    window.location.href = "/login.html";
                }
            });
        }
    }
    else {
        swal({
            title: "Invalid Username!",
            text: `You used the username ${username} which is not included in the database! Please try again!`,
            icon: "warning",
            button: "Okay"
        }).then(okay => {
            if (okay) {
                window.location.href = "/login.html";
            }
        });
    }
}