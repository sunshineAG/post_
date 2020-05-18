<template>
  <div class="notic">
      <backlist-content></backlist-content>
      <abacklist-content></abacklist-content>
      <cbacklist-content></cbacklist-content>
  </div>
</template>

<script>
import backlistContent from "../common/backlistContent"
import abacklistContent from "../common/abacklistContent"
import cbacklistContent from "../common/cbacklistContent"

export default {
  name:'',
  components:{
    backlistContent,
    abacklistContent,
    cbacklistContent
  }

}
</script>

<style>

</style>