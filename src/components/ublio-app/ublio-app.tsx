import { Component } from '@stencil/core';

@Component({
	tag: 'ublio-app',
	styleUrl: 'ublio-app.scss'
})
export class UblioApp {

	render() {
		return (
			<ion-app>
				<stencil-router id='router'>
					<stencil-route url='/' component='page-home' exact={true}></stencil-route>
					<stencil-route url='/scan' component='page-scan'></stencil-route>
					<stencil-route url='/add/:isbn' component='page-add'></stencil-route>
				</stencil-router>
			</ion-app>
		)
	}
}
