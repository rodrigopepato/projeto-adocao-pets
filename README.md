# Sistema de Gestão para Adoção de Pets e Arrecadação Comercial

Sistema acadêmico desenvolvido para auxiliar ONGs e instituições de proteção animal no gerenciamento de adoções de pets, controle de produtos, vendas e arrecadação financeira.

---

## 📌 Sobre o Projeto

O projeto tem como objetivo unir funcionalidades de adoção de pets com um sistema comercial para venda de produtos utilizados na arrecadação de recursos para ONGs e instituições de proteção animal.

O sistema está sendo desenvolvido utilizando Django, Django REST Framework e MySQL, seguindo arquitetura em camadas e boas práticas de desenvolvimento backend.

---

## 🚀 Funcionalidades Implementadas

### 👥 Gestão de Clientes
- Cadastro de clientes
- Edição de clientes
- Exclusão de clientes
- Listagem de clientes

### 📦 Gestão de Produtos
- Cadastro de produtos
- Controle de estoque
- Controle de estoque mínimo
- Listagem de produtos

### 💰 Registro de Vendas
- Registro de vendas com múltiplos itens
- Cálculo automático de subtotal
- Cálculo automático do valor total da venda
- Relacionamento entre cliente e venda

### 📉 Controle de Estoque
- Baixa automática de estoque após venda
- Validação de estoque insuficiente

### 📊 Relatórios
- Relatório de vendas por período
- Total de vendas
- Quantidade de vendas
- Listagem detalhada das vendas

---

## 🛠️ Tecnologias Utilizadas

- Python
- Django
- Django REST Framework
- MySQL
- Git
- GitHub
- MySQL Workbench

---

## 🏗️ Estrutura do Projeto

```txt
projeto-adocao-pets/
│
├── backend/
│   ├── clientes/
│   ├── produtos/
│   ├── vendas/
│   ├── usuarios/
│   ├── config/
│   ├── manage.py
│   └── requirements.txt
│
├── docs/
│
└── README.md
````

---

## 🔗 Endpoints da API

### Clientes

```http
GET     /api/clientes/
POST    /api/clientes/
PUT     /api/clientes/{id}/
DELETE  /api/clientes/{id}/
```

### Produtos

```http
GET     /api/produtos/
POST    /api/produtos/
PUT     /api/produtos/{id}/
DELETE  /api/produtos/{id}/
```

### Vendas

```http
GET     /api/vendas/
POST    /api/vendas/
```

### Relatórios

```http
GET /api/relatorios/vendas/
```

Filtro por período:

```http
GET /api/relatorios/vendas/?data_inicio=2026-05-01&data_fim=2026-05-31
```

---

## 🗄️ Banco de Dados

O banco de dados foi modelado utilizando MySQL Workbench e integrado ao Django ORM.

### Principais entidades

* clientes
* produtos
* vendas
* itens_venda
* usuarios
* pets
* adocoes

---

## ▶️ Como Executar o Projeto

### Clone o repositório

```bash
git clone https://github.com/rodrigopepato/projeto-adocao-pets.git
```

### Entre na pasta backend

```bash
cd backend
```

### Crie o ambiente virtual

```bash
python -m venv venv
```

### Ative o ambiente virtual

#### Windows

```bash
source venv/Scripts/activate
```

### Instale as dependências

```bash
pip install -r requirements.txt
```

### Execute as migrations

```bash
python manage.py migrate
```

### Inicie o servidor

```bash
python manage.py runserver
```

---

## 👨‍💻 Integrante

* Rodrigo Pepato
  RA: 22250186

---

## 🚧 Status do Projeto

Entrega 2 em desenvolvimento.


