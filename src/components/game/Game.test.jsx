import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from './Game';
import Square from './Square';

configure({ adapter: new Adapter() });

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Game />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('\n Make sure button text (X, O) changes on squares after clicking', () => {
  let wrap; let firstSquare; let
    lastSquare;

  beforeEach(() => {
    wrap = mount(<Game />);
    firstSquare = wrap.find(Square).first();
    lastSquare = wrap.find(Square).last();
  });

  it('renders empty string for first square', () => {
    expect(firstSquare.text()).toEqual('');
  });

  it('renders X for last square after clicking it', () => {
    lastSquare.simulate('click');

    expect(lastSquare.text()).toEqual('X');
  });

  it('renders same texts for first and last square after 0 clicks', () => {
    expect(firstSquare.text()).toEqual(lastSquare.text());
  });

  it('renders different texts for first and last square after 1 click', () => {
    firstSquare.simulate('click');

    expect(firstSquare.text()).not.toEqual(lastSquare.text());
  });
});

describe('\n Make sure status is correct during game and after game', () => {
  const getGameInfoText = (wrap) => wrap.find('.game').find('.game-info').childAt(0).text();
  let wrap; let
    squares;

  beforeEach(() => {
    wrap = mount(<Game />);
    squares = wrap.find(Square);
  });

  it('renders Next player X after 0 clicks', () => {
    expect(getGameInfoText(wrap)).toEqual('Next player: X');
  });

  it('renders Next player: O after 1 click', () => {
    squares.at(0).simulate('click');

    expect(getGameInfoText(wrap)).toEqual('Next player: O');
  });

  it('renders X wins! After X winning.', () => {
    squares.forEach((s) => s.simulate('click'));

    expect(getGameInfoText(wrap)).toEqual('X won!');
  });

  it('renders its a draw! After draw.', () => {
    [0, 4, 1, 2, 6, 3, 5, 7, 8].forEach((i) => squares.at(i).simulate('click'));

    expect(getGameInfoText(wrap)).toEqual("It's a draw!");
  });
});

describe('\n Make sure its possible to use history to backtrack', () => {
  const getGameInfoText = (wrap) => wrap.find('.game').find('.game-info').childAt(0).text();
  const getGoToGameStartButton = (wrap) => wrap.find('.game').find('.game-info').find('button').first();

  it('renders Next player X by using history after completing a game', () => {
    const wrap = mount(<Game />);
    const squares = wrap.find(Square);

    squares.forEach((s) => s.simulate('click'));

    expect(getGameInfoText(wrap)).toEqual('X won!');

    getGoToGameStartButton(wrap).simulate('click');

    expect(getGameInfoText(wrap)).toEqual('Next player: X');
  });
});
