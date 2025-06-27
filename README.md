# k6-performance

Este projeto foi desenvolvido para praticar a criação de script de testes de performance usando o Grafana k6.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Git**: será necessário para clonar o repositório. Você pode baixar em [git-scm.com](https://git-scm.com/downloads).
- **k6**: será necessário para executar os testes de performance. Instale seguindo as instruções em [Grafana k6](https://grafana.com/docs/k6/latest/set-up/install-k6/).

## Clonar o repositório

Para clonar o projeto, abra o terminal no diretório desejado e execute o seguinte comando:

```bash
https://github.com/jhonyvill/k6-performance.git
```

## Execução local dos testes

Para executar localmente os testes de performance, você deve primeiro consultar no [github ServeRest](https://github.com/serverest/serverest) como executar localmente a API.

Com a API em execução localmente, abra o terminal no diretório dos scripts de teste(k6-performance/tests) e execute o teste de sua preferência:

Executar teste de carga:

```bash
k6 run load-test.js
```

Executar teste de pico:

```bash
k6 run spike-test.js
```

Executar teste de stress:

```bash
k6 run stress-test.js
```

## Métricas

O relatório de cada execução contendo as métricas do teste será apresentado no terminal, mas também será armazenado em arquivo HTML no diretório "report".
