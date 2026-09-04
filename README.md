# 📚 Atividades SENAI - Arquitetura em Camadas

Repositório dedicado ao armazenamento e organização das atividades práticas desenvolvidas durante o curso do **SENAI**, com foco na aplicação da **Arquitetura em Camadas** (Model-View-Controller, N-Camadas, ou separação entre Apresentação, Regra de Negócio e Persistência).

---

## 🛠️ Tecnologias e Ferramentas

As atividades deste repositório foram desenvolvidas utilizando as seguintes tecnologias:
* **Linguagem:** [Ex: Java]
* **Banco de Dados:** [Ex: MySQL]
* **Ferramenta de Banco:** [Ex: MySQL Workbench]
* **IDE/Editor:** [VS Code]

---

## 📂 Estrutura do Projeto

O projeto segue os princípios da separação de responsabilidades (Arquitetura em Camadas), tipicamente dividida da seguinte forma:

```text
Atividades_Senai_camadas/
│
├── 📁 src/
│   ├── 📁 1. Conexao / DAO (Persistência)        # Comunicação direta com o Banco de Dados
│   ├── 📁 2. Model / Entidades (Domínio)        # Classes de objetos/regras de negócio básicas
│   ├── 📁 3. Controller / View (Apresentação)   # Interfaces, telas ou rotas de interação
│
├── 📁 docs/                                     # Documentações, diagramas ou DERs
└── 📄 README.md                                 # Documentação do repositório