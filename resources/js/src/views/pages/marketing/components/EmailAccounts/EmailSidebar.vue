<template>
  <div class="overflow-auto">
    <vs-sidebar
      position-right
      parent="body"
      color="primary"
      spacer
      v-model="isSidebarActiveLocal"
    >
      <div class="flex justify-between items-center px-10 pt-3 opacity-50">
        <div>
          <h6 class="font-bold">{{ emailData.email }}</h6>
        </div>
        <div @click="closeSidebar" style="width: 30px" class="cursor-pointer">
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style="color: rgb(109, 114, 126)"
            size="24"
            id="sideModalCloseButton"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="h-full overflow-auto p-10 pb-32 pt-5">
        <h4>Settings</h4>
        <vs-divider />
        <div class="py-3 flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Final / User">
              <path
                id="Vector (Stroke)"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4ZM5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9Z"
                fill="#6D727E"
              />
              <path
                id="Vector (Stroke)_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0002 16C8.49591 16 5.51562 17.8999 3.86567 20.7509C3.58904 21.2289 2.97728 21.3921 2.49927 21.1155C2.02127 20.8389 1.85802 20.2271 2.13466 19.7491C4.11659 16.3245 7.73254 14 12.0002 14C16.2678 14 19.8837 16.3245 21.8657 19.7491C22.1423 20.2271 21.9791 20.8389 21.5011 21.1155C21.0231 21.3921 20.4113 21.2289 20.1347 20.7509C18.4847 17.8999 15.5044 16 12.0002 16Z"
                fill="#6D727E"
              />
            </g>
          </svg>
          <span class="font-bold pl-3">Sender name</span>
        </div>
        <vs-divider />
        <template>
          <div class="vs-row justify-between">
            <div class="vs-col w-1/2">
              <vs-input
                label="First Name"
                class="inputx w-full pr-3"
                v-model="emailData.firstName"
                data-vv-validate-on="blur"
                v-validate="'required'"
                name="firstName"
              />
              <span class="text-danger text-sm">
                {{ errors.first('firstName') }}
              </span>
            </div>
            <div class="vs-col w-1/2">
              <vs-input
                label="Last Name"
                class="inputx w-full"
                v-model="emailData.lastName"
                data-vv-validate-on="blur"
                v-validate="'required'"
                name="lastName"
              />
              <span class="text-danger text-sm">
                {{ errors.first('lastName') }}
              </span>
            </div>
          </div>
        </template>
        <template>
          <h4 class="font-bold pl-3 pt-100">Signature</h4>
          <vs-divider />
          <div>
            <vue-editor
              v-model="emailData.signature"
              :editorToolbar="customToolbar"
            ></vue-editor>
          </div>
        </template>
        <template>
          <div class="flex items-center pt-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="campaign">
                <path
                  id="Vector 6 (Stroke)"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.3628 3.69045L4.86939 8.85492L12.313 11.5905C12.6237 11.7046 12.8734 11.9421 13.0031 12.2466L15.9448 19.1534L20.3628 3.69045ZM21.1692 1.31346C22.0847 1.0083 22.9676 1.85368 22.7025 2.78154L17.2475 21.8741C16.9369 22.9612 15.4327 23.0549 14.9896 22.0147L11.2986 13.3484L2.03607 9.94445C0.970892 9.553 0.993959 8.03854 2.07053 7.67968L21.1692 1.31346Z"
                  fill="#6D727E"
                />
              </g>
            </svg>
            <h4 class="font-bold pl-3">Campaign Settings</h4>
          </div>
          <vs-divider />
          <div>
            <h5 class="font-bold">Daily campaign limit</h5>
            <p class="pt-2">Daily sending limit</p>
            <div class="flex items-center mt-4">
              <vs-input
                class="inputx"
                type="number"
                v-model.number="emailData.dailyLimit"
                data-vv-validate-on="blur"
                v-validate="'required|min_value:0|decimal:0'"
                name="dailyLimit"
              />

              <p class="pl-3">emails</p>
            </div>
            <span class="text-danger text-sm">
              {{ errors.first('dailyLimit') }}
            </span>
          </div>
        </template>
        <vs-divider class="mt-8" />
        <template>
          <div class="w-full mt-10">
            <vs-button
              type="filled"
              :disabled="isSubmitDisabled"
              @click.stop="updateEmailAccount"
            >
              Save
            </vs-button>
          </div>
        </template>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'EmailSidebar',
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  components: {
    VueEditor,
  },
  data() {
    return {
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link'],
      ],
      emailData: {},
      rawResponse: {},
      validationDict: {
        custom: {
          firstName: {
            required: 'First name is required',
          },
          lastName: {
            required: 'Last name is required',
          },
          dailyLimit: {
            required: 'Daily limit is required',
            min_value: 'The value must be greater than or equal to 0',
            decimal: 'The value must not contain decimal places',
          },
        },
      },
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.closeSidebar();
        }
      },
    },
    isSubmitDisabled() {
      let isDisabled = false;
      Object.keys(this.emailData).forEach((key) => {
        if (this.emailData[key] !== this.rawResponse[key]) {
          isDisabled = true;
        }
      });
      return !isDisabled;
    },
  },
  mounted() {
    this.$validator.localize('en', this.validationDict);
  },
  methods: {
    closeSidebar() {
      this.$emit('closeSidebar');
    },
    async initData() {
      try {
        const {
          data: { payload },
        } = await this.$store.dispatch(
          'marketing/getEmailAccountDetails',
          this.data.id
        );
        this.emailData = { ...(payload || {}) };
        this.rawResponse = { ...(payload || {}) };
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async updateEmailAccount() {
      try {
        await this.$validator.validateAll();
        if (this.errors.items.length > 0) return;
        const payload = Object.keys(this.emailData).reduce((acc, key) => {
          if (this.emailData[key] !== this.rawResponse[key]) {
            acc[key] = this.emailData[key];
          }
          return acc;
        }, {});

        const { data } = await this.$store.dispatch(
          'marketing/updateEmailAccount',
          {
            id: this.data.id,
            ...payload,
          }
        );
        this.$vs.notify({
          time: 8000,
          color: 'success',
          title: 'Success',
          text: data.message,
        });
        this.closeSidebar();
        this.$store.commit('marketing/setMarketingEmails', []);
        this.$emit('refreshEmailAccounts');
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
  watch: {
    isSidebarActive: {
      handler(val) {
        this.emailData = {};
        this.$validator.reset();
        if (val) {
          this.initData();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .vs-sidebar {
    max-width: 50%;
  }
}
.pt-100 {
  padding-top: 100px;
}
</style>
