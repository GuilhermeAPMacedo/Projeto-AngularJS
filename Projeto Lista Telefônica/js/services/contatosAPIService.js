angular.module("listaTelefonica").factory("contatosAPI",function($http){
    var _getContatos = function(){
        return $http.get("LinkAPI");
    }
    var _saveContatos = function(contato){
        return $http.post("LinkAPI",contato);
    }
    return{
        getContatos: _getContatos,
        saveContato: _saveContatos
    }
});