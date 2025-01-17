
# Project Test

Este repositório contém testes end-to-end (E2E) desenvolvidos com [Cypress](https://www.cypress.io/) para validar as funcionalidades de cadastro e login.
## Tecnologias Utilizadas  

- **[Cypress](https://www.cypress.io/):** Framework para testes E2E.  
- **[cypress-xpath](https://www.npmjs.com/package/cypress-xpath):** Suporte a seletores XPath.  

## Estrutura do Projeto  

```plaintext
cypress/
  └── e2e/
      └── practicalTest.cy.js       # Contém os testes E2E
  └── support/
      ├── commands.js               # Comandos customizados
      ├── e2e.js                    # Configurações e importações para os testes
      ├── helpers.js                # Funções auxiliares
      ├── loginActions.js           # Funções para ações de login
      └── registerActions.js        # Funções para ações de cadastro
cypress.config.js                    # Configurações gerais do Cypress
package.json                         # Dependências e scripts do projeto
README.md                            # Documentação do projeto
```

## Pré-requisitos  

Antes de começar, certifique-se de que os seguintes softwares estão instalados:  

- **Node.js** (versão 12 ou superior)  
- **npm** (gerenciador de pacotes do Node.js)  

## Instalação  

1. Clone este repositório:  

   ```bash
   git clone https://github.com/seu-usuario/project-test.git
   cd project-test
   ```

2. Instale as dependências:  

   ```bash
   npm install
   ```

    ```bash
   npx cypress install
   ```

## Executando os Testes  

Para executar os testes E2E, utilize o comando abaixo:  

```bash
npx cypress open
```
- Isso abrirá a interface do Cypress, onde você poderá selecionar e executar os testes.  

```bash
npx cypress run
```
- Isso irá executar os testes em modo headless e evidênciar as specs.  


## Descrição dos Testes  

### Testes de Validação de Cadastro e Login  

- **Cadastro com CPF inválido:**  
  Preenche o formulário de cadastro com um CPF inválido e verifica se a mensagem de erro apropriada é exibida.  

- **Login com CPF inválido:**  
  Tenta realizar login com um CPF inválido e valida se a mensagem de erro é exibida.  

## Comandos Customizados  

- **`pickElement`**: Permite selecionar elementos utilizando CSS ou XPath de forma simplificada.  

---

## Observação

- Os testes foram executados localmente e têm como objetivo simular um cadastro com dados fictícios, validando as mensagens de erro ou validação exibidas para cada campo.