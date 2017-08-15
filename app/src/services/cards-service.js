shuffleService.$inject = ['$http', 'apiUrl'];

export default function cardsService($http, apiUrl) {
    return {
        getAllCards(){
            	return $http.get(`${apiUrl}`)
                .then(res=> res.data);
        }
    };
}
