<template>
  <div class="mt-4">
    <vx-card>
      <div class="vx-row flex justify-end" v-if="!isPublicUrl">
        <div class="vx-col flex items-center">
          <vs-button
            v-if="selectedFiles.length > 0"
            class="ml-4"
            color="primary"
            type="border"
            icon="content_copy"
            size="small"
            @click.prevent="copyToClipboard"
          >
            Copy links
          </vs-button>
          <vs-button
            color="primary"
            type="border"
            size="small"
            icon="add"
            @click.stop="toggleFileUploadPrompt()"
          >
            Upload files
          </vs-button>
        </div>
      </div>
      <vs-divider />
      <div>
        <!--
          This is the only correct condition checking.
          value.files is only available for signed in user.
          publicFiles is only available for non-signed in user.
          filesToDisplay are those who pass the FE filter.
          We cannot put filesToDisplay in v-if, cause otherwise if you query a
          file that do not exist, the UI will never go back.
        -->
        <template
          v-if="
            (value.files || []).length > 0 || (publicFiles || []).length > 0
          "
        >
          <DataTable
            class="w-full"
            :value="filesToDisplay"
            :key="defaultKey"
            filterDisplay="row"
            :filters="filter"
            :loading="loading"
            responsiveLayout="scroll"
            :lazy="true"
            :selection.sync="selectedFiles"
          >
            <Column
              selectionMode="multiple"
              :headerStyle="{ width: '3em' }"
              :hidden="isPublicUrl"
            ></Column>
            <Column header="" :headerStyle="{ width: '0.5rem' }">
              <template #body="{ data }">
                <div class="flex items-center gap-1">
                  <vs-icon
                    class="cursor-pointer"
                    icon="file_download"
                    size="small"
                    @click.prevent="downloadFile(data)"
                  />
                  <vs-icon
                    v-if="!isPublicUrl"
                    class="cursor-pointer"
                    icon="delete"
                    size="small"
                    @click.prevent="deleteFile(data.fileId)"
                  />
                  <vs-icon
                    v-if="!isPublicUrl"
                    class="cursor-pointer"
                    icon="edit"
                    size="small"
                    @click.prevent="editFile(data.fileId)"
                  />

                  <vs-icon
                    v-if="isViewable(data)"
                    class="cursor-pointer"
                    icon="visibility"
                    size="small"
                    @click.prevent="toggleMediaPreview(data)"
                  />
                </div>
              </template>
            </Column>
            <Column
              field="isPrivate"
              header="Access"
              :showFilterMenu="false"
              :sortable="false"
              :hidden="isPublicUrl"
            >
              <template #body="{ data: { isPrivate } }">
                <div>
                  <span>
                    {{ getAccessLabel(isPrivate) }}
                  </span>
                </div>
              </template>
              <template #filter="{}">
                <Dropdown
                  v-model="filter['isPrivate'].value"
                  :options="accessOptions"
                  dataKey="uniqueId"
                  placeholder="Access"
                  optionLabel="label"
                  optionValue="value"
                  class="p-column-filter"
                  :showClear="true"
                  appendTo="body"
                />
              </template>
            </Column>
            <Column
              field="fileLabel"
              header="File Label"
              :showFilterMenu="false"
              :sortable="false"
            >
              <template #body="{ data: { fileLabel } }">
                <div>
                  <span>
                    {{ getLabel(fileLabel) }}
                  </span>
                </div>
              </template>
              <template #filter="{}">
                <Dropdown
                  v-model="filter['fileLabel'].value"
                  :options="fileLabelOptions"
                  dataKey="uniqueId"
                  placeholder="Label"
                  optionLabel="label"
                  optionValue="value"
                  class="p-column-filter"
                  :showClear="true"
                  appendTo="body"
                />
              </template>
            </Column>
            <Column
              field=""
              header="File Name"
              :showFilterMenu="false"
              :sortable="false"
            >
              <template #body="{ data: { originalFilename, storageFilename } }">
                <div>
                  <span>
                    {{ originalFilename ? originalFilename : storageFilename }}
                  </span>
                </div>
              </template>
              <template #filter="{}">
                <InputText
                  v-model="filter['fileName'].value"
                  placeholder="File Name"
                  class="p-column-filter"
                  :showClear="true"
                />
              </template>
            </Column>
            <Column
              field="createdAt"
              header="Uploaded Time"
              :showFilterMenu="false"
              :sortable="false"
            >
              <template #body="{ data: { createdAt } }">
                <div>
                  <span>
                    {{ createdAt ? convertToLocalDateTime(createdAt) : '' }}
                  </span>
                </div>
              </template>
            </Column>
            <template #empty><b>No records found</b></template>
          </DataTable>
        </template>
        <template v-else-if="!isPublicUrl">
          <Panel>
            <template #icons>
              <div class="vx-row">
                <div class="vx-col flex gap-1 items-center">
                  <vs-icon
                    class="cursor-pointer"
                    size="small"
                    icon="file_upload"
                    @click="openFileSelect"
                  />
                </div>
              </div>
            </template>
            <div>
              <span class="drag-box">
                <input
                  type="file"
                  multiple
                  ref="fileSelect"
                  @change="(event) => dragNdrop(event)"
                  @dragover="(e) => e.preventDefault()"
                  @dragenter="(e) => e.preventDefault()"
                  @drop.prevent="onDrop"
                />
                <div class="vx-row justify-center dragndrop">
                  <div class="vx-col">
                    <span class="text-gray-500"
                      >Drag and drop files to upload or click here to
                      upload</span
                    >
                  </div>
                </div>
              </span>
              <!-- <div id="preview" /> -->
            </div>
          </Panel>
        </template>
        <!-- Overlay for drag-n-drop -->
        <div
          v-if="
            !isPublicUrl &&
            isDragOverlayActive &&
            value.files &&
            value.files.length > 0
          "
          class="absolute inset-0 bg-gray-200 opacity-70 flex items-center justify-center"
          @dragover="(e) => e.preventDefault()"
          @dragenter="(e) => e.preventDefault()"
          @drop.prevent="onDrop"
        >
          <div class="flex flex-col items-center justify-center">
            <vs-icon
              class="text-6xl"
              icon="cloud_upload"
              color="primary"
              size="large"
            />
            <span class="text-xl font-bold">Drop files here</span>
          </div>
        </div>
      </div>
    </vx-card>

    <incident-file-upload-popup
      :isPromptActive="fileUploadPrompt.isPromptActive"
      :fileData="fileUploadPrompt.data"
      @onClose="toggleFileUploadPrompt"
      @onAccept="uploadFiles"
      @onAccept:Update="updateFile"
    />

    <media-preview
      v-if="mediaPreview.isActive"
      :isDialogActive="mediaPreview.isActive"
      :fileData="mediaPreview.data"
      @close="toggleMediaPreview()"
    />
  </div>
</template>

<script>
import IncidentFileUploadPopup from './IncidentFileUploadPopup.vue';
import MediaPreview from './MediaPreview.vue';
import {
  getUniqueIdV4,
  getSelectedFileExtension,
  getApiErrorMsg,
} from '@/helpers/helper';
import config from '@/config/constants';

export default {
  name: 'FilesTab',
  components: {
    IncidentFileUploadPopup,
    MediaPreview,
  },
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    // See the discussion on line 20.
    filesToDisplay() {
      const hasFilters = Object.keys(this.filter).some(
        (key) => this.filter[key].value
      );

      // These functions are for public URL
      if (this.isPublicUrl && !hasFilters) {
        return this.publicFiles;
      }
      if (this.isPublicUrl && hasFilters) {
        const filteredFiles = this.publicFiles.filter((file) => {
          return this.filteredDataTable(file);
        });
        return filteredFiles;
      }

      if (!this.isPublicUrl && !hasFilters) {
        return this.value.files;
      }
      if (!this.isPublicUrl && hasFilters) {
        const filteredFiles = this.value.files.filter((file) => {
          return this.filteredDataTable(file);
        });

        return filteredFiles;
      }
    },
  },
  data() {
    return {
      filter: {
        isPrivate: {
          value: null,
        },
        fileLabel: {
          value: null,
        },
        fileName: {
          value: null,
        },
      },
      loading: false,
      accessOptions: [
        { id: 1, label: 'Private', value: 'private' },
        { id: 2, label: 'Public', value: 'public' },
      ],
      fileLabelOptions: config.safetyModule.fileLabelOptions.sort((a, b) =>
        a.label < b.label ? -1 : 1
      ),
      fileUploadPrompt: {
        isPromptActive: false,
        data: null,
      },
      defaultKey: 0,
      mediaPreview: {
        isActive: false,
        data: null,
      },
      isPublicUrl: false,
      publicFiles: [],
      uploadPercentage: 0,
      isDragOverlayActive: false,
      selectedFiles: [],
    };
  },
  created() {
    if (this.$route.query.token && this.$route.params.id) {
      this.isPublicUrl = true;
      this.getViewPageFiles();
    }

    // Add event listener for drag-n-drop
    window.addEventListener('dragover', (e) => {
      e.preventDefault();

      const isLoaderActive =
        document.getElementsByClassName('con-vs-loading')[0];
      if (isLoaderActive) return;

      this.isDragOverlayActive =
        e.dataTransfer.types[0] === 'Files' &&
        !this.fileUploadPrompt.isPromptActive &&
        !this.mediaPreview.isActive;
    });
    window.addEventListener('drop', (e) => {
      e.preventDefault();
      this.isDragOverlayActive = false;
    });
    window.addEventListener('dragleave', (e) => {
      e.preventDefault();
      // Check if user dropped the file outside the browser
      if (e.clientX === 0 && e.clientY === 0) {
        this.isDragOverlayActive = false;
      }
    });
  },
  methods: {
    filteredDataTable(file) {
      const isPrivate = this.filter.isPrivate.value;
      const fileLabel = this.filter.fileLabel.value;
      const fileName = this.filter.fileName.value;

      const isPrivateMatch = isPrivate
        ? this.getAccessLabel(file.isPrivate).toLocaleLowerCase() ===
          this.getAccessLabel(isPrivate).toLocaleLowerCase()
        : true;
      const fileLabelMatch = fileLabel ? file.fileLabel === fileLabel : true;
      const fileNameMatch = fileName
        ? file.originalFilename
          ? file.originalFilename.toLowerCase().includes(fileName.toLowerCase())
          : (file.storageFilename || '')
              .toLowerCase()
              .includes(fileName.toLowerCase())
        : true;
      if (!this.isPublicUrl) {
        return isPrivateMatch && fileLabelMatch && fileNameMatch;
      }
      return fileLabelMatch && fileNameMatch;
    },
    getViewPageFiles() {
      const payload = {
        incidentId: this.$route.params.id,
        type: 'publicFiles',
        token: this.$route.query.token,
      };
      this.$store
        .dispatch('incidents/viewIncidentFiles', payload)
        .then(({ data }) => {
          this.publicFiles = data.payload.files;
        });
    },
    toggleFileUploadPrompt(data = null) {
      this.fileUploadPrompt = {
        isPromptActive: !this.fileUploadPrompt.isPromptActive,
        data,
      };
    },
    getFileExtension(files) {
      const fileExtension = files.map((file) => {
        const extension = file.name.split('.').pop();
        return { extension };
      });

      return fileExtension;
    },
    isViewable(file) {
      const extension = getSelectedFileExtension(file, [
        'storageFilename',
        'originalFilename',
      ]);
      const isPublicPage = this.$route.name === 'publicIncidentFiles';

      if (!this.isEdit && !isPublicPage) {
        return ['video', 'image', 'pdf'].includes(
          config.fileTypes[extension.toLowerCase()]
        );
      }

      const validTypes = ['video', 'image', 'pdf', 'doc', 'xls', 'msg'];
      const fileType = config.fileTypes[extension.toLowerCase()];

      return fileType && validTypes.includes(fileType);
    },
    async generateS3NameAndURL(files) {
      try {
        if (files.length === 0) return;

        const allFiles = await this.getFileExtension(files);
        const {
          data: { result, payload },
        } = await this.$store.dispatch('incidents/getUploadUrls', {
          incidentId: this.value.incidentId || null,
          files: allFiles,
        });

        return result && payload ? payload : [];
      } catch (error) {}
    },
    async uploadAttachmentsToS3(s3FileNameAndURL, files) {
      const loadingText = (fileNumber, percentage) => {
        return `Uploading file ${fileNumber} of ${s3FileNameAndURL.length} - ${percentage}%`;
      };

      this.$vs.loading({
        text:
          s3FileNameAndURL.length > 1
            ? loadingText(1, 0)
            : `${this.uploadPercentage}%`,
      });

      try {
        if (s3FileNameAndURL) {
          const attachments = [];

          for (let i = 0; i < s3FileNameAndURL.length; i++) {
            const { storageFilename, url } = s3FileNameAndURL[i];
            const file = files[i];

            const { status } = await this.$store.dispatch(
              'uploadFileToS3ViaPresignedUrl',
              {
                url,
                file,
                extension: storageFilename.split('.').pop(),
                setImagePreviewHeaders: false,
                onUploadProgress: (progressEvent) => {
                  this.uploadPercentage = parseInt(
                    Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    )
                  );

                  // Get loader text by class name and update the text
                  const h4 =
                    document.getElementsByClassName('title-loading')[0];
                  if (h4) {
                    h4.innerText =
                      s3FileNameAndURL.length > 1
                        ? loadingText(i + 1, this.uploadPercentage)
                        : `${this.uploadPercentage}%`;
                  }
                },
              }
            );

            if (status === 200)
              attachments.push({
                file,
                storageFilename,
                originalFilename: file.name,
              });
          }

          return attachments;
        }
      } catch (error) {
      } finally {
        this.$vs.loading.close();
        this.uploadPercentage = 0;
      }
    },
    getAccessLabel(isPrivate) {
      const label = this.accessOptions.find(
        (option) => option.value === isPrivate
      );

      return label ? label.label : 'Public';
    },
    getLabel(fileLabel) {
      const label = this.fileLabelOptions.find(
        (option) => option.value === fileLabel
      );

      return label ? label.label : '';
    },
    convertToLocalDateTime(dateTimeString) {
      return this.$dayjs.utc(dateTimeString).local().format('YYYY-MM-DD HH:mm');
    },
    async uploadFiles({ files, isPrivate, fileLabel }, togglePrompt = true) {
      try {
        const s3FileNameAndURL = await this.generateS3NameAndURL(files);
        const attachments =
          (await this.uploadAttachmentsToS3(s3FileNameAndURL, files)) || [];

        if (this.isEdit) {
          const payload = {
            incidentId: this.value.incidentId || null,
            files: attachments.map((attachment, index) => ({
              storageFilename: attachment.storageFilename,
              originalFilename: attachment.originalFilename,
              isPrivate: isPrivate[index],
              fileLabel: fileLabel[index],
            })),
          };

          await this.$store.dispatch('incidents/saveFiles', payload);
          const { data } = await this.$store.dispatch(
            'incidents/getIncidentFiles',
            this.value.incidentId
          );

          this.value.files = data.payload.files;
        } else {
          this.value.files = [
            ...(this.value.files || []),
            ...attachments.map((attachment, index) => ({
              ...attachment,
              fileId: getUniqueIdV4(),
              isPrivate: isPrivate[index],
              fileLabel: fileLabel[index],
            })),
          ];
        }

        this.$vs.notify({
          time: 8000,
          color: 'success',
          title: 'Success',
          text: 'Files uploaded successfully',
        });

        if (togglePrompt) this.toggleFileUploadPrompt();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      }
    },
    async updateFile(fileData) {
      try {
        if (this.isEdit) {
          this.$vs.loading();

          const payload = {
            incidentId: this.value.incidentId || null,
            files: [
              {
                fileId: fileData.fileId,
                isPrivate: fileData.isPrivate !== 'private' ? null : 'private',
                fileLabel: fileData.fileLabel,
              },
            ],
          };
          await this.$store.dispatch('incidents/updateIncidentFile', payload);

          const { data } = await this.$store.dispatch(
            'incidents/getIncidentFiles',
            this.value.incidentId
          );

          this.value.files = data.payload.files;
        } else {
          this.value.files = this.value.files.map((file) => {
            if (file.fileId === fileData.fileId) {
              return {
                ...file,
                isPrivate: fileData.isPrivate,
                fileLabel: fileData.fileLabel,
              };
            }

            return file;
          });
        }

        this.toggleFileUploadPrompt();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    deleteFile(fileId) {
      this.$vs.dialog({
        color: 'danger',
        title: 'Delete File',
        text: 'Are you sure you want to delete this file?',
        accept: this.deleteFileFromIncident.bind(this, fileId),
      });
    },
    async deleteFileFromIncident(fileId) {
      try {
        if (this.isEdit) {
          this.$vs.loading();
          await this.$store.dispatch('incidents/deleteIncidentFile', fileId);
          const { data } = await this.$store.dispatch(
            'incidents/getIncidentFiles',
            this.value.incidentId
          );

          this.value.files = data.payload.files;
        } else {
          this.value.files = this.value.files.filter(
            (file) => file.fileId !== fileId
          );
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    editFile(fileId) {
      const fileData = this.value.files.find((file) => file.fileId === fileId);

      this.toggleFileUploadPrompt(fileData);
    },
    toggleMediaPreview(data = null) {
      this.mediaPreview = {
        isActive: !this.mediaPreview.isActive,
        data,
      };
    },
    downloadFile(file) {
      const fileValue = file.file ? file.file : file;
      const extension = getSelectedFileExtension(fileValue, [
        'name',
        'originalFilename',
        'storageFilename',
      ]);

      if (extension === 'pdf') {
        const url = fileValue.storageFileUrl || URL.createObjectURL(fileValue);
        window.open(url, '_blank');
        return;
      }

      const link = document.createElement('a');
      link.href = fileValue.storageFileUrl || URL.createObjectURL(fileValue);
      link.download = fileValue.originalFilename || fileValue.name;

      // Start download of file
      link.click();
      // Free up resources
      setTimeout(() => {
        URL.revokeObjectURL(link.href);
      }, 100);
      // Remove link from DOM
      link.remove();
    },
    onDrop(event) {
      const files = [...event.dataTransfer.files];

      const isPrivate = [];
      const fileLabel = [];
      for (let i = 0; i < files.length; i++) {
        isPrivate.push(null);
        fileLabel.push(null);
      }

      if (files.length > 0) {
        this.uploadFiles({ files, isPrivate, fileLabel }, false);
      }
    },
    dragNdrop(event) {
      const files = event.target.files;

      const filesHolder = [];
      const isPrivate = [];
      const fileLabel = [];
      for (let i = 0; i < files.length; i++) {
        filesHolder.push(files[i]);
        isPrivate.push(null);
        fileLabel.push(null);
      }
      this.uploadFiles({ files: filesHolder, isPrivate, fileLabel }, false);
    },
    openFileSelect() {
      this.$refs.fileSelect.click();
    },
    async copyToClipboard() {
      try {
        const response = await this.$store.dispatch(
          'incidents/getLinksForFiles',
          {
            incidentId: this.value.incidentId,
            files: this.selectedFiles.map((file) => ({
              id: file.fileId,
            })),
          }
        );

        if (response.status === 200) {
          const linkArray = response.data.payload.files.map(({ link }) => link);
          const linkString = linkArray.join('\n\n'); // Easier to separate multiple links.
          await this.$copyText(linkString);
          this.selectedFiles = [];
          this.$vs.notify({
            color: 'success',
            title: 'Success',
            text: 'Copied to clipboard!',
          });
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
  watch: {
    'value.files': {
      handler() {
        this.selectedFiles = [];
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .p-panel-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0 1rem;
  }

  .p-column-filter-clear-button {
    display: none;
  }

  .vs-button--icon {
    z-index: auto;
  }
}

// Utility classes
.bg-gray-200 {
  background-color: rgb(229 231 235);
}

.opacity-70 {
  opacity: 0.7;
}

::v-deep {
  .p-panel-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0 1rem;
  }
}

.drag-box {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  color: #999;
  display: inline-block;
  transition: transform 0.3s;
  input[type='file'] {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    top: 0;
    left: 0;
  }
}

.dragndrop {
  line-height: 95px;
}
</style>
