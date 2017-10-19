module.exports = {
  preset: 'jest-preset-typescript',
  rootDir: '..',
  setupTestFrameworkScriptFile: '<rootDir>/integration-tests/jest.setup.ts',
  testRegex: 'integration-tests.*(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)?$',
};
