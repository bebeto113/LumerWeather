# ☀️ LumerWeather – Previsão do Tempo em Tempo Real

**LumerWeather** é uma aplicação web moderna e minimalista para consultar a previsão do tempo de qualquer cidade do mundo. Desenvolvida com **React** e **Vite**, a aplicação consome a **API da OpenWeatherMap** para fornecer dados meteorológicos atualizados, incluindo clima atual e previsão para os próximos 5 dias.

O projeto é focado em demonstrar boas práticas com **componentes funcionais**, **hooks do React** (`useState` e `useRef`) e chamadas assíncronas com **Axios**.

---

## ✨ Funcionalidades

### 🔎 Busca por Cidade

* Pesquisa por qualquer cidade do mundo.
* Exibição dinâmica das informações meteorológicas ao digitar e pesquisar.

### 🌤️ Clima Atual Detalhado

* Nome da cidade consultada.
* Temperatura atual (°C).
* Sensação térmica.
* Umidade relativa do ar.
* Pressão atmosférica.
* Ícone e descrição textual da condição climática (ensolarado, nublado, etc.).

### 📅 Previsão para os Próximos 5 Dias

* Agrupamento inteligente de dados (a cada 3h → previsão diária consolidada).
* Para cada dia:

  * Dia da semana.
  * Ícone climático.
  * Descrição do clima.
  * Temperaturas mínima e máxima.

### 💡 Interface Clean & Responsiva

* Design com **gradiente de fundo** suave.
* Cartões informativos bem espaçados e legíveis.
* Uso de **Flexbox** para responsividade.

---

## ⚙️ Tecnologias Utilizadas

### 🧩 Front-End

* **React (v19)** – Biblioteca para interfaces de usuário.
* **Vite** – Ferramenta de build rápida e moderna.

### 🌐 Requisições HTTP

* **Axios** – Cliente HTTP baseado em Promises.

### ☁️ API Externa

* **OpenWeatherMap API** – Dados de clima e previsão meteorológica.

### 🎨 Estilização

* **CSS Puro** – Organização via arquivos `.css`, com foco em simplicidade e legibilidade.

### 🔍 Qualidade de Código

* **ESLint** – Linter para padronização e boas práticas em JavaScript.

---

## 🛠️ Como Executar o Projeto Localmente

### 📋 Pré-requisitos

* **Node.js** (versão 18 ou superior)
* **Editor de código**, como VS Code
* **Chave da API da OpenWeatherMap** (plano gratuito já é suficiente)

---

### 🔧 Passos para Configuração

#### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/lumer-weather.git
cd lumer-weather
```

#### 2. Instale as Dependências

```bash
npm install
```

Ou, se preferir:

```bash
yarn install
```

#### 3. Configure a Chave da API

Abra o arquivo `src/App.jsx` e localize a função `searchCity()`.
Substitua `"SUA_CHAVE_API_AQUI"` pela sua chave válida da OpenWeatherMap:

```jsx
// Dentro de src/App.jsx
async function searchCity() {
  const city = inputRef.current.value;
  const key = "SUA_CHAVE_API_AQUI"; // <-- SUBSTITUA AQUI

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
  // ...
}
```

#### 4. Execute o Projeto em Modo de Desenvolvimento

```bash
npm run dev
```

---

## 📌 Status do Projeto

✅ **Concluído** – MVP funcional com todas as principais funcionalidades.
🧠 **Futuras melhorias possíveis:**

* Histórico de cidades buscadas
* Detecção automática de localização via Geolocalização
* Dark mode
* Adição de loading spinners e animações

---

## 👨‍💻 Autor

**Enzo De Castro**
Desenvolvedor Front-End | Criador do LumerWeather
🔗 www.linkedin.com/in/enzodecastro47
📧 enzodicastro47@gmail.com
---
