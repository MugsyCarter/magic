cardsService.$inject = ['$http', 'apiUrl'];

export default function cardsService($http, apiUrl) {
    return {
        getDeck(){
            	return $http.get(`${apiUrl}`+ '/?set=soi$$color=green')
                .then(res=> res.data);
        }
    };
}