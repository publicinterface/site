<script lang="ts" setup>
export interface Props {
  line: string;
  name: string;
}

defineProps<Props>();
</script>
<template>
  <div>
    <p>{{name}} — {{line}}</p>
    <slot />
  </div>
</template>