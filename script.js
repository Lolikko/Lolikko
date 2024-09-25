<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Premier Site Web</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            color: #4CAF50;
            text-align: center;
        }
        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Bienvenue sur mon site web</h1>
    <p id="message">Cliquez sur le bouton pour changer ce message.</p>
    <button onclick="changerMessage()">Cliquez-moi</button>

    <script>
        function changerMessage() {
            document.getElementById("message").textContent = "Le message a été changé grâce à JavaScript !";
        }
    </script>
</body>
</html>
