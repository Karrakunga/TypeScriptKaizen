System.config({
packages: {        
  app: {
	format: 'register',
	defaultExtension: 'js'
  }
}
});
System.import('app/js/spec/unit.tests.spec')
	.then(null, console.error.bind(console));