if (self.CavalryLogger) { CavalryLogger.start_js(["n3CYQ"]); }

__d("MessengerSupportedEmoji",["EmojiRenderer","EmoticonEmojiList","Utf16"],(function(a,b,c,d,e,f){var g={"1f004":1,"1f0cf":1,"1f170":1,"1f171":1,"1f17e":1,"1f17f":1,"1f18e":1,"1f191":1,"1f192":1,"1f193":1,"1f194":1,"1f195":1,"1f196":1,"1f197":1,"1f198":1,"1f199":1,"1f19a":1,"1f1e6_1f1e8":1,"1f1e6_1f1e9":1,"1f1e6_1f1ea":1,"1f1e6_1f1eb":1,"1f1e6_1f1ec":1,"1f1e6_1f1ee":1,"1f1e6_1f1f1":1,"1f1e6_1f1f2":1,"1f1e6_1f1f4":1,"1f1e6_1f1f6":1,"1f1e6_1f1f7":1,"1f1e6_1f1f8":1,"1f1e6_1f1f9":1,"1f1e6_1f1fa":1,"1f1e6_1f1fc":1,"1f1e6_1f1fd":1,"1f1e6_1f1ff":1,"1f1e7_1f1e6":1,"1f1e7_1f1e7":1,"1f1e7_1f1e9":1,"1f1e7_1f1ea":1,"1f1e7_1f1eb":1,"1f1e7_1f1ec":1,"1f1e7_1f1ed":1,"1f1e7_1f1ee":1,"1f1e7_1f1ef":1,"1f1e7_1f1f1":1,"1f1e7_1f1f2":1,"1f1e7_1f1f4":1,"1f1e7_1f1f6":1,"1f1e7_1f1f7":1,"1f1e7_1f1f8":1,"1f1e7_1f1f9":1,"1f1e7_1f1fb":1,"1f1e7_1f1fc":1,"1f1e7_1f1fe":1,"1f1e7_1f1ff":1,"1f1e8_1f1e6":1,"1f1e8_1f1e8":1,"1f1e8_1f1e9":1,"1f1e8_1f1eb":1,"1f1e8_1f1ec":1,"1f1e8_1f1ed":1,"1f1e8_1f1ee":1,"1f1e8_1f1f0":1,"1f1e8_1f1f1":1,"1f1e8_1f1f2":1,"1f1e8_1f1f3":1,"1f1e8_1f1f4":1,"1f1e8_1f1f7":1,"1f1e8_1f1fa":1,"1f1e8_1f1fb":1,"1f1e8_1f1fc":1,"1f1e8_1f1fd":1,"1f1e8_1f1fe":1,"1f1e8_1f1ff":1,"1f1e9_1f1ea":1,"1f1e9_1f1ec":1,"1f1e9_1f1ef":1,"1f1e9_1f1f0":1,"1f1e9_1f1f2":1,"1f1e9_1f1f4":1,"1f1e9_1f1ff":1,"1f1ea_1f1e6":1,"1f1ea_1f1e8":1,"1f1ea_1f1ea":1,"1f1ea_1f1ec":1,"1f1ea_1f1ed":1,"1f1ea_1f1f7":1,"1f1ea_1f1f8":1,"1f1ea_1f1f9":1,"1f1ea_1f1fa":1,"1f1eb_1f1ee":1,"1f1eb_1f1ef":1,"1f1eb_1f1f0":1,"1f1eb_1f1f2":1,"1f1eb_1f1f4":1,"1f1eb_1f1f7":1,"1f1ec_1f1e6":1,"1f1ec_1f1e7":1,"1f1ec_1f1e9":1,"1f1ec_1f1ea":1,"1f1ec_1f1eb":1,"1f1ec_1f1ec":1,"1f1ec_1f1ed":1,"1f1ec_1f1ee":1,"1f1ec_1f1f1":1,"1f1ec_1f1f2":1,"1f1ec_1f1f3":1,"1f1ec_1f1f5":1,"1f1ec_1f1f6":1,"1f1ec_1f1f7":1,"1f1ec_1f1f8":1,"1f1ec_1f1f9":1,"1f1ec_1f1fa":1,"1f1ec_1f1fc":1,"1f1ec_1f1fe":1,"1f1ed_1f1f0":1,"1f1ed_1f1f2":1,"1f1ed_1f1f3":1,"1f1ed_1f1f7":1,"1f1ed_1f1f9":1,"1f1ed_1f1fa":1,"1f1ee_1f1e8":1,"1f1ee_1f1e9":1,"1f1ee_1f1ea":1,"1f1ee_1f1f1":1,"1f1ee_1f1f2":1,"1f1ee_1f1f3":1,"1f1ee_1f1f4":1,"1f1ee_1f1f6":1,"1f1ee_1f1f7":1,"1f1ee_1f1f8":1,"1f1ee_1f1f9":1,"1f1ef_1f1ea":1,"1f1ef_1f1f2":1,"1f1ef_1f1f4":1,"1f1ef_1f1f5":1,"1f1f0_1f1ea":1,"1f1f0_1f1ec":1,"1f1f0_1f1ed":1,"1f1f0_1f1ee":1,"1f1f0_1f1f2":1,"1f1f0_1f1f3":1,"1f1f0_1f1f5":1,"1f1f0_1f1f7":1,"1f1f0_1f1fc":1,"1f1f0_1f1fe":1,"1f1f0_1f1ff":1,"1f1f1_1f1e6":1,"1f1f1_1f1e7":1,"1f1f1_1f1e8":1,"1f1f1_1f1ee":1,"1f1f1_1f1f0":1,"1f1f1_1f1f7":1,"1f1f1_1f1f8":1,"1f1f1_1f1f9":1,"1f1f1_1f1fa":1,"1f1f1_1f1fb":1,"1f1f1_1f1fe":1,"1f1f2_1f1e6":1,"1f1f2_1f1e8":1,"1f1f2_1f1e9":1,"1f1f2_1f1ea":1,"1f1f2_1f1eb":1,"1f1f2_1f1ec":1,"1f1f2_1f1ed":1,"1f1f2_1f1f0":1,"1f1f2_1f1f1":1,"1f1f2_1f1f2":1,"1f1f2_1f1f3":1,"1f1f2_1f1f4":1,"1f1f2_1f1f5":1,"1f1f2_1f1f6":1,"1f1f2_1f1f7":1,"1f1f2_1f1f8":1,"1f1f2_1f1f9":1,"1f1f2_1f1fa":1,"1f1f2_1f1fb":1,"1f1f2_1f1fc":1,"1f1f2_1f1fd":1,"1f1f2_1f1fe":1,"1f1f2_1f1ff":1,"1f1f3_1f1e6":1,"1f1f3_1f1e8":1,"1f1f3_1f1ea":1,"1f1f3_1f1eb":1,"1f1f3_1f1ec":1,"1f1f3_1f1ee":1,"1f1f3_1f1f1":1,"1f1f3_1f1f4":1,"1f1f3_1f1f5":1,"1f1f3_1f1f7":1,"1f1f3_1f1fa":1,"1f1f3_1f1ff":1,"1f1f4_1f1f2":1,"1f1f5_1f1e6":1,"1f1f5_1f1ea":1,"1f1f5_1f1eb":1,"1f1f5_1f1ec":1,"1f1f5_1f1ed":1,"1f1f5_1f1f0":1,"1f1f5_1f1f1":1,"1f1f5_1f1f2":1,"1f1f5_1f1f3":1,"1f1f5_1f1f7":1,"1f1f5_1f1f8":1,"1f1f5_1f1f9":1,"1f1f5_1f1fc":1,"1f1f5_1f1fe":1,"1f1f6_1f1e6":1,"1f1f7_1f1ea":1,"1f1f7_1f1f4":1,"1f1f7_1f1f8":1,"1f1f7_1f1fa":1,"1f1f7_1f1fc":1,"1f1f8_1f1e6":1,"1f1f8_1f1e7":1,"1f1f8_1f1e8":1,"1f1f8_1f1e9":1,"1f1f8_1f1ea":1,"1f1f8_1f1ec":1,"1f1f8_1f1ed":1,"1f1f8_1f1ee":1,"1f1f8_1f1ef":1,"1f1f8_1f1f0":1,"1f1f8_1f1f1":1,"1f1f8_1f1f2":1,"1f1f8_1f1f3":1,"1f1f8_1f1f4":1,"1f1f8_1f1f7":1,"1f1f8_1f1f8":1,"1f1f8_1f1f9":1,"1f1f8_1f1fb":1,"1f1f8_1f1fd":1,"1f1f8_1f1fe":1,"1f1f8_1f1ff":1,"1f1f9_1f1e6":1,"1f1f9_1f1e8":1,"1f1f9_1f1e9":1,"1f1f9_1f1eb":1,"1f1f9_1f1ec":1,"1f1f9_1f1ed":1,"1f1f9_1f1ef":1,"1f1f9_1f1f0":1,"1f1f9_1f1f1":1,"1f1f9_1f1f2":1,"1f1f9_1f1f3":1,"1f1f9_1f1f4":1,"1f1f9_1f1f7":1,"1f1f9_1f1f9":1,"1f1f9_1f1fb":1,"1f1f9_1f1fc":1,"1f1f9_1f1ff":1,"1f1fa_1f1e6":1,"1f1fa_1f1ec":1,"1f1fa_1f1f2":1,"1f1fa_1f1f8":1,"1f1fa_1f1fe":1,"1f1fa_1f1ff":1,"1f1fb_1f1e6":1,"1f1fb_1f1e8":1,"1f1fb_1f1ea":1,"1f1fb_1f1ec":1,"1f1fb_1f1ee":1,"1f1fb_1f1f3":1,"1f1fb_1f1fa":1,"1f1fc_1f1eb":1,"1f1fc_1f1f8":1,"1f1fd_1f1f0":1,"1f1fe_1f1ea":1,"1f1fe_1f1f9":1,"1f1ff_1f1e6":1,"1f1ff_1f1f2":1,"1f1ff_1f1fc":1,"1f201":1,"1f202":1,"1f21a":1,"1f22f":1,"1f232":1,"1f233":1,"1f234":1,"1f235":1,"1f236":1,"1f237":1,"1f238":1,"1f239":1,"1f23a":1,"1f250":1,"1f251":1,"1f300":1,"1f301":1,"1f302":1,"1f303":1,"1f304":1,"1f305":1,"1f306":1,"1f307":1,"1f308":1,"1f309":1,"1f30a":1,"1f30b":1,"1f30c":1,"1f30d":1,"1f30e":1,"1f30f":1,"1f310":1,"1f311":1,"1f312":1,"1f313":1,"1f314":1,"1f315":1,"1f316":1,"1f317":1,"1f318":1,"1f319":1,"1f31a":1,"1f31b":1,"1f31c":1,"1f31d":1,"1f31e":1,"1f31f":1,"1f320":1,"1f330":1,"1f331":1,"1f332":1,"1f333":1,"1f334":1,"1f335":1,"1f337":1,"1f338":1,"1f339":1,"1f33a":1,"1f33b":1,"1f33c":1,"1f33d":1,"1f33e":1,"1f33f":1,"1f340":1,"1f341":1,"1f342":1,"1f343":1,"1f344":1,"1f345":1,"1f346":1,"1f347":1,"1f348":1,"1f349":1,"1f34a":1,"1f34b":1,"1f34c":1,"1f34d":1,"1f34e":1,"1f34f":1,"1f350":1,"1f351":1,"1f352":1,"1f353":1,"1f354":1,"1f355":1,"1f356":1,"1f357":1,"1f358":1,"1f359":1,"1f35a":1,"1f35b":1,"1f35c":1,"1f35d":1,"1f35e":1,"1f35f":1,"1f360":1,"1f361":1,"1f362":1,"1f363":1,"1f364":1,"1f365":1,"1f366":1,"1f367":1,"1f368":1,"1f369":1,"1f36a":1,"1f36b":1,"1f36c":1,"1f36d":1,"1f36e":1,"1f36f":1,"1f370":1,"1f371":1,"1f372":1,"1f373":1,"1f374":1,"1f375":1,"1f376":1,"1f377":1,"1f378":1,"1f379":1,"1f37a":1,"1f37b":1,"1f37c":1,"1f380":1,"1f381":1,"1f382":1,"1f383":1,"1f384":1,"1f385":1,"1f385_1f3fb":1,"1f385_1f3fc":1,"1f385_1f3fd":1,"1f385_1f3fe":1,"1f385_1f3ff":1,"1f386":1,"1f387":1,"1f388":1,"1f389":1,"1f38a":1,"1f38b":1,"1f38c":1,"1f38d":1,"1f38e":1,"1f38f":1,"1f390":1,"1f391":1,"1f392":1,"1f393":1,"1f3a0":1,"1f3a1":1,"1f3a2":1,"1f3a3":1,"1f3a4":1,"1f3a5":1,"1f3a6":1,"1f3a7":1,"1f3a8":1,"1f3a9":1,"1f3aa":1,"1f3ab":1,"1f3ac":1,"1f3ad":1,"1f3ae":1,"1f3af":1,"1f3b0":1,"1f3b1":1,"1f3b2":1,"1f3b3":1,"1f3b4":1,"1f3b5":1,"1f3b6":1,"1f3b7":1,"1f3b8":1,"1f3b9":1,"1f3ba":1,"1f3bb":1,"1f3bc":1,"1f3bd":1,"1f3be":1,"1f3bf":1,"1f3c0":1,"1f3c1":1,"1f3c2":1,"1f3c2_1f3fb":1,"1f3c2_1f3fc":1,"1f3c2_1f3fd":1,"1f3c2_1f3fe":1,"1f3c2_1f3ff":1,"1f3c3":1,"1f3c3_1f3fb":1,"1f3c3_1f3fc":1,"1f3c3_1f3fd":1,"1f3c3_1f3fe":1,"1f3c3_1f3ff":1,"1f3c4":1,"1f3c4_1f3fb":1,"1f3c4_1f3fc":1,"1f3c4_1f3fd":1,"1f3c4_1f3fe":1,"1f3c4_1f3ff":1,"1f3c6":1,"1f3c7":1,"1f3c7_1f3fb":1,"1f3c7_1f3fc":1,"1f3c7_1f3fd":1,"1f3c7_1f3fe":1,"1f3c7_1f3ff":1,"1f3c8":1,"1f3c9":1,"1f3ca":1,"1f3ca_1f3fb":1,"1f3ca_1f3fc":1,"1f3ca_1f3fd":1,"1f3ca_1f3fe":1,"1f3ca_1f3ff":1,"1f3e0":1,"1f3e1":1,"1f3e2":1,"1f3e3":1,"1f3e4":1,"1f3e5":1,"1f3e6":1,"1f3e7":1,"1f3e8":1,"1f3e9":1,"1f3ea":1,"1f3eb":1,"1f3ec":1,"1f3ed":1,"1f3ee":1,"1f3ef":1,"1f3f0":1,"1f400":1,"1f401":1,"1f402":1,"1f403":1,"1f404":1,"1f405":1,"1f406":1,"1f407":1,"1f408":1,"1f409":1,"1f40a":1,"1f40b":1,"1f40c":1,"1f40d":1,"1f40e":1,"1f40f":1,"1f410":1,"1f411":1,"1f412":1,"1f413":1,"1f414":1,"1f415":1,"1f416":1,"1f417":1,"1f418":1,"1f419":1,"1f41a":1,"1f41b":1,"1f41c":1,"1f41d":1,"1f41e":1,"1f41f":1,"1f420":1,"1f421":1,"1f422":1,"1f423":1,"1f424":1,"1f425":1,"1f426":1,"1f427":1,"1f428":1,"1f429":1,"1f42a":1,"1f42b":1,"1f42c":1,"1f42d":1,"1f42e":1,"1f42f":1,"1f430":1,"1f431":1,"1f432":1,"1f433":1,"1f434":1,"1f435":1,"1f436":1,"1f437":1,"1f438":1,"1f439":1,"1f43a":1,"1f43b":1,"1f43c":1,"1f43d":1,"1f43e":1,"1f440":1,"1f442":1,"1f442_1f3fb":1,"1f442_1f3fc":1,"1f442_1f3fd":1,"1f442_1f3fe":1,"1f442_1f3ff":1,"1f443":1,"1f443_1f3fb":1,"1f443_1f3fc":1,"1f443_1f3fd":1,"1f443_1f3fe":1,"1f443_1f3ff":1,"1f444":1,"1f445":1,"1f446":1,"1f446_1f3fb":1,"1f446_1f3fc":1,"1f446_1f3fd":1,"1f446_1f3fe":1,"1f446_1f3ff":1,"1f447":1,"1f447_1f3fb":1,"1f447_1f3fc":1,"1f447_1f3fd":1,"1f447_1f3fe":1,"1f447_1f3ff":1,"1f448":1,"1f448_1f3fb":1,"1f448_1f3fc":1,"1f448_1f3fd":1,"1f448_1f3fe":1,"1f448_1f3ff":1,"1f449":1,"1f449_1f3fb":1,"1f449_1f3fc":1,"1f449_1f3fd":1,"1f449_1f3fe":1,"1f449_1f3ff":1,"1f44a":1,"1f44a_1f3fb":1,"1f44a_1f3fc":1,"1f44a_1f3fd":1,"1f44a_1f3fe":1,"1f44a_1f3ff":1,"1f44b":1,"1f44b_1f3fb":1,"1f44b_1f3fc":1,"1f44b_1f3fd":1,"1f44b_1f3fe":1,"1f44b_1f3ff":1,"1f44c":1,"1f44c_1f3fb":1,"1f44c_1f3fc":1,"1f44c_1f3fd":1,"1f44c_1f3fe":1,"1f44c_1f3ff":1,"1f44d":1,"1f44d_1f3fb":1,"1f44d_1f3fc":1,"1f44d_1f3fd":1,"1f44d_1f3fe":1,"1f44d_1f3ff":1,"1f44e":1,"1f44e_1f3fb":1,"1f44e_1f3fc":1,"1f44e_1f3fd":1,"1f44e_1f3fe":1,"1f44e_1f3ff":1,"1f44f":1,"1f44f_1f3fb":1,"1f44f_1f3fc":1,"1f44f_1f3fd":1,"1f44f_1f3fe":1,"1f44f_1f3ff":1,"1f450":1,"1f450_1f3fb":1,"1f450_1f3fc":1,"1f450_1f3fd":1,"1f450_1f3fe":1,"1f450_1f3ff":1,"1f451":1,"1f452":1,"1f453":1,"1f454":1,"1f455":1,"1f456":1,"1f457":1,"1f458":1,"1f459":1,"1f45a":1,"1f45b":1,"1f45c":1,"1f45d":1,"1f45e":1,"1f45f":1,"1f460":1,"1f461":1,"1f462":1,"1f463":1,"1f464":1,"1f465":1,"1f466":1,"1f466_1f3fb":1,"1f466_1f3fc":1,"1f466_1f3fd":1,"1f466_1f3fe":1,"1f466_1f3ff":1,"1f467":1,"1f467_1f3fb":1,"1f467_1f3fc":1,"1f467_1f3fd":1,"1f467_1f3fe":1,"1f467_1f3ff":1,"1f468":1,"1f468_1f3fb":1,"1f468_1f3fc":1,"1f468_1f3fd":1,"1f468_1f3fe":1,"1f468_1f3ff":1,"1f468_200d_1f468_200d_1f466":1,"1f468_200d_1f468_200d_1f466_200d_1f466":1,"1f468_200d_1f468_200d_1f467":1,"1f468_200d_1f468_200d_1f467_200d_1f466":1,"1f468_200d_1f468_200d_1f467_200d_1f467":1,"1f468_200d_1f469_200d_1f466":1,"1f468_200d_1f469_200d_1f466_200d_1f466":1,"1f468_200d_1f469_200d_1f467":1,"1f468_200d_1f469_200d_1f467_200d_1f466":1,"1f468_200d_1f469_200d_1f467_200d_1f467":1,"1f468_200d_2764_fe0f_200d_1f468":1,"1f468_200d_2764_fe0f_200d_1f48b_200d_1f468":1,"1f469":1,"1f469_1f3fb":1,"1f469_1f3fc":1,"1f469_1f3fd":1,"1f469_1f3fe":1,"1f469_1f3ff":1,"1f469_200d_1f469_200d_1f466":1,"1f469_200d_1f469_200d_1f466_200d_1f466":1,"1f469_200d_1f469_200d_1f467":1,"1f469_200d_1f469_200d_1f467_200d_1f466":1,"1f469_200d_1f469_200d_1f467_200d_1f467":1,"1f469_200d_2764_fe0f_200d_1f469":1,"1f469_200d_2764_fe0f_200d_1f48b_200d_1f469":1,"1f46a":1,"1f46b":1,"1f46b_1f3fb":1,"1f46b_1f3fc":1,"1f46b_1f3fd":1,"1f46c":1,"1f46d":1,"1f46e":1,"1f46e_1f3fb":1,"1f46e_1f3fc":1,"1f46e_1f3fd":1,"1f46e_1f3fe":1,"1f46e_1f3ff":1,"1f46f":1,"1f470":1,"1f470_1f3fb":1,"1f470_1f3fc":1,"1f470_1f3fd":1,"1f470_1f3fe":1,"1f470_1f3ff":1,"1f471":1,"1f471_1f3fb":1,"1f471_1f3fc":1,"1f471_1f3fd":1,"1f471_1f3fe":1,"1f471_1f3ff":1,"1f472":1,"1f472_1f3fb":1,"1f472_1f3fc":1,"1f472_1f3fd":1,"1f472_1f3fe":1,"1f472_1f3ff":1,"1f473":1,"1f473_1f3fb":1,"1f473_1f3fc":1,"1f473_1f3fd":1,"1f473_1f3fe":1,"1f473_1f3ff":1,"1f474":1,"1f474_1f3fb":1,"1f474_1f3fc":1,"1f474_1f3fd":1,"1f474_1f3fe":1,"1f474_1f3ff":1,"1f475":1,"1f475_1f3fb":1,"1f475_1f3fc":1,"1f475_1f3fd":1,"1f475_1f3fe":1,"1f475_1f3ff":1,"1f476":1,"1f476_1f3fb":1,"1f476_1f3fc":1,"1f476_1f3fd":1,"1f476_1f3fe":1,"1f476_1f3ff":1,"1f477":1,"1f477_1f3fb":1,"1f477_1f3fc":1,"1f477_1f3fd":1,"1f477_1f3fe":1,"1f477_1f3ff":1,"1f478":1,"1f478_1f3fb":1,"1f478_1f3fc":1,"1f478_1f3fd":1,"1f478_1f3fe":1,"1f478_1f3ff":1,"1f479":1,"1f47a":1,"1f47b":1,"1f47c":1,"1f47c_1f3fb":1,"1f47c_1f3fc":1,"1f47c_1f3fd":1,"1f47c_1f3fe":1,"1f47c_1f3ff":1,"1f47d":1,"1f47e":1,"1f47f":1,"1f480":1,"1f481":1,"1f481_1f3fb":1,"1f481_1f3fc":1,"1f481_1f3fd":1,"1f481_1f3fe":1,"1f481_1f3ff":1,"1f482":1,"1f482_1f3fb":1,"1f482_1f3fc":1,"1f482_1f3fd":1,"1f482_1f3fe":1,"1f482_1f3ff":1,"1f483":1,"1f483_1f3fb":1,"1f483_1f3fc":1,"1f483_1f3fd":1,"1f483_1f3fe":1,"1f483_1f3ff":1,"1f484":1,"1f485":1,"1f485_1f3fb":1,"1f485_1f3fc":1,"1f485_1f3fd":1,"1f485_1f3fe":1,"1f485_1f3ff":1,"1f486":1,"1f486_1f3fb":1,"1f486_1f3fc":1,"1f486_1f3fd":1,"1f486_1f3fe":1,"1f486_1f3ff":1,"1f487":1,"1f487_1f3fb":1,"1f487_1f3fc":1,"1f487_1f3fd":1,"1f487_1f3fe":1,"1f487_1f3ff":1,"1f488":1,"1f489":1,"1f48a":1,"1f48b":1,"1f48c":1,"1f48d":1,"1f48e":1,"1f48f":1,"1f490":1,"1f491":1,"1f492":1,"1f493":1,"1f494":1,"1f495":1,"1f496":1,"1f497":1,"1f498":1,"1f499":1,"1f49a":1,"1f49b":1,"1f49c":1,"1f49d":1,"1f49e":1,"1f49f":1,"1f4a0":1,"1f4a1":1,"1f4a2":1,"1f4a3":1,"1f4a4":1,"1f4a5":1,"1f4a6":1,"1f4a7":1,"1f4a8":1,"1f4a9":1,"1f4aa":1,"1f4aa_1f3fb":1,"1f4aa_1f3fc":1,"1f4aa_1f3fd":1,"1f4aa_1f3fe":1,"1f4aa_1f3ff":1,"1f4ab":1,"1f4ac":1,"1f4ad":1,"1f4ae":1,"1f4af":1,"1f4b0":1,"1f4b1":1,"1f4b2":1,"1f4b3":1,"1f4b4":1,"1f4b5":1,"1f4b6":1,"1f4b7":1,"1f4b8":1,"1f4b9":1,"1f4ba":1,"1f4bb":1,"1f4bc":1,"1f4bd":1,"1f4be":1,"1f4bf":1,"1f4c0":1,"1f4c1":1,"1f4c2":1,"1f4c3":1,"1f4c4":1,"1f4c5":1,"1f4c6":1,"1f4c7":1,"1f4c8":1,"1f4c9":1,"1f4ca":1,"1f4cb":1,"1f4cc":1,"1f4cd":1,"1f4ce":1,"1f4cf":1,"1f4d0":1,"1f4d1":1,"1f4d2":1,"1f4d3":1,"1f4d4":1,"1f4d5":1,"1f4d6":1,"1f4d7":1,"1f4d8":1,"1f4d9":1,"1f4da":1,"1f4db":1,"1f4dc":1,"1f4dd":1,"1f4de":1,"1f4df":1,"1f4e0":1,"1f4e1":1,"1f4e2":1,"1f4e3":1,"1f4e4":1,"1f4e5":1,"1f4e6":1,"1f4e7":1,"1f4e8":1,"1f4e9":1,"1f4ea":1,"1f4eb":1,"1f4ec":1,"1f4ed":1,"1f4ee":1,"1f4ef":1,"1f4f0":1,"1f4f1":1,"1f4f2":1,"1f4f3":1,"1f4f4":1,"1f4f5":1,"1f4f6":1,"1f4f7":1,"1f4f9":1,"1f4fa":1,"1f4fb":1,"1f4fc":1,"1f500":1,"1f501":1,"1f502":1,"1f503":1,"1f504":1,"1f505":1,"1f506":1,"1f507":1,"1f508":1,"1f509":1,"1f50a":1,"1f50b":1,"1f50c":1,"1f50d":1,"1f50e":1,"1f50f":1,"1f510":1,"1f511":1,"1f512":1,"1f513":1,"1f514":1,"1f515":1,"1f516":1,"1f517":1,"1f518":1,"1f519":1,"1f51a":1,"1f51b":1,"1f51c":1,"1f51d":1,"1f51e":1,"1f51f":1,"1f520":1,"1f521":1,"1f522":1,"1f523":1,"1f524":1,"1f525":1,"1f526":1,"1f527":1,"1f528":1,"1f529":1,"1f52a":1,"1f52b":1,"1f52c":1,"1f52d":1,"1f52e":1,"1f52f":1,"1f530":1,"1f531":1,"1f532":1,"1f533":1,"1f534":1,"1f535":1,"1f536":1,"1f537":1,"1f538":1,"1f539":1,"1f53a":1,"1f53b":1,"1f53c":1,"1f53d":1,"1f550":1,"1f551":1,"1f552":1,"1f553":1,"1f554":1,"1f555":1,"1f556":1,"1f557":1,"1f558":1,"1f559":1,"1f55a":1,"1f55b":1,"1f55c":1,"1f55d":1,"1f55e":1,"1f55f":1,"1f560":1,"1f561":1,"1f562":1,"1f563":1,"1f564":1,"1f565":1,"1f566":1,"1f567":1,"1f5fb":1,"1f5fc":1,"1f5fd":1,"1f5fe":1,"1f5ff":1,"1f600":1,"1f601":1,"1f602":1,"1f603":1,"1f604":1,"1f605":1,"1f606":1,"1f607":1,"1f608":1,"1f609":1,"1f60a":1,"1f60b":1,"1f60c":1,"1f60d":1,"1f60e":1,"1f60f":1,"1f610":1,"1f611":1,"1f612":1,"1f613":1,"1f614":1,"1f615":1,"1f616":1,"1f617":1,"1f618":1,"1f619":1,"1f61a":1,"1f61b":1,"1f61c":1,"1f61d":1,"1f61e":1,"1f61f":1,"1f620":1,"1f621":1,"1f622":1,"1f623":1,"1f624":1,"1f625":1,"1f626":1,"1f627":1,"1f628":1,"1f629":1,"1f62a":1,"1f62b":1,"1f62c":1,"1f62d":1,"1f62e":1,"1f62f":1,"1f630":1,"1f631":1,"1f632":1,"1f633":1,"1f634":1,"1f635":1,"1f636":1,"1f637":1,"1f638":1,"1f639":1,"1f63a":1,"1f63b":1,"1f63c":1,"1f63d":1,"1f63e":1,"1f63f":1,"1f640":1,"1f642":1,"1f645":1,"1f645_1f3fb":1,"1f645_1f3fc":1,"1f645_1f3fd":1,"1f645_1f3fe":1,"1f645_1f3ff":1,"1f646":1,"1f646_1f3fb":1,"1f646_1f3fc":1,"1f646_1f3fd":1,"1f646_1f3fe":1,"1f646_1f3ff":1,"1f647":1,"1f647_1f3fb":1,"1f647_1f3fc":1,"1f647_1f3fd":1,"1f647_1f3fe":1,"1f647_1f3ff":1,"1f648":1,"1f649":1,"1f64a":1,"1f64b":1,"1f64b_1f3fb":1,"1f64b_1f3fc":1,"1f64b_1f3fd":1,"1f64b_1f3fe":1,"1f64b_1f3ff":1,"1f64c":1,"1f64c_1f3fb":1,"1f64c_1f3fc":1,"1f64c_1f3fd":1,"1f64c_1f3fe":1,"1f64c_1f3ff":1,"1f64d":1,"1f64d_1f3fb":1,"1f64d_1f3fc":1,"1f64d_1f3fd":1,"1f64d_1f3fe":1,"1f64d_1f3ff":1,"1f64e":1,"1f64e_1f3fb":1,"1f64e_1f3fc":1,"1f64e_1f3fd":1,"1f64e_1f3fe":1,"1f64e_1f3ff":1,"1f64f":1,"1f64f_1f3fb":1,"1f64f_1f3fc":1,"1f64f_1f3fd":1,"1f64f_1f3fe":1,"1f64f_1f3ff":1,"1f680":1,"1f681":1,"1f682":1,"1f683":1,"1f684":1,"1f685":1,"1f686":1,"1f687":1,"1f688":1,"1f689":1,"1f68a":1,"1f68b":1,"1f68c":1,"1f68d":1,"1f68e":1,"1f68f":1,"1f690":1,"1f691":1,"1f692":1,"1f693":1,"1f694":1,"1f695":1,"1f696":1,"1f697":1,"1f698":1,"1f699":1,"1f69a":1,"1f69b":1,"1f69c":1,"1f69d":1,"1f69e":1,"1f69f":1,"1f6a0":1,"1f6a1":1,"1f6a2":1,"1f6a3":1,"1f6a4":1,"1f6a5":1,"1f6a6":1,"1f6a7":1,"1f6a8":1,"1f6a9":1,"1f6aa":1,"1f6ab":1,"1f6ac":1,"1f6ad":1,"1f6ae":1,"1f6af":1,"1f6b0":1,"1f6b1":1,"1f6b2":1,"1f6b3":1,"1f6b4":1,"1f6b4_1f3fb":1,"1f6b4_1f3fc":1,"1f6b4_1f3fd":1,"1f6b4_1f3fe":1,"1f6b4_1f3ff":1,"1f6b5":1,"1f6b5_1f3fb":1,"1f6b5_1f3fc":1,"1f6b5_1f3fd":1,"1f6b5_1f3fe":1,"1f6b5_1f3ff":1,"1f6b6":1,"1f6b6_1f3fb":1,"1f6b6_1f3fc":1,"1f6b6_1f3fd":1,"1f6b6_1f3fe":1,"1f6b6_1f3ff":1,"1f6b7":1,"1f6b8":1,"1f6b9":1,"1f6ba":1,"1f6bb":1,"1f6bc":1,"1f6bd":1,"1f6be":1,"1f6bf":1,"1f6c0":1,"1f6c0_1f3fb":1,"1f6c0_1f3fc":1,"1f6c0_1f3fd":1,"1f6c0_1f3fe":1,"1f6c0_1f3ff":1,"1f6c1":1,"1f6c2":1,"1f6c3":1,"1f6c4":1,"1f6c5":1,"203c":1,2049:1,2122:1,2139:1,2194:1,2195:1,2196:1,2197:1,2198:1,2199:1,"21a9":1,"21aa":1,"231a":1,"231b":1,"23_20e3":1,"23ea":1,"23eb":1,"23ec":1,"23f0":1,"23f3":1,"24c2":1,"25aa":1,"25ab":1,"25b6":1,"25c0":1,"25fb":1,"25fc":1,"25fd":1,"25fe":1,2600:1,2601:1,"260e":1,2611:1,2614:1,2615:1,"23e9":1,"261d":1,"261d_1f3fb":1,"261d_1f3fc":1,"261d_1f3fd":1,"261d_1f3fe":1,"261d_1f3ff":1,"263a":1,2648:1,2649:1,"264a":1,"264b":1,"264c":1,"264d":1,"264e":1,"264f":1,2650:1,2651:1,2652:1,2653:1,2660:1,2663:1,2665:1,2666:1,2668:1,"267b":1,"267f":1,2693:1,"26a0":1,"26a1":1,"26aa":1,"26ab":1,"26bd":1,"26be":1,"26c4":1,"26c5":1,"26ce":1,"26d4":1,"26ea":1,"26f2":1,"26f3":1,"26f5":1,"26fa":1,"26fd":1,2702:1,2705:1,2708:1,2709:1,"270a":1,"270a_1f3fb":1,"270a_1f3fc":1,"270a_1f3fd":1,"270a_1f3fe":1,"270a_1f3ff":1,"270b":1,"270b_1f3fb":1,"270b_1f3fc":1,"270b_1f3fd":1,"270b_1f3fe":1,"270b_1f3ff":1,"270c":1,"270c_1f3fb":1,"270c_1f3fc":1,"270c_1f3fd":1,"270c_1f3fe":1,"270c_1f3ff":1,"270f":1,2712:1,2714:1,2716:1,2728:1,2733:1,2734:1,2744:1,2747:1,"274c":1,"274e":1,2753:1,2754:1,2755:1,2757:1,2764:1,2795:1,2796:1,2797:1,"27a1":1,"27b0":1,"27bf":1,2934:1,2935:1,"2b05":1,"2b06":1,"2b07":1,"2b1b":1,"2b1c":1,"2b50":1,"2b55":1,3030:1,"303d":1,"30_20e3":1,"31_20e3":1,3297:1,3299:1,"32_20e3":1,"33_20e3":1,"34_20e3":1,"35_20e3":1,"36_20e3":1,"37_20e3":1,"38_20e3":1,"39_20e3":1,a9:1,ae:1,f0000:1,f0001:1},h=65039;a=function(a){a=b("EmojiRenderer").parse(a,1);if(a.length!==1)return null;var c=a[0].emoji,d=c.map(function(a){return b("Utf16").decode(a)});d[d.length-1]===h&&d.pop();d=d.map(function(a){return a!=null?a.toString(16):""}).join("_");return{emoji_key:d,emoji_str:c.join(""),is_supported:!!g[d],offset:a[0].offset,length:a[0].length}};c=function(a){return!!g[a]};d=function(a){a=b("EmoticonEmojiList").emote2emojis[a];return g[a]?a:null};e.exports={emoji:g,getEmojiMatchObj:a,getMessengerEmote:d,isSupportedEmoji:c}}),null);