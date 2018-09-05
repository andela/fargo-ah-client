
import reducer from '../../redux/reducers/reset';
import * as mocks from '../__mocks__/reducers/resetMockData';

describe('reset password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(mocks.initialState);
  });
  it('should handle RESET_SUCCESS', () => {
    expect(reducer({}, mocks.actualResetSuccess)).toEqual(mocks.expectedResetSuccess);
  });
  it('should handle RESET_FAILURE', () => {
    expect(reducer({}, mocks.actualResetFailure)).toEqual(mocks.expectedResetFailure);
  });
  it('should handle UPDATE_SUCCESS', () => {
    expect(reducer({}, mocks.actualUpdateSuccess)).toEqual(mocks.expectedUpdateSuccess);
  });
  it('should handle UPDATE_FAILURE', () => {
    expect(reducer({}, mocks.actualUpdateFailure)).toEqual(mocks.expectedUpdateFailure);
  });
});
