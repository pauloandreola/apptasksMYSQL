# apptasksMYSQL

# Requisitos

# Não funcionais

- Utilizar o webframework Express (Paulo) - OK
- Utilizar o banco de dados MySQL (Paulo) - OK
- Todos os endpoints deverão ser documentados utilizando Swagger (Open API 3.0) - OK
- Bancos de dados deverão estar rodando em um container Docker localmente - *****Não*****
- Não será utilizado ORM, apenas queries SQL puras - OK
- A senha de cada usuário deverá ser salva no banco de dados de forma criptografada - OK
- Utilizar ESLint, Prettier e ts-prune para manter o código dentro dos padrões - OK - ****Verificar****
- O código deve estar seguindo boas práticas como Clean Code, SOLID, etc - OK
- Em toda requisição que houver entrada de dados, deverá haver validação dos dados - OK
- Aplicar testes unitários para as classes e funções de regras de negócio - ****Fazer****
- Aplicar testes de integração para todos os endpoints da aplicação - ****Fazer**** 
- Os testes devem contemplar os requisitos funcionais -  ****Fazer****
- Deverá existir tratamento de erro da aplicação - OK
- Todos os registros no banco de dados deverão ter a coluna created_at e updated_at - OK
- Para uploads, deverá ser feito utilizando form data - OK
- Utilizar middleware para validação de autenticação nas rotas públicas - OK*****

# Funcionais

- Deverá ser possível cadastrar um novo usuário. Será uma rota pública que receberá nome, e-mail e senha. O nome precisará ter pelo menos 3 caracteres. O e-mail deverá ser um e-mail válido. A senha deverá ter no mínimo 6 caracteres - Ok.
- Não deverá existir usuários duplicados: verificar utilizando o e-mail - OK
- Deverá ser possível realizar login. Será uma rota pública que receberá e-mail e senha. - Ok
- Um usuário que não for cadastrado não deverá conseguir logar na aplicação -  OK
- Deverá ser possível um usuário inserir uma nova foto de perfil. Será uma rota privada. - OK
- Deverá ser possível atualizar os dados de um usuário. Será uma rota privada. - OK
- Deverá ser possível realizar a criação de uma task. Será uma rota privada. - OK
- Deverá ser possível realizar a atualização de uma task. Será uma rota privada. Somente o usuário que criou a task poderá atualizá-la - OK
- Deverá ser possível realizar/deletar uma task. Será uma rota privada. Somente o usuário que criou a task poderá deletá-la - OK  
- Deverá ser possível listar as tasks. Será uma rota privada. O usuário somente verá as tasks que ele mesmo criou. Deverá ser possível ordenar e filtrar as tasks com base nos campos "created_at", "updated_at" e "done" - 