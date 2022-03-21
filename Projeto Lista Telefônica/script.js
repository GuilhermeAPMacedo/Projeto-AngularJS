angular.module("listaTelefonica",[]);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function($scope){
    $scope.app = "Lista Telefonica"
    $scope.contatos = [
        {nome:"Pedro",telefone:"99998888"},
        {nome:"Maria",telefone:"88888888"},
        {nome:"João",telefone:"88887777"}
    ]
    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    }
});