import React from 'react';
import { shallow, mount } from 'enzyme';

import Event from './event';
import dateConverter from "../../utils/convertToDate";

const event = {
    venue:{
        name: "My testing audition",
        city: "Berlin",
        country: "Germany"
    },
    datetime : "2018-10-10 20:11:00"
}
describe('Event', () => {
    const component = mount( < Event data={event}/ > );
    test('should render correctly in "debug" mode', () => {
        const component = shallow( < Event data={event}/ > );
        expect(component).toMatchSnapshot();
    });
    test('render complete event', () => {
        const event = component.find('.event');
        expect(event.length).toBe(1);
    });
    test('renders event venue', () => {
        const venue = component.find('.venue');
        expect(venue.length).toBe(1);
        expect(venue.text()).toBe(event.venue.name);
    });
    test('renders event location', () => {
        const location = component.find('.venue_location');
        expect(location.length).toBe(1);
        expect(location.text()).toBe(`${event.venue.city}, ${event.venue.country}`);
    });
    test('renders event date', () => {
        const date = component.find('.venue_date');
        expect(date.text()).toBe(dateConverter(event.datetime));
    });
});


