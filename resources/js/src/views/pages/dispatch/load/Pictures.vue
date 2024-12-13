<template>
  <div>
    <vx-card class="pb-20">
      <div class="vx-col w-full" v-if="!isLoadDeleted">
        <div
          class="mt-4 vx-col w-full"
          id="file-input"
          v-if="canAccess(this.roleModify)"
        >
          <vx-input-group class="mb-base">
            <div
              class="vs-component vs-con-input-label vs-input w-full vs-input-primary"
            >
              <div class="vs-con-input">
                <input
                  multiple
                  type="file"
                  class="vs-inputx vs-input--input normal hasValue"
                  ref="update_image_input"
                  accept="image/jpg,image/jpeg,image/png,application/pdf"
                  @change="update_image"
                />
              </div>
            </div>

            <template slot="append">
              <div class="append-text btn-addon">
                <vs-button color="primary" type="filled" @click="uploadImage">
                  Upload
                </vs-button>
              </div>
            </template>
          </vx-input-group>
        </div>
        <div
          class="flex item-center justify-end"
          v-if="loadPictures.length > 0"
        >
          <vs-button @click="toggleEmailPopup" v-if="selectedDocs.length > 0">
            Email
          </vs-button>
        </div>
        <vs-divider />
      </div>

      <template v-if="!loadPictures.length && !loadThirdPartyPictures.length">
        <div class="vx-col w-full">
          <h4 class="mt-8 text-center text-2xl font-medium opacity-75">
            No load images / files yet.
          </h4>
        </div>
      </template>
      <template v-else>
        <div
          class="vx-row px-6 gap-6 px-8 overflow-auto"
          style="max-height: 65vh"
        >
          <div
            class="mb-4"
            v-for="loadImage in loadPictures"
            :key="loadImage.load_image_id"
          >
            <!-- Code written by Vikas Swami-->
            <!-- Test Case: Image file -->
            <!-- This block should be rendered for image files -->
            <template v-if="isImage(loadImage.image_name)">
              <Checkbox
                class="mr-2 my-3"
                v-model="selectedDocs"
                :value="loadImage"
              />
              <div class="overlay">
                <vs-button
                  radius
                  v-if="canAccess(roleModify)"
                  color="danger"
                  size="large"
                  type="flat"
                  icon="delete"
                  @click="deleteLoadImageWarning(loadImage)"
                ></vs-button>
                <ImagePreview
                  :src="loadImage.image_url"
                  :alt="loadImage.image_alias"
                  :imageStyle="getPreviewDimension"
                  preview
                />
              </div>
              <p class="opacity-75 truncate">
                {{ loadImage.originalFileName || loadImage.image_alias }}
              </p>
            </template>
            <!-- Test Case: Non-image file -->
            <!-- This block should be rendered for non-image files -->
            <template v-else>
              <div v-if="loadImage.image_url">
                <Checkbox
                  class="mr-2 my-3"
                  v-model="selectedDocs"
                  :value="loadImage"
                />
                <div
                  class="pdf-preview-wrapper mt-8"
                  style="width: 100%"
                  :style="getPreviewDimension"
                >
                  <span
                    class="preview-close-icon"
                    @click="deleteLoadImageWarning(loadImage)"
                  >
                    <vs-icon
                      icon="cancel"
                      size="small"
                      color="#dd3439"
                    ></vs-icon>
                  </span>

                  <embed
                    :src="loadImage.image_url"
                    class="pdf-preview-iframe"
                  />

                  <div class="flex items-center space-x-3" style="width: 100%">
                    <img
                      :src="pdfPlaceHolderImage"
                      :alt="loadImage.image_alias"
                      style="width: 22px"
                    />
                    <p class="opacity-75 mr-3 whitespace-no-wrap truncate">
                      {{ loadImage.originalFileName || loadImage.image_alias }}
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>
      <template v-if="loadThirdPartyPictures.length">
        <div
          class="vx-row px-6 gap-6 px-8 overflow-auto"
          style="max-height: 65vh"
        >
          <div
            class="mb-4"
            v-for="loadThirdPartyImage in loadThirdPartyPictures"
            :key="loadThirdPartyImage.load_image_id"
          >
            <!-- This block should be rendered for image files -->
            <template v-if="isImage(loadThirdPartyImage.image_name)">
              <Checkbox
                class="mr-2 my-3"
                v-model="selectedDocs"
                :value="loadThirdPartyImage"
              />
              <div class="overlay">
                <ImagePreview
                  :src="loadThirdPartyImage.image_url"
                  :alt="loadThirdPartyImage.image_alias"
                  :imageStyle="getPreviewDimension"
                  preview
                />
              </div>
              <p class="opacity-75 truncate">
                {{
                  loadThirdPartyImage.originalFileName ||
                  loadThirdPartyImage.image_alias
                }}
              </p>
            </template>
            <!-- Test Case: Non-image file -->
            <!-- This block should be rendered for non-image files -->
            <template v-else>
              <div v-if="loadThirdPartyImage.image_url">
                <Checkbox
                  class="mr-2 my-3"
                  v-model="selectedDocs"
                  :value="loadThirdPartyImage"
                />
                <div
                  class="pdf-preview-wrapper mt-8"
                  style="width: 100%"
                  :style="getPreviewDimension"
                >
                  <embed
                    :src="loadThirdPartyImage.image_url"
                    class="pdf-preview-iframe"
                  />

                  <div class="flex items-center space-x-3" style="width: 100%">
                    <img
                      :src="pdfPlaceHolderImage"
                      :alt="loadThirdPartyImage.image_alias"
                      style="width: 22px"
                    />
                    <p class="opacity-75 mr-3 whitespace-no-wrap truncate">
                      {{
                        loadThirdPartyImage.originalFileName ||
                        loadThirdPartyImage.image_alias
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>
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
import config from '@/config/constants';
import ImagePreview from 'primevue/imagepreview';
import pdfPlaceHolder from '@assets/images/custom/pdf_images.png';
import { redirectToNewTab } from '@/helpers/helper';

export default {
  components: {
    ImagePreview,
    EmailPopup: () => import('@/components/email/EmailPopup.vue'),
  },
  name: 'Pictures',

  props: {
    loadId: {
      required: true,
      type: String | Number,
    },
    isLoadDeleted: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      pdfPlaceHolderImage: pdfPlaceHolder,
      zoomPopup: false,
      documentType: 'image',
      viewImagePopup: false,
      selecteLoadImage: '',
      viewImageData: {
        image_alias: null,
        image_url: null,
      },
      image: [],
      selectedDocs: [],
      roleModify: [config.roles.admin, config.roles.dispatcher],
      isEmailPopupActive: false,
    };
  },

  computed: {
    ...mapGetters('load', ['loadPictures', 'loadThirdPartyPictures']),
    getPreviewDimension() {
      return {
        width: config.loadPictureMaxWidthHeight,
        height: config.loadPictureMaxWidthHeight,
        objectFit: 'contain',
      };
    },
    selectedDocsForEmail() {
      if (this.selectedDocs.length > 0) {
        return this.selectedDocs.map(
          ({ originalFileName, image_name, purpose, image_url }) => {
            const extension = image_name.split('.').pop().toLowerCase();
            return {
              fileName: originalFileName || `${purpose}.${extension}`,
              url: image_url,
            };
          }
        );
      } else {
        [];
      }
    },
  },

  methods: {
    /**
     * Download
     */
    downloadFile(url) {
      // Test Case: Valid URL
      // This function should open a new tab with the provided URL.
      redirectToNewTab(url);
    },
    isImage(name) {
      // Code written by Vikas Swami
      // Test Case: Image file name with a valid extension
      // This function should return true for file names with valid image extensions like ".jpg", ".jpeg", and ".png".
      // Expected Output: true

      // Test Case: Non-image file name
      // This function should return false for file names with extensions other than image extensions.
      // Expected Output: false
      const imageExtensions = ['.jpg', '.jpeg', '.png'];
      const extension = name.substring(name.lastIndexOf('.')).toLowerCase();
      return imageExtensions.includes(extension);
    },
    deleteLoadImageWarning(loadImage) {
      this.selecteLoadImage = loadImage;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'Are you sure you want to delete this file?',
        accept: this.removeImage,
        acceptText: 'Confirm',
      });
    },

    removeImage() {
      if (!this.selecteLoadImage) return;
      const payload = {
        loadId: this.loadId,
        loadImageId: this.selecteLoadImage.load_image_id,
      };
      this.$store
        .dispatch('load/adminDeleteLoadImage', payload)
        .then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Deleted successfully',
            text: 'Load file is deleted successfully',
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
          this.removeSelectedFile(this.selecteLoadImage.load_image_id);
          this.selecteLoadImage = '';
        });
    },

    setViewImage(data) {
      this.viewImageData = {
        image_url: data.image_url,
      };
      this.zoomPopup = true;
    },

    initialValue() {
      this.image = [];
      this.$refs.update_image_input.value = '';
    },

    update_image(input) {
      if (input.target.files.length) {
        let images = [];
        for (let file of input.target.files) {
          images.push({
            name: 'file',
            file,
          });
        }
        this.image = images;
      }
    },

    // check is file is allow or not
    isRateConfirmationFileAllowed(file) {
      const allowedFileExtensions = ['jpeg', 'jpg', 'png', 'pdf'];

      const extension = file.name.split('.').pop().toLowerCase();

      return allowedFileExtensions.includes(extension);
    },

    uploadImagePromized(uploadFile) {
      return new Promise(async (resolve, reject) => {
        try {
          const file = uploadFile.file;
          const fileExtension = file.name.split('.').pop();

          await this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
            url: uploadFile.url,
            file,
            extension: fileExtension,
          });

          const picPayload = {
            id: this.loadId,
            payload: {
              document_type: 'image',
              image_name: uploadFile.storageFileName,
              originalFileName: file.name,
            },
          };
          await this.$store.dispatch('load/adminUploadLoadImage', picPayload);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },

    async uploadImage() {
      try {
        if (!this.image.length) {
          // Test Case: No file selected
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Please select an image or pdf.',
          });

          return 0;
        }

        //start the loader
        this.$vs.loading();
        let imagesUpload = [];
        const imagePayload = {
          loadId: this.loadId,
          files: [],
          type: 'pic',
        };
        for (let uploadFile of this.image) {
          if (!this.isRateConfirmationFileAllowed(uploadFile.file)) {
            // Test Case: Invalid file selected
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: 'Please select an image or pdf.',
            });
            this.$vs.loading.close();
            return false;
          }
          const file = uploadFile.file;
          const fileExtension = file.name.split('.').pop();
          imagePayload.files.push({ extension: fileExtension });
        }

        // get s3 signed urls
        const { payload: signUrlPayload } = await this.$store.dispatch(
          'load/getUploadUrlPath',
          imagePayload
        );

        this.image.forEach((img, index) => {
          img.url = signUrlPayload[index].url;
          img.storageFileName = signUrlPayload[index].storageFileName;
          imagesUpload.push(this.uploadImagePromized.bind(this, img));
        });

        await Promise.all(imagesUpload.map(async (upload) => await upload()));
        this.$vs.loading.close();
        this.initialValue();
        this.$vs.notify({
          color: 'primary',
          title: 'Load File',
          text: 'File uploaded successfully.',
        });
      } catch (error) {
        // Test Case: Error during upload
        // Test Case: Error during file upload or handling response
        this.$vs.loading.close();
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
    toggleEmailPopup() {
      this.isEmailPopupActive = !this.isEmailPopupActive;
    },
    removeSelectedFile(itemId) {
      this.selectedDocs = this.selectedDocs.filter(
        (doc) => doc.load_image_id !== itemId
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@sass/custom/form.scss';
.img-box {
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;
}
.overlay {
  position: relative;
  &:hover {
    button {
      display: block;
    }
  }
  button {
    display: none;
    position: absolute;
    right: 2%;
    top: 2%;
    z-index: 2;
  }
}
.pdf-preview-wrapper {
  border: 1px solid #d9dce0;
  border-radius: 10px;
  position: relative;
  padding: 0.75rem;
}
.preview-close-icon {
  position: absolute;
  right: -10px;
  z-index: 100;
  top: -12px;
  cursor: pointer;
}
.pdf-preview-iframe {
  width: 100%;
  min-height: 255px; // it should be above 250px to see pdf download options
  height: 90%;
  border: none;
}
</style>
