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
  //Cobertura de testes
  collectCoverage: true,
  collectCoverageFrom: [
    // __tests__/**/.tsx (Caso deixa-se minha pastas de testes fora do src)
    "src/**/*.tsx",
    // Pedindo para ignorar os arquivos que tem spec (pois o relatorio precisa apenas conhecer os arquivos da aplicação e não de testes)
    "!src/**/*.spec.tsx"
  ],
  //Tipo de relatório que quero gerar
  coverageReporters: [
    "lcov" //Gera arquivo html e ele pode abrir no navegador
  ]
};
