import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import SearchResults  from './search_results_container';


/**
 * Function to create a Shallow Wrapper for the SearchResults component.
 */
const setup = (initState, toMount) => {
  const mockStore = configureStore(),
        store = mockStore(initState);
  if(toMount)
    return mount(<SearchResults store = {store} artist={initState.searchedArtist} />);
  else
    return shallow(<SearchResults store = {store} artist={initState.searchedArtist} />);
};

/**
 * Return Shallow Wrapper containing node(s) with the given data-test value.
 */

describe('SearchResult', () => {
  let wrapper;
  const artist = {
    facebook_page_url: "https://www.facebook.com/maroon5",
    id: "510",
    image_url: "https://s3.amazonaws.com/bit-photos/large/8479721.jpeg",
    name: "Maroon 5",
    thumb_url: "https://s3.amazonaws.com/bit-photos/thumb/8479721.jpeg",
    events : [
      {
        venue: {
          city: "Toronto",
          country: "Canada",
          latitude: "43.643466",
          longitude: "-79.379142",
          name: "Air Canada Centre"
        },
        datetime: '2018-09-07T21:00:00',
        id: '1011359000',
        artist_id: '139493'
      },
    ]
  };

  beforeEach(() => {
    wrapper = setup({
      searchedArtist: artist
    });
  });
  test('should render correctly in "debug" mode', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('renders artist cards', () => {
    let wrapper = setup({
      searchedArtist: artist
    },  true);
    const artistCard = wrapper.find('.profileCard');
    expect(artistCard.length).toBe(1);
  });

  test('renders artist\'s events', () => {
    let wrapper = setup({
      searchedArtist: artist
    }, true);
    const events = wrapper.find('.eventList');
    expect(events.length).toBe(1);
  });
});