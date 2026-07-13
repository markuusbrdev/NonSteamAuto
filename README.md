# 🎮 Non-Steam Automation

## ❌ ESSE PROJETO NÃO RECEBERÁ NOVOS UPDATES ❌



### O Gerenciador Definitivo de Jogos Non-Steam para Linux

![Banner](assets/banner.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Non-Steam Automation** é uma ferramenta poderosa e elegante projetada para gamers no Linux que desejam integrar perfeitamente seus jogos de fora da Steam (Epic Games, GOG, Emuladores, etc.) à biblioteca oficial da Steam, com automação completa de arte e configurações.

---

## ✨ Funcionalidades Principais

*   **🚀 Injeção Automatizada**: Adicione jogos Non-Steam à sua biblioteca sem precisar editar arquivos VDF manualmente.
*   **🎨 Arte Automática (SteamGridDB)**: Busca automática de capas (grids), heróis, logos e ícones diretamente da API do SteamGridDB.
*   **🛠️ Wizard de Configuração**: Configure opções de inicialização e camadas de compatibilidade (Proton) através de uma interface intuitiva.
*   **🐧 Otimizado para Linux**: Desenvolvido pensando no ecossistema Linux, com suporte a Flatpak e caminhos de biblioteca padrão.
*   **💅 Interface Adwaita Modern**: UI limpa, responsiva e seguindo os padrões visuais mais modernos do GNOME.
*   **🔄 Reinicialização Inteligente**: Aplique as mudanças e reinicie a Steam com um único clique para ver seus novos jogos instantaneamente.

---

## 🛠️ Como Funciona?

O Non-Steam Automation interage diretamente com o arquivo `shortcuts.vdf` da sua conta Steam. Ele automatiza o processo de:
1. Localizar sua instalação da Steam e o perfil de usuário.
2. Gerar as entradas necessárias no banco de dados da Steam.
3. Baixar e organizar os arquivos de arte nas pastas corretas (`userdata/<ID>/config/grid`).
4. Definir as variáveis de ambiente e versões do Proton necessárias para cada jogo.

---

## 🚀 Instalação e Desenvolvimento

### Pré-requisitos
- **Node.js** (v18 ou superior)
- **npm** ou **yarn**
- **Steam** instalada e configurada no seu sistema Linux.

### Rodando Localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/markuusbrdev/Non-Steam-Automation.git
   cd Non-Steam-Automation
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

### Build (Gerar Executável)
Para gerar o instalador para Linux:
```bash
npm run build
```

---

## 🏗️ Stack Tecnológica

- **Frontend**: React + TypeScript + Vite
- **Desktop**: Electron
- **Estilização**: Tailwind CSS (GNOME Adwaita Style)
- **Integração**: SteamGridDB API & VDF Parser

---

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma **Issue** ou enviar um **Pull Request**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova Feature'`)
4. Push para a Branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Desenvolvido com ❤️ por <a href="https://github.com/markuusbrdev">markuusbrdev</a>
</p>
