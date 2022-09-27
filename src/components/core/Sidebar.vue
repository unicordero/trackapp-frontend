<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="primary lighten-3"
    >
    

     <v-img
     contain
      height="150px"
      src="../../assets/Inedas.png">
    </v-img>
      <v-divider></v-divider>
      <div class="app-sidebar-content">
      <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
      </div>
     
    </v-navigation-drawer>

</template>

<script>
  import {SidebarMenu} from 'vue-sidebar-menu'
   import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    components: {
            SidebarMenu,
            VuePerfectScrollbar
        },

    props:['drawer'],
    data: () => ({
    
   
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],

      menu: [
                    {
                        header: true,
                        title: 'ADMIN',
                    },
                    {
                        icon: 'pe-7s-diamond',
                        title: 'Roles',
                        child: [
                            {
                                title: 'Crear',
                                href: '/dashboard/',
                                
                            },
                            {
                                title: 'Listar',
                                href: '/dashboard/creditos',
                            },
                            
                        ],
                    },
                    {
                        icon: 'pe-7s-car',
                        title: 'Components',
                        child: [
                            {
                                title: 'Tabs',
                                href: '/components/tabs',
                            },
                            {
                                title: 'Accordions',
                                href: '/components/accordions',
                            },
                            {
                                title: 'Modals',
                                href: '/components/modals',
                            },
                            {
                                title: 'Progress Bar',
                                href: '/components/progress-bar',
                            },
                            {
                                title: 'Tooltips & Popovers',
                                href: '/components/tooltips-popovers',
                            },
                            {
                                title: 'Carousel',
                                href: '/components/carousel',
                            },
                            {
                                title: 'Pagination',
                                href: '/components/pagination',
                            },
                            {
                                title: 'Maps',
                                href: '/components/maps',
                            },
                        ],
                    },
                    {
                        icon: 'pe-7s-display2',
                        title: 'Tables',
                        child: [
                            {
                                title: 'Regular Tables',
                                href: '/tables/regular-tables',
                            },
                        ]
                    },
                    {
                        header: true,
                        title: 'Dashboard Boxes',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'Chart Boxes',
                        href: '/widgets/chart-boxes-3',
                    },
                    {
                        header: true,
                        title: 'Forms',
                    },
                    {
                        icon: 'pe-7s-light',
                        title: 'Elements',
                        child: [
                            {
                                title: 'Controls',
                                href: '/forms/controls',
                            },
                            {
                                title: 'Layouts',
                                href: '/forms/layouts',
                            },
                        ],
                    },
                    {
                        header: true,
                        title: 'Charts',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'ChartJS',
                        href: '/charts/chartjs',
                    },
                ],
               
    }),
  }
   </script>
