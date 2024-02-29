# Rannañ.io Back version 2
This project is a new version of the back-end server of the open-source application Rannañ.io (originally made by Angélique Copéré, Thomas Pilath and Cayetano Rubio Hernanz).

# Description
Open-source application for data sahring between users.

# Modifications made:
1. Modification of database entities (names, attributes):
    Validation => Request
    Validation.user => Request.activeUser
    Validation.contact => Request.targetUser
    Contact.user1 => Contact.user
    Contact.user2 => Contact.otherUser
    Added description attribute to Group

# Steps to run this project:
1. Run `npm i` command
2. Setup database settings and other variables inside a .env file:
    # Port d'éxecution serveur
    PORT 
    # Database
    HOST_DB
    PORT_DB
    NAME_DB
    USER_DB 
    PASSWORD_DB
3. Run `npm start` command for starting server. For dev mode use `npm run dev`
