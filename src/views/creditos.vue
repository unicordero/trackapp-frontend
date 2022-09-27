<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Rol
          </th>
          <th class="text-left">
            Opciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in roles"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td><v-btn
      depressed
      color="primary"
      x-small
    >
      Editar
    </v-btn> 
    <v-btn color="error" x-small>
      Eliminar
    </v-btn>
  </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        roles: [],
      }
    },
    mounted(){
        let vue = this;
        axios.get('https://trackappserver.herokuapp.com/roles').then(
            function(response){
                vue.roles = response.data;
                console.log(vue.roles)
            }
        )
    },
    methods: {
      editar(){
        
      },
      eliminar(){
        
      }
    }
  }
</script>