<template>
  <div>
    <vs-popup classContent="popup-example" :active.sync="togglePopup">
      <template v-if="currentStep === 1">
        <h3 class="mb-8">Connect a new email account</h3>
        <div class="vs-row w-full" @click="toggleGoogleAccount">
          <div class="leadsOptionwrap">
            <div class="flex items-center">
              <div class="iconType pr-4">
                <img
                  src="@assets/images/custom/googleIcon.svg"
                  width="35px"
                  class="mt-4"
                />
              </div>
              <div class="txtType">
                <p>Google</p>
                <h3>Gmail / G-Suite</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="vs-row w-full" @click="toggleOutlookAccount">
          <div class="leadsOptionwrap">
            <div class="flex items-center">
              <div class="iconType pr-4">
                <img
                  src="@assets/images/custom/outlookIcon.svg"
                  width="35px"
                  class="mt-4"
                />
              </div>
              <div class="txtType">
                <p>Microsoft</p>
                <h3>Office 365 / Outlook</h3>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="currentStep === 2">
        <div v-if="googleAccount.isActive">
          <div>
            <div
              class="flex items-center mt-2 mb-4 header"
              @click="showProviderOptions"
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
                class="feather feather-chevron-left fea text-dark icon-xs"
                style="stroke-width: 3px; margin-top: -2px"
              >
                <g><polyline points="15 18 9 12 15 6"></polyline></g>
              </svg>
              <span class="text-muted pb-1">Select another provider</span>
            </div>
            <vs-divider />
            <div class="flex items-center">
              <div>
                <img
                  src="@assets/images/custom/googleIcon.svg"
                  width="35px"
                  class="mr-3 mt-2"
                />
              </div>
              <div>
                <h5 class="mb-0 fw-600">Connect Your Google Account</h5>
                <p class="mb-0 text-muted fw-600">Gmail / G-Suite</p>
              </div>
            </div>
            <div class="flex items-center justify-center pt-3">
              <p class="text-center fw-600">
                First, let's
                <span style="color: #006bff">enable IMAP</span> access <br />
                for your Google account.
              </p>
            </div>
            <vs-divider />
            <div>
              <ol class="pl-10" style="list-style-type: decimal !important">
                <li class="mt-4 mb-3">On your computer, open Gmail.</li>
                <li class="mb-3">
                  <span class="d-flex align-items-center">
                    Click the
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      class="mx-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                      ></path>
                    </svg>
                    gear icon in the top right corner.</span
                  >
                </li>
                <li class="mb-3">
                  Click
                  <span class="text-dark fw-600">All Settings</span>.
                </li>
                <li class="mb-3">
                  Click the
                  <span class="text-dark fw-600"
                    ><a
                      href="https://mail.google.com/mail/u/0/#settings/fwdandpop"
                      target="blank"
                      >Forwarding and POP/IMAP</a
                    ></span
                  >
                  tab.
                </li>
                <li class="mb-3">
                  In the "IMAP access" section, select
                  <span class="text-dark fw-600">Enable IMAP</span>.
                </li>
                <li>
                  Click
                  <span class="text-dark fw-600">Save Changes</span>.
                </li>
              </ol>
            </div>
            <!-- <div class="mt-4 text-center">
              <a class="text-muted flex justify-center" href="#" target="blank"
                >Show me how
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  ></path>
                </svg>
              </a>
            </div> -->
            <div class="mt-4 text-center">
              <vs-button @click="nextStep">
                <span class="flex items-center">
                  Yes, IMAP has been enabled
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                    ></path>
                  </svg>
                </span>
              </vs-button>
            </div>
          </div>
        </div>
        <div v-if="outlookAccount.isActive">
          <div>
            <div
              class="flex items-center mt-2 mb-4 header"
              @click="showProviderOptions"
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
                class="feather feather-chevron-left fea text-dark icon-xs"
                style="stroke-width: 3px; margin-top: -2px"
              >
                <g><polyline points="15 18 9 12 15 6"></polyline></g>
              </svg>
              <span class="text-muted pb-1">Select another provider</span>
            </div>
            <vs-divider />
            <div class="flex items-center">
              <div>
                <img
                  src="@assets/images/custom/outlookIcon.svg"
                  width="35px"
                  class="mr-3 mt-2"
                />
              </div>
              <div>
                <h5 class="mb-0 fw-600">Connect Your Microsoft Account</h5>
                <p class="mb-0 text-muted fw-600">Office 365 / Outlook</p>
              </div>
            </div>
            <div class="flex items-center justify-center pt-3">
              <p class="text-center fw-600">
                First, let's
                <span style="color: #006bff">enable IMAP</span> access <br />
                for your Microsoft account.
              </p>
            </div>
            <vs-divider />
            <div class="flex justify-center">
              <div class="outlook-wrap">
                <div class="flex justify-center">
                  <h4 class="header-text">
                    Microsoft accounts purchased directly from Microsoft
                  </h4>
                </div>
                <div class="flex justify-center">
                  <div class="outlook-card">
                    <ol
                      class="pl-10"
                      style="list-style-type: decimal !important"
                    >
                      <li class="mt-4 mb-3">
                        On your computer, log in to your
                        <span class="fw-600">
                          <a
                            href="https://admin.microsoft.com/#/homepage"
                            target="blank"
                          >
                            Microsoft Admin center
                          </a>
                        </span>
                      </li>
                      <li class="mb-3">
                        <span class="d-flex align-items-center">
                          Open
                          <a
                            href="https://admin.microsoft.com/#/users"
                            target="blank"
                            class="fw-600"
                          >
                            Active Users </a
                          >.
                        </span>
                      </li>
                      <li class="mb-3">
                        In the side window, click on
                        <span class="fw-600">Mail</span> tab, and then on
                        <span class="fw-600">Manage email apps.</span>
                      </li>
                      <li class="mb-3">
                        Check the
                        <span class="fw-600">Authenticated SMTP</span> box and
                        make sure <span class="fw-600">IMAP</span> is checked
                        too.
                      </li>
                      <li class="mb-3">
                        Click <span class="fw-600">Save Changes</span>.
                      </li>
                    </ol>
                  </div>
                </div>
                <div v-if="false" class="mt-4 text-center">
                  <a
                    class="text-muted flex justify-center"
                    href="#"
                    target="blank"
                  >
                    Show me how
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-4 text-center">
              <vs-button @click="linkEmailAccount('outlook')">
                <span class="flex items-center">
                  Yes, SMTP has been enabled
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                    ></path>
                  </svg>
                </span>
              </vs-button>
            </div>
          </div>
        </div>
      </template>
      <template v-if="currentStep === 3">
        <div v-if="googleAccount.isActive">
          <div>
            <div
              class="flex items-center mt-2 mb-4 header"
              @click="showProviderOptions"
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
                class="feather feather-chevron-left fea text-dark icon-xs"
                style="stroke-width: 3px; margin-top: -2px"
              >
                <g><polyline points="15 18 9 12 15 6"></polyline></g>
              </svg>
              <span class="text-muted pb-1">Select another provider</span>
            </div>
            <vs-divider />
            <div class="flex items-center">
              <div>
                <img
                  src="@assets/images/custom/googleIcon.svg"
                  width="35px"
                  class="mr-3 mt-2"
                />
              </div>
              <div>
                <h5 class="mb-0 fw-600">Connect Your Google Account</h5>
                <p class="mb-0 text-muted fw-600">Gmail / G-Suite</p>
              </div>
            </div>
            <p class="text-center fw-600 pt-5" style="color: #006bff">
              Select a connection option
            </p>
            <div class="flex justify-center">
              <div class="auth-wrap" @click="nextStep">
                <h6>oAuth</h6>
                <div>
                  <div class="mt-4">
                    <div class="flex items-center mt-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        class="mr-2"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                        ></path>
                      </svg>
                      Easier to setup
                    </div>
                    <div class="flex items-center mt-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        class="mr-2"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                        ></path>
                      </svg>
                      More stable and less disconnects
                    </div>
                    <div class="flex items-center mt-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        class="mr-2"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                        ></path>
                      </svg>
                      Available for GSuite accounts
                    </div>
                  </div>
                </div>
                <div class="px-2 py-1 rounded mr-2 recommended-btn mt-8">
                  <p class="fw-600 mb-0">Recommended</p>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <h6
                class="mb-0 text-muted flex items-center cursor-pointer"
                @click="backStep"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="mr-1"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                  ></path>
                </svg>
                Back
              </h6>
            </div>
          </div>
        </div>
      </template>
      <template v-if="currentStep === 4">
        <div v-if="googleAccount.isActive">
          <div>
            <div
              class="flex items-center mt-2 mb-4 header"
              @click="showProviderOptions"
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
                class="feather feather-chevron-left fea text-dark icon-xs"
                style="stroke-width: 3px; margin-top: -2px"
              >
                <g><polyline points="15 18 9 12 15 6"></polyline></g>
              </svg>
              <span class="text-muted pb-1">Select another provider</span>
            </div>
            <vs-divider />
            <div class="flex items-center">
              <div>
                <img
                  src="@assets/images/custom/googleIcon.svg"
                  width="35px"
                  class="mr-3 mt-2"
                />
              </div>
              <div>
                <h5 class="mb-0 fw-600">Connect Your Google Account</h5>
                <p class="mb-0 text-muted fw-600">Gmail / G-Suite</p>
              </div>
            </div>
            <div class="flex justify-center items-center mt-5 fd-column">
              <h6 class="text-muted">
                Allow Truckpedia to access your Google workspace
              </h6>
              <div class="flex items-center justify-center">
                <div
                  class="px-2 py-1 rounded mr-2 mt-2"
                  style="background: rgb(221, 254, 229); width: fit-content"
                >
                  <p
                    class="disable-selection font-weight-medium mb-0"
                    style="font-size: 12px; color: rgb(102, 102, 102)"
                  >
                    You only need to do this once per domain
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h6 class="text-center mt-8">
                <a
                  href="#"
                  target="blank"
                  class="flex items-center justify-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="mr-2"
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path
                      d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"
                    ></path>
                  </svg>
                  See tutorial video
                </a>
              </h6>
            </div>
            <vs-divider />
            <div>
              <ol
                class="mt-4 pl-10"
                style="list-style-type: decimal !important"
              >
                <li class="mb-4">
                  Go to your
                  <a
                    href="https://admin.google.com/u/1/ac/owl/list?tab=configuredApps"
                    target="blank"
                  >
                    Google Workspace Admin Panel
                  </a>
                </li>
                <li class="mb-4">
                  Click <span class="font-weight-bold">"Add App"</span>
                  <br />
                  and then select
                  <span class="font-weight-bold"
                    >"OAuth App Name or Client ID"</span
                  >
                </li>
                <li class="mb-3">
                  Use the following Client-ID to search for Truckpedia:
                  <br />
                  <div
                    id="textToCopy"
                    class="font-weight-normal small p-3 mt-2 rounded"
                    style="background: rgb(232, 232, 232)"
                  >
                    {{ oAuthGoogleKey }}
                  </div>
                  <div class="mt-4">
                    <span
                      id="copyButton"
                      @click="copyText"
                      style="
                        background: rgb(60, 60, 60);
                        color: rgb(255, 255, 255);
                        border-radius: 2px;
                        padding: 5px 10px;
                        cursor: pointer;
                      "
                    >
                      <small>Copy</small>
                    </span>
                  </div>
                </li>
                <li class="mb-4">
                  Select and approve Truckpedia to access your Google Workspace
                </li>
              </ol>
            </div>
            <div class="flex justify-center items-center">
              <div @click="backStep">
                <h6 class="mb-0 text-muted flex items-center cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="mr-1"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    style="margin-top: 0px"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                    ></path>
                  </svg>
                  Back
                </h6>
              </div>
              <div>
                <vs-button class="ml-5" @click="linkEmailAccount('gmail')">
                  <div class="flex items-center">
                    Login
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      style="margin-top: 3px"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                      ></path>
                    </svg>
                  </div>
                </vs-button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </vs-popup>
  </div>
</template>
<script>
import { getApiErrorMsg } from '@/helpers/helper';
import { EventBus } from '@/helpers/eventBus';
import config from '@/config/constants';

export default {
  name: 'LinkEmailAccountPopup',
  data() {
    return {
      currentStep: 1,
      googleAccount: {
        isActive: false,
        value: '',
      },
      outlookAccount: {
        isActive: false,
        value: '',
      },
      oAuthGoogleKey: config.oAuthGoogleClientId,
    };
  },
  props: {
    popupActive: {
      type: Boolean,
      default: false,
    },
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
  },
  methods: {
    toggleGoogleAccount() {
      this.currentStep = 2;
      this.googleAccount.isActive = true;
      this.outlookAccount.isActive = false;
    },
    toggleOutlookAccount() {
      this.currentStep = 2;
      this.outlookAccount.isActive = true;
      this.googleAccount.isActive = false;
    },
    showProviderOptions() {
      this.currentStep = 1;
      this.googleAccount.isActive = false;
    },
    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep += 1;
      }
    },
    backStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
    },
    resetValues() {
      this.googleAccount.isActive = false;
      this.googleAccount.value = '';
    },
    closePopup() {
      this.$emit('closePopup');
      this.currentStep = 1;
      this.resetValues();
    },
    async linkEmailAccount(provider) {
      try {
        const initCall = () => {
          if (provider === 'gmail') {
            return this.$store.dispatch('marketing/gmailInit');
          } else if (provider === 'outlook') {
            return this.$store.dispatch('marketing/outlookInit');
          }
        };
        const {
          data: {
            payload: { authorizationUrl },
          },
        } = await initCall();

        if (authorizationUrl) {
          const popup = window.open(
            authorizationUrl,
            '',
            'width=600, height=700, top=100, left=100'
          );
          const checkPopup = setInterval(() => {
            if (!popup || popup.closed || popup.closed == null) {
              clearInterval(checkPopup);
              EventBus.$emit('refreshEmailAccounts');
              this.$store.commit('marketing/setMarketingEmails', []);
              this.closePopup();
            }
          }, 1000);
        }
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    copyText() {
      const textToCopy = document.getElementById('textToCopy');
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy.textContent;
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999);
      try {
        this.$vs.notify({
          group: 'copy',
          type: 'success',
          title: 'Copied!',
          text: 'Text copied to clipboard successfully.',
        });
      } catch (err) {
        this.$vs.notify({
          group: 'copy',
          type: 'error',
          title: 'Error!',
          text: 'Failed to copy text to clipboard.',
        });
      }
      document.body.removeChild(textArea);
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .vs-popup {
    width: 50%;
  }
  .vs-popup--header {
    .vs-popup--title {
      visibility: hidden;
    }
  }
}
.leadsOptionwrap {
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
.drop-box {
  align-items: center;
  border-style: dashed;
  border-width: 2px;
  border-radius: 15px;
  border-color: rgb(204, 204, 204);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
  min-height: 300px;
  margin-top: 25px;
  position: relative;
  input {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
  }
  h6 {
    color: rgb(204, 204, 204);
  }
}
.leadsOptionwrap:hover {
  box-shadow: rgba(0, 0, 0, 0.176) 0px 1rem 3rem;
  border: 2px solid rgb(60, 60, 60);
}

.text-muted {
  color: #8492a6 !important;
}
.fw-600 {
  font-weight: 600;
}
.button-align {
  .vs-button-text.vs-button--text {
    display: flex;
    align-items: center;
  }
}

.auth-wrap {
  min-height: 270px;
  width: 320px;
  border-radius: 15px;
  background-color: rgb(2, 125, 255);
  color: white;
  box-shadow: rgb(2, 125, 255) 0px 0px 10px 0px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  h6 {
    color: #fff;
  }
  .recommended-btn {
    background: rgb(221, 254, 229);
    width: fit-content;
    p {
      font-size: 12px;
      color: rgb(102, 102, 102);
    }
  }
}

.header {
  cursor: pointer;
  width: fit-content;
  margin-left: -10px;
}

.fd-column {
  flex-direction: column;
}

.outlook-wrap {
  border: 2px solid rgb(239, 239, 239);
  box-shadow: rgb(239, 239, 239) 0px 0px 10px 0px;
  padding: 16px;
  min-width: 328px;
  max-width: 375px;
  height: 375px;
  .header-text {
    max-width: 300px;
    text-align: center;
    font-weight: 900;
  }

  .outlook-card {
    max-width: 300px;
    max-height: 250px;
    scroll-behavior: smooth;
    overflow-y: scroll;
  }
}
</style>
