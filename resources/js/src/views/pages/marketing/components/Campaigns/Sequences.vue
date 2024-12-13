<template>
  <div>
    <div class="flex">
      <div class="w-25">
        <div
          v-for="(step, index) in steps"
          :key="step.id"
          :class="{
            'active-step-box': activeStep === index,
            'no-active-step-box': activeStep !== index,
          }"
          class="step-box"
          @click="setActiveStep(index)"
        >
          <div class="flex justify-between items-center">
            <p class="count-steps">Step {{ index + 1 }}</p>
            <div v-if="steps.length > 1" class="delete-step-icon">
              <vs-icon
                class="cursor-pointer"
                size="small"
                icon="delete"
                color="danger"
                @click.stop="confirmRemoveStep(index)"
              />
            </div>
          </div>
          <vs-divider />
          <div class="subject-txt">
            <span>{{ step.variants[0].subject || '< No Subject >' }} </span>
          </div>
          <!-- <div class="add-variant" @click="addVariant(index)">
            + Add variant
          </div> -->
          <div v-if="index + 1 < steps.length">
            <vs-divider />
            <div
              class="flex my-4 gap-2 items-center"
              @click="addVariant(index)"
            >
              wait for
              <vs-input
                class="delay-day-input"
                type="number"
                v-model="steps[index].nextStepWaitForDays"
              />
              days, then
            </div>
          </div>
        </div>
        <div class="add-step" @click="addStep">Add Step</div>
      </div>
      <div class="w-75">
        <div
          class="send-email-wrap"
          v-if="activeStep !== null && steps[activeStep].variants.length"
        >
          <div class="send-email-header">
            <div class="w-75">
              <span>Subject:</span>
              <span>
                <input
                  type="text"
                  v-model="activeVariantSubject"
                  name="subject"
                  placeholder="Your subject"
                />
              </span>
            </div>
            <div class="w-25 flex justify-end">
              <vs-button @click="handleSaveSequence">Save</vs-button>
            </div>
          </div>
          <vs-divider class="m-0" />
          <div>
            <vue-editor
              v-model="activeVariantContent"
              :editorToolbar="customToolbar"
              class="custom-toolbar"
              placeholder="Start typing here..."
            ></vue-editor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import { VueEditor } from 'vue2-editor';

export default {
  name: 'Sequences',
  components: {
    VueEditor,
  },
  data() {
    return {
      steps: [
        {
          id: null,
          step: 1,
          nextStepWaitForDays: 1,
          variants: [
            {
              id: null,
              subject: '',
              content: '',
            },
          ],
        },
      ],
      activeStep: 0,
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link'],
      ],
    };
  },
  created() {
    this.init();
  },
  computed: {
    activeVariantSubject: {
      get() {
        if (
          this.activeStep !== null &&
          this.steps[this.activeStep].variants.length
        ) {
          return this.steps[this.activeStep].variants[0].subject;
        }
        return '';
      },
      set(value) {
        if (
          this.activeStep !== null &&
          this.steps[this.activeStep].variants.length
        ) {
          this.$set(this.steps[this.activeStep].variants[0], 'subject', value);
        }
      },
    },
    activeVariantContent: {
      get() {
        if (
          this.activeStep !== null &&
          this.steps[this.activeStep].variants.length
        ) {
          return this.steps[this.activeStep].variants[0].content;
        }
        return '';
      },
      set(value) {
        if (
          this.activeStep !== null &&
          this.steps[this.activeStep].variants.length
        ) {
          this.$set(this.steps[this.activeStep].variants[0], 'content', value);
        }
      },
    },
  },
  methods: {
    async init() {
      try {
        const campaignId = this.$route.params.id;

        const response = await this.$store.dispatch('marketing/getSequence', {
          id: campaignId,
        });

        this.steps =
          response.data.payload.sequences &&
          response.data.payload.sequences.length > 0
            ? response.data.payload.sequences
            : this.getDefaultSequence();
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },

    getDefaultSequence() {
      return [
        {
          id: null,
          nextStepWaitForDays: 1,
          variants: [
            {
              id: null,
              subject: '',
              content: '',
            },
          ],
        },
      ];
    },

    addStep() {
      const newStep = {
        id: null,
        nextStepWaitForDays: 1,
        variants: [
          {
            id: null,
            subject: '',
            content: '',
          },
        ],
      };
      this.steps.push(newStep);
      this.setActiveStep(this.steps.length - 1);
    },
    addVariant(stepIndex) {
      // const newVariant = {
      //   id: null,
      //   subject: '',
      //   content: '',
      // };
      // this.steps[stepIndex].variants.push(newVariant);
    },
    confirmRemoveStep(index) {
      const options = {
        title: 'Confirm Delete',
        color: 'danger',
        text: 'Are you sure you want to delete this step?',
        accept: () => this.removeStep(index),
      };
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Delete step',
        ...options,
      });
    },
    removeStep(index) {
      this.steps.splice(index, 1);
      if (this.activeStep >= this.steps.length) {
        this.setActiveStep(this.steps.length - 1);
      } else {
        this.setActiveStep(0);
      }
      this.handleSaveSequence();
    },
    setActiveStep(index) {
      this.activeStep = index;
    },
    validateData() {
      for (let ind in this.steps) {
        const variants = this.steps[ind].variants;
        for (let ind1 in variants) {
          const variant = variants[ind1];
          if (variant.subject === '' || variant.content === '') {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: `Please fill subject and content in Step ${
                parseInt(ind) + 1
              }`,
            });
            return false;
          }
        }
      }
      return true;
    },
    async handleSaveSequence() {
      if (!this.validateData()) return;

      try {
        const campaignId = this.$route.params.id;
        this.steps = this.steps.map((step, index) => ({
          ...step,
          step: index + 1,
          nextStepWaitForDays: parseInt(step.nextStepWaitForDays, 10) || 1,
        }));

        const payload = {
          sequences: this.steps,
        };
        const response = await this.$store.dispatch(
          'marketing/upsertSequence',
          {
            id: campaignId,
            payload: payload,
          }
        );
        if (response && response.data) {
          this.steps = response.data.payload.sequences;
          this.$vs.notify({
            color: 'primary',
            title: 'Campaign updated',
            text: 'Campaign updated successfully.',
          });
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
      }
    },
  },
};
</script>

<style scoped lang="scss">
.w-75 {
  width: 75%;
}
.w-25 {
  width: 25%;
}
.active-step-box {
  border: 2px solid var(--blue-500, #3b82f6);
}
.no-active-step-box {
  border: 1px solid gray;
}
.step-box {
  border-radius: 8px;
  background: var(--gray-50, #f9fafb);
  min-height: 150px;
  margin-bottom: 15px;
  padding: 15px;
  padding-bottom: 0px;
  cursor: pointer;
  .count-steps {
    color: var(--brand-neutrals-black, #000);
    font-size: 16px;
    font-weight: 500;
  }
  .subject-txt {
    color: var(--brand-neutrals-black, #000);
    font-size: 14px;
    font-weight: 450;
    padding: 0px 16px;
    min-height: 50px;
  }
  .add-variant {
    color: var(--primary-blue, #3975eb);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding: 8px;
    cursor: pointer;
  }
}
.add-step {
  border-radius: 4px;
  border: 1px solid var(--gray-300, #d1d5db);
  color: var(--primary-blue, #3975eb);
  font-size: 16px;
  font-weight: 500;
  padding: 10px 24px;
  text-align: center;
  cursor: pointer;
  margin-top: 15px;
}
.delete-step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-email-wrap {
  border-radius: 8px;
  border: 1px solid var(--gray-200, #e5e7eb);
  background: var(--brand-neutrals-white, #fff);
  margin: 15px;
  margin-top: 0px;
  .send-email-header {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      outline: none;
      border: none;
      min-width: 75%;
    }
  }
}

.custom-toolbar .ql-toolbar.ql-snow,
.custom-toolbar .ql-container.ql-snow {
  border: none;
}
.custom-toolbar .ql-container.ql-snow {
  min-height: 55vh;
}

.delay-day-input {
  width: 80px;
}
</style>
