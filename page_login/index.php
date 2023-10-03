<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link  type="text/css" rel="stylesheet" href="style.css">
    <title>Login</title>
</head>
<body>


    <div class="container">
        <div class="login">
            <br />
            <h1>Log-in</h1>
            <br />
            <form action="auth.php" method="POST">
                <input type="text" name="username" placeholder="Username" required="required" />
                <br />
                <br />
                <input type="password" name="password" placeholder="Password" required="required" />
                <br />
                <br />
                <button type="submit" class="button">Log-in</button>
                <br />
                <br />
            </form>
        </div>
    </div>

    <p><?php echo $erreur; ?></p>
    
</body>
</html>