<template>
  <header>
      <nav class="container">
          <div class="branding">
              <router-link class='header' :to="{name:Home}">FireBlog</router-link>
          </div>
          <div v-show="!mobile" class="nav-links">
              <ul>
                  <router-links class="link" to="#">Home</router-links>
                  <router-links class="link" to="#">Blogs</router-links>
                  <router-links class="link" to="#">Create Post</router-links>
                  <router-links class="link" to="#">Login/Register</router-links>
              </ul>
          </div>
      </nav>
        <img v-show="mobile" @click="toggleMobileNav" src="../assets/Icons/bars-regular.svg" alt="" class="mobile-icon" style="height:30px">

        <transition v-show="mobileNav" name="mobile-nav">
            <ul class="mobile-nav">
                  <router-links class="link" to="#">Home</router-links>
                  <router-links class="link" to="#">Blogs</router-links>
                  <router-links class="link" to="#">Create Post</router-links>
                  <router-links class="link" to="#">Login/Register</router-links>
              </ul>
        </transition>
    
  </header>
</template>

<script>
export default {
    name: "NavigationComp",
    components:{
        
    },

    data(){
        return {
            mobile:null,
            mobileNav:null,
            windowWidth:null
        }
    },
    created(){
        window.addEventListener("resize", this.checkScreen)
        this.checkScreen;
    },

    methods:{
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <=750){
                this.mobile = true;
                return ;
            }

            this.mobile = false;
            this.mobileNav =false;
        },

        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        }
    }
}
</script>

<style lang='scss' scoped >
    header{
        background-color: #fff;
        padding: 0 25px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        z-index: 99;

        .link {
            font-weight: 500;
            padding: 0 8px;
            transition: 0.3s color ease;

            &:hover {
            color: #1eb8b8;
            }
        }

        nav{
            display:flex;
            padding: 25px 0;

            .branding{
                display:flex;
                align-items: center;

                .header{
                    font-weight: 600;
                    font-size:24px;
                    color:black;
                    text-decoration: none;
                }
            }

            .nav-links{
                flex:1;
                display:flex;
                align-items:center;
                justify-content:flex-end;

                ul{
                    margin-right:32px;

                    .link{
                        margin-right:32px;
                    }

                    .link:last-child{
                        margin-right:0;
                    }
                }
            }
        }

        .mobile-icon{
            cursor:pointer;
            position: absolute;
            top:25px;
            right:25px;
            height:25px;
            width: auto;
        }

        .mobile-nav{
            padding: 20px;
            width: 70%;
            max-width: 250px;
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100%;
            background-color: #303030;
            top: 0;
            left: 0;

        
            .link{
                color:white;
                padding:15px 0px;
                transition: 0.3s color ease;

                &:hover {
                color: #1eb8b8;
                }
            }
        }
        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
            transition: all 1s ease;
        }

        .mobile-nav-enter {
            transform: translateX(-250px);
        }

        .mobile-nav-enter-to {
            transform: translateX(0);
        }

        .mobile-nav-leave-to {
            transform: translateX(-250px);
        }
    }

   
</style>