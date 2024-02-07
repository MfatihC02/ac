<template>
  <div class="container col-6 mt-4">
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="floatingInput"
        placeholder="başlık"
        v-model="userData.title"
      />
      <label for="floatingInput">Başlık</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="url"
        class="form-control"
        id="floatingPassword"
        placeholder="password"
        v-model="userData.url"
      />
      <label for="floatingPassword">Şifre</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="floatingDescription"
        placeholder="açıklama gir"
        v-model="userData.description"
      />
      <label >Açıklama</label>
    </div>
    <div class="d-grid gap-2 col-12 mx-auto">
      <button class="btn btn-primary" @click="onSave">ekle</button>
      <button
        class="btn btn-danger mr-3"
        @click="$router.push({ name: 'home' })"
      >
        iptal
      </button>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$axios
        .post("http://localhost:3000/bookmarks", this.userData)
        .then((save_response) => {
          console.log("save_response", save_response);
          // Başarılı ise yönlendirme veya diğer işlemler burada yapılır
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Hata:", error);
          // Hata yönetimi burada yapılır
        });
    },
  },
};
</script>