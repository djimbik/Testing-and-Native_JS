module.exports = {
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    roots: ['<rootDir>/src'],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
        "<rootDir>/src/__test__/**/*.+(ts|tsx|js)",
        "src/__tests__/**/*.test.ts" // добавленная настройка
    ],

    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
