# Contexto
Este e um sistema de pesquisa que mostra o APOD do dia e mostrar:
1- Título, data, mídia e explicação.
2- Permitir escolher outra data e exibir o APOD correspondente.
3- Funcionar quando o conteúdo for imagem e quando for vídeo.
4- Informar ao usuário quando estiver carregando e quando ocorrer um erro.
5- Funcionar bem no celular e no computador

# Objetivo
Objetivo e alcançar e facilitar as pesqueisar e ficar atualições e informações sobre as descobertas da nasa.
Lançamentos, foguetes, conquistas, origin, histirias, APOD e conhecimento.

# Tecnologias

# Frontend
Para o Frontend e usa html, css e javascript moderno e o fremework VueJS.

# Backend
Para o Backend e usado node com javascript.

# Banco de dados
Para o banco de dados e usado o mysql. porem em ambiente local usamos o mysql em docker.

# Arquitetura
o frontend e backend sao criados em diretorios separados, e ligados por API.
A criaçao do backend utiliza o TDD (Test-drive-development).

# Para criar as features
Utilize commit semantico.
Se as instruçoes de feature nao estiverem claras questione ao inves de supor.

# Guia de estilo
## Paleta de cores

/* CSS HEX */
Background     #0B0F1A
Card           #16213E
Card Border    #243B55

Primary        #FC3D21
Primary Hover  #FF563D

Accent         #00B4D8

Text           #FFFFFF
Subtext        #B8C1EC

Success        #00E676
Warning        #FFA500
Error          #FF4D4D

# Bordas e informações dos botoes e campos
## Botão principal
background: #FC3D21;
color: white;
border: none;
### Hover
background: #FF563D;

## Botão secundário
background: transparent;
border: 1px solid #00B4D8;
color: #00B4D8;

## Campos de pesquisa
background: #16213E;
border: 1px solid #2A4365;
color: white;
border-radius: 8px;

## Campo obrigatório
border: 1px solid #2A4365;

### Campo obrigatório vazio
border: 2px solid #FFA500;

## Campo com erro
border: 2px solid #FF4D4D;
### Mensagem
color: #FF6B6B;
font-size: 14px;

## Campo preenchido corretamente
border: 2px solid #00E676;

## Campo resultado
background: #16213E;
border: 1px solid #243B55;
border-radius: 12px;
box-shadow: 0 4px 12px rgba(0,0,0,.2);

# Fontes de Texto
Fonte dos títulos: https://fonts.google.com/specimen/Orbitron?selection.family=Redaction&query=Orbitron&preview.script=Latn

Fonte dos textos: https://fonts.google.com/specimen/Inter?selection.family=Redaction&query=Inter

# Detalhes Extras se for necessario
Em formularios os campos obrigatorios devem ter bordas vermelhas com 5px, e texto obriatorio acima do botao.
Links devem mudar de cor quando o mouse esta sobre.


# Documentaçao e informaçoes de como funciona
Documente como funciona o site e como usar ele no README.md

# API
A API vai ta no .env

# Acessibilidade
Siga os padroes de acessibilidade do WCAG 2.2

