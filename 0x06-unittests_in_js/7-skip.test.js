// Import the 'expect' assertion style from the 'chai' library.
// 'expect' is used for making assertions in a human-readable manner.
const { expect } = require('chai');

/*
  This 'describe' block is used to group related test cases.
  We're testing if certain numbers are equal to themselves in this case.
*/
describe('Testing numbers', () => {
  /*
    Test case: Check if 1 is equal to 1.
    The expect function makes an assertion that the result of 1 === 1 is true.
  */
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  /*
    Test case: Check if 2 is equal to 2.
    The expect function asserts that the result of 2 === 2 is true.
  */
  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  /*
    Test case: Check if 1 is equal to 3 (which is false).
    This test is skipped using 'it.skip', meaning it won't run.
    It is kept for future reference or testing purposes.
  */
  it.skip('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

  /*
    Test case: Check if 3 is equal to 3.
    The expect function asserts that the result of 3 === 3 is true.
  */
  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  /*
    Test case: Check if 4 is equal to 4.
    The expect function asserts that the result of 4 === 4 is true.
  */
  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  /*
    Test case: Check if 5 is equal to 5.
    The expect function asserts that the result of 5 === 5 is true.
  */
  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  /*
    Test case: Check if 6 is equal to 6.
    The expect function asserts that the result of 6 === 6 is true.
  */
  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  /*
    Test case: Check if 7 is equal to 7.
    The expect function asserts that the result of 7 === 7 is true.
  */
  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });
});
