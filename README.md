[![Build Status](https://travis-ci.org/pubcore/generator-mui.svg?branch=master)](https://travis-ci.org/pubcore/generator-mui)

## Commandline tool to create a material-ui based web-app scaffolding

### Prerequisites
* latest version (LTS) of nodejs and npm
* root permissions (for autogeneration of self-signed certificate by devcert)

### Yeoman generator to create a web app scaffolding with
* npm
* eslint
* transpiler via esbuild
* material-ui with styled components
* redux with redux-toolkit
* final-form
* auto-generation of certificates for local development via https
* express based server (production ready)
* Dockerfile to build image via ```npm run build-image```

### local installation (development)
1) within your scope directoy craete a new one (convention: lower case and dash-separated)
```
mkdir new-project
```
2) and change into it
```
cd new-project
```
3) execute
```
npx -p yo -p @pubcore/generator-mui yo @pubcore/mui
```