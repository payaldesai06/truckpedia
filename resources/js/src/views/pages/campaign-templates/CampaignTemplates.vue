<template>
  <div>
    <vx-card>
      <div class="vx-row justify-between items-center">
        <div class="vx-col">
          <h3 v-text="'Campaign Templates'" />
        </div>
        <div class="vx-col">
          <vs-button @click="onAddTemplatesClick" type="filled" icon="add">
            Add New
          </vs-button>
        </div>
      </div>
      <div class="vx-row mt-5">
        <div class="vx-col w-full">
          <DataTable
            :paginator="true"
            :rowHover="true"
            :lazy="true"
            :value="campaignTemplates"
            :rows="rows"
            :totalRecords="totalRecords"
            :loading="loading"
            responsiveLayout="scroll"
            :rowsPerPageOptions="[10, 25, 50]"
            :first="offset"
            removableSort
            class="mt-12"
            @page="onPage"
          >
            <Column
              field="name"
              header="Name"
              :sortable="false"
              :showFilterMenu="false"
            >
              <template #body="{ data: { name } }">
                <div class="name-user">
                  {{ name || '' }}
                </div>
              </template>
            </Column>
            <Column
              field="numberOfSequences"
              header="Number Of Sequences"
              :sortable="false"
              :showFilterMenu="false"
            >
              <template #body="{ data: { sequenceCount } }">
                <span>
                  {{ sequenceCount }}
                </span>
              </template>
            </Column>
            <Column header="Actions">
              <template #body="{ data: { id, name } }">
                <div
                  role="button"
                  @click="onEditTemplateClick(id)"
                  class="action-icons"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M7.243 18.5001H3V14.2571L14.435 2.82208C14.6225 2.63461 14.8768 2.5293 15.142 2.5293C15.4072 2.5293 15.6615 2.63461 15.849 2.82208L18.678 5.65108C18.8655 5.83861 18.9708 6.09292 18.9708 6.35808C18.9708 6.62325 18.8655 6.87756 18.678 7.06508L7.243 18.5001ZM3 20.5001H21V22.5001H3V20.5001Z"
                        fill="#6B7280"
                      />
                    </svg>
                  </div>
                </div>
              </template>
            </Column>
            <template #empty><b> No records found </b></template>
          </DataTable>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import { mapGetters } from 'vuex';

export default {
  name: 'CampaignTemplates',
  data() {
    return {
      campaignTemplates: [],
      rows: 25,
      loading: false,
      totalRecords: 0,
      offset: 0,
    };
  },
  mounted() {
    this.init();
  },

  computed: {
    ...mapGetters('auth', ['user']),
    ...mapGetters('marketing', ['getCampaignTemplates']),
  },

  methods: {
    onAddTemplatesClick() {
      this.$router.push({ name: 'campaign-templates-add' });
    },
    onEditTemplateClick(id) {
      this.$router.push({ name: 'campaign-templates-edit', params: { id } });
    },
    onPage({ page, rows }) {
      this.rows = rows;
      this.fetchCampaignTemplates(rows, page + 1);
    },
    async init() {
      if (
        !this.getCampaignTemplates ||
        (this.getCampaignTemplates && !this.getCampaignTemplates.meta)
      ) {
        try {
          this.$vs.loading();
          await this.fetchCampaignTemplates();
        } catch (error) {
          this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        } finally {
          this.$vs.loading.close();
        }
      } else {
        this.campaignTemplates = this.getCampaignTemplates.templates;
        const meta = this.getCampaignTemplates.meta;
        this.totalRecords = (meta || {}).totalItems || 0;
        this.rows = (meta || {}).perPage ? Number((meta || {}).perPage) : 10;
        this.offset = meta.currentPage - 1;
      }
    },
    async fetchCampaignTemplates(pageSize = 25, currentPage = 1) {
      try {
        const res = await this.$store.dispatch(
          'marketing/getCampaignTemplates',
          {
            params: {
              page: currentPage,
              pageSize,
            },
          }
        );
        this.campaignTemplates = res.data.payload.templates;
        const meta = res.data.payload.meta;
        this.totalRecords = (meta || {}).totalItems || 0;
        this.rows = (meta || {}).perPage ? Number((meta || {}).perPage) : 10;
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.action-icons {
  cursor: pointer;
}
</style>
