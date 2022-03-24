angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function($scope, $filter,contatosAPI,operadorasAPI,serialGenerator){
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome:$filter('uppercase')("Pedro augusto"),serial: serialGenerator.generate(),telefone:"9999-8888", data: new Date(), operadora:{nome: "Vivo"},cor:{codigo: "Yellow"}},
        {nome:$filter('lowercase')("Maria da CONCEIçAO"),serial: serialGenerator.generate(),telefone:"8888-8888", data: new Date(), operadora:{nome: "Tim"},cor:{codigo: "blue"}},
        {nome:"João da penha rodrigues",serial: serialGenerator.generate(),telefone:"8888-7777", data: new Date(), operadora:{nome: "Claro"},cor:{codigo: "Green"}}
    ];
    // var carregaContatos = function(){
    //     contatosAPI.getContatos().success(function(data){
    //         data.forEach(function(item){
    //             item.serial = serialGenerator.generate()
    //         });
    //         $scope.contatos = data;
    //     }).error(funtion(data){
    //         $scope.error = "Não foi possível carregar os dados";
    //     });
    // };
    // var carregarOperadoras = function(){
    //     operadorasAPI.getOperadoras().success(function(data){
    //         $scope.operadoras = data;
    //     })
    // }
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
        contato.data = new Date();
        // contatosAPI.saveContato(contato).success(function(data){
        //     delete $scope.contato;
        //     $scope.contatoForm.$setPristine();
        //     carregaContatos();
        // })
        contato.serial = serialGenerator.generate();
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