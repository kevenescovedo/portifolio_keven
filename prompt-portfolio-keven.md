# PROMPT MESTRE — PORTFÓLIO KEVEN RODRIGO

> Use este documento como referência completa para gerar cada seção do site.
> Cada seção possui seu próprio bloco de prompt. Cole o bloco desejado diretamente na IA.

---

## CONTEXTO GLOBAL (inclua isso no início de QUALQUER prompt de seção)

```
Você é um desenvolvedor front-end sênior especialista em criar portfólios
modernos, sofisticados e de alto impacto visual. Você vai construir o portfólio
pessoal de Keven Rodrigo dos Santos Escovedo, um Desenvolvedor Full Stack &
Mobile com mais de 3 anos de experiência, atualmente trabalhando na TV Fronteira.

Eu irei te informar o design system (cores, fontes, espaçamentos) separadamente.
Siga rigorosamente o design system que eu fornecer — não invente cores nem
estilos por conta própria.

O site deve ser responsivo (mobile-first), semântico, acessível e com
animações suaves usando CSS transitions/animations ou GSAP. O código deve ser
limpo, comentado e organizado em componentes reutilizáveis.
```

---

## SEÇÃO 1 — HERO

```
Crie a seção HERO do portfólio de Keven Rodrigo dos Santos Escovedo.

### LAYOUT
A seção deve ocupar 100% da altura da viewport (min-height: 100vh).
O layout é dividido em dois blocos lado a lado em desktop:
- LADO ESQUERDO (55% da largura): exibe um vídeo em loop
- LADO DIREITO (45% da largura): exibe o conteúdo textual de apresentação

Em mobile, os blocos empilham verticalmente — o texto aparece primeiro
(no topo) e o vídeo logo abaixo.

### BLOCO DO VÍDEO (lado esquerdo)
- Use a tag HTML <video> com os atributos: autoplay, loop, muted, playsinline
- O vídeo deve preencher todo o bloco sem distorção (object-fit: cover)
- O src do vídeo deve ser um placeholder: src="./assets/video/hero.mp4"
  (deixe um comentário no código dizendo que o arquivo deve ser substituído)
- Por cima do vídeo, aplique uma leve sobreposição (overlay) escura,
  com opacidade entre 10% e 20%, para suavizar e integrar com o design
- O bloco do vídeo deve ter border-radius no lado interno (voltado para o
  texto), criando uma borda arredondada elegante apenas nessa aresta
- Em mobile, o vídeo deve ter altura fixa de 280px e width: 100%

### BLOCO DE TEXTO (lado direito)
Exibir os seguintes elementos em sequência, com animação de entrada:

1. BADGE / TAG — pequeno elemento acima do nome com o texto:
   "Disponível para projetos"
   Deve ter um indicador visual pulsante (ponto verde animado) à esquerda
   do texto, sinalizando disponibilidade.

2. NOME — exibir o nome completo em duas linhas para dar peso visual:
   Linha 1: "Keven Rodrigo"
   Linha 2: "dos Santos Escovedo"
   O nome deve ser o elemento de maior destaque tipográfico da página.
   Fonte grande, peso bold. Pode usar uma leve diferença de cor ou peso
   entre as linhas para criar hierarquia visual.

3. FRASE PRINCIPAL com efeito de digitação (typewriter):
   Exibir as seguintes frases em rotação infinita, uma de cada vez,
   com efeito de cursor piscante:
   - "Desenvolvedor Full Stack & Mobile"
   - Analista de sistemas 
   - Vibe Coding
   
   - "Do back-end ao mobile, da automação ao ar"
   Cada frase deve ser digitada, pausar por 2 segundos e então
   apagar letra por letra antes de digitar a próxima.

   redes sociais
   linkedin -> https://www.linkedin.com/in/keven-escovedo-5b59b118b/
   instagram ->  https://www.instagram.com/keven_escovedo/
   whatsapp -> 18996640661
   github -> https://github.com/kevenescovedo

4. SUBTÍTULO — parágrafo descritivo, fonte menor, peso regular, cor mais suave:
   "Apaixonado por tecnologia, performance e soluções que fazem a
   diferença no mundo real. Mais de 3 anos transformando ideias em
   código — do back-end ao mobile."

5. BOTÕES DE AÇÃO — dois botões lado a lado:
   - Botão primário: "Ver meus projetos" (âncora para a seção #projetos)
   - Botão secundário (outline): "Baixar currículo" (link para arquivo PDF,
     com ícone de download à esquerda)
   Em mobile, os botões devem ficar empilhados e com width: 100%

6. LINKS SOCIAIS — ícones com hover animado, abaixo dos botões:
   - GitHub (ícone do GitHub)
   - LinkedIn (ícone do LinkedIn)
   - WhatsApp (ícone do WhatsApp) — link para contato direto
   Exibir em linha horizontal, com espaçamento uniforme entre eles.

### ANIMAÇÕES DE ENTRADA
Todos os elementos do bloco de texto devem entrar com animação ao carregar
a página. Use um esquema de entrada em cascata (stagger), onde cada elemento
aparece com um delay incremental de 150ms em relação ao anterior.
Sugestão de animação: fade-in com leve deslocamento de baixo para cima
(translateY de 20px até 0, com opacity de 0 até 1), duration de 0.6s,
easing: ease-out.

Ordem da animação em cascata:
1. Badge (delay: 0ms)
2. Nome — linha 1 (delay: 150ms)
3. Nome — linha 2 (delay: 300ms)
4. Frase com typewriter (delay: 500ms — inicia após o nome estar visível)
5. Subtítulo (delay: 650ms)
6. Botões (delay: 800ms)
7. Links sociais (delay: 950ms)

### COMPORTAMENTO DE SCROLL
Ao rolar a página para baixo, o bloco do vídeo deve ter um leve efeito
de parallax — rolando ligeiramente mais devagar que o restante da página
(parallax suave, fator 0.3).

### LINHA DIVISÓRIA
Na parte inferior da seção hero, adicionar uma linha divisória sutil
(pode ser um gradiente fade) separando a hero das próximas seções.
```

---

## SEÇÃO 2 — SOBRE MIM

```
Crie a seção "Sobre Mim" do portfólio de Keven Rodrigo.

### ESTRUTURA GERAL
A seção deve ter o id="sobre" para âncora de navegação.
Título da seção: "Sobre mim"
Subtítulo da seção (menor, acima do título principal, como label):
"Conheça minha história"

### LAYOUT
Dividir em dois blocos em desktop:
- ESQUERDA (45%): bloco visual / estatísticas
- DIREITA (55%): texto e informações

Em mobile, empilhar verticalmente (texto primeiro, estatísticas abaixo).

### BLOCO ESQUERDO — ESTATÍSTICAS E DESTAQUES
Exibir 4 cards de destaque em grid 2x2, cada um com:
- Um ícone representativo (use ícones SVG ou de uma biblioteca como
  Lucide ou Heroicons)
- Um número grande em destaque (animado com counter-up ao entrar na viewport)
- Uma descrição curta abaixo do número

Os 4 cards são:
1. Ícone de código → "3+" → "Anos de experiência"
2. Ícone de projeto/pasta → "8+" → "Projetos entregues"
3. Ícone de tecnologia/stack → "20+" → "Tecnologias dominadas"
4. Ícone de troféu → "1°" → "Lugar na turma — Fatec"

Abaixo do grid 2x2, adicionar uma citação pessoal em destaque:
"Sou movido pela curiosidade e pelo desejo de criar coisas que
realmente funcionam — e funcionam bem."
Estilizar como blockquote, com barra lateral colorida (cor de destaque
do design system), itálico, e fonte levemente maior que o corpo do texto.

### BLOCO DIREITO — TEXTO E INFORMAÇÕES
Organizar em três blocos de conteúdo:

BLOCO A — Apresentação pessoal:
Parágrafo de texto corrido com as seguintes informações:
"Tenho 25 anos, sou natural do Brasil e trabalho com desenvolvimento
de software há mais de 3 anos. Fora da tecnologia, gosto de música,
academia e aprendizado contínuo. Levo disciplina, dedicação e
constância para tudo que desenvolvo."

BLOCO B — O que estou fazendo agora (com título "Atualmente"):
Apresentar como uma lista de itens com ícone de check ou seta,
cada item em uma linha:
- Estudando inglês na Cultura Inglesa
- Me aprofundando em vibe coding e agentes de IA
- Utilizando Antigravity como ferramenta de produtividade

BLOCO C — Formação acadêmica (com título "Formação"):
Exibir como uma timeline vertical simples (linha + pontos):

Ponto 1:
  Período: 2016 – 2018
  Instituição: Senac
  Curso: Técnico em Informática

Ponto 2:
  Período: 2019 – 2022
  Instituição: Fatec
  Curso: Análise e Desenvolvimento de Sistemas
  Badge especial: "🏆 Melhor Aluno do Curso"
  Detalhe adicional: "Monitor de Algoritmos e Engenharia de Software"

### ANIMAÇÕES
Todos os elementos devem usar Intersection Observer para animar ao
entrar na viewport:
- Cards de estatísticas: fade-in + scale de 0.9 para 1, em stagger
- Números dos cards: counter-up (contagem animada do 0 até o valor final)
- Bloco de texto: slide-in da direita
- Timeline: os pontos aparecem de cima para baixo em stagger
```

---

## SEÇÃO 3 — TECNOLOGIAS / SKILLS

```
Crie a seção "Tecnologias" do portfólio de Keven Rodrigo.

### ESTRUTURA GERAL
id="tecnologias"
Label acima do título: "Meu arsenal"
Título principal: "Tecnologias & ferramentas"

### CONCEITO VISUAL
Não use barras de progresso — elas são genéricas e subjetivas.
Em vez disso, organize as tecnologias em grupos por categoria,
exibindo cada tech como um badge/pill com ícone e nome.
Os badges devem ter hover com leve elevação e cor de destaque.

### CATEGORIAS E TECNOLOGIAS
Organizar em 4 grupos:

GRUPO 1 — Front-end & Mobile
Badges: JavaScript, Vue.js, React, Flutter, HTML5, CSS3, jQuery, Bootstrap

GRUPO 2 — Back-end & Banco de Dados
Badges: PHP, Node.js, Python, C#, Java, MySQL, SQLite, Ajax

GRUPO 3 — Cloud, DevOps & Ferramentas
Badges: Firebase, Supabase, Vercel, Git, WebSocket

GRUPO 4 — Em evolução (destaque especial)
Badges: Agentes de IA, Vibe Coding, Inglês (Cultura Inglesa)
Este grupo deve ter um visual diferente dos outros — por exemplo,
um badge com borda tracejada ou uma cor de destaque diferente,
sinalizando que são habilidades em desenvolvimento ativo.

### LAYOUT
Em desktop: exibir os grupos em grid de 2 colunas.
Em mobile: uma coluna.
Cada grupo tem:
- Um ícone + título de categoria
- Os badges dispostos em flex-wrap (quebra de linha natural)

### FAIXA ANIMADA (opcional, mas recomendado)
Logo abaixo dos grupos, adicionar uma faixa horizontal infinita
(marquee/ticker) com todos os nomes das tecnologias separados por
um separador visual (ex: "·"). A faixa deve rolar da direita para a
esquerda de forma contínua e suave, pausando ao passar o mouse.
Isso adiciona dinamismo à seção sem poluir o layout principal.

### ANIMAÇÕES
Badges aparecem em stagger ao entrar na viewport, com efeito de
pop-in (scale de 0.8 para 1 + fade-in). Delay de 50ms entre cada badge.
```

---

## SEÇÃO 4 — EXPERIÊNCIA PROFISSIONAL

```
Crie a seção "Experiência" do portfólio de Keven Rodrigo.

### ESTRUTURA GERAL
id="experiencia"
Label: "Onde trabalhei"
Título: "Experiência profissional"

### CONTEXTO
Toda a experiência profissional é na mesma empresa:
Empresa: TV Fronteira
Cargo: Desenvolvedor Full Stack & Mobile
A seção deve deixar claro que são múltiplos projetos dentro da
mesma empresa, não empregos diferentes.

### LAYOUT — ACCORDION / CARDS EXPANSÍVEIS
Exibir um cabeçalho fixo da empresa (nome + logo placeholder + cargo),
e abaixo dele os projetos organizados como cards expansíveis (accordion).
Cada card começa fechado, mostrando apenas ícone + título + tech stack.
Ao clicar, expande e revela a descrição completa do projeto.
Apenas um card pode estar aberto por vez.

### PROJETOS (um card para cada)

CARD 1 — Portal de Notícias
  Ícone: jornal / notícia
  Título: "Portal de Notícias — ifronteira.com"
  Stack resumida (visível fechado): PHP · JavaScript · MySQL · Google Analytics
  Descrição expandida:
    "Desenvolvimento e evolução do ifronteira.com, portal completo de
    notícias e blogs com espaço publicitário e banners rotativos.
    Responsável por auditorias de performance e SEO, implementação de
    meta tags completas, Open Graph para redes sociais, sitemaps dinâmicos,
    editor de texto rico com CKEditor e integração com Google Analytics
    para rastrear métricas de vídeo, visualizações e cliques em banners."
  Stack completa (visível expandido): PHP, JavaScript, MySQL, CKEditor,
    Google Analytics, HTML, CSS

CARD 2 — Automação YouTube
  Ícone: robô / automação
  Título: "Automação de Vídeos — YouTube → Site"
  Stack resumida: PHP · YouTube API · MySQL
  Descrição expandida:
    "Script em PHP que monitora o canal da TV Fronteira no YouTube.
    Ao detectar um novo vídeo publicado, insere o conteúdo automaticamente
    no portal de notícias — zero intervenção manual, publicação imediata."
  Stack completa: PHP, YouTube API, MySQL

CARD 3 — Sistema TEO
  Ícone: tv / monitor
  Título: "Sistema TEO — Telas para Jornalismo ao Vivo"
  Stack resumida: Vue.js · JavaScript · CSS Animations
  Descrição expandida:
    "Criação e configuração de telas interativas touch para o sistema TEO,
    utilizado por jornalistas durante os telejornais ao vivo. Em parceria
    com o videografismo, também desenvolvi telas animadas de temperatura,
    boletins informativos e artes exibidas no ar."
  Stack completa: Vue.js, JavaScript, HTML, CSS, Animações, Interface Touch

CARD 4 — Cronômetro ao Vivo
  Ícone: cronômetro / relógio
  Título: "Cronômetro Sincronizado — Debate para Prefeitos"
  Stack resumida: Node.js · WebSocket · JavaScript
  Descrição expandida:
    "Cronômetro em tempo real para o debate político transmitido pela
    TV Fronteira. Desenvolvido com Node.js e WebSocket: ao iniciar em
    uma tela, todas as outras sincronizavam simultaneamente, sem delay
    perceptível."
  Stack completa: Node.js, WebSocket, JavaScript, HTML, CSS

CARD 5 — Aplicativo de Rádio
  Ícone: smartphone / rádio
  Título: "Aplicativo de Rádio — Android & iOS"
  Stack resumida: Flutter · Firebase · PHP · Server-Driven UI
  Descrição expandida:
    "App mobile completo para Android e iOS: rádio ao vivo via stream,
    lives, vídeos do YouTube e promoções. Diferencial técnico: Server-Driven UI
    — cores, logo e configurações alteradas remotamente sem nova publicação
    nas lojas. Painel interno para controle de lives e stream em tempo real.
    Automação de programas: script PHP detecta o início de um programa e
    o insere no app automaticamente. Monitorado via Firebase Analytics."
  Stack completa: Flutter, PHP, Firebase, Firebase Analytics, Server-Driven UI,
    YouTube API, Stream de Áudio

CARD 6 — Automação Voz do Brasil
  Ícone: microfone / python
  Título: "Automação Voz do Brasil — Script Python"
  Stack resumida: Python · Web Scraping
  Descrição expandida:
    "Script Python que acessa automaticamente o site da Rádio Gov, localiza
    e baixa o programa Voz do Brasil do dia, deixando-o pronto para
    transmissão na rádio. Processo antes manual, agora 100% automático."
  Stack completa: Python, Web Scraping

CARD 7 — Sistema de BI
  Ícone: gráfico / dashboard
  Título: "Sistema de BI — Business Intelligence"
  Stack resumida: PHP · Vue.js · MySQL
  Descrição expandida:
    "Desenvolvimento de módulos e auditorias em sistema interno de BI.
    Trabalho focado em identificação de gargalos, resolução de problemas
    de performance e melhoria na confiabilidade dos dados exibidos
    para as equipes internas."
  Stack completa: PHP, JavaScript, MySQL, Vue.js

### ANIMAÇÕES
- O cabeçalho da empresa entra com fade-in ao chegar na viewport
- Os cards entram em stagger (fade + slide-up), 100ms de delay entre cada
- A abertura/fechamento do accordion usa transição suave de altura
  (max-height transition), sem salto brusco
```

---

## SEÇÃO 5 — PROJETOS EM DESTAQUE

```
Crie a seção "Projetos" do portfólio de Keven Rodrigo.

### ESTRUTURA GERAL
id="projetos"
Label: "O que já construí"
Título: "Projetos em destaque"

### CONCEITO
Esta seção deve dar destaque visual máximo aos principais projetos,
diferente da seção de experiência (que é mais descritiva/timeline).
Aqui, cada projeto é um card rico com imagem/preview, descrição curta
e links de ação.

### LAYOUT
Grid de cards em desktop: 2 colunas.
Em mobile: 1 coluna.
O primeiro card pode ocupar as 2 colunas (card destaque/featured).

### CARD PADRÃO — estrutura de cada card:
- Área de imagem no topo (placeholder: gradiente colorido com ícone central
  representando o projeto — use cores diferentes para cada card)
- Badge de categoria (ex: "Web", "Mobile", "Automação", "BI")
- Título do projeto
- Descrição curta (máximo 2 linhas)
- Lista de tech badges (pills pequenos)
- Linha de ações: ícone de link externo (se tiver URL) + ícone de código
  (se tiver repositório) — para projetos sem link público, exibir
  texto "Projeto privado" em cor suave

### PROJETOS A EXIBIR

PROJETO 1 (CARD DESTAQUE — 2 colunas):
  Categoria: Web
  Título: "Portal de Notícias — ifronteira.com"
  Descrição: "Portal completo de notícias e blogs com espaço publicitário,
  banners rotativos, SEO avançado e integração com Google Analytics."
  Techs: PHP, JavaScript, MySQL, CKEditor, Google Analytics
  Link externo: https://ifronteira.com
  Repositório: privado

PROJETO 2:
  Categoria: Mobile
  Título: "App de Rádio — Android & iOS"
  Descrição: "Aplicativo com rádio ao vivo, lives e Server-Driven UI
  para atualização remota sem publicação nas lojas."
  Techs: Flutter, Firebase, PHP, YouTube API
  Links: privado

PROJETO 3:
  Categoria: Automação
  Título: "Automação YouTube → Portal"
  Descrição: "Script que detecta novos vídeos no YouTube e publica
  automaticamente no portal de notícias, sem intervenção manual."
  Techs: PHP, YouTube API, MySQL
  Links: privado

PROJETO 4:
  Categoria: Broadcast / Live
  Título: "Sistema TEO — Telas ao Vivo"
  Descrição: "Telas interativas touch para jornalismo ao vivo,
  com animações e artes exibidas no ar."
  Techs: Vue.js, JavaScript, CSS Animations
  Links: privado

PROJETO 5:
  Categoria: Real-time
  Título: "Cronômetro Sincronizado — Debate Político"
  Descrição: "Sistema de cronômetro real-time via WebSocket, com
  sincronização perfeita entre múltiplas telas simultâneas."
  Techs: Node.js, WebSocket, JavaScript
  Links: privado

PROJETO 6:
  Categoria: Automação
  Título: "Automação Voz do Brasil"
  Descrição: "Script Python que baixa automaticamente o programa
  diário da Rádio Gov para transmissão."
  Techs: Python, Web Scraping
  Links: privado

### ANIMAÇÕES
- Cards entram em stagger ao scrollar (fade + scale de 0.95 para 1)
- Hover nos cards: leve elevação (translateY: -4px) + sombra suave
- Hover na área de imagem: leve zoom no gradiente/ícone (scale: 1.05)
```

---

## SEÇÃO 6 — CONTATO

```
Crie a seção "Contato" do portfólio de Keven Rodrigo.

### ESTRUTURA GERAL
id="contato"
Label: "Vamos conversar"
Título: "Entre em contato"
Subtítulo: "Estou sempre aberto a novos desafios e colaborações.
Tem um projeto em mente? Me chama!"

### LAYOUT
Dividir em dois blocos lado a lado em desktop:
- ESQUERDA (40%): informações de contato e canais
- DIREITA (60%): formulário de contato

Em mobile: empilhar (formulário primeiro, canais abaixo).

### BLOCO ESQUERDO — CANAIS DE CONTATO
Exibir os seguintes canais como cards clicáveis (cada um abre o
respectivo link ao clicar):

CANAL 1 — E-mail
  Ícone: envelope
  Label: "E-mail"
  Valor: "[email do Keven — deixar como placeholder: seuemail@email.com]"
  Ação: abre mailto:

CANAL 2 — WhatsApp
  Ícone: WhatsApp
  Label: "WhatsApp"
  Valor: "Clique para conversar"
  Ação: abre link do WhatsApp

CANAL 3 — LinkedIn
  Ícone: LinkedIn
  Label: "LinkedIn"
  Valor: "/in/keven-Escovedo"
  Ação: abre LinkedIn

CANAL 4 — GitHub
  Ícone: GitHub
  Label: "GitHub"
  Valor: "github.com/keven"
  Ação: abre GitHub

Abaixo dos canais, adicionar uma frase de encerramento em destaque:
"Transformo ideias em código — do back-end ao mobile,
da automação ao ar."

### BLOCO DIREITO — FORMULÁRIO
O formulário deve ter os seguintes campos:

Campo 1: Nome completo (input text, obrigatório)
  Placeholder: "Qual é o seu nome?"

Campo 2: E-mail (input email, obrigatório)
  Placeholder: "Seu melhor e-mail"

Campo 3: Assunto (select, obrigatório)
  Opções:
  - "Tenho um projeto para você"
  - "Quero te contratar"
  - "Só quero bater um papo"
  - "Outro assunto"

Campo 4: Mensagem (textarea, obrigatório, min 4 linhas)
  Placeholder: "Conta mais sobre o que você tem em mente..."

Botão de envio: "Enviar mensagem" com ícone de avião de papel
  (estilo primário, width: 100%)

Após o envio (simular com JS), exibir uma mensagem de sucesso inline
abaixo do formulário:
"Mensagem enviada! Entrarei em contato em breve. 🙌"
(com transição suave de fade-in)

### VALIDAÇÃO
- Todos os campos marcados como obrigatórios devem ser validados antes
  do envio com feedback visual (borda vermelha + mensagem de erro inline)
- O campo de e-mail deve validar o formato correto
- O botão de envio deve ter estado de loading (spinner + "Enviando...")
  durante o processo

### ANIMAÇÕES
- Os cards de canal entram em stagger da esquerda (slide-in + fade)
- O formulário entra da direita (slide-in + fade)
- Focus nos inputs: leve brilho/glow na borda com a cor de destaque
```

---

## NAVBAR / HEADER (componente global)

```
Crie o componente de navegação (Navbar) do portfólio de Keven Rodrigo.

### COMPORTAMENTO
- Posição: fixed no topo (position: fixed, top: 0, width: 100%, z-index alto)
- Estado inicial: transparente ou com leve blur quando no topo da página
- Ao rolar: fundo sólido aparece com transição suave (backdrop-filter: blur
  + background com transparência)
- Altura: 64px em desktop, 56px em mobile

### CONTEÚDO
ESQUERDA: logotipo / marca pessoal
  Exibir as iniciais "KR" estilizadas como logotipo (pode ser em texto
  com fonte diferenciada ou um elemento SVG simples)
  Ao lado das iniciais, exibir "Keven Rodrigo" em texto menor (visível
  apenas em desktop)

CENTRO (desktop): links de navegação
  - Sobre
  - Tecnologias
  - Experiência
  - Projetos
  - Contato
  Cada link é uma âncora suave (smooth scroll) para a seção correspondente.
  O link da seção ativa deve ter destaque visual (cor de accent ou
  underline animado).

DIREITA:
  - Botão "Hire me" (ou "Me contrate") — leva para #contato — estilo
    primário, compacto
  - Ícone de menu hambúrguer (visível apenas em mobile)

### MOBILE MENU
Ao clicar no hambúrguer, abre um menu fullscreen (ou drawer lateral)
com os links de navegação centralizados.
O menu abre com animação suave (slide-down ou fade-in).
Ao clicar em qualquer link, o menu fecha automaticamente.

### INDICADOR DE PROGRESSO
Abaixo da navbar (ou como linha na borda inferior), adicionar uma
barra de progresso de leitura da página — linha fina na cor de
destaque que avança conforme o usuário rola a página.
```

---

## FOOTER (componente global)

```
Crie o Footer do portfólio de Keven Rodrigo.

### CONTEÚDO
Linha 1: logotipo/iniciais "KR" centralizado
Linha 2: frase de encerramento:
  "Transformo ideias em código — do back-end ao mobile, da automação ao ar."
Linha 3: links sociais (GitHub, LinkedIn, WhatsApp) — ícones, centralizados
Linha 4: copyright:
  "© 2025 Keven Rodrigo. Desenvolvido com 💙 e muito café."

### ESTILO
Fundo levemente diferente do restante da página (um tom mais escuro
ou com leve separação visual).
Compacto, sem excesso de informação — o footer deve ser limpo e elegante.
```

---

## OBSERVAÇÕES TÉCNICAS GERAIS

```
Para todas as seções, observe:

1. PERFORMANCE
   - Lazy loading em imagens e vídeo (quando possível)
   - Animações usando transform e opacity (não layout properties)
   - Intersection Observer para ativar animações apenas quando visíveis
   - Sem animações em dispositivos com prefers-reduced-motion

2. ACESSIBILIDADE
   - Tags semânticas corretas (section, article, nav, main, header, footer)
   - Alt text em todas as imagens
   - Aria-labels em botões de ícone
   - Foco visível e navegação por teclado funcional
   - Contraste de cores adequado (mínimo WCAG AA)

3. SEO
   - Meta tags básicas (title, description, OG tags) no <head>
   - Heading hierarchy correta (h1 único, h2 por seção, h3 nos cards)
   - Structured data básico (Person schema) no <head>

4. RESPONSIVIDADE
   - Mobile-first
   - Breakpoints: 480px (sm), 768px (md), 1024px (lg), 1280px (xl)
   - Testar em iPhone SE (375px) e telas 4K (2560px+)
```
