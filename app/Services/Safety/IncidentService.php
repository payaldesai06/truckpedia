<?php

namespace App\Services\Safety;

use App\Models\Incident;
use Exception;
use Illuminate\Foundation\Mix;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use App\Models\IncidentFile;
use Illuminate\Support\Facades\URL;
use App\Models\IncidentEmail;
use App\Mail\Safety\IncidentMail;
use Illuminate\Support\Facades\Mail;
use App\Models\AdminCompanyDetail;
use App\Models\IncidentNote;
use Carbon\Carbon;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\Safety\IncidentListReport;
use App\Mail\Safety\IncidentCustomizationMail;
use App\Mail\Safety\IncidentFollowUpMail;
use Illuminate\Support\Facades\Log;

class IncidentService {

  /**
   * Create Incident
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function create($request) {
    $incident = Incident::create($this->prepareInsertData($request));
    if (!empty(request('files'))) {
      $files = request('files');
      $filesToCreate = [];
      foreach ($files as $file) {
        $isPrivate = null;
        if ($file['isPrivate']) {
          $isPrivate = array_search(
            $file['isPrivate'],
            config('constant.incident.folder.type')
          );
        }
        $fileLabel = null;
        if ($file['fileLabel']) {
          $fileLabel = array_search(
            $file['fileLabel'],
            config('constant.incident.fileLabel')
          );
        }
        $filesToCreate[] =  [
          'is_private' => $isPrivate,
          'file_label' => $fileLabel,
          'original_filename' => $file['originalFilename'],
          'storage_filename' => $file['storageFilename'],
        ];
      }
      if (!empty($filesToCreate)) {
        $incident->incidentFiles()->createMany($filesToCreate);
      }
    }
    if (!empty(request('notesArray'))) {
      $incidentNotes = [];
      foreach (request('notesArray') as $note) {
        $incidentNotes[] = [
          'local_date' => $note['localDate'] ?? null,
          'local_time' => $note['localTime'] ?? null,
          'contact_type' => !empty($note['contactType']) ? array_search(
            $note['contactType'],
            config('constant.incident.note.contactType')
          ) : null,
          'name' => $note['name'] ?? null,
          'phone' => $note['phone'] ?? null,
          'email' => $note['email'] ?? null,
          'note' => $note['note']
        ];
      }
      if (!empty($incidentNotes)) {
        $incident->incidentNotes()->createMany($incidentNotes);
      }
    }
    $this->setIncidentCustomizationMail($incident);
    $this->checkAndNotifyIncidentFollowUpMail($incident);
    return $incident;
  }

  /**
   * Prepare Data For Insert
   * @param $request
   * @return array
   * @throws Exception
   */
  public function prepareInsertData($request): array {
    return [
      'company_id' => getAuthAdminCompanyId(),
      'tag_id' => $request->tagId ?? null,
      'incident_date' => $request->incidentDate ?? null,
      'incident_time' => $request->incidentTime ?? null,
      'status' => !empty($request->status) ? array_search(
        $request->status,
        config('constant.incident.status')
      ) : null,
      'closed_date' => $request->closedDate ?? null,
      'assignee_user_id' => $request->assigneeUserId ?? null,
      'follow_up_date' => $request->followUpDate ?? null,
      'notes' => $request->notes ?? null,
      'incident_claim_number' => $request->incidentClaimNumber ?? null,
      'third_party_incident_claim_number' => $request->thirdPartyIncidentClaimNumber ?? null,
      'ncic_number' => $request->ncicNumber ?? null,
      'saved_address_affected' => $this->getYesOrNoKey($request->savedAddressAffected),
      'charge_back' => $this->getYesOrNoKey($request->chargeBack),
      'charge_back_amount' => $request->chargeBackAmount ?? null,
      'estimates' => $this->getYesOrNoKey($request->estimates),
      'estimates_received' => $this->getYesOrNoKey($request->estimatesReceived),
      'cost_incurred' => $this->getYesOrNoKey($request->costIncurred),
      'cost_amount' => $request->costAmount ?? null,
      'deal_with_insurance_company_id' => $request->dealWithInsuranceCompanyId ?? null,
      'deal_with_insurance_company_name' => $request->dealWithInsuranceCompanyName ?? null,
      'involved_type' => !empty($request->involvedType) ? array_search(
        $request->involvedType,
        config('constant.incident.involvedType')
      ) : null,
      'involved_person_type' => !empty($request->involvedPersonType) ? array_search(
        $request->involvedPersonType,
        config('constant.incident.involvedPersonType')
      ) : null,
      'involved_user_id' => $request->involvedUserId ?? null,
      'involved_person_name' => $request->involvedPersonName ?? null,
      'involved_third_party_id' => $request->involvedThirdPartyId ?? null,
      'involved_third_party_name' => $request->involvedThirdPartyName ?? null,
      'corrective_action_applied' => $this->getYesOrNoKey($request->correctiveActionApplied),
      'dot_recordable' => $this->getYesOrNoKey($request->dotRecordable),
      'preventable' => $this->getYesOrNoKey($request->preventable),
      'at_fault' => $this->getYesOrNoKey($request->atFault),
      'truck_id' => $request->truckId ?? null,
      'truck_number' => $request->truckNumber ?? null,
      'trailer_id' => $request->trailerId ?? null,
      'trailer_number' => $request->trailerNumber ?? null,
      'location_type' => !empty($request->locationType) ? array_search(
        $request->locationType,
        config('constant.incident.locationType')
      ) : null,
      'address' => $request->address ?? null,
      'saved_address_id' => $request->savedAddressId ?? null,
      'reported' => $this->getYesOrNoKey($request->reported),
      'incident_type' => !empty($request->incidentType) ? array_search(
        $request->incidentType,
        config('constant.incident.incidentType')
      ) : null,
      'description' => $request->description ?? null
    ];
  }

  /**
   * Create Incident
   * @param $request
   * @return mix
   * @throws Exception
   */
  public function update($request) {
    $companyId = getAuthAdminCompanyId();
    $incidentRequestData = $this->prepareUpdateData($request);

    $incidentId = $request->incidentId;
    $incident = Incident::where('id', $incidentId)->where('company_id', $companyId)
      ->select(
        'id',
        // This is important cause company_id is not in $incidentRequestData.
        'company_id',
        'estimates',
        'assignee_user_id',
      )
      ->first();
    $incidentEstimatesExistingValue = $incident->estimates;
    $existingAssigneeValue = $incident->assignee_user_id;
    $incident->update($incidentRequestData);

    if (isset(config('user_customization.incident.customizationEmail')[$companyId])) {
      $this->setIncidentCustomizationMail($incident, $incidentEstimatesExistingValue);
    }
    $this->checkAndNotifyIncidentFollowUpMail($incident, $existingAssigneeValue);
    return $incident;
  }

  /**
   * Prepare Data For Update
   * @param $request
   * @return array
   */
  public function prepareUpdateData($request): array {
    $data = [];
    if ($request->has('tagId')) {
      $data['tag_id'] = $request->tagId ?? null;
    }
    if ($request->has('incidentDate')) {
      $data['incident_date'] = $request->incidentDate ?? null;
    }
    if ($request->has('incidentTime')) {
      $data['incident_time'] = $request->incidentTime ?? null;
    }
    if ($request->has('status')) {
      $data['status'] = !empty($request->status) ? array_search(
        $request->status,
        config('constant.incident.status')
      ) : null;
    }
    if ($request->has('closedDate')) {
      $data['closed_date'] = $request->closedDate ?? null;
    }
    if ($request->has('notes')) {
      $data['notes'] = $request->notes ?? null;
    }
    if ($request->has('assigneeUserId')) {
      $data['assignee_user_id'] = $request->assigneeUserId ?? null;
    }
    if ($request->has('followUpDate')) {
      $data['follow_up_date'] = $request->followUpDate ?? null;
    }
    if ($request->has('incidentClaimNumber')) {
      $data['incident_claim_number'] = $request->incidentClaimNumber ?? null;
    }
    if ($request->has('thirdPartyIncidentClaimNumber')) {
      $data['third_party_incident_claim_number'] = $request->thirdPartyIncidentClaimNumber ?? null;
    }
    if ($request->has('ncicNumber')) {
      $data['ncic_number'] = $request->ncicNumber ?? null;
    }
    if ($request->has('savedAddressAffected')) {
      $data['saved_address_affected'] = $this->getYesOrNoKey($request->savedAddressAffected);
    }
    if ($request->has('chargeBack')) {
      $data['charge_back'] = $this->getYesOrNoKey($request->chargeBack);
    }
    if ($request->has('chargeBackAmount')) {
      $data['charge_back_amount'] = $request->chargeBackAmount;
    }
    if ($request->has('estimates')) {
      $data['estimates'] = $this->getYesOrNoKey($request->estimates);
    }
    if ($request->has('estimatesReceived')) {
      $data['estimates_received'] = $this->getYesOrNoKey($request->estimatesReceived);
    }
    if ($request->has('costIncurred')) {
      $data['cost_incurred'] = $this->getYesOrNoKey($request->costIncurred);
    }
    if ($request->has('costAmount')) {
      $data['cost_amount'] = $request->costAmount;
    }
    if ($request->has('dealWithInsuranceCompanyId')) {
      $data['deal_with_insurance_company_id'] = $request->dealWithInsuranceCompanyId ?? null;
    }
    if ($request->has('dealWithInsuranceCompanyName')) {
      $data['deal_with_insurance_company_name'] = $request->dealWithInsuranceCompanyName ?? null;
    }
    if ($request->has('involvedType')) {
      $data['involved_type'] = !empty($request->involvedType) ? array_search(
        $request->involvedType,
        config('constant.incident.involvedType')
      ) : null;
    }
    if ($request->has('involvedPersonType')) {
      $data['involved_person_type'] = !empty($request->involvedPersonType) ? array_search(
        $request->involvedPersonType,
        config('constant.incident.involvedPersonType')
      ) : null;
    }
    if ($request->has('involvedUserId')) {
      $data['involved_user_id'] = $request->involvedUserId ?? null;
    }
    if ($request->has('involvedPersonName')) {
      $data['involved_person_name'] = $request->involvedPersonName ?? null;
    }
    if ($request->has('involvedThirdPartyId')) {
      $data['involved_third_party_id'] = $request->involvedThirdPartyId ?? null;
    }
    if ($request->has('involvedThirdPartyName')) {
      $data['involved_third_party_name'] = $request->involvedThirdPartyName ?? null;
    }
    if ($request->has('correctiveActionApplied')) {
      $data['corrective_action_applied'] = $this->getYesOrNoKey($request->correctiveActionApplied);
    }
    if ($request->has('dotRecordable')) {
      $data['dot_recordable'] = $this->getYesOrNoKey($request->dotRecordable);
    }
    if ($request->has('preventable')) {
      $data['preventable'] = $this->getYesOrNoKey($request->preventable);
    }
    if ($request->has('atFault')) {
      $data['at_fault'] = $this->getYesOrNoKey($request->atFault);
    }
    if ($request->has('truckId')) {
      $data['truck_id'] = $request->truckId ?? null;
    }
    if ($request->has('truckNumber')) {
      $data['truck_number'] = $request->truckNumber ?? null;
    }
    if ($request->has('trailerId')) {
      $data['trailer_id'] = $request->trailerId ?? null;
    }
    if ($request->has('trailerNumber')) {
      $data['trailer_number'] = $request->trailerNumber ?? null;
    }
    if ($request->has('locationType')) {
      $data['location_type'] = !empty($request->locationType) ? array_search(
        $request->locationType,
        config('constant.incident.locationType')
      ) : null;
    }
    if ($request->has('address')) {
      $data['address'] = $request->address ?? null;
    }
    if ($request->has('savedAddressId')) {
      $data['saved_address_id'] = $request->savedAddressId ?? null;
    }
    if ($request->has('reported')) {
      $data['reported'] = $this->getYesOrNoKey($request->reported);
    }
    if ($request->has('incidentType')) {
      $data['incident_type'] = !empty($request->incidentType) ? array_search(
        $request->incidentType,
        config('constant.incident.incidentType')
      ) : null;
    }
    if ($request->has('description')) {
      $data['description'] = $request->description ?? null;
    }
    return $data;
  }

  /**
   * Show Incident details using Incident id
   * @param int $id
   * @return mix
   * @throws Exception
   */
  public function show($id) {
    return Incident::with([
      'trailer:id,number',
      'truck:id,number',
      'insuranceCompany:id,company_name',
      'involvedThirdParty:id,company_name',
      'involvedUser:id,first_name,last_name',
      'assigneeUser:id,first_name,last_name',
      'savedAddress:id,name',
      'incidentFiles',
      'incidentNotes'
    ])
      ->where('company_id', getAuthAdminCompanyId())
      ->findOrFail($id);
  }

  /**
   * Show Incident List With Filter
   * @param $request
   * @throws Exception
   * @return LengthAwarePaginator
   */
  public function getList($request) {
    $incidentListQuery = Incident::with([
      'trailer:id,number',
      'truck:id,number',
      'insuranceCompany:id,company_name',
      'involvedThirdParty:id,company_name',
      'involvedUser:id,first_name,last_name',
      'assigneeUser:id,first_name,last_name',
      'savedAddress:id,name',
      'incidentFiles',
      'tag:id,business_name',
    ])
      ->when(!empty($request->filters['tagId']), function ($query) use ($request) {
        $query->where('tag_id', $request->filters['tagId']);
      })
      ->when(!empty($request->filters['incidentDate']['startDate']), function ($query) use ($request) {
        $query->whereBetween('incident_date', [
          $request->filters['incidentDate']['startDate'],
          $request->filters['incidentDate']['endDate'],
        ]);
      })
      ->when(!empty($request->filters['incidentYear']), function ($query) use ($request) {
        $query->whereYear('incident_date', $request->filters['incidentYear']);
      })
      ->when(!empty($request->filters['status']), function ($query) use ($request) {
        $query->where('status', array_search(
          $request->filters['status'],
          config('constant.incident.status')
        ));
      })
      ->when(!empty($request->filters['assigneeUserName']), function ($query)
      use ($request) {
        $query->whereHas(
          'assigneeUser',
          function (Builder $query) use ($request) {
            $query->whereRaw(
              "concat(COALESCE(`first_name`,''), ' ', COALESCE(`last_name`,'')) like '%" . $request->filters['assigneeUserName'] . "%' "
            );
          }
        );
      })
      ->when(!empty($request->filters['followUpDate']), function ($query) use ($request) {
        $query->whereDate('follow_up_date', $request->filters['followUpDate']);
      })
      ->when(!empty($request->filters['closedDate']['startDate']), function ($query) use ($request) {
        $query->whereBetween('closed_date', [
          $request->filters['closedDate']['startDate'],
          $request->filters['closedDate']['endDate'],
        ]);
      })
      ->when(!empty($request->filters['notes']), function ($query) use ($request) {
        $query->where('notes', 'like', '%' . $request->filters['notes'] . '%');
      })
      ->when(!empty($request->filters['incidentClaimNumber']), function ($query) use ($request) {
        $query->where('incident_claim_number', 'like', '%' . $request->filters['incidentClaimNumber'] . '%');
      })
      ->when(
        !empty($request->filters['thirdPartyIncidentClaimNumber']),
        function ($query) use ($request) {
          $query->where(
            'third_party_incident_claim_number',
            'like',
            '%' . $request->filters['thirdPartyIncidentClaimNumber'] . '%'
          );
        }
      )
      ->when(!empty($request->filters['ncicNumber']), function ($query) use ($request) {
        $query->where('ncic_number', 'like', '%' . $request->filters['ncicNumber'] . '%');
      })
      ->when(!empty($request->filters['ncicReport']), function ($query) use ($request) {
        $fileLabelId = array_search('ncicReport', config('constant.incident.fileLabel'));
        if ($request->filters['ncicReport'] === 'yes') {
          $query->whereHas('incidentFiles', function (Builder $query) use ($fileLabelId) {
            $query->where('file_label', '=', $fileLabelId);
          });
        } else if ($request->filters['ncicReport'] === 'no') {
          $query->whereDoesntHave('incidentFiles', function (Builder $query)
          use ($fileLabelId) {
            $query->where('file_label', '=', $fileLabelId);
          });
        }
      })
      ->when(!empty($request->filters['savedAddressAffected']), function ($query)
      use ($request) {
        $query->where('saved_address_affected', $this->getYesOrNoKey(
          $request->filters['savedAddressAffected']
        ));
      })
      ->when(!empty($request->filters['chargeBack']), function ($query) use ($request) {
        $query->where('charge_back', $this->getYesOrNoKey($request->filters['chargeBack']));
      })
      ->when(!empty($request->filters['chargeBackAmount']), function ($query)
      use ($request) {
        $query->where(
          'charge_back_amount',
          'like',
          '%' . $request->filters['chargeBackAmount'] . '%'
        );
      })
      ->when(!empty($request->filters['estimates']), function ($query) use ($request) {
        $query->where('estimates', $this->getYesOrNoKey($request->filters['estimates']));
      })
      ->when(!empty($request->filters['estimatesReceived']), function ($query) use ($request) {
        $query->where('estimates_received', $this->getYesOrNoKey($request->filters['estimatesReceived']));
      })
      ->when(!empty($request->filters['costIncurred']), function ($query) use ($request) {
        $query->where(
          'cost_incurred',
          $this->getYesOrNoKey($request->filters['costIncurred'])
        );
      })
      ->when(!empty($request->filters['costAmount']), function ($query) use ($request) {
        $query->where('cost_amount', 'like', '%' . $request->filters['costAmount'] . '%');
      })
      ->when(!empty($request->filters['insuranceCompanyName']), function ($query)
      use ($request) {
        $query->where('deal_with_insurance_company_name', 'like', '%' .
          $request->filters['insuranceCompanyName'] . '%');
      })
      ->when(!empty($request->filters['involvedType']), function ($query) use ($request) {
        $query->where('involved_type', array_search(
          $request->filters['involvedType'],
          config('constant.incident.involvedType')
        ));
      })
      ->when(!empty($request->filters['involvedPersonType']), function ($query)
      use ($request) {
        $query->where('involved_person_type', array_search(
          $request->filters['involvedPersonType'],
          config('constant.incident.involvedPersonType')
        ));
      })
      ->when(!empty($request->filters['involvedUserName']), function ($query)
      use ($request) {
        $query->whereHas(
          'involvedUser',
          function (Builder $query) use ($request) {
            $query->whereRaw(
              "concat(COALESCE(`first_name`,''), ' ', COALESCE(`last_name`,'')) like '%" . $request->filters['involvedUserName'] . "%' "
            );
          }
        );
      })
      ->when(!empty($request->filters['involvedPersonName']), function ($query)
      use ($request) {
        $query->where(
          'involved_person_name',
          'like',
          '%' . $request->filters['involvedPersonName'] . '%'
        );
      })
      ->when(!empty($request->filters['involvedThirdPartyName']), function ($query)
      use ($request) {
        $query->where('involved_third_party_name', 'like', '%' .
          $request->filters['involvedThirdPartyName'] . '%');
      })
      ->when(!empty($request->filters['correctiveActionApplied']), function ($query)
      use ($request) {
        $query->where('corrective_action_applied', $this->getYesOrNoKey(
          $request->filters['correctiveActionApplied']
        ));
      })
      ->when(!empty($request->filters['dotRecordable']), function ($query) use ($request) {
        $query->where('dot_recordable', $this->getYesOrNoKey($request->filters['dotRecordable']));
      })
      ->when(!empty($request->filters['preventable']), function ($query) use ($request) {
        $query->where('preventable', $this->getYesOrNoKey($request->filters['preventable']));
      })
      ->when(!empty($request->filters['atFault']), function ($query) use ($request) {
        $query->where('at_fault', $this->getYesOrNoKey($request->filters['atFault']));
      })
      ->when(!empty($request->filters['truckNumber']), function ($query) use ($request) {
        $query->where('truck_number', 'like', '%' . $request->filters['truckNumber'] . '%');
      })
      ->when(!empty($request->filters['trailerNumber']), function ($query) use ($request) {
        $query->where('trailer_number', 'like', '%' . $request->filters['trailerNumber'] . '%');
      })
      ->when(!empty($request->filters['locationType']), function ($query) use ($request) {
        $query->where('location_type', array_search(
          $request->filters['locationType'],
          config('constant.incident.locationType')
        ));
      })
      ->when(!empty($request->filters['address']), function ($query) use ($request) {
        $query->where('address', 'like', '%' . $request->filters['address'] . '%');
      })
      ->when(!empty($request->filters['reported']), function ($query) use ($request) {
        $query->where('reported', $this->getYesOrNoKey($request->filters['reported']));
      })
      ->when(!empty($request->filters['incidentType']), function ($query) use ($request) {
        $query->where('incident_type', array_search(
          $request->filters['incidentType'],
          config('constant.incident.incidentType')
        ));
      })
      ->when(!empty($request->filters['jotformReport']), function ($query) use ($request) {
        $fileLabelId = array_search('jotform', config('constant.incident.fileLabel'));
        if ($request->filters['jotformReport'] === 'yes') {
          $query->whereHas('incidentFiles', function (Builder $query) use ($fileLabelId) {
            $query->where('file_label', '=', $fileLabelId);
          });
        } else if ($request->filters['jotformReport'] === 'no') {
          $query->whereDoesntHave('incidentFiles', function (Builder $query)
          use ($fileLabelId) {
            $query->where('file_label', '=', $fileLabelId);
          });
        }
      })
      ->when(!empty($request->filters['description']), function ($query) use ($request) {
        $query->where('description', 'like', '%' . $request->filters['description'] . '%');
      })
      ->when(!empty($request->sortBy), function ($query) use ($request) {
        $sortByField = array_search($request->sortBy['field'], config('constant.incident.sortByField'));
        /* I don't understand what's going on here.
        if ($sortByField == 'status') {
          $query->select('*')
            ->addSelect(
              DB::raw(
                "CASE
                WHEN status = 1 THEN 'open'
                WHEN status = 2 THEN 'closed'
                WHEN status = 3 THEN 'denied'
                  END
                as status_order"
              )
            )
            ->orderBy('status_order', $request->sortBy['order']);
        } else {
        */
        // TODO (not urgent, only do it later when customers asked us):
        // Can the code order by user name, tag name, saved addresses name, etc?
        $query->orderBy($sortByField, $request->sortBy['order']);
        //}
      }, function ($query) {
        return $query->orderBy('id', 'desc');
      })
      ->where('company_id', getAuthAdminCompanyId());
    if (request('toDownload') || empty($request->pageSize)) {
      return $incidentListQuery->get();
    } else {
      return $incidentListQuery->paginate($request->pageSize ?? config('constant.pagination.pageSize'));
    }
  }

  /**
   * Delete incident.
   * @return mixed
   * @throws Exception
   */
  public function delete() {
    $incident = Incident::where('id', request('id'))
      ->where('company_id', getAuthAdminCompanyId())
      ->select('id', 'company_id')->first();
    if (empty($incident)) {
      throw new Exception(config('response.incident.notFound'));
    }
    return $incident->delete();
  }

  /**
   * Return the link of incident list file
   * @param $incidents
   * @return array
   * @throws Exception
   */
  function getListExport($incidents): array {
    $url = getAuthAdminCompanyId() . '-Incidents-Report.xlsx';
    $path = config('constant.export_path') . $url;
    Excel::store(new IncidentListReport($incidents), $path, 's3');
    return [
      "download_url" => getExportFile($url)
    ];
  }

  /**
   * Get Yes Or No Or Unknown Key
   * @params $value
   * @param $value
   * @return integer|null
   */
  public function getYesOrNoKey($value): ?int {
    return !empty($value) ? array_search(
      $value,
      config('constant.incident.yesNoUnknown')
    ) : null;
  }


  /**
   * Create incident file.
   * @return mixed
   */
  public function createFile() {
    return DB::transaction(function () {
      $incidentId = request('incidentId');
      $incident = Incident::where('id', $incidentId)->select('id')->first();
      $newlyCreatedFileIds = [];
      if (!empty(request('files'))) {
        $files = request('files');
        foreach ($files as $file) {
          $isPrivate = null;
          if ($file['isPrivate']) {
            $isPrivate = array_search(
              $file['isPrivate'],
              config('constant.incident.folder.type')
            );
          }
          $fileLabel = null;
          if ($file['fileLabel']) {
            $fileLabel = array_search(
              $file['fileLabel'],
              config('constant.incident.fileLabel')
            );
          }
          $newFile = $incident->incidentFiles()->create(
            [
              'is_private' => $isPrivate,
              'file_label' => $fileLabel,
              'incident_id' => $incidentId,
              'original_filename' => $file['originalFilename'],
              'storage_filename' => $file['storageFilename'],
            ]
          );
          $newlyCreatedFileIds[] = ['fileId' => $newFile->id];
        }
      }
      return ['files' => $newlyCreatedFileIds];
    });
  }

  /**
   * Delete incident file.
   * @return mixed
   * @throws Exception
   */
  public function deleteFile() {
    $incident = Incident::whereHas('incidentFiles', function ($query) {
      $query->where('id', request('id'));
    })->where('company_id', getAuthAdminCompanyId())->select('id', 'company_id')->first();
    if (empty($incident)) {
      throw new Exception(config('response.incident.fileNotFound'));
    }
    return $incident->incidentFiles()->find(request('id'))->delete();
  }

  /**
   * Get incident file urls.
   * @return mixed
   * @throws Exception
   */
  public function getUploadUrls($request) {
    $response = [];
    $companyId = getAuthAdminCompanyId();
    $incidentId = $request->incidentId ?? null;
    $ids = $companyId;
    if (!empty($incidentId)) {
      $ids = $ids . '-' . $incidentId;
    }
    $files = request('files');
    foreach ($files as $file) {
      $response[] = $this->generateFileNameAndPresignedUrl($ids, $file['extension'], null);
    }
    return $response;
  }

  /**
   * Get incident File Upload URL.
   * @param $companyId
   * @param $extension
   * @param $index
   * @return array
   */
  private function generateFileNameAndPresignedUrl($companyId, $extension, $index): array {
    $fileName = 'si-' . generateUniqueFileName($companyId, $extension, $index);
    return [
      'storageFilename' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.safetyIncidentFiles'))
    ];
  }

  /** Update incident file.
   * @return mixed
   */
  public function editFile() {
    return DB::transaction(function () {
      $incidentId = request('incidentId');
      $incidentFiles = IncidentFile::where('incident_id', $incidentId)->select('id')->get();
      if (!empty(request('files'))) {
        $files = request('files');
        foreach ($files as $file) {
          $updateData = [];
          if (array_key_exists('isPrivate', $file)) {
            $updateData['is_private'] = !empty($file['isPrivate']) ?
              array_search(
                $file['isPrivate'],
                config('constant.incident.folder.type')
              ) : null;
          }
          if (array_key_exists('fileLabel', $file)) {
            $updateData['file_label'] = !empty($file['fileLabel']) ?
              array_search(
                $file['fileLabel'],
                config('constant.incident.fileLabel')
              ) : null;
          }
          $incidentFiles->where('id', $file['fileId'])->first()->update($updateData);
        }
      }
      return $incidentFiles;
    });
  }

  /**
   * Get incident file list.
   * @return mixed
   * @throws Exception
   */
  public function getFileList() {
    return IncidentFile::where('incident_id', request('incidentId'))->get();
  }

  /**
   * Get share link.
   * @param $id
   * @return mixed
   * @throws Exception
   */
  public function getShareLink($id = null) {
    $incidentId = request('incidentId') ?? $id;
    $incident = Incident::where('id', $incidentId)
      ->select('id', 'public_page_verify_token')
      ->first();
    if (!empty($incident->public_page_verify_token)) {
      $token = $incident->public_page_verify_token;
    } else {
      $token = generateRandomString(10);
      $incident->public_page_verify_token = $token;
      $incident->save();
    }
    $link = url('publicIncidentFiles') . '/' . $incidentId . '?token=' . $token;
    return ['link' => $link];
  }

  /**
   * view share page.
   * @return mixed
   * @throws Exception
   */
  public function viewSharePage() {
    return IncidentFile::where('incident_id', request('incidentId'))
      ->whereNull('is_private')
      ->whereHas('incident', function ($query) {
        $query->where('public_page_verify_token', request('token'));
      })
      ->get();
  }

  /**
   * Create incident email
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createEmail($request) {
    $incidentEmail = IncidentEmail::create($this->getValidatedEmailData($request));
    $sendOutFromEzpapelType = config('constant.incident.email.type')[1];
    if ($request->type == $sendOutFromEzpapelType) {
      //send out email with queue
      $adminCompanyDetail = AdminCompanyDetail::select('id', 'business_name', 'email')
        ->where('id', getAuthAdminCompanyId())
        ->first();
      Mail::queue(new IncidentMail($incidentEmail, $adminCompanyDetail));
    }
    return [
      'emailId' => $incidentEmail->id,
      'createdAt' => $incidentEmail->created_at->format(config('constant.date_time_format')),
    ];
  }

  /**
   * Get validated email data
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getValidatedEmailData($request): array {
    return [
      'incident_id' => $request->incidentId ?? null,
      'type' => !empty($request->type) ? array_search(
        $request->type,
        config('constant.incident.email.type')
      ) : null,
      'to' => !empty($request->to) ? implode(',', $request->to) : null,
      'cc' => !empty($request->cc) ? implode(',', $request->cc) : null,
      'bcc' => !empty($request->bcc) ? implode(',', $request->bcc) : null,
      'fromName' => $request->fromName ?? null,
      'from' => $request->from ?? null,
      'replyTo' => !empty($request->replyTo) ? implode(',', $request->replyTo) : null,
      'subject' => $request->subject ?? null,
      'content' => $request->content ?? null,
    ];
  }

  /**
   * Delete Incident Email
   * @return mixed
   * @throws Exception
   */
  public function deleteEmail() {
    $incidentEmail = IncidentEmail::where('id', request('emailId'))->first();
    if (!$incidentEmail) {
      throw new Exception(config('response.incident.email.notFound'));
    }
    return $incidentEmail->delete();
  }

  /**
   * Get data for charts
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getDataForCharts($request) {
    $startDate = $request->startDate;
    $endDate = $request->endDate;
    $totalIncidents = 0;
    $byTag = $byIncidentType = $byInvolvedType = $byLocationType
      = $byPreventable = $byAtFault = $byMonth = $byDayOfWeek = [];
    $incidents = Incident::where('company_id', getAuthAdminCompanyId())
      ->whereBetween('incident_date', [$startDate, $endDate])
      ->select(
        'id',
        'tag_id',
        'incident_date',
        'involved_type',
        'incident_type',
        'preventable',
        'at_fault',
        'location_type'
      )
      ->get();

    if ($incidents->isNotEmpty()) {
      $totalIncidents = count($incidents);
      foreach ($incidents as $incident) {
        $date = Carbon::parse($incident->incident_date);
        $month = $date->month;

        //by tags
        if (!empty($incident->tag_id)) {
          $tagId = $incident->tag_id;
          if (isset($byTag[$tagId])) {
            $byTag[$tagId]['count'] += 1;
          } else {
            $byTag[$tagId] = [
              'tagId' => $tagId,
              'count' => 1,
              'byMonth' => [],
            ];
          }
          // tag months calculate
          $tagMonthExists = false;
          foreach ($byTag[$tagId]['byMonth'] as &$monthData) {
            if ($monthData['month'] == $month) {
              $monthData['count'] += 1;
              $tagMonthExists = true;
              break;
            }
          }

          if (!$tagMonthExists) {
            $byTag[$tagId]['byMonth'][] = [
              'month' => $month,
              'count' => 1
            ];
          }
        }

        //by incident type
        if (!empty($incident->incident_type)) {
          $incidentType = config('constant.incident.incidentType')[$incident->incident_type];
          if (isset($byIncidentType[$incidentType])) {
            $byIncidentType[$incidentType]['count'] += 1;
          } else {
            $byIncidentType[$incidentType] = [
              'incidentType' => $incidentType,
              'count' => 1,
              'byMonth' => [],
              'byLocationType' => []
            ];
          }

          $incidentMonthExists = false;
          foreach ($byIncidentType[$incidentType]['byMonth'] as &$monthData) {
            if ($monthData['month'] == $month) {
              $monthData['count'] += 1;
              $incidentMonthExists = true;
              break;
            }
          }

          if (!$incidentMonthExists) {
            $byIncidentType[$incidentType]['byMonth'][] = [
              'month' => $month,
              'count' => 1
            ];
          }

          if (!empty($incident->location_type)) {
            $incidentLocTypeExists = false;
            $locationType = config('constant.incident.locationType')[$incident->location_type];
            foreach ($byIncidentType[$incidentType]['byLocationType'] as &$monthData) {
              if ($monthData['locationType'] == $locationType) {
                $monthData['count'] += 1;
                $incidentLocTypeExists = true;
                break;
              }
            }

            if (!$incidentLocTypeExists) {
              $byIncidentType[$incidentType]['byLocationType'][] = [
                'locationType' => $locationType,
                'count' => 1
              ];
            }
          }
        }

        //by involved type
        if (!empty($incident->involved_type)) {
          $involvedType = config('constant.incident.involvedType')[$incident->involved_type];
          if (isset($byInvolvedType[$involvedType])) {
            $byInvolvedType[$involvedType]['count'] += 1;
          } else {
            $byInvolvedType[$involvedType] = [
              'involvedType' => $involvedType,
              'count' => 1
            ];
          }
        }
        //by location type
        if (!empty($incident->location_type)) {
          $locationType = config('constant.incident.locationType')[$incident->location_type];
          if (isset($byLocationType[$locationType])) {
            $byLocationType[$locationType]['count'] += 1;
          } else {
            $byLocationType[$locationType] = [
              'locationType' => $locationType,
              'count' => 1
            ];
          }
        }
        // by preventable
        if (!empty($incident->preventable)) {
          $preventable = config('constant.incident.yesNoUnknown')[$incident->preventable];
          if (isset($byPreventable[$preventable])) {
            $byPreventable[$preventable]['count'] += 1;
          } else {
            $byPreventable[$preventable] = [
              'preventable' => $preventable,
              'count' => 1
            ];
          }
        }
        // by atFault
        if (!empty($incident->at_fault)) {
          $atFault = config('constant.incident.yesNoUnknown')[$incident->at_fault];
          if (isset($byAtFault[$atFault])) {
            $byAtFault[$atFault]['count'] += 1;
          } else {
            $byAtFault[$atFault] = [
              'atFault' => $atFault,
              'count' => 1
            ];
          }
        }

        if (isset($byMonth[$month])) {
          $byMonth[$month]['count'] += 1;
        } else {
          $byMonth[$month] = [
            'month' => $month,
            'count' => 1
          ];
        }
        //by day
        $day = strtolower($date->format('l'));
        if (isset($byDayOfWeek[$day])) {
          $byDayOfWeek[$day]['count'] += 1;
        } else {
          $byDayOfWeek[$day] = [
            'dayOfWeek' => $day,
            'count' => 1
          ];
        }
      }
    }
    return [
      'totalIncidents' => $totalIncidents,
      'byTag' => array_values($byTag),
      'byIncidentType' => array_values($byIncidentType),
      'byInvolvedType' => array_values($byInvolvedType),
      'byLocationType' => array_values($byLocationType),
      'byPreventable' => array_values($byPreventable),
      'byAtFault' => array_values($byAtFault),
      'byMonth' => array_values($byMonth),
      'byDayOfWeek' => array_values($byDayOfWeek),
    ];
  }

  /**
   * Get incident count
   * @return mixed
   * @throws Exception
   */
  public function getCount() {
    $tagId = request('tagId') ?? null;
    $parentCompanyOnly = request('parentCompanyOnly') ?? false;
    $year = request('year') ?? null;
    $incidents = Incident::where('company_id', getAuthAdminCompanyId())
      ->when(!empty($tagId), function ($query) use ($tagId) {
        $query->where('tag_id', $tagId);
      })->when($parentCompanyOnly, function ($query) {
        $query->whereNull('tag_id');
      })->when($year, function ($query) use ($year) {
        $query->whereYear('incident_date', $year);
      })
      ->count();
    return [
      'count' => $incidents
    ];
  }

  /**
   * Create Incident Note
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createNote($request) {
    $getValidatedNoteData = $this->getValidatedNoteData($request);
    $getValidatedNoteData['incident_id'] = $request->incidentId;
    $incidentNote = IncidentNote::create($getValidatedNoteData);
    return ['noteId' => $incidentNote->id];
  }

  /**
   * Update Incident Note
   * @param $request
   * @return mix
   * @throws Exception
   */
  public function editNote($request) {
    $getValidatedNoteData = $this->getValidatedNoteData($request);
    return IncidentNote::where('id', $request->noteId)
      ->where('incident_id', $request->incidentId)
      ->update($getValidatedNoteData);
  }

  /**
   * Get validated note data
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getValidatedNoteData($request): array {
    return [
      'local_date' => $request->localDate ?? null,
      'local_time' => $request->localTime ?? null,
      'contact_type' => !empty($request->contactType) ? array_search(
        $request->contactType,
        config('constant.incident.note.contactType')
      ) : null,
      'name' => $request->name ?? null,
      'phone' => $request->phone ?? null,
      'email' => $request->email ?? null,
      'note' => $request->note ?? null
    ];
  }

  /**
   * Delete Incident Note
   * @return mixed
   * @throws Exception
   */
  public function deleteNote() {
    $incidentNote = IncidentNote::where('id', request('noteId'))->first();
    if (!$incidentNote) {
      throw new Exception(config('response.incident.notes.notFound'));
    }
    return $incidentNote->delete();
  }

  /**
   * Set incident customization mail
   * @param $incident
   * @param $existingEstimatesValue
   * @return mixed
   * @throws Exception
   */
  public function setIncidentCustomizationMail($incident, $existingEstimatesValue = null) {
    $companyId = $incident->company_id;
    $customizationEmailData = config('user_customization.incident.customizationEmail');
    $newEstimatesValue = $incident->estimates;
    if (
      isset($customizationEmailData[$companyId]) &&
      $newEstimatesValue == 1 &&
      $existingEstimatesValue != $newEstimatesValue
    ) {
      $shareLink = $this->getShareLink($incident->id);
      $content = [
        'toEmails' => $customizationEmailData[$companyId]['toEmails'] ?? [],
        'ccEmails' => $customizationEmailData[$companyId]['ccEmails'] ?? [],
        'replyToEmails' => $customizationEmailData[$companyId]['replyToEmails'] ?? [],
        'link' => $shareLink['link'],
        'incidentClaimNumber' => $incident->incident_claim_number ?? '',
        'tagName' => !empty($incident->tag) ? $incident->tag->business_name : '',
        'incidentType' => !empty($incident->incident_type) ?
          getFormattedCamelCase(config('constant.incident.incidentType')[$incident->incident_type])
          : '',
        'description' => $incident->description ?? '',
      ];
      Mail::queue(new IncidentCustomizationMail($content));
    }
  }

  /**
   * Check and notify incident follow up mail
   * @param $incident
   * @param $existingAssigneeValue
   * @return mixed
   * @throws Exception
   */
  public function checkAndNotifyIncidentFollowUpMail($incident, $existingAssigneeValue = null) {
    $newAssigneeUserId = request('assigneeUserId');
    $status = request('status');
    $closedStatus = config('constant.incident.status')[2];
    if (
      !empty($newAssigneeUserId) &&
      $newAssigneeUserId != $existingAssigneeValue &&
      $status != $closedStatus
    ) {
      $this->sendIncidentFollowUpMail($incident);
    }
  }

  /**
   * Send incident follow up mail
   * @param $incident
   * @return mixed
   * @throws Exception
   */
  public function sendIncidentFollowUpMail($incident) {
    try {
      $content = [
        'toEmail' => $incident->assigneeUser->email ?? '',
        'ccEmail' => $incident->company->email ?? '',
        'replyToEmail' => $incident->company->email ?? '',
        'incidentClaimNumber' => $incident->incident_claim_number ?? '',
        'incidentDate' => $incident->incident_date ?? '',
        'incidentType' => !empty($incident->incident_type) ?
          getFormattedCamelCase(config('constant.incident.incidentType')[$incident->incident_type])
          : '',
        'status' => $incident->status ? config('constant.incident.status')[$incident->status] : '',
        'followUpDate' => $incident->follow_up_date ?? '',
        'description' => $incident->description ?? '',
      ];
      Mail::queue(new IncidentFollowUpMail($content));
    } catch (Exception $exception) {
      Log::error($exception);
    }
  }

  /**
   * Cron to safety incidents follow up email reminder
   * @return void
   * @throws Exception
   */
  public function followUpEmailReminderDailyCronJob() {
    try {
      $currentDate = Carbon::now()->toDateString();
      $closedStatus = array_search('closed', config('constant.incident.status'));
      $incidents = Incident::whereDate('follow_up_date', $currentDate)
        ->whereNotNull('assignee_user_id')
        ->where('status', '!=', $closedStatus)
        ->with([
          'assigneeUser:id,email',
          'company:id,email'
        ])
        ->select(
          'id',
          'company_id',
          'status',
          'assignee_user_id',
          'follow_up_date',
          'incident_date',
          // 'tag_id',
          'incident_claim_number',
          'incident_type',
          'description'
        )
        ->get();
      if ($incidents->isNotEmpty()) {
        foreach ($incidents as $incident) {
          $this->sendIncidentFollowUpMail($incident);
        }
      }
    } catch (Exception $exception) {
      Log::channel('slack')->emergency(
        $exception->getMessage()
      );
      Log::error($exception);
    }
  }

  /**
   * Get data for charts
   * @return mixed
   * @throws Exception
   */
  public function getYearlyComparisonDataForCharts(int $startYear, int $endYear): array {
    $companyId = getAuthAdminCompanyId();
    // Check company safety statistics hard coded data for comparisons.
    $companyCustomSafetyHistoryData = config('safety_history_data')[$companyId] ?? [];
    $startDate = Carbon::create($startYear)->startOfYear();
    $endDate = Carbon::create($endYear)->endOfYear();

    $getAllIncidentsByYear = Incident::where('company_id', $companyId)
      ->select('id', 'incident_date', 'incident_type')
      ->whereBetween('incident_date', [$startDate, $endDate])
      ->get();
    $incidentsGroupedByYear = $getAllIncidentsByYear->groupBy(function ($item) {
      return Carbon::parse($item->incident_date)->year;
    })->sortKeys();

    $result['byYear'] = [];
    for ($year = $startYear; $year <= $endYear; $year = $year + 1) {
      if (!empty($companyCustomSafetyHistoryData)) {
        $foundRecord = false;
        foreach ($companyCustomSafetyHistoryData['byYear'] as $i => $oneYear) {
          if ($oneYear['year'] == $year) {
            $foundRecord = true;
            $result['byYear'][] = $oneYear;
            break;
          }
        }
        if ($foundRecord) {
          continue;
        }
      }
      $incidents = $incidentsGroupedByYear[$year] ?? collect([]);
      $incidentsByYear = $incidentsGroupedByYear ?? collect([]);
      $result['byYear'][] = $this->processYearlyData(
        $year,
        $incidents,
        $incidentsByYear
      );
    }

    $this->calculateAllDiffPreviousYear($result['byYear']);
    usort($result['byYear'], function ($a, $b) {
      return $b['year'] <=> $a['year'];
    });
    return $result;
  }

  /**
   * Get Incident List byYear for getYearlyComparisonDataForCharts function
   * @return mixed
   * @throws Exception
   */
  private function processYearlyData(int $year, Collection $incidents, Collection $incidentsByYear): array {
    $totalYearIncidents = $incidents->count();

    return [
      'year' => $year,
      'count' => $totalYearIncidents,
      'byMonth' => $this->processMonthlyData($incidents, $year),
      'byQuarter' => $this->processQuarterlyData($incidents, $year),
      'byIncidentType' => $this->processIncidentTypeData($incidents)
    ];
  }

  /**
   * Get Incident List byMonth for processYearlyData function
   * @param $incidents
   * @param $year
   * @return mixed
   * @throws Exception
   */
  private function processMonthlyData(Collection $incidents, $year): array {
    $groupedIncidentsByMonth = $incidents->groupBy(function ($item) {
      return Carbon::parse($item->incident_date)->month;
    });

    $result = [];
    $currentYearMonth = Carbon::now('UTC')->format('Ym');

    for ($month = 1; $month <= 12; $month++) {

      // Not return future month data
      $monthWithZeroPrefix = sprintf("%02d", $month);
      $yearMonth = $year . $monthWithZeroPrefix;
      if ($yearMonth > $currentYearMonth) {
        continue;
      }

      $monthIncidents = $groupedIncidentsByMonth->get($month, collect());
      $totalMonthIncidents = $monthIncidents->count();

      $result[] = [
        'month' => $month,
        'count' => $totalMonthIncidents,
      ];
    }

    return $result;
  }

  /**
   * Get Incident List byQuarter for processYearlyData function
   * @param $incidents
   * @param $year
   * @return mixed
   * @throws Exception
   */
  private function processQuarterlyData(Collection $incidents, $year): array {
    $groupedIncidentsByMonth = $incidents->groupBy(function ($item) {
      return Carbon::parse($item->incident_date)->month;
    });

    $result = [];
    $currentTime = Carbon::now('UTC');
    $currentYearQuarter = $currentTime->format('Y') . $currentTime->quarter;

    for ($i = 1; $i <= 4; $i++) {

      // Not return future quarter data
      $yearQuarter = $year . $i;
      if ($yearQuarter > $currentYearQuarter) {
        continue;
      }

      $result[] = [
        'quarter' => $i,
        'count' => 0
      ];
    }

    foreach ($groupedIncidentsByMonth as $month => $monthIncidents) {
      $quarter = ceil($month / 3);
      if (isset($result[$quarter - 1])) {
        $result[$quarter - 1]['count'] += $monthIncidents->count();  // We subtract 1 because array is 0-based indexed
      }
    }

    return $result;
  }

  /**
   * Get Incident List byIncidentType for processYearlyData function
   * @return mixed
   * @throws Exception
   */
  private function processIncidentTypeData(Collection $incidents): array {
    $groupedIncidentsIncidentType = $incidents->groupBy(function ($item) {
      return $item->incident_type;
    });

    $result = [];

    foreach ($groupedIncidentsIncidentType as $incidentType => $incidentTypeIncidents) {
      if ($incidentType) {
        $incidentTypeString = config('constant.incident.incidentType')[$incidentType];
        $result[] = [
          'incidentType' => $incidentTypeString,
          'count' => $incidentTypeIncidents->count()
        ];
      }
    }

    return $result;
  }

  /**
   * Calculate percentage difference between two values
   * @return mixed
   * @throws Exception
   */
  private function calculatePercentageChange($currentCount, $previousCount): ?float {
    if ($currentCount === null || $previousCount === null || $previousCount === 0) {
      return null;
    }

    return round((($currentCount - $previousCount) / $previousCount) * 100, 1);
  }

  /**
   * Calculate count percentage difference of years and months compared to the previous year and add it to the array
   * Examples:
   * If in 2023 there are 100 incidents and in 2022 there are 50 incidents,
   * then the percentage difference for 2023 is 100%.
   * If in 2023 month 1 there are 10 incidents and in 2022 month 1 there are 5 incidents,
   * then the percentage difference for 2023 month 1 is 100%.
   * @return void
   * @throws Exception
   */
  private function calculateAllDiffPreviousYear(array &$yearsData): void {
    foreach ($yearsData as $yearKey => &$yearData) {
      $previousYearData = $yearsData[$yearKey - 1] ?? null;

      if ($previousYearData) {
        $yearData['percentDiffToPreviousYear'] = $this->calculatePercentageChange(
          $yearData['count'],
          $previousYearData['count']
        );
      } else {
        $yearData['percentDiffToPreviousYear'] = null;
      }

      foreach ($yearData['byMonth'] as $monthKey => &$monthData) {
        $previousYearMonthData = $yearsData[$yearKey - 1]['byMonth'][$monthKey] ?? null;

        if ($previousYearMonthData) {
          $monthData['percentDiffToPreviousYear'] = $this->calculatePercentageChange(
            $monthData['count'],
            $previousYearMonthData['count']
          );
        } else {
          $monthData['percentDiffToPreviousYear'] = null;
        }
      }
    }
  }

  /**
   * Get links for files
   * @return mixed
   * @throws Exception
   */
  public function getLinksForFiles() {
    $fileIds = collect(request('files'))->pluck('id')->toArray();
    $incidentFiles = IncidentFile::whereIn('id', $fileIds)->select('id', 'storage_filename')->get();
    $files = [];
    if ($incidentFiles->isNotEmpty()) {
      foreach ($incidentFiles as $incidentFile) {
        $file = [
          'id' => $incidentFile->id
        ];
        $filePath = config('constant.s3.safetyIncidentFiles');
        if (app()->environment('production')) {
          $file['link'] = getFileViaCloudFront($incidentFile->storage_filename, $filePath);
        } else {
          $file['link'] = getImage($incidentFile->storage_filename, $filePath);
        }
        $files[] = $file;
      }
    }
    return ['files' => $files];
  }
}
