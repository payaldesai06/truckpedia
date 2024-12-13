<?php

namespace App\Services\Chat;

use App\Models\Load;
use App\Models\Chat\Chat;
use App\Models\Chat\ChatLoad;
use App\Models\Chat\ChatUser;
use Exception;
use Illuminate\Support\Facades\Log;

class ChatService {

  /**
   * Create Chat & Loads & Add Users To Chat
   * @param $load
   * @return void
   */
  static function createChatLoad($load) {
    try {
      // Not reviewed, turn this on later.
      /*
      $time = now();
      $loadIds = $load->synced_load_id ? [$load->id, $load->synced_load_id] : [$load->id];
      sort($loadIds);
      $loadIdsMerge = implode(',', $loadIds);

      $chatType = array_search('load', config('constant.chat.type'));
      $chat = Chat::where('type', $chatType)->where('load_ids', $loadIdsMerge)
        ->orWhere('load_ids', $load->id)->first();

      if (empty($chat)) {
        $chat = Chat::create([
          'type' => $chatType,
          'load_ids' => $loadIdsMerge,
          'created_at' => $time
        ]);
      }

      if ($chat->load_ids != $loadIdsMerge) {
        $chat->update(['load_ids' => $loadIdsMerge]);
      }

      $chatId = $chat->id;

      $existingChatLoadIds = $chat->chatLoads->pluck('load_id')->toArray();
      $chatLoads = [];
      foreach ($loadIds as $loadId) {
        if (!in_array($loadId, $existingChatLoadIds)) {
          $chatLoads[] = [
            'chat_id' => $chatId,
            'load_id' => $loadId,
            'created_at' => $time
          ];
        }
      }
      if (!empty($chatLoads)) {
        ChatLoad::insert($chatLoads);
      }

      $userIds = array_unique(array_filter(
        [
          $load->user_id,
          $load->dispatcher_id,
          $load->syncedLoad->user_id ?? null,
          $load->syncedLoad->dispatcher_id ?? null
        ]
      ));
      $existingChatUserIds = $chat->chatUsers->pluck('user_id')->toArray();
      $chatUsers = [];
      foreach ($userIds as $userId) {
        if (!in_array($userId, $existingChatUserIds)) {
          $chatUsers[] = [
            'chat_id' => $chatId,
            'user_id' => $userId,
            'created_at' => $time
          ];
        }
      }
      if (!empty($chatUsers)) {
        ChatUser::insert($chatUsers);
      }
      */
    } catch (Exception $e) {
      Log::error($e);
    }
  }
}
