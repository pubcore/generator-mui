var app
export default () => app || (app = JSON.parse(document.getElementById('_app').text))