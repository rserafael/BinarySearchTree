# Binary Search Tree

# Indice
- [Descrição](https://github.com/rserafael/BinarySearchTree#descrição)
- [Instalação](https://github.com/rserafael/BinarySearchTree#instalação)
- [Teste](https://github.com/rserafael/BinarySearchTree#teste)
- [Documentação da API Binary Search Tree](https://github.com/rserafael/BinarySearchTree#documentação-da-api-binarysearchtree)
- [Documentação da API Node](https://github.com/rserafael/BinarySearchTree#documentação-da-api-node)

# Descrição 
  Este repositório contém duas classes principais. A primeira é a classe Node cujas instâncias servem de modelagem para os nós de uma árvore binária. Já a segunda é a própria classe BinarySearchTree que modela a árvore em si.
  
# Instalação 

 O manual de instalação tem o intuito de preparar o ambiente do sistema, incluindo o compilador Babel para executar o javascript conforme a atualização do ecmascript 2015.

Para ter acesso ao codigo basta fazer um git clone: 
	https://github.com/rserafael/BinarySearchTree.git/
  
O proximo passo é configurar e instalar as dependências e bibliotecas utilizadas:
   `npm install --save`
   
# Teste
 para execura o teste basta abrir no terminal a pasta onde está o arquivo package.json e digitar:
   `mocha`

# Documentação da API BinarySearchTree

## Descrição

  Uma árvore binária de busca para nodejs.
  
## Atributos

### root

  Nó raiz da árvore.
     
### walkArray
  
  Lista que armazena as chaves na ordem da coletagem do percurso. Não deve ser acessada diretamente apenas através do método 
     
## Constructor
  
  O construtor da árvore binária exige um nó raiz de inicialização. A configuração da raiz é feita através da chamada do método setRoot.
  Além disso, é instaciada uma lista que vazia onde serão armazenadas as chaves dos nós durante o método inorderWalk.

## setRoot

  Este método configura a raiz da árvore com um objeto instância da clase Node. Caso não seja passado ou passado algum objeto de outro tipo ocorre uma exceção do tipo TypeError.
  Como se trata de uma raiz o parente deste nó é configurado como nulo.
 
## hasRoot

  Este método verifica se a árvore têm raiz ou está vazia. Retorna um objeto do tipo booleano, ou seja, true ou false.
  
## Insert

  Este método insere novas chaves na árvore. O argumento deve ser um objecto numérico, caso contrário ocorre um TypeError exception. O algorítmo de inserção segue a propriedade da árvore de pesquisa binária.
 
## Search

  Método de procura de chave. Se encotra a chave retorna o nó, caso contrário retorna null.
 
 
## getInorderWalk

  Método que retorna uma lista ordenada de acordo com um percurso ("walk") de árvore em ordem, no qual a raiz está no meio da lista.
 
## minimum & maximum
  Os dois métodos retornam o nó que contém a menor e a maior chave respectivamente. Caso a árvore esteja vazia retorna-se null.
  
## delete
  Deleta o nó que contém a chave determinada. A chave precisa ser um objeto numérico e se o nó for encontrado será deletado da árvore mantendo, porém, as propriedades da árvore.
 

# Documentação da API Node

## Descrição

  Modelagem de um nó para estruturas em árvores genéricas.
  
## Atributos

### key

  Chave numérica do nó.
     
### Parent
  
  Nó pai.
  
### Left
  
  Nó filho da esquerda.
  
### Right
  
  Nó filho da direita.

## Constructor
  O constructor da árvore exige ao menos a chave para inicializá-la. A chave precisa ser um objeto numérico e por tanto, o nó só pode conter números.
  Além da chave, o construtor inicializa o parente e os filhos, tanto da direita quanto da esquerda. O valor padrão é null, e fora isso só é aceito objetos instâncias da classe Node.
  
## Setters
  Métodos de configuração dos atributos.
  
### setKey
  Configura a chave que dever ser um número.
  
### setParent
  Configura o nó pai que dever ser um objeto do tipo Node.
  
### setLeft
  Configura o nó filho da esquerda que dever ser um objeto do tipo Node.
  
### setRight
  Configura o nó filho da direita que dever ser um objeto do tipo Node.
	
## Getters
  Métodos de acesso aos atributos da instância. Os mesmo podem ser acessados diretamente já que o javascript não contém mecanismos de torná-los privados
  
### getKey
  Retorna da chave do nó.
  
### getParent
  Retorna o nó pai ou nulo se não existir.
  
### getLeft
  Retorna o nó filho da esquerda ou nulo se não existir.
 
### getRight
  Retorna o nó filho da direita ou nulo se não existir.

### getParentKey 
  Retorna a chave do nó pai ou nulo se não existir.
  
### getLeftKey
  Retorna a chave do nó filho da esquerda ou nulo se não existir.
  
### getRightKey
  Retorna a chave do nó filho da direita ou nulo se não existir.
  
### toString
  Retorna uma string com o nome da classe seguido dos atributos da classe no formato JSON. 
  
