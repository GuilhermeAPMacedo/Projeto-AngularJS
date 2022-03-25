angular.module("listaTelefonica").factory("contatosAPI",function($http){
    var _getContatos = function(){
        return $http.get("http://localhost:8000/contatos");
    }
    var _deleteContatos = function(){
        return $http.delete("http://localhost:8000/contatos");
    }
    var _getContato = function(id){
        return $http.get("http://localhost:8000/contatos/" + id);
    }
    var _saveContatos = function(contato){
        return $http.post("http://localhost:8000/contatos",contato);
    }
    return{
        getContatos: _getContatos,
        getContato: _getContato,
        deleteContatos: _deleteContatos,
        saveContato: _saveContatos
    }
});