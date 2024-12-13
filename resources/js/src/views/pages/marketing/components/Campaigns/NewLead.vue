<template>
  <vs-popup
    classContent="popup-example"
    :active.sync="togglePopup"
    title="Bulk Insert Manually"
  >
    <template>
      <div>
        <div class="w-full">
          <template v-if="currentStep === 1">
            <div class="vs-row w-full" @click="toggleUploadLeadsInput()">
              <div class="leads-option-wrap">
                <div class="flex items-center">
                  <div class="iconType pr-4">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 384 512"
                      color="#65d9a5"
                      height="40px"
                      width="40px"
                      xmlns="http://www.w3.org/2000/svg"
                      style="color: rgb(101, 217, 165)"
                    >
                      <path
                        d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-96 144c0 4.42-3.58 8-8 8h-8c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h8c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-8c-26.51 0-48-21.49-48-48v-32c0-26.51 21.49-48 48-48h8c4.42 0 8 3.58 8 8v16zm44.27 104H160c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h12.27c5.95 0 10.41-3.5 10.41-6.62 0-1.3-.75-2.66-2.12-3.84l-21.89-18.77c-8.47-7.22-13.33-17.48-13.33-28.14 0-21.3 19.02-38.62 42.41-38.62H200c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-12.27c-5.95 0-10.41 3.5-10.41 6.62 0 1.3.75 2.66 2.12 3.84l21.89 18.77c8.47 7.22 13.33 17.48 13.33 28.14.01 21.29-19 38.62-42.39 38.62zM256 264v20.8c0 20.27 5.7 40.17 16 56.88 10.3-16.7 16-36.61 16-56.88V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v20.8c0 35.48-12.88 68.89-36.28 94.09-3.02 3.25-7.27 5.11-11.72 5.11s-8.7-1.86-11.72-5.11c-23.4-25.2-36.28-58.61-36.28-94.09V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zm121-159L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
                      ></path>
                    </svg>
                  </div>
                  <div class="txtType">
                    <p>UPLOAD</p>
                    <h3>Excel/CSV</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="vs-row w-full" @click="toggleManualEmailInput">
              <div class="leads-option-wrap">
                <div class="flex items-center">
                  <div class="iconType pr-4">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      color="#3c3c3c"
                      height="40px"
                      width="40px"
                      xmlns="http://www.w3.org/2000/svg"
                      style="color: rgb(60, 60, 60)"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div class="txtType">
                    <p>ENTER</p>
                    <h3>Email Manually</h3>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-if="currentStep === 2">
            <div
              class="flex items-center mt-2 mb-4 header"
              @click="goToPreviousStep()"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-left fea text-dark icon-xs cursor-pointer"
                style="stroke-width: 3px; margin-top: -2px"
              >
                <g><polyline points="15 18 9 12 15 6"></polyline></g>
              </svg>
              <span class="text-muted pb-1 cursor-pointer">
                Select another method
              </span>
            </div>
            <vs-divider />
            <div v-if="uploadLeadsInput.isActive">
              <CsvUpload
                :colTypes="csvColTypes"
                @updateCsvData="updateSelectedLeads"
              />
            </div>
            <div v-if="manualEmailInput.isActive">
              <h4 class="mb-3">Bulk Insert Manually</h4>
              <div
                class="rounded p-3 shadow-sm mb-10"
                style="background: rgb(250, 250, 250)"
              >
                <p>
                  💡 To add emails with name, you can use the following format:
                </p>
                <p class="mb-0 mt-5" style="font-weight: 600">
                  "Josie Bruin" josie@bruin.com <br />
                </p>
              </div>
              <p class="mt-5 small mb-3">
                Type or paste email addresses (one email per line)
              </p>
              <textarea
                v-model="manualEmailInput.value"
                class="form-control shadow-lg border-0 p-3 w-full"
                rows="10"
                placeholder="Add your emails here"
                style="min-height: 200px"
              ></textarea>
            </div>
          </template>
        </div>
      </div>
    </template>
    <div class="flex items-center justify-between mt-5">
      <vs-button type="border" @click="closePopup()"> Cancel </vs-button>
      <vs-button
        type="filled"
        @click="handleSubmit()"
        v-if="currentStep === 2"
        :disabled="isImportLeadsBtnDisabled"
      >
        Import leads
      </vs-button>
    </div>
  </vs-popup>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'NewLeads',
  components: {
    CsvUpload: () => import('@/components/custom/CsvUpload.vue'),
  },
  props: {
    popupActive: {
      type: Boolean,
      default: false,
    },
    campaignId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      currentStep: 1,
      uploadLeadsInput: {
        isActive: false,
        value: [],
      },
      manualEmailInput: {
        isActive: false,
        value: '',
      },
      emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      csvColTypes: [
        { label: 'Email', value: 'email' },
        { label: 'First name', value: 'firstName' },
        { label: 'Last name', value: 'lastName' },
        { label: 'Job title', value: 'jobTitle' },
        { label: 'Company name', value: 'companyName' },
      ],
    };
  },
  computed: {
    togglePopup: {
      get() {
        return this.popupActive;
      },
      set(val) {
        if (!val) {
          this.closePopup();
        }
      },
    },
    isImportLeadsBtnDisabled() {
      if (this.manualEmailInput.isActive) {
        return !this.manualEmailInput.value;
      } else if (this.uploadLeadsInput.isActive) {
        return !this.uploadLeadsInput.value.length;
      }
      return true;
    },
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
      this.currentStep = 1;
      this.resetManualEmailInput();
      this.resetUploadLeadsInput();
    },
    extractInfo(inputStr) {
      if (inputStr.includes('"')) {
        const firstQuoteIndex = inputStr.indexOf('"');
        const lastQuoteIndex = inputStr.lastIndexOf('"');

        if (
          firstQuoteIndex === -1 ||
          lastQuoteIndex === -1 ||
          firstQuoteIndex === lastQuoteIndex
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid input format. Please provide a valid name and email in double quotes.',
          });
          return false;
        }

        const lastIndex = inputStr.lastIndexOf('"');
        const firstLastName = inputStr
          .slice(1, lastIndex)
          .trim()
          .replace(/\s\s+/g, ' ');
        let email = inputStr.slice(lastIndex + 1).trim();
        const nameParts = firstLastName.split(' ').filter((part) => part);
        if (nameParts.length > 2) {
          this.$vs.notify({
            color: 'warning',
            title: 'Alert',
            text: 'It appears you have a middle name. Please remove the middle name from the input.',
          });
          return false;
        }
        const [firstName, lastName] = firstLastName.split(' ');

        if (!this.emailRegex.test(email)) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid email address1: ' + email,
          });
          return false;
        }

        const emailStartIndex = email.indexOf('<');
        const emailEndIndex = email.lastIndexOf('>');
        if (emailStartIndex > -1 && emailEndIndex > emailStartIndex) {
          email = email.slice(emailStartIndex + 1, emailEndIndex).trim();
        }

        // if(email)
        return { firstName, lastName, email: email.trim() };
      } else {
        const trimmedEmail = inputStr
          .replace(/</g, '')
          .replace(/>/g, '')
          .trim();
        if (!this.emailRegex.test(trimmedEmail)) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid email address: ' + trimmedEmail,
          });
          return false;
        }
        return { email: trimmedEmail, firstName: null, lastName: null };
      }
    },
    async handleSubmit() {
      try {
        const leads = [];
        if (this.manualEmailInput.isActive) {
          const emails = this.manualEmailInput.value.split('\n');
          let allLeadsValid = true;
          emails.forEach((email) => {
            const data = this.extractInfo(email);
            if (!data) {
              allLeadsValid = false;
              return;
            }
            leads.push(data);
          });
          if (!allLeadsValid) return;
        } else if (this.uploadLeadsInput.isActive) {
          // Check if email column is selected or not
          const emailColData = this.uploadLeadsInput.value
            .filter(({ colType }) => colType === 'email')
            .reduce((acc, { colData }) => {
              acc.push(...colData);
              return acc;
            }, []);
          if (!emailColData.length) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: 'Please select a column with email addresses.',
            });
            return;
          }
          // Find repeated colTypes and show error
          const repeatedColTypes = this.uploadLeadsInput.value
            .map(({ colType }) => colType)
            .reduce((acc, colType, index, arr) => {
              if (arr.indexOf(colType) !== index && !acc.includes(colType)) {
                acc.push(colType);
              }
              return acc;
            }, []);
          if (repeatedColTypes.length) {
            const colLabels = {
              email: 'Email',
              firstName: 'First name',
              lastName: 'Last name',
              jobTitle: 'Job title',
              companyName: 'Company name',
            };
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: `You have selected the same column multiple times for ${repeatedColTypes
                .map((colType) => colLabels[colType])
                .join(', ')}. Each column can only be selected once.`,
            });
            return;
          }

          const firstNameColData = this.uploadLeadsInput.value
            .filter(({ colType }) => colType === 'firstName')
            .reduce((acc, { colData }) => {
              acc.push(...colData);
              return acc;
            }, []);
          const lastNameColData = this.uploadLeadsInput.value
            .filter(({ colType }) => colType === 'lastName')
            .reduce((acc, { colData }) => {
              acc.push(...colData);
              return acc;
            }, []);
          const jobTitleColData = this.uploadLeadsInput.value
            .filter(({ colType }) => colType === 'jobTitle')
            .reduce((acc, { colData }) => {
              acc.push(...colData);
              return acc;
            }, []);
          const companyNameColData = this.uploadLeadsInput.value
            .filter(({ colType }) => colType === 'companyName')
            .reduce((acc, { colData }) => {
              acc.push(...colData);
              return acc;
            }, []);

          let leadData = [];
          let invalidEmails = [];
          emailColData.forEach((email, idx) => {
            if (email && this.emailRegex.test(email)) {
              const lead = {
                email,
                firstName: firstNameColData[idx] || null,
                lastName: lastNameColData[idx] || null,
                jobTitle: jobTitleColData[idx] || null,
                companyName: companyNameColData[idx] || null,
              };
              leadData.push(lead);
            } else if (email) {
              invalidEmails.push(email);
            }
          });
          if (!leadData.length) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: 'No valid email addresses found in the selected column.',
            });
            return;
          }
          if (invalidEmails.length) {
            this.$vs.notify({
              color: 'danger',
              title: 'Alert',
              text: `The following email ${
                invalidEmails.length > 1 ? 'addresses are' : 'address is'
              } invalid: ${invalidEmails.slice(0, 5).join(', ')}${
                invalidEmails.length > 5
                  ? `... + ${invalidEmails.length - 5}`
                  : ''
              }`,
            });

            return;
          }

          leads.push(...leadData);
        }

        const response = await this.$store.dispatch('marketing/createLead', {
          campaignId: this.campaignId,
          leads,
        });
        if (response && response.data) {
          this.$vs.notify({
            color: 'primary',
            title: 'Campaign created',
            text: 'New campaign creaetd successfully.',
          });
          this.closePopup();
        } else {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid response from the server.',
          });
        }
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
      }
    },

    toggleUploadLeadsInput() {
      this.currentStep = 2;
      this.uploadLeadsInput.isActive = true;
    },
    toggleManualEmailInput() {
      this.currentStep = 2;
      this.manualEmailInput.isActive = true;
    },
    updateSelectedLeads(leads) {
      if (leads) {
        const allowedColTypes = this.csvColTypes.map(({ value }) => value);
        this.uploadLeadsInput.value = this.uploadLeadsInput.value.filter(
          ({ id }) => id !== leads.id
        );

        if (allowedColTypes.includes(leads.colType)) {
          this.uploadLeadsInput.value.push(leads);
        }
      } else {
        this.uploadLeadsInput.value = [];
      }
    },
    resetManualEmailInput() {
      this.manualEmailInput.isActive = false;
      this.manualEmailInput.value = '';
    },
    resetUploadLeadsInput() {
      this.uploadLeadsInput.isActive = false;
      this.uploadLeadsInput.value = [];
    },
    goToPreviousStep() {
      this.currentStep = 1;
      this.resetManualEmailInput();
      this.resetUploadLeadsInput();
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .vs-popup {
    width: 70%;
    max-width: 800px;
  }
  .vs-popup--header {
    display: none;
  }
}

.leads-option-wrap {
  cursor: pointer;
  transition: box-shadow 0.5s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px, rgba(0, 0, 0, 0.06) 0px 2px 12px;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 25px;
  .txtType {
    border-left: 1px solid rgb(189, 189, 189);
    padding-left: 15px;
    p {
      text-transform: uppercase;
      font-size: 14px;
      margin-bottom: 7px;
    }
    h3 {
      color: rgb(60, 60, 60);
      margin: 0px;
      font-size: 1.7rem;
      font-weight: 600;
    }
  }
}

.leads-option-wrap:hover {
  box-shadow: rgba(0, 0, 0, 0.176) 0px 1rem 3rem;
  border: 2px solid rgb(60, 60, 60);
}
</style>
