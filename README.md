[![Build Status](https://travis-ci.org/pubcore/generator-mui.svg?branch=master)](https://travis-ci.org/pubcore/generator-mui)

## Commandline tool to create a material-ui based component scaffold

### Prerequisites
* latest version of nodejs
* latest version of npm

### Yeoman generator to create a package, with
* npm
* eslint
* transpiler via babel
* material-ui
* redux with redux-toolkit
* final-form

### Install it global
```
npm install -g yo @pubcore/generator-mui
```
### How to use
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
yo @pubcore/mui
```
4) run build (or watch)
```
npm run build
```

### Review/Start in local Browser
If installed as described above, start
```
npm run start
```
In Browser navigate to
```
http://localhost:3030/test
```
