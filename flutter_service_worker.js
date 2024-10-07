'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0c43adc3472f70c56cda14bb0bb67cb3",
".git/config": "561a813bc8a43edd3d130016310e7731",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a351dfd1fa1bed19593ef819828d9a76",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a03af922ed97cd892ad5db339ced87e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa73a151b849618c8405e4e54a3fab17",
".git/logs/refs/heads/main": "f5dd1ea90b91e26c94ee2238b15335ce",
".git/logs/refs/remotes/origin/main": "c39a25b0b3012314bc81fc19e9d3eedc",
".git/objects/07/50f72e388e0062c37e1877e0d73dfb52f0d00d": "efd8e1ca2d6d39de8e978a90c5ca8753",
".git/objects/0a/e29cdac97b82d8279c9db82b99d67d829d8787": "658e957a5dad05e15611121bd9646f66",
".git/objects/0d/911b921a4d890e14690884bbad00592a570cc0": "6ab6f20e7d53b2f80dd1f4d76c2297c4",
".git/objects/0f/1864176706030444f7adec2eabda8e41a48793": "430455ef7ce4b0e6ff02662b3ff123a6",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/e4c091279bd1f80ef63307727705b778a9602c": "3d8a4cd318f40d7f8624bfbcf95d8575",
".git/objects/11/c1e0aa4180fc1eb0353449bbf18e6baab133c3": "9ed63a20657e108b9dfd29470a4804c9",
".git/objects/11/ef4f45a29dc9efc9c84ad38e90cbdf55745dd8": "93b1f80cc137f7282bcb447393eb175d",
".git/objects/13/3991c82fc7653580a90a48d89701fedddcd17d": "bf732c60984f97531da7536fce79bed7",
".git/objects/14/ffb5069a9d01a7e5cd3cec2059a1313d992400": "9c5604cd529f53c87588242a632a9f51",
".git/objects/15/8531befb59295476f990df78e38c495555eb07": "9d0b3b2cf8cffc85cec681ecd8df0932",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/4b86de8b16d59274f74f188bf89094f342aeae": "e296e2ea154bdf273b3fc6b783fe6080",
".git/objects/1d/ac8cba3790b1099df8c287b83c8651be7ddb02": "f271d23b6692d2d8cf2c2458ac20896f",
".git/objects/1e/e21fd7afd746bcc9b4c86cf206899c65f1de5d": "ce85c8f6d986ffea75c068f6e8b0a3b0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/cb399952f3c35dc1719790277a538ea68fe65d": "a862e588560810ea0e3dea45ff321a10",
".git/objects/23/c4ee5ceb89e2c07c573856d212aebe908f47bb": "7a5783ae9b78ce20df452637d9f70d91",
".git/objects/25/84bc79886e669113f675ec3f2049d8b9e114db": "aa86cb48ed5ac5168b09daab48588503",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/8be71f462838b51df186919a465e42b652a3cd": "4ee643aa49543021095ca287b12cce97",
".git/objects/2a/5176acf20327884be10494c177a32b755a394a": "0514ef4922e7cb5e812a5c15abc88a99",
".git/objects/2a/62be78f18a0a1367fed7f404e6a8d08c156724": "457da4741e0480d0461b837e099fc96d",
".git/objects/2c/56bb574c1b0c895f4cb25d14d120bdb02a75d6": "9ac0762a1d8424e607485a1825faa733",
".git/objects/2d/73e27a1a1df83cacc0e9a88ffd5a2458c735ad": "0604d34be8226eea707b5d57d6a7e27a",
".git/objects/2f/defbc9e2b1de318d5e172666b968d793096c9b": "5e5a090ef9c44eb77734cddffe6e07c5",
".git/objects/38/0199780fcaa2b03408c23703b953aee44d7921": "4c0b66d60207ecb10d97c430d69c324a",
".git/objects/38/1825e5de554eca92376841667e1275a5c5e376": "597a298c80e92aa93d934b375bc63555",
".git/objects/39/93ea3ab1231f3497eea14110ece11983b08572": "41e0cdb553a621be57165b6ed1b4b4d1",
".git/objects/3d/2479e416d19849de9e02a8e022b1b54447b48d": "ab2f45e5ff899a0610e473298c92a43b",
".git/objects/42/81b6e6072ec30a7a213f1310c73e191a71558e": "bc0ab3217fc2c49f54f62d6b59a3d384",
".git/objects/47/018ca50a361fd96543309b43358ed455a20df4": "e3bc406656fd655e5e38eefcd4b95474",
".git/objects/47/bb827c99b596b5f371e224bb29990f0c5754cf": "16782661f635e80a18334d157420a9d5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/681d74ba3eaa77eebef402483c7f886beff716": "6ba6201d97f553e6ed51fa982417ba47",
".git/objects/50/aa504c8288faedc545fe61fe4e51935187dfbd": "a7528f29714cdc7aaeffee31fc54953e",
".git/objects/53/903e778724fed26c1e85d2c58968449c24cfa0": "c169d2ca6f996b2f1f1abc8d3ee1ff61",
".git/objects/55/74a1fa7ef2c74c8801e15e56a9849824d2c710": "fdd616e268f69071aa9b0d0bddb133f3",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/8d967068901f69315a224719e4c17be6ec8b5b": "ba904cbd0695abee117ead1f8bb1ac9a",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/c468f741dc7b7470a2af63d4eed3d2db7b4b62": "c2e0be28758bccd141877c6035a257d6",
".git/objects/5a/3ea950e8c16234ebc66ce95375ba77bbd0af78": "7b64d36797a2404b61ec8bd77177ecdc",
".git/objects/5c/083acbc2d863fc73ea7059c19f095b8665c4fa": "ad9612f2e01ce5019ad2329bfd3699e3",
".git/objects/5f/e513cd3961c9a33bce93694dad00acebc9220e": "1b4ecb8199aa9ac4c185bc582cbd5008",
".git/objects/61/3a9c7013f9f47a47bdf65c5f33b71fc492049a": "e997b3e501d0c08efe00f4f009a63818",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/234a0e402c1982731a362a2f68b838938d1822": "d38413a15ae4c43e2869edb30963461f",
".git/objects/67/bd952a16bb57670f8b1a2ca9d37a2bbd5c8252": "1e125a29f3703d6bb9e096e998ae1b81",
".git/objects/6a/1fa0fa035616916b6ae4faaa8a95d748035a95": "29ed0d257f9b0291d3e102d1a8947146",
".git/objects/6f/587e2cb2fe0d3b17dccfa5c06db53b7b9234af": "742d86d0a1d8230128256bb5c800d521",
".git/objects/70/19b90c6dd032039df561715ee4e625b8e6cc16": "3652bc471972b7eb818ec0637dcf0552",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/1dbfeed61ca481d5b64d305bae84e1d0680b2d": "3d727fed90e8085a47d4f1419761feff",
".git/objects/78/c284f0c196021585359c2de74451f851fc8efe": "8a8defd3130b1cc898d597c77457a00d",
".git/objects/7e/5025fef6dd62d4f1eca4079fe2d3670811c901": "29efaab46e2f710add1bf51820b53976",
".git/objects/81/be2cc8b218c2e82edddbb3b2a1ee6b3c5459d9": "dfb70a73659ed5ad2b58ec64361b13f0",
".git/objects/82/b5fbb375504b11d5f508249e123ff77ae9ab37": "247b916e1eca5c8f2743c72bbb926174",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/82d94623e575a4ecc9586a35fc909dff37fb2c": "0d4bde48638b5a89ca0d6460a09067bb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/a25f303104f7b23094182aae9b0cc0621a9693": "2ea138772fdbd9ea2e791765c14f334c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/aac630e58a4bb82e2d55011aeb57cf5603da17": "08e58ae43c94130ef1e4ec6980cdd8ea",
".git/objects/90/b499fed76e96db1b42d76e295924d170c46037": "9aefc2e3a6de6339067166804b709242",
".git/objects/94/0d4c6653b51396b51ac70632a25229da531490": "43c515283eca3d20e493eaf84958b2ef",
".git/objects/94/7a7cece2023a5e8b192117365d5640577e0e50": "60c48dd8259afeb679d34e696ccfc6fb",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/8e17e9dd9c83adad1c840e9538f0697ba6a253": "241bdc117c4c46b53f026add33883a9d",
".git/objects/a0/6f6862c7939d7ad832ab52951e2a33903e54e2": "446753d4b1583f8a58d4174b54cce73c",
".git/objects/a2/a8676670863e8a2598c8a3d78ee1cddae6a9b9": "09422e5d54085690a5e041db8480dbb5",
".git/objects/a4/c3724966750ea4dd2718a938236ab73678f4d8": "a47f65770dbc78470f238150db6b6118",
".git/objects/a6/037e6865db7dcd220a631e7b9f4a8eb6417c42": "46cf6c7e317f9aa308f35b1ce6886419",
".git/objects/a7/4f25eca907a426bf306e40bbd85854acf8aafb": "b627fbca6eabc2c9e28875c39478b0cc",
".git/objects/a8/2f9bda5988e37fdda690bc672322034604afd6": "b6f7a210a1373fc0b2be11f7b5855e10",
".git/objects/a9/4a8fec1eddb013d3e4a304ffc121194b1bfa1b": "b3e5acb6b3567c18282c856b188ede42",
".git/objects/a9/7834dfbe4b0a505dbb657061cfd47dda68f7c6": "dc160a8314600d008d20f107492610a1",
".git/objects/b1/bc9d171c54199509d2ebde01c7a917f0f0ec4f": "cce7782b4e415981cb198adda08c5e0c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/06c29c30c97d01e46381b76b12b0c1864a8b38": "9cd22d3ba5821367294a1af059f96a3f",
".git/objects/b5/b9615e8de9c743f74da009d95f68b05071e4f0": "915f78819378257b2d0a3ca93bdeb002",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/88fe0f993e0ad2553ef32dc93575bd2ca300be": "390e5a266e844a9573d2a2dc666007ae",
".git/objects/b8/c077a5b7fc22519602655cd7527d0d8448887d": "6afd38dd580852a0fd2e625d6077e804",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8b0a29ec109368888786785c611dc9d284ac71": "c3f80155b5bf501091c9b4803c56e0d1",
".git/objects/bb/8413114001fc8b6887ec2722d67d574f67797e": "30b8fd8ac2b435f0291ae71f5b2c073c",
".git/objects/bc/efa6ff62d979293092d32ceb45345f8a493f9b": "0d84fb2430b4777431e7b9fcb302b084",
".git/objects/bd/71b0eafd62604d5de211fdbf21c6ded8b9a223": "e6bda10589ae7ea32a2324d43acfb855",
".git/objects/bf/86fc9887ca7c3682b63a00a9469461907696b3": "1e8cbef482cecf12e46ae3bdfd2c9841",
".git/objects/c3/4693aceb8810d11f769c6218804f01f7bb0099": "3f3c4b84d5acfbb23a4247a11f0c16e3",
".git/objects/c3/670eea13f3deae853ea6a5dc0ce4a5dfbce8a8": "c8b43b80eee6ce263b6e09a1d6357ac3",
".git/objects/c4/cd9caa5523b67c9813d6a85ddf6ddc99de2dde": "390b4e5259dafc9729a0c06f1e6eb8d1",
".git/objects/c6/4062f31a6ffc6a39b0c9c656b99e6d48ad9327": "2a3b94aa2e2da672cfda6115b50bad8b",
".git/objects/c9/adeed971cc5756b93dc758ecebf39af420ab90": "3ba9c546e925a748a93e52dad9de6d57",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d0/02b0cc0846d2f018dc0fd522169ee6e29db662": "d1de69cf45fe2d0a0f82fddc4b7f601f",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/76ffbcc86c9f18e06678318b30f80ddbb58430": "18d278c89acc25ca44f53266f1cfed88",
".git/objects/d7/f88d19a94748493edd5f5fb5698ba8d029862e": "e3238e6255f913f37fdcc5a50b1a3e53",
".git/objects/d8/7f301b395bf80b3e026040d90e5112f0eaccb5": "13bdab4b53d68f05799e865215014e54",
".git/objects/e3/7ae01359d25dfa3c80f98ef0581fe9ae52ebaa": "387b7615c936dd8a15667ca174dc5a15",
".git/objects/e7/ae345aa00723d337f807324143f8548f11b235": "a5c538abbdf311942bf6822c89ad5a77",
".git/objects/e8/bd8b2e1bdec63694225088c5b22d3ae36e1c19": "3c517209743fcd022f9e7a78087af0d3",
".git/objects/ea/84ce5e57cd4a8b06657544f92ba3e2a1c76491": "8fb88230c7fe45f835e17917c4013498",
".git/objects/ea/8ed2783df121538700a09784d8f45b66ac1625": "3450b68513eb87a71ce14862002e33bb",
".git/objects/ea/f1b14ebb12396988d4d13ee12576d0a82ba230": "3fa271c153e80203ab75112a6a8c6278",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/350aac6f96cab84c3fb2dcc0e5b07178bd06e8": "34add9c86e71a0f9365f6ea25fdaaa80",
".git/objects/ed/e0ad584e0da80b9aec67c34bc6b073f5e7fdc0": "cd8d371db68479aea55eeebf5acc4484",
".git/objects/ef/357f18cb6bf63c53d4e9690ae02e7e763b22f2": "ebaf6d47c1c667ed8efe2a0fd8362134",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6f429c18a56e4e48c9328e195ec0fe65f952b6": "ced8a6f11afed9df12ac79cac43aa2f1",
".git/objects/f8/9122fcc79e3df162f3208da1e6c7453ec970f6": "3015d5431b5c7876acc93e61305f40bb",
".git/objects/fa/1e6f4cdd4accac4aa01a888b4562145d9469b8": "f294b2281b24307fa26245cc11a3b3d3",
".git/objects/fb/de89bc51ffe089a85a515ae655ed7037fb2db0": "24b4846cdc1e21be709f4f480ed09048",
".git/objects/fe/812906e12c60de7a409efe4b200d531bb8725e": "ecc4628d3e4c0abe3054eba4379fd173",
".git/objects/fe/af4ba9ed9457b615da4c1e59e9eaea03b9ef37": "06de69d748cc5ac26679aa25ccc2d8b8",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/fe/d667e7e8c191eda868df959c897a7d9b4d24b4": "523f53da4f6802029ef635798813ed66",
".git/ORIG_HEAD": "bd2cff39ec1f80189d505f92137d462f",
".git/refs/heads/main": "0a3f6e99f8a4a7b11f5f1818fd7f52e0",
".git/refs/remotes/origin/main": "0a3f6e99f8a4a7b11f5f1818fd7f52e0",
"assets/AssetManifest.bin": "486fedd6588f14b0e9e53c8260e881d0",
"assets/AssetManifest.bin.json": "3a16bcf8948d51ab48fd51c67593369c",
"assets/AssetManifest.json": "c9bcaf486278a6e7fa3629760d8f4b7c",
"assets/assets/fonts/arial.ttf": "fa3228aadde0db988e1822c2f736c131",
"assets/assets/fonts/arialbd.ttf": "858f5a50a4c3e5e6559a0c9b128eee60",
"assets/assets/fonts/arialbi.ttf": "b04eb00031bf4d82265b30855d7a314f",
"assets/assets/fonts/ariali.ttf": "97f1aa85e8ce271cd2a65759cb230397",
"assets/assets/fonts/ariblk.ttf": "ec8b4d9c0e68604dfbeda73d0213c82e",
"assets/assets/images/01.png": "18e82c0bb1121eb3bdb88fa40dc7a0cd",
"assets/assets/images/01p.png": "a2bc729904f51e288dbe23cb4926f351",
"assets/assets/images/02.png": "73786f94a7cd71997bda0ea6152f1fa9",
"assets/assets/images/02p.png": "f060469b5105a274fa1ff3567d0d9051",
"assets/assets/images/03.png": "5167b36c8e45cf71781ea8e463550165",
"assets/assets/images/03p.png": "65d3f5fbceb7183628caaaedf063395f",
"assets/assets/images/04.png": "c257b1776a1c50f0a49f026da2d6b680",
"assets/assets/images/04p.png": "db3faaa5c81d842dd931b18cef5530e8",
"assets/assets/images/05.png": "903d112ef75751674587bbb897cbcda1",
"assets/assets/images/05p.png": "ba3f34cf0816cd5ba5aa251e1dd736cd",
"assets/assets/images/06.png": "6b4fa62e7a3b002170ff29714b37fc1a",
"assets/assets/images/06p.png": "bac43151afe752b68b2785864c1d9f5a",
"assets/assets/sounds/black.mp3": "890eed47a5c6ffc696de49b2be4553d3",
"assets/assets/sounds/blue.mp3": "e09986cf576f09eac518f8eb37ed13b7",
"assets/assets/sounds/green.mp3": "5dd1fe15ddbb60c8af46e75167c66182",
"assets/assets/sounds/purple.mp3": "4fee46a3605ee55d5a5646326f980183",
"assets/assets/sounds/red.mp3": "95104d591261714365e5b8229d1e9e4b",
"assets/assets/sounds/vitoria.mp3": "d0e71fbf846ba1428b2899cd121671dc",
"assets/assets/sounds/yellow.mp3": "7ee3f37c1adfb509bb75e8c3980957ed",
"assets/assets/videos/bg.mp4": "aa904d302009266a836b9040508153e3",
"assets/assets/videos/cd.mp4": "a4e900bb52bdc6a16d04221a6f4e699d",
"assets/assets/videos/form.mp4": "b8257c32f32e4c7bdaed794f98920dc4",
"assets/assets/videos/intro.mp4": "a827a03495d76e3c835ed44cc0efc32c",
"assets/FontManifest.json": "81146b81bf0038cedffbc4cf0ddcdc76",
"assets/fonts/ariblk.ttf": "ec8b4d9c0e68604dfbeda73d0213c82e",
"assets/fonts/MaterialIcons-Regular.otf": "e70d1077ea70f0160b1ac7b1653fc95f",
"assets/NOTICES": "1f30458aaf9cf6d68e29c34debd00d53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3d1dcd6e91c92ebf51086ba94ed27b69",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c393eadc747089b332f1e08f18ce569e",
"/": "c393eadc747089b332f1e08f18ce569e",
"main.dart.js": "07128ed7b0e1f9443e594b61adf4100c",
"manifest.json": "0ae55f686b5fd54348e055ce1cbfb06d",
"version.json": "97d1d27c1d3be47fb7739d14823cd0f0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
