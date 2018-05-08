import * as types from '../../../src/js/constants';
import whReducer from '../../../src/js/reducers/whReducer';

describe('test the whatshappen reducer', () => {
	it('should be initialize', () => {
		let initial = {
			data: [],
			selectedView: [],
			respView: [],
			firstIndexofSelectedView: 0,
			indexofRespView: 0
		};
		let nextState = whReducer(undefined, initial);
		expect(nextState).toEqual(initial);
	});

	it('test the case INITIAL_VIEW', () => {
		let initial = {
			data: [],
			selectedView: [],
			respView: [],
			firstIndexofSelectedView: 0,
			indexofRespView: 0
		};
		let action = {
			type: types.INITIAL_VIEW,
			payload: [
				{ id: 'a' },
				{ id: 'b' },
				{ id: 'c' },
				{ id: 'd' },
				{ id: 'e' },
				{ id: 'f' }
			]
		};
		let expectedState = {
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
		};
		let nextState = whReducer(initial, action);
		expect(nextState).toEqual(expectedState);
	});

	it('test the case NEXT_VIEW', () => {
		let action = {
			type: types.NEXT_VIEW
		};
		let initial = {
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
		};
		let expectedState = {
			data: [
				{ id: 'a' },
				{ id: 'b' },
				{ id: 'c' },
				{ id: 'd' },
				{ id: 'e' },
				{ id: 'f' }
			],
			selectedView: [{ id: 'b' }, { id: 'c' }],
			respView: [{ id: 'a' }],
			firstIndexofSelectedView: 1,
			indexofRespView: 0
		};
		let nextState = whReducer(initial, action);
		expect(nextState).toEqual(expectedState);
	});

	it('test the case PREVIOUS_VIEW', () => {
		let action = {
			type: types.PREVIOUS_VIEW
		};
		let initial = {
			data: [
				{ id: 'a' },
				{ id: 'b' },
				{ id: 'c' },
				{ id: 'd' },
				{ id: 'e' },
				{ id: 'f' }
			],
			selectedView: [{ id: 'b' }, { id: 'c' }],
			respView: [{ id: 'a' }],
			firstIndexofSelectedView: 1,
			indexofRespView: 0
		};
		let expectedState = {
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
		};
		let nextState = whReducer(initial, action);
		expect(nextState).toEqual(expectedState);
	});

	it('test the case NEXT_RESP_VIEW', () => {
		let initial = {
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
		};
		let action = {
			type: types.NEXT_RESP_VIEW
		};
		let expectedState = {
			data: [
				{ id: 'a' },
				{ id: 'b' },
				{ id: 'c' },
				{ id: 'd' },
				{ id: 'e' },
				{ id: 'f' }
			],
			selectedView: [{ id: 'a' }, { id: 'b' }],
			respView: [{ id: 'b' }],
			firstIndexofSelectedView: 0,
			indexofRespView: 1
		};
		let nextState = whReducer(initial, action);
		expect(nextState).toEqual(expectedState);
	});

	it('test the case PREVIOUS_RESP_VIEW', () => {
		let initial = {
			data: [
				{ id: 'a' },
				{ id: 'b' },
				{ id: 'c' },
				{ id: 'd' },
				{ id: 'e' },
				{ id: 'f' }
			],
			selectedView: [{ id: 'a' }, { id: 'b' }],
			respView: [{ id: 'b' }],
			firstIndexofSelectedView: 0,
			indexofRespView: 1
		};
		let action = {
			type: types.PREVIOUS_RESP_VIEW
		};
		let expectedState = {
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
		};
		let nextState = whReducer(initial, action);
		expect(nextState).toEqual(expectedState);
	});
});
