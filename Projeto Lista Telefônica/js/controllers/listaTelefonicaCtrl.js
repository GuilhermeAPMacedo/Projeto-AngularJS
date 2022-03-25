angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function($scope,contatos,operadoras,serialGenerator,contatosAPI,$filter){
    $scope.app = $filter('upper')("Lista Telefonica");
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;
    var init = function(){
        calcularImpostos($scope.contatos)
        generateSerial($scope.contatos)
    }

    var calcularImpostos = function(contatos){
        Array.from(contatos).forEach(function(contato){
            contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco)
        })
    }
    var generateSerial = function(contatos){
            Array.from(contatos).forEach(function(item) {
                item.serial = serialGenerator.generate()
            });
    };    
    $scope.apagarContato = function(contatos){
        $scope.contatos = contatos.filter(function (contato){            
            if(!contato.selecionado) return contato
        })
        contatosAPI.deleteContatos();
        for(contato of $scope.contatos){
            contatosAPI.saveContato(contato);
        }
        $scope.verificarContatoSelecionado($scope.contatos);
    }
    $scope.verificarContatoSelecionado = function(contatos){
        $scope.hasContatoSelecionado = contatos.some(function(contato){
            return contato.selecionado;
        })
    }
    $scope.ordenarPor = function(ordem){
        $scope.ordenarCriterio = ordem;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }
    var calcularImposto = function(preco){
        var imposto = 1.2;
        return preco * imposto
    }
    init()
});