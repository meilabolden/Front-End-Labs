;/*FB_PKG_DELIM*/

__d("LSDeleteThenInsertNotificationsSettingsGraphQLSnapshot",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(175).put({id:a[0],globalMuteUntil:a[1],showMessagePreview:a[4],isSoundOn:a[7],groupNotificationSetting:a[8],oneToOneNotificationSetting:a[9],replyReminderSetting:a[10],messageReminderDisabled:a[12],messageSound:a[13],ringtoneSound:a[14],newFriendBumpDisabledSetting:a[15],globalMuteMessageUntil:a[2],globalMuteCallUntil:a[3],includeInSwitchAccountBadges:a[11],dismissNfbThreadsCount:a[16],mutePageAccountMessageReminder:a[17]})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSTruncateFeatureLimits",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(a){return b.fe(b.db.table(150).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSTruncateNotificationSettings",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(a){return b.fe(b.db.table(175).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);