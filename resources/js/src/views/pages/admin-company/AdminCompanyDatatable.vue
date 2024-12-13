<template>
  <vx-card title="Companies">
    <div class="vx-row">
      <div class="mt-base vx-col w-full">
        <DataTable
          :value="items.data"
          :lazy="true"
          :paginator="true"
          :rows="rows"
          :rowHover="true"
          :totalRecords="totalRecords"
          :filters="filters"
          :loading="loading"
          filterDisplay="row"
          :scrollable="true"
          @sort="onSort($event)"
          @page="onPage($event)"
          :rowsPerPageOptions="rowsPerPageOptions"
        >
          <template #empty> No records found </template>

          <Column
            field="company_image_url"
            header="Company Logo"
            :sortable="false"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              <img
                :src="slotProps.data.company_image_url"
                :alt="slotProps.data.business_name"
                class="h-32 w-auto object-cover object-center rounded"
              />
            </template>
            <!--            <template #filter>-->
            <!--              <InputText type="text"-->
            <!--                         v-model="filters['company_image_url']"-->
            <!--                         @input="onInputFilter"-->
            <!--                         class="p-column-filter w-full"/>-->
            <!--            </template>-->
          </Column>

          <Column
            field="business_name"
            header="Company Name"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.business_name }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['business_name']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="usdot_number"
            header="USDOT #"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.usdot_number }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['usdot_number']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="address"
            header="Address"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.address }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['address']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="phone_number"
            header="Phone No."
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.phone_number }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['phone_number']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="trial_valid_till"
            header="Trial Ends On"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.trial_valid_till }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['trial_valid_till']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="subscription_status"
            header="Plan"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ getSubscriptionStatus(slotProps.data.subscription_status) }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['subscription_status']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column
            field="referral_code"
            header="Referral Code"
            :sortable="true"
            :showFilterMenu="false"
          >
            <template #body="slotProps">
              {{ slotProps.data.referral_code }}
            </template>
            <template #filter>
              <InputText
                type="text"
                v-model="filters['referral_code']"
                @input="onInputFilter"
                class="p-column-filter w-full"
              />
            </template>
          </Column>

          <Column header="Action">
            <template #body="slotProps">
              <div class="flex items-center space-x-2">
                <vx-tooltip text="View">
                  <vs-button
                    color="primary"
                    type="border"
                    icon-pack="feather"
                    icon="icon-eye"
                    size="small"
                    @click.stop="onShow(slotProps.data)"
                    radius
                  />
                </vx-tooltip>
              </div>
            </template>
          </Column>

          <template #footer>
            In total there are {{ totalRecords }} items.
          </template>
        </DataTable>
      </div>
    </div>
  </vx-card>
</template>

<script>
import DatatableMixin from "@/mixins/datatableMixin";
import { mapGetters, mapState } from "vuex";

export default {
  name: "AdminCompanyDatatable",

  mixins: [DatatableMixin],

  data() {
    return {
      filters: {
        business_name: "",
        usdot_number: "",
        address: "",
        phone_number: "",
        trial_valid_till: "",
        subscription_status: "",
        referral_code: "",
      },
    };
  },

  computed: {
    ...mapState("admin-company", { items: "adminCompanies" }),
    ...mapGetters("admin-company", {
      getFormattedSubscriptionStatus: "getFormattedSubscriptionStatus",
    }),
  },

  async created() {
    await this.commonApiCall();
  },

  methods: {
    async commonApiCall(filter = {}) {
      this.loading = true;

      try {
        await this.$store.dispatch("admin-company/getAdminCompanyDatatable", {
          eventForServer: this.eventForServer,
          filter,
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    getSubscriptionStatus(status) {
      return this.getFormattedSubscriptionStatus[status];
    },

    onShow(adminCompanyDetail) {
      this.$router.push({
        name: "companies-view",
        params: { id: adminCompanyDetail.admin_company_detail_id },
      });
    },
  },
};
</script>

<style scoped></style>
