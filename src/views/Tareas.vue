<template>
    <div class="container">
        <header class="mb-5">
            <h1>
                {{titulo}}
            </h1> 
        </header>
        <main>
             <!-- Ingresar tareas -->
            <section>
                <form v-on:submit.prevent="agregarTarea">
                    <div class="mb-3">
                        <label form="ingresarTarea" class="form-label">Agregar tarea</label>
                        <input type="text" class="form-control" id="ingresarTarea" aria-describedby="emailHelp"
                            v-model="nuevaTarea">
                        <div id="emailHelp" class="form-text">Ingrese el nombre de su tarea y presione agregar</div>
                        <button type="button" class="btn btn-primary w-100 mt-5" @click.prevent="agregarTarea">Agregar
                            tarea</button>
                    </div>
                </form>
            </section>

            <section  class="mt-5">
                <!-- cabecera de la "tabla" de tareas -->
                <div class="row alert alert-light text-center align-items-center" role="alert">
                    <div class="col-12 col-md-4">
                        <span>
                            Nombre
                        </span>
                    </div>
                    <div class="col-12 col-md-4">
                        <span>
                            Estado
                        </span>
                    </div>
                    <div class="col-12 col-md-4">
                        <span>
                            Acciones
                        </span>
                    </div>
                </div>
            </section>
            <gestor-tareas  v-bind:tareas="tareas"
                v-for="(item, index) in tareas" 
                :key="index"
                :item="item"
                v-bind:index="index"
                v-on:cambiar="cambiarEstado"
                @eliminar="eliminarNota"/>
        </main>
    </div>
</template>

<script>

import GestorTareas from '../components/GestorTareas.vue';

export default {
    components: { GestorTareas },
    name:'Tareas',
    data(){
        return{
            proyecto: 'Tareas en Vue CLI con componente',
            grupo: 'grupo 40',
            nuevaTarea: '',
            tareas: []
        }
    },
    methods: {
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            //console.log(this.nuevaTarea)
            this.nuevaTarea = '';
            localStorage.setItem('tareasVue', JSON.stringify(this.tareas));
        },
        cambiarEstado(index){
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem('tareasVue', JSON.stringify(this.tareas));
        },
        eliminarNota(index){
            this.tareas.splice(index,1);
            localStorage.setItem('tareasVue', JSON.stringify(this.tareas));
        }
    },
    computed:{
        titulo(){
            return this.proyecto + ' ' + '-' + ' ' + this.grupo;
        }
    },
    created(){
        let data = JSON.parse(localStorage.getItem('tareasVue'));
        if(data){
            this.tareas = data;
        }else{
            this.tareas = [];
        }
    }
}
</script>