// JavaScript básico
console.log("Script carregado.");

// Dados dos Jogadores (Preenchidos com dados reais) - Mantém igual
const playersData = {
    fallen: {
        nickname: "FalleN",
        name: "Gabriel Toledo de Alcântara Sguario",
        age: "33 anos",
        role: "AWPer",
        joined: "Julho 2023", // Fonte: HLTV/Liquipedia
        achievements: ["2x Campeão de Major (MLG Columbus 2016, ESL One Cologne 2016)", "HLTV Top 20: #2 (2016), #6 (2017)"],
        rating: "0.92 (Últimos 3 meses)",
        photo: "https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a", // Usar placeholder por enquanto
        hltv: "https://www.hltv.org/player/2023/fallen",
        liquipedia: "https://liquipedia.net/counterstrike/FalleN"
    },
    yuurih: {
        nickname: "yuurih",
        name: "Yuri Gomes dos Santos Boian",
        age: "25 anos",
        role: "Rifler",
        joined: "Novembro 2017", // Fonte: Liquipedia
        achievements: ["HLTV Top 20: #14 (2020), #19 (2022)", "3x MVP HLTV (Eventos NA)"],
        rating: "N/A", // Adicionar se disponível
        photo: "https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb",
        hltv: "https://www.hltv.org/player/12553/yuurih",
        liquipedia: "https://liquipedia.net/counterstrike/Yuurih"
    },
    kscerato: {
        nickname: "KSCERATO",
        name: "Kaike Silva Cerato",
        age: "25 anos",
        role: "Rifler (Lurker)",
        joined: "Fevereiro 2018", // Fonte: HLTV/Liquipedia
        achievements: ["HLTV Top 20: #18 (2020), #15 (2021), #9 (2022), #19 (2023)"],
        rating: "N/A", // Adicionar se disponível
        photo: "https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca",
        hltv: "https://www.hltv.org/player/15631/kscerato",
        liquipedia: "https://liquipedia.net/counterstrike/KSCERATO"
    },
    molodoy: {
        nickname: "molodoy",
        name: "Danil Golubenko",
        age: "20 anos",
        role: "Rifler",
        joined: "Abril 2025", // Fonte: Notícia HLTV (data aproximada)
        achievements: ["Contratação recente, ex-AMKAL"], // Adicionar conquistas se houver
        rating: "N/A",
        photo: "https://i.ytimg.com/vi/bxq_UTv9m4o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCU5B5rMeJpze2nwWcOfl8u35OhOghttps://i.ytimg.com/vi/bxq_UTv9m4o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCU5B5rMeJpze2nwWcOfl8u35OhOg",
        hltv: "https://www.hltv.org/player/24144/molodoy",
        liquipedia: "https://liquipedia.net/counterstrike/Molodoy"
    }
    // Adicionar dados para YEKINDAR e sidde se necessário
};

// Funcionalidade do Modal - Mantém igual
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("player-modal");
    const closeButton = document.querySelector(".close-button");
    const playerCards = document.querySelectorAll(".player-card[data-player]");

    // Elementos do Modal para popular
    const modalPhoto = document.getElementById("modal-player-photo");
    const modalNickname = document.getElementById("modal-player-nickname");
    const modalName = document.getElementById("modal-player-name");
    const modalAge = document.getElementById("modal-player-age");
    const modalRole = document.getElementById("modal-player-role");
    const modalJoined = document.getElementById("modal-player-joined");
    const modalAchievements = document.getElementById("modal-player-achievements");
    const modalRating = document.getElementById("modal-player-rating");
    const modalHltv = document.getElementById("modal-player-hltv");
    const modalLiquipedia = document.getElementById("modal-player-liquipedia");

    if (modal && closeButton && playerCards.length > 0) { // Verifica se elementos do modal existem
        playerCards.forEach(card => {
            card.addEventListener("click", () => {
                const playerKey = card.getAttribute("data-player");
                const playerData = playersData[playerKey];

                if (playerData) {
                    // Popular o modal
                    modalPhoto.src = playerData.photo;
                    modalNickname.textContent = playerData.nickname;
                    modalName.textContent = playerData.name;
                    modalAge.textContent = playerData.age;
                    modalRole.textContent = playerData.role;
                    modalJoined.textContent = playerData.joined;
                    modalRating.textContent = playerData.rating;
                    modalHltv.href = playerData.hltv;
                    modalLiquipedia.href = playerData.liquipedia;

                    // Limpar conquistas anteriores e adicionar novas
                    modalAchievements.innerHTML = "";
                    playerData.achievements.forEach(ach => {
                        const li = document.createElement("li");
                        li.textContent = ach;
                        modalAchievements.appendChild(li);
                    });

                    // Exibir o modal
                    modal.style.display = "block";
                }
            });
        });

        // Fechar o modal pelo botão
        closeButton.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Fechar o modal clicando fora dele
        window.addEventListener("click", (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});


// Funcionalidade do Chatbot (MODIFICADO PARA USAR BACKEND/DIALOGFLOW)
document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");

    // Verifica se os elementos do chat existem antes de adicionar listeners
    if (chatMessages && chatInput && sendButton) {
        function addMessage(text, type) {
            if (!text || !text.trim()) return; // Não adiciona mensagens vazias ou nulas

            const messageElement = document.createElement("div");
            messageElement.classList.add("message", type);
             if (type.includes("bot-message")) {
                 messageElement.classList.add("received"); // Garante alinhamento à esquerda para bot
             } else {
                 messageElement.classList.add("sent"); // Garante alinhamento à direita para o usuário
             }
            const paragraph = document.createElement("p");
            paragraph.textContent = text;
            messageElement.appendChild(paragraph);
            chatMessages.appendChild(messageElement);

            // Auto-scroll para a última mensagem
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // REMOVA A FUNÇÃO getBotResponse AQUI - O Dialogflow fará esse trabalho no backend
        // function getBotResponse(userMessage) { ... } // <-- REMOVER ESTE BLOCO

        // Função assíncrona para enviar a mensagem e receber a resposta do backend
        async function sendMessage() {
            const messageText = chatInput.value.trim(); // Remove espaços em branco extras
            if (!messageText) return; // Não envia mensagens vazias

            // Adiciona a mensagem do usuário imediatamente ao chat
            addMessage(messageText, "sent");
            chatInput.value = ""; // Limpa o campo de input

            try {
                // CHAMA SEU SERVIÇO DE BACKEND QUE SE COMUNICA COM O DIALOGFLOW
                // Substitua '/chat' pelo URL real do seu endpoint de backend
                const response = await fetch('/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: messageText }) // Envia a mensagem no corpo da requisição JSON
                });

                // Verifica se a resposta HTTP foi bem-sucedida
                if (!response.ok) {
                    // Trata erros HTTP (ex: 404, 500)
                    const errorMsg = `Erro na comunicação com o chatbot: ${response.status} ${response.statusText}`;
                    console.error(errorMsg);
                    addMessage("Ops! Ocorreu um erro ao tentar falar com o chatbot.", "received bot-message error");
                    return; // Para a execução
                }

                // Converte a resposta JSON
                const data = await response.json();

                // Assume que o backend retorna um JSON como { "reply": "..." }
                // Ajuste "data.reply" conforme a estrutura JSON real que seu backend retorna
                const botResponse = data.reply;

                if (botResponse) {
                    // Adiciona a mensagem do bot ao chat, com um pequeno atraso para efeito
                    setTimeout(() => {
                        addMessage(botResponse, "received bot-message");
                    }, 500); // Adiciona um pequeno atraso (meio segundo)
                } else {
                    console.warn("A resposta do backend não contém o campo 'reply':", data);
                    addMessage("Recebi uma resposta inesperada do servidor.", "received bot-message error");
                }

            } catch (error) {
                // Trata erros de rede (problemas de conexão)
                console.error("Erro ao enviar mensagem para o backend:", error);
                addMessage("Não foi possível conectar com o serviço de chatbot.", "received bot-message error");
            }
        }

        sendButton.addEventListener("click", sendMessage);

        chatInput.addEventListener("keypress", (event) => {
            // Verifica se a tecla pressionada foi Enter (código 13)
            if (event.key === "Enter") {
                event.preventDefault(); // Previne o comportamento padrão (como enviar um formulário)
                sendMessage();
            }
        });

         // Mensagem inicial do bot (opcional, pode vir do backend também)
         // Removida a mensagem inicial aqui, assume que já está no HTML ou é tratada por uma primeira chamada ao backend
    } else {
        console.warn("Elementos do Chatbot não encontrados. Funcionalidade do Chatbot desabilitada.");
    }
});


// Funcionalidade do Simulador de Conversa (Código anterior) - Mantém igual
const fanPhrases = [
    "VAMO FURIAAAA!",
    "#DIADEFURIA",
    "PRA CIMA DELES!",
    "QUE JOGADA!",
    "CONFIA NO FALLEN!",
    "KSCERATO MONSTRO!",
    "YUURIH MVP!",
    "BOA, MOLODOY!",
    "YEKINDAR CHEGOU!",
    "VAI BRASIL!",
    "GANHAMO!",
    "GG WP!"
];
let currentPhraseIndex = 0;

const simulatorOutput = document.getElementById("simulator-output");
const nextPhraseButton = document.getElementById("next-phrase-button");

// Verifica se os elementos do simulador existem
if (simulatorOutput && nextPhraseButton) {
    const fanPhraseElement = simulatorOutput.querySelector(".fan-phrase");

    function showNextPhrase() {
        // Seleciona a próxima frase de forma aleatória (ou sequencial, se preferir)
        currentPhraseIndex = Math.floor(Math.random() * fanPhrases.length);
        if (fanPhraseElement) {
             fanPhraseElement.textContent = fanPhrases[currentPhraseIndex];
        }
    }

    // Adiciona listener apenas se o botão existir
    nextPhraseButton.addEventListener("click", showNextPhrase);
}

