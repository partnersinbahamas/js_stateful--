'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let stateClone = { ...state };
  const result = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        stateClone = { ...stateClone };
        Object.assign(stateClone, action.extraData);
        break;

      case 'removeProperties':
        stateClone = { ...stateClone };

        for (const key of action.keysToRemove) {
          delete stateClone[key];
        }
        break;

      case 'clear':
        stateClone = { ...stateClone };
        stateClone = {};
        break;
    }
    result.push(stateClone);
  }

  return result;
}

module.exports = transformStateWithClones;
