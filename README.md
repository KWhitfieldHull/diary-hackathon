# The Diary app enables you to securely store your thoughts in a private space, 
keeping all your notes neatly organized and easily accessible for your exclusive use.
## Installation & Usage
#### Terminal commands 
- Go to the directory you want to clone in.
- Run `git clone <SSH key or HTTPS key>`.
- Then, `cd ` to the project.
- To open VS code, `code .`.
#### How to install the libraries
- Change directory into the server by running `cd api`
- Install the dependancies by running `npm install`
- If this did not install the nodemon package, run `npm install -D`
#### How to connect the database
- Create a `.env` file within the server folder
- Login to [elephantsql](https://www.elephantsql.com)
- Create a new instance number one for DIARY, and create another instance for USER
- In the details tab of your new db, copy the db URL
- Within your `.env` file, add `DB_URL_USER={your copied URL}`
- Within your `.env` file, add `DB_URL_DIARY={your copied URL}`
- Make sure the `.env` is in the `.gitignore` file!
- cd into the api folder if you aren't already, and run `npm run setup-db1` to set up DIARY,
 and run `npm run setup-db2` to set up USER
- You should see "Set-up complete." in your terminal
#### How to run the server
- To the `.env` file, add `PORT=3000`
- cd into the api folder if you aren't already, and run `npm run dev`
- You should see "API listening on 3000" in your terminal
**Make sure to leave the server running in the terminal **