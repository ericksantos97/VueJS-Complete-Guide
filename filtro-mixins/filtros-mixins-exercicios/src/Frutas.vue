<template>
    <div>
        <h4>{{ global }}</h4>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">
                {{ fruta }}
             </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
   mixins: [ frutasMixin, usuarioMixin ],
   created() {
        console.log('Created - FrutasVue!')
    },
}
</script>

<style>

</style>
