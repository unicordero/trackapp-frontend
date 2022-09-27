  <template >
      <v-app id="inspire">
        <div class="app-container">
               
          <router-view/>
    
        </div>
      </v-app>
    </template>
  



<script>
  const default_layout = "default";

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    }
  }
</script>

<style lang="scss">
 @import "assets/base.scss";
  @import "scss/_dashboard.scss";
</style>