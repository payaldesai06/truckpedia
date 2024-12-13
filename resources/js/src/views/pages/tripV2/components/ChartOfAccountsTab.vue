<template>
  <div>
    <vx-card>
      <div class="vx-row justify-between items-center">
        <div class="vx-col">
          <h3 v-text="'Chart of Accounts'" />
        </div>
        <div class="vx-col">
          <vs-button color="primary" type="filled" @click="addAccount"
            >New</vs-button
          >
        </div>
      </div>
      <div class="vx-row mt-5">
        <div class="vx-col w-full">
          <DataTable :value="accountsList" responsiveLayout="scroll">
            <template #empty> No records found </template>
            <Column field="accountName" header="Name">
              <template #body="slotProps">
                <span
                  :style="{ paddingLeft: `${slotProps.data.level * 20}px` }"
                >
                  {{ slotProps.data.accountName }}
                </span>
              </template>
            </Column>
            <Column field="type" header="Type">
              <template #body="slotProps">
                {{
                  accountTypeList.find(
                    (item) => item.value === slotProps.data.type
                  ).label
                }}
              </template>
            </Column>
            <Column field="description" header="Description">
              <template #body="slotProps">
                {{ slotProps.data.description }}
              </template>
            </Column>
            <Column field="glAccount" header="GL Account">
              <template #body="slotProps">
                {{ slotProps.data.glAccount }}
              </template>
            </Column>
            <Column field="action" header="Action" :sortable="false">
              <template #body="slotProps">
                <div class="flex items-center space-x-2">
                  <vx-tooltip text="Edit">
                    <vs-button
                      color="primary"
                      type="filled"
                      icon-pack="feather"
                      icon="icon-edit"
                      size="small"
                      radius
                      @click.stop="editAccount(slotProps.data.accountId)"
                    ></vs-button>
                  </vx-tooltip>
                </div>
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </vx-card>
    <AccountPopup
      :showEditAccountPopup="showEditAccountPopup"
      :isEdit="isEditAccount"
      :selectedAccountId="selectedAccountId"
      :accountInfo="selectedAccount"
      @update:showEditAccountPopup="handleEditAccount"
      :accountsList="accountsList"
      @refresh="getAccounts()"
    >
    </AccountPopup>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import accountTypes from './ChartOfAccounts/accountTypes';
import AccountPopup from './ChartOfAccounts/AccountPopup.vue';
export default {
  name: 'ChartOfAccountsTab',
  data() {
    return {
      accountsList: [],
      isEditAccount: false,
      showEditAccountPopup: false,
      selectedAccountId: null,
      selectedAccount: {},
      accountTypeList: accountTypes,
    };
  },
  components: {
    AccountPopup,
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();
        await this.getAccounts();
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
    },
    async getAccounts() {
      try {
        const res = await this.$store.dispatch('accounting/getAccounts', {
          params: {
            fields: [
              'type',
              'name',
              'description',
              'parentAccount',
              'glAccount',
            ],
          },
        });
        this.accountsList = this.processAccountsData(res.data.payload.accounts);
      } catch (error) {
        console.log(error);
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    processAccountsData(accounts) {
      const processData = [];
      function processAccount(account, level = 0) {
        processData.push({
          ...account,
          accountId: account.id,
          accountName: account.name,
          accountType: account.type,
          description: account.description,
          glAccount: account.glAccount,
          level,
        });
        const subAccounts = accounts.filter(
          (subAccount) =>
            subAccount.parentAccount &&
            subAccount.parentAccount.id === account.id
        );
        subAccounts.forEach((subAccount) => {
          processAccount(subAccount, level + 1);
        });
      }

      accounts.forEach((account) => {
        if (!account.parentAccount) {
          processAccount(account);
        }
      });

      return processData;
    },
    onConfirm(options) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes',
        ...options,
      });
    },
    addAccount() {
      this.showEditAccountPopup = true;
      this.isEditAccount = false;
    },
    editAccount(accountId) {
      this.showEditAccountPopup = true;
      this.isEditAccount = true;
      this.selectedAccountId = accountId;
      this.selectedAccount = this.accountsList.find(
        (element) => element.id === this.selectedAccountId
      );
    },
    handleEditAccount(value) {
      this.showEditAccountPopup = value;
    },
  },
};
</script>

<style scoped></style>
