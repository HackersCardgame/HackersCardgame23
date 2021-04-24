if (self.CavalryLogger) { CavalryLogger.start_js(["nikFr"]); }

__d("CometVideoHomeRootProviderQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2939812456104778",metadata:{},name:"CometVideoHomeRootProviderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3707683145972691",metadata:{},name:"CometVideoHomeStickyHeaderWatchlistMenuRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeLeftRailWatchlistQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3173205286103754",metadata:{},name:"CometVideoHomeLeftRailWatchlistQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeCommonEntryPointVariables",["WebPixelRatio","gkx","qex"],(function(a,b,c,d,e,f){"use strict";c={UFI2CommentsProvider_commentsKey:null,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"VIDEO_HOME_FEED",feedbackSource:60,focusCommentID:null,isComet:(a=b("gkx"))("708253"),isCommunityViewEntryPointEnabled:!!b("qex")._("1571809"),privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_home",scale:b("WebPixelRatio").get(),shareSheetRedesign:a("1365892"),useBlackBackground:a("1327965"),useCommentsEntryPoint:a("1679116"),useDashPrefetch:!1,useDefaultActor:!1};e.exports=c}),null);
__d("CometVideoHomeFeedEntryPointVariables",["CometVideoHomeCommonEntryPointVariables","qex"],(function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("CometVideoHomeCommonEntryPointVariables"),{UFI2CommentsProvider_commentsKey:"CometVideoHomeFeedRootQuery",canShowSeenState:!1,feedHeroEnabled:!!b("qex")._("1418988"),feedViewOnly:b("qex")._("1345259")==="feed_only",gridViewOnly:b("qex")._("1345259")==="grid_only",triggerData:{injected_video_id:null}});e.exports=a}),null);
__d("buildCometVideoHomeRoute.entrypoint",["JSResource","WebPixelRatio","createContentAreaCompoundEntryPointBuilder","gkx","requireCond","cr:1714517","CometVideoHomeRootProviderQuery$Parameters","CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters","CometVideoHomeLeftRailWatchlistQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";b("cr:1714517");a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResource")("CometVideoHomeRoot.react").__setRef("buildCometVideoHomeRoute.entrypoint"),function(a){return{rootProviderQueryReference:{parameters:b("CometVideoHomeRootProviderQuery$Parameters"),variables:{}},stickyHeaderWatchlistQueryReference:{parameters:b("CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters"),variables:{scale:b("WebPixelRatio").get()}},watchlistSettingsQueryReference:{parameters:b("CometVideoHomeLeftRailWatchlistQuery$Parameters"),variables:{enableLiveBadgeAndBoost:!!b("gkx")("1637651"),scale:b("WebPixelRatio").get()}}}});e.exports=a}),null);