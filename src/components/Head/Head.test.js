import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import Head from './index';

describe('Head', () => {
  it('render correctly component', () => {
    const HeadComponent = ReactTestRenderer.create(
      <Head title="Title" logo="#" url="#" />
    ).toJSON();
    expect(HeadComponent).toMatchSnapshot();
  });
});
