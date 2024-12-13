<template>
  <div>
    <div class="reviewContainer">
      <div class="reviewer">
        <h2 v-if="!isReviewWindowClosed && !isPreviewMode">
          Tell <span>{{ reviewData.carrierCompanyName }}</span> what you loved
          <br />
          for Load <span>{{ reviewData.shipperBrokerLoadNumber }}!</span>
        </h2>
        <h2 v-else-if="isPreviewMode">
          Thank you! Your review for Load
          <span>{{ reviewData.shipperBrokerLoadNumber }}</span> has already been
          submitted.
        </h2>
        <h2 v-else-if="isReviewWindowClosed && !isPreviewMode">
          Oops! The deadline to submit your review for Load
          <span>{{ reviewData.shipperBrokerLoadNumber }}</span> has expired.
        </h2>
      </div>
      <div class="reviewWrapper">
        <ReviewForm
          v-model="reviewData"
          :isPreviewMode="isPreviewMode || isReviewWindowClosed"
        />
      </div>
      <vs-button
        v-show="!isPreviewMode && !isReviewWindowClosed"
        class="mt-10"
        style="
          background-color: rgb(0, 82, 204) !important;
          border-radius: 2px !important;
        "
        :disabled="!isFormValid"
        @click.stop="submitReview"
      >
        Submit Rating
      </vs-button>
    </div>
  </div>
</template>

<script>
import ReviewForm from './components/ReviewForm.vue';
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'Rating',
  components: { ReviewForm },
  data() {
    return {
      reviewData: {
        review: {
          rating: 0,
          comment: '',
          labelOptions: [],
        },
      },
      isPreviewMode: false,
    };
  },
  computed: {
    isFormValid() {
      const { rating } = (this.reviewData || {}).review || {};
      return rating && rating > 0;
    },
    isReviewWindowClosed() {
      const { deadlineToSubmitReview } = this.reviewData || {};
      if (!deadlineToSubmitReview || this.isPreviewMode) {
        return false;
      }

      const deadLine = this.$dayjs(deadlineToSubmitReview);
      const now = this.$dayjs();
      return now.isAfter(deadLine);
    },
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();

        const loadId = this.$route.params.id;
        if (!loadId) {
          this.$router.push({ name: 'home' });
        }

        const ratingCalc = (rating) => {
          return rating / 2;
        };

        const { payload } = await this.$store.dispatch(
          'loadReview/getReviewStatusById',
          loadId
        );

        if (payload) {
          this.reviewData = {
            ...payload,
            review: {
              rating:
                payload.review && payload.review.rating
                  ? ratingCalc(payload.review.rating)
                  : 0,
              comment: (payload.review && payload.review.comment) || '',
              labelOptions:
                (payload.review && payload.review.labelOptions) || [],
            },
          };

          this.isPreviewMode = !!(payload && payload.review);
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async submitReview() {
      try {
        this.$vs.loading();

        const ratingCalc = (rating) => {
          return rating * 2;
        };

        const payload = {
          loadId: this.$route.params.id,
          review: {
            rating: ratingCalc(this.reviewData.review.rating),
            comment: this.reviewData.review.comment,
            labelOptions: this.reviewData.review.labelOptions,
          },
        };

        await this.$store.dispatch('loadReview/saveReview', payload);

        this.$vs.notify({
          color: 'success',
          title: 'Success',
          text: 'Review submitted successfully',
        });

        this.isPreviewMode = true;
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reviewContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  .reviewer {
    h2 {
      font-weight: 600;
      text-align: center;
    }
  }
  .reviewWrapper {
    min-height: 500px;
    box-shadow: 0px 4px 12px 2px rgba(51, 51, 51, 0.1098039216),
      0px -2px 10px 2px rgba(51, 51, 51, 0.1098039216),
      0px 5px 5px 2px rgba(51, 51, 51, 0.1098039216);
    width: 650px;
    margin-top: 25px;
    border-radius: 10px;
    padding: 20px;
  }
}
</style>
