import { call, put } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import whReducer from '../../../src/js/reducers/whReducer.js';
import initialBlogViewSaga from '../../../src/js/sagas/initialBlogViewSaga';
import * as actions from '../../../src/js/actions';
import * as api from '../../../src/js/api';

describe('test the initialBlogViewSaga', () => {
	it('test the initialBlogViewSaga saga', () => {
		return expectSaga(initialBlogViewSaga, actions.initialBlogViewToSaga())
			.provide([
				[
					call(api.blogDataApi),
					[
						{ id: 'a' },
						{ id: 'b' },
						{ id: 'c' },
						{ id: 'd' },
						{ id: 'e' },
						{ id: 'f' }
					]
				]
			])
			.put(
				actions.initialView([
					{ id: 'a' },
					{ id: 'b' },
					{ id: 'c' },
					{ id: 'd' },
					{ id: 'e' },
					{ id: 'f' }
				])
			)
			.run();
	});

	it('test the initialBlogViewSaga integration test with reducer', () => {
		return expectSaga(initialBlogViewSaga, actions.initialBlogViewToSaga())
			.provide([
				[
					call(api.blogDataApi),
					[
						{ id: 'a' },
						{ id: 'b' },
						{ id: 'c' },
						{ id: 'd' },
						{ id: 'e' },
						{ id: 'f' }
					]
				]
			])
			.withReducer(whReducer)
			.hasFinalState({
				data: [
					{ id: 'a' },
					{ id: 'b' },
					{ id: 'c' },
					{ id: 'd' },
					{ id: 'e' },
					{ id: 'f' }
				],
				selectedView: [{ id: 'a' }, { id: 'b' }],
				respView: [{ id: 'a' }],
				firstIndexofSelectedView: 0,
				indexofRespView: 0
			})
			.run();
	});
});
