const TestContract = artifacts.require('TestContract');

contract('TestContract', (accounts) => {

  let tmp;

  before(async () => {
    tmp = await TestContract.new(1000, {gas: 160000000});
  });

  it('This is the first test', async () => {
    await TestContract.new(5000, {gas: 50000000});
  });

  for(let i = 0; i < 15; i++) {
    it('Running smaller tests ... ' + i, async () => {
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
      await tmp.expensiveFunction(0, { gas: 60000000 });
    });
  }

  it('This test is exactly the same as the first test. It fails with truffle ^5.1.50 but passes on v5.1.49', async () => {
    await TestContract.new(5000, {gas: 50000000});
  });
});
