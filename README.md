# TicTacToe
[![Maintainability](https://api.codeclimate.com/v1/badges/069a427ccb634c430a70/maintainability)](https://codeclimate.com/github/Nicklas766/tic-tac-toe-client/maintainability)

1. NPM
2. Note to corrector

## 1. NPM
```
npm install
```

#### Start the app:
```
npm start
```

#### Testing
Integration tests:
```
npm test
```

Static testing:
```
npm run lint
```

## 2. Note to corrector

### User stories
I created user stories below to try to make it more clear what features I implemented.

| Feature | As a user, I want to be able to           | So that I can                                    | Completed |
|:-------:|:----------------------------------------- |:------------------------------------------------ |:---------:|
|    1    | Play TicTacToe in one browser             | share a screen with my friend                    |    ✅     |
|    2    | Click on a square that's not been clicked | make a move                                      |    ✅     |
|    3    | See the game status                       | see who won, or if draw, or who's up next        |    ✅     |
|    4    | Use the history of the Game               | review moves, re-play moves, or restart the game |    ✅     |


### The engine
The engine was developed with TDD and with an intent that it should be able to be used in another project, as the spec said.

The engine leighs in its own GitHub repo and is published on NPM. In this project I installed it with:

```
npm i --save tic-tac-toe-stateless-engine
```

Links:
* https://www.npmjs.com/package/tic-tac-toe-stateless-engine
* https://github.com/Nicklas766/tic-tac-toe-stateless-engine


### Testing
I followed the assignment's specification and created the frontend according to "experimental driven development" with Snapshot.
However, during refactoring I installed [enzyme](https://github.com/airbnb/enzyme/) and added integration tests in `src/components/Game.test.jsx`.

They are not installed as devDependencies due to the following eslint errors:

```
'prop-types' should be listed in the project's dependencies, not devDependencies  import/no-extraneous-dependencies
'enzyme' should be listed in the project's dependencies, not devDependencies import/no-extraneous-dependencies
```
