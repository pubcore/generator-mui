var Generator = require('yeoman-generator'),
	updateNotifier = require('update-notifier'),
	pkg = require('../package.json'),
	{basename, resolve} = require('path')

updateNotifier({pkg}).notify()

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts)
	}
	initializing(){
		this.scope = basename(resolve(process.cwd(), '..'))
	}
	async prompting() {
		this.answers = await this.prompt([{
			type:'input', name:'name',
			message : 'Your project name',
			default : () => `@${this.scope}/${this.appname.replace(/\s+/g, '-')}`
		},{
			type:'input', name:'description',
			message: 'Package description',
		},{
			type:'input', name:'license',
			default: 'MIT',
			message: 'License',
		},{
			type:'input', name:'author',
			default: () => this.scope,
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
		this.npmInstall([
			'@babel/cli', '@babel/core', '@babel/preset-env', '@babel/preset-react',
			'@babel/runtime', 'babel-loader', 'babel-plugin-import',
			'clean-webpack-plugin', 'eslint', 'eslint-plugin-react', 'file-loader',
			'url-loader', 'webpack', 'webpack-cli', 'webpack-manifest-plugin',
			'webpack-node-externals', '@pubcore/node-composition', 'express'
		], {'save-dev': true })
		this.npmInstall([
			'@babel/polyfill', '@hapi/joi', '@material-ui/core', '@material-ui/icons',
			'@material-ui/lab', '@pubcore/http-client', '@pubcore/redux-browser-history',
			'@pubcore/ui-text', 'clone', 'final-form', 'lodash.get', 'qs', 'react',
			'react-dom', 'react-final-form', 'react-markdown', 'react-redux', 'redux',
			'redux-create-reducer', 'redux-thunk', 'reselect', 'typeface-roboto',
			'window-or-global', 'cookie'
		], {'save': true })
	}
}
