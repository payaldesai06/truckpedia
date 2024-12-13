<template>
  <vs-popup title="Account" :active.sync="showEditAccountPopupInternal">
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <div class="mt-5">
          <label>Name <field-required-sign /></label>
          <div class="mt-2">
            <vs-input v-model="accountForm.name" class="w-full account-form" />
          </div>
        </div>
        <div class="mt-5">
          <label>Description</label>
          <div class="mt-2">
            <vs-input
              v-model="accountForm.description"
              class="w-full account-form"
            />
          </div>
        </div>
        <div class="mt-5">
          <label>GL Account</label>
          <div class="mt-2">
            <vs-input
              v-model="accountForm.glAccount"
              class="w-full account-form"
            />
          </div>
        </div>
      </div>
      <div class="vx-col w-1/2">
        <div class="account-type mt-5">
          <label>Account Type <field-required-sign /></label>
          <div class="mt-2">
            <v-select
              :options="accountTypeList"
              v-model="accountForm.type"
              :clearable="true"
              label="label"
              :reduce="(option) => option.value"
              class="mb-4 md:mb-0 account-form"
              :disabled="isEdit"
            />
          </div>
        </div>
        <div class="sub-account-form mt-5">
          <vs-checkbox v-model="accountForm.isSubAccount">
            Is sub-account of</vs-checkbox
          >
          <div class="mt-2">
            <v-select
              :options="this.accountsList"
              v-model="accountForm.parentAccountId"
              :clearable="true"
              label="accountName"
              class="account-form"
              :disabled="!accountForm.isSubAccount"
              :reduce="(option) => option.accountId"
            >
              <template v-slot:option="option">
                <span :style="{ paddingLeft: `${option.level * 20}px` }"></span>
                {{ option.accountName }}
              </template>
            </v-select>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12">
      <div class="text-right">
        <vs-button
          class="mt-5"
          @click="handleAccount"
          color="primary"
          type="filled"
          :disabled="isSubmitDisabled"
          >Submit</vs-button
        >
        <vs-button
          class="mt-5"
          @click="closePopup"
          color="primary"
          type="border"
          >Cancel</vs-button
        >
      </div>
    </div>
  </vs-popup>
</template>

<script>
import { getApiErrorMsg, getObjectDifference } from '@/helpers/helper';
import accountTypes from './accountTypes';

export default {
  name: 'AccountPopup',
  props: {
    showEditAccountPopup: {
      type: Boolean,
      default: false,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    selectedAccountId: {
      type: Number,
      default: '',
    },
    accountInfo: {
      type: Object,
      default: () => {},
    },
    accountsList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      accountForm: {
        type: null,
        name: null,
        description: null,
        glAccount: null,
        isSubAccount: false,
        parentAccountId: null,
      },
      accountTypeList: accountTypes,
    };
  },
  computed: {
    showEditAccountPopupInternal: {
      get() {
        return this.showEditAccountPopup;
      },
      set(value) {
        this.$emit('update:showEditAccountPopup', value);
      },
    },
    validateForm() {
      return (
        !this.errors.any() && this.accountForm.name && this.accountForm.type
      );
    },
    isSubmitDisabled() {
      return (
        !this.showEditAccountPopupInternal ||
        !this.validateForm ||
        (this.isEdit &&
          JSON.stringify(this.accountForm) ===
            JSON.stringify(this.accountFormForUpdate))
      );
    },
  },
  watch: {
    showEditAccountPopup(newVal, oldVal) {
      if (!this.isEdit) {
        this.accountForm = {
          type: null,
          name: null,
          description: null,
          glAccount: null,
          isSubAccount: false,
          parentAccountId: null,
        };
      } else {
        this.accountForm = {
          type: this.accountInfo.accountType,
          name: this.accountInfo.accountName,
          description: this.accountInfo.description,
          glAccount: this.accountInfo.glAccount,
          isSubAccount:
            this.accountInfo.parentAccount &&
            this.accountInfo.parentAccount.id > 0
              ? true
              : false,
          parentAccountId: this.accountInfo.parentAccount
            ? this.accountInfo.parentAccount.id
            : null,
        };
        this.accountFormForUpdate = structuredClone(this.accountForm);
      }
    },
    'accountForm.isSubAccount': function (newVal, oldVal) {
      if (newVal === false) {
        this.accountForm.parentAccountId = null;
      }
    },
    'accountForm.isSubAccount': function (newVal, oldVal) {
      if (newVal === false) {
        this.accountForm.parentAccountId = null;
      }
    },
  },
  methods: {
    closePopup() {
      this.showEditAccountPopupInternal = false;
    },
    async handleAccount() {
      try {
        // I finally figured out why the FE code does not work for me...
        // In Firefox, when I copy a child account like "Fuel", it actually
        // puts " Fuel" in the clipboard. So it's not a duplicate account in FE,
        // but BE treats it as a duplciate... It took me multiple hours to finally
        // found this out...
        const isDuplicate = this.accountsList.some((account) => {
          if (this.isEdit && account.id == this.selectedAccountId) {
            return false;
          }
          if (
            account.name.toLowerCase() != this.accountForm.name.toLowerCase()
          ) {
            return false;
          }
          if (account.type != this.accountForm.type) {
            return false;
          }
          if (!account.parentAccount && !this.accountForm.parentAccountId) {
            return true;
          }
          if (account.parentAccount && this.accountForm.parentAccountId) {
            return account.parentAccount.id == this.accountForm.parentAccountId;
          }
          return false;
        });

        const noSameType =
          this.accountForm.parentAccountId &&
          this.accountsList.find(
            (item) => item.id === this.accountForm.parentAccountId
          ).type != this.accountForm.type;
        if (isDuplicate) {
          this.$vs.notify({
            color: 'danger',
            title: 'Duplicate Account',
            text: 'An account with the same name, type and parent already exists. Please use a different name.',
          });
          return;
        }

        if (noSameType) {
          this.$vs.notify({
            color: 'danger',
            title: 'Child Account',
            text: 'Child account and parent account must have the same type.',
          });
          return;
        }

        if (
          this.isEdit &&
          this.hasChild(
            this.selectedAccountId,
            this.accountForm.parentAccountId
          )
        ) {
          this.$vs.notify({
            color: 'danger',
            title: 'Invalid Parent',
            text: 'Please select correct parent account.',
          });
          return;
        }
        let res;
        if (this.isEdit) {
          const payload = getObjectDifference(
            this.accountFormForUpdate,
            this.accountForm
          );
          // If it's empty, then set as null in the payload
          Object.keys(payload).forEach((key) => {
            if (payload[key] === '') {
              payload[key] = null;
            }
          });

          delete payload.isSubAccount;
          res = await this.$store.dispatch('accounting/updateAccount', {
            id: this.selectedAccountId,
            payload,
          });
        } else {
          const payload = Object.entries(this.accountForm).reduce(
            (acc, [key, value]) => {
              if (value || value === false || value === 0) {
                acc[key] = value;
              }
              return acc;
            },
            {}
          );
          delete payload.isSubAccount;
          res = await this.$store.dispatch('accounting/createAccount', payload);
        }
        if (res.status === 200) {
          this.$vs.notify({
            color: 'success',
            title: 'Saved account',
            text: 'Account updated successfully',
          });
          this.closePopup();
          this.$emit('refresh');
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    hasChild(currentId, selectedId) {
      if (currentId === selectedId) {
        return true;
      }
      const currentAccount = this.accountsList.find(
        (account) => account.id === currentId
      );
      if (!currentAccount) {
        return false;
      }

      const children = this.accountsList.filter(
        (account) =>
          account.parentAccount && account.parentAccount.id === currentId
      );
      for (const child of children) {
        if (child.id === selectedId) {
          return true;
        }
        if (this.hasChild(child.id, selectedId)) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style scoped lang="scss">
.account-type {
  ::v-deep .vs__dropdown-menu {
    max-height: 180px !important;
  }
}

.sub-account-form {
  ::v-deep .vs__dropdown-menu {
    max-height: 110px !important;
  }
}

.account-form {
  height: 40px;
  ::v-deep .vs-con-input,
  ::v-deep .vs-con-input input {
    height: 100%;
  }
}
</style>
