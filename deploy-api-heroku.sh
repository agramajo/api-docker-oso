#!/bin/sh

cp .gitignore app/api
cd app/api
git init
git add .
git commit -m "init"
git push --set-upstream git@heroku.com:api-oso.git master -f
rm -fr .git .gitignore

