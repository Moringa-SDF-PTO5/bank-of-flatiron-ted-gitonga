# bank-of-flatiron-ted-gitonga

## Introduction
Welcome to the bank-of-flatiron-ted-gitonga repository, a simple banking app built using React.

### Getting Started
To get started, you will first need to clone the repository to your local machine:

Open a terminal and navigate to the directory where you would like to save the cloned repository.
Run the following git command to clone the repository:

git clone https://github.com/Moringa-SDF-PTO5/bank-of-flatiron-ted-gitonga.git

Once the repository has been cloned, navigate to the bank-of-flatiron-ted-gitonga directory:
cd bank-of-flatiron-ted-gitonga

Install the project's dependencies using npm:

npm install

Start the development server:

npm start

Depending on your settings, you may need to allow your browser to connect to the locally running server.

## Deployment
To deploy the app, you can use a variety of methods. Here are the recommended steps for deploying to a static web server using surge.sh:

Before you can deploy your app, you'll need to configure it for Netlify.

Create a netlify.toml file in the root directory of your app.
Add the following configuration:

[build]
  command = "npm run build"
  publish = "dist"
This configuration tells Netlify to run the build command and publish the contents of the dist folder.
Deployment
Finally, deploy your app to Netlify.

Log in to your Netlify account.
Click the New site from Git button.
Select your repository from the list.
Set the following options:
Branch: Select the branch you want to deploy.
Build command: npm run build
Publish directory: dist
Click the Deploy site button.
And that's it! Your React app is now deployed on Netlify.

## Conclusion
That's it! You now have a deployed an app built using React.

Remember to make regular commits to your GitHub repository as you work on the app, and don't hesitate to reach out with any questions or suggestions.

Happy coding!

### Troubleshooting
If you are experiencing issues with the development server, try the following steps:

Make sure you have the correct version of Node.js and npm installed.
Check the terminal for any error messages.
Try restarting the development server by running npm start again.
If you are still experiencing issues, consult the technical mentors for further explanation.