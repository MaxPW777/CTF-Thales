<?php

//recuperation des données du formulaire
$username = $_POST['username'];
$password = $_POST['password'];

//connexion à la base de données
$bdd = new mysqli('mysql:host=localhost;dbname=auth_hackathon;charset=utf8', 'root', '');

//verification de la connexion
if (!$bdd) {
    die('Erreur de connexion');
}

// Vérification de la connexion
if ($conn->connect_error) {
    die("Échec de la connexion à la base de données : " . $conn->connect_error);
}

// Requête SQL pour vérifier les informations de connexion
$query = "SELECT * FROM user WHERE username='$username' AND mdp='$password'";
$result = $conn->query($query);

if ($result->num_rows == 1) {
    // L'utilisateur est authentifié avec succès
    header("Location: ../pages/main.html")
    exit();
} else {
    // L'authentification a échoué
    echo "Nom d'utilisateur ou mot de passe incorrect.";
}


?>