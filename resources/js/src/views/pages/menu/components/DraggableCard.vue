<template>
  <vx-card class="hover:shadow draggable-card" no-shadow card-border>
    <!-- cursor-move -->
    <template>
      <div class="flex justify-between items-center w-full">
        <label
          class="text-md font-medium"
          v-text="(data || {}).taskName || dataName"
        />
        <vs-avatar size="22px" v-if="data.assignee" :text="data.assignee" />
      </div>
      <div class="flex items-center">
        <vs-icon :class="iconColor[data.priority]" icon="flag" />
        {{ dataDescription }}
        <label class="text-sm ml-2" :class="iconColor[data.priority]" />
        <!-- v-text="getDateAndMonth(data.dueDate)" -->
      </div>
      <div class="flex items-center mt-3" v-if="(usersArray || []).length > 0">
        <vx-tooltip
          v-for="(user, index) in usersArray"
          :key="index"
          :text="user.fullName"
        >
          <vs-chip :class="[{ 'ml-1': index > 0 }]" transparent color="primary">
            {{ user.tag }}
          </vs-chip>
        </vx-tooltip>
      </div>
      <div class="flex flex-col p-1" v-if="fileValues.length">
        <div v-for="field in fileValues" :key="field.fieldId">
          <div class="mt-2" v-if="field.filesValue.length">
            <label v-text="field.fieldName" />
            <div class="flex">
              <label
                class="text-md"
                v-for="(extension, index) in getFileExtensions(
                  field.filesValue
                )"
                :key="index"
              >
                {{
                  index < field.filesValue.length - 1 &&
                  index < fileExtensionLimit
                    ? `${extension},&nbsp;`
                    : extension
                }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </template>
  </vx-card>
</template>
<!-- eslint-disable implicit-arrow-linebreak nonblock-statement-body-position -->
<script>
import { mapGetters } from "vuex";
export default {
  name: "DraggableCard",
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    customFields: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters("companyUserV2", ["getAllUsersList"]),
    allUsers() {
      return this.getAllUsersList;
    },
    allUsersMap() {
      return this.allUsers.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    },
    dataName() {
      const data = JSON.parse(JSON.stringify(this.data));
      return (
        (
          (data.customFieldsData || []).sort(
            (a, b) => a.fieldId - b.fieldId
          )[0] || {}
        ).textValue || ""
      );
    },
    dataDescription() {
      const data = JSON.parse(JSON.stringify(this.data));
      return (
        (
          (data.customFieldsData || []).sort(
            (a, b) => a.fieldId - b.fieldId
          )[1] || {}
        ).textValue || ""
      );
    },
    usersArray() {
      const data = JSON.parse(JSON.stringify(this.data));
      const userField =
        (data.customFieldsData || []).find((item) =>
          item.hasOwnProperty("userValue")
        ) || [];
      return (
        (userField.userValue || []).map((x) => {
          let fullName = this.allUsersMap[x.userId].fullName;
          let tag = (fullName || "")
            .split(" ")
            .map((item) => item[0])
            .join("");
          return {
            fullName,
            tag,
          };
        }) || []
      );
    },
    fileValues () {
      const fileFields = (this.data.customFieldsData || []).filter((item) =>
        item.hasOwnProperty('filesValue')
      )
      if (fileFields.length)
        return fileFields.map((item) => {
          return {
            ...item,
            fieldName: this.customFields.find(
              (field) => field.id === item.fieldId
            ).name
          }
        })
      return []
    }
  },
  data() {
    return {
      iconColor: {
        high: "text-danger",
        medium: "text-warning",
        low: "",
      },
      fileExtensionLimit: 5
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {},
    getDateAndMonth(date) {
      if (!date) return "";

      const d = new Date(date);
      return `${d.getDate()} ${d.toLocaleString("default", {
        month: "short",
      })}`;
    },
    getFileExtensions (files) {
      const limit = this.fileExtensionLimit || 3
      const extensions = files.slice(0, limit).map((file) => {
        const res = file.originalFileName.split('.').pop()
        return res
      })
      if (files.length > limit)
        extensions.push(`+${files.length - limit} more`)
      return extensions
    }
  },
};
</script>

<style lang="scss" scoped>
.draggable-card {
  ::v-deep .vx-card__body {
    padding: 0.8rem !important;
  }
}
</style>
