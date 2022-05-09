<template>
  <div>
    <div class="text-center">
      <v-btn
        rounded
        :loading="loading"
        :disabled="loading"
        color="pink"
        class="mx-2 my-5 pa-10 white--text"
        @click="generateActivity"
      >
        <v-icon dark class="mr-3"> mdi-auto-fix </v-icon>
        Anti Bored Button
      </v-btn>
      <v-skeleton-loader
        v-if="loading"
        class="mx-auto"
        type="text@2"
      ></v-skeleton-loader>
      <v-card
        v-if="resData.length !== 0 && allowDisplayData"
        elevation="20"
        class="rounded-xl pa-5"
      >
        <div v-if="resData.length !== 0 && allowDisplayData">
          <p class="mb-0">
            You can {{ uncapitalize(resData.activity) }}. This is a
            {{ resData.type }} activity. This activity need
            {{
              resData.participants === 1
                ? `${resData.participants} participant (only you).`
                : `${resData.participants} participants.`
            }}
          </p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { capitalize, uncapitalize } from '@/helpers/string';
export default {
  data() {
    return {
      resData: [],
      loading: false,
      allowDisplayData: false,
    };
  },
  methods: {
    capitalize,
    uncapitalize,
    async generateActivity() {
      this.loading = true;
      this.allowDisplayData = false;
      await this.fetchData();
      this.allowDisplayData = true;
      this.loading = false;
    },
    async fetchData() {
      this.resData = await fetch('https://www.boredapi.com/api/activity').then(
        (res) => res.json()
        // this.loading = false;
      );
    },
  },
};
</script>
