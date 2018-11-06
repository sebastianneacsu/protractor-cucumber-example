exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
  'features/*.feature'
  ],
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty',
    format: 'json:.tmp/results.json'
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      metadataKey: 'deviceProperties',
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true
    }
  }]
}
