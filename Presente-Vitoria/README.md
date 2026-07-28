# 🎉 Presente de Aniversário para Vitória 💜

Um site interativo em formato de mini jogo de aventura, inspirado na atmosfera de Genshin Impact.

## 📁 Estrutura do Projeto

```
Presente-Vitoria/
├── index.html          # Página principal
├── style.css           # Estilos e animações
├── script.js           # Lógica e interatividade
├── music.mp3           # Música de fundo (adicione seu arquivo)
├── video.mp4           # Vídeo surpresa (adicione seu arquivo)
├── README.md           # Este arquivo
└── assets/
    ├── images/         # Fotos da galeria
    │   ├── foto1.jpg   # Adicione suas fotos aqui
    │   ├── foto2.jpg
    │   └── foto3.jpg
    ├── icons/          # Ícones personalizados
    └── backgrounds/    # Imagens de fundo
```

## 🚀 Como Configurar

### 1. Adicionar Música de Fundo
- Coloque um arquivo de música no formato MP3 na pasta raiz
- Nomeie o arquivo como `music.mp3`
- **Sugestão:** Uma música instrumental suave ou uma música que tenha significado para vocês

### 2. Adicionar Vídeo Surpresa
- Coloque um arquivo de vídeo no formato MP4 na pasta raiz
- Nomeie o arquivo como `video.mp4`
- **Sugestão:** Um vídeo com mensagens, fotos do casal, ou uma declaração especial

### 3. Adicionar Fotos na Galeria
- Coloque suas fotos na pasta `assets/images/`
- Nomeie as fotos como `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, etc.
- Ou edite o `index.html` para usar os nomes dos seus arquivos

### 4. Personalizar o Quiz
Abra o arquivo `script.js` e procure pela seção:
```javascript
// Perguntas personalizadas sobre o relacionamento
// EDITAR AQUI: Substitua estas perguntas por perguntas sobre vocês dois
```

Edite as perguntas e respostas para refletir sua história:
- `question`: A pergunta
- `options`: As 4 opções de resposta
- `correct`: O índice da resposta correta (0, 1, 2 ou 3)

### 5. Personalizar as Cartas
No `script.js`, procure por `cardMessages` e edite as 10 mensagens românticas.

### 6. Personalizar os 100 Motivos
No `script.js`, procure por `reasonsList` e edite a lista completa de motivos.

### 7. Adicionar Seu Nome
No `index.html`, procure por `[Seu Nome]` e substitua pelo seu nome real.

## 🎮 Como Jogar

1. **Abra o arquivo `index.html`** em qualquer navegador moderno (Chrome, Firefox, Edge)
2. **Aguarde o loading** cinematográfico
3. **Clique em "Começar Jornada"** no menu principal
4. **Siga a história** e complete as missões
5. **Responda o quiz** sobre Genshin Impact e sobre seu relacionamento
6. **Explore a galeria** de memórias
7. **Descubra as cartas** escondidas
8. **Revele os 100 motivos** pelos quais você é amada
9. **Abra o baú** do tesouro
10. **Assista ao vídeo** surpresa
11. **Leia a carta final**
12. **Veja os créditos** e a mensagem pós-créditos

## ✨ Easter Eggs

- **Clique 5 vezes no título** do menu principal
- **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A
- **Clique nas estrelas** das partículas
- **Explore todos os cantos** do site

## 🎨 Recursos Incluídos

- ✅ Tela de loading cinematográfica com barra de progresso
- ✅ Partículas animadas (estrelas, corações, pétalas de sakura)
- ✅ Cursor personalizado com efeito glow
- ✅ Sistema de missões estilo RPG
- ✅ Quiz com 20 perguntas (Genshin + personalizadas)
- ✅ Sistema de conquistas com popups animados
- ✅ Galeria de fotos com lightbox e zoom
- ✅ 10 cartas escondidas com mensagens românticas
- ✅ 100 motivos reveláveis com animações
- ✅ Baú do tesouro animado com explosão de partículas
- ✅ Contagem regressiva dramática
- ✅ Reprodução automática de vídeo
- ✅ Carta final emocionante
- ✅ Créditos estilo jogo
- ✅ Tela pós-créditos com mensagem especial
- ✅ Glassmorphism e efeitos de blur
- ✅ Animações suaves e transições cinematográficas
- ✅ Totalmente responsivo (desktop, tablet, celular)
- ✅ Easter eggs secretos

## 🎯 Dicas de Personalização

### Cores do Tema
No `style.css`, edite as variáveis CSS em `:root`:
```css
--primary-color: #9b59b6;     /* Cor principal (roxo) */
--accent-gold: #f1c40f;       /* Dourado para destaques */
--accent-pink: #ff69b4;       /* Rosa para elementos românticos */
```

### Fontes
O projeto usa fontes do Google Fonts:
- **Cinzel**: Para títulos (estilo fantasia)
- **Nunito**: Para texto corporal (legibilidade)

### Velocidades de Animação
Ajuste as durações nas classes CSS para acelerar ou desacelerar animações.

## 🔧 Solução de Problemas

### O vídeo não toca automaticamente
- Navegadores bloqueiam autoplay de vídeo com som
- O vídeo tocará quando o usuário interagir com a página
- Alternativamente, adicione controles ao vídeo

### A música não toca
- Autoplay de áudio é bloqueado pela maioria dos navegadores
- A música começará após a primeira interação do usuário
- Verifique se o arquivo `music.mp3` existe e está no formato correto

### As imagens não aparecem
- Verifique se os arquivos estão na pasta `assets/images/`
- Confira se os nomes dos arquivos correspondem ao código HTML
- Use formatos suportados: JPG, PNG, WebP

### O site não abre
- Abra diretamente o arquivo `index.html` no navegador
- Ou use um servidor local (Live Server no VS Code, Python http.server, etc.)

## 📱 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Navegadores móveis (iOS Safari, Chrome Mobile)

## 💝 Mensagem Final

Este projeto foi feito com muito amor para tornar o aniversário da Vitória inesquecível!

**"O verdadeiro tesouro nunca esteve em Teyvat. Sempre foi você."**

---

Criado com ❤️ usando HTML, CSS e JavaScript puro.
