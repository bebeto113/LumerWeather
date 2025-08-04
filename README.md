☀️ LumerWeather - Previsão do Tempo

📜 Descrição do Projeto

LumerWeather é uma aplicação web moderna e clean para consulta de previsão do tempo. Desenvolvida com React e Vite, ela permite que os usuários pesquisem informações meteorológicas de qualquer cidade do mundo. A aplicação consome a API da OpenWeatherMap para obter dados em tempo real, incluindo a temperatura atual, sensação térmica, umidade, e também a previsão para os próximos 5 dias.

Este projeto foi criado para demonstrar o uso de componentes funcionais em React, gerenciamento de estado com useState, manipulação de referências do DOM com useRef, e a realização de chamadas assíncronas a uma API externa utilizando a biblioteca axios.

✨ Funcionalidades

Busca por Cidade: Pesquise o tempo em qualquer cidade do mundo.

Clima Atual Detalhado:

Exibe o nome da cidade.

Mostra a temperatura atual em graus Celsius.

Ícone dinâmico que representa a condição climática atual (ensolarado, nublado, chuvoso, etc.).

Descrição textual da condição do tempo (ex: "céu limpo", "chuva moderada").

Informações adicionais como sensação térmica, umidade e pressão atmosférica.

Previsão para 5 Dias:

Exibe um resumo da previsão para os próximos 5 dias.

Para cada dia, mostra o dia da semana, um ícone do tempo, a descrição e as temperaturas mínima e máxima.

A lógica agrupa as previsões de 3 em 3 horas fornecidas pela API para mostrar uma previsão diária consolidada.

Interface Limpa: Design simples com um gradiente de fundo agradável e cartões de informação de fácil leitura.

🚀 Tecnologias Utilizadas

Front-End:

React (v19): Biblioteca para construção de interfaces de usuário.

Vite: Ferramenta de build moderna e rápida para desenvolvimento front-end.

Requisições HTTP:

Axios: Cliente HTTP baseado em Promises para realizar chamadas à API.

API Externa:

OpenWeatherMap API: Fornece os dados de clima e previsão do tempo.

Estilização:

CSS puro: Estilização direta através de arquivos .css, com uso de Flexbox para layouts responsivos.

Linting:

ESLint: Para garantir a qualidade e a padronização do código JavaScript.

⚙️ Configuração e Instalação

Para executar este projeto localmente, siga os passos abaixo.

Pré-requisitos

Node.js (versão 18 ou superior) instalado.

Um editor de código, como o VS Code.

Uma chave de API (API Key) da OpenWeatherMap. O plano gratuito é suficiente.

Passos

Clone o repositório:

Generated bash
git clone https://github.com/seu-usuario/lumer-weather.git
cd lumer-weather


Instale as dependências:
Utilize o npm ou yarn para instalar os pacotes necessários definidos no package.json.

Generated bash
npm install
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

Configure a Chave da API:
Para que a aplicação funcione, você precisa inserir sua chave da OpenWeatherMap no código.

Abra o arquivo src/App.jsx.

Localize a função searchCity().

Encontre a variável key e substitua o valor "SEU_TOKEN_AQUI" pela sua chave de API.

Generated javascript
// Dentro de src/App.jsx

async function searchCity() {
    const city = inputRef.current.value;
    const key = "SUA_CHAVE_API_AQUI"; // <-- SUBSTITUA AQUI

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    // ...
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
JavaScript
IGNORE_WHEN_COPYING_END

Execute o projeto:
Após instalar as dependências e configurar a chave, inicie o servidor de desenvolvimento.

Generated bash
npm run dev
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END
