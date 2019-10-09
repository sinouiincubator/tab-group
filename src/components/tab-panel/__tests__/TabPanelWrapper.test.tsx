import React from 'react';
import renderer from 'react-test-renderer';
import TabPanelWrapper from '../TabPanelWrapper';

it('渲染 TabPanelWrapper', () => {
  const tree = renderer.create(<TabPanelWrapper />).toJSON();

  expect(tree).toMatchSnapshot();
});
