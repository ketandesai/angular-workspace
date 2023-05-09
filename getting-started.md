#Run a Node container
docker run -it -v $(pwd):/app node bash

#Install angular
cd app
npm install -g @angular/cli

#Create an angular workspace
ng new angular-workspace --create-application false

#Create an angular app
cd angular-workspace
ng generate application design-system

#Create an angular library
ng generate library component-lib
