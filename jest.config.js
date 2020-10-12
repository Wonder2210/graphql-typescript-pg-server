module.exports = {
  testPathIgnorePatterns: ["/node_modules"],
  testMatch:  ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.(j|t)sx?$": ["ts-jest"],
    "\\.(gql|graphql)$": ["@jagi/jest-transform-graphql"],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "gql"],
};
