# POC de automação E2E mobile com CodeceptJS.

## Setup do ambiente

Para o setup do ambiente você precisará das seguintes ferramentas

```markdown
NodeJS
Android Studio + AVD
JDK
Appium Server GUI 
Opcional: Appium Inspector
```

Devemos criar as variáveis de ambiente JAVA_HOME e ANDROID_HOME, com o caminho para o Java e Android studio, como nos exemplos a seguir:
```sh
"C:\Program Files\Java\jdk-version"
"C:\Users\user\AppData\Local\Android\Sdk"
```
E adicionar as mesmas na variável Path.

Com o emulador(AVD) executado e o Appium Server no ar, podemos executar os testes. Rever configuração(`codecept.conf.js`) em caso de erros na conexão.

Para configurar outro tipo de device, alterar código de [codecept.conf.js](https://codecept.io/mobile/#configuring), como no exemplo a seguir:

```sh
Appium: {
      app: directoryName + '\\app\\calc.apk',
      platform: 'Android',
      device: 'emulator'
    }
```
- [Appium Desired Capabilites](https://appium.io/docs/en/writing-running-appium/caps/)

## Arquitetura 

O arquivo `codecept.conf.js` contém as configurações gerais do `CodeceptJS`, como: 
- Define plugins a serem utilizados;
- Configuração da conexão com o appium;
- Define localização da aplicação que será testada;
- Exporta arquivos de Page Objects;
- Define caminho para arquivos de output;

O arquivo `step_file.js` funciona como um arquivo de `commons`, onde podem ser criadas funções customizáveis.  </br>
#### Exemplo:
```sh
login: function(email, password) {
      this.fillField('Email', email);
      this.fillField('Password', password);
      this.click('Submit');
    }
```

No diretório `tests` ficam os arquivos `.js/ts` de teste.<br>
Nesses arquivos, fica a escrita dos testes, com chamada de comandos pela perspectiva do usuário(representado como `I`)<br>
[Vide documentação](https://codecept.io/basics/)

## Usando Page Objects

No diretório `pages(ou como preferir chamar)` ficam os arquivos com o `Page Objects`, onde ficam armazenados os seletores, e a [classe/função/array](https://codecept.io/pageobjects/#pageobject) da página, com as respectivas funções necessárias para os testes.

## Execução
Para executar todos os testes, usamos o comando:
```sh
npx codeceptjs run
```
Adicionamos a tag `--plugins allure` para geração do report.<br>

```sh
npx codeceptjs run --plugins allure
```

Para executar os testes por tag, precisamos adicionar a tag `--grep "@tag"` ao comando

```sh
npx codeceptjs run --plugins allure --grep "@tag"
```

Executando os testes pelo script `test` no package.json
```sh
npm run test
```
Esse comando utiliza um `before`(1), ele limpa o diretório de `allure-results`. Depois disso, efetua o comando para execução de todos os testes(2). Por fim, realiza a implementação do histórico para o report e abre o mesmo(3).
```sh
- 1 "DEL /S allure-results\\*.png & DEL /S allure-results\\*.xml"
- 2 "npx codeceptjs run --plugins allure"
- 3 "mkdirp allure-results/history & cp allure-report/history/* allure-results/history & allure generate allure-results --clean & allure open allure-report"
```
<br>

## Relatórios(`Allure`)
Allure Reporter é uma ferramenta para armazenamento e visualização de relatórios de teste. Nos relatórios temos acesso às informações importantes como: `steps`, `sub-steps`, `screenshots`, `duração da execução`.<br>

Os relatórios são gerados no diretório `allure-results/` ao executarmos os testes com o plugin `allure`, como no exemplo a seguir:

```sh
npx codeceptjs run --plugins allure
```
Para visualizarmos o report, basta executar o comando a seguir:

```sh
allure open
```


