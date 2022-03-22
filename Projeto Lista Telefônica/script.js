angular.module("listaTelefonica",["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function($scope, $filter){
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome:$filter('uppercase')("Pedro"),telefone:"9999-8888", data: new Date(), operadora:{nome: "Vivo"},cor:{codigo: "Yellow"}},
        {nome:$filter('lowercase')("Maria"),telefone:"8888-8888", data: new Date(), operadora:{nome: "Tim"},cor:{codigo: "blue"}},
        {nome:"João",telefone:"8888-7777", data: new Date(), operadora:{nome: "Claro"},cor:{codigo: "Green"}}
    ];
    $scope.operadoras = [
        {nome:"Oi",codigo:14,categoria:"Celular", preco:"2"},
        {nome:"Vivo",codigo:15,categoria:"Celular", preco:"3"},
        {nome:"Tim",codigo:16,categoria:"Celular", preco:"1"},
        {nome:"Claro",codigo:17,categoria:"Fixo", preco:"2"},
        {nome:"Net",codigo:18,categoria:"Fixo", preco:"3"}
    ];
    $scope.cores = [
        {nome:"Azul",codigo:"#0000FF"},
        {nome:"Verde",codigo:"#008000"},
        {nome:"Vermelho",codigo:"#FF0000"},
        {nome:"Amarelo",codigo:"#FFFF00"},
        {nome:"Preto",codigo:"#000000"}
    ];
    $scope.adicionarContato = function(contato){
        console.log(contato)
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.apagarContato = function(contatos){
        $scope.contatos = contatos.filter(function (contato){            
            if(!contato.selecionado) return contato
        })
    }
    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        })
    }
    $scope.ordenarPor = function(ordem){
        $scope.ordenarCriterio = ordem;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }
});