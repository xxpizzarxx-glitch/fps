/* ============================================
   AVENTURA DE ANIVERSÁRIO - VITÓRIA
   Script Principal
   ============================================ */

// ============================================
// ESTADO GLOBAL DA APLICAÇÃO
// ============================================
const AppState = {
    currentScreen: 'loading-screen',
    currentQuestStep: 0,
    quizScore: 0,
    currentQuestionIndex: 0,
    storyIndex: 0,
    reasonIndex: 0,
    achievementsUnlocked: [],
    easterEggClicks: 0,
    cardsOpened: 0,
    isChestOpened: false
};

// ============================================
// DADOS DO QUIZ (20 PERGUNTAS)
// ============================================
// EDITAR AQUI: Adicione perguntas personalizadas sobre seu relacionamento
const quizQuestions = [
    // Perguntas sobre Genshin Impact
    {
        question: "Qual é o nome da região principal onde começa a jornada em Genshin Impact?",
        options: ["Liyue", "Mondstadt", "Inazuma", "Sumeru"],
        correct: 1,
        achievement: "Exploradora de Teyvat"
    },
    {
        question: "Qual elemento o personagem principal (Traveler) usa primeiro?",
        options: ["Pyro", "Hydro", "Anemo", "Electro"],
        correct: 2,
        achievement: null
    },
    {
        question: "Quem é a Deusa do Vento em Mondstadt?",
        options: ["Barbatos", "Morax", "Beelzebul", "Buer"],
        correct: 0,
        achievement: null
    },
    {
        question: "Qual é a moeda usada em Teyvat?",
        options: ["Gil", "Mora", "Zenny", "Credits"],
        correct: 1,
        achievement: null
    },
    {
        question: "Quantos elementos existem em Genshin Impact?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        achievement: null
    },
    {
        question: "Qual cidade é conhecida como a cidade da liberdade?",
        options: ["Liyue Harbor", "Mondstadt", "Inazuma City", "Port Ormos"],
        correct: 1,
        achievement: null
    },
    {
        question: "Quem é o Arconte Geo?",
        options: ["Zhongli", "Venti", "Raiden Shogun", "Nahida"],
        correct: 0,
        achievement: null
    },
    {
        question: "Qual é o nome do sistema de desejo (gacha) do jogo?",
        options: ["Summon", "Wish", "Pull", "Draw"],
        correct: 1,
        achievement: null
    },
    {
        question: "Qual elemento é forte contra Pyro?",
        options: ["Electro", "Cryo", "Hydro", "Anemo"],
        correct: 2,
        achievement: null
    },
    {
        question: "Em que ano Genshin Impact foi lançado globalmente?",
        options: ["2019", "2020", "2021", "2022"],
        correct: 1,
        achievement: null
    },
    
    // Perguntas personalizadas sobre o relacionamento
    // EDITAR AQUI: Substitua estas perguntas por perguntas sobre vocês dois
    {
        question: "Onde foi nosso primeiro encontro? (Personalize esta resposta)",
        options: ["No parque", "Na escola/faculdade", "Através de amigos", "Online"],
        correct: 0, // Mude este número para a resposta correta (0-3)
        achievement: "Primeira Resposta",
        note: "Edite esta pergunta no script.js para refletir sua história real"
    },
    {
        question: "Qual é nossa comida favorita juntos?",
        options: ["Pizza", "Sushi", "Hambúrguer", "Massa"],
        correct: 0, // Edite conforme sua preferência
        achievement: null
    },
    {
        question: "Para onde gostaríamos de viajar juntos?",
        options: ["Europa", "Ásia", "América do Norte", "Praia paradisíaca"],
        correct: 3, // Edite conforme seu sonho
        achievement: null
    },
    {
        question: "Qual filme/série assistimos juntos pela primeira vez?",
        options: ["Romance clássico", "Ação/aventura", "Comédia", "Animação"],
        correct: 0, // Edite conforme sua memória
        achievement: null
    },
    {
        question: "O que mais gosto em você?",
        options: ["Seu sorriso", "Sua inteligência", "Seu coração", "Tudo acima"],
        correct: 3, // Esta é sempre a resposta do amor! ❤️
        achievement: "Dona do Meu Coração ❤️"
    },
    {
        question: "Como descreveria nosso relacionamento?",
        options: ["Uma aventura mágica", "Um conto de fadas", "Uma jornada incrível", "Todas as anteriores"],
        correct: 3,
        achievement: null
    },
    {
        question: "Qual estação do ano combina mais com nosso amor?",
        options: ["Primavera", "Verão", "Outono", "Inverno"],
        correct: 0, // Edite conforme preferir
        achievement: null
    },
    {
        question: "O que fazemos juntos que mais gosto?",
        options: ["Conversar", "Viajar", "Assistir filmes", "Simplesmente estar juntos"],
        correct: 3,
        achievement: null
    },
    {
        question: "Quantas cartas escondidas tem neste presente?",
        options: ["5", "10", "15", "20"],
        correct: 1,
        achievement: null
    },
    {
        question: "Qual é a cor que mais te lembra nosso amor?",
        options: ["Roxo 💜", "Vermelho ❤️", "Rosa 💗", "Dourado 💛"],
        correct: 0, // Roxo como no tema!
        achievement: "Mestre do Quiz"
    }
];

// ============================================
// DIÁLOGOS DA HISTÓRIA
// ============================================
const storyDialogues = [
    "Existe um tesouro muito raro...",
    "Muitas pessoas passam a vida procurando por ele.",
    "Alguns dizem que está escondido em terras distantes.",
    "Outros acreditam que é apenas uma lenda.",
    "Mas hoje... hoje será sua vez de descobrir a verdade.",
    "Esta jornada foi preparada especialmente para você, Vitória.",
    "Cada desafio superado te aproxima mais do verdadeiro tesouro.",
    "Está pronta para começar esta aventura?"
];

// ============================================
// 100 MOTIVOS (Lista completa)
// ============================================
const reasonsList = [
    "Seu sorriso ilumina meus dias",
    "Sua risada é minha música favorita",
    "Você me faz ser uma pessoa melhor",
    "Seu abraço é meu lugar seguro",
    "Sua inteligência me inspira",
    "Seu carinho me aquece o coração",
    "Sua determinação me motiva",
    "Seus olhos são meu universo",
    "Sua voz acalma minha alma",
    "Sua presença é meu maior presente",
    "Você entende meu silêncio",
    "Respeita meus sonhos",
    "Apoia minhas ideias malucas",
    "Me faz rir sem motivo",
    "Cuida de mim com tanto amor",
    "Sua coragem me impressiona",
    "Sua gentileza encanta todos",
    "Seu beijo é mágico",
    "Suas mãos são perfeitas nas minhas",
    "Seu cheiro me traz paz",
    "Você lembra dos pequenos detalhes",
    "Faz o ordinário se tornar especial",
    "Sua criatividade me surpreende",
    "É minha melhor amiga",
    "É meu grande amor",
    "Me aceita como sou",
    "Celebra minhas vitórias",
    "Me apoia nas derrotas",
    "Sua paciência é infinita",
    "Seu perdão me liberta",
    "Confia em mim",
    "Acredita no nosso futuro",
    "Planeja sonhos comigo",
    "Dança comigo na sala",
    "Canta mesmo desafinando",
    "Faz caretas engraçadas",
    "É espontânea e divertida",
    "Surpreende com gestos lindos",
    "Escreve mensagens fofas",
    "Manda bom dia todo dia",
    "Pergunta como foi meu dia",
    "Ouve minhas histórias",
    "Compartilha seus segredos",
    "Me ensina coisas novas",
    "Aprende comigo também",
    "Respeita meu espaço",
    "Me dá liberdade",
    "É leal e verdadeira",
    "Tem um coração puro",
    "Espalha luz por onde passa",
    "Inspira outras pessoas",
    "É forte e sensível",
    "Chora quando se emociona",
    "Sorri mesmo nos dias difíceis",
    "Luta pelo que quer",
    "Nunca desiste de nós",
    "Valoriza o que temos",
    "Guarda nossas memórias",
    "Revê nossas fotos",
    "Relembra nossos momentos",
    "Faz planos para amanhã",
    "Vive o hoje intensamente",
    "Aprecia as pequenas coisas",
    "Encontra beleza em tudo",
    "Admira o pôr do sol comigo",
    "Conta estrelas à noite",
    "Faz desejos em fontes",
    "Acredita em magia",
    "É minha princesa",
    "É minha rainha",
    "É minha companheira",
    "É meu lar",
    "É meu porto seguro",
    "É minha aventura",
    "É meu mistério",
    "É minha descoberta",
    "É minha conquista",
    "É meu troféu",
    "É meu prêmio",
    "É meu destino",
    "É meu caminho",
    "É minha bússola",
    "É meu mapa",
    "É meu norte",
    "É meu sul",
    "É meu leste",
    "É meu oeste",
    "É meu mundo inteiro",
    "É meu tudo",
    "É única",
    "É especial",
    "É inesquecível",
    "É insubstituível",
    "É perfeita para mim",
    "É o amor da minha vida",
    "É Vitória, minha vitória!"
];

// ============================================
// CARTAS ESCONDIDAS (10 mensagens)
// ============================================
const cardMessages = [
    "Vitória, cada momento ao seu lado é como um capítulo de um conto de fadas. Te amo! 💜",
    "Seu sorriso é a coisa mais linda que já vi. Nunca pare de sorrir! ✨",
    "Você é a razão dos meus dias serem mais felizes. Obrigado por existir! 🌟",
    "Nosso amor é como uma aventura épica, e eu quero viver cada capítulo com você! ⚔️",
    "Seus olhos brilham mais que todas as estrelas de Teyvat juntas! 🌌",
    "Cada abraço seu recarrega minha energia para enfrentar qualquer desafio! 💪",
    "Você é minha party ideal, minha companheira para todas as quests! 🎮",
    "Seu coração é o tesouro mais valioso que já encontrei! 💎",
    "Juntos somos invencíveis, como os melhores personagens de Genshin! 🔥",
    "Este é só o começo de muitas aventuras que ainda vamos viver! 🗺️"
];

// ============================================
// SISTEMA DE CONQUISTAS
// ============================================
const achievements = {
    firstAnswer: { name: "Primeira Resposta", icon: "🏆", unlocked: false },
    teyvatExplorer: { name: "Exploradora de Teyvat", icon: "🗺️", unlocked: false },
    quizMaster: { name: "Mestre do Quiz", icon: "👑", unlocked: false },
    heartOwner: { name: "Dona do Meu Coração", icon: "❤️", unlocked: false },
    memoryCollector: { name: "Colecionadora de Memórias", icon: "📷", unlocked: false },
    chestOpener: { name: "Abridora de Tesouros", icon: "👑", unlocked: false },
    loveSeeker: { name: "Buscadora do Amor", icon: "💕", unlocked: false }
};

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initParticles();
    startLoading();
    setupEventListeners();
});

// ============================================
// CURSOR PERSONALIZADO
// ============================================
function initCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    if (!cursor || !follower) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });
    
    // Efeito hover em elementos clicáveis
    const clickables = document.querySelectorAll('button, a, .gallery-item, .card-back');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            follower.style.transform = 'translate(-50%, -50%) scale(1.2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ============================================
// SISTEMA DE PARTÍCULAS
// ============================================
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    // Criar partículas de estrelas
    setInterval(() => {
        createParticle(container, 'star');
    }, 300);
    
    // Criar corações ocasionalmente
    setInterval(() => {
        createParticle(container, 'heart', '💜');
    }, 2000);
    
    // Criar pétalas de sakura
    setInterval(() => {
        createParticle(container, 'sakura', '🌸');
    }, 1500);
}

function createParticle(container, type, content = '') {
    const particle = document.createElement('div');
    particle.classList.add('particle', type);
    
    if (content) {
        particle.textContent = content;
    }
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    
    if (type === 'star') {
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
    }
    
    container.appendChild(particle);
    
    // Remover partícula após animação
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

// ============================================
// TELA DE LOADING
// ============================================
function startLoading() {
    const loadingTexts = [
        "Preparando uma aventura...",
        "Carregando memórias...",
        "Buscando o maior tesouro...",
        "Quase pronto..."
    ];
    
    const textElement = document.getElementById('loading-text');
    const barElement = document.getElementById('loading-bar');
    let progress = 0;
    let textIndex = 0;
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 5 + 2;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            setTimeout(() => {
                transitionToScreen('main-menu');
                playMusic();
            }, 500);
        }
        
        barElement.style.width = progress + '%';
        
        // Mudar texto a cada 25%
        if (progress > 25 && textIndex === 0) {
            textIndex = 1;
            textElement.textContent = loadingTexts[1];
        } else if (progress > 50 && textIndex === 1) {
            textIndex = 2;
            textElement.textContent = loadingTexts[2];
        } else if (progress > 75 && textIndex === 2) {
            textIndex = 3;
            textElement.textContent = loadingTexts[3];
        }
    }, 100);
}

// ============================================
// TRANSIÇÃO ENTRE TELAS
// ============================================
function transitionToScreen(screenId) {
    const currentScreen = document.getElementById(AppState.currentScreen);
    const nextScreen = document.getElementById(screenId);
    
    if (currentScreen) {
        currentScreen.classList.remove('active');
        currentScreen.classList.add('hidden');
    }
    
    if (nextScreen) {
        nextScreen.classList.remove('hidden');
        nextScreen.classList.add('active');
        AppState.currentScreen = screenId;
    }
}

// ============================================
// CONFIGURAÇÃO DE EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Botão Iniciar Jornada
    const btnStart = document.getElementById('btn-start-journey');
    if (btnStart) {
        btnStart.addEventListener('click', () => {
            startStory();
        });
    }
    
    // Botão Próximo da História
    const btnNextStory = document.getElementById('btn-next-story');
    if (btnNextStory) {
        btnNextStory.addEventListener('click', advanceStory);
    }
    
    // Botão Iniciar Quiz
    const btnStartQuiz = document.getElementById('btn-start-quiz');
    if (btnStartQuiz) {
        btnStartQuiz.addEventListener('click', () => {
            updateQuestProgress(1);
            transitionToScreen('quiz-screen');
            loadQuestion();
        });
    }
    
    // Botão Ver Cartas
    const btnToCards = document.getElementById('btn-to-cards');
    if (btnToCards) {
        btnToCards.addEventListener('click', () => {
            updateQuestProgress(2);
            transitionToScreen('cards-screen');
        });
    }
    
    // Botão 100 Motivos
    const btnToReasons = document.getElementById('btn-to-reasons');
    if (btnToReasons) {
        btnToReasons.addEventListener('click', () => {
            transitionToScreen('reasons-screen');
        });
    }
    
    // Botão Revelar Motivo
    const btnRevealReason = document.getElementById('btn-reveal-reason');
    if (btnRevealReason) {
        btnRevealReason.addEventListener('click', revealReason);
    }
    
    // Botão Ir ao Baú
    const btnToChest = document.getElementById('btn-to-chest');
    if (btnToChest) {
        btnToChest.addEventListener('click', () => {
            transitionToScreen('chest-screen');
        });
    }
    
    // Clique no Baú
    const chestWrapper = document.getElementById('chest-wrapper');
    if (chestWrapper) {
        chestWrapper.addEventListener('click', openChest);
    }
    
    // Botão Ver Créditos
    const btnShowCredits = document.getElementById('btn-show-credits');
    if (btnShowCredits) {
        btnShowCredits.addEventListener('click', () => {
            transitionToScreen('credits-screen');
        });
    }
    
    // Botão Finalizar
    const btnFinish = document.getElementById('btn-finish');
    if (btnFinish) {
        btnFinish.addEventListener('click', showPostCredits);
    }
    
    // Easter Egg no título
    const titleEasterEgg = document.getElementById('title-easter-egg');
    if (titleEasterEgg) {
        titleEasterEgg.addEventListener('click', () => {
            AppState.easterEggClicks++;
            if (AppState.easterEggClicks >= 5) {
                triggerEasterEgg();
            }
        });
    }
    
    // Sequência de teclas Konami Code (Easter Egg)
    setupKonamiCode();
}

// ============================================
// SISTEMA DE HISTÓRIA
// ============================================
function startStory() {
    AppState.storyIndex = 0;
    transitionToScreen('story-screen');
    updateStoryText();
}

function advanceStory() {
    AppState.storyIndex++;
    
    if (AppState.storyIndex >= storyDialogues.length) {
        transitionToScreen('quest-screen');
        updateQuestProgress(0);
    } else {
        updateStoryText();
    }
}

function updateStoryText() {
    const textElement = document.getElementById('story-text');
    if (textElement && storyDialogues[AppState.storyIndex]) {
        textElement.textContent = storyDialogues[AppState.storyIndex];
        
        // Animação de fade
        textElement.style.opacity = 0;
        setTimeout(() => {
            textElement.style.opacity = 1;
        }, 100);
    }
}

// ============================================
// SISTEMA DE MISSÕES
// ============================================
function updateQuestProgress(step) {
    AppState.currentQuestStep = step;
    
    const questItems = document.querySelectorAll('.quest-item');
    questItems.forEach(item => {
        const itemStep = parseInt(item.dataset.step);
        if (itemStep <= step) {
            item.classList.add('completed');
            item.querySelector('.check-icon').textContent = '☑';
        }
    });
}

// ============================================
// SISTEMA DE QUIZ
// ============================================
function loadQuestion() {
    if (AppState.currentQuestionIndex >= quizQuestions.length) {
        finishQuiz();
        return;
    }
    
    const question = quizQuestions[AppState.currentQuestionIndex];
    
    // Atualizar UI
    document.getElementById('quiz-question-number').textContent = 
        `Questão ${AppState.currentQuestionIndex + 1}/${quizQuestions.length}`;
    document.getElementById('quiz-score').textContent = `Pontos: ${AppState.quizScore}`;
    document.getElementById('quiz-question-text').textContent = question.question;
    
    // Atualizar barra de progresso
    const progress = ((AppState.currentQuestionIndex) / quizQuestions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = progress + '%';
    
    // Criar opções
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex) {
    const question = quizQuestions[AppState.currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    
    // Desabilitar cliques
    options.forEach(btn => btn.style.pointerEvents = 'none');
    
    if (selectedIndex === question.correct) {
        // Resposta correta
        options[selectedIndex].classList.add('correct');
        AppState.quizScore += 10;
        document.getElementById('quiz-score').textContent = `Pontos: ${AppState.quizScore}`;
        
        // Partículas de celebração
        createConfetti();
        
        // Verificar conquista
        if (question.achievement && !achievements[getAchievementKey(question.achievement)]?.unlocked) {
            unlockAchievement(question.achievement);
        }
    } else {
        // Resposta errada
        options[selectedIndex].classList.add('wrong');
        options[question.correct].classList.add('correct');
    }
    
    // Primeira resposta - conquista
    if (AppState.currentQuestionIndex === 0) {
        unlockAchievement("Primeira Resposta");
    }
    
    // Próxima pergunta
    setTimeout(() => {
        AppState.currentQuestionIndex++;
        loadQuestion();
    }, 1500);
}

function getAchievementKey(name) {
    if (name.includes("Primeira")) return "firstAnswer";
    if (name.includes("Teyvat")) return "teyvatExplorer";
    if (name.includes("Mestre")) return "quizMaster";
    if (name.includes("Coração")) return "heartOwner";
    return null;
}

function unlockAchievement(name) {
    const key = getAchievementKey(name);
    if (key && !achievements[key].unlocked) {
        achievements[key].unlocked = true;
        showAchievementPopup(achievements[key]);
    }
}

function showAchievementPopup(achievement) {
    const popup = document.getElementById('achievement-popup');
    const nameElement = document.getElementById('achievement-name');
    
    popup.querySelector('.achievement-icon').textContent = achievement.icon;
    nameElement.textContent = achievement.name;
    
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

function finishQuiz() {
    // Conquista de completar quiz
    if (AppState.quizScore >= 150) {
        unlockAchievement("Mestre do Quiz");
    }
    
    updateQuestProgress(2);
    transitionToScreen('gallery-screen');
}

// ============================================
// GALERIA DE FOTOS
// ============================================
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    const img = element.querySelector('img');
    const captionText = element.querySelector('.caption');
    
    if (img && img.dataset.full) {
        lightboxImg.src = img.dataset.full;
        caption.textContent = captionText ? captionText.textContent : '';
        lightbox.classList.add('active');
        
        unlockAchievement("Colecionadora de Memórias");
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Fechar lightbox com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        closeCardModal();
    }
});

// ============================================
// CARTAS ESCONDIDAS
// ============================================
function openCard(index) {
    if (index < 0 || index >= cardMessages.length) return;
    
    const modal = document.getElementById('card-modal');
    const messageElement = document.getElementById('card-message-text');
    const cardBacks = document.querySelectorAll('.card-back');
    
    // Marcar carta como aberta
    if (cardBacks[index]) {
        cardBacks[index].classList.add('opened');
        cardBacks[index].textContent = '💌';
    }
    
    messageElement.textContent = cardMessages[index];
    modal.classList.add('active');
    
    AppState.cardsOpened++;
    
    if (AppState.cardsOpened >= 10) {
        unlockAchievement("Buscadora do Amor");
    }
}

function closeCardModal() {
    const modal = document.getElementById('card-modal');
    modal.classList.remove('active');
}

// ============================================
// 100 MOTIVOS
// ============================================
function revealReason() {
    if (AppState.reasonIndex >= reasonsList.length) {
        AppState.reasonIndex = 0;
    }
    
    const display = document.getElementById('reason-display');
    const countSpan = document.getElementById('reason-count');
    
    display.style.opacity = 0;
    
    setTimeout(() => {
        display.textContent = reasonsList[AppState.reasonIndex];
        countSpan.textContent = AppState.reasonIndex + 1;
        display.style.opacity = 1;
        
        // Criar corações
        createFloatingHearts();
        
        AppState.reasonIndex++;
    }, 300);
}

function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '💜';
            heart.style.position = 'fixed';
            heart.style.left = (Math.random() * 100) + '%';
            heart.style.top = '100%';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.zIndex = '9998';
            heart.style.pointerEvents = 'none';
            heart.style.transition = 'all 2s ease-out';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.top = '-100px';
                heart.style.opacity = '0';
            }, 100);
            
            setTimeout(() => {
                heart.remove();
            }, 2100);
        }, i * 100);
    }
}

// ============================================
// BAÚ DO TESOURO
// ============================================
function openChest() {
    if (AppState.isChestOpened) return;
    
    AppState.isChestOpened = true;
    
    const lid = document.getElementById('chest-lid');
    const glow = document.getElementById('chest-glow');
    
    // Animar tampa
    lid.classList.add('open');
    
    // Explosão de luz
    setTimeout(() => {
        glow.classList.add('explode');
        createConfetti();
        createConfetti();
        createConfetti();
        
        unlockAchievement("Abridora de Tesouros");
        
        // Iniciar contagem regressiva
        setTimeout(() => {
            startCountdown();
        }, 2000);
    }, 500);
}

// ============================================
// CONTAGEM REGRESSIVA
// ============================================
function startCountdown() {
    transitionToScreen('countdown-screen');
    
    const numberElement = document.getElementById('countdown-number');
    let count = 3;
    
    const countdownInterval = setInterval(() => {
        count--;
        
        if (count > 0) {
            numberElement.textContent = count;
            
            // Reiniciar animação
            numberElement.style.animation = 'none';
            numberElement.offsetHeight; // Trigger reflow
            numberElement.style.animation = 'countdown-pop 1s ease';
        } else if (count === 0) {
            numberElement.textContent = '❤️';
        } else {
            clearInterval(countdownInterval);
            playVideo();
        }
    }, 1000);
}

// ============================================
// REPRODUÇÃO DE VÍDEO
// ============================================
function playVideo() {
    transitionToScreen('video-screen');
    
    const video = document.getElementById('main-video');
    if (video) {
        video.play().catch(e => {
            console.log("Autoplay bloqueado, clique para tocar:", e);
            video.controls = true;
        });
        
        video.onended = () => {
            showFinalLetter();
        };
    }
}

// ============================================
// CARTA FINAL
// ============================================
function showFinalLetter() {
    updateQuestProgress(4);
    transitionToScreen('final-letter-screen');
}

// ============================================
// CRÉDITOS
// ============================================
function showPostCredits() {
    updateQuestProgress(5);
    transitionToScreen('post-credits-screen');
    
    // Explosão final de confetes
    setInterval(createConfetti, 200);
}

// ============================================
// EFEITOS ESPECIAIS
// ============================================
function createConfetti() {
    const colors = ['#f1c40f', '#9b59b6', '#ff69b4', '#3498db', '#2ecc71'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 20);
    }
}

// ============================================
// EASTER EGGS
// ============================================
function triggerEasterEgg() {
    alert("🎉 EASTER EGG DESBLOQUEADO! 🎉\n\nVocê encontrou um segredo especial!\n\nVitória, você é incrível e merece todo o amor do mundo! 💜");
    createConfetti();
    createConfetti();
    AppState.easterEggClicks = 0;
}

function setupKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let inputSequence = [];
    
    document.addEventListener('keydown', (e) => {
        inputSequence.push(e.key);
        
        if (inputSequence.length > konamiCode.length) {
            inputSequence.shift();
        }
        
        if (inputSequence.join(',') === konamiCode.join(',')) {
            triggerEasterEgg();
            inputSequence = [];
        }
    });
}

// ============================================
// MÚSICA DE FUNDO
// ============================================
function playMusic() {
    const music = document.getElementById('bg-music');
    if (music) {
        music.volume = 0.3;
        music.play().catch(e => {
            console.log("Autoplay de áudio bloqueado pelo navegador");
        });
    }
}

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

// Slideshow automático na galeria (opcional)
let slideshowInterval;

function startSlideshow() {
    const items = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    
    slideshowInterval = setInterval(() => {
        if (items[currentIndex]) {
            items[currentIndex].click();
            currentIndex = (currentIndex + 1) % items.length;
        }
    }, 5000);
}

function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
}

// Zoom no lightbox
let currentZoom = 1;

function zoomLightbox(direction) {
    const img = document.getElementById('lightbox-img');
    currentZoom += direction * 0.5;
    
    if (currentZoom < 0.5) currentZoom = 0.5;
    if (currentZoom > 3) currentZoom = 3;
    
    img.style.transform = `scale(${currentZoom})`;
}

// Adicionar scroll wheel zoom no lightbox
document.addEventListener('wheel', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        e.preventDefault();
        zoomLightbox(e.deltaY > 0 ? -1 : 1);
    }
}, { passive: false });

console.log("%c🎉 Feliz Aniversário Vitória! 💜", "font-size: 20px; color: #9b59b6; font-weight: bold;");
console.log("%cFeito com muito amor ❤️", "font-size: 14px; color: #ff69b4;");
