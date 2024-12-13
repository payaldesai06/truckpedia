<template>
  <div class="w-full">
    <div
      v-if="showPrivateCheckbox"
      class="vx-col w-full flex items-center mb-5 mt-2"
    >
      <div class="w-full flex items-center justify-center">
        <label class="mx-4 w-1/4 text-right" v-text="'Private Submenu:'" />
        <div class="w-1/2">
          <Checkbox
            v-model="isRecordPrivate"
            :binary="true"
            @change="onSharedUsersChange"
          />
        </div>
      </div>
    </div>
    <div class="vx-col w-full flex items-center">
      <div class="w-full flex items-center justify-center">
        <label class="mx-4 w-1/4 text-right" v-text="'Share only with:'" />
        <MultiSelect
          class="w-1/2"
          v-model="sharedUsersList"
          :options="usersList"
          optionLabel="fullName"
          placeholder="Select Users"
          scrollHeight="140px"
          :filter="true"
          @change="onSharedUsersChange"
        />
      </div>
    </div>
    <div v-if="sharedUsersList.length" class="vx-col w-full mt-5 height-200">
      <DataTable
        :value="sharedUsersList"
        responsiveLayout="scroll"
        scrollHeight="200px"
      >
        <Column field="fullName" header="Name"></Column>
        <Column field="accessLevel" header="Access Level">
          <template #body="{ data: { accessLevel, id } }">
            <vs-dropdown>
              <a class="a-icon" href="#">
                {{ sentenceCase(accessLevel) }}
                <vs-icon class="" icon="expand_more"></vs-icon>
              </a>

              <vs-dropdown-menu>
                <vs-dropdown-item
                  v-for="item in accessLevels"
                  :key="item.id"
                  @click="changeAccessPermission(id, item.value)"
                >
                  {{ item.label }}
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </template>
        </Column>
      </DataTable>
    </div>
    <div v-else class="vx-col w-full">
      <div
        class="w-full mt-5 height-200 overflow-x-auto border-gray rounded p-2 mt-2 shared-users-list"
      >
        <label>Not sharing with anyone</label>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'MenuShare',
  props: {
    sharedWith: {
      type: Array,
      default: () => []
    },
    accessLevels: {
      type: Array,
      default: () => []
    },
    allUsers: {
      type: Array,
      default: () => []
    },
    showPrivateCheckbox: {
      type: Boolean,
      default: false
    },
    isPrivate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      sharedUsersList: [],
      usersList: [],
      isRecordPrivate: false
    }
  },
  methods: {
    onSharedUsersChange () {
      this.$emit('change', {
        isPrivate: this.isRecordPrivate,
        sharedPermissions: this.sharedUsersList
      })
    },
    changeAccessPermission (id, accessLevel) {
      const user = this.sharedUsersList.find((user) => user.id === id)
      user.accessLevel = accessLevel
      this.onSharedUsersChange()
    },
    sentenceCase (str) {
      return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }
  },
  watch: {
    sharedWith: {
      handler () {
        this.sharedUsersList = cloneDeep(this.sharedWith)
        this.usersList = cloneDeep(this.allUsers).map((user) => {
          if (this.sharedUsersList.length) {
            const sharedUser = this.sharedUsersList.find(
              (shared) => shared.id === user.id
            )

            if (sharedUser) return sharedUser
          }
          return user
        })
      },
      immediate: true
    },
    isPrivate: {
      handler () {
        this.isRecordPrivate = this.isPrivate
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .p-datatable .p-datatable-thead {
    th:nth-child(2) {
      width: 150px;
    }
  }

  .vs-con-dropdown {
    a {
      display: flex;
      align-items: center;
    }
  }
}

// Utility classes
.height-200 {
  height: 200px;
}

.border-gray {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
