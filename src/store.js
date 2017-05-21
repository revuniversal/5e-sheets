import stats from './character/data/stats-example';

let _state = {
  character: { stats },
  characters: []
};
let _subscribers = [];

function reduce(state = _state, action) {
  if (action == null) return state;

  switch (action.type) {
    case 'ADD_CHARACTER':
      return {
        ...state,
        characters: [...state.characters, action.character]
      };
    default:
      return state;
  }
}

function dispatch(action) {
  let originalState = _state;

  _state = reduce(_state, action);

  if (_state !== originalState) {
    _subscribers.forEach(fn => fn());
  }
}

function getState() {
  return _state;
}

function unsubscribe(fn) {
  return () => {
    const index = _subscribers.indexOf(fn);
    _subscribers.splice(index, 1);
  };
}

function subscribe(fn) {
  _subscribers.push(fn);
  return unsubscribe(fn);
}

export default {
  getState,
  dispatch,
  subscribe
};
