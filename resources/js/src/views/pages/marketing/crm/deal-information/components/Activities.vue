<template>
  <div>
    <template v-if="logs.length">
      <div class="activities pr-3 pb-6">
        <!-- <h6 class="font-bold">This Month</h6> -->
        <div
          class="flex items-center w-full"
          :class="log.content.length ? 'my-5' : ''"
          v-for="log in logs"
        >
          <template v-if="log.content.length">
            <div class="w-1/12 font-bold text-center dates">
              <span v-html="convertedDate(log.utcDate)"></span>
            </div>
            <div class="w-11/12">
              <ul class="list">
                <li
                  :class="
                    !item.value &&
                    item.field != 'amount' &&
                    item.field != 'phone' && 
                    item.field != 'probability'
                      ? 'hidden'
                      : ''
                  "
                  v-for="(item, index) in log.content"
                  :key="index"
                >
                  <div class="flex justify-between p-2 list-item mb-3">
                    <template v-if="item.value">
                      <span
                        >{{
                          user.user_id === log.user.id ? 'You' : log.user.name
                        }}
                        {{ activitiesCollection[item.type] }}
                        {{ item.field == 'notes' ? 'a' : '' }}
                        <b>{{ activitiesCollection[item.field] }}</b>
                        {{
                          item.type == 'remove'
                            ? 'from'
                            : item.type == 'add'
                            ? 'to'
                            : item.type == 'change' && item.field != 'notes'
                            ? 'to'
                            : ''
                        }}
                        {{
                          item.type == 'add' || item.type == 'remove'
                            ? 'this deal'
                            : ''
                        }}
                        <b v-if="item.field !== 'notes'">{{
                          typeof item.value == 'object' && item.value != null
                            ? item.value.join(', ')
                            : item.field == 'amount'
                            ? formatAmountValue(item.value)
                            : item.value
                        }}</b></span
                      >
                    </template>
                    <template
                      v-else-if="
                        !item.value &&
                        (item.field == 'amount' ||
                          item.field == 'phone' ||
                          item.field == 'probability')
                      "
                    >
                      <span
                        >{{
                          user.user_id === log.user.id ? 'You' : log.user.name
                        }}
                        clear the
                        <b>{{ activitiesCollection[item.field] }}</b></span
                      >
                    </template>
                    <span class="ml-4 notify-time">{{
                      formatedDate(item.notifyTime)
                    }}</span>
                  </div>
                  <div
                    class="note flex justify-between list-item p-2 mb-3"
                    v-if="item.field == 'notes'"
                    v-html="item.value"
                  ></div>
                </li>
              </ul>
            </div>
          </template>
        </div>
        <div class="text-right">
          <vs-button
            @click.stop="loadMoreLogs"
            v-if="pagination.page < totalPages"
            >Load more</vs-button
          >
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex justify-center no-data-found py-10">
        <div class="flex flex-col items-center">
          <h6 class="font-bold mb-3">No Activities</h6>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '@/config/constants';
import { formatAmount } from '@/helpers/helper';
export default {
  name: 'activities',
  data() {
    return {
      pagination: {
        page: 1,
        pageSize: 25,
      },
      totalPages: 0,
      logs: [],
    };
  },
  computed: {
    ...mapGetters('marketing', ['selectedDeal']),
    ...mapGetters('auth', ['user']),
    convertedDate() {
      return (utcDate) => {
        const date = this.$dayjs(utcDate);
        return `${date.format('DD')} <br /> ${date.format('MMM')}`;
      };
    },
    formatedDate() {
      return (utcDate) => {
        const date = this.$dayjs(utcDate);
        return date.format('dddd hh:mm A');
      };
    },
    activitiesCollection() {
      return config.marketing.activitiesCollection;
    },
    formatAmountValue() {
      return (amount) => {
        return formatAmount(amount);
      };
    },
  },
  mounted() {
    this.getLogs();
  },
  methods: {
    async getLogs() {
      try {
        this.$vs.loading();
        const payload = {
          id: this.selectedDeal.id,
          pagination: this.pagination,
        };
        const { data } = await this.$store.dispatch(
          'marketing/getLogs',
          payload
        );
        this.logs = this.combineContentByDate([
          ...this.logs,
          ...data.payload.logs,
        ]);
        this.totalPages = data.payload.meta.totalPage;
      } catch (error) {
        console.log(error, 'error');
      } finally {
        this.$vs.loading.close();
      }
    },
    combineContentByDate(originalLogs) {
      const combinedArray = [];
      originalLogs.forEach((item) => {
        item.content = item.content.map((contentItem) => ({
          ...contentItem,
          ...(!contentItem.notifyTime && { notifyTime: item.utcDate }),
        }));
        const existingItem = combinedArray.find(
          (combinedItem) =>
            this.$dayjs(combinedItem.utcDate).format('DD MM YYYY') ===
            this.$dayjs(item.utcDate).format('DD MM YYYY')
        );
        if (existingItem) {
          existingItem.content = existingItem.content.concat(item.content);
        } else {
          combinedArray.push(item);
        }
      });
      return combinedArray;
    },
    loadMoreLogs() {
      this.pagination.page = this.pagination.page + 1;
      this.getLogs();
    },
  },
  watch: {
    selectedDeal: {
      handler() {
        this.logs = [];
        this.pagination.page = 1;
        this.getLogs();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.activities {
  .list {
    .list-item {
      color: #000;
      font-size: 0.95rem;
      border: 1px solid var(--Gray-gray-200, #ccd0dc);
      border-radius: 4px;
      span {
        font-size: 14px;
        font-weight: 400;
        &.notify-time {
          color: var(--Black-Black-300, #71717a);
        }
      }
    }
    .note {
      width: 91.5%;
      background-color: var(--Gray-gray-50, #f3f4f7);
      border: none;
      margin-inline: auto 10px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 13px;
        height: 33px;
        top: -18px;
        left: -32px;
        margin: 10px;
        border-left: 1px solid #000;
        border-bottom: 1px solid #000;
        border-bottom-left-radius: 10px;
      }
    }
  }
  .dates {
    span {
      color: rgba(var(--vs-primary), 1) !important;
    }
  }
}
</style>
