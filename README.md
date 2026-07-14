<div align="center">
  <img src="build/icon.png" width="128" alt="Non-Steam Automation Logo" />
  <h1>🎮 Non-Steam Automation</h1>
  <p><strong>O Gerenciador e Emulador Definitivo para Jogos Non-Steam no Linux</strong></p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white)](https://www.electronjs.org/)
  [![CI/CD](https://github.com/markuusbrdev/NonSteamAuto/actions/workflows/release.yml/badge.svg)](https://github.com/markuusbrdev/NonSteamAuto/actions)

</div>

---

**Non-Steam Automation** é uma ferramenta poderosa e elegante projetada para gamers no ecossistema Linux que desejam integrar perfeitamente seus jogos de fora da Steam (Epic Games, GOG, Piratas, Emuladores, etc.) à biblioteca oficial do cliente da Valve. 

Mais do que apenas um injetor de atalhos, o aplicativo atua como uma **Ponte de Emulação Goldberg** autônoma, injetando conquistas nativas e metadados visuais de forma completamente automatizada.

---

## ✨ Funcionalidades Principais

### 🚀 Injeção Automatizada na Steam
- **Adição Automática:** Injeta jogos Non-Steam direto no seu `shortcuts.vdf` sem a dor de cabeça de editar arquivos binários manualmente.
- **Smart Restart:** Reinicie o cliente da Steam com um clique na interface (suporta instalação nativa e Flatpak) para ver seus jogos instantaneamente.

### 🏆 Ecossistema de Conquistas (Goldberg Emulator)
- **Watcher Inteligente em Background:** O aplicativo roda silenciosamente na sua bandeja de sistema (System Tray). Enquanto você joga via emulador Goldberg, ele rastreia seus saves e exibe notificações nativas do GNOME/KDE na tela cada vez que você desbloqueia uma conquista!
- **Painel de Conquistas (Achievements Board):** Interface rica contendo suas estatísticas, conquistas desbloqueadas, conquistas ocultas, arte dos troféus e barra de progressão inspirada na interface real da Steam.
- **Sincronização Cloud-like:** Estrutura persistente que converte saves JSON e estatísticas internas do Goldberg para uma renderização limpa.

### 🎨 Customização Visual Automática
- **SteamGridDB API:** Esqueça caixas cinzas na sua biblioteca! O app busca inteligentemente Covers, Heroes, Logos e Ícones no banco de dados da comunidade e organiza tudo perfeitamente na sua subpasta `userdata/<ID>/config/grid`.
- **Injeção GreenLuma:** Desbloqueio e manipulação de status de AppID falsos para emulação precisa do status "Em Jogo".

### 🐧 Integração e Design Linux-First
- **GNOME Adwaita UI:** Toda a interface gráfica foi construída usando TailwindCSS com as paletas e componentes da biblioteca Libadwaita. Sinta como se estivesse usando um aplicativo nativo do seu ecossistema.
- **Controle de Camadas de Compatibilidade:** Configure parâmetros de inicialização e as versões exatas do Proton/Wine mapeadas nativamente do seu sistema antes da injeção.

---

## 🛠️ Como Funciona a Magia?

O **Non-Steam Automation** atua em múltiplas camadas do seu sistema:
1. Ele faz uma varredura nas pastas raízes do Steam (`~/.steam/steam`, `~/.var/app/com.valvesoftware.Steam`) para encontrar os perfis e IDs.
2. Faz o bypass de arquivos bloqueados e injeta os atalhos com parâmetros exatos no banco de dados VDF.
3. Se ativado o modo Background, uma thread secundária NodeJS faz polling com latência zero (usando fs.watch e chokidar) nas pastas do emulador Goldberg para mapear gravações de `.json` que representem gatilhos de conquistas.

---

## 🚀 Instalação e Downloads

Graças a nossa esteira robusta de CI/CD via GitHub Actions, você não precisa compilar o programa manualmente. Fornecemos binários nativos atualizados em cada Release!

**⬇️ [Baixe a Versão Mais Recente (Releases)](https://github.com/markuusbrdev/NonSteamAuto/releases/latest)**

Suportamos as seguintes plataformas Linux nativamente:
- `.rpm` (Fedora, RHEL, openSUSE)
- `.deb` (Ubuntu, Debian, Pop!_OS)
- `.pacman` (Arch Linux, Manjaro)
- `.AppImage` (Formato Portátil Universal)

---

## 💻 Construindo Localmente (Para Desenvolvedores)

Se você quer ajudar no desenvolvimento ou fuçar no motor gráfico, o setup é super simples!

### Pré-requisitos
- **Node.js** (v18 ou superior)
- **Linux** (Testado ativamente no Fedora 44 e Ubuntu 24.04)

### Rodando o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/markuusbrdev/NonSteamAuto.git
   cd NonSteamAuto
   ```
2. Instale as dependências de forma limpa:
   ```bash
   npm ci
   ```
3. Inicie o modo Dev (Vite + Electron):
   ```bash
   npm run dev
   ```

### Empacotamento
Caso queira compilar os formatos finais na sua máquina:
```bash
npm run build:linux
```
> **Nota:** Para evitar conflitos com macros `rpmbuild`, recomendamos o uso de Docker ou rodar nosso script contido na pipeline caso deseje compilar RPMs em ambientes Fedora mais recentes.

---

## 🏗️ Stack Tecnológica (Under the Hood)

- **Engine Desktop**: Electron
- **Renderizador Frontend**: React + TypeScript + Vite
- **UI & UX**: Tailwind CSS customizado com Tokens Adwaita
- **Processamento de Binários VDF**: node-vdf
- **Monitoramento de Arquivos**: Chokidar (File Watcher em Background)
- **Empacotamento**: Electron-Builder + Pipeline GitHub Actions

---

## 🤝 Como Contribuir

Toda ajuda na base de código é infinitamente bem-vinda, desde fix de bugs na injeção do proton, até expansões para novos emuladores e scrapers!

1. Faça um Fork do projeto
2. Crie uma Branch para sua feature (`git checkout -b feature/sua-feature-incrivel`)
3. Commit suas mudanças (`git commit -m 'feat: Injeta suporte para emulador XYZ'`)
4. Push para a Branch (`git push origin feature/sua-feature-incrivel`)
5. Abra um **Pull Request** detalhando sua implementação.

---

## 📄 Licença e Disclaimer

Este projeto está sob a licença [MIT](LICENSE).

**Disclaimer:** Este projeto é desenvolvido por fins educacionais e utilitários. Não somos associados, endossados ou patrocinados pela Valve Corporation, Steam, ou Epic Games.

---
<p align="center">
  Desenvolvido com ☕ e ❤️ no ecossistema Open Source.
</p>
