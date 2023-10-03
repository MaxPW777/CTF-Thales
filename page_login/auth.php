<?php

//recuperation des données du formulaire
$username = $_POST['username'];
$password = $_POST['password'];

//connexion à la base de données
$bdd = new mysqli('localhost', 'root', '', 'auth_hackathon');

//verification de la connexion
if (!$bdd) {
    die('Erreur de connexion');
}

// Vérification de la connexion
if ($bdd->connect_error) {
    die("Échec de la connexion à la base de données : " . $bdd->connect_error);
}

// Requête SQL pour vérifier les informations de connexion
$query = "SELECT * FROM user WHERE username='$username' AND mdp='$password'";
$result = $bdd->query($query);


if ($result->num_rows == 1) {
    // L'utilisateur est authentifié avec succès
    header("Location: index.php");
} else {
     //L'authentification a échoué
    echo "Nom d'utilisateur ou mot de passe incorrect.";
}


?>