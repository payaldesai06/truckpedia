<template>
  <div>
    <div class="ratingContainer">
      <div class="ratingWrapper">
        <h2>Hey, {{ value.shipperBrokerCompanyName }}</h2>
        <h3>How did {{ value.carrierCompanyName }} do?</h3>
        <div class="ratingFill">
          <p>{{ reviewSummaryLabel }}</p>
          <div class="ratingStars">
            <star-rating
              active-color="rgb(0, 82, 204)"
              :star-size="35"
              :padding="25"
              :show-rating="false"
              v-model="value.review.rating"
              @rating-selected="
                {
                }
              "
              :read-only="isPreviewMode"
              border-color="0"
              style="justify-content: center"
            />
          </div>
          <div class="reviewTextArea">
            <vs-textarea
              class="w-full"
              v-model="value.review.comment"
              height="160px"
              :placeholder="isPreviewMode ? '' : 'Type your review here'"
              :disabled="isPreviewMode"
            />
          </div>
          <template
            v-if="
              value.review.rating > 0 || (isPreviewMode && hasFeedbackOption)
            "
          >
            <vs-divider />
            <div class="feedbackReview">
              <div class="feedbackContainer">
                <h3>
                  {{ isPoorRating ? 'What went wrong?' : 'What went well?' }}
                </h3>
                <div class="feedbackWrapper">
                  <button
                    type="button"
                    v-for="{ label, value } in feedbackLabels"
                    :key="value"
                    :class="[
                      'feedbackButton',
                      {
                        'feedbackButton--active': isFeedbackSelected(value),
                      },
                    ]"
                    @click="setFeedback(value)"
                    :disabled="isPreviewMode"
                  >
                    {{ label }}
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'ReviewForm',
  components: {
    StarRating,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isPoorRating() {
      return this.value.review.rating <= 3;
    },
    isGoodRating() {
      return this.value.review.rating > 3;
    },
    reviewSummaryLabel() {
      if (!this.value.review.rating) {
        return;
      }
      switch (this.value.review.rating) {
        case 5:
        case 4:
          return 'Good!';
        case 3:
        case 2:
        case 1:
          return 'Bad';
      }
      return '';
    },
    feedbackLabels() {
      const labels = {
        poorRatingLabels: [
          {
            label: 'Poor Route',
            value: 'poorRoute',
          },
          {
            label: 'Delayed Delivery',
            value: 'delayedDelivery',
          },
          {
            label: 'Driver Behavior',
            value: 'driverBehavior',
          },
          {
            label: 'Mishandled Package',
            value: 'mishandledPackage',
          },
          {
            label: 'Other',
            value: 'badOther',
          },
        ],
        goodRatingLabels: [
          {
            label: 'Great Communication!',
            value: 'greatCommunication',
          },
          {
            label: 'On-time delivery',
            value: 'onTimeDelivery',
          },
          {
            label: 'The driver is awesome',
            value: 'theDriverIsAwesome',
          },
          {
            label: 'The dispatcher is awesome!',
            value: 'theDispatcherIsAwesome',
          },
          {
            label: 'Other',
            value: 'goodOther',
          },
        ],
      };

      return this.isPoorRating
        ? labels.poorRatingLabels
        : labels.goodRatingLabels;
    },
    hasFeedbackOption() {
      return (this.value.review.labelOptions || []).length > 0;
    },
  },
  data() {
    return {};
  },
  methods: {
    setFeedback(value) {
      const feedbackLabelOptions = this.value.review.labelOptions || [];
      const index = feedbackLabelOptions.indexOf(value);

      if (index > -1) {
        this.value.review.labelOptions.splice(index, 1);
      } else {
        this.value.review.labelOptions.push(value);
      }
    },
    isFeedbackSelected(value) {
      return (this.value.review.labelOptions || []).includes(value);
    },
  },
  watch: {
    'value.review.rating': {
      handler(newValue, oldValue) {
        if (!this.isPreviewMode) {
          if (newValue > 3 && oldValue <= 3) {
            this.value.review.labelOptions = [];
          } else if (newValue <= 3 && oldValue > 3) {
            this.value.review.labelOptions = [];
          }
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.ratingContainer {
  .ratingWrapper {
    h2 {
      font-size: 32px;
      font-weight: 600;
      text-align: center;
      padding: 25px 0px;
    }
    h3 {
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      padding-bottom: 25px;
    }
    .ratingFill {
      p {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
      }
      .ratingStars {
        margin: 25px 0px;
      }
      .reviewTextArea {
        margin-bottom: 25px;
      }
    }
  }
}

.feedbackContainer {
  h3 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  .feedbackWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .feedbackButton {
      background: transparent;
      margin: 15px;
      padding: 16px;
      color: #333;
      outline: none;
      border: 1px solid #333;
      border-radius: 8px;
      cursor: pointer;
    }
    .feedbackButton--active {
      background-color: rgb(0, 82, 204) !important;
      border: 1px solid rgb(0, 82, 204) !important;
      color: #fff;
    }
    // .feedbackButton:focus,
    // .feedbackButton:hover {
    //   border: 1px solid #333;
    //   background-color: #333;
    //   color: #fff;
    // }
  }
}
</style>
