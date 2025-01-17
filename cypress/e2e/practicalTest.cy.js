import { navigateToLandingPage, confirmPrivacyPopup } from '../support/helpers';
import { populateCadastroForm, sendCadastroForm, checkInvalidCPF } from '../support/registerActions';
import { attemptLoginWithInvalidCPF, checkLoginError } from '../support/loginActions';

describe('Testes de Validação de Cadastro e Login', () => {
  beforeEach(() => {
    navigateToLandingPage();
    confirmPrivacyPopup();
  });

  it('Deve exibir erro ao tentar cadastrar com CPF inválido', () => {
    // Cenário: Tentativa de cadastro com CPF inválido
    // Descrição: Este teste preenche o formulário de cadastro com um CPF inválido e verifica se a mensagem de erro apropriada é exibida.
    populateCadastroForm('00000000012');
    sendCadastroForm();
    checkInvalidCPF();
  });

  it('Deve exibir erro ao tentar logar com CPF inválido', () => {
    // Cenário: Tentativa de login com CPF inválido
    // Descrição: Este teste tenta fazer login com um CPF inválido e verifica se a mensagem de erro apropriada é exibida.
    attemptLoginWithInvalidCPF('00000000012', 'zzZ1234');
    checkLoginError();
    
  });
});