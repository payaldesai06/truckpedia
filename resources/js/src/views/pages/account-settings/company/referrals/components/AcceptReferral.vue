<template>
  <div class="referral">
    <div class="container p-12">
      <div class="referral-box lg:w-1/2">
        <img src="@assets/images/logo/ic_logo_text.png" style="width: 200px" />
        <p class="invite">YOU’VE BEEN INVITED</p>
        <div class="referral-content mt-5">
          Get up to $1000 in reward when you become a Ezpapel customer
        </div>
        <vs-button
          color="primary"
          type="filled"
          size="large"
          class="mt-12"
          @click="acceptInvite"
          >Accept Invite</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcceptReferral",
  data() {
    return {
      referralCode: "",
    };
  },
  methods: {
    acceptInvite() {
      if (this.$route.query.id) {
        window.open(
          `https://calendly.com/ezpapel/demo?a7=${this.$route.query.id}`,
          "_blank"
        );
      }
    },
  },
};
</script>

<style lang="scss">
.referral {
  height: 100vh;
  width: 100vw;
  background-image: url("../../../../../../../../assets/images/logo/circles.svg");
  background-repeat: no-repeat;
  background-position: left bottom;
  background-color: #00253b;
  .invite {
    color: #77beff;
    margin-top: 80px;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
  }
  .referral-content {
    line-height: 60px;
    font-size: 40px;
    color: #fff;
    font-weight: 500;
  }
}
</style>
