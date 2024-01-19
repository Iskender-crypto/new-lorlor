<script setup lang="ts">
import {useDataStore} from "~/stores/data";

const route = useRoute()
const dataStore = useDataStore();
const router = useRouter()
</script>

<template>
<div class="container">
  <h1>UserId</h1>
</div>
</template>