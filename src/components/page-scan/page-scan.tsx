import { Component, Prop, Listen } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { LoadingController, AlertController } from '@ionic/core';
import { BookService } from '../../services/book-service';

@Component({
	tag: 'page-scan',
	styleUrl: 'page-scan.scss'
})
export class PageScan {

	@Prop() history: RouterHistory;

	@Prop({ connect: 'ion-loading-controller' }) loadingCtrl: LoadingController;
	@Prop({ connect: 'ion-alert-controller' }) alertCtrl: AlertController;

	componentWillLoad() {
		console.log('page-scan loaded');
	}

	@Listen('scanCompleted')
	scanCompletedHandler(event: CustomEvent) {

		fetch(`${BookService.API_SEARCH}?isbn=${event.detail.value}`).then((response: any) => {
			return response.json();
		}).then((data) => {

			const book = {
				isbn: data.bookinfo.isbn,
				title: data.bookinfo.title,
				author: data.bookinfo.author,
				image: data.bookinfo.image
			};

			this.alertCtrl.create({
				title: book.title,
				message: 'Add this book?',
				buttons: [
					{
						text: 'No',
						role: 'cancel',
						handler: () => {
							console.log('cancel clicked');
						}
					},
					{
						text: 'Yes',
						handler: () => {
							console.log('yes clicked');
							BookService.add(book);
							this.history.replace('/', {});
						}
					},
				]
			}).then((alert) => {
				alert.present();
			});
		});
	}

	render() {
		return (
			<ion-page class='show-page'>
				<ion-content>
						<ean-scanner></ean-scanner>
				</ion-content>
			</ion-page>
		)
	}
}
