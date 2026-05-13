
# Sistema de Gestão para Adoção de Pets e Arrecadação Comercial

Sistema acadêmico desenvolvido para auxiliar ONGs e instituições de proteção animal no gerenciamento de adoções de pets, controle comercial de produtos, estoque, vendas e relatórios administrativos.

---

## 📌 Sobre o Projeto

O projeto tem como objetivo unir o gerenciamento de adoções de animais com funcionalidades comerciais utilizadas para arrecadação de recursos por meio da venda de produtos como ração, brinquedos, acessórios e itens personalizados da ONG.

A aplicação será desenvolvida utilizando arquitetura em camadas, API REST, autenticação JWT, banco de dados MySQL e interface web integrada.

---

## 🚀 Funcionalidades

### 👥 Gestão de Clientes
- Cadastro de clientes/adotantes
- Edição e remoção de clientes
- Controle de CPF e e-mail únicos

### 🐶 Gestão de Pets
- Cadastro de pets disponíveis para adoção
- Controle de status do pet
- Registro de adoções

### 📦 Gestão de Produtos
- Cadastro de produtos
- Controle de estoque
- Controle de estoque mínimo

### 💰 Registro de Vendas
- Registro de vendas de produtos
- Cálculo automático do valor total
- Controle automático de estoque

### 🔐 Autenticação e Segurança
- Login com autenticação JWT
- Controle de acesso por perfil
- Perfis ADMIN e FUNCIONARIO
- Senhas criptografadas

### 📊 Relatórios
- Relatórios de vendas por período
- Relatórios por cliente
- Relatórios administrativos

---

## 🏗️ Arquitetura do Projeto

O sistema será desenvolvido utilizando arquitetura em camadas:

- Interface Web (Frontend)
- API REST (Backend)
- Camada de Persistência
- Banco de Dados MySQL

---

## 🛠️ Tecnologias Utilizadas

- Python
- Django
- JWT Authentication
- MySQL
- GitHub
- MySQL Workbench

---

## 📁 Estrutura do Projeto

```txt
projeto-adocao-pets/
│
├── docs/
│   ├── Entrega1.pdf
│   ├── diagrama-dominio.png
│   ├── diagrama-classes.png
│   ├── diagrama-banco.png
│   └── script.sql
│
├── backend/
│
├── frontend/
│
└── README.md
````

---

## 🧩 Modelagem do Sistema

O projeto possui:

* Diagrama de Domínio
* Diagrama de Classes
* Diagrama Lógico do Banco de Dados
* Script SQL de criação do banco

Todos disponíveis na pasta `docs`.

---

## 🗄️ Banco de Dados

O banco de dados foi modelado utilizando MySQL Workbench.

### Tabelas principais

* usuarios
* clientes
* pets
* produtos
* vendas
* itens_venda
* adocoes

---

## 🎯 Objetivo Acadêmico

Projeto desenvolvido para aplicação prática de conceitos de:

* Arquitetura de Software
* Modelagem de Banco de Dados
* Programação Web
* APIs REST
* Segurança com JWT
* Versionamento com GitHub

---

## 👨‍💻 Integrantes

* Rodrigo Pepato

---

## 🚧 Status do Projeto

Em desenvolvimento — Entrega 1 concluída.

