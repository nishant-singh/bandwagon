import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow, mount} from 'enzyme';

import SearchBox from './search_box';

const initialState = {},
        mockStore = configureStore();
let store;
describe('Search Box', () => {
    beforeEach(()=>{
        store = mockStore(initialState);
    })
    it('should render correctly in "debug" mode', () => {
        const component = shallow( < SearchBox  store={store}/ > );
        expect(component).toMatchSnapshot();
    });

    test('Check search input exists',() => {
        const component = mount( < SearchBox  store={store}/ > );
        expect(component.find('input').length).toBe(1);
    });
});
