<template>
  <div>
    <p v-if="customDomainTruckpediaUrl">
      <a :href="customDomainTruckpediaUrl" target="_blank"
        >Domain: {{ customDomainTruckpediaUrl.split("?")[0] }}</a
      >
    </p>
    <p v-if="subDomainTruckpediaUrl">
      <a :href="subDomainTruckpediaUrl" target="_blank"
        >Subdomain: {{ subDomainTruckpediaUrl.split("?")[0] }}</a
      >
    </p>
    <p v-if="truckpediaUrl">
      <a :href="truckpediaUrl" target="_blank">{{
        truckpediaUrl.split("?")[0]
      }}</a>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EditCompanyWebsite",
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  data() {
    return {
      subDomainTruckpediaUrl: null,
      customDomainTruckpediaUrl: null,
      truckpediaUrl: null,
    };
  },
  created() {
    // this.$vs.loading();
    const accessToken = localStorage.getItem("access_token");
    const prodUrl = "truckpedia.io";
    const customDomain = this.user.admin_company_details.customDomain;
    const businessUrl = this.user.admin_company_details.business_url;
    // Prod URL
    let subDomainTruckpediaUrlProd = `https://${businessUrl}.${prodUrl}?token='${accessToken}`; // sub domain truckpedia prod url
    let customDomainTruckpediaUrl = `https://${customDomain}?token='${accessToken}`; // domain truckedia url
    let truckpediaUrlProd = `https://carriers.${prodUrl}?token='${accessToken}`; // truckpedia prod url
    //  localhost Url
    let localhost = `http://carriers.localhost:3001?token='${accessToken}`; // local host url
    let subDomainTruckpediaUrlLocal = `http://${businessUrl}.localhost:3001?token=${accessToken}`; // sub domain url local

    if (!process.env.NODE_ENV || process.env.NODE_ENV !== "development") {
      if (businessUrl) {
        window.open(subDomainTruckpediaUrlProd, "_blank");
        this.subDomainTruckpediaUrl = subDomainTruckpediaUrlProd;
      } else {
        if (customDomain) {
          window.open(customDomainTruckpediaUrl, "_blank");
          this.customDomainTruckpediaUrl = customDomainTruckpediaUrl;
        } else {
          window.open(truckpediaUrlProd, "_blank");
          this.truckpediaUrl = truckpediaUrlProd;
        }
      }
    } else {
      if (businessUrl) {
        window.open(subDomainTruckpediaUrlLocal, "_blank");
        this.subDomainTruckpediaUrl = subDomainTruckpediaUrlLocal;
      } else {
        if (customDomain) {
          window.open(customDomainTruckpediaUrl, "_blank");
          this.customDomainTruckpediaUrl = customDomainTruckpediaUrl;
        } else {
          window.open(localhost, "_blank");
          this.truckpediaUrl = localhost;
        }
      }
    }
    // this.$vs.loading.close();
  },
};
</script>
