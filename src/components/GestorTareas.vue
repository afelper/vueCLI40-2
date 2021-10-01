<template>
  <section>
    <div
      :class="[
        'row',
        'alert',
        'text-center',
        'align-items-center',
        item.estado ? 'alert-primary' : 'alert-warning',
      ]"
      role="alert"
    >
      <div class="col-12 col-md-4">
        <span>
          {{ item.nombre }}
        </span>
      </div>
      <div class="col-12 col-md-4">
        <span>
          {{ item.estado ? "Realizada" : "Pendiente" }}
        </span>
      </div>
      <div class="col-12 col-md-4">
        <button class="btn btn-success btn-sm" @click="$emit('cambiar', index)">
          Cambiar estado
        </button>
        <button class="btn btn-danger btn-sm" @click="$emit('eliminar', index)">
          Eliminar
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'GestorTareas',
    props: {
        item: Object,
        index: Number
    },
    data(){
        return{}
    }
};
</script>

<style scoped>
</style>