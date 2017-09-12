export class BookService {

	static API_SEARCH = 'https://www.bookmatch.nl/api/data/book';

	static getAll() {
		let data = localStorage.getItem('books');
		let list = [];

		if (data) {
			list = JSON.parse(data);
		}

		return list;
	}

	static add(book) {
		let list = this.getAll();
		if (!book.id) {
			book.id = BookService.uid();
		}
		list.push(book);
		this.__save(list);
	}

	static __save(list) {
		return localStorage.setItem('books', JSON.stringify(list));
	}

	static uid() {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = (d + Math.random()*16)%16 | 0;
				d = Math.floor(d/16);
				return (c=='x' ? r : (r&0x7|0x8)).toString(16);
		});
		return uuid;
	}
}
