# AGENTS.md — Digi6 Soluções Digitais

Este arquivo define como qualquer agente ou assistente de IA deve se comportar ao trabalhar com os arquivos desta base de conhecimento. Leia este arquivo antes de qualquer tarefa.

---

## Sobre a empresa

Você está trabalhando com os ativos digitais da **Digi6 Soluções Digitais**, uma software house estratégica especializada em transformar oportunidades de negócio em produtos digitais, SaaS, automações e soluções com IA.

Para entender o que a Digi6 faz e para quem, leia `dna/empresa/EMPRESA.md`.

---

## Estrutura da base de conhecimento

```
empresa_OS/
├── dna/
│   ├── ativos/                  → logos, fontes, fotos, branding (arquivos binários)
│   ├── empresa/                 → contexto central da empresa (SEMPRE leia antes de qualquer tarefa)
│   │   ├── EMPRESA.md           → o que faz, para quem, números, missão, visão, valores
│   │   ├── TIME.md              → quem é a equipe e quem decide o quê
│   │   ├── VOZ.md               → como a empresa fala e escreve (obrigatório para qualquer comunicação)
│   │   ├── DESIGN.md            → cores, fontes, regras de logo
│   │   └── POSICIONAMENTO.md    → como a Digi6 se posiciona no mercado
│   ├── perfil-de-cliente-ideal/
│   │   ├── ICPS.md              → quatro perfis de cliente ideal da Digi6
│   │   ├── PERSONAS.md          → três personas detalhadas dos ICPs
│   │   ├── DUALIDADE.md         → problemas vs desejos dos ICPs
│   │   ├── PROBLEMAS-PRINCIPAIS.md → cinco principais problemas dos ICPs
│   │   └── URGENCIAS-OCULTAS.md → cinco urgências que os ICPs sentem mas não dizem
│   └── produtos/
│       ├── produto-a/           → MVPs, SaaS e Produtos Digitais (a partir de R$ 15.000)
│       ├── produto-b/           → Soluções com Inteligência Artificial (a partir de R$ 20.000)
│       ├── produto-c/           → Evolução Contínua e Sustentação (a partir de R$ 8.000/mês)
│       └── produto-d/           → Consultoria Estratégica de Produto e IA (a partir de R$ 20.000)
├── clientes/                    → histórico e base de clientes (popular conforme o uso)
├── operacao/
│   └── marketing/
│       └── conteudo/
│           └── plataforma-a/
│               ├── ideias/      → banco de ideias de conteúdo
│               ├── criacoes/
│               │   └── skills/  → skills para criação de conteúdo por fase
│               │       ├── DESCOBERTA.md
│               │       ├── RELACIONAMENTO.md
│               │       └── PRONTIDAO.md
│               ├── aprovacoes/  → conteúdos aprovados aguardando publicação
│               ├── agendadas/   → conteúdos agendados
│               └── publicadas/  → histórico de publicações
└── ferramentas/
    ├── apps/        → aplicativos construídos
    ├── automacoes/  → automações construídas
    ├── integracoes/ → integrações construídas
    └── mcps/        → conexões MCP (mcp.json)
```

Cada pasta de produto contém: `RELEASE.md`, `PROBLEMA.md`, `SOLUCOES.md`, `BENEFICIOS.md`, `TRANSFORMACOES.md`, `CRENCAS.md`, `DEPOIMENTOS.md`, `OBJECOES.md`, `OFERTAS.md`.

---

## Regras de comportamento

### 1. Leia o contexto antes de executar
Antes de qualquer tarefa, leia os arquivos em `dna/empresa/`. Mínimo obrigatório: `EMPRESA.md`, `VOZ.md` e `POSICIONAMENTO.md`.

### 2. Use a voz correta em toda comunicação
As palavras proibidas e as preferidas estão em `dna/empresa/VOZ.md`. **Jamais use as palavras da lista "NUNCA usa"**, mesmo que pareçam naturais. A comunicação da Digi6 é profissional, objetiva e próxima — sem jargões corporativos.

### 3. Identifique o ICP antes de criar qualquer conteúdo
Toda comunicação deve ser direcionada a um perfil de cliente específico. Os ICPs estão em `dna/perfil-de-cliente-ideal/ICPS.md` e as personas em `dna/perfil-de-cliente-ideal/PERSONAS.md`.

### 4. Respeite o posicionamento
A Digi6 **não vende horas de desenvolvimento**. Vende resultado, transformação e valor de negócio. Toda comunicação deve reforçar esse posicionamento — leia `dna/empresa/POSICIONAMENTO.md`.

### 5. Para conteúdo de marketing, use a skill da fase correta
Identifique a fase do público (descoberta, relacionamento ou prontidão) e use a skill correspondente em `operacao/marketing/conteudo/plataforma-a/criacoes/skills/`.

### 6. Para tarefas relacionadas a produtos, consulte o produto certo
Cada produto tem sua pasta com problema, soluções, benefícios, transformações, crenças, depoimentos, objeções e ofertas. Use esses arquivos para qualquer comunicação sobre o produto.

### 7. Nunca invente onde está marcado "A definir"
Se um arquivo contiver `> A definir`, informe ao usuário que aquele campo precisa ser preenchido com dados reais antes de usar. Não substitua com conteúdo inventado.

---

## Prioridade de leitura por tipo de tarefa

| Tarefa | Arquivos prioritários |
|--------|----------------------|
| Criar conteúdo de marketing | `VOZ.md` + `ICPS.md` + `PERSONAS.md` + skill da fase |
| Escrever copy de vendas | `POSICIONAMENTO.md` + pasta do produto relevante + `OBJECOES.md` |
| Responder objeções | `OBJECOES.md` do produto + `DUALIDADE.md` + `URGENCIAS-OCULTAS.md` |
| Criar proposta comercial | `RELEASE.md` + `PROBLEMA.md` + `SOLUCOES.md` + `BENEFICIOS.md` |
| Qualquer comunicação externa | `VOZ.md` (obrigatório em todos os casos) |
| Entender o cliente | `ICPS.md` + `PERSONAS.md` + `PROBLEMAS-PRINCIPAIS.md` |

---

## Sobre decisões e autonomia

Todas as decisões estratégicas passam por **Serge Rehem** (Founder & CEO).

Consulte `dna/empresa/TIME.md` para entender quem decide o quê na Digi6.

---

*Este arquivo deve ser lido por todo agente ou assistente de IA ao iniciar qualquer sessão de trabalho com a Digi6.*
