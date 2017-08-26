cardsService.$inject = ['$http', 'apiUrl'];

export default function cardsService($http, apiUrl) {
    return {
        getAllCards(){
            	return $http.get(`${apiUrl}`+ '/?set=soi')
                .then(res=> res.data);
        },
  
        getSomeCards(set, colors){
            console.log('get some cards called'+ set + colors);
            if (colors.length>0){
                console.log('got colors');
                let colorStr = '';
                let artStr = '';
                colors.forEach(function(color){
                    if (color === 'colorless'){
                        artStr = 'type=artifact';
                    }
                    else{
                        colorStr+= color + '|'; 
                    }
                });
                if (artStr.length > 1 && colorStr.length < 1){
                    return $http.get('https://api.magicthegathering.io/v1/cards/?set=' + set + '&&' + artStr)
                    .then(res=> res.data);
                }
                else if (artStr.length > 1){
                    colorStr = colorStr.substring(0, colorStr.length - 1);
                    colorStr += '&&' + artStr;
                }
            	return $http.get('https://api.magicthegathering.io/v1/cards/?set=' + set + '&&colors=' + colorStr)
                .then(res=> res.data);
            }
            else{
                return $http.get('https://api.magicthegathering.io/v1/cards/?set=' + set)
                .then(res=> res.data);
            }
        },

        getMoreCards(){

        }


    };
}
