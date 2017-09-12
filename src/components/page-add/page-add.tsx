import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { BookService } from '../../services/book-service';

@Component({
	tag: 'page-add',
	styleUrl: 'page-add.scss'
})
export class PageAdd {

	@Prop() match: any;

	@Prop() history: RouterHistory;

	@State() isbn: string;

	@State() book;

	componentWillLoad() {

		this.isbn = this.match.params.isbn;

		fetch(`${BookService.API_SEARCH}?isbn=${this.isbn}`).then((response: any) => {
			return response.json();
		}).then((data) => {
			console.log(data);

			this.book = {
				isbn: data.bookinfo.isbn,
				title: data.bookinfo.title,
				author: data.bookinfo.author,
				image: data.bookinfo.image
			}
		});
	}

	save() {
		// generate unique ID
		this.book.id = BookService.uid();

		BookService.add(this.book);

		this.history.push('/', {});
	}

	render() {
		if (this.book) {
			return(
				<ion-page class='show-page'>
					<ion-content>
						<ion-card>
							<ion-item>
								<ion-avatar item-left>
										<img src={this.book.image} />
								</ion-avatar>

								<h2>{ this.book.title }</h2>
								<p>{ this.book.author }</p>
							</ion-item>
						</ion-card>
					</ion-content>
					<ion-footer>
						<ion-buttons slot='end'>
							<ion-button onClick={() => this.save() } clear color='primary'>
								Save
							</ion-button>
						</ion-buttons>
					</ion-footer>
				</ion-page>
			)
		}
	}
}
