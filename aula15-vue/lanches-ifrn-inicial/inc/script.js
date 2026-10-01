const {createApp, ref, watch} = Vue
// preciso adicionar o watch porque ele irá trabalhar com localstorage

const lancheifrn = createApp({
    setup(){

        const lanchesifrnLS = localStorage.getItem('lanches');
        //cria a variável de lista chamada 'lanches' no localstorage
        //lanches é o nome da tabela do banco de dados do navegador

        const lanches = ref(
            lanchesifrnLS  ? JSON.parse(lanchesifrnLS):
            //condição ? se sim : se não
            //JSON.parse - localstorage só recebe texto, isto é, não recebe objeto
            [{
                descricao: 'Bolo',
                ativo: true,
                imagem: 'bolo.jpg'
            },
            {
                descricao: 'Bolacha',
                ativo: false,
                imagem: 'bolacha.jpg'
            },
            {
                descricao: 'Tapioca',
                ativo: false,
                imagem: 'tapioca.jpg'
            }
        ])

        watch(lanches, () => {
            localStorage.setItem('lanches', JSON.stringify(lanches.value))
        }, {deep: true, immediate: true})
        //watch vai observar mudanças na lista e atualizá-lo no localstorage
        //setItem definir a alteração
        //JSON.stringify vai converter para texto, porque o localstorage não recebe objetos
        //deep: true - ativar a alteração de observação das propriedades dos objetos
        //immediate - para colocar no localstorage assim que eu abro o asistema (caso não exista)

        function mudarAtivo(item){
            lanches.value.forEach(lanche => {
                lanche.ativo = false
            }) //vou colocar false em todos
            item.ativo = !item.ativo
        }
        const novoLancheInput = ref('');
        function novoLanche(){
            lanches.value.push({
                descricao: novoLancheInput.value ,
                ativo: false,
                imagem: 'bolo.jpg'
            })
        }

        return{
            mensagem: ref("Olá, Mundo!!"), //é o getElementById            
            lanches,
            mudarAtivo,
            novoLancheInput,
            novoLanche
        }
    }
})
lancheifrn.component('app-header', AppHeader); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.component('app-footer', AppFooter); //CHAMAR O ARQUIVO JS DO HEADER
lancheifrn.mount('#app');



/*
*PARA COLOCAR OS DADOS NO Local Storage:*
Local storage é o "banco de dados" do navegador

PASSO 1:
    - Adicionar a função watch na criação do Vue
PASSO 2:
    - criar a variável de lista do localstorage
PASSO 3:
    - criar o if na lista inicial
PASSO 4:
    - definir o watch

*/

/*
    - adicionar lista de frutas
        - mostrar os itens na página inicial embaixo dos lanches
        - formulário de adicionar fruta no adm

    - excluir um item
        - colocar um símbolo de lixeira em cada card de lanche e chamar a função de excluirLanche()
        - função pop()
        
    - editar um item
        - colocar a informação no formulário de incluir
        - mudar a função de incluir para atualizar o item

    - fazer uma página login para o adm
        - fazer outra de com nome 'usuarios' e propriedades: id, email e senha
        - mudar a págin a index do adm para uma tela de login
        - página index atual será a segunda... dashboard.html

*/