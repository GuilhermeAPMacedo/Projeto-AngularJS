angular.module("listaTelefonica").directive("uiAlert",function(){
    return{
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "A",// A- Restringe ao atributo, E - ao elemento, C - a classe, M - ao comentário
        scope: {
            title: "@",
            message: "="
        },//Comunica entre a diretiva e onde está sendo aplicada alterando o escopo
        transclude: true
    };
});