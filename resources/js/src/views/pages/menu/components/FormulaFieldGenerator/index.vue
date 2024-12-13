<template>
  <div class="formula-field-generator">
    <section v-if="customFieldsMap.length">
      <div
        class="w-full flex mt-2"
      >
        <div class="w-full">
          <label class="font-semibold">
            Select fields for formula
          </label>
        </div>
      </div>
      <div class="w-full flex mt-2">
        <div class="w-1/3">
          <label for="param1">First Parameter</label>
        </div>
        <div class="w-1/3">
          <label for="param1">Operator</label>
        </div>
        <div class="w-1/3">
          <label for="param1">Second Parameter</label>
        </div>
      </div>
      <div
        class="w-full flex items-center mt-2"
      >
        <div class="w-full flex">
          <!-- First parameter field  -->
          <select
            name="param1"
            v-model="param1"
            placeholder="Select field"
            class="custom-select"
          >
            <option
              v-for="item in customFieldsMap"
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
          <!-- Operator selector  -->
          <select
            v-model="operator"
            placeholder="Select option"
            class="custom-select"
          >
            <option
              v-for="item in operatorsList"
              :key="item"
              :value="item"
            >
              {{ item }}
            </option>
          </select>
          <!-- Second parameter field  -->
          <select
            v-model="param2"
            placeholder="Select option"
            class="custom-select"
          >
            <option
              v-for="item in customFieldsMap"
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
    </section>
    <section v-else>
      <div class="w-full flex mt-2">
        <div class="w-full" style="color: red;">
          <label class="font-semibold">
            No supporting field available for formula.
          </label>
          <label class="font-semibold">
            Try adding a number, currency or rollup field
          </label>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FormulaFieldGenerator',
  // inject: ["customFields"],
  props: {
    customFields: {
      type: Array,
      default: () => []
    },
    formulaData: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    this.initFields();
  },
  data() {
    return {
      operator: null,
      param1: null,
      param2: null,
    }
  },
  computed: {
    customFieldsMap() {
      const permittedTypes = ['number', 'currency', 'rollup', 'formula'];
      return this.customFields.filter(field => permittedTypes.includes(field.type))
    },
    fieldIdToTypeMap() {
      return this.customFields.reduce((acc, field) => {
        acc[field.fieldId] = field;
        return acc;
      }, {});
    },
    formula() {
      return {
        op: this.operator,
        params: [
        {
          customField: this.param1,
        },
        {
          customField: this.param2,
        }],
      }
    },
    operatorsList() {
      return ['+', '-', '*', '/'];
    },
    paramsList() {
      return this.customFields.map(field => field.fieldId);
    },
  },
  methods: {
    isValid() {
      const { op, params } = this.formula
      if(!op || !params || params.length < 2) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: "Formula is invalid",
        });
        return false;
      }
      return true;
    },
    initFields() {
      const { op, params } = this.formulaData || {}
      if(op && params && params.length === 2) {
        this.operator = op;
        this.param1 = params[0].customField;
        this.param2 = params[1].customField;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
$borderColor: rgba(0, 0, 0, 0.1);

.filter-dropdown {
  .filter-dropdown-menu {
    position: absolute;
    z-index: 1000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    @media (max-width: 991px) {
      width: 90%;
    }
  }
}

.formula-field-generator {
  background: #fff;
  position: relative;

  input {
    border: 1px solid $borderColor !important;
  }

  .filter-select {
    border-radius: 0;
    width: 100%;

    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border-right: 0px;
    }
  }

  .delete-icon {
    border: 1px solid $borderColor;
    height: 35px;
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
  }

  .add-condition {
    color: hsl(0, 0%, 40%);
    font-weight: 500;
    font-size: 13px;
    span {
      cursor: pointer;
    }
  }

  .custom-select,
  .custom-input {
    border: 1px solid $borderColor;
    border-radius: 0px;
    padding: 6px;
    height: 35px;
    width: 100%;
    min-width: 120px;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-right: 0px;

    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }

  .custom-select {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
    background-size: 4px 4px, 5px 5px, 0.5em 0.5em;
    background-repeat: no-repeat;
  }

  .operator-select {
    min-width: 12px;
    max-width: 66px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 3px;
    border-right: 1px solid $borderColor;
  }
}
::v-deep {
  .v-select {
    .vs__selected-options {
      max-width: 50vw;
    }
    .vs__search {
      width: 100px;
    }
  }
}
</style>
<style>
.flatpickr-calendar,
.vs__dropdown-menu {
  z-index: 100000 !important;
}
</style>