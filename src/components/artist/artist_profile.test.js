import React from 'react';
import { shallow, mount } from 'enzyme';

import ArtistProfile from './artist_profile';

const artist = {
    facebook_page_url: "https://www.facebook.com/maroon5",
    id: "510",
    image_url: "https://s3.amazonaws.com/bit-photos/large/8479721.jpeg",
    name: "Maroon 5",
    events: [{
        venue: {
            city: "Toronto",
            country: "Canada",
            name: "Air Canada Centre"
        },
        datetime: '2018-09-07T21:00:00',
        id: '1011359000',
    }, 
    {
        venue: {
            city: "Toronto",
            country: "Canada",
            name: "Air Canada Centre"
        },
        datetime: '2018-09-07T21:00:00',
        id: '1011359001'
    }
    ]
};

describe('ArtistCard', () => {
    const artistCard = mount(<ArtistProfile artist={artist}/>);
    test('should render correctly in "debug" mode', () => {
        const component = shallow( < ArtistProfile / > );

        expect(component).toMatchSnapshot();
    });
    test('render artist card', () => {
        const event = artistCard.find('.profileCard');
        expect(event.length).toBe(1);
    });
    test('renders artist image', () => {
        const profileImage = artistCard.find('.profileImage');
        expect(profileImage.length).toBe(1);
        expect(profileImage.prop('src')).toEqual(artist.image_url);
    });
    test('renders artist name', () => {
        const name = artistCard.find('h2');
        expect(name.length).toBe(1);
        expect(name.text()).toBe(artist.name);
    });
    test('renders artist profile link', () => {
        const fbLink = artistCard.find('p a');
        expect(fbLink.length).toBe(1);
        expect(fbLink.prop('href')).toEqual(artist.facebook_page_url);
    });
    test('renders artist events', () => {
        const eventList = artistCard.find('.eventList');
        expect(eventList.length).toBe(1);
    });
    test('renders artist event cards', () => {
        const events = artistCard.find('.eventList li');
        expect(events.length).toBe(2);
    });
});
