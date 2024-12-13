<template>
  <div class="maintenance-form">
    <!-- Header Section -->
    <vx-card class="header">
      <div class="vx-row">
        <div class="vx-col flex-wrap flex justify-between w-full">
          <h3 class="title">Maintenance</h3>
          <vs-button type="flat" @click.stop="redirectBackToIssuesList()">
            X
          </vs-button>
        </div>
      </div>
    </vx-card>

    <vx-card class="mt-4 status-container">
      <div class="vx-row flex justify-evenly">
        <div class="vx-col flex flex-col items-center">
          <vs-avatar
            icon="description"
            :color="
              formData.status === 'reported' ? 'primary' : 'rgb(195, 195, 195)'
            "
            @click="changeStatus('reported')"
          />
          <label class="text-md">Reported</label>
        </div>
        <div class="vx-col flex flex-col items-center">
          <vs-avatar
            icon="schedule"
            :color="
              formData.status === 'scheduled' ? 'primary' : 'rgb(195, 195, 195)'
            "
            @click="changeStatus('scheduled')"
          />
          <label class="text-md">Scheduled</label>
        </div>
        <div class="vx-col flex flex-col items-center">
          <vs-avatar
            icon="cached"
            :color="
              formData.status === 'in_service'
                ? 'primary'
                : 'rgb(195, 195, 195)'
            "
            @click="changeStatus('in_service')"
          />
          <label class="text-md">In Service</label>
        </div>
        <div class="vx-col flex flex-col items-center">
          <vs-avatar
            icon="done"
            :color="
              formData.status === 'completed' ? 'primary' : 'rgb(195, 195, 195)'
            "
            @click="changeStatus('completed')"
          />
          <label class="text-md">Completed</label>
        </div>
      </div>
    </vx-card>

    <!-- Forms Section -->
    <div
      class="vx-row m-auto mt-4 w-full md:mb-base maintenance-form-container"
    >
      <!-- First Column -->
      <div class="vx-col padding-left-0 w-full md:w-1/2 mb-8 md:mb-0">
        <!-- Reporting Form -->
        <vx-card class="reporting-form">
          <div class="vx-row">
            <div class="vx-col">
              <h4>Reporting</h4>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full flex flex-col">
              <label class="text-xs">Reported By</label>
              <Dropdown
                class="min-height-37"
                v-model="formData.reportedByUserId"
                :options="allUsers"
                dataKey="uniqueId"
                optionLabel="fullName"
                optionValue="id"
                :filter="true"
                placeholder="Select a User"
                :showClear="true"
              />
            </div>
            <div class="vx-col w-full mt-1 flex flex-col">
              <label class="text-xs">Vehicle</label>
              <Dropdown
                class="min-height-37"
                v-model="formData.vehicleId"
                :options="allVehicles"
                :disabled="!isMaintenanceModule"
                dataKey="uniqueId"
                optionLabel="number"
                optionValue="id"
                :filter="true"
                placeholder="Select a Vehicle"
                :showClear="true"
                @change="onVehicleChange"
              />
            </div>
            <div class="vx-col w-full">
              <label class="text-xs">Make</label>
              <vs-input class="w-full" v-model="formData.make" disabled />
            </div>
            <div class="vx-col w-full">
              <label class="text-xs">Year</label>
              <vs-input class="w-full" v-model="formData.year" disabled />
            </div>
            <div class="vx-col w-full">
              <label class="text-xs">VIN</label>
              <vs-input class="w-full" v-model="formData.vin" disabled />
            </div>
            <div class="vx-col w-full">
              <label class="text-xs">Type of Service</label>
              <div class="flex gap-3">
                <AutoComplete
                  v-model="formData.serviceType"
                  :suggestions="serviceTypeSuggestions"
                  :autoHighlight="true"
                  @item-select="handleServiceTypeChange($event)"
                  @complete="autoComplete($event)"
                  @clear="onClearServiceType"
                  field="serviceType"
                  class="w-full service-type-autocomplete"
                >
                  <template #item="slotProps">
                    <div>{{ slotProps.item.serviceType }}</div>
                  </template>
                </AutoComplete>
                <vs-button
                  color="primary"
                  type="border"
                  class="add-type-btn"
                  @click.stop="handleServiceTypeModal(true)"
                  >Add Type</vs-button
                >
              </div>
            </div>
            <div class="vx-col mt-1 w-full flex flex-col">
              <label class="text-xs">Priority</label>
              <Dropdown
                v-model="formData.priority"
                :options="prioritiesList"
                optionLabel="label"
                optionValue="value"
                placeholder="Select a Priority"
              />
            </div>
            <div class="vx-col w-full">
              <label class="text-xs">Notes</label>
              <vs-textarea
                class="w-full"
                v-model="formData.notes"
                maxLength="4000"
              />
            </div>
          </div>
        </vx-card>

        <!-- Pictures/Files Upload Section -->
        <vx-card class="files-upload mt-4">
          <div class="vx-row">
            <div class="vx-col">
              <h4>Add Pictures or Files</h4>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full" id="file-input">
              <vx-input-group class="mb-base">
                <div
                  class="vs-component vs-con-input-label vs-input w-full vs-input-primary"
                >
                  <div class="vs-con-input">
                    <input
                      type="file"
                      class="vs-inputx vs-input--input normal hasValue"
                      ref="fileUpload"
                      multiple
                      @change="fileSelected"
                    />
                  </div>
                </div>
              </vx-input-group>
            </div>
          </div>
          <div class="vx-row overflow-x-auto">
            <div class="vx-col w-full height-170">
              <Files :fileList="allAttachments" @deleteFile="removeFile" />
            </div>
          </div>
        </vx-card>
      </div>

      <!-- Second Column -->
      <div class="vx-col padding-right-0 w-full md:w-1/2 mb-8 md:mb-0">
        <!-- Scheduling Form -->
        <vx-card class="expiration-form">
          <div class="vx-row">
            <div class="vx-col">
              <h4>Scheduling</h4>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full">
              <label class="text-xs">Service Location</label>
              <vs-input class="w-full" v-model="formData.serviceLocation" />
            </div>
            <div class="vx-col mt-1 w-full flex flex-col">
              <label class="text-xs">Scheduled Start Time</label>
              <flat-pickr
                v-model="formData.scheduledStartTime"
                placeholder="Select Date and Time"
                :config="flatPickrConfig"
              />
            </div>
            <div class="vx-col mt-1 w-full flex flex-col">
              <label class="text-xs">Estimated Completion Time</label>
              <flat-pickr
                v-model="formData.estimatedCompletionTime"
                placeholder="Select Date and Time"
                :config="flatPickrConfig"
              />
            </div>
            <div class="vx-col w-full">
              <label class="text-xs">Estimated Cost</label>
              <vs-input class="w-full" v-model="formData.estimatedCost" />
            </div>
          </div>
        </vx-card>

        <!-- In Service Form -->
        <vx-card class="in-service-form mt-4">
          <div class="vx-row">
            <div class="vx-col">
              <h4>In Service</h4>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col mt-1 w-full flex flex-col">
              <label class="text-xs">Arrived For Service</label>
              <flat-pickr
                v-model="formData.arrivedForService"
                placeholder="Select Date and Time"
                :config="flatPickrConfig"
                @on-close="calculateDifferenceBetweenDateAndTime"
              />
            </div>
            <div class="vx-col mt-1 w-full flex flex-col">
              <label class="text-xs">Service Start Time</label>
              <flat-pickr
                v-model="formData.serviceStartTime"
                placeholder="Select Date and Time"
                :config="flatPickrConfig"
              />
            </div>
            <div class="vx-col mt-1 w-full flex flex-col">
              <label class="text-xs">Updated Estimated Completion Time</label>
              <flat-pickr
                v-model="formData.updatedEstimatedCompletionTime"
                placeholder="Select Date and Time"
                :config="flatPickrConfig"
              />
            </div>
          </div>
        </vx-card>

        <!-- Completed Form -->
        <vx-card class="completed-form mt-4">
          <div class="vx-row">
            <div class="vx-col">
              <h4>Completed</h4>
            </div>
          </div>
          <vs-divider />
          <div class="vx-row">
            <div class="vx-col w-full flex flex-col">
              <label class="text-xs">Service Completed Time</label>
              <flat-pickr
                v-model="formData.serviceCompletedTime"
                placeholder="Select Date and Time"
                :config="flatPickrConfig"
                @on-close="calculateDifferenceBetweenDateAndTime"
              />
            </div>
            <div class="vx-col w-full">
              <label class="text-xs">Time In Service</label>
              <vs-input class="w-full" v-model="formData.timeInService" />
            </div>
            <div class="vx-col w-full">
              <label class="text-xs">Final Cost</label>
              <vs-input class="w-full" v-model="formData.finalCost" />
            </div>
            <div
              class="vx-col w-full"
              v-show="
                selectedVehicleDetails &&
                selectedVehicleDetails.type === 'truck'
              "
            >
              <label class="text-xs">Odometer</label>
              <vs-input
                class="w-full"
                v-model="formData.odometer"
                type="number"
              />
            </div>
          </div>
        </vx-card>
      </div>
    </div>

    <vx-card class="mt-4">
      <div class="vx-row">
        <div class="vx-col ml-auto">
          <vs-button @click.stop="submitForm">SAVE</vs-button>
          <vs-button type="border" @click.stop="redirectBackToIssuesList()">
            CANCEL
          </vs-button>
        </div>
      </div>
    </vx-card>

    <AddServiceType
      :active="showServiceTypeModal"
      @close="handleServiceTypeModal(false)"
      @serviceAdded="serviceAdded"
    />
  </div>
</template>

<!-- eslint-disable nonblock-statement-body-position multiline-ternary no-undef -->
<script>
// Libraries
import { cloneDeep } from 'lodash';
import { mapGetters } from 'vuex';

// Constants
import config from '@/config/constants';

export default {
  name: 'MaintenanceForm',
  components: {
    AddServiceType: () => import('./components/AddServiceType.vue'),
    Files: () => import('@/components/files/Files'),
  },
  props: {
    truckData: {
      type: Object,
      default: () => {},
    },
    trailerData: {
      type: Object,
      default: () => {},
    },
    issueId: {
      type: Number,
      default: null,
    },
  },
  computed: {
    ...mapGetters('vehicleV2', ['getVehiclesList']),
    ...mapGetters('companyUserV2', ['getAllUsersList']),
    ...mapGetters('maintenanceV2', ['getSelectedIssue', 'getServiceTypes']),

    allUsers() {
      return this.getAllUsersList.map((user, index) => {
        return {
          ...user,
          uniqueId: `user-${index}`,
        };
      });
    },
    allVehicles() {
      const vehicles = [];
      const { trucks, trailers } = this.getVehiclesList;

      if (trucks)
        trucks.forEach((truck, index) => {
          vehicles.push({
            ...truck,
            id: `truck-${truck.id}`,
            type: 'truck',
            uniqueId: `truck-${index}`,
          });
        });
      if (trailers)
        trailers.forEach((trailer, index) => {
          vehicles.push({
            ...trailer,
            id: `trailer-${trailer.id}`,
            type: 'trailer',
            uniqueId: `trailer-${index}`,
          });
        });

      return vehicles;
    },
    selectedVehicleDetails() {
      const { vehicleId } = this.formData;
      if (!vehicleId) return null;

      const vehicle = this.allVehicles.find(
        (vehicle) => vehicle.id === vehicleId
      );

      return vehicle;
    },
    isEditForm() {
      return this.$route.name === 'maintenance-edit';
    },
    selectedIssue() {
      return this.getSelectedIssue;
    },
    allAttachments() {
      return [...this.formData.attachments, ...this.tempFileHolder];
    },
    isMaintenanceModule() {
      return (
        this.$route.name === 'maintenance-add' ||
        this.$route.name === 'maintenance-edit'
      );
    },
  },
  data() {
    return {
      flatPickrConfig: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        time_24hr: true,
      },
      prioritiesList: config.PRIORITIES_LIST,
      formData: {
        status: 'reported',
        reportedByUserId: null,
        vehicleId: null,
        make: null,
        year: null,
        vin: null,
        vehicleType: null,
        serviceType: null,
        serviceTypeId: null,
        priority: null,
        notes: null,
        serviceLocation: null,
        scheduledStartTime: null,
        estimatedCompletionTime: null,
        estimatedCost: null,
        arrivedForService: null,
        serviceStartTime: null,
        updatedEstimatedCompletionTime: null,
        serviceCompletedTime: null,
        timeInService: null,
        finalCost: null,
        odometer: null,
        attachments: [],
      },
      tempFileHolder: [],
      showServiceTypeModal: false,
      serviceTypeSuggestions: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      try {
        if (
          this.allUsers.length === 0 ||
          this.allVehicles.length === 0 ||
          this.isEditForm
        )
          this.$vs.loading();

        if (this.allUsers.length === 0)
          await this.$store.dispatch('companyUserV2/fetchAllUsers');
        if (this.allVehicles.length === 0)
          await this.$store.dispatch('vehicleV2/fetchVehicles');

        if (this.isMaintenanceModule && this.isEditForm) {
          const { id } = this.$route.params;
          await this.$store.dispatch('maintenanceV2/fetchIssue', id);
          this.formData = cloneDeep(this.selectedIssue);
          if (!this.selectedIssue.vehicleId) {
            this.formData.vehicleId = null;
          } else {
            this.formData.vehicleId = `${this.selectedIssue.vehicleType}-${this.selectedIssue.vehicleId}`;
          }
        } else if (!this.isMaintenanceModule && this.issueId) {
          await this.$store.dispatch('maintenanceV2/fetchIssue', this.issueId);
          this.formData = cloneDeep(this.selectedIssue);
          if (!this.selectedIssue.vehicleId) {
            this.formData.vehicleId = null;
          } else {
            this.formData.vehicleId = `${this.selectedIssue.vehicleType}-${this.selectedIssue.vehicleId}`;
          }
        }

        this.fetchServiceTypes();

        this.$nextTick(() => {
          if (
            !this.isMaintenanceModule &&
            !this.issueId &&
            (this.truckData || this.trailerData)
          ) {
            const vehicleType = this.truckData
              ? this.truckData.type
              : this.trailerData.type || null;
            if (!vehicleType) return;

            const vehicleId =
              vehicleType === 'truck'
                ? this.truckData.id
                : this.trailerData.id || null;

            this.formData.vehicleId = `${vehicleType}-${vehicleId}`;
            this.formData.make =
              vehicleType === 'truck'
                ? this.truckData.make
                : this.trailerData.make || null;
            this.formData.year =
              vehicleType === 'truck'
                ? this.truckData.year
                : this.trailerData.year || null;
            this.formData.vin =
              vehicleType === 'truck'
                ? this.truckData.vin
                : this.trailerData.vin || null;
          }
        });
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },
    redirectBackToIssuesList(updateList = false) {
      if (this.isMaintenanceModule) {
        this.$router.push({ name: 'maintenance-v2' });
      } else {
        this.$emit('closeMaintenanceForm', { updateList });
      }
    },
    changeStatus(status) {
      this.formData.status = status;
    },
    onVehicleChange({ value }) {
      if (value) {
        const { make, year, vin, type } = this.selectedVehicleDetails;

        this.formData.make = make;
        this.formData.year = year;
        this.formData.vin = vin;
        this.formData.vehicleType = type;
      }
    },
    calculateDifferenceBetweenDateAndTime() {
      if (
        this.formData.arrivedForService &&
        this.formData.serviceCompletedTime
      ) {
        const differenceInTime =
          new Date(this.formData.serviceCompletedTime) -
          new Date(this.formData.arrivedForService);

        const differenceInHours = Math.floor(
          differenceInTime / (1000 * 60 * 60)
        );

        const differenceInMinutes = Math.floor(
          (differenceInTime % (1000 * 60 * 60)) / (1000 * 60)
        );

        this.formData.timeInService = `${differenceInHours}h:${differenceInMinutes}m`;
      }
    },
    fileSelected(event) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        this.tempFileHolder.push(files[i]);
      }
      this.$refs.fileUpload.value = '';
    },
    removeFile({ file, index }) {
      if (file.id && file.url) this.formData.attachments.splice(index, 1);
      else
        this.tempFileHolder.splice(index - this.formData.attachments.length, 1);
    },
    assignSecondsToDate(date) {
      if (!date) return null;
      return `${date}:00`;
    },
    getFileExtension(files) {
      const fileExtension = files.map((file) => {
        const extension = file.name.split('.').pop();
        return { extension };
      });

      return fileExtension;
    },
    async generateS3NameAndURL(files) {
      try {
        if (files.length === 0) return;

        const issueAttachments = await this.getFileExtension(files);
        const {
          data: { result, payload },
        } = await this.$store.dispatch('maintenanceV2/uploadAttachment', {
          issueAttachments,
        });

        return result && payload ? payload : [];
      } catch (error) {}
    },
    async uploadAttachmentsToS3(s3FileNameAndURL) {
      try {
        if (s3FileNameAndURL) {
          const attachments = [];

          for (let i = 0; i < s3FileNameAndURL.length; i++) {
            const { fileName, url } = s3FileNameAndURL[i];
            const file = this.tempFileHolder[i];

            const { status } = await this.$store.dispatch(
              'uploadFileToS3ViaPresignedUrl',
              {
                url,
                file,
                extension: fileName.split('.').pop(),
              }
            );

            if (status === 200)
              attachments.push({
                id: null,
                fileName,
                originalFileName: file.name,
              });
          }

          return attachments;
        }
      } catch (error) {}
    },
    async submitForm() {
      try {
        this.$vs.loading();

        // Process attachments
        const s3FileNameAndURL = await this.generateS3NameAndURL(
          this.tempFileHolder
        );
        const attachments =
          (await this.uploadAttachmentsToS3(s3FileNameAndURL)) || [];

        const payload = {
          ...this.formData,
          scheduledStartTime: this.assignSecondsToDate(
            this.formData.scheduledStartTime
          ),
          estimatedCompletionTime: this.assignSecondsToDate(
            this.formData.estimatedCompletionTime
          ),
          arrivedForService: this.assignSecondsToDate(
            this.formData.arrivedForService
          ),
          serviceStartTime: this.assignSecondsToDate(
            this.formData.serviceStartTime
          ),
          updatedEstimatedCompletionTime: this.assignSecondsToDate(
            this.formData.updatedEstimatedCompletionTime
          ),
          serviceCompletedTime: this.assignSecondsToDate(
            this.formData.serviceCompletedTime
          ),
          attachments: [...this.formData.attachments, ...attachments],
          vehicleId: this.formData.vehicleId
            ? this.formData.vehicleId.split('-')[1]
            : null,
        };
        if (!payload.vehicleType && this.selectedVehicleDetails) {
          payload.vehicleType = this.selectedVehicleDetails.type;
        }

        if (this.isMaintenanceModule) {
          const { status } = this.isEditForm
            ? await this.$store.dispatch('maintenanceV2/updateIssue', {
                ...this.selectedIssue.id,
                payload,
              })
            : await this.$store.dispatch('maintenanceV2/createIssue', payload);
          if (status === 200) {
            await this.$store.dispatch('maintenanceV2/fetchIssueList');
            this.redirectBackToIssuesList();
          }
        } else if (!this.isMaintenanceModule) {
          const { status } = this.issueId
            ? await this.$store.dispatch('maintenanceV2/updateIssue', {
                ...this.issueId,
                payload,
              })
            : await this.$store.dispatch('maintenanceV2/createIssue', payload);
          if (status === 200) {
            this.redirectBackToIssuesList(true);
          }
        }
      } catch (error) {
        console.log(error);
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || 'Something went wrong',
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async fetchServiceTypes() {
      await this.$store.dispatch('maintenanceV2/getServiceTypes');
    },
    handleServiceTypeChange(event) {
      this.formData.serviceTypeId = event.value.id;
      this.formData.serviceType = event.value.serviceType;
    },
    onClearServiceType() {
      this.formData.serviceType = null;
      this.formData.serviceTypeId = null;
    },
    handleServiceTypeModal(value) {
      this.showServiceTypeModal = value;
    },
    autoComplete(event) {
      this.formData.serviceType = event.query;
      this.serviceTypeSuggestions = this.getServiceTypes.filter((customer) => {
        return customer.serviceType
          .toLowerCase()
          .includes(event.query.toLowerCase());
      });
    },
    async serviceAdded(service) {
      await this.fetchServiceTypes();
      const foundService = this.getServiceTypes.find(
        (item) => item.id === service.id
      );
      if (foundService) {
        this.formData.serviceType = foundService.serviceType;
        this.formData.serviceTypeId = foundService.id;
      }
      this.showServiceTypeModal = false;
    },
  },
};
</script>

<style lang="scss">
@import '@sass/custom/form.scss';
.maintenance-form {
  .vx-card {
    border-radius: 25px;
  }

  &-container {
    margin-top: 15px;

    .files-upload {
      ::v-deep {
        .con-input-upload {
          width: 95%;
          height: 100px;
        }

        .con-img-upload {
          max-height: 250px;
          overflow-y: auto;
        }

        .vs-button--icon {
          font-size: 24px;
        }
      }
    }

    ::v-deep {
      .p-dropdown-item {
        min-height: 35px;
      }
    }
  }

  .header {
    .title {
      align-self: center;
    }
  }

  .status-container {
    ::v-deep {
      .vs-button--icon {
        font-size: 1.7rem;
      }
    }
  }

  // Utilities
  .padding-right-0 {
    padding-right: 0;
  }

  .padding-left-0 {
    padding-left: 0;
  }

  .height-170 {
    height: 170px;
  }

  .min-height-37 {
    min-height: 37px;
  }
}
.service-type-autocomplete {
  display: block;
  input {
    width: 100%;
    border-radius: 5px;
    padding: 0.7rem;
    &:focus {
      box-shadow: none;
      border: 1px solid #ced4da;
    }
  }
}
.add-type-btn {
  white-space: nowrap;
  font-size: 0.9rem;
  padding: 0.5rem 0.6rem !important;
  width: 100px;
}
</style>
