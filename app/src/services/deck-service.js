cardsService.$inject = ['$http', 'apiUrl'];

export default function cardsService($http, apiUrl) {
    return {
        getDeck(){
            	return $http.get(`${apiUrl}`+ '/?set=soi&&colors=green')
                .then(res=> res.data);
        }
    };
}