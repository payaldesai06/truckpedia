<template>
  <div>
    <vx-card title="" class="mb-base">
      <div class="vx-row">
        <div class="vx-col w-full">
          <div
            class="mt-4 vx-col w-full"
            id="file-input"
            v-if="canAccess(roleModify)"
          >
            <div class="flex">
              <vx-input-group class="mb-base w-full">
                <div
                  class="vs-component vs-con-input-label vs-input w-full vs-input-primary"
                >
                  <div class="vs-con-input">
                    <input
                      type="file"
                      class="vs-inputx vs-input--input normal hasValue"
                      ref="document_file_input"
                      accept="application/pdf"
                      @change="updateImage"
                    />
                  </div>
                </div>
                <template slot="append">
                  <div class="append-text btn-addon">
                    <template>
                      <div class="dropdown-button-container mr-4 h-full">
                        <vs-dropdown vs-trigger-click>
                          <vs-button
                            class="btn-drop cursor-pointer h-full"
                            color="primary"
                            icon="expand_more"
                            icon-after
                            type="filled"
                          >
                            Upload
                          </vs-button>
                          <vs-dropdown-menu>
                            <vs-dropdown-item
                              @click="uploadFile('rateConfirmation')"
                              style="min-width: 150px"
                            >
                              Rate Confirmation
                            </vs-dropdown-item>
                            <vs-dropdown-item
                              @click="uploadFile('invoice')"
                              style="min-width: 150px"
                            >
                              Invoice
                            </vs-dropdown-item>
                            <vs-dropdown-item
                              @click="uploadFile('pod')"
                              style="min-width: 150px"
                            >
                              POD
                            </vs-dropdown-item>
                            <vs-dropdown-item
                              @click="uploadFile('bol')"
                              style="min-width: 150px"
                            >
                              BOL
                            </vs-dropdown-item>
                            <vs-dropdown-item
                              v-if="
                                isUserBrokerOrShipper ||
                                brokerModeForSpecificCompany
                              "
                              @click="uploadFile('thirdPartyCarrierInvoice')"
                              style="min-width: 150px"
                            >
                              Third Party Carrier Invoice
                            </vs-dropdown-item>
                            <vs-dropdown-item
                              @click="uploadFile('lumper')"
                              style="min-width: 150px"
                            >
                              Lumper
                            </vs-dropdown-item>
                            <vs-dropdown-item
                              @click="uploadFile('scale')"
                              style="min-width: 150px"
                            >
                              Scale
                            </vs-dropdown-item>
                            <vs-dropdown-item
                              @click="uploadFile('fuel')"
                              style="min-width: 150px"
                            >
                              Fuel
                            </vs-dropdown-item>
                            <vs-dropdown-item
                              @click="uploadFile('repair')"
                              style="min-width: 150px"
                            >
                              Repair
                            </vs-dropdown-item>
                            <vs-dropdown-item
                              @click="uploadFile('others')"
                              style="min-width: 150px"
                            >
                              Others
                            </vs-dropdown-item>
                          </vs-dropdown-menu>
                        </vs-dropdown>
                      </div>
                    </template>
                    <!-- <vs-button color="primary" type="filled" @click="submitForm">
                  Upload
                </vs-button> -->
                  </div>
                </template>
              </vx-input-group>
              <vs-button
                class="btn-drop cursor-pointer h-full"
                color="primary"
                type="border"
                v-if="selectedDocs.length >= 2"
                @click.stop="mergeDocuments"
              >
                Merge
              </vs-button>
            </div>

            <div class="mt-4 flex items-center justify-between">
              <vs-checkbox
                class="h-full inline-flex"
                v-model="showRateConToDriver"
                @change="updateShowRateConToDriver"
              >
                Rate con visible to driver?
              </vs-checkbox>
              <vs-button
                @click="toggleEmailPopup"
                v-if="selectedDocs.length > 0"
              >
                Email
              </vs-button>
            </div>
            <label class="inline-block mt-2 text-dark opacity-75">
              <strong class="font-semibold mr-1">NOTE:</strong>
              When you upload a new invoice, it will replace existing one.
            </label>
          </div>

          <vs-divider />
        </div>
        <div class="vx-col w-full space-y-6 fixed-overflow" id="loadDocsList">
          <DataTable
            v-if="documentsList.length > 0"
            :value="documentsList"
            showGridlines
            stripedRows
          >
            <Column field="docName" header="Name">
              <template #body="{ data }">
                <div class="flex items-center">
                  <Checkbox class="mr-2" v-model="selectedDocs" :value="data" />
                  <span>
                    {{ data.docName }}
                  </span>
                </div>
              </template>
            </Column>
            <!-- <Column field="docLink" header="Link"></Column> -->
            <Column field="categoryLabel" header="Category"></Column>
            <Column header="Actions">
              <template #body="{ data }">
                <dir class="flex justify-around content-center px-5">
                  <vs-icon
                    class="cursor-pointer"
                    size="medium"
                    icon-pack="feather"
                    icon="icon-download"
                    color="primary"
                    @click.stop="downloadDocument(data, data.category)"
                  />
                  <div style="min-width: 32px">
                    <vs-icon
                      v-show="
                        data.category !== 'invoice' &&
                        data.category !== 'thirdPartyCarrierBol' &&
                        data.category !== 'thirdPartyCarrierRateCon' &&
                        !('syncedFromThirdPartyCarrier' in data)
                      "
                      class="cursor-pointer"
                      size="medium"
                      icon="delete"
                      color="danger"
                      @click.stop="onConfirmDelete(data, data.category)"
                    />
                  </div>
                </dir>
              </template>
            </Column>
          </DataTable>
          <template v-else>
            <h4 class="mt-8 text-center text-2xl font-medium opacity-75">
              There are no documents yet.
            </h4>
          </template>
        </div>
      </div>
    </vx-card>
    <EmailPopup
      :isPopupActive="isEmailPopupActive"
      @closePopup="toggleEmailPopup"
      :selectedDocs="selectedDocsForEmail"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import pdfPlaceHolder from '@assets/images/custom/pdf_images.png';
import config from '@/config/constants';
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'DocumentUpload',
  components: {
    EmailPopup: () => import('@/components/email/EmailPopup.vue'),
  },
  props: {
    loadId: {
      required: true,
      type: String | Number,
    },
    downloadFile: {
      required: true,
      type: Function,
    },
    isLoadDeleted: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pdfPlaceHolderImage: pdfPlaceHolder,
      roleModify: [config.roles.admin, config.roles.dispatcher],
      fileToUpload: {
        file: null,
        name: '',
      },
      selectedDocs: [],
      showRateConToDriver: false,
      docTypes: {
        pod: 'POD',
        bol: 'BOL',
        lumper: 'Lumper',
        others: 'Others',
      },
      isEmailPopupActive: false,
    };
  },
  created() {
    this.showRateConToDriver = this.load.showRateConToDriver;
  },
  computed: {
    ...mapGetters('load', {
      loadInvoice: 'loadInvoice',
      loadProofOfDeliveries: 'loadProofOfDeliveries',
      loadThirdPartyCarrierProofOfDeliveries:
        'loadThirdPartyCarrierProofOfDeliveries',
      loadRateConfirmations: 'loadRateConfirmations',
      loadBol: 'loadBol',
      load: 'load',
      loadLumper: 'loadLumper',
      loadScale: 'loadScale',
      loadFuel: 'loadFuel',
      loadRepair: 'loadRepair',
      loadOthers: 'loadOthers',
      loadThirdPartyCarrierFiles: 'loadThirdPartyCarrierFiles',
      loadThirdPartyCarrierInvoice: 'loadThirdPartyCarrierInvoice',
    }),
    ...mapGetters('auth', [
      'isUserBrokerOrShipper',
      'user',
      'companyFeatureAccess',
    ]),

    documentsList() {
      const docList = [];
      if (this.loadInvoice) {
        const { invoice_file_name, invoice_file_url, originalFileName } =
          this.loadInvoice || {};
        docList.push({
          ...(this.loadInvoice || {}),
          docName: originalFileName || invoice_file_name || '',
          docLink: invoice_file_url || '',
          category: 'invoice',
          categoryLabel: 'Invoice',
        });
      }
      this.loadProofOfDeliveries.map((doc) => {
        docList.push({
          ...doc,
          docName: doc.originalFileName || doc.image_name || '',
          docLink: doc.image_url,
          category: 'pod',
          categoryLabel: 'POD',
        });
      });
      this.loadRateConfirmations.map((doc) => {
        docList.push({
          ...doc,
          docName: doc.originalFileName || doc.file_name || '',
          docLink: doc.file_url,
          category: 'rateConfirmation',
          categoryLabel: 'Rate Confirmation',
        });
      });

      this.loadBol.map((doc) => {
        docList.push({
          ...doc,
          docName: doc.originalFileName || doc.image_name || '',
          docLink: doc.image_url,
          category: 'bol',
          categoryLabel: 'BOL',
        });
      });

      this.loadLumper.map((doc) => {
        docList.push({
          ...doc,
          docName: doc.originalFileName || doc.image_name || '',
          docLink: doc.image_url,
          category: 'lumper',
          categoryLabel: 'Lumper',
        });
      });

      this.loadScale.map((doc) => {
        docList.push({
          ...doc,
          docName: doc.originalFileName || doc.image_name || '',
          docLink: doc.image_url,
          category: 'scale',
          categoryLabel: 'Scale',
        });
      });

      this.loadFuel.map((doc) => {
        docList.push({
          ...doc,
          docName: doc.originalFileName || doc.image_name || '',
          docLink: doc.image_url,
          category: 'fuel',
          categoryLabel: 'Fuel',
        });
      });

      this.loadRepair.map((doc) => {
        docList.push({
          ...doc,
          docName: doc.originalFileName || doc.image_name || '',
          docLink: doc.image_url,
          category: 'repair',
          categoryLabel: 'Repair',
        });
      });

      this.loadOthers.map((doc) => {
        docList.push({
          ...doc,
          docName: doc.originalFileName || doc.image_name || '',
          docLink: doc.image_url,
          category: 'others',
          categoryLabel: 'Others',
        });
      });

      if (
        (this.isUserBrokerOrShipper || this.brokerModeForSpecificCompany) &&
        this.loadThirdPartyCarrierProofOfDeliveries.length > 0
      ) {
        this.loadThirdPartyCarrierProofOfDeliveries.map((doc) => {
          docList.push({
            ...doc,
            docName: doc.originalFileName || doc.image_name || '',
            docLink: doc.image_url,
            category: 'pod',
            categoryLabel: 'POD',
            syncedFromThirdPartyCarrier: true,
          });
        });
      }

      if (Object.keys(this.loadThirdPartyCarrierFiles).length > 0) {
        const {
          bolOriginalFileName,
          bolStorageFileName,
          bolUrl,
          rateConOriginalFileName,
          rateConStorageFileName,
          rateConUrl,
        } = this.loadThirdPartyCarrierFiles;

        if (bolStorageFileName && bolUrl) {
          docList.push({
            docName: bolOriginalFileName || bolStorageFileName || '',
            docLink: bolUrl,
            category: 'thirdPartyCarrierBol',
            categoryLabel: 'Third Party Carrier BOL',
          });
        }

        if (rateConStorageFileName && rateConUrl) {
          docList.push({
            docName: rateConOriginalFileName || rateConStorageFileName || '',
            docLink: rateConUrl,
            category: 'thirdPartyCarrierRateCon',
            categoryLabel: 'Third Party Carrier Rate Con',
          });
        }
      }

      if (
        (this.isUserBrokerOrShipper || this.brokerModeForSpecificCompany) &&
        Object.keys(this.loadThirdPartyCarrierInvoice).length > 0
      ) {
        const { invoiceOriginalFileName, invoiceStorageFileName, invoiceUrl } =
          this.loadThirdPartyCarrierInvoice;

        if (invoiceUrl) {
          docList.push({
            docName: invoiceOriginalFileName || invoiceStorageFileName || '',
            docLink: invoiceUrl,
            category: 'thirdPartyCarrierInvoice',
            categoryLabel: 'Third Party Carrier Invoice',
          });
        }
      }

      return docList;
    },
    brokerModeForSpecificCompany() {
      return (
        config.showBrokerModeForSpecificCompanyIds.includes(
          this.user.admin_company_detail_id
        ) || this.companyFeatureAccess.includes('brokerModeForCarrier')
      );
    },
    selectedDocsForEmail() {
      if (this.selectedDocs.length > 0) {
        return this.selectedDocs.map((doc) => {
          return {
            fileName:
              doc.originalFileName || doc.docName || `${doc.categoryLabel}.pdf`,
            url: doc.docLink,
          };
        });
      } else {
        [];
      }
    },
  },
  methods: {
    /** Initialize/Reset Form data values */
    initialValue() {
      this.fileToUpload = {
        file: null,
        name: '',
      };
      this.$refs.document_file_input.value = '';
    },
    updateImage(input) {
      if (input.target.files && input.target.files[0]) {
        this.$set(this.fileToUpload, 'file', input.target.files[0]);
      } else {
        this.$set(this.fileToUpload, 'file', null);
      }
    },
    /* Check for input selection */
    isUploadFileSelected() {
      if (!this.fileToUpload.file) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select file.',
        });
        return false;
      }
      return true;
    },
    /* Check if file type is permitted */
    isValidFileType(file) {
      const allowedFileExtensions = ['pdf'];
      const extension = file.name.split('.').pop().toLowerCase();
      const isValidFile = allowedFileExtensions.includes(extension);
      if (!isValidFile) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please select a pdf file.',
        });
      }
      return isValidFile;
    },
    uploadFile(type) {
      /* File Validation */
      const hasFileSelection = this.isUploadFileSelected();
      if (!hasFileSelection) return;
      const isValidFileType = this.isValidFileType(this.fileToUpload.file);
      if (!isValidFileType) return;

      switch (type) {
        case 'rateConfirmation':
          this.uploadRateConfirmation();
          break;
        case 'invoice':
          this.uploadInvoice(); //onConfirmInvoiceUpload();
          break;
        case 'pod':
          this.uploadDocument('pod');
          break;
        case 'bol':
          this.uploadDocument('bol');
          break;
        case 'lumper':
          this.uploadDocument('lumper');
          break;
        case 'scale':
          this.uploadDocument('scale');
          break;
        case 'fuel':
          this.uploadDocument('fuel');
          break;
        case 'repair':
          this.uploadDocument('repair');
          break;
        case 'others':
          this.uploadDocument('others');
          break;
        case 'thirdPartyCarrierInvoice':
          this.uploadThirdPartyCarrierInvoice();
          break;
        default:
          break;
      }
    },
    async updateShowRateConToDriver() {
      const loadPayload = {
        loadId: this.loadId,
        showRateConToDriver: this.showRateConToDriver,
      };
      this.$store
        .dispatch('load/updateSelectFields', loadPayload)
        .then(() => {
          this.$vs.notify({
            title: 'Success',
            text: 'Rate con visibility updated',
            color: 'primary',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            title: 'Error',
            text: error.response.data.message,
            color: 'danger',
          });
        });
    },
    async generateFileNameAndUploadURL(uploadType) {
      const payload = {
        loadId: this.loadId,
        files: [
          {
            extension: this.fileToUpload.file.name.split('.').reverse()[0],
          },
        ],
        type: uploadType,
      };
      const { payload: s3UrlInfo } = await this.$store.dispatch(
        'load/getUploadUrlPath',
        payload
      );
      const { storageFileName, url } = s3UrlInfo[0] || {};
      return {
        fileName: storageFileName,
        uploadUrl: url,
      };
    },
    async uploadRateConfirmation() {
      const { fileName, uploadUrl } = await this.generateFileNameAndUploadURL(
        'rc'
      );
      const payload = {
        id: this.loadId,
        payload: {
          file_name: fileName,
          originalFileName: this.fileToUpload.file.name,
        },
      };
      this.$vs.loading();
      try {
        // upload file to S3
        await this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
          url: uploadUrl,
          file: this.fileToUpload.file,
          extension: 'pdf',
        });

        await this.$store.dispatch('load/adminUploadRateConfirmation', payload);

        this.initialValue();

        this.$vs.notify({
          color: 'primary',
          title: 'Rate Confirmation',
          text: 'File uploaded successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    async uploadDocument(documentType) {
      const documentTypeLabel = this.docTypes[documentType];
      const { fileName, uploadUrl } = await this.generateFileNameAndUploadURL(
        documentType
      );
      const payload = {
        id: this.loadId,
        payload: {
          document_type: documentType,
          image_name: fileName,
          originalFileName: this.fileToUpload.file.name,
        },
      };
      this.$vs.loading();
      try {
        // upload file to S3
        await this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
          url: uploadUrl,
          file: this.fileToUpload.file,
          extension: 'pdf',
        });

        await this.$store.dispatch('load/adminUploadLoadImage', payload);

        this.initialValue();

        this.$vs.notify({
          color: 'primary',
          title: documentTypeLabel,
          text: 'File uploaded successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    onConfirmInvoiceUpload() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        acceptText: 'Yes',
        title: 'Invoice Upload',
        text: 'Are you sure you want to upload an invoice for this order? After uploading an invoice, drivers will not be able to edit this load anymore.',
        accept: () => this.uploadInvoice(),
      });
    },
    async uploadInvoice() {
      const { fileName, uploadUrl } = await this.generateFileNameAndUploadURL(
        'inv'
      );
      const payload = {
        id: this.loadId,
        payload: {
          invoice_file_name: fileName,
          originalFileName: this.fileToUpload.file.name,
        },
      };
      this.$vs.loading();
      try {
        // upload file to S3
        await this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
          url: uploadUrl,
          file: this.fileToUpload.file,
          extension: 'pdf',
        });

        await this.$store.dispatch('load/adminUploadInvoice', payload);

        this.initialValue();

        this.$vs.notify({
          color: 'primary',
          title: 'Invoice',
          text: 'Invoice updated successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async uploadThirdPartyCarrierInvoice() {
      const { fileName, uploadUrl } = await this.generateFileNameAndUploadURL(
        'tpcinv'
      );
      const payload = {
        id: this.loadId,
        payload: {
          thirdPartyCarrierInvoiceStorageFileName: fileName,
          thirdPartyCarrierInvoiceOriginalFileName: this.fileToUpload.file.name,
        },
      };
      this.$vs.loading();
      try {
        // upload file to S3
        await this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
          url: uploadUrl,
          file: this.fileToUpload.file,
          extension: 'pdf',
        });

        await this.$store.dispatch(
          'load/adminUploadThirdPartyCarrierInvoice',
          payload
        );

        this.initialValue();

        this.$vs.notify({
          color: 'primary',
          title: 'Third Party Carrier Invoice',
          text: 'File uploaded successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    onConfirmDelete(item, type) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm',
        acceptText: 'Yes',
        text: 'Are you sure. You want to delete this file?',
        accept: () => this.deleteFile(item, type),
      });
    },
    deleteFile(item, type) {
      switch (type) {
        case 'rateConfirmation':
          this.deleteRateConfirmation(item);
          break;
        case 'invoice':
          /** Invoice doesn't have delete file option */
          break;
        case 'pod':
          this.deleteDocument(item, 'pod');
          break;
        case 'bol':
          this.deleteDocument(item, 'bol');
          break;
        case 'lumper':
          this.deleteDocument(item, 'lumper');
          break;
        case 'scale':
          this.deleteDocument(item, 'scale');
          break;
        case 'fuel':
          this.deleteDocument(item, 'fuel');
          break;
        case 'repair':
          this.deleteDocument(item, 'repair');
          break;
        case 'others':
          this.deleteDocument(item, 'others');
          break;
        case 'thirdPartyCarrierInvoice':
          this.deleteThirdPartyCarrierInvoice();
          break;
        default:
          break;
      }
    },
    async deleteDocument(item, documentType) {
      const payload = {
        loadId: this.loadId,
        loadImageId: item.load_image_id,
      };
      const typeName = this.docTypes[documentType];

      this.$vs.loading();
      try {
        await this.$store.dispatch('load/adminDeleteLoadImage', payload);
        this.$vs.notify({
          color: 'primary',
          title: typeName,
          text: 'File deleted successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
        this.removeSelectedFile(item.load_image_id);
      }
    },

    async deleteRateConfirmation(item) {
      const payload = {
        loadId: this.loadId,
        rateConfirmationId: item.load_rate_confirmation_id,
      };
      this.$vs.loading();
      try {
        await this.$store.dispatch('load/adminDeleteRateConfirmation', payload);
        this.$vs.notify({
          color: 'primary',
          title: 'Rate Confirmation',
          text: 'File deleted successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
        this.removeSelectedFile(item.load_rate_confirmation_id);
      }
    },
    async deleteThirdPartyCarrierInvoice() {
      const payload = {
        loadId: this.loadId,
      };
      this.$vs.loading();
      try {
        await this.$store.dispatch(
          'load/adminDeleteThirdPartyCarrierInvoice',
          payload
        );
        this.$vs.notify({
          color: 'primary',
          title: 'Third Party Carrier Invoice',
          text: 'File deleted successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 8000,
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    downloadDocument(data) {
      this.downloadFile(data.docLink);
    },
    pascalCaseConvert(text) {
      return text.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      });
    },
    toggleEmailPopup() {
      this.isEmailPopupActive = !this.isEmailPopupActive;
    },
    removeSelectedFile(itemId) {
      this.selectedDocs = this.selectedDocs.filter(
        (doc) =>
          doc.load_image_id !== itemId &&
          doc.load_rate_confirmation_id !== itemId
      );
    },
    async mergeDocuments() {
      try {
        this.$vs.loading();
        const sortingOrder = ['invoice', 'rateConfirmation', 'bol', 'pod'];
        const sortedDocs = [
          ...this.selectedDocs
            .filter((doc) => sortingOrder.includes(doc.category))
            .sort(
              (a, b) =>
                sortingOrder.indexOf(a.category) -
                sortingOrder.indexOf(b.category)
            ),
          ...this.selectedDocs.filter(
            (doc) => !sortingOrder.includes(doc.category)
          ),
        ];
        const payload = {
          sourcePdfs: sortedDocs.map((doc) => ({
            url: doc.docLink,
          })),
          mergedPdf: {
            storageFilename: this.getStorageFilename(
              'others',
              this.user.admin_company_detail_id,
              this.loadId
            ),
            directory: 'public/load/',
          },
        };

        await this.$store.dispatch('pdf/mergeAndUpload', payload);

        await this.$store.dispatch('load/adminUploadLoadImage', {
          id: this.loadId,
          payload: {
            document_type: 'others',
            image_name: payload.mergedPdf.storageFilename,
            originalFileName: 'Merged.pdf',
          },
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
        this.selectedDocs = [];
      }
    },
    getStorageFilename(type, companyId, loadId) {
      const timestamp = this.$dayjs().format('YYYYMMDD-HHmmss-SSS');
      const random = this.getRandomString(8);
      const lowerCaseExtension = 'pdf';
      return `${type}-${companyId}-${loadId}-${timestamp}-${random}.${lowerCaseExtension}`;
    },
    getRandomString(length) {
      let result = '';
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    },
  },
};
</script>

<style lang="scss">
@import '@sass/custom/form.scss';
.con-vs-dropdown--menu,
.con-vs-dialog {
  z-index: 52036;
}
.vs-component.con-vs-dialog.vs-dialog-danger {
  z-index: 99999;
}
.dropdown-button-container {
  button {
    height: 100%;
  }
}
.fixed-overflow {
  overflow: auto;
  padding-bottom: 250px !important;
  max-height: 100vh;
}
#loadDocsList {
  th {
    background: #d3d0fa;
  }
}
</style>
