<template>
  <v-container>
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                       
                        <h2
                          class="text-center"
                        >Iniciar sesión TrackApp</h2>
                        <br>
                        <center><img right src="../assets/Logotipo 1.png" width="100" height="100" ></center>
                        <h3
                          class="text-center  grey--text "
                        >TrackApp una plataforma educativa <br>en la que puedes administrar tú IE</h3>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8"><form v-on:submit.prevent="login">
                          <v-text-field
                            label="usuario"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            id="users"
                            required placeholder="usuario"
                            v-model="user"
                           class="mt-16"
                          />
                          <v-text-field
                            label="password"
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                          id="passaword"
                          v-model="password"
                           type="password"
                          
                          />
                          </form>
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox
                       
                        label="Remember Me"
                        class="mt-n1"
                        color="blue"
                      > </v-checkbox>
                      
                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="caption blue--text">Forgot password</span>
                              </v-col>
                            </v-row>
                          <v-btn color="blue" dark block tile @click="login" value="login">Iniciar sesión</v-btn>
                                
                         <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >O inicia sesión en:</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                      <v-col cols="12" md="6" class="blue rounded-bl-xl" ><div><center><img right src="../assets/Inedas.png" width="300" height="300" ></center></div>
                    <div style="  text-align: center; padding: 5px 0;">
                      <v-card-text class="white--text" >
                        <h2 class="text-center ">Institución Educativa Alfonso Spath Spath</h2>
                        <h3
                          class="text-center"
                        >Realiza tú registro<br>  para iniciar con la experiencia TrackApp</h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">Registro</v-btn>
                      </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row >
                    <v-col cols="12" md="6" class="blue rounded-br-xl"><div><center><img right src="../assets/Inedas.png" width="300" height="300" ></center></div>
                     <div style="  text-align: center; padding: 5px 0;">
                      <v-card-text class="white--text" >
                        <h2 class="text-center ">Tienes una cuenta?</h2>
                        <h3
                          class="text-center"
                        >Ingresa e inicia sesión<br>  para continuar con la experiencia TrackApp</h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Iniciar sesión</v-btn>
                      </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Sign Up for an Account</h4>
                        <h6
                          class="text-center  grey--text "
                        >Let's get you all set up so you can start creatin your <br>
                        first onboarding experiance</h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="First Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="Last Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           </v-row>
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                           type="password"
                          
                          />
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox
                       
                        label="I Accept AAE"
                        class="mt-n1"
                        color="blue"
                      > </v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="caption blue--text ml-n4">Terms &Conditions</span>
                              </v-col>
                            </v-row>
                          <v-btn color="blue" dark block tile>Sign up</v-btn>
                     
                         <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Sign up using</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>


//import menu from '../config/menu'



  export default {
   data: function(){
    
    return{
      
    user: "",
    password: "",
    error : false,
    error_msg: " ",
    step: 1
    }
  },
  props: {
    source: String
  }, 
/*mounted() {
    this.axios.get('https://trackappserver.herokuapp.com/peoples')
    .then((response) => {
       console.log(response.data)
        this.items = response.data;
      })
  },*/
  methods:{
    login(){
      let json = {
        'password' : this.password,
        'user': this.user,
        };
1
     

     this.axios.get ('https://trackappserver.herokuapp.com/webmasters', json)
      .then (response=>{
        if (response.status==200){
          
          console.log(response.data, "Todo correcto");
        //  this.$store.commit('setMenu',menu.menuEstudiante);

       //   this.$store.commit('setRutas',menu.routes2);

        /*  for (var r of this.$store.getters.getRuta)
          {
            this.$router.removeRoute(r.name);
          }

          for (var r of this.$store.getters.getRuta)
          {
            this.$router.addRoute(r);
          }*/
          
          this.$router.push('dashboard');
          
        } else{
          this.error=true,
      
          console.log("error")
        }
      })
    }
  }
  }
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
