// jest.config.js      – проект остаётся ESM («type":"module»)
export default /** @type {import('jest').Config} */ ({
  transform: {                 // ⬅️  единственный трансформер
    '^.+\\.ts$': ['@swc/jest'] //   @swc/jest компилирует TS→ESM-JS
  },

  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],

  // относительные импорты без .js в исходниках
  moduleNameMapper: { '^(\\.{1,2}/.*)\\.js$': '$1' },

  // чтобы Jest не цеплял собранный dist/
  testPathIgnorePatterns: ['/dist/', '/node_modules/']
});

