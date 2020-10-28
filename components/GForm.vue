<template>
  <iframe
    :src="`https://docs.google.com/forms/d/e/${hash}/viewform?embedded=true`"
    width="640"
    height="1678"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    style="max-width: 100vw"
    >載入中…</iframe
  >
</template>
<script>
export default {
  props: {
    hash: {
      type: String,
      default: "1FAIpQLSd2Aocy5a2g7brv92W0fEgHSOaWx97yx7TeXOB09-k7yLLbOg",
    },
  },
};
</script>
