<template>
  <div class="card">
    <Card>
      <template #content>
        <div class="flex w-full">
          <div class="left-block block w-1/3">
            <Avatar label="P" class="mr-2 pl-1" size="xlarge" shape="circle" />
            <span style="color: green;"> 2000 mi </span>
          </div>
          <div class="right-block w-2/3">
            <p>
              <strong>Project Name</strong>
            </p>
            <p>
              Veeweryz, Flavio
            </p>
            <p class="text-primary">
              Arrived at pickup
            </p>
            <p style="font-size: 13px;" class="flex">
              <span> <vs-icon icon="local_shipping" size="20px" class="mr-1" /> </span>
              <span> 58955 </span>
              <span> - Truck #</span> <span>5545</span>
            </p>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Avatar from 'primevue/avatar';
export default {
  name: "GanttViewSideCard",
  components: {
    Avatar
  },
};
</script>
