angular.module("listaTelefonica",["ngMessages"]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function($scope){
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome:"Pedro",telefone:"99998888", operadora:{nome: "Vivo"},cor:{codigo: "Yellow"}},
        {nome:"Maria",telefone:"88888888", operadora:{nome: "Tim"},cor:{codigo: "blue"}},
        {nome:"João",telefone:"88887777", operadora:{nome: "Claro"},cor:{codigo: "Green"}}
    ];
    $scope.operadoras = [
        {nome:"Oi",codigo:14,categoria:"Celular"},
        {nome:"Vivo",codigo:15,categoria:"Celular"},
        {nome:"Tim",codigo:16,categoria:"Celular"},
        {nome:"Claro",codigo:17,categoria:"Fixo"},
        {nome:"Net",codigo:18,categoria:"Fixo"}
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
});