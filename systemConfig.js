System.config({
packages: {        
  build: {
	format: 'register',
	defaultExtension: 'js'
  }
}
});
System.import('build/app/app')
	.then(null, console.error.bind(console));