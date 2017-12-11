

Vue.component('my-collapse-item', {
    template: `
        <!-- Collapse Item -->
        <div class="card" >

            <div class="card-header head1" role="tab" v-bind:id="'heading'+index">

                <a id="link1" class="collapsed" data-toggle="collapse" v-bind:href="'#collapse'+ index" aria-expanded="false" v-bind:aria-controls="'collapse'+index">
                    <div id="mainTextCSS" >
                       {{maintext}} 
                    </div
                </a>

            </div>
                <div v-bind:id="'collapse'+index" class="collapse" role="tabpanel" v-bind:aria-labelledby="'heading'+index">

                    <div class="card-body">

                        {{collapsetext}}

                    </div>

                </div>
            </div>
        </div>
    `,

    props: ['maintext','collapsetext', 'index'],
  
})

var mainVue1 = new Vue({
    el: '#vue1',
    data: {
        collapseItems : [],
        item: {
            mainText: '',
            collapseText: ''
        },
    },
    methods: {
        addItem: function(){
            var newItem = {
                mainText: this.item.mainText,
                collapseText: this.item.collapseText
            }
            this.collapseItems.push(newItem);
            console.log(this.collapseItems);
        }
    }

})