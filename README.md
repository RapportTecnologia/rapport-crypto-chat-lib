![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Rapport%20Crypto%20Chat%20SDK&fontSize=36&fontAlignY=35&animation=twinkling)

![visitors](https://visitor-badge.laobi.icu/badge?page_id=RapportTecnologia.Rapport_Blockchain_Chat.crypto-chat-lib_readme)
[![License: LGPLv3](https://img.shields.io/badge/License-LGPLv3-blue.svg)](LICENSE)
![Language: Portuguese](https://img.shields.io/badge/Language-Portuguese-brightgreen.svg)
![Status](https://img.shields.io/badge/Status-Ongoing-yellow)
[![GitHub Issues](https://img.shields.io/github/issues/RapportTecnologia/Rapport_Blockchain_Chat)](https://github.com/RapportTecnologia/Rapport_Blockchain_Chat/issues)

# Rapport Crypto Chat SDK

Biblioteca TypeScript compartilhada para implementação de clientes compatíveis com o protocolo Rapport Crypto Chat. O pacote evita acoplamento de consumidores a React Native ou Node e define contratos portáveis para identidade, mensagens, armazenamento, transporte, revisão financeira e validação de endpoints.

## Consumidores atuais

- `rapport-crypto-p2p-chat`: dApp móvel React Native/Expo.
- `AgenticSpace/Harness`: agente local Node.js integrado ao relay e ao Hub.
- Clientes de terceiros podem implementar os mesmos contratos sem reutilizar componentes visuais do aplicativo móvel.

## Instalação local

```sh
npm install ../rapport-crypto-chat-lib
```

Para publicação, o pacote deve ser versionado e distribuído por registry confiável; consumidores não devem importar arquivos internos de outro subprojeto.

## API pública inicial

- `CryptoChatIdentity`
- `CryptoChatMessage`
- `CryptoChatStorage`
- `CryptoChatTransport`
- `FinancialExecutionReview`
- `ExplicitConfirmation`
- `assertSecureServiceUrl`

A migração das implementações concretas de criptografia, sessão E2EE, handshake, repositório e relay será incremental. Até essa migração terminar, interfaces públicas novas devem nascer nesta biblioteca e ser consumidas pelos clientes, evitando nova duplicação.

## Desenvolvimento

```sh
npm run typecheck
npm test
npm run build
npm audit --omit=dev
```

## Segurança

A biblioteca não recebe seed, mnemonic ou chave privada como configuração. Implementações de wallet permanecem nos cofres específicos da plataforma. URLs de serviços devem usar HTTPS sem credenciais, query string ou fragmento. Confirmações financeiras são callbacks explícitos e não podem ser inferidas de mensagens de chat.

## Changelog

| Data | Versão | Descrição |
|---|---|---|
| 2026-10-12 | 0.1.0 | API pública inicial e adoção pelo aplicativo móvel e Harness. |

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer&animation=twinkling)
