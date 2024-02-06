module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRunner: 'jest-circus/runner',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'jsx', 'node', 'mjs'],
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      statements: 100,
      functions: 100,
      lines: 100,
    },
  },
  globals: {
    'ts-jest': {
      isolatedModules: !!process.env.SKIP_TYPE_CHECK || false,
    },
  },
  coveragePathIgnorePatterns: ['aws.ts', '<rootDir>/test/', '/node_modules/', '/*.generated.ts'],
  testMatch: ['<rootDir>/tree-node/test/unit/**/*.test.{ts,tsx}'],
};
