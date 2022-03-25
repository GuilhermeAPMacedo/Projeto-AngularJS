angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function($scope,contatos,operadoras,serialGenerator){
    $scope.app = "Lista Telefonica";
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;

    var generateSerial = function(contatos){
            Array.from(contatos).forEach(function(item) {
                item.serial = serialGenerator.generate()
            });
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
    generateSerial($scope.contatos)
});