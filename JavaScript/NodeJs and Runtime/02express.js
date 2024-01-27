/*

MIDDLEWARE: this will run first before all, and this will run for each route 


Steps to create Express Server :
    mkdir my-express-app
    cd my-express-app
    npm init -y
    npm install express

now create app.js or index.js and start write the code 
node app.js or node index.js  : to run the server 
now go to the browser and run http://localhost:3000 

npm install nodemon --save-dev : install this for rerunning the servers each time u make the changes

npm run dev : to rerun and start the server 

Optional Steps:

Use Nodemon for automatic server restarts during development. Install it with npm install nodemon --save-dev and modify 
the start script in package.json to "start": "nodemon app.js". Organize your application using MVC (Model-View-Controller) architecture
 or similar patterns for better maintainability.

route parameters : To make any route dynamic you can use : at the place where you want to make it dynamic,
to access their values use the req.params

/author/books/issued/harsh
/author/books/issued/harshitha
/author/books/issued/harshith 

now make the app for the unchanged part /author/books/issued/ and add the end with userername as below /author/books/issued/:username


TEMPLATE ENGINE :

    EJS(Embedded JavaScript templating) is html with some superpowers(we can use the javaScript within this EJS)
    to setup the EJS we should follow the below steps
    1. ejs install
    macbook:  npm i ejs

    2. configure ejs
    app.set("view engine", "ejs");

    3. make one views folder 
    4. make ejs files within the views folder 
    5. replace the send with the render  : while redering make sure to mention the file which is present in the views folder only


STATIC FILES : Images, Stylesheets, 
Below are the files to setup the static files 

    1. Create the folder called public 
    2. Create three folders inside it, images, stylesheets, javascripts
    3. configure the express static 
    4. understood the  path 


HTTP methods : get, post

Error Handling : 
    


*/