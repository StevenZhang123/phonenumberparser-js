#!/bin/bash

# simple script to deploy your node app to heroku server
# make sure git add and git commit any changes before run this script
# usage:
# ./deploy.sh <APP_NAME>

app=$1
heroku create $app;
git remote set-url heroku https://git.heroku.com/$app.git
git push heroku master;
heroku ps:scale web=1;
heroku open;
