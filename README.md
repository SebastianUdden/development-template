# development-template
JavaScript Development Environment Template

## GIT
1. Stage all the files you changed
git add .
2. Commit your changes locally
git commit -m "added new feature"
3. Push your work to Github
git push

## Editor Config
- Easy to set up a preferred work process for the development team

## Security
Run Node Security Platform to secure package management
nsp check (Expected result is: "No known vulnerabilities found")

## Development Web Server
Express and BrowserSync will be enough to cover everything we need.

## Remote Web Server
We can use Now and LocalTunnel to serve our build online

## Build automation
NPM Scripts covers everything needed for build automation, we can setup a combination of security check, server startup, deployment of the server to the web, linting and testing with NPM Scripts.

## Linting
ESLint, automated linting on each deployment

## Testing
