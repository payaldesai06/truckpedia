<template>
  <!-- Target / useful life -->
  <vx-card class="mt-4">
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <label class="text-xs">Target Miles At End of Useful Life</label>
        <vs-input class="w-full" :value="'0.0'" />
      </div>
      <div class="vx-col w-1/2">
        <label class="text-xs">Useful Life (Months)</label>
        <vs-input class="w-full" :value="'0'" />
      </div>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: "TargetFullLifeForm",
};
</script>
