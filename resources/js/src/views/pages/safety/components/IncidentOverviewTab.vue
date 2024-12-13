<template>
  <div>
    <!-- Incident Overview Details -->
    <div class="vx-row w-full m-0 mt-4">
      <!-- First Column -->
      <div class="vx-col w-full pl-0 md:w-1/3 mb-8 md:mb-0">
        <vx-card>
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Incident Details</h5>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                {{ formLabels.tag }}
              </label>
              <v-select
                :options="allTags"
                :clearable="true"
                v-model="value.tagId"
                label="business_name"
                :reduce="(option) => option.tag_id"
                class="mb-4 md:mb-0"
                @input="onTagChange"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.incidentDate }}</label>
              <flat-pickr class="w-full" v-model="value.incidentDate" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.incidentTime }}</label>
              <flat-pickr
                class="w-full"
                :config="configTimeFlatPickr"
                v-model="value.incidentTime"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.status }}</label>
              <v-select
                :options="status"
                :clearable="true"
                v-model="value.status"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
                @input="onStatusChange"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs"
                >{{ formLabels.closedDate }}
                <vs-button
                  color="warning"
                  type="flat"
                  size="small"
                  style="padding: 0; margin-left: 1rem"
                  :disabled="!value.closedDate"
                  @click="clearClosedDate"
                >
                  Clear
                </vs-button>
              </label>
              <flat-pickr class="w-full" v-model="value.closedDate" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                {{ formLabels.assigneeUserId }}
              </label>
              <v-select
                :options="allUsers"
                :clearable="true"
                v-model="value.assigneeUserId"
                :reduce="(option) => option.id"
                label="fullName"
                class="mb-4 md:mb-0 custom-height"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.followUpDate }}</label>
              <flat-pickr class="w-full" v-model="value.followUpDate" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.notes }}</label>
              <vs-textarea
                class="w-full"
                v-model="value.notes"
                height="138px"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                {{ formLabels.incidentClaimNumber }}
              </label>
              <vs-input class="w-full" v-model="value.incidentClaimNumber" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                {{ formLabels.thirdPartyIncidentClaimNumber }}
              </label>
              <vs-input
                class="w-full"
                v-model="value.thirdPartyIncidentClaimNumber"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.ncicNumber }}</label>
              <vs-input class="w-full" v-model="value.ncicNumber" />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                {{ formLabels.savedAddressAffected }}
              </label>
              <v-select
                :options="yesOrNo"
                :clearable="true"
                v-model="value.savedAddressAffected"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
        </vx-card>
      </div>
      <!-- Second Column -->
      <div class="vx-col w-full pl-0 md:pl-4 md:w-1/3 mb-8 md:mb-0">
        <vx-card>
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Incident Details</h5>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.chargeBack }}</label>
              <v-select
                :options="yesOrNo"
                :clearable="true"
                v-model="value.chargeBack"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.chargeBackAmount }}</label>
              <vs-input
                class="w-full"
                type="number"
                icon="attach_money"
                v-model.number="value.chargeBackAmount"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.estimates }}</label>
              <v-select
                :options="yesOrNo"
                :clearable="true"
                v-model="value.estimates"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.estimatesReceived }}</label>
              <v-select
                :options="yesOrNo"
                :clearable="true"
                v-model="value.estimatesReceived"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.costIncurred }}</label>
              <v-select
                :options="yesOrNo"
                :clearable="true"
                v-model="value.costIncurred"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.costAmount }}</label>
              <vs-input
                class="w-full"
                type="number"
                icon="attach_money"
                v-model.number="value.costAmount"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                {{ formLabels.dealWithInsuranceCompanyName }}
              </label>
              <span class="p-fluid">
                <AutoComplete
                  v-model="value.dealWithInsuranceCompanyName"
                  :suggestions="insuranceCompanySuggestions"
                  :autoHighlight="true"
                  @item-select="
                    handleAutoCompleteData(
                      $event,
                      'dealWithInsuranceCompanyName'
                    )
                  "
                  @complete="
                    autoComplete($event, 'dealWithInsuranceCompanyName')
                  "
                  @clear="updateObjectName('dealWithInsuranceCompanyName')"
                  field="dealWithInsuranceCompanyName"
                >
                  <template #item="slotProps">
                    <div>{{ slotProps.item.companyName }}</div>
                  </template>
                </AutoComplete>
              </span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.involvedType }}</label>
              <v-select
                :options="involvedTypes"
                :clearable="true"
                v-model="value.involvedType"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.involvedPersonName }}</label>
              <span class="p-fluid">
                <AutoComplete
                  v-model="value.involvedPersonName"
                  :suggestions="involvedPersonNameSuggestions"
                  :autoHighlight="true"
                  @item-select="
                    handleAutoCompleteData($event, 'involvedPersonName')
                  "
                  @complete="autoComplete($event, 'involvedPersonName')"
                  @clear="updateObjectName('involvedPersonName')"
                  field="involvedPersonName"
                >
                  <template #item="slotProps">
                    <div>{{ slotProps.item.fullName }}</div>
                  </template>
                </AutoComplete>
              </span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                {{ formLabels.involvedThirdPartyName }}
              </label>
              <span class="p-fluid">
                <AutoComplete
                  v-model="value.involvedThirdPartyName"
                  :suggestions="involvedThirdPartySuggestions"
                  :autoHighlight="true"
                  @item-select="
                    handleAutoCompleteData($event, 'involvedThirdPartyName')
                  "
                  @complete="autoComplete($event, 'involvedThirdPartyName')"
                  @clear="updateObjectName('involvedThirdPartyName')"
                  field="involvedThirdPartyName"
                >
                  <template #item="slotProps">
                    <div>{{ slotProps.item.companyName }}</div>
                  </template>
                </AutoComplete>
              </span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                {{ formLabels.involvedPersonType }}
              </label>
              <v-select
                :options="involvedPersonTypes"
                :clearable="true"
                v-model="value.involvedPersonType"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
        </vx-card>
      </div>
      <!-- Third Column -->
      <div
        class="vx-col w-full pl-0 md:pl-4 md:w-1/3 mb-8 md:mb-0 pr-4 md:pr-0"
      >
        <vx-card>
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Incident Details</h5>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">
                {{ formLabels.correctiveActionApplied }}
              </label>
              <v-select
                :options="yesOrNo"
                :clearable="true"
                v-model="value.correctiveActionApplied"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.dotRecordable }}</label>
              <v-select
                :options="yesOrNo"
                :clearable="true"
                v-model="value.dotRecordable"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.preventable }}</label>
              <v-select
                :options="yesOrNoOrUnknown"
                :clearable="true"
                v-model="value.preventable"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.atFault }}</label>
              <v-select
                :options="yesOrNoOrUnknown"
                :clearable="true"
                v-model="value.atFault"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.truckNumber }}</label>
              <span class="p-fluid">
                <AutoComplete
                  v-model="value.truckNumber"
                  :suggestions="truckNumberSuggestions"
                  :autoHighlight="true"
                  @item-select="handleAutoCompleteData($event, 'truckNumber')"
                  @complete="autoComplete($event, 'truckNumber')"
                  @clear="updateObjectName('truckNumber')"
                  field="truckNumber"
                >
                  <template #item="slotProps">
                    <div>{{ slotProps.item.number }}</div>
                  </template>
                </AutoComplete>
              </span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.trailerNumber }}</label>
              <span class="p-fluid">
                <AutoComplete
                  v-model="value.trailerNumber"
                  :suggestions="trailerNumberSuggestions"
                  :autoHighlight="true"
                  @item-select="handleAutoCompleteData($event, 'trailerNumber')"
                  @complete="autoComplete($event, 'trailerNumber')"
                  @clear="updateObjectName('trailerNumber')"
                  field="trailerNumber"
                >
                  <template #item="slotProps">
                    <div>{{ slotProps.item.number }}</div>
                  </template>
                </AutoComplete>
              </span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.locationType }}</label>
              <v-select
                :options="locationTypes"
                :clearable="true"
                v-model="value.locationType"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.address }}</label>
              <AutoComplete
                class="custom-input w-full"
                v-model="value.address"
                :suggestions="addressSuggestions"
                :autoHighlight="true"
                @item-select="handleAutoCompleteData($event, 'address')"
                @complete="autoComplete($event, 'address')"
                @clear="updateObjectName('address')"
                field="address"
              >
              </AutoComplete>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.reported }}</label>
              <v-select
                :options="yesOrNo"
                :clearable="true"
                v-model="value.reported"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0 custom-height"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.incidentType }}</label>
              <v-select
                :options="incidentTypes"
                :clearable="true"
                v-model="value.incidentType"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0 custom-height"
              />
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">{{ formLabels.description }}</label>
              <vs-input class="w-full" v-model="value.description" />
            </div>
          </div>
        </vx-card>
      </div>
    </div>
    <vx-card class="mt-4">
      <div class="vx-row">
        <vs-button
          ml-4
          color="danger"
          type="border"
          @click="deleteIncident"
          v-if="isEdit"
        >
          Delete
        </vs-button>
        <div class="vx-col ml-auto">
          <vs-button @click.stop="saveIncident">
            {{ isEdit ? 'UPDATE' : 'SAVE' }}
          </vs-button>
          <vs-button type="border" @click.stop="cancel"> CANCEL </vs-button>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
import { getUniqueIdV4 } from '@/helpers/helper';
import config from '@/config/constants.js';
import { isEmpty } from 'lodash';
import { mapGetters } from 'vuex';

export default {
  name: 'IncidentOverviewTab',
  props: {
    value: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('vehicleV2', ['getAllVehiclesList']),
    ...mapGetters('companyUserV2', ['getUsersList']),
    ...mapGetters('auth', ['user']),
    ...mapGetters('tag', ['allTags']),

    truckList() {
      if (!this.getAllVehiclesList.trucks) return [];

      return this.getAllVehiclesList.trucks.map((truck, index) => ({
        ...truck,
        uniqueId: `truck-${index}`,
      }));
    },
    trailerList() {
      if (!this.getAllVehiclesList.trailers) return [];

      return this.getAllVehiclesList.trailers.map((trailer, index) => ({
        ...trailer,
        uniqueId: `trailer-${index}`,
      }));
    },
    allUsers() {
      if (
        config.onlyUseSafetyTab.some(
          (item) =>
            item === this.user.admin_company_details.admin_company_detail_id
        )
      ) {
        return (
          this.getUsersList[JSON.stringify(this.defaultPayloadForUsers)] || []
        )
          .filter((user) => user.role === 'admin')
          .map((user, index) => {
            return {
              ...user,
              fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
              uniqueId: `user-${index}`,
            };
          });
      }

      return (
        this.getUsersList[JSON.stringify(this.defaultPayloadForUsers)] || []
      ).map((user, index) => {
        return {
          ...user,
          fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
          uniqueId: `user-${index}`,
        };
      });
    },
    showCustomFieldLabels() {
      if (this.user && this.user.admin_company_details) {
        return config.safetyCustomFieldLabels.some(
          (item) =>
            item === this.user.admin_company_details.admin_company_detail_id
        );
      }
    },
    insuranceCompanies() {
      return this.customersList.filter(
        (customer) => customer.type === 'insuranceCompany'
      );
    },
    formLabels() {
      if (this.showCustomFieldLabels) {
        return {
          ...config.safetyModule.formLabels,
          ...config.safetyModule.customFormLabels,
        };
      }

      return config.safetyModule.formLabels;
    },
  },
  data() {
    return {
      customersList: [],
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
      },
      status: config.safetyModule.status,
      yesOrNo: config.safetyModule.yesOrNo,
      involvedTypes: config.safetyModule.involvedTypes,
      involvedPersonTypes: config.safetyModule.involvedPersonTypes,
      locationTypes: config.safetyModule.locationTypes,
      incidentTypes: config.safetyModule.incidentTypes,
      addressSuggestions: null,
      yesOrNoOrUnknown: config.safetyModule.yesOrNoOrUnknown,
      truckNumberSuggestions: null,
      trailerNumberSuggestions: null,
      involvedPersonNameSuggestions: null,
      insuranceCompanySuggestions: null,
      involvedThirdPartySuggestions: null,
      defaultPayloadForUsers: {
        fields: ['firstName', 'lastName', 'role'],
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        this.getAllTags();
        this.getAllCustomers();
        this.getAllVehicles();

        if (
          (this.getUsersList[JSON.stringify(this.defaultPayloadForUsers)] || [])
            .length === 0
        ) {
          await this.$store.dispatch('companyUserV2/fetchUsers', {
            ...this.defaultPayloadForUsers,
          });
        }

        if (!this.isEdit) {
          this.addWatchOnIncidentDate();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getAllTags() {
      try {
        if ((this.allTags || []).length == 0) {
          const response = await this.$store.dispatch('tag/getAllTags');
        }
        /*
        this.allTags = response.payload.data.map((item) => ({
          ...item,
          uniqueId: getUniqueIdV4(),
        }));
        */
      } catch (error) {
        console.log(error);
      }
    },
    async getAllCustomers() {
      try {
        const { payload } = await this.$store.dispatch('customer/list');
        this.customersList = payload.customers || [];
      } catch (error) {
        console.log(error);
      }
    },
    async getAllVehicles() {
      try {
        if (isEmpty(this.getAllVehiclesList)) {
          await this.$store.dispatch('vehicleV2/fetchAllVehicles');
        }
      } catch (error) {
        console.log(error);
      }
    },
    cancel() {
      this.$emit('cancel');
    },

    saveIncident() {
      this.$emit('saveIncident');
    },

    deleteIncident() {
      this.$emit('delete');
    },

    handleAutoCompleteData({ value }, type) {
      switch (type) {
        case 'involvedPersonName':
          this.value.involvedUserId = value.id;
          this.value.involvedPersonName = value.fullName;
          break;
        case 'truckNumber':
          this.value.truckId = value.id;
          this.value.truckNumber = value.number;
          break;
        case 'trailerNumber':
          this.value.trailerId = value.id;
          this.value.trailerNumber = value.number;
          break;
        case 'address':
          this.value.savedAddressId = value.id;
          this.value.address = value.name;
          break;
        case 'dealWithInsuranceCompanyName':
          this.value.dealWithInsuranceCompanyId = value.id;
          this.value.dealWithInsuranceCompanyName = value.companyName;
          break;
        case 'involvedThirdPartyName':
          this.value.involvedThirdPartyId = value.id;
          this.value.involvedThirdPartyName = value.companyName;
          break;
        default:
          break;
      }
    },
    async autoComplete(event, type) {
      try {
        if (type === 'involvedPersonName') {
          this.value.involvedUserId = null;
          this.involvedPersonNameSuggestions = this.allUsers.filter((data) => {
            return data.fullName
              .toLowerCase()
              .includes(event.query.toLowerCase());
          });
        } else if (type === 'truckNumber') {
          this.value.truckId = null;
          this.truckNumberSuggestions = this.truckList.filter((data) => {
            return data.number
              .toLowerCase()
              .includes(event.query.toLowerCase());
          });
        } else if (type === 'trailerNumber') {
          this.value.trailerId = null;
          this.trailerNumberSuggestions = this.trailerList.filter((data) => {
            return data.number
              .toLowerCase()
              .includes(event.query.toLowerCase());
          });
        } else if (type === 'dealWithInsuranceCompanyName') {
          this.value.dealWithInsuranceCompanyId = null;
          this.insuranceCompanySuggestions = this.insuranceCompanies.filter(
            (data) => {
              return data.companyName
                .toLowerCase()
                .includes(event.query.toLowerCase());
            }
          );
        } else if (type === 'involvedThirdPartyName') {
          this.value.involvedThirdPartyId = null;
          this.involvedThirdPartySuggestions = this.customersList.filter(
            (data) => {
              return data.companyName
                .toLowerCase()
                .includes(event.query.toLowerCase());
            }
          );
        } else if (type === 'address') {
          this.$store
            .dispatch('saved-addresses/searchAddresses', event.query.trim())
            .then((data) => {
              this.value.address = event.query.trim();
              this.value.savedAddressId = null;
              this.addressSuggestions = data.payload
                .filter((data) => {
                  return data.name
                    .toLowerCase()
                    .includes(event.query.toLowerCase());
                })
                .map((data) => {
                  data.address = data.name;
                  return data;
                });
            });
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
    updateObjectName(type) {
      if (type === 'involvedPersonName') {
        this.value.involvedUserId = null;
        this.value.involvedPersonName = null;
      } else if (type === 'truckNumber') {
        this.value.truckNumber = null;
        this.value.truckId = null;
      } else if (type === 'trailerNumber') {
        this.value.trailerId = null;
        this.value.trailerNumber = null;
      } else if (type === 'address') {
        this.value.savedAddressId = null;
        this.value.address = null;
      }
    },
    onTagChange(tagId) {
      if (
        // I put this back as edit can cause problems, we need to cache old value
        // like load UI if customer needs us to change it.
        !this.isEdit &&
        tagId &&
        this.user.admin_company_detail_id &&
        config.showTagNumberPrefix.includes(this.user.admin_company_detail_id)
      ) {
        const payload = {
          tagId,
        };
        if (this.value.incidentDate) {
          payload.year = this.$dayjs(this.value.incidentDate).format('YYYY');
        }
        this.$store
          .dispatch('incidents/getCount', payload)
          .then(
            ({
              data: {
                payload: { count },
              },
            }) => {
              const { numberPrefix } = this.allTags.find(
                ({ tag_id }) => tag_id === tagId
              );
              this.value.incidentClaimNumber = '';
              if (typeof numberPrefix === 'string' && numberPrefix.length > 0) {
                this.value.incidentClaimNumber = numberPrefix + '-';
              }
              if (payload.year) {
                this.value.incidentClaimNumber += `${payload.year}-`;
              }

              const formattedCount = String(count + 1).padStart(3, '0');

              this.value.incidentClaimNumber += formattedCount;
            }
          )
          .catch((error) => {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: error.response.data.message,
            });
          });
      }
    },
    // Call this method from parent component in case of edit
    addWatchOnIncidentDate() {
      this.$nextTick(() => {
        this.$watch(
          'value.incidentDate',
          function () {
            const { tagId } = this.value || {};
            this.onTagChange(tagId || null);
          },
          { deep: true }
        );
      });
    },
    onStatusChange(status) {
      if (status === 'closed' && !this.value.closedDate) {
        this.value.closedDate = this.$dayjs().format('YYYY-MM-DD');
      }
    },
    clearClosedDate() {
      this.value.closedDate = '';
    },
  },
};
</script>

<style lang="scss" scoped>
// Utility classes
.custom-height {
  ::v-deep .vs__dropdown-menu {
    max-height: 180px !important;
  }
}

.custom-input {
  ::v-deep input[type='text'] {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.7rem !important;
    color: inherit;
    position: relative;
    padding: 0.6rem !important;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
    transition: all 0.3s ease;
    width: 100%;
  }
}

::v-deep {
  .vs-input--icon {
    font-size: 1.5rem;
  }
}
</style>
