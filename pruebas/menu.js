$(document).ready(function() {

        var logged=false;

        if (logged){

                $("#notLogged").append("<li><a>Profile</a></li>", "<li><a>Orders</a></li>", "<li><a>Logout</a></li>" );
        }
        else {

                $("#notLogged").append("<li><a href='login.html'>Login</a></li>" );
                $("#notLogged").append("<li><a href='registrer.html'>Register</a></li>" );
        }

});
