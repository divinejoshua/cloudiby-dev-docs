<template>
    <div>
        <div id="mobile_header">
            <v-app-bar
            color="white"
            >

            <v-toolbar-title>
                <v-list-item class="grow">
                    <v-list-item-avatar>
                        <v-img
                            class="elevation-6"
                            alt=""
                            src="/assets/logo.png"
                        ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title id="logo_txt">Api Docs</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            </v-app-bar>
        </div>
        <v-container id="body_content">
            <v-row>
                <v-col id="nav_column" md="3">
                    <v-card
                        height="400"
                        width="256"
                        class="mx-auto"
                        id="fixed_nav"
                    >
                        <v-navigation-drawer permanent>
                        <v-list-item>
                            <v-list-item-content>
                            <v-card-actions>
                                <v-list-item class="grow">
                                    <v-list-item-avatar>
                                        <v-img
                                            class="elevation-6"
                                            alt=""
                                            src="/assets/logo.png"
                                        ></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <v-list-item-title id="logo_txt">Api Docs</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card-actions>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>

                        <v-list
                            dense
                            nav
                        >
                            <v-list-item
                            v-for="item in nav_items"
                            :key="item.title"
                            link
                            :style="'background: ' + item.bg_color + ';'"
                            @click="routeTo(item.url)"
                            >
                                <v-list-item-icon>
                                    <v-icon :style="'color: ' + item.color_val">{{ item.icon }}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title :style="'color: ' + item.color_val + '; font-weight: ' + item.font_weight + '; font-size: ' + item.font_size + ';'">{{ item.title }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        </v-navigation-drawer>
                    </v-card>
                </v-col>
                <v-col md="8" id="main_cont_column">
                <div id="search_inp_field">
                    <v-autocomplete
                        v-model="select"
                        :loading="auto_comp_loading"
                        :items="items"
                        :search-input.sync="search"
                        prepend-inner-icon="mdi-search-web"
                        cache-items
                        class="mx-4"
                        style="box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
                        flat
                        hide-no-data
                        hide-details
                        label="Search Documentation..."
                        solo
                    >
                        <template v-slot:item="{ item }">
                            <span @click="getRoute_value(item)" id="search_item_link">{{ item }}</span>
                        </template>
                    </v-autocomplete>
                </div>
                <div id="start_top_head">
                    <h1>Url Endpoints (Introduction)</h1>
                    <p id="doc_intro">
                        The Cloudiby Developer API provides three unique url endpoints
                        that can be used by developers to perform different operations on
                        Cloudiby. Through these endpoints, a developer can access our platform.
                    </p>
                    <p id="doc_intro">These url endpoints includes:</p>
                    <ul id="doc_list">
                        <li>Upload Files - <a style="color: rgb(22, 71, 225);" href="https://api.cloudiby.com/upload" target="_blank">https://api.cloudiby.com/upload</a></li>
                        <li id="list_item">Retrieve Files - <a style="color: rgb(22, 71, 225);" href="https://api.cloudiby.com/retrieve" target="_blank">https://api.cloudiby.com/retrieve</a></li>
                        <li id="list_item">Delete Files - <a style="color: rgb(22, 71, 225);" href="https://api.cloudiby.com/delete" target="_blank">https://api.cloudiby.com/delete</a></li>
                    </ul>
                </div>
                <div id="start_top_body">
                    <h2 id="quick_guide_txt">Error status codes</h2>
                    <p id="doc_intro" style="margin-top: 0px">
                        Cloudiby's Developer API is RESTful and as such, uses
                        conventional HTTP response status codes to indicate the success or failure
                        of HTTP requests made to the above url endpoints in the API.
                    </p>
                    <p id="doc_intro">
                        Below is a table containing all the possible status codes
                        that can be gotten when using the API:
                    </p>
                    <div id="data_simple_table">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            Status code
                                        </th>
                                        <th class="text-left">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="item in status_code_list"
                                        :key="item.status_code"
                                    >
                                        <td>{{ item.status_code }}</td>
                                        <td>{{ item.description }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>
                    <div id="start_using_cloudiby">
                        <h2 id="quick_guide_txt">How to start using Cloudiby Developer API url endpoints</h2>
                        <p id="doc_intro" style="margin-top: 0px; margin-bottom: 5px;">
                            To get started with using Cloudiby Developer API url endpoints, <router-link style="color: rgb(22, 71, 225);" to="/api-url-endpoints/upload_file">click this link</router-link>
                        </p>
                    </div>
                    <div v-if="question_txt" id="question_txt">
                        <span id="plain_txt">Did you find this page helpful?</span>
                        <span id="question_tg_btn">
                            <v-btn tile color="success" :loading="loading" :disabled="loading" @click="loader = 'loading', btn_click_val = true" id="btn_yes">
                                    <v-icon id="thumb_icon" left>
                                        mdi-thumb-up
                                    </v-icon>
                                    Yes
                            </v-btn>
                            |
                            <v-btn tile color="error" :loading="loading2" :disabled="loading2" @click="loader = 'loading2', btn_click_val = false" id="btn_no">
                                    <v-icon id="thumb_icon" left>
                                        mdi-thumb-down
                                    </v-icon>
                                    No
                            </v-btn>
                        </span>
                    </div>
                    <div id="footer_content">
                        <v-footer
                            color="primary lighten-1"
                            padless
                        >
                            <v-row
                            justify="center"
                            no-gutters
                            >
                                <v-btn
                                    v-for="link in links"
                                    :key="link"
                                    color="white"
                                    text
                                    rounded
                                    class="my-2"
                                >
                                    {{ link }}
                                </v-btn>
                                <v-col
                                    class="primary lighten-2 py-4 text-center white--text"
                                    cols="12"
                                >
                                    {{ new Date().getFullYear() }} — <strong>Cloudiby</strong>
                                </v-col>
                            </v-row>
                        </v-footer>
                    </div>
                </div>
                </v-col>
                <v-col id="lg-in_btn" md="1">
                    <router-link id="route_lnks" to="/developers">
                        <v-btn
                            tile
                            color="success"
                            class="btn_bg"
                        >
                            <v-icon left>
                                mdi-login
                            </v-icon>
                            Login
                        </v-btn>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>

        <div id="footer_content_small_screen">
            <v-footer
                color="primary lighten-1"
                padless
            >
                <v-row
                justify="center"
                no-gutters
                >
                    <v-btn
                        v-for="link in links"
                        :key="link"
                        color="white"
                        text
                        rounded
                        class="my-2"
                    >
                        {{ link }}
                    </v-btn>
                    <v-col
                        class="primary lighten-2 py-4 text-center white--text"
                        cols="12"
                    >
                        {{ new Date().getFullYear() }} — <strong>Cloudiby</strong>
                    </v-col>
                </v-row>
            </v-footer>
        </div>

        <v-dialog
        v-model="helpful_confirm_yes_dialog"
        persistent
        v-if="helpful_confirm_yes_view_dialog"
        max-width="290"
        >
            <v-card>
                <v-card-text style="padding-top: 20px;">We are happy that you did 🌟🌟</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="helpful_confirm_yes_dialog = false, helpful_confirm_yes_view_dialog = false"
                        style="color: rgb(22, 71, 225) !important;"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog
        v-model="helpful_confirm_no_dialog"
        v-if="helpful_confirm_no_view_dialog"
        persistent
        max-width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="text-h6">Help us fix that</span>
                </v-card-title>
                <v-card-text>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <p style="color: rgba(0, 0, 0, 0.87);">How can we make this page better?</p>
                                    <v-textarea
                                    label="Your suggestions..."
                                    auto-grow
                                    outlined
                                    rows="1"
                                    row-height="15"
                                    v-model="suggestion"
                                    :counter="150"
                                    :rules="suggestionRules"
                                    required
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <p style="color: rgba(0, 0, 0, 0.87);">Your email (so we can reach you)</p>
                                    <v-text-field
                                    outlined
                                    label="Your email..."
                                    append-icon="mdi-email"
                                    v-model="email"
                                    :rules="emailRules"
                                    required
                                    ></v-text-field>
                                </v-col>
                                <v-col md="12">
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            :disabled="!valid"
                                            @click="validate"
                                        >
                                            Send
                                        </v-btn>
                                        <v-btn
                                            color="blue darken-1"
                                            text
                                            @click="helpful_confirm_no_dialog = false, helpful_confirm_no_view_dialog = false"
                                        >
                                            Close
                                        </v-btn>
                                    </v-card-actions>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-navigation-drawer
            v-model="drawer"
            app
            id="side_mob_navbar"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-btn
                            tile
                            color="success"
                            class="btn_bg"
                            @click="drawer = false"
                        >
                            <v-icon left>
                                mdi-close
                            </v-icon>
                            Close
                        </v-btn>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
                style="padding-top: 30px;"
            >
                <v-list-item
                v-for="item in nav_items"
                :key="item.title"
                link
                :style="'background: ' + item.bg_color + ';'"
                @click="routeTo(item.url)"
                >
                    <v-list-item-icon>
                        <v-icon :style="'color: ' + item.color_val">{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title :style="'color: ' + item.color_val + '; font-weight: ' + item.font_weight + '; font-size: ' + item.font_size + ';'">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <transition name="bounce">
            <v-btn
                v-scroll="onScroll"
                v-show="fab"
                fab
                dark
                fixed
                bottom
                right
                color="#1647e1"
                @click="toTop"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path></svg>
            </v-btn>
        </transition>
    </div>
</template>

<script>
export default {
        metaInfo() {
        return {
            title: "Url Endpoints | Cloudiby Developer Documentation",
            meta: [
                { name: 'description', content:  'Cloudiby is an online storage service which allows you store files and documents for free on the cloud.'},
                { property: 'og:title', content: "Url Endpoints | Cloudiby Developer Documentation"},
                { property: 'og:site_name', content: 'Cloudiby'},
                {property: 'og:type', content: 'website'},
                {name: 'robots', content: 'index,follow'}
            ]
        }
    },



    data(){
        return {
            nav_items: this.$store.state.for_url_endpoints_page,
            right: null,
            loader: null,
            loading: false,
            loading2: false,
            helpful_confirm_yes_dialog: false,
            helpful_confirm_yes_view_dialog: false,
            helpful_confirm_no_dialog: false,
            helpful_confirm_no_view_dialog: false,
            btn_click_val: 'empty',
            count: 0,
            question_txt: true,
            valid: true,
            suggestion: '',
            suggestionRules: [
                v => !!v || 'Suggestion is required',
                v => (v && v.length <= 150) || 'Suggestion must be less than 150 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            links: [],
            drawer: null,
            fab: false,
            status_code_list: this.$store.state.status_code_list,
            auto_comp_loading: false,
            items: [],
            search: null,
            select: null,
            search_items: [
                'Cloudiby Documentation API',
                'API Keys',
                'URL Endpoints',
                'Uploading Files',
                'Retrieving Files',
                'Deleting Files'
            ],
        }
    },

    watch: {
      loader () {
        if (this.btn_click_val === true){
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => {
                this[l] = false
                this.helpful_confirm_yes_view_dialog = true
                this.helpful_confirm_yes_dialog = true
                this.count = 0
                this.question_txt = false
            }, 2000)

            this.loader = null
        } else if (this.btn_click_val === false){
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => {
                this[l] = false
                this.helpful_confirm_no_view_dialog = true
                this.helpful_confirm_no_dialog = true
                this.count = 0
            }, 2000)

            this.loader = null
        }
      },

      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },

    methods: {
      validate () {
        this.$refs.form.validate()
      },

      routeTo(url){
          if (url === 'home'){
            this.$router.push({ name: 'Developers' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
          } else if (url === 'api_keys'){
            this.$router.push({ name: 'Api_Keys' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
          } else if (url === 'endpoints'){
            this.$router.push({ name: 'Url_Endpoints' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
          } else if (url === 'upload_files'){
            this.$router.push({ name: 'Upload_Endpoint' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
          } else if (url === 'retrieve_files'){
            this.$router.push({ name: 'Retrieve_Endpoint' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
          } else if (url === 'delete_files'){
            this.$router.push({ name: 'Delete_Endpoint' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
          }
      },

      onScroll(e){
          if (typeof window === 'undefined') return
          const top = window.pageYOffset || e.target.scrollTop || 0
          this.fab = top > 20
      },

      toTop(){
          this.$vuetify.goTo(0)
      },

      querySelections (v) {
        this.auto_comp_loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.search_items.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.auto_comp_loading = false
        }, 500)
      },

      getRoute_value(route){
        if (route === 'API Keys'){
            this.$router.push({ name: 'Api_Keys' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
        } else if (route === 'URL Endpoints'){
            this.$router.push({ name: 'Url_Endpoints' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
        } else if (route === 'Uploading Files'){
            this.$router.push({ name: 'Upload_Endpoint' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
        } else if (route === 'Retrieving Files'){
            this.$router.push({ name: 'Retrieve_Endpoint' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
        } else if (route === 'Deleting Files'){
            this.$router.push({ name: 'Delete_Endpoint' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
        } else if (route === 'Cloudiby Documentation API'){
            this.$router.push({ name: 'Developers' }).catch(error => {
               if (error.name != "NavigationDuplicated"){
                   throw error;
               }
            })
        }
      }
    },

    mounted(){
        this.$nextTick(() => {
            document.title = 'Url Endpoints | Cloudiby Developer Documentation'
        });
    }
}
</script>

<style scoped>
    #body_content {
        padding-top: 60px;
    }

    #mobile_header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 2;
    }

    .v-avatar img, .v-avatar svg, .v-avatar .v-icon, .v-avatar .v-image, .v-avatar .v-responsive__content {
        border-radius: unset;
    }

    #mobile_header {
        display: none;
    }

    .fixed {
        display: flex;
        justify-content: flex-end;
    }

    #fixed_nav {
        position: fixed;
    }

    #logo_txt {
        color: rgba(0, 0, 0, 0.87);
        font-weight: 600;
        font-size: 21px;
    }

    .btn_bg {
        background-color: #1747e1 !important;
        border-radius: 10px;
    }

    #alert_box_vuetify {
        width: 500px;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }

    .v-list--nav .v-list-item, .v-list--nav .v-list-item:before {
        color: rgb(22, 71, 225);
    }

    #doc_intro {
        margin-top: 15px;
        color: black;
    }

    #doc_list {
        color: black;
    }

    #list_item {
        padding-top: 20px;
    }

    #quick_guide_txt {
        margin-top: 35px;
        padding-bottom: 15px;
    }

    #quick_guide_lnk {
        text-decoration: none;
    }

    #explore_example_txt {
        margin-top: 35px;
        padding-bottom: 15px;
    }

    #explore_example_contents {
        font-size: 14px;
    }

    #lg-in_btn {
        text-align: center;
    }

    #route_lnks {
        color: #fff;
        text-decoration: none;
    }

    #card_title {
        color: rgb(22, 71, 225);
    }

    #question_txt {
        padding-top: 20px;
    }

    #plain_txt {
        font-size: 0.9em;
        font-weight: 700;
        margin-right: 20px;
    }

    #btn_yes {
        font-size: 0.73em;
        border-radius: 10px;
        height: 28px;
    }

    #btn_no {
        font-size: 0.73em;
        border-radius: 10px;
        height: 28px;
        color: #fff;
    }

    #thumb_icon {
        font-size: 1em;
    }

    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }

    #mobile_header .v-list-item {
        padding-left: 0px;
    }

    @-moz-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }

    @-webkit-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }

    @-o-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }

    @keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }

    #side_mob_navbar {
        display: none;
    }

    #footer_content {
        padding-top: 30px;
    }

    #footer_content_small_screen {
        display: none;
        padding-top: 40px;
    }

    #main_cont_column {
        padding-bottom: 0px;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    #search_item_link {
        width: 100%;
        color: rgb(22, 71, 225);
    }

    #search_inp_field {
        padding-bottom: 30px;
        width: 900px;
    }

    @media only screen and (max-width: 1903px){
        #search_inp_field {
            width: 100%;
        }
    }

    @media only screen and (max-width: 1263px){
        #fixed_nav {
            width: 200px !important;
        }

        #fixed_nav .v-list-item__content {
            align-items: center;
            align-self: center;
            display: flex;
            flex-wrap: wrap;
            flex: 1 1;
            justify-content: center;
        }

        .v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
            margin-right: 12px;
        }
    }

    @media only screen and (max-width: 1063px){
        #lg-in_btn {
            display: none;
        }
    }

    @media only screen and (max-width: 959px){
        /*#body_content {
            padding-left: 0px;
            padding-right: 0px;
        }*/

        #nav_column {
            display: none;
        }

        #main_cont_column {
            padding-bottom: 0px;
            padding-left: 30px;
            padding-right: 30px;
        }

        .v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
            margin-right: 32px;
        }

        #footer_content_small_screen {
            display: block;
        }

        #footer_content {
            display: none;
        }

        #search_inp_field {
            width: 100%;
            padding-left: 50px;
            padding-right: 50px;
        }

        #body_content {
            padding-top: 100px;
        }

        #mobile_header {
            display: block;
        }

        #side_mob_navbar {
            display: block;
        }
    }

    @media only screen and (max-width: 590px){
        #alert_box_vuetify {
            width: 100%;
        }
    }

    @media only screen and (max-width: 550px){
        #search_inp_field {
            width: 100%;
            padding-left: 0px;
            padding-right: 0px;
        }
    }

    @media only screen and (max-width: 437px){
        #question_tg_btn {
            display: block;
            margin-top: 10px;
        }
    }
</style>