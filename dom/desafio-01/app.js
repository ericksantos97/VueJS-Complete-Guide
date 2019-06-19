new Vue({
    el: '#desafio',
    data: {
        nome: 'Erick',
        idade: 22,
        imagem: 'https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png'
    },
    methods: {
        random: function () {
            return Math.random();
        },
    },
})