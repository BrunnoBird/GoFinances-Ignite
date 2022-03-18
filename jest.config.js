module.exports = {
  preset: "jest-expo",
  //Quais locais não quero que ele passe para testar
  testPathIgnorePatterns: [
    "/node_modules/",
    "/android",
    "/ios"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    'jest-styled-components'
  ],
};
