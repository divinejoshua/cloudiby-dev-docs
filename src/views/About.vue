<template>
  <div class="about">
    <h1>This is an about page</h1>
      <router-link to="/">Home</router-link> |

  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'About',

  metaInfo() {
        return { 
            title: "About - Cloudiby",
            meta: [
                { name: 'description', content:  'About page - A test site'},
                { property: 'og:title', content: "About - Cloudiby"},
                { property: 'og:site_name', content: 'Cloudiby'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    }
}
</script>
