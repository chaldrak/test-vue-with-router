<template>
  <main>
    <div class="max-w-xs m-auto text-left bg-white shadow-md rounded-md px-4 pt-6 py-4 mb-10">
        <div v-if="false" class="bg-red-300 rounded-md text-red-800 py-3 mb-3 text-center" role="alert">
            {{ getError() }}
        </div>

        <div v-if="false" class="bg-blue-200 rounded-md text-blue-800 py-3 mb-3 text-center" role="alert">
            {{ getError() }}
        </div>

        <form>
            <h1 class="text-2xl mb-4 font-bold text-center">Password recovery</h1>

            <div class="mb-3">
                <label class="block text-gray-700 text-sm mb-2" for="email">
                    Email Address
                </label>
                <input v-model="email" class="focus:border-2 appearance-none border rounded w-full h-8 py-2 px-3 text-gray-700 leading-tight focus:border-blue-500 focus:outline-none" id="email" type="email" placeholder="name@example.com">
            </div>

            <div>
                <div class="pb-10 border-gray-500">
                    <button @click="register" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full h-8 rounded focus:outline-none" type="button">
                        Recover password
                    </button>
                </div>
                <hr>

                <div class="pt-4">
                    <router-link to="/" class="underline text-blue-500 hover:text-blue-700">Go back to login page.</router-link>
                </div>
            </div>
        </form>
    </div>

    <div>
        <p class="text-center text-gray-500 text-sm">
            Visual Design Cafe &copy; 2021
        </p>
    </div>

  </main>
</template>

<script>
export default {
    computed: {
        
    },
    methods: {
        register() {
            if(this.fullName==null || this.email==null || this.password==null ||
            this.fullName=='' || this.email=='' || this.password=='') {
                alert("Error");
            } else {
                let userInfo = {
                    fullName: this.fullName,
                    email: this.email,
                    password: this.password
                }
                alert(userInfo.fullName + ' ' + userInfo.email + ' ' + userInfo.password);
            }
            
        },

        getError() {
            if(this.fullName==null) {
                return "Erreur: Full Name can't be empty";
            } else {
                return '';
            }
        }
    }
}
</script>

<style>

</style>