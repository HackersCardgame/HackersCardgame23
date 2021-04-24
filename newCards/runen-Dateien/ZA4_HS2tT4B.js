if (self.CavalryLogger) { CavalryLogger.start_js(["4oBwB"]); }

__d("XCometProfileControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/profile.php",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometProfileVanityControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometProfileVanityTributesControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/tributes/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometVanityTabControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/{sk}/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometVanityTimelineControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/timeline/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometVanityWoodhengeSupportersURLControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/supporters/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("ProfileCometTimelineTabAuxBanner_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTimelineTabAuxBanner_user",selections:[{alias:"aux_banner",args:[{kind:"Literal",name:"render_location",value:"TIMELINE_TAB_AUX_COLUMN"},{kind:"Literal",name:"supported",value:["ProfilePlusNewPagesGuideBanner"]}],concreteType:null,kind:"LinkedField",name:"comet_profile_banner",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabAuxBanner_user",fragmentName:"ProfilePlusNewPagesGuideBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePlusNewPagesGuideBanner",abstractKey:null}],storageKey:'comet_profile_banner(render_location:"TIMELINE_TAB_AUX_COLUMN",supported:["ProfilePlusNewPagesGuideBanner"])'}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTimelineTabFeedBanner_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTimelineTabFeedBanner_user",selections:[{alias:"feed_banner",args:[{kind:"Literal",name:"render_location",value:"TIMELINE_TAB_FEED_COLUMN"},{kind:"Literal",name:"supported",value:["LockedProfileTryItBanner","ProfilePlusAdminComposer"]}],concreteType:null,kind:"LinkedField",name:"comet_profile_banner",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabFeedBanner_user",fragmentName:"ProfileCometLockedProfileTryItBanner_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"LockedProfileTryItBanner",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"ProfileCometTimelineTabFeedBanner_user",fragmentName:"ProfileCometProfilePlusAdminComposer_cometProfileBanner",fragmentPropName:"cometProfileBanner",kind:"ModuleImport"}],type:"ProfilePlusAdminComposer",abstractKey:null}],storageKey:'comet_profile_banner(render_location:"TIMELINE_TAB_FEED_COLUMN",supported:["LockedProfileTryItBanner","ProfilePlusAdminComposer"])'}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometManageSectionsDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3895165277192815",metadata:{},name:"ProfileCometManageSectionsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometInfo_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometInfo_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"alternate_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"username_for_profile",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_visibly_memorialized",storageKey:null},{alias:null,args:null,concreteType:"CometFundraiserWithPresenceBadgeRenderer",kind:"LinkedField",name:"active_fundraiser_badge_renderer",plural:!1,selections:[{documentName:"ProfileCometInfo_user",fragmentName:"ProfileCometFundraiserBadge_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],storageKey:null},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"CometLockedProfileBadgeWithPopover_user"}]},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometBioTextContainer_user"}]}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometInfo_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometInfo_viewer",selections:[{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"CometLockedProfileBadgeWithPopover_viewer"}]}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTabs_mentions_nux.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTabs_mentions_nux",selections:[{args:null,kind:"FragmentSpread",name:"useMaybeNUX_nux"}],type:"DefaultNUX",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTabs_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"tab_key",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTabs_user",selections:[{alias:null,args:null,concreteType:"WoodhengeCreatorInfo",kind:"LinkedField",name:"profile_plus_woodhenge_creator_info",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"viewer_subscription_tier",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"is_comet",value:!0}],kind:"ScalarField",name:"has_profile_comet_mentions_tab",storageKey:"has_profile_comet_mentions_tab(is_comet:true)"},{alias:null,args:null,kind:"ScalarField",name:"mentions_tab_tooltip_nux_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_memorialized",storageKey:null},{alias:null,args:null,concreteType:"MemorializedUserInfo",kind:"LinkedField",name:"memorialized_user_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_tributes_section",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TimelineNavAppSectionsConnection",kind:"LinkedField",name:"timeline_nav_app_sections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineNavAppSectionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"TimelineAppSection",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayable_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section_type",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{alias:null,args:null,concreteType:"AllTimelineAppCollectionsConnection",kind:"LinkedField",name:"all_collections",plural:!1,selections:[{alias:null,args:null,concreteType:"TimelineAppCollection",kind:"LinkedField",name:"nodes",plural:!0,selections:[a],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"WEMPrivateSharingBundle",kind:"LinkedField",name:"wem_private_sharing_bundle",plural:!1,selections:[{alias:null,args:null,concreteType:"WemPrivateSharingControlModel",kind:"LinkedField",name:"private_sharing_control_model_for_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"private_sharing_enabled",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null}],type:"User",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometTetraishEntityHeader_nux.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTetraishEntityHeader_nux",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTabs_mentions_nux"}],type:"DefaultNUX",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTetraishEntityHeader_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTetraishEntityHeader_user",selections:[{alias:null,args:null,concreteType:"WEMPrivateSharingBundle",kind:"LinkedField",name:"wem_private_sharing_bundle",plural:!1,selections:[{alias:null,args:null,concreteType:"WemPrivateSharingControlModel",kind:"LinkedField",name:"private_sharing_control_model_for_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"private_sharing_enabled",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null},{args:null,kind:"FragmentSpread",name:"TetraishEntityHeaderStickyBottomRow_entity"},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometHeaderActionBar_actor"}]},{args:null,kind:"FragmentSpread",name:"ProfileCometCoverPhoto_user"},{args:null,kind:"FragmentSpread",name:"ProfileCometCoverPhoto_renderedProfile"},{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePicture_user"},{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePicture_profile"},{kind:"Defer",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTabs_user"}]},{args:null,kind:"FragmentSpread",name:"ProfileCometInfo_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTetraishEntityHeader_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTetraishEntityHeader_viewer",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometProfilePicture_viewer"},{args:null,kind:"FragmentSpread",name:"ProfileCometInfo_viewer"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometInfoReviewUnit_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometInfoReviewUnit_user",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:["ProfileWizardNUX"]}],concreteType:null,kind:"LinkedField",name:"profile_info_review_unit",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"ProfileCometInfoReviewUnit_user",fragmentName:"ProfileCometWizardNUX_unit",fragmentPropName:"unit",kind:"ModuleImport"}],type:"ProfileWizardNUX",abstractKey:null}],storageKey:'profile_info_review_unit(supported:["ProfileWizardNUX"])'}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometBioTextContainer_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometBioTextContainer_user",selections:[{alias:null,args:null,concreteType:"ProfileIntroCard",kind:"LinkedField",name:"profile_intro_card",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"bio",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTextWithEntities_textWithEntities"}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_use_page_rename",storageKey:null}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometBioTextEditorPrivacyIconQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3915210791886895",metadata:{},name:"ProfileCometBioTextEditorPrivacyIconQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometLockedProfileBadgeWithPopover_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometLockedProfileBadgeWithPopover_user",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometLockedProfilePopover_user"}],type:"User",abstractKey:null};e.exports=a}),null);
__d("CometLockedProfileBadgeWithPopover_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometLockedProfileBadgeWithPopover_viewer",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometLockedProfilePopover_viewer"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTimelineTabAuxBanner.react",["CometRelay","React","ProfileCometTimelineTabAuxBanner_user.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometTimelineTabAuxBanner_user.graphql"),a.user);return h.jsx(b("CometRelay").MatchContainer,{match:a==null?void 0:a.aux_banner})}}),null);
__d("ProfileCometTimelineTabFeedBanner.react",["CometRelay","React","ProfileCometTimelineTabFeedBanner_user.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometTimelineTabFeedBanner_user.graphql"),a.user);return h.jsx(b("CometRelay").MatchContainer,{match:a==null?void 0:a.feed_banner})}}),null);
__d("ProfileCometManageSectionsDialog.entrypoint",["JSResourceForInteraction","ProfileCometManageSectionsDialogQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{queryReference:{parameters:b("ProfileCometManageSectionsDialogQuery$Parameters"),variables:{id:a}}}}},root:b("JSResourceForInteraction")("ProfileCometManageSectionsDialog.react").__setRef("ProfileCometManageSectionsDialog.entrypoint")};e.exports=a}),null);
__d("ProfileCometLoadingOverlay.react",["CometProgressIndicator.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.solidBackground;return g.jsx("div",{className:"taijpn5t j83agx80 hybvsw6c bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb"+(a==null||a===!1?" ocubwz8y":""),children:g.jsx(b("CometProgressIndicator.react"),{})})}}),null);
__d("ProfileCometInfo.react",["fbt","BaseHeading.react","CometErrorBoundary.react","CometPlaceholder.react","CometRelay","CometRow.react","CometRowItem.react","CometUserVerificationBadge.react","React","TetraText.react","TetraTextPairing.react","deferredLoadComponent","gkx","requireDeferredForDisplay","stylex","ProfileCometInfo_user.graphql","ProfileCometInfo_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j,k=b("React"),l=b("deferredLoadComponent")(b("requireDeferredForDisplay")("CometLockedProfileBadgeWithPopover.react")),m=b("deferredLoadComponent")(b("requireDeferredForDisplay")("ProfileCometBioTextContainer.react")),n={alternateName:{fontSize:"m6dqt4wy",fontWeight:"knj5qynh",marginStart:"h676nmdw"},name:{alignItems:"bp9cbjyn",display:"j83agx80"},nameAndBio:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t"},titlePadding:{paddingTop:"discj3wi"},username:{paddingBottom:"ihqw7lf3"}};function a(a){var c,d,e,f=a.align;f=f===void 0?"center":f;var o=a.showLockedProfileBadge,p=a.user;a=a.viewer;p=b("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometInfo_user.graphql"),p);a=b("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometInfo_viewer.graphql"),a);c=(c=p==null?void 0:p.name)!=null?c:"";var q=p==null?void 0:p.is_verified;d=(d=p.alternate_name)!=null?d:"";e=(e=p.username_for_profile)!=null?e:"";var r=p.is_visibly_memorialized===!0,s=b("gkx")("1652470");return k.jsxs(k.Fragment,{children:[r&&k.jsx(b("TetraText.react"),{align:f==="start"?"auto":"center",color:"secondary",type:"headline3",children:g._("Erinnert sich an")}),k.jsxs("div",{className:(j||(j=b("stylex")))(n.nameAndBio,r&&n.titlePadding),children:[k.jsx("div",{className:j(n.username),children:k.jsxs(b("CometRow.react"),{align:"center",paddingHorizontal:0,paddingTop:0,children:[k.jsx(b("CometRowItem.react"),{children:k.jsx(b("TetraTextPairing.react"),{headline:k.jsxs(b("BaseHeading.react"),{isPrimaryHeading:!0,xstyle:n.name,children:[c,q!==!0?null:k.jsxs(k.Fragment,{children:["\xa0",k.jsx(b("CometUserVerificationBadge.react"),{size:"large"})]}),k.jsx(b("CometErrorBoundary.react"),{children:k.jsx(b("CometRelay").MatchContainer,{match:p==null?void 0:p.active_fundraiser_badge_renderer})}),d!==""&&k.jsx("span",{className:(j||(j=b("stylex")))(n.alternateName),children:g._("({alternate name})",[g._param("alternate name",d)])})]}),headlineColor:"primary",level:"entityHeader1",textAlign:"center"})}),o?k.jsx(b("CometRowItem.react"),{children:k.jsx(b("CometPlaceholder.react"),{fallback:null,children:k.jsx(l,{user:p,viewer:a})})}):null]})}),s&&e!==""?k.jsx("div",{className:(j||(j=b("stylex")))(n.username),children:k.jsx(b("TetraText.react"),{align:f==="start"?"auto":"center",color:"secondary",type:"headline3",children:g._("\u0040{username}",[g._param("username",e)])})}):null,m!=null&&k.jsx(b("CometPlaceholder.react"),{fallback:null,children:k.jsx(b("TetraTextPairing.react"),{body:k.jsx(m,{user:p}),bodyColor:"secondary",level:"entityHeader1",textAlign:"center"})})]})]})}}),null);
__d("ProfileCometURIUtils",["ProfileCometContext","React","XCometProfileControllerRouteBuilder","XCometProfileVanityControllerRouteBuilder","XCometProfileVanityTributesControllerRouteBuilder","XCometVanityTabControllerRouteBuilder","XCometVanityTimelineControllerRouteBuilder","XCometVanityWoodhengeSupportersURLControllerRouteBuilder","unrecoverableViolation","useCurrentRouteEntityKey"],(function(a,b,c,d,e,f){"use strict";f.useIsProfileSectionActive=a;f.useURIForProfile=c;f.useURIForProfileSection=d;var g=b("React");function a(a){var c=g.useContext(b("ProfileCometContext"));c=c.profileID;var d=b("useCurrentRouteEntityKey")();c=d!=null&&d.entity_type==="profile"&&d.entity_id===c&&d.section===a;return c}function c(){var a=g.useContext(b("ProfileCometContext")),c=a.profileID;a=a.profileVanity;if(a!=null&&a!=="")return b("XCometProfileVanityControllerRouteBuilder").buildURL({vanity:a});if(c!=null)return b("XCometProfileControllerRouteBuilder").buildURL({id:c});throw new(b("unrecoverableViolation"))("Cannot generate URI for profile when id and vanity are both null","profile_comet")}function d(a){var c=g.useContext(b("ProfileCometContext")),d=c.profileID;c=c.profileVanity;if(c!=null&&c!==""){if(a==="timeline")return b("XCometVanityTimelineControllerRouteBuilder").buildURL({vanity:c});if(a==="tributes")return b("XCometProfileVanityTributesControllerRouteBuilder").buildURL({vanity:c});return a==="supporters"?b("XCometVanityWoodhengeSupportersURLControllerRouteBuilder").buildURL({vanity:c}):b("XCometVanityTabControllerRouteBuilder").buildURL({sk:a,vanity:c})}if(d!=null)return b("XCometProfileControllerRouteBuilder").buildURL({id:d,sk:a});throw new(b("unrecoverableViolation"))("Cannot generate URI for profile section when id and vanity are both null","profile_comet")}}),null);
__d("ProfileCometTabs.react",["fbt","CometEntityHeaderTabBar.react","CometRelay","ProfileCometContext","ProfileCometManageSectionsDialog.entrypoint","ProfileCometURIUtils","ProfileCometUtils","React","requireDeferred","stylex","useCometCallout","useCometEntityKey","useCometEntryPointDialog","useMaybeNUX","useProfileEngagementData","ProfileCometTabs_user.graphql","ProfileCometTabs_mentions_nux.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=b("React"),k=b("requireDeferred")("ProfileEngagementTypedLoggerLite"),l={mentionsNux:{maxWidth:"nqmqzb3c"}};function a(a){var c,d,e=b("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometTabs_user.graphql"),a.user);a=b("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometTabs_mentions_nux.graphql"),a.nux);var f=j.useContext(b("ProfileCometContext")),m=f.profileID;f=f.viewerID;var n=b("useCometEntryPointDialog")(b("ProfileCometManageSectionsDialog.entrypoint"),{profileID:m},"button"),o=n[0];n[1];var p=n[2],q=n[3];n=n[4];var r=b("useProfileEngagementData")({engagement_type:"click",product_bucket:"nav_bar",subsurface:"nav_bar",surface:"timeline"}),s=b("ProfileCometUtils").isViewingSelfProfile(m,f);a=b("useMaybeNUX")(a);var t=a[0];a=a[1];c={arrowStyle:"inset",hasCloseButton:!0,label:(c=e.mentions_tab_tooltip_nux_text)!=null?c:"",onHide:a,position:"above",type:"accent",xstyle:l.mentionsNux};var u=b("useCometCallout")(c,(a=t)!=null?a:!1);t=(c=e.is_viewer_friend)!=null?c:!1;c=(a=(a=e.wem_private_sharing_bundle)==null?void 0:(c=a.private_sharing_control_model_for_user)==null?void 0:c.private_sharing_enabled)!=null?a:!1;var v=!s&&c&&!t;c=(a=e.has_profile_comet_mentions_tab)!=null?a:!1;var w=(t=b("useCometEntityKey")())==null?void 0:t.section;a=b("ProfileCometURIUtils").useURIForProfile();t=(t=e==null?void 0:(t=e.memorialized_user_info)==null?void 0:t.has_tributes_section)!=null?t:!1;var x=(d=e==null?void 0:e.is_memorialized)!=null?d:!1,y=[];d=b("ProfileCometURIUtils").useURIForProfileSection("tributes");var z=b("ProfileCometURIUtils").useIsProfileSectionActive("tributes"),A=b("ProfileCometURIUtils").useURIForProfileSection("timeline"),B=b("ProfileCometURIUtils").useIsProfileSectionActive("timeline"),C=b("ProfileCometURIUtils").useIsProfileSectionActive("pretributestimeline"),D=b("ProfileCometURIUtils").useIsProfileSectionActive("grid"),E=b("ProfileCometURIUtils").useURIForProfileSection("supporters"),F=b("ProfileCometURIUtils").useIsProfileSectionActive("supporters");t&&y.push({isActive:function(){return z},label:g._("Gedenkbeitr\u00e4ge"),linkProps:{replace:!0,url:d},onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},r,{item_type:"tributes"}))})}});y.push({isActive:function(){return x?C:B||D},label:c?g._("Beitr\u00e4ge"):g._("Chronik"),linkProps:{replace:!0,url:t?A:a},onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},r,{item_type:"timeline"}))})}});(((d=e.profile_plus_woodhenge_creator_info)==null?void 0:d.viewer_subscription_tier)!=null||s&&e.profile_plus_woodhenge_creator_info!=null)&&y.push({isActive:function(){return F},label:g._("Supporter-Hub"),linkProps:{replace:!0,url:E},onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},r,{item_type:"timeline"}))})}});t=e==null?void 0:(c=e.timeline_nav_app_sections)==null?void 0:c.edges;t&&t.forEach(function(a){a=a.node;if(!a)return;var b=a.displayable_count,c=a.name,d=a.section_type,e=a.tab_key,f=a.tracking,g=a.url;if(g==null||c==null)return;var h=(a=a.all_collections)==null?void 0:a.nodes;y.push({badge:(a=b)!=null?a:void 0,isActive:function(){var a=w===e;if(a)return!0;if(w==="album"&&d==="PHOTOS")return!0;return h==null?!1:h.some(function(a){a=a.tab_key;return a===w})},label:c,linkProps:{replace:!0,url:d==="PHOTOS"&&v?null:g},onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},r,{item_type:f}))})},tabRef:d==="MENTIONS"?u:void 0})});m===f&&y.push({isActive:function(){return!1},label:g._("Abschnitte verwalten"),onHoverIn:p,onHoverOut:q,onPress:function(){k.onReady(function(a){a=a.log;a(babelHelpers["extends"]({},r,{item_type:"manage_sections"}))}),o({profileID:m})},onPressIn:n});return j.jsx(b("CometEntityHeaderTabBar.react"),{maxTabs:6,tabs:y})}}),null);
__d("ProfileCometTetraishEntityHeader.react",["CometPlaceholder.react","CometRelay","JSResource","ProfileCometContext","ProfileCometCoverPhoto.react","ProfileCometInfo.react","ProfileCometProfilePicture.react","ProfileCometTabsGlimmer.react","ProfileCometUtils","React","TetraishEntityHeaderCoverPhotoRow.react","TetraishEntityHeaderStickyBottomRow.react","TetraishEntityPageHeader.react","TetraishProfileHeaderTopRow.react","deferredLoadComponent","gkx","lazyLoadComponent","requireDeferredForDisplay","stylex","ProfileCometTetraishEntityHeader_user.graphql","ProfileCometTetraishEntityHeader_viewer.graphql","ProfileCometTetraishEntityHeader_nux.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i,j=b("React"),k=b("lazyLoadComponent")(b("JSResource")("CometLockedProfileOldBadge.react").__setRef("ProfileCometTetraishEntityHeader.react")),l=b("deferredLoadComponent")(b("requireDeferredForDisplay")("ProfileCometHeaderActionBar.react")),m=b("deferredLoadComponent")(b("requireDeferredForDisplay")("ProfileCometTabs.react"));function a(a){var c,d,e=a.nux,f=a.user;a=a.viewer;f=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometTetraishEntityHeader_user.graphql"),f);a=b("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometTetraishEntityHeader_viewer.graphql"),a);e=b("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometTetraishEntityHeader_nux.graphql"),e);var n=j.useContext(b("ProfileCometContext")),o=n.profileID;n=n.viewerID;n=b("ProfileCometUtils").isViewingSelfProfile(o,n);c=(c=f.is_viewer_friend)!=null?c:!1;d=(d=(d=f.wem_private_sharing_bundle)==null?void 0:(d=d.private_sharing_control_model_for_user)==null?void 0:d.private_sharing_enabled)!=null?d:!1;c=j.jsx(b("TetraishProfileHeaderTopRow.react"),{actor:j.jsx(b("ProfileCometProfilePicture.react"),{isLockedProfile:d,profile:f,user:f,viewer:a}),align:"center",lockedProfileBadge:d&&(n||!c)&&!b("gkx")("1486336")?j.jsx(k,{isViewingSelf:n,userID:o}):null,titleBlock:j.jsx(b("ProfileCometInfo.react"),{align:"center",showLockedProfileBadge:!1,user:f,viewer:a})});n=j.jsx(b("TetraishEntityHeaderStickyBottomRow.react"),{entity:f,primaryContent:j.jsx(b("CometPlaceholder.react"),{fallback:j.jsx(b("ProfileCometTabsGlimmer.react"),{}),children:j.jsx(m,{nux:e,user:f})}),secondaryContent:j.jsx(b("CometPlaceholder.react"),{fallback:null,children:j.jsx("div",{className:"q3mryazl",children:j.jsx(l,{actor:f,centerButtons:!1})})})});return j.jsx(b("TetraishEntityPageHeader.react"),{bottomRow:n,coverPhotoRow:j.jsx(b("TetraishEntityHeaderCoverPhotoRow.react"),{coverPhoto:j.jsx(b("ProfileCometCoverPhoto.react"),{isLockedProfile:d,renderedProfile:f,user:f})}),topRow:c})}}),null);
__d("ProfileCometInfoReviewUnitGlimmer.react",["BaseGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){return g.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:[g.jsx(a=b("BaseGlimmer.react"),{className:"k5ud4834 sjgh65i0 rgmg9uty lsl2245n hqlzco19 o3c63hce lit7pgxp",index:0}),g.jsx(a,{className:"sjgh65i0 qzj7cv8z j83agx80 lsl2245n hqlzco19 o3c63hce lit7pgxp",index:1}),g.jsxs("div",{className:"i1fnvgqd j83agx80",children:[g.jsx(a,{className:"lelwyktv tv7at329 lsl2245n hqlzco19 o3c63hce lit7pgxp",index:2}),g.jsxs("div",{className:"n99xedck bkfpd7mw j83agx80",children:[g.jsx(a,{className:"ljni7pan tv7at329 lsl2245n hqlzco19 o3c63hce lit7pgxp tvfksri0",index:3}),g.jsx(a,{className:"ljni7pan tv7at329 lsl2245n hqlzco19 o3c63hce lit7pgxp",index:4})]})]})]})}c=g.forwardRef(a);e.exports=c}),null);
__d("ProfileCometInfoReviewUnit.react",["CometCard.react","CometPlaceholder.react","CometRelay","ProfileCometInfoReviewUnitGlimmer.react","React","stylex","ProfileCometInfoReviewUnit_user.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){a=a.user;a=b("CometRelay").useFragment(g!==void 0?g:g=b("ProfileCometInfoReviewUnit_user.graphql"),a);var c=h.useState(!0),d=c[0];c=c[1];a=a==null?void 0:a.profile_info_review_unit;return a==null||!d?null:h.jsx("div",{className:"sjgh65i0",children:h.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:h.jsx(b("CometPlaceholder.react"),{fallback:h.jsx(b("ProfileCometInfoReviewUnitGlimmer.react"),{}),children:h.jsx(b("CometRelay").MatchContainer,{match:a,props:{setIsVisible:c}})})})})}}),null);
__d("ProfileCometBioTextEditor.entrypoint",["JSResourceForInteraction","ProfileCometBioTextEditorPrivacyIconQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{queryReference:{options:{fetchPolicy:"network-only"},parameters:b("ProfileCometBioTextEditorPrivacyIconQuery$Parameters"),variables:{id:a}}}}},root:b("JSResourceForInteraction")("ProfileCometBioTextEditor.react").__setRef("ProfileCometBioTextEditor.entrypoint")};e.exports=a}),null);
__d("ProfileCometBioTextContainer.react",["fbt","CometLineBreakTransform","CometPlaceholder.react","CometRelay","ProfileCometBioTextEditor.entrypoint","ProfileCometContext","ProfileCometLoadingOverlay.react","ProfileCometTextWithEntities.react","ProfileCometUtils","React","TetraishLink.react","stylex","useCometRelayEntrypointContextualEnvironmentProvider","ProfileCometBioTextContainer_user.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React");function a(a){a=a.user;a=b("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometBioTextContainer_user.graphql"),a);var c=a.profile_intro_card,d=c==null?void 0:c.bio,e=i.useContext(b("ProfileCometContext")),f=e.profileID;e=e.viewerID;a=a.should_use_page_rename===!0;e=b("ProfileCometUtils").isViewingSelfProfile(f,e);var j=b("useCometRelayEntrypointContextualEnvironmentProvider")();j=b("CometRelay").useEntryPointLoader(j,b("ProfileCometBioTextEditor.entrypoint"));var k=j[0],l=j[1];j=j[2];var m=null;d==null?e&&c!=null&&(m=i.jsx(b("TetraishLink.react"),{color:"highlight",onClick:function(){return l({profileID:f})},testid:void 0,type:"bodyLink3",children:g._("Steckbrief hinzuf\u00fcgen")})):m=i.jsxs("span",{"data-testid":void 0,children:[i.jsx(b("ProfileCometTextWithEntities.react"),{textWithEntities:d,transforms:[b("CometLineBreakTransform")]}),e&&i.jsx("div",{children:i.jsx(b("TetraishLink.react"),{color:"highlight",onClick:function(){return l({profileID:f})},testid:void 0,type:"bodyLink3",children:g._("Bearbeiten")})})]});return k!=null?i.jsx(b("CometPlaceholder.react"),{fallback:i.jsxs("div",{className:"l9j0dhe7",children:[m,i.jsx(b("ProfileCometLoadingOverlay.react"),{solidBackground:!0})]}),children:i.jsx("div",{className:"cs7azdtd",children:i.jsx(b("CometRelay").EntryPointContainer,{entryPointReference:k,props:{onCancel:j,onPublishComplete:j,shouldUsePageRename:a}})})}):m}}),null);
__d("ProfileCometPostFiltersDialogReducer",["ProgressiveDateUtil"],(function(a,b,c,d,e,f){"use strict";a=function(){return{date:b("ProgressiveDateUtil").parseDate(null),postedBy:"ANYONE",privacy:"ALL",taggedPosts:"ALL"}};f.getInitialState=a;c=function(a,b){switch(b.type){case"SET_FILTERS":return babelHelpers["extends"]({},a,{date:b.date,postedBy:b.postedBy,privacy:b.privacy,taggedPosts:b.taggedPosts});default:return babelHelpers["extends"]({},a)}};f.reducer=c}),null);
__d("ProfileCometPostFiltersDialogContext",["ProfileCometPostFiltersDialogReducer","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({dispatchAction:function(a){b("recoverableViolation")("ProfileCometPostFiltersDialogContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometPostFiltersDialogContext.Provider value={context} />","profile_comet")},state:b("ProfileCometPostFiltersDialogReducer").getInitialState()});e.exports=c}),null);
__d("ProfileCometTimelineViewSwitcherTab.react",["CometTab.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={tab:{height:"qypqp5cg",justifyContent:"taijpn5t",width:"k4urcfbm"},tabOverlayPressed:{backgroundColor:"ckkva4tx"}};function a(a){var c=a.icon,d=a.label,e=a.linkProps,f=a.selected;f=f===void 0?!1:f;a=a.testid;return g.jsx(b("CometTab.react"),{icon:c,iconLocation:"left",label:d,linkProps:e,overlayDisabled:f,overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayPressedStyle:h.tabOverlayPressed,overlayRadius:6,selected:f,testid:void 0,underlineColor:"var(--accent)",xstyle:h.tab})}}),null);
__d("ProfileCometTimelineControls.react",["ix","fbt","BaseRow.react","BaseRowItem.react","CometCard.react","CometCardedDialogLoadingState.react","CometLazyDialogTrigger.react","CometRow.react","CometRowItem.react","CometTransientDialogProvider.react","JSResource","ProfileCometPostFiltersDialogContext","ProfileCometPostFiltersDialogReducer","ProfileCometTimelineViewSwitcherTab.react","ProfileCometURIUtils","React","TetraButton.react","TetraTextPairing.react","fbicon","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k=b("JSResource")("ProfileCometPostFiltersDialog.react").__setRef("ProfileCometTimelineControls.react"),l=b("JSResource")("ProfileCometManagePostsDialog.react").__setRef("ProfileCometTimelineControls.react"),m={buttons:{display:"j83agx80",paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05"},divider:{borderTop:"l6v480f0"},filtersButton:{marginEnd:"oi9244e8"},root:{marginBottom:"sjgh65i0"},viewSwitcherTabContainer:{marginEnd:"tvfksri0",marginStart:"ozuftl9m"}};function a(a){var c=a.shouldHidePostedByFilters;c=c===void 0?!1:c;var d=a.userID;a=a.viewType;var e=j.useCallback(function(a){return j.jsx(b("CometCardedDialogLoadingState.react"),{onClose:a,title:h._("Beitragsfilter"),withCloseButton:!0})},[]),f=j.useCallback(function(a){return j.jsx(b("CometCardedDialogLoadingState.react"),{onClose:a,title:h._("Beitr\u00e4ge verwalten"),withCloseButton:!0})},[]),n=j.useReducer(b("ProfileCometPostFiltersDialogReducer").reducer,b("ProfileCometPostFiltersDialogReducer").getInitialState()),o=n[0],p=n[1];n=b("ProfileCometURIUtils").useURIForProfile();var q=b("ProfileCometURIUtils").useURIForProfileSection("grid"),r=j.useMemo(function(){return{dispatchAction:p,state:o}},[o]);return j.jsx("div",{className:(i||(i=b("stylex")))(m.root),children:j.jsxs(b("CometCard.react"),{background:"white",dropShadow:1,children:[j.jsxs(b("CometRow.react"),{paddingTop:0,children:[j.jsx(b("CometRowItem.react"),{verticalAlign:"center",children:j.jsx(b("TetraTextPairing.react"),{headline:h._("Beitr\u00e4ge"),isSemanticHeading:!0,level:2})}),j.jsx(b("CometRowItem.react"),{verticalAlign:"center",children:j.jsx("div",{className:i(m.buttons),children:j.jsx(b("ProfileCometPostFiltersDialogContext").Provider,{value:r,children:j.jsxs(b("CometTransientDialogProvider.react"),{children:[j.jsx("div",{className:i(m.filtersButton),children:j.jsx(b("CometLazyDialogTrigger.react"),{dialogProps:{shouldHidePostedByFilters:c},dialogResource:k,fallback:e,children:function(a,c,d){return j.jsx(b("TetraButton.react"),{icon:b("fbicon")._(g("500218"),16),label:h._("Filter"),onHoverIn:d,onPress:a,ref:c,type:"secondary"})}})}),j.jsx(b("CometLazyDialogTrigger.react"),{dialogProps:{shouldHidePostedByFilters:c,userID:d},dialogResource:l,fallback:f,children:function(a,c,d){return j.jsx(b("TetraButton.react"),{icon:b("fbicon")._(g("497566"),16),label:h._("Beitr\u00e4ge verwalten"),onHoverIn:d,onPress:a,ref:c,testid:void 0,type:"secondary"})}})]})})})})]}),j.jsx("div",{className:i(m.divider)}),j.jsxs(b("BaseRow.react"),{role:"tablist",xstyle:m.viewSwitcherTabContainer,children:[j.jsx(b("BaseRowItem.react"),{expanding:!0,children:j.jsx(b("ProfileCometTimelineViewSwitcherTab.react"),{icon:b("fbicon")._(g("533527"),16),label:h._("Listenansicht"),linkProps:{routeTarget:"self",url:n},selected:a==="list",testid:void 0})}),j.jsx(b("BaseRowItem.react"),{expanding:!0,children:j.jsx(b("ProfileCometTimelineViewSwitcherTab.react"),{icon:b("fbicon")._(g("531309"),16),label:h._("Rasteransicht"),linkProps:{routeTarget:"self",url:q},selected:a==="grid",testid:void 0})})]})]})})}}),null);
__d("ProfileCometTimelineEmptyState.react",["fbt","React","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(){return h.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:h.jsx(b("TetraText.react"),{align:"center",color:"secondary",type:"headlineEmphasized2",children:g._("Keine Beitr\u00e4ge verf\u00fcgbar")})})}}),null);
__d("useProfileCometTimelineFeedQueryRefetcherForFilters",["ProfileCometTimelineFilterContext","ProgressiveDateUtil","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.fetchCount,d=a.refetch;a=a.variables;var e=a.userID;a=babelHelpers.objectWithoutPropertiesLoose(a,["userID"]);var f=g.useRef(a);a=g.useState(!1);var h=a[0],i=a[1],j=g.useRef(!0),k=g.useRef(d),l=g.useRef(c),m=g.useRef(e);k.current=d;l.current=c;m.current=e;a=g.useContext(b("ProfileCometTimelineFilterContext"));var n=a.state,o=b("ProgressiveDateUtil").toLatestTimestamp(n.date),p=g.useRef({dispose:function(){}});g.useEffect(function(){if(j.current){j.current=!1;return}var a;switch(n.postedBy){case"ANYONE":a=null;break;case"OTHERS":a={group:"NON_OWNER"};break;case"YOU":a={group:"OWNER"};break}var b;switch(n.privacy){case"PUBLIC":b={exclusivity:"EXCLUSIVE",filter:"PUBLIC"};break;case"FRIENDS":b={exclusivity:"EXCLUSIVE",filter:"FRIENDS"};break;case"ONLY_ME":b={exclusivity:"EXCLUSIVE",filter:"SELF"};break;case"ALL":b={exclusivity:"INCLUSIVE",filter:"ALL"};break}var c=n.taggedPosts==="TAGGED";i(!0);p.current.dispose();p.current=k.current(babelHelpers["extends"]({},f.current,{beforeTime:o,count:l.current,id:m.current,postedBy:a,privacy:b,taggedInOnly:c}),{fetchPolicy:"store-and-network",onComplete:function(){i(!1)}})},[o,n.postedBy,n.privacy,n.taggedPosts]);return h}}),null);
__d("CometLockedProfileBadgeWithPopover.react",["BaseContextualLayerOrientationContext","CometImage.react","CometLazyPopoverTrigger.react","CometPressable.react","CometRelay","JSResource","React","stylex","CometLockedProfileBadgeWithPopover_user.graphql","CometLockedProfileBadgeWithPopover_viewer.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=b("JSResource")("ProfileCometLockedProfilePopover.react").__setRef("CometLockedProfileBadgeWithPopover.react"),k={badge:{height:"rgmg9uty",marginTop:"muag1w35",marginEnd:"dlv3wnog",marginBottom:"enqfppq2",marginStart:"rl04r1d5",paddingTop:"ecm0bbzt",paddingEnd:"ph5uu5jm",paddingBottom:"e5nlhep0",paddingStart:"b3onmgus",width:"b73ngqbp"}};function a(a){var c=a.user;a=a.viewer;c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometLockedProfileBadgeWithPopover_user.graphql"),c);a=b("CometRelay").useFragment(h!==void 0?h:h=b("CometLockedProfileBadgeWithPopover_viewer.graphql"),a);var d=i.useMemo(function(){return{align:"middle",position:"below"}},[]);return i.jsx(b("BaseContextualLayerOrientationContext").Provider,{value:d,children:i.jsx(b("CometLazyPopoverTrigger.react"),{align:"middle",popoverProps:{user:c,viewer:a},popoverResource:j,position:"below",preloadTrigger:"button",children:function(a,c,d,e,f,g){return i.jsx(b("CometPressable.react"),{"aria-label":"badge",display:"block",onHoverIn:e,onHoverOut:f,onPress:c,onPressIn:g,overlayRadius:"50%",ref:a,children:i.jsx(b("CometImage.react"),{src:"/images/wem/private_sharing/lp-badge-large.png",xstyle:k.badge})})}})})}}),null);