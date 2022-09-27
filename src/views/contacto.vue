<template>
  <div  class="box-style box-style-l">
    <div id="personal" class="">
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <div class="row justify-content-md-center">
            <div class="col-md-6">
                <div class="main-card mb-3 card">

                    <div class="card-header-tab card-header">
                       <div class="card-header-title font-size-lg text-capitalize text-center font-weight-normal">
                          <i class="header-icon lnr-charts icon-gradient bg-happy-green"> </i>
                             Captura de Datos
                         </div>
                    </div>

                        <div class="px-5 py-5">
                            <div class="position-relative form-group">
                                <label for="descripcion"                                                              class="">Rol</label>
                                <input name="name"
                                       v-model="name"
                                       placeholder="digite rol"                                                                    type="text"
                                       class="form-control">
                            </div>
                            <div class="position-relative form-group">
                                <label for="menu"                                                                     class="">Menu</label>
                                
                                <input
                                name="menu" id="menu" 
                                placeholder="menu aplicación" 
                                type="text"
                                class="form-control">
                            </div>

                            <div class="position-relative form-group">
                                <label for="rutas"
                                       class="">Rutas</label>
                                       
                                       <input 
                                            name="rutas" 
                                            id="rutas" 
                                            placeholder="rutas aplicación" 
                                            type="text"
                                            class="form-control">
                            </div>

                                <div class="position-relative form-group">
                                    <b-button @click="crear" class="mr-2 mb-2 btn-transition" >
                                     Guardar
                                   </b-button>
                                </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    

</template>
<script>

    import PageTitle from "../Layout/Components/PageTitle.vue";
    import axios from 'axios';


    export default {
        components: {
            PageTitle
        },
        data: () => ({
            heading: 'Crear Roles',
            icon: 'pe-7s-users icon-gradient bg-tempting-azure',
            subheading: 'Creación de los diferenes roles.',
            name: "",
            
        }),

        methods: {
            crear(){
            let json ={
            "name": this.name
            }
            axios.post("https://trackappserver.herokuapp.com/roles", json).then((result) => {
                console.log(result);
            });
            }
        },
    }
</script>

<style scoped>
  
</style>