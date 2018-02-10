<template>
  <div class="home">
    <SimpleStorage/>
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleStorage from '@/components/SimpleStorage.vue'

export default {
  name: 'home',
  components: {
    SimpleStorage
  }
}
</script>
