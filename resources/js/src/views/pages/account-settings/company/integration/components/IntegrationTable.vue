<template>
  <vs-table class="mt-5" :data="['none']">
    <template slot="thead">
      <vs-th> Carrier </vs-th>
      <vs-th> Partner </vs-th>
      <!-- <vs-th> Integration Type </vs-th> -->
      <vs-th> Status </vs-th>
      <vs-th> Action </vs-th>
    </template>

    <template>
      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
        <vs-td>
          {{ data[indextr].carrier }}
        </vs-td>
        <vs-td>
          {{ data[indextr].partner }}
        </vs-td>
        <!-- <vs-td>
          {{ data.integrationType }}
        </vs-td> -->
        <vs-td>
          <span v-bind:title="data[indextr].connectionStatus">
            <vs-avatar
              size="26px"
              v-if="data[indextr].connectionStatus === 'Connected'"
              color="success"
              icon="check"
            />
            <vs-avatar
              size="26px"
              v-else-if="data[indextr].connectionStatus === 'Not connected'"
              color="danger"
              icon="close"
            />
            <!-- <vs-avatar
              size="26px"
              v-else-if="data[indextr].connectionStatus.length > 0"
              color="warning"
              icon="warning"
            /> -->
            <vs-avatar size="26px" v-else color="warning" icon="warning" />
          </span>
        </vs-td>
        <vs-td>
          <vs-button
            v-if="data[indextr].hideDropdown"
            type="filled"
            icon="settings"
            color="primary"
            size="small"
            @click="$emit('handleSetting', data[indextr].partner)"
          >
          </vs-button>
          <vs-dropdown
            vs-custom-content
            vs-trigger-click
            v-if="!data[indextr].hideDropdown"
          >
            <vs-button
              type="filled"
              icon="settings"
              color="primary"
              size="small"
            >
            </vs-button>

            <vs-dropdown-menu>
              <vs-dropdown-item
                v-if="data[indextr].connectionStatus !== 'Connected'"
                @click="
                  handleConnect(data[indextr].partner, data[indextr].tagId)
                "
              >
                Connect {{ data[indextr].partner }}
              </vs-dropdown-item>
              <vs-dropdown-item
                @click="
                  handleDisconnect(data[indextr].partner, data[indextr].tagId)
                "
                v-if="
                  data[indextr].connectionStatus !== 'Not connected' &&
                  data[indextr].partner !== 'Melio Payment'
                "
              >
                Disconnect
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
export default {
  name: 'IntegrationTable',

  props: {
    hideDropdown: {
      required: false,
      type: Boolean,
    },
    data: {
      required: true,
      type: Array,
    },
  },

  methods: {
    handleConnect(partner, tagId) {
      this.$emit('handleConnect', partner, tagId);
    },

    handleDisconnect(partner, tagId) {
      this.$emit('handleDisconnect', partner, tagId);
    },
  },
};
</script>
