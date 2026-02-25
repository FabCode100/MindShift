
<div align="center">
  <img width="800" alt="MindShift Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
  <h1>MindShift</h1>
  <p><b>Interface Cognitiva Imersiva</b></p>
  <p>Jogo educacional mobile inovador integrando hardware e software para aprendizado imersivo.</p>
</div>

---

## 🚀 Visão Geral

MindShift é um protótipo de interface em React para um jogo educacional mobile 2D, integrado a um joystick físico via Bluetooth (ESP32). O projeto explora conceitos de IoT, gamificação, interface humano-computador e aprendizado interativo, com foco em design premium, minimalista e atmosférico.

---

## 🎮 Telas e Funcionalidades

1. **Splash Screen**
   - Fundo escuro com partículas animadas
   - Logo "MindShift" centralizado com glow
   - Subtítulo: "Interface Cognitiva Imersiva"
   - Transição automática para tela inicial

2. **Tela Inicial (Home)**
   - Botão principal: "Iniciar Experiência"
   - Botão secundário: "Conectar Controle"
   - Botão menor: "Configurações"
   - Indicador visual de status Bluetooth
   - Fundo animado sutil

3. **Tela de Conexão Bluetooth**
   - Lista estilizada de dispositivos
   - Card para cada dispositivo
   - Indicador de intensidade de sinal
   - Botão "Conectar" e feedback visual
   - Design estilo painel tecnológico

4. **Tela de Jogo**
   - Interface 2D simulada
   - Esfera luminosa como personagem
   - Plataformas minimalistas e portas lógicas (AND, OR, XOR)
   - Switches interativos
   - HUD discreta: dimensão, gravidade, conexão

5. **Tela de Transição de Dimensão**
   - Distorção visual suave
   - Mudança de cor do ambiente
   - Partículas e blur cinematográfico

6. **Tela de Conclusão de Fase**
   - Mensagem reflexiva sobre o conceito aprendido
   - Botão "Próxima Experiência"
   - Visual contemplativo e fundo animado

---

## 🎨 Design System

- **Paleta de cores:**
  - Azul profundo, roxo escuro, preto azulado, magenta, cyan
- **Tipografia:**
  - Moderna e fina (Space Grotesk)
- **Componentes reutilizáveis:**
  - Botões primários e secundários
  - Cards
  - Indicadores de status
  - Modais
  - HUD
- **Estilo visual:**
  - Glow suave, luz ambiente, partículas, transições cinematográficas
- **Sistema de espaçamento:**
  - Consistente e responsivo
- **Sombras e iluminação:**
  - Efeitos premium e tecnológicos

---

## ⚙️ Requisitos Técnicos

- React funcional com componentes modernos
- Estrutura organizada e modular
- Código limpo e responsivo (mobile-first)
- Animações leves (CSS ou biblioteca simples)
- Simulação visual (sem backend)
- Integração com joystick físico via Bluetooth (simulada)

---

## 🛠️ Instalação e Execução

**Pré-requisitos:** Node.js >= 16

```bash
# Instale as dependências
npm install

# Execute o projeto em modo desenvolvimento
npm run dev

# Acesse em http://localhost:5173
```

---

## 📁 Estrutura do Projeto

```
MindShift/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── components/
│       ├── SplashScreen.tsx
│       ├── HomeScreen.tsx
│       ├── ConnectionScreen.tsx
│       ├── GameScreen.tsx
│       ├── TransitionScreen.tsx
│       └── CompletionScreen.tsx
```

---

## 🧠 Conceito do Jogo

O jogador controla uma esfera de luz para resolver puzzles baseados em lógica (AND, OR, XOR), gravidade e alternância de dimensões. O joystick físico controla movimento, alternância de dimensão e mudança de gravidade por inclinação.

---

## 🎓 Contexto Acadêmico

- Projeto universitário inovador
- Integração de IoT, interface humano-computador e gamificação educacional
- Foco em aprendizado interativo e imersivo
- Transmite inovação tecnológica e sofisticação

---

## 📄 Licença

Este projeto é apenas um protótipo acadêmico, sem fins comerciais.
