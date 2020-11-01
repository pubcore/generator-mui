var Generator = require('yeoman-generator'),
	pkg = require('../package.json'),
	{basename, resolve} = require('path'),
	{readdirSync} = require('fs')

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts)
	}
	initializing(){
		var localName = this.appname.replace(/\s+/g, '-')
		if(readdirSync(this.destinationRoot()).length){
			this.log.error('working directory is not empty, beware hidden files (dot-files)')
			process.exit(1)
		}
		this.initial = {
			scope: basename(resolve(process.cwd(), '..')),
			localName,
			generatorName: localName.replace(/generator-/, '')
		}
	}
	async prompting() {
		var {scope, localName} = this.initial
		this.answers = await this.prompt([{
			type:'input', name:'name', default : () => `@${scope}/${localName}`,
			message : 'Your project name',
		},{
			type:'input', name:'description',
			message: 'Package description',
		},{
			type:'input', name:'license', default: 'MIT',
			message: 'License',
		},{
			type:'input', name:'author', default: () => scope,
			message: 'Author',
		},{
			type:'input', name:'repository',
			message: 'Repository uri',
		}])
	}
	writing(){
		//beware handling of ignore files (should be not in template/static)
		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore')
		)
		this.fs.copy(
			this.templatePath('_npmignore'),
			this.destinationPath('.npmignore')
		)
		this.fs.copy(
			this.templatePath('static/**'),
			this.destinationPath('.'),
			{globOptions:{dot:true}}
		)
		this.fs.copyTpl(
			this.templatePath('package_json'),
			this.destinationPath('package.json'),
			{...this.answers}
		)
	}
	install(){
		this.log('Install packages ...')
		this.spawnCommandSync('npm', ['i', '--save-dev', 'eslint',
			'eslint-plugin-react', 'cross-env', 'dotenv', 'esbuild', 'concurrently',
			'estrella', 'opener', 'path-browserify', 'wait-on', 'devcert'])
		this.spawnCommandSync('npm', ['i', '@material-ui/core',
			'@material-ui/icons', '@material-ui/lab', 'styled-components',
			'@pubcore/http-client', '@pubcore/redux-browser-history',
			'@pubcore/node-composition', '@pubcore/node-server-docker',
			'i18next', 'react-i18next', 'final-form', 'lodash.get', 'qs',
			'react', 'react-dom', 'react-final-form', 'react-markdown', 'react-redux',
			'redux', '@reduxjs/toolkit', 'config', 'recursive-diff'])
		this.spawnCommandSync('npm', ['run', 'build'])
		this.spawnCommandSync('npm', ['run', 'start'])
	}
}
