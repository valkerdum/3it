(function(){
    angular
        .module( 'Tres.template')
        .factory('factory3it', factory3it);

        factory3it.$inject = [
        '$http',
        'URI_POST_MAIL'];

    function factory3it(
        $http,
        URI_POST_MAIL){

        function sendMail(data){
            return $http({
                url: URI_POST_MAIL,
                method: 'POST',
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        return{
            sendMail:sendMail
        };
    }
})();