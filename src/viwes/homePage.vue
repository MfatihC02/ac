<template>
    <div class="container col-8 ">
        <div class="row">
        <table class="table"  >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Başlık</th>
      <th scope="col">Şifre</th>
      <th scope="col">Açıklama</th>
      <th scope="col">Sil</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
      <th scope="row">1</th>
      <td>{{ bookmark.title }}</td>
      <td>{{ bookmark.url }}</td>
      <td>{{ bookmark.description }}</td>
      <td><button @click="deleteBookmark(bookmark)" class="btn btn-outline-danger">-</button></td>
      
    </tr>
  </tbody>
</table><div class="conteiner col-12">
    <div class="row"><button class="btn btn-primary" @click="$router.push({ name: 'new' })">ekle</button></div>
    
</div>
</div>
</div>
</template>
<script>
export default {
    created() {
        this.$axios.get("http://localhost:3000/bookmarks").then(bookmarks_list_response=>{
            this.bookmarkList=bookmarks_list_response.data

        })
    },
    data() {
        return {
            bookmarkList:[]

        }
    },
    methods: {
        deleteBookmark(bookmark) {
  // Assuming the correct endpoint expects the ID in the path
  const deleteUrl = `http://localhost:3000/bookmarks/${bookmark.id}`;

  this.$axios.delete(deleteUrl)
    .then(delete_response => {
      console.log(delete_response);
      if (delete_response.status === 200) {
        // Update bookmark list if successful
        const updatedList = this.bookmarkList.filter(b => b.id !== bookmark.id);
        this.bookmarkList = updatedList;
      } else {
        // Handle non-200 response status (optional)
        console.error("Delete failed:", delete_response.status);
      }
    })
    .catch(error => {
      console.error("Error deleting bookmark:", error);
    });
}

    },
}
</script>