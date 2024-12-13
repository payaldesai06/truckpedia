export const openIssueTableColumns = [
  {
    header: 'ID',
    field: 'issueNumber'
  },
  {
    header: 'Priority',
    field: 'priority',
    action: 'getPriorityLabel'
  },
  {
    header: 'Date Reported',
    field: 'dateReported',
    action: 'trimSeconds'
  },
  {
    header: 'Unit',
    field: 'unit'
  },
  {
    header: 'Year',
    field: 'year'
  },
  {
    header: 'Make',
    field: 'make'
  },
  {
    header: 'Vin',
    field: 'vin'
  },
  {
    header: 'Issue Text',
    field: 'notes',
    action: 'trimText'
  },
  {
    header: 'Modified By',
    field: 'lastModifiedByUserFullName'
  }
]

export const scheduledIssueTableColumns = [
  {
    header: 'ID',
    field: 'issueNumber'
  },
  {
    header: 'Priority',
    field: 'priority',
    action: 'getPriorityLabel'
  },
  {
    header: 'Unit',
    field: 'unit'
  },
  {
    header: 'Year',
    field: 'year'
  },
  {
    header: 'Make',
    field: 'make'
  },
  {
    header: 'Vin',
    field: 'vin'
  },
  {
    header: 'Service Location',
    field: 'serviceLocation'
  },
  {
    header: 'Scheduled Time in',
    field: 'scheduledStartTime',
    action: 'trimSeconds'
  },
  {
    header: 'Estimated Completion Time',
    field: 'estimatedCompletionTime',
    action: 'trimSeconds'
  },
  {
    header: 'Modified By',
    field: 'lastModifiedByUserFullName'
  }
]

export const inServiceIssueTableColumns = [
  {
    header: 'ID',
    field: 'issueNumber'
  },
  {
    header: 'Priority',
    field: 'priority',
    action: 'getPriorityLabel'
  },
  {
    header: 'Unit',
    field: 'unit'
  },
  {
    header: 'Year',
    field: 'year'
  },
  {
    header: 'Make',
    field: 'make'
  },
  {
    header: 'Vin',
    field: 'vin'
  },
  {
    header: 'Issue Text',
    field: 'notes',
    action: 'trimText'
  },
  {
    header: 'Service Location',
    field: 'serviceLocation'
  },
  {
    header: 'Arrived For Service',
    field: 'arrivedForService',
    action: 'trimSeconds'
  },
  {
    header: 'Service Start Time',
    field: 'serviceStartTime',
    action: 'trimSeconds'
  },
  {
    header: 'Updated Estimated Completion Time',
    field: 'updatedEstimatedCompletionTime',
    action: 'trimSeconds'
  },
  {
    header: 'Modified By',
    field: 'lastModifiedByUserFullName'
  }
]

export const completedIssueTableColumns = [
  {
    header: 'ID',
    field: 'issueNumber'
  },
  {
    header: 'Unit',
    field: 'unit'
  },
  {
    header: 'Year',
    field: 'year'
  },
  {
    header: 'Make',
    field: 'make'
  },
  {
    header: 'Vin',
    field: 'vin'
  },
  {
    header: 'Service Location',
    field: 'serviceLocation'
  },
  {
    header: 'Completed Time',
    field: 'serviceCompletedTime',
    action: 'trimSeconds'
  },
  {
    header: 'Modified By',
    field: 'lastModifiedByUserFullName'
  }
]
