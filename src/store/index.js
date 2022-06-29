import { createStore} from 'vuex'
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../firebase/firebaseInit.js'
export default new createStore({
  state: {
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
      },
    ],
    editPost:null,
    user:null,
    profileEmail:null,
    profileFirstName:null,
    profileLastName:null,
    profileId:null,
    profileInitials:null,
  },
  mutations: {
    toggleEditPost(state , payload){
      state.editPost = payload;
    },
    setProfileInfo(state , doc){
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    updateUser(state , payload){
      state.user = payload;
    },
  },
  actions: {
    async getCurrentUser({commit}){
      const database = db.collection('user').doc(firebase.auth().currentUser.uid);
      const dbresult = await database.get();
      commit('setProfileInfo' , dbresult);
      commit('setProfileInitials')
    }
  },
  modules: {
  }
})
