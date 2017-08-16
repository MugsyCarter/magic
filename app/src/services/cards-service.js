cardsService.$inject = ['$http', 'apiUrl'];

export default function cardsService($http, apiUrl) {
    return {
        getAllCards(){
            	return $http.get(`${apiUrl}`)
                .then(res=> res.data);
        },
  
        getSet(set){
            	return $http.get('https://api.magicthegathering.io/v1/sets/' + set)
                .then(res=> res.data);
        }

    };
}
