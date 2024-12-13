/* eslint-disable multiline-ternary */
import { mapGetters } from "vuex";
import dayjs from 'dayjs'
import { formatAmount } from "@/helpers/helper";

export default {
  computed: {
    ...mapGetters("companyUserV2", ["getAllUsersList"]),
    allUsersMap() {
      return this.getAllUsersList.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    },
    customFieldsToRender() {
      const customFieldsMap = this.customFields.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
      const { columns } = (this.viewMetaData || {}).show || {};
      if (columns && columns.length > 0) {
        const columnsToRender = columns
          .map((item) => ({
            ...customFieldsMap[item.customFieldId],
            ...item,
          }))
          .sort((a, b) => a.order - b.order);
        return columnsToRender;
      }
      return [];
    },
    customFieldsToRenderMap() {
      return this.customFieldsToRender.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    },
    idOfFieldsToRender() {
      return this.customFieldsToRender.map((x) => x.id);
    },
    formattedRecordData() {
      const res = this.formatData(this.recordData);
      return res || [];
    },
    sortData() {
      return (records) => {
        if (
          records &&
          this.tableSortSchema &&
          this.tableSortSchema.length > 0
        ) {
          records = [...records].sort((a, b) => {
            const { field, sortOrder } = this.tableSortSchema[0];
            const fieldA = a.customFieldsData.find((f) => f.fieldId === field);
            const fieldB = b.customFieldsData.find((f) => f.fieldId === field);
            const { type } = this.customFields.find((f) => f.id === field);

            if (type === 'text') {
              if (sortOrder === 'a') {
                return (fieldA.textValue || '').localeCompare(
                  fieldB.textValue || ''
                ); // fieldA.textValue > fieldB.textValue ? 1 : -1;
              } else if (sortOrder === 'd') {
                return (fieldB.textValue || '').localeCompare(
                  fieldA.textValue || ''
                ); // fieldA.textValue > fieldB.textValue ? -1 : 1;
              }
            } else if (type === 'number') {
              const aField = parseFloat(fieldA.numberValue) || 0;
              const bField = parseFloat(fieldB.numberValue) || 0;

              if (sortOrder === 'a') {
                return aField > bField ? 1 : -1;
              } else if (sortOrder === 'd') {
                return aField > bField ? -1 : 1;
              }
            } else if (type === 'currency') {
              const aField = parseFloat(fieldA.currencyValue) || 0;
              const bField = parseFloat(fieldB.currencyValue) || 0;

              if (sortOrder === 'a') {
                return aField > bField ? 1 : -1;
              } else if (sortOrder === 'd') {
                return aField > bField ? -1 : 1;
              }
            }
          });

          return records;
        }

        return records;
      };
    },
    viewData() {
      const { id: groupById } = this.selectedGroupBy || {};
      if (groupById) {
        const groupBy = this.customFields.find((f) => f.id === groupById);
        if (groupBy) {
          let temp = {};
          if (groupBy.type === "singleSelect") {
            temp = this.singleSelectTypeSortedData(
              groupBy,
              this.formattedRecordData
            );
          } else if (groupBy.type === "text") {
            temp = this.textTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === "user") {
            temp = this.userTypeSortedData(
              groupBy,
              this.formattedRecordData,
              this.getAllUsersList
            );
          } else if (groupBy.type === "date") {
            temp = this.dateTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === "number") {
            temp = this.numberTypeSortedData(groupBy, this.formattedRecordData);
          } else if (groupBy.type === 'currency') {
            temp = this.currencyTypeSortedData(
              groupBy,
              this.formattedRecordData
            )
          } else if (groupBy.type === 'dateNoTz') {
            temp = this.dateNoTzTypeSortedData(
              groupBy,
              this.formattedRecordData
            )
          } else if (groupBy.type === 'multiSelect') {
            temp = this.multiSelectTypeSortedData(
              groupBy,
              this.formattedRecordData
            )
          } else if (groupBy.type === 'recordLink') {
            temp = this.recordLinkTypeSortedData(
              groupBy,
              this.formattedRecordData
            )
          }

          if (this.tableSortSchema && this.tableSortSchema.length > 0) {
            const { field } = this.tableSortSchema[0];
            const selectedField = this.customFields.find((f) => f.id === field);

            if (
              selectedField &&
              selectedField.id === groupBy.id &&
              selectedField.type === groupBy.type
            ) {
              const { sortOrder } = this.tableSortSchema[0];
              const sortedKeys = Object.keys(temp).sort((a, b) => {
                if (a === 'No ' + groupBy.name) return 1;
                if (b === 'No ' + groupBy.name) return -1;

                if (groupBy.type === 'text') {
                  if (sortOrder === 'a') {
                    return a.localeCompare(b);
                  } else if (sortOrder === 'd') {
                    return b.localeCompare(a);
                  }
                } else if (groupBy.type === 'number') {
                  const aField = parseFloat(a);
                  const bField = parseFloat(b);

                  if (sortOrder === 'a') {
                    return aField > bField ? 1 : -1;
                  } else if (sortOrder === 'd') {
                    return aField > bField ? -1 : 1;
                  }
                } else if (groupBy.type === 'currency') {
                  const aField = parseFloat(a);
                  const bField = parseFloat(b);

                  if (sortOrder === 'a') {
                    return aField > bField ? 1 : -1;
                  } else if (sortOrder === 'd') {
                    return aField > bField ? -1 : 1;
                  }
                }
              });
              const sortedObj = {};
              sortedKeys.forEach((key) => {
                // Assign decimal values to the key if it is a number without decimal to maintain the order
                if (
                  !isNaN(key) &&
                  !isNaN(parseFloat(key)) &&
                  !key.includes('.')
                ) {
                  sortedObj[key + '.00'] = temp[key];
                } else {
                  sortedObj[key] = temp[key];
                }
              });
              temp = sortedObj;
            }

            temp = Object.values(temp).map((item) => {
              return {
                ...item,
                records: this.sortData(item.records),
              };
            });
          }

          return temp;
        }
      }
      return [
        {
          id: "none",
          label: this.title,
          records: this.sortData(this.formattedRecordData),
        },
      ];
    },
    groupByOptions() {
      const { type } = this.viewMetaData || {};
      // const res = [...(this.customFields || [])];
      const res = (this.customFields || []).map((item) => {
        return {
          ...item,
          isDisabled: item.type === "files",
        }
      });

      if (type === "board") {
        return res;
      } else if (type === "gantt") {
        return res.filter((f) => f.type === "date");
      }
      res.unshift({
        id: 0,
        name: "None",
        type: "null",
        isDisabled: false
      });
      return res;
    },
    // Expects the corresponding view page to have a prop called viewMetaData, which has the metaData for that view only
    selectedGroupBy() {
      const { type } = this.viewMetaData || {};
      const { customFieldId: groupById } =
        ((this.viewMetaData || {}).groupBy || {}).firstLevel || {};
      const selectedGrouping = this.groupByOptions.find(
        (f) => f.id === groupById
      );
      const singleSelect = this.groupByOptions.find(
        (f) => f.type === "singleSelect"
      );
      if (type === "board") {
        return selectedGrouping || singleSelect || this.groupByOptions[0] || {};
      } else if (type === "gantt") {
        // Gantt View doesn't need grouping
        return {
          id: 0,
          name: "None",
          type: "null",
        };
      }
      return selectedGrouping || this.groupByOptions[0] || {};
    },
  },
  methods: {
    textTypeSortedData(groupBy, recordData) {
      const { id: groupById } = groupBy;
      if (!groupById || !recordData.length) return {};
      let temp = {};
      const groupByValues = [
        ...new Set(
          recordData.map((item) => {
            const field = (item.customFieldsData || []).find(
              (f) => f.fieldId === groupById
            );
            if (field.textValue) {
              return field.textValue;
            }
            return;
          })
        ),
      ].filter(Boolean);
      groupByValues.forEach((label) => {
        temp[label] = {
          label,
          records: this.formattedRecordData.filter((record) => {
            const field = record.customFieldsData.find(
              (f) => f.fieldId === groupBy.id
            );
            if (field && field.textValue === label) {
              return true;
            }
            return false;
          }),
        };
      });
      const noDatLabel = `No ${groupBy.name || ""}`;
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter((record) => {
          const field = record.customFieldsData.find(
            (f) => f.fieldId === groupBy.id
          );
          if (!field) {
            return true;
          }
          if (field && !groupByValues.includes(field.textValue)) {
            return true;
          }
        }),
      };
      return temp;
    },
    userTypeSortedData(groupBy, recordData, usersList) {
      const { id: groupById } = groupBy;
      if (!groupById || !recordData.length) return {};
      let temp = {};
      const groupByValues = [
        ...new Set(
          recordData.map((item) => {
            const field = (item.customFieldsData || []).find(
              (f) => f.fieldId === groupById
            );
            if ((field.userValue || []).length > 0) {
              return field.userValue.map((x) => x.userId).join(",");
            }
            return;
          })
        ),
      ].filter(Boolean);
      const userNameMap = (usersList || []).reduce((acc, item) => {
        acc[item.id] = item.fullName;
        return acc;
      }, {});
      const assigneeNameMap = groupByValues.reduce((acc, item) => {
        acc[item] = item
          .split(",")
          .map((x) => userNameMap[x])
          .join(", ");
        return acc;
      }, {});
      groupByValues.forEach((label) => {
        temp[label] = {
          label: assigneeNameMap[label],
          records: this.formattedRecordData.filter((record) => {
            const field = record.customFieldsData.find(
              (f) => f.fieldId === groupBy.id
            );
            const userMap = ((field || {}).userValue || [])
              .map((x) => x.userId)
              .join(",");
            if (userMap === label) {
              return true;
            }
            return false;
          }),
        };
      });
      const noDatLabel = `No ${groupBy.name || ""}`;
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter((record) => {
          const field = record.customFieldsData.find(
            (f) => f.fieldId === groupBy.id
          );
          if (!field) {
            return true;
          }
          const userMap = ((field || {}).userValue || [])
            .map((x) => x.userId)
            .join(",");
          if (!userMap || !groupByValues.includes(userMap)) {
            return true;
          }
        }),
      };
      return temp;
    },
    dateTypeSortedData(groupBy, recordData) {
      const { id: groupById } = groupBy;
      if (!groupById || !recordData.length) return {};
      let temp = {};
      const groupByValues = [
        ...new Set(
          recordData.map((item) => {
            const field = (item.customFieldsData || []).find(
              (f) => f.fieldId === groupById
            );
            if (field.dateValue) {
              const { utcDateOnly, utcTimeOnly } = field.dateValue;
              return this.convertToLocalDateTime(utcDateOnly, utcTimeOnly);
            }
            return;
          })
        ),
      ].filter(Boolean);
      groupByValues.forEach((label) => {
        temp[label] = {
          label,
          records: this.formattedRecordData.filter((record) => {
            const field = record.customFieldsData.find(
              (f) => f.fieldId === groupBy.id
            );
            let compareString = "";
            if ((field || {}).dateValue) {
              const { utcDateOnly, utcTimeOnly } = field.dateValue;
              compareString = this.convertToLocalDateTime(
                utcDateOnly,
                utcTimeOnly
              );
            }
            if (compareString === label) {
              return true;
            }
            return false;
          }),
        };
      });
      const noDatLabel = `No ${groupBy.name || ""}`;
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter((record) => {
          const field = record.customFieldsData.find(
            (f) => f.fieldId === groupBy.id
          );
          if (!field) {
            return true;
          }
          let compareString = "";
          if ((field || {}).dateValue) {
            const { utcDateOnly, utcTimeOnly } = field.dateValue;
            compareString = this.convertToLocalDateTime(
              utcDateOnly,
              utcTimeOnly
            );
          }
          if (!groupByValues.includes(compareString)) {
            return true;
          }
        }),
      };
      return temp;
    },
    dateNoTzTypeSortedData(groupBy, recordData) {
      const { id: groupById } = groupBy;
      if (!groupById || !recordData.length) return {};
      let temp = {};
      const groupByValues = [
        ...new Set(
          recordData.map((item) => {
            const field = (item.customFieldsData || []).find(
              (f) => f.fieldId === groupById
            );
            if (field.dateNoTzValue) {
              const { localDateOnly, localTimeOnly } = field.dateNoTzValue;
              return localDateOnly && localTimeOnly
                ? `${localDateOnly} ${localTimeOnly}`
                : localDateOnly || "";
            }
            return;
          })
        ),
      ].filter(Boolean);
      groupByValues.forEach((label) => {
        temp[label] = {
          label,
          records: this.formattedRecordData.filter((record) => {
            const field = record.customFieldsData.find(
              (f) => f.fieldId === groupBy.id
            );
            let compareString = "";
            if ((field || {}).dateNoTzValue) {
              const { localDateOnly, localTimeOnly } = field.dateNoTzValue;
              compareString =
                localDateOnly && localTimeOnly
                  ? `${localDateOnly} ${localTimeOnly}`
                  : localDateOnly || "";
            }
            if (compareString === label) {
              return true;
            }
            return false;
          }),
        };
      });
      const noDatLabel = `No ${groupBy.name || ""}`;
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter((record) => {
          const field = record.customFieldsData.find(
            (f) => f.fieldId === groupBy.id
          );
          if (!field) {
            return true;
          }
          let compareString = "";
          if ((field || {}).dateNoTzValue) {
            const { localDateOnly, localTimeOnly } = field.dateNoTzValue;
            compareString =
              localDateOnly && localTimeOnly
                ? `${localDateOnly} ${localTimeOnly}`
                : localDateOnly || "";
          }
          if (!groupByValues.includes(compareString)) {
            return true;
          }
        }),
      };
      return temp;
    },
    singleSelectTypeSortedData(groupBy, recordData) {
      const { id: groupById } = groupBy;
      if (!groupById || !recordData.length) return {};
      let temp = [];
      temp = groupBy.singleSelectOptions.map((item) => {
        return {
          id: item.optionId,
          label: item.optionName,
          records: this.formattedRecordData.filter((record) => {
            const field = record.customFieldsData.find(
              (f) => f.fieldId === groupBy.id
            );
            if (field && field.singleSelectValue === item.optionId) {
              return true;
            }
            return false;
          }),
        };
      });
      temp.push({
        id: 0,
        label: "No " + (groupBy.name || ""),
        records: recordData.filter((record) => {
          const field = record.customFieldsData.find(
            (f) => f.fieldId === groupById
          );
          if (!field) {
            return true;
          }
          if (field && !field.singleSelectValue) {
            return true;
          }
        }),
      });
      return temp;
    },
    timeZoneAbbreviated (dateTimeString) {
      // Reference: https://stackoverflow.com/a/63282162
      const { 1: tz } = new Date(dateTimeString).toString().match(/\((.+)\)/)

      if (tz.includes(' ')) {
        return tz
          .split(' ')
          .map(([first]) => first)
          .join('')
      } else {
        return tz
      }
    },
    convertToLocalDateTime (dateValue, timeValue) {
      if (dateValue && timeValue) {
        return `${dayjs(new Date(`${dateValue}T${timeValue}:00.000Z`)).format(
          'YYYY-MM-DD'
        )} ${dayjs(new Date(`${dateValue}T${timeValue}:00.000Z`)).format(
          'HH:mm'
        )} ${this.timeZoneAbbreviated(`${dateValue}T${timeValue}:00.000Z`)}`
      } else return dateValue || ''
    },
    getFileExtensions (files) {
      const limit = this.fileExtensionLimit || 3
      const extensions = files.slice(0, limit).map((file) => {
        const res = file.originalFileName.split('.').pop()
        return res
      })
      if (files.length > limit) extensions.push(`+${files.length - limit} more`)
      return extensions
    },
    formatData (record) {
      const res = record.map((item) => {
        if (item.customFieldsData.length > 0) {
          const customFieldsData = item.customFieldsData.map((field) => {
            const isRender = this.idOfFieldsToRender.length
              ? this.idOfFieldsToRender.includes(field.fieldId)
              : true;
            const order =
              (this.customFieldsToRenderMap[field.fieldId] || {}).order || null;
            if (field.singleSelectValue) {
              const [singleSelectOptions] = this.customFields
                .map((f) => {
                  if (f.type === "singleSelect" && f.id === field.fieldId) {
                    return f.singleSelectOptions;
                  }
                })
                .filter(Boolean);
              const optionLabel = singleSelectOptions.find(
                (item) => item.optionId === field.singleSelectValue
              );
              return {
                ...field,
                singleSelectValue: optionLabel ? field.singleSelectValue : null,
                id: item.id,
                fieldId: field.fieldId,
                textValue: (optionLabel || {}).optionName || "",
                isRender,
                order,
                color: (optionLabel || {}).color || "",
              };
            }
            if (field.userValue) {
              const userNameMap = field.userValue.reduce((acc, item) => {
                acc[item.userId] =
                  (this.allUsersMap[item.userId] || {}).fullName || "";
                return acc;
              }, {});
              const userText = Object.values(userNameMap).join(", ");
              return {
                ...field,
                id: item.id,
                fieldId: field.fieldId,
                textValue: userText,
                isRender,
                order,
                userData:
                  Object.values(userNameMap).map((fullName) => {
                    let tag = (fullName || "")
                      .split(" ")
                      .map((item) => item[0])
                      .join("");
                    return {
                      fullName,
                      tag,
                    };
                  }) || [],
              };
            }
            if (field.dateValue) {
              return {
                ...field,
                id: item.id,
                fieldId: field.fieldId,
                textValue: this.convertToLocalDateTime(
                  field.dateValue.utcDateOnly,
                  field.dateValue.utcTimeOnly
                ),
                isRender,
                order,
              };
            }
            if (field.dateNoTzValue) {
              return {
                ...field,
                id: item.id,
                fieldId: field.fieldId,
                textValue: `${field.dateNoTzValue.localDateOnly || ""} ${
                  field.dateNoTzValue.localTimeOnly || ""
                }`,

                isRender,
                order,
              };
            }
            if (field.numberValue) {
              return {
                ...field,
                id: item.id,
                fieldId: field.fieldId,
                textValue: field.numberValue,
                isRender,
                order,
              }
            }
            if (field.currencyValue) {
              return {
                ...field,
                id: item.id,
                fieldId: field.fieldId,
                textValue: field.currencyValue
                  ? `$${parseFloat(field.currencyValue).toFixed(2)}`
                  : '',
                isRender,
                order,
              }
            }
            if (field.multiSelectValues) {
              const [multiSelectOptions] = this.customFields
                .map((f) => {
                  if (f.type === "multiSelect" && f.id === field.fieldId) {
                    return f.multiSelectOptions;
                  }
                })
                .filter(Boolean);

              const options = (field.multiSelectValues || [])
                .filter((item) => multiSelectOptions.find(
                  (option) => option.optionId === item.optionId
                ))
                .map((item) => {
                  const currentOption = multiSelectOptions.find(
                    (option) => option.optionId === item.optionId
                  )
                  return {
                    optionId: item.optionId,
                    optionName: currentOption.optionName,
                    color: currentOption.color
                  }
                })

              return {
                ...field,
                id: item.id,
                fieldId: field.fieldId,
                textValue: "",
                isRender,
                order,
                color: "",
                multiSelectValues: options || [],
              };
            }
            if (field.recordLinkValues) {
              return {
                ...field,
                id: item.id,
                fieldId: field.fieldId,
                textValue: field.recordLinkValues
                  .map((item) => item.recordText)
                  .join(', '),
                recordLinkValues: field.recordLinkValues,
                isRender,
                order,
              }
            }
            return {
              ...field,
              id: item.id,
              fieldId: field.fieldId,
              textValue: field.textValue || "",
              isRender,
              order,
            };
          });
          return {
            id: item.id,
            customFieldsData: customFieldsData.sort(
              (a, b) => a.order - b.order
            ),
          };
        } else {
          const customFieldsData = this.customFieldsToRender.map((field) => {
            return {
              id: item.id,
              fieldId: field.id,
              textValue: "",
              isRender: true,
              order: 0,
            };
          });
          return {
            id: item.id,
            customFieldsData,
          };
        }
      });

      return res
    },
    numberTypeSortedData(groupBy, recordData) {
      const { id: groupById } = groupBy;
      if (!groupById || !recordData.length) return {};
      let temp = {};
      const groupByValues = [
        ...new Set(
          recordData.map((item) => {
            const field = (item.customFieldsData || []).find(
              (f) => f.fieldId === groupById
            );
            if (field.numberValue) {
              return field.numberValue;
            }
            return;
          })
        ),
      ].filter(Boolean);
      groupByValues.forEach((label) => {
        temp[label] = {
          label,
          records: this.formattedRecordData.filter((record) => {
            const field = record.customFieldsData.find(
              (f) => f.fieldId === groupBy.id
            );
            if (field && field.numberValue === label) {
              return true;
            }
            return false;
          }),
        };
      });
      const noDatLabel = `No ${groupBy.name || ""}`;
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter((record) => {
          const field = record.customFieldsData.find(
            (f) => f.fieldId === groupBy.id
          );
          if (!field) {
            return true;
          }
          if (field && !groupByValues.includes(field.numberValue)) {
            return true;
          }
        }),
      };
      return temp;
    },
    currencyTypeSortedData(groupBy, recordData) {
      const { id: groupById } = groupBy;
      if (!groupById || !recordData.length) return {};
      let temp = {};
      const groupByValues = [
        ...new Set(
          recordData.map((item) => {
            const field = (item.customFieldsData || []).find(
              (f) => f.fieldId === groupById
            );
            if (field.currencyValue) {
              return field.currencyValue;
            }
            return;
          })
        ),
      ].filter(Boolean);
      groupByValues.forEach((label) => {
        temp[label] = {
          label: formatAmount(label),
          records: this.formattedRecordData.filter((record) => {
            const field = record.customFieldsData.find(
              (f) => f.fieldId === groupBy.id
            );
            if (field && field.currencyValue === label) {
              return true;
            }
            return false;
          }),
        };
      });
      const noDatLabel = `No ${groupBy.name || ""}`;
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter((record) => {
          const field = record.customFieldsData.find(
            (f) => f.fieldId === groupBy.id
          );
          if (!field) {
            return true;
          }
          if (field && !groupByValues.includes(field.currencyValue)) {
            return true;
          }
        }),
      };
      return temp;
    },
    multiSelectTypeSortedData (groupBy, recordData) {
      const { id: groupById } = groupBy
      if (!groupById || !recordData.length) return {}
      const temp = {}
      const groupByValues = [
        ...new Set(
          recordData.map((item) => {
            const field = (item.customFieldsData || []).find(
              (f) => f.fieldId === groupById
            )
            if ((field.multiSelectValues || []).length) {
              return field.multiSelectValues
                .map((item) => item.optionName)
                .join(',')
            }
            
          })
        )
      ].filter(Boolean)

      groupByValues.forEach((label) => {
        temp[label] = {
          label,
          records: this.formattedRecordData.filter((record) => {
            const field = record.customFieldsData.find(
              (f) => f.fieldId === groupBy.id
            )
            if (field && (field.multiSelectValues || []).length) {
              const optionLabel = field.multiSelectValues
                .map((item) => item.optionName)
                .join(',')

              if (optionLabel === label) return true
            }
            return false
          })
        }
      })

      const noDatLabel = `No ${groupBy.name || ''}`
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter((record) => {
          const field = record.customFieldsData.find(
            (f) => f.fieldId === groupBy.id
          )
          if (!field) {
            return true
          }

          const optionLabel = field.multiSelectValues
            .map((item) => item.optionName)
            .join(',')

          if (!optionLabel && !groupByValues.includes(optionLabel)) {
            return true
          }
        })
      }
      return temp
    },
    recordLinkTypeSortedData (groupBy, recordData) {
      const { id: groupById } = groupBy
      if (!groupById || !recordData.length) return {}
      const temp = {}
      const groupByValues = [
        ...new Set(
          recordData.map((item) => {
            const field = (item.customFieldsData || []).find(
              (f) => f.fieldId === groupById
            )
            if ((field.recordLinkValues || []).length) {
              return field.recordLinkValues
                .map((item) => item.recordText)
                .join(',')
            }
            
          })
        )
      ].filter(Boolean)

      groupByValues.forEach((label) => {
        temp[label] = {
          label,
          records: this.formattedRecordData.filter((record) => {
            const field = record.customFieldsData.find(
              (f) => f.fieldId === groupBy.id
            )
            if (field && (field.recordLinkValues || []).length) {
              const optionLabel = field.recordLinkValues
                .map((item) => item.recordText)
                .join(',')

              if (optionLabel === label) return true
            }
            return false
          })
        }
      })

      const noDatLabel = `No ${groupBy.name || ''}`
      temp[noDatLabel] = {
        id: 0,
        label: noDatLabel,
        records: this.formattedRecordData.filter((record) => {
          const field = record.customFieldsData.find(
            (f) => f.fieldId === groupBy.id
          )
          if (!field) {
            return true
          }

          const optionLabel = field.recordLinkValues
            .map((item) => item.recordText)
            .join(',')

          if (!optionLabel && !groupByValues.includes(optionLabel)) {
            return true
          }
        })
      }
      return temp
    }
  }
};
