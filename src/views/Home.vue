<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post , index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
export default {
  name: "HomeComp",
  components: {BlogPost},
  data(){
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost:[
        {
          title:"this is filter title",
          blogHtml:"this is filter blog post title",
          blogCoverPhoto:"beautiful-stories"
        },
        {
          title:"this is filter title",
          blogHtml:"this is filter blog post title",
          blogCoverPhoto:"beautiful-stories"
        }
      ]
    }
  }
};
</script>
