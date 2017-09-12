exports.config = {
  bundles: [
		{ components: ['ean-scanner'] },
		{ components: ['ublio-app', 'page-home', 'page-add', 'page-scan']}
  ],
  collections: [
		{ name: '@stencil/router'},
		{ name: '@ionic/core' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
