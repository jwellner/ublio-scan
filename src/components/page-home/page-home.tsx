import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { BookService } from '../../services/book-service';

@Component({
	tag: 'page-home',
	styleUrl: 'page-home.scss'
})
export class PageHome {

	@Prop() history: RouterHistory;

	@State() books: any[];

	componentWillLoad() {
		console.log('page-home loaded');
		this.books = BookService.getAll();

		console.log(this.books);
	}

	scan() {
		//console.log('add');
		this.history.push('/scan', {});
	}

	render() {
		const bookList = this.books.map((book) => {
			return (
				<ion-item>
					<ion-avatar item-left>
							<img src={book.image} />
					</ion-avatar>
					<h2>{ book.title }</h2>
					<p>{ book.author }</p>
				</ion-item>
			)
		});

		return (
			<ion-page class='show-page'>
				<ion-content>
					<ion-list>
						{bookList}
					</ion-list>
				</ion-content>
				<ion-footer>
					<ion-buttons slot='end'>
						<ion-button onClick={() => this.scan() } clear color='primary'>
							Add
						</ion-button>
					</ion-buttons>
				</ion-footer>
			</ion-page>
		)
	}
}
