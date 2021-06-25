import '/assets/frontJS/vue.js';

new Vue({
    el: '#main',
    data(){
        return{
            form:{
                town: 'Кострома',
                marka: 'Hyndai',
                img: ''
            },
            allCar: []
        }
    },
    methods:{
        async check(){
            let color = null;
            let town = document.getElementById('selectTown').value;
            let marka = document.getElementById('selectMarka').value;
            let massivRadio = document.getElementsByName('radio');

            for (let i = 0; i < massivRadio.length; i++ ){
                if(massivRadio[i].checked){
                    color = massivRadio[i].value;
                }
            }

            if(town == 0){
                town = 0;
            }
            if(town == 1){
                town = 'Кострома';
            }
            if(town == 2){
                town = 'Москва';
            }
            if(town == 3){
                town = 'Ярославль';
            }
            if(marka == 0){
                marka = 0;
            }
            if(marka == 1){
                marka = 'Hyndai';
            }
            if(marka == 2){
                marka = 'Opel';
            }
            if(marka == 3){
                marka = 'Lada';
            }
            if(color == 0){
                color = 0;
            }
            if(color == 1){
                color = 'Красный';
            }
            if(color == 2){
                color = 'Белый';
            }
            if(color == 3){
                color = 'Черный';
            }
            if(color == 4){
                color = 'Желтый';
            }
            if(color == 5){
                color = 'Синий';
            }

            this.allCar = await request('/select', 'POST', {
                town: town,
                color: color,
                marka: marka
            });
        }
    },
    async mounted(){
        this.allCar = await request('/hello', 'GET')
    }
});


async function request(url, method = "GET", data = null){
    try{
        let headers = {};
        let body;
        if(data){
            headers['Content-type'] = 'application/json';
            body = JSON.stringify(data);
        }
        const response = await fetch(url, {
            method,
            headers,
            body
        });
        return await response.json();
    } catch (e) {
        console.warn('Error:', e.message);
    }
}
