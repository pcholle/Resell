# Resell

Projet perso de site de vente de chaussure. 

# Install

Télécharger et installer nodejs : https://nodejs.org/en/download/
Relancer vs code
Lancer node -v et npm -v pour verifier l'installation
Puis lancer l'app avec les indications ci dessous

# Dev start

Tout d'abord démarrer le service mysql dans Windows -> Service -> MySQL57
Ensuite 'npm start' dans le dossier back
Le site est accessible a localhost:3000

# Back

Lien vers le postman : 
```
https://api.postman.com/collections/18085316-ea0acf87-fcb7-4096-8f81-d8853bb3d655?access_key=PMAT-01GMD533VK5XK5ZWAH99KMMKEE
```

# Owners

- Pierre CHOLLET
- Olivier GARROS

# Script database
use ressell;
CREATE TABLE Users (
user_id int AUTO_INCREMENT,
user_id int AUTO_INCREMENT,
user_login varchar(50) DEFAULT NULL,
user_password varchar(250) DEFAULT NULL,
user_admin TINYINT(1) NULL DEFAULT 0
PRIMARY KEY (user_id)
);
INSERT INTO Users (user_login, user_password) VALUES('Pierre', '$2b$10$pAgL4zkUrv3BMkV2hIR6F.zzkQRlM8wIM64OijHkXUs6yEQDC8MaG', 1)