'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "734a04e4879beef6bd279b6a032a47af",
".git/config": "561a813bc8a43edd3d130016310e7731",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e02e68d054ce3a7739be636b04c598bb",
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
".git/index": "1d29bccde73a990b7f257404d4360aff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b8488946f321a2c833e0fc0b1b8a831",
".git/logs/refs/heads/main": "bdc3e8bcb03e5817d7f92ba0ac4cccba",
".git/logs/refs/remotes/origin/main": "53fde4f9b48a43acfb3ec90810a39808",
".git/objects/00/616e5a7fff9cd6d94ff48b5d811d47ae746b2c": "959529de45ccf6c264aa9dd815d26c8f",
".git/objects/07/50f72e388e0062c37e1877e0d73dfb52f0d00d": "efd8e1ca2d6d39de8e978a90c5ca8753",
".git/objects/09/88125d336656ea2a15950d4b7c4c89d18a9a40": "08a65d2820a2c9c26df2cd9d256c3ba4",
".git/objects/0a/e29cdac97b82d8279c9db82b99d67d829d8787": "658e957a5dad05e15611121bd9646f66",
".git/objects/0a/e3da7dafbdc22a3fd28a32eba5a83c425f19cd": "cee52f6b827f6b7e9cf0d5ff50e6038b",
".git/objects/0b/b4b6acdc1b1893a71ae02f662272f9ff9a784d": "b0c82efe745e3a2a005c5802164dcea8",
".git/objects/0d/911b921a4d890e14690884bbad00592a570cc0": "6ab6f20e7d53b2f80dd1f4d76c2297c4",
".git/objects/0e/aedf024879e7177a021e9ff78412dd03658bb4": "607e9763c270dbe288e907cbb850040d",
".git/objects/0f/1864176706030444f7adec2eabda8e41a48793": "430455ef7ce4b0e6ff02662b3ff123a6",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/e4c091279bd1f80ef63307727705b778a9602c": "3d8a4cd318f40d7f8624bfbcf95d8575",
".git/objects/11/c1e0aa4180fc1eb0353449bbf18e6baab133c3": "9ed63a20657e108b9dfd29470a4804c9",
".git/objects/11/ef4f45a29dc9efc9c84ad38e90cbdf55745dd8": "93b1f80cc137f7282bcb447393eb175d",
".git/objects/12/37426cf6be04262899ce31f09e9831f9196e47": "f60b1786b5d3b57dcffe328f5b344ea8",
".git/objects/12/503e2f7b0f7157139446cc103ccb8ad1ce7d4b": "0dfc429b46100b41df5230672f20d194",
".git/objects/13/3991c82fc7653580a90a48d89701fedddcd17d": "bf732c60984f97531da7536fce79bed7",
".git/objects/14/ffb5069a9d01a7e5cd3cec2059a1313d992400": "9c5604cd529f53c87588242a632a9f51",
".git/objects/15/8531befb59295476f990df78e38c495555eb07": "9d0b3b2cf8cffc85cec681ecd8df0932",
".git/objects/16/08c8e91db769c88e1e98a45c4c3cfee26885d7": "da7f7e793c6313574462cfe7f0864a30",
".git/objects/16/6417ef8de5e971f18d022db9189d422a935642": "b99c7bcb12ae195b5705d1630f597375",
".git/objects/16/9879343edd90f65285a882d2284fb381ecba39": "d4635ed1295ba2f0b6ffabb96dfe2b5c",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/4b86de8b16d59274f74f188bf89094f342aeae": "e296e2ea154bdf273b3fc6b783fe6080",
".git/objects/19/5208703df630a83529c34ffecf8a797c67da70": "8bb8b177535de596f3aa343f610e27dd",
".git/objects/1b/ca58aa6de2fda1c09c4a574353ed3e9a52d39e": "f3436fdd31d5a39b71e6bdcae70a8e71",
".git/objects/1d/ac8cba3790b1099df8c287b83c8651be7ddb02": "f271d23b6692d2d8cf2c2458ac20896f",
".git/objects/1e/e21fd7afd746bcc9b4c86cf206899c65f1de5d": "ce85c8f6d986ffea75c068f6e8b0a3b0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/e3fd24507598bf49a40e7de5ccd9dea1a0c743": "68941815bfb0d5f938c3ca61af9fec39",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/cb399952f3c35dc1719790277a538ea68fe65d": "a862e588560810ea0e3dea45ff321a10",
".git/objects/21/f66067e3793e0b95f36deb4f03010e456150ce": "5fc580b72d18e38da93f15395953b455",
".git/objects/23/c4ee5ceb89e2c07c573856d212aebe908f47bb": "7a5783ae9b78ce20df452637d9f70d91",
".git/objects/25/61926e14f77f5abb9e5f02368a498452c9ab51": "4ee4bc5ae2aa844b63fd862ad803952b",
".git/objects/25/84bc79886e669113f675ec3f2049d8b9e114db": "aa86cb48ed5ac5168b09daab48588503",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/8be71f462838b51df186919a465e42b652a3cd": "4ee643aa49543021095ca287b12cce97",
".git/objects/2a/5176acf20327884be10494c177a32b755a394a": "0514ef4922e7cb5e812a5c15abc88a99",
".git/objects/2a/62be78f18a0a1367fed7f404e6a8d08c156724": "457da4741e0480d0461b837e099fc96d",
".git/objects/2c/56bb574c1b0c895f4cb25d14d120bdb02a75d6": "9ac0762a1d8424e607485a1825faa733",
".git/objects/2d/73e27a1a1df83cacc0e9a88ffd5a2458c735ad": "0604d34be8226eea707b5d57d6a7e27a",
".git/objects/2f/defbc9e2b1de318d5e172666b968d793096c9b": "5e5a090ef9c44eb77734cddffe6e07c5",
".git/objects/30/e0601069e88edb25239dc0c1ac0eb552f31fc7": "537f69db30a488c939eceff54263ce13",
".git/objects/31/debb104c43bcb74c9d97f51ccb4cfbe35787bb": "101a5fbc6991efb7246c3dacda35fd34",
".git/objects/36/59c1f27d60dbd466d46cb1c86de963af11ce5b": "0722eae90685609b3591f27616d49f3f",
".git/objects/38/0199780fcaa2b03408c23703b953aee44d7921": "4c0b66d60207ecb10d97c430d69c324a",
".git/objects/38/1825e5de554eca92376841667e1275a5c5e376": "597a298c80e92aa93d934b375bc63555",
".git/objects/38/b8290eb889f8fc44431f24d6d2bf79f21fdc06": "1533590230dbaae6d744aeb50cdd1cc2",
".git/objects/39/93ea3ab1231f3497eea14110ece11983b08572": "41e0cdb553a621be57165b6ed1b4b4d1",
".git/objects/3a/e4c3731b8689c667601c7c418550f4f775b0e2": "e3e9e894efa462c0d7235d715de269f0",
".git/objects/3d/2479e416d19849de9e02a8e022b1b54447b48d": "ab2f45e5ff899a0610e473298c92a43b",
".git/objects/3e/d85f3552ab2d8ae2483274e8bf1e8ee81c7ce2": "fe64d49c33098e77b894165fe62fbead",
".git/objects/40/2ae6651ce18d320678742138d5406962138a61": "ca4f3ef37c1297977955e2e8592b1612",
".git/objects/42/81b6e6072ec30a7a213f1310c73e191a71558e": "bc0ab3217fc2c49f54f62d6b59a3d384",
".git/objects/43/a09927914aceaa7a0a2583822ce999fb521c74": "b350faec8344278366d4c64d55115a5a",
".git/objects/45/925649702ed423d4bd0c27fb5c0b61304a773d": "c20a313c8ac347ac9fc8660380282b7a",
".git/objects/47/018ca50a361fd96543309b43358ed455a20df4": "e3bc406656fd655e5e38eefcd4b95474",
".git/objects/47/bb827c99b596b5f371e224bb29990f0c5754cf": "16782661f635e80a18334d157420a9d5",
".git/objects/48/d5de8771672f4f2306562e71c9f889b245b844": "04d979a8a539f7bcc158e5c6a4937278",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/681d74ba3eaa77eebef402483c7f886beff716": "6ba6201d97f553e6ed51fa982417ba47",
".git/objects/4c/bf4e975ed3d8c9e991a9c8504991830eae90ad": "eb73f8c45d66c0222de5cbe09a587646",
".git/objects/50/aa504c8288faedc545fe61fe4e51935187dfbd": "a7528f29714cdc7aaeffee31fc54953e",
".git/objects/51/71406c33958e0782b4c64080ad23c9e5fe89bb": "380484f24c5d8038add106acfe4a7777",
".git/objects/51/ff97436e96cd70057778ea591114fadefbbd12": "4d91148246e34346807dc10ced935227",
".git/objects/52/634050386040a712852e9fd0a33972f887c2dd": "2d83e35f61f9014ae9431d227ded42b0",
".git/objects/53/903e778724fed26c1e85d2c58968449c24cfa0": "c169d2ca6f996b2f1f1abc8d3ee1ff61",
".git/objects/55/34b862910c7279185db7a3166dd61eab626192": "4028b5566e3705234c8a0c032ad3dcd3",
".git/objects/55/74a1fa7ef2c74c8801e15e56a9849824d2c710": "fdd616e268f69071aa9b0d0bddb133f3",
".git/objects/55/7b9de1e1e048138a089598c938b6d384859f3a": "64f86ae41185fee1adc7ac0d8f9beb95",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/8d967068901f69315a224719e4c17be6ec8b5b": "ba904cbd0695abee117ead1f8bb1ac9a",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/c468f741dc7b7470a2af63d4eed3d2db7b4b62": "c2e0be28758bccd141877c6035a257d6",
".git/objects/59/d8a3f960bf80280ada3c7a7e90e19aa512bdaf": "a6b0925a14c2602f42fbed618158bb66",
".git/objects/5a/3ea950e8c16234ebc66ce95375ba77bbd0af78": "7b64d36797a2404b61ec8bd77177ecdc",
".git/objects/5b/b88c0183728b7708703f4fb471aac16bbebf8f": "b04a3e16169e73feee34a03e1f0061e8",
".git/objects/5c/083acbc2d863fc73ea7059c19f095b8665c4fa": "ad9612f2e01ce5019ad2329bfd3699e3",
".git/objects/5c/c54e662dc0006698cc61be98cda60b6c5d9150": "9c88735cdd9c52ad28f584d41ba07758",
".git/objects/5c/ef95b2db071af1c84312885274ec7f76168c7b": "74431c0667f4cadf38c9afdad3dcfcd1",
".git/objects/5d/da7f9bd381c1393026489baf5a8422e344e7c0": "ef0b89696b80ad52299c443b145a9bab",
".git/objects/5e/0e4d0069160b0e58bdcc29d9928cd4a573252b": "c06cf3c21b341f942dbc50a9319f5ec0",
".git/objects/5e/119c346ff482b5003f4b575037eeaa185da0dd": "3ba98a6a10376d458c470cd85f9d0838",
".git/objects/5e/228239679d8c722ceb9911b8ab8e54c870cf89": "71cc7cee3f4f33114c9ad89466f48547",
".git/objects/5e/417873c04456ddc42a560d50085c56d7b29440": "f2205ecb55ad5dfcaea440cf7c9c53f6",
".git/objects/5f/7d099bdb80fb43162231722f39b4664ceb5257": "a60a7f70714a77759166243b6947b2f0",
".git/objects/5f/e513cd3961c9a33bce93694dad00acebc9220e": "1b4ecb8199aa9ac4c185bc582cbd5008",
".git/objects/61/3a9c7013f9f47a47bdf65c5f33b71fc492049a": "e997b3e501d0c08efe00f4f009a63818",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/234a0e402c1982731a362a2f68b838938d1822": "d38413a15ae4c43e2869edb30963461f",
".git/objects/63/264b8cdc5970086f02b7b35dce4dfd9ddadd5c": "27ea46a60fd233be9383c91995cfc03c",
".git/objects/64/3714fa6e4b019534f43bd971b9ceae1a847fdb": "2ee11768f478476a7e6722ba9e6a08b7",
".git/objects/64/c70a45808fc96fe59dce69f617c9d9e240838a": "1fbda50c896a439a2aeeeb33d7167d65",
".git/objects/64/f5683814ffdb4bf3faf3da49945c52a9031c49": "993ad7f7184e39cf39bfdfd4cfb2a3a9",
".git/objects/67/bd952a16bb57670f8b1a2ca9d37a2bbd5c8252": "1e125a29f3703d6bb9e096e998ae1b81",
".git/objects/67/fff7f31e05181efb7f3d54d072f55802a4990e": "72ed1c4936c5f93f8e0e593049918fcb",
".git/objects/68/b57003944b67da277d687ba1025ca23dbdd652": "a5ea8956c1dd23ca20c140605cdf6e34",
".git/objects/68/bd96c99bee36d20106d904587127613e20ace8": "196129a165d837ed9be0de93e211f4dd",
".git/objects/6a/1fa0fa035616916b6ae4faaa8a95d748035a95": "29ed0d257f9b0291d3e102d1a8947146",
".git/objects/6b/fb5dc21e2d55959dccb36908c2ae5042da5204": "9f189397b4dddc625bd5e65567b24714",
".git/objects/6d/47a032fcc0ef34f045f4ab4eb9d9ffd145b3bd": "899a54b252670a5f39ef4abf62efd8d9",
".git/objects/6d/a1c726d9c8e9261f35c32f7887d0697324a5fd": "daa45464a6cc3d2bf201dc12ef944c7b",
".git/objects/6f/587e2cb2fe0d3b17dccfa5c06db53b7b9234af": "742d86d0a1d8230128256bb5c800d521",
".git/objects/70/19b90c6dd032039df561715ee4e625b8e6cc16": "3652bc471972b7eb818ec0637dcf0552",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/0b8bdfe244d50889c7e0a2ce0993cff68cec9d": "79016b7c688cba73264d0147b291f121",
".git/objects/72/bda4471205374cec2ad7cb3f2e3353d6555ab7": "4b883e9c98a6a246943be0cb4f83db40",
".git/objects/75/b8283d342edbda532ca05fb3b6d05d09205e70": "5683fbea404d6ae83af0ba3c6f09fa6f",
".git/objects/76/1dbfeed61ca481d5b64d305bae84e1d0680b2d": "3d727fed90e8085a47d4f1419761feff",
".git/objects/76/f350a843994f2a0e8ecd3ab1a0911383e8b95b": "d7b1a93e6e0ad7e1eacfe457de5bdbe3",
".git/objects/78/c284f0c196021585359c2de74451f851fc8efe": "8a8defd3130b1cc898d597c77457a00d",
".git/objects/7b/0219d6f5cfbaf75993ab7dcbc0cc206b26a5e2": "dc8dc07d282d51725fe08539034c932a",
".git/objects/7b/555a33bc4af533ad92826ed06a3b7550559a09": "a98beef62adbc1613ba7934c41ff0337",
".git/objects/7e/5025fef6dd62d4f1eca4079fe2d3670811c901": "29efaab46e2f710add1bf51820b53976",
".git/objects/7e/7c88430e57802296ea51b15aeba788770ceeca": "24d48843093e5d19e743b81bbbcc8d85",
".git/objects/7e/ca60a3b125c00f0dd9ca468dd92dffd2a3fd08": "d2b9a0598ac23a02dcdde27c1714885e",
".git/objects/7f/2a56f3f7a7bd72c818861ae9b2b73b9737dac0": "1b860c7d802d51d46102b35ba500796c",
".git/objects/7f/520ec835303f35a872e919a4ef64517c062599": "97c2b8d97a112f16f5625519fc618b0c",
".git/objects/7f/6e1e098756a5224f97b58c87dbe72b31b122ed": "a9db2b2e49b9c420556a4f6f1418ccda",
".git/objects/80/a94c52bd19d12125cf4b247f69544535ea4b4c": "902ec85f3316945274ac2fccf1762653",
".git/objects/81/9021659a57df5f3ce5ee7ceb5f387fe9bcc3e3": "1685362b8f11741df9e12fe989a9d18e",
".git/objects/81/be2cc8b218c2e82edddbb3b2a1ee6b3c5459d9": "dfb70a73659ed5ad2b58ec64361b13f0",
".git/objects/82/274d5254ad4162b5fe3d943d68abc4b09f3c81": "50d9ee749a86829ab37db4788f7b2475",
".git/objects/82/b5fbb375504b11d5f508249e123ff77ae9ab37": "247b916e1eca5c8f2743c72bbb926174",
".git/objects/84/3c0a98763e345e3f7bbe00edba1276dd04ea20": "919ae74dfa5176b2b861eebfc8b1848e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/82d94623e575a4ecc9586a35fc909dff37fb2c": "0d4bde48638b5a89ca0d6460a09067bb",
".git/objects/87/5b29c07588b4dee33641295912637fe300d47d": "b1fd57edcaf3b465d4696be09eb93955",
".git/objects/88/6deecad1d932ef693db56716705628771d982a": "b40b2298b4d0273bcab31a287143135d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2eef680459b9104674dbe93591c0915103ba1a": "f7b22094477e958c96384b464a662623",
".git/objects/8a/a25f303104f7b23094182aae9b0cc0621a9693": "2ea138772fdbd9ea2e791765c14f334c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/aac630e58a4bb82e2d55011aeb57cf5603da17": "08e58ae43c94130ef1e4ec6980cdd8ea",
".git/objects/8a/f3dba6a209e2638f739e2465aa2e55569ab60e": "80f246a36a98954477a5d06f5eb51e63",
".git/objects/8e/62c51e90fff0a81479b57a5d52ff38988ebdd1": "107dc486a65fa0461958199a5c7ff0e6",
".git/objects/90/b499fed76e96db1b42d76e295924d170c46037": "9aefc2e3a6de6339067166804b709242",
".git/objects/91/1fb411ade9b29dccc2018650f09408cb9d3c1d": "b53b1284d71d907a81e6896fe186610a",
".git/objects/93/a1e791edcfa03c3f0faeb2ac3ca2a61c1da3b1": "4af8cdbd09e3188f399b961226c2e92a",
".git/objects/94/0d4c6653b51396b51ac70632a25229da531490": "43c515283eca3d20e493eaf84958b2ef",
".git/objects/94/7a7cece2023a5e8b192117365d5640577e0e50": "60c48dd8259afeb679d34e696ccfc6fb",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/3529ef59a94d1a1012adff4e417eaf3956a444": "4ebae1030851d15e08db922585917899",
".git/objects/97/8e17e9dd9c83adad1c840e9538f0697ba6a253": "241bdc117c4c46b53f026add33883a9d",
".git/objects/99/b483047a6dc01c105690813fb990d90e88b02c": "c08ad32c828799cd2cc99354b623d601",
".git/objects/9a/28ab543b6b85cd0495534ea945980075f9bbb3": "73c2de0f6de6d6dd74c68bf2a4a16797",
".git/objects/a0/6f6862c7939d7ad832ab52951e2a33903e54e2": "446753d4b1583f8a58d4174b54cce73c",
".git/objects/a1/ed337548af3bf7ab671d590486fbc2a696ea76": "15dec0a566c53831fb672060b050a7fc",
".git/objects/a2/a8676670863e8a2598c8a3d78ee1cddae6a9b9": "09422e5d54085690a5e041db8480dbb5",
".git/objects/a2/c7a3c418db8322bfa888533ea391a92fe53b66": "f2e335110e1f3fee31ef1c9edd720f50",
".git/objects/a4/c3724966750ea4dd2718a938236ab73678f4d8": "a47f65770dbc78470f238150db6b6118",
".git/objects/a6/037e6865db7dcd220a631e7b9f4a8eb6417c42": "46cf6c7e317f9aa308f35b1ce6886419",
".git/objects/a7/4f25eca907a426bf306e40bbd85854acf8aafb": "b627fbca6eabc2c9e28875c39478b0cc",
".git/objects/a8/2f9bda5988e37fdda690bc672322034604afd6": "b6f7a210a1373fc0b2be11f7b5855e10",
".git/objects/a9/4a8fec1eddb013d3e4a304ffc121194b1bfa1b": "b3e5acb6b3567c18282c856b188ede42",
".git/objects/a9/7834dfbe4b0a505dbb657061cfd47dda68f7c6": "dc160a8314600d008d20f107492610a1",
".git/objects/aa/5f21c553b6884773f3e90dcb37f551ff820faf": "14c629fe36b21da7bf113698fedaf636",
".git/objects/ae/102a8c1add0b20493ec41b20dc3e7226c5ba7b": "6c16b7d5b8c4f7e4b6d80e08b1ca7358",
".git/objects/ae/5387c1db40389656a896be8d181924a1f9cffb": "26478f6f801ed9e703e5a286ab63f863",
".git/objects/ae/7c3c986243cfe1a2849a94102555ec8a7eefd2": "17dfd20a0491d203bfa5be05261ead24",
".git/objects/af/dc9fcac323899b8c1b7ad200ba67e0dfe48654": "7914984d29d6656a0a81a6348022eeb4",
".git/objects/b1/bc9d171c54199509d2ebde01c7a917f0f0ec4f": "cce7782b4e415981cb198adda08c5e0c",
".git/objects/b2/76ce3e2ac8ce87068b970ab09bb8f588103b0f": "591958c4c7023506bc1624d2770c0792",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/06c29c30c97d01e46381b76b12b0c1864a8b38": "9cd22d3ba5821367294a1af059f96a3f",
".git/objects/b5/72e1b238162120664eb10087a0b61118d6ea83": "5d349a5a16b759163ac5b5be3380a6a4",
".git/objects/b5/b9615e8de9c743f74da009d95f68b05071e4f0": "915f78819378257b2d0a3ca93bdeb002",
".git/objects/b7/46c3bbd0d6a3ae092a08d01fc76fbc8c33c13d": "ac80ea510cd6a4b40cb46c76951478c4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5995e80b5be60a04b2907a3a9fad95b893c0b3": "734fe11fa10b15919890898b3b720b0e",
".git/objects/b7/88fe0f993e0ad2553ef32dc93575bd2ca300be": "390e5a266e844a9573d2a2dc666007ae",
".git/objects/b8/c077a5b7fc22519602655cd7527d0d8448887d": "6afd38dd580852a0fd2e625d6077e804",
".git/objects/b9/25d26f08f0cd94d3ddea4ea19a1add601eca91": "16b4e89982bee03d5681a2e19ede320c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8b0a29ec109368888786785c611dc9d284ac71": "c3f80155b5bf501091c9b4803c56e0d1",
".git/objects/bb/8413114001fc8b6887ec2722d67d574f67797e": "30b8fd8ac2b435f0291ae71f5b2c073c",
".git/objects/bc/efa6ff62d979293092d32ceb45345f8a493f9b": "0d84fb2430b4777431e7b9fcb302b084",
".git/objects/bd/71b0eafd62604d5de211fdbf21c6ded8b9a223": "e6bda10589ae7ea32a2324d43acfb855",
".git/objects/bf/86fc9887ca7c3682b63a00a9469461907696b3": "1e8cbef482cecf12e46ae3bdfd2c9841",
".git/objects/c0/cc3b10fb80b66d599b86ff2d2fb2735fc65cec": "4fc840a1d3c54aa6e7836dbd3cde5a04",
".git/objects/c0/f7a788c38dcd1b9fc2555fe37248e5c86f12d8": "8200681cf5c7c40f0f5aa49c2603584d",
".git/objects/c1/35a5cffdf9b9875759da43aaab62846b9e0f22": "a6271e71398f3ee74be517d08dfc7dce",
".git/objects/c1/cbe1ce12d045027efd816f500cad521a1e2347": "181a0b9b0d5ba4f079b926ef06e06b18",
".git/objects/c3/4693aceb8810d11f769c6218804f01f7bb0099": "3f3c4b84d5acfbb23a4247a11f0c16e3",
".git/objects/c3/670eea13f3deae853ea6a5dc0ce4a5dfbce8a8": "c8b43b80eee6ce263b6e09a1d6357ac3",
".git/objects/c4/cd9caa5523b67c9813d6a85ddf6ddc99de2dde": "390b4e5259dafc9729a0c06f1e6eb8d1",
".git/objects/c6/4062f31a6ffc6a39b0c9c656b99e6d48ad9327": "2a3b94aa2e2da672cfda6115b50bad8b",
".git/objects/c6/c021ba348fdc79a12f55450ae7a0514025ccdf": "e3d07738926e4f5510edead969439888",
".git/objects/c7/b72b822f95fb510cad174fb2b4a2964923b3da": "97ec58293490f7bf0f25fc62e9d2db31",
".git/objects/c9/0c8a144b4032197426dfcbeb91e6cee8943b86": "17a2cd30fc3986401812432bc083ed29",
".git/objects/c9/8658a5b63b621b8a42ba1515cc39ca098243fc": "45f8fc5464593c1c00344ffb21de000b",
".git/objects/c9/adeed971cc5756b93dc758ecebf39af420ab90": "3ba9c546e925a748a93e52dad9de6d57",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/b14ffb2bb0da708f1f762af8caf0786e31eddf": "272f040ada3e3a9070100bea69dd9def",
".git/objects/cf/9ee98ccbbfd9088d0d7d02682f3d89d8a1d0ce": "3a0b1711d1f99e7132cce3fce67df513",
".git/objects/cf/de4d35e2d7e226dc415a843043bbe626e42bab": "160f5cf52029b8df7e754a8d2fa53166",
".git/objects/d0/02b0cc0846d2f018dc0fd522169ee6e29db662": "d1de69cf45fe2d0a0f82fddc4b7f601f",
".git/objects/d0/037e5228260136fe430bb6009a3010a0c9ef8a": "a33deee9f25f07233b1c6a0001b3e4b5",
".git/objects/d0/699677221e565dc07e09bee0d2b508faa473a1": "953e29453810d20d6bcdcd954bd01d63",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/28560f2cce60dfb23e9ab28cf534091f540408": "3a0e3a8a2cc276a26a8bd0af120e34f8",
".git/objects/d2/618e1b082890fdbe016d527f9ea59d5585aa7c": "a0f11154cb45e2e9dd6f261805bdb2c3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/a03b0933a637bf06c02a2772f7f591d67b3bea": "4a5244ab4517c3cde8f1e7da02f9a59f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/76ffbcc86c9f18e06678318b30f80ddbb58430": "18d278c89acc25ca44f53266f1cfed88",
".git/objects/d7/8c73a28e3a5971059e075cfe6be162daf943de": "2d80753399e4cdab45c188608f62a622",
".git/objects/d7/f88d19a94748493edd5f5fb5698ba8d029862e": "e3238e6255f913f37fdcc5a50b1a3e53",
".git/objects/d8/7f301b395bf80b3e026040d90e5112f0eaccb5": "13bdab4b53d68f05799e865215014e54",
".git/objects/db/955bc755c385c41426f57cc96415ace121d03a": "d6c0c0d4d2eb85ebb2fa5e34d4f5518b",
".git/objects/df/40e2b1a2b5385cb50b6a18d7f18896fca8aa59": "752a7e9b290e4aafd9c1b09800e6f6a1",
".git/objects/e1/7606546f4c163571254fd2d87fc131aec54338": "89eb06689928a7c56dba41b8fd325487",
".git/objects/e3/7ae01359d25dfa3c80f98ef0581fe9ae52ebaa": "387b7615c936dd8a15667ca174dc5a15",
".git/objects/e3/94af71f87d60cfb8f78ebba6078588cc428c5f": "0417de248b32c3ceefd3215df17fa901",
".git/objects/e7/ae345aa00723d337f807324143f8548f11b235": "a5c538abbdf311942bf6822c89ad5a77",
".git/objects/e8/9854f3e40f18ef3f12a226f8faf68323186997": "da6aa4f2caee47f7dce0ea524bd1c849",
".git/objects/e8/bd8b2e1bdec63694225088c5b22d3ae36e1c19": "3c517209743fcd022f9e7a78087af0d3",
".git/objects/e9/471e9cfc8158d4e9f298e553149f4ecba55b3a": "9db77975b738011b214c3bd9275c26b7",
".git/objects/e9/a80c9e03b90e88a88196f9aa92c3e019aedc70": "16b4f8fc55540810965d2978db4dcd9e",
".git/objects/e9/f21edaacc8be0cb219ffb031c03f2d86e546c7": "3b81ddd69f58ab8270b31a32c6ec6ce4",
".git/objects/ea/84ce5e57cd4a8b06657544f92ba3e2a1c76491": "8fb88230c7fe45f835e17917c4013498",
".git/objects/ea/8ed2783df121538700a09784d8f45b66ac1625": "3450b68513eb87a71ce14862002e33bb",
".git/objects/ea/f1b14ebb12396988d4d13ee12576d0a82ba230": "3fa271c153e80203ab75112a6a8c6278",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/350aac6f96cab84c3fb2dcc0e5b07178bd06e8": "34add9c86e71a0f9365f6ea25fdaaa80",
".git/objects/ed/e0ad584e0da80b9aec67c34bc6b073f5e7fdc0": "cd8d371db68479aea55eeebf5acc4484",
".git/objects/ee/9bbe6741ba607c6fab036226508833d70e5f25": "ff5b8a75fec62314dbbb49fd6d123099",
".git/objects/ef/06c000f5c11828bd001105888d6b75172d9e99": "28cf9cb05bb86487cb47fe536320c3bd",
".git/objects/ef/357f18cb6bf63c53d4e9690ae02e7e763b22f2": "ebaf6d47c1c667ed8efe2a0fd8362134",
".git/objects/ef/a7e95bbeaa0a6b9c4b602e95af968f8e76cd8d": "1c05d437eac79e7651442878c132d02e",
".git/objects/f1/f23006faaf7fe8fd0e218cb42b1084fcd5abe4": "47b1311c08ea20267f2f80e9a5192eb4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6f429c18a56e4e48c9328e195ec0fe65f952b6": "ced8a6f11afed9df12ac79cac43aa2f1",
".git/objects/f2/db96c0bb5cd9719954729bdf3eb6f06ee39347": "f89e1b7d1991224beff3b08017a909a9",
".git/objects/f3/3cc98089873312a34478a0426a8bc85f459299": "0b5d337f5b80a0a93172ae137bd717a2",
".git/objects/f3/6245e94b9ae567757d05e2b87c1302ca68751a": "142dc0e92b8e7ee203354ff04ad60066",
".git/objects/f5/088ce3128fe27cb14eeca132b3368e97615dc8": "e88705cdeb32362c6e2cdf9a372bc24e",
".git/objects/f6/29da33c016a792ee918dc3d8381a09c0abfad9": "42d11cab80fa0c8cb4feef14834fc94c",
".git/objects/f6/e7e8eb42686de6866c73968cb86592658f34b9": "c971a0c82fb02c279180cba497d6ebf6",
".git/objects/f7/2afb0cf846db94a0799f5a07d10799a70392c2": "d0547a5f88dd16dcd2a35e34617a5c63",
".git/objects/f8/9122fcc79e3df162f3208da1e6c7453ec970f6": "3015d5431b5c7876acc93e61305f40bb",
".git/objects/f9/b266ea86766610561c94422699c886ac334678": "63898630f8065b9435e1340b83fc344f",
".git/objects/fa/1e6f4cdd4accac4aa01a888b4562145d9469b8": "f294b2281b24307fa26245cc11a3b3d3",
".git/objects/fa/27317e48a075d1a55875a8273ce084c93201b1": "ddf1e1ebb8a635370e64e00af573aa01",
".git/objects/fb/de89bc51ffe089a85a515ae655ed7037fb2db0": "24b4846cdc1e21be709f4f480ed09048",
".git/objects/fc/39467072e55401f917b30a3ecf1d81e02becda": "1f9cbf62019f5a6dbb7a321ec162fcb3",
".git/objects/fc/ef02f74fed028acdede803b7fa94fcec86cf5a": "7065926a6f6c3bb0b1d10df40048a419",
".git/objects/fd/49189b00bc34bdba7ac99e908840ab154fc720": "f8e3656ef3f2b56f6af411f8157d5aa8",
".git/objects/fd/85154bd892cb73b5097380182647be175b1e2d": "a41f77dfd8f3c66abfcfd409d67bf739",
".git/objects/fd/b1b6ea0d6e9c5004b978919b4b02bf2733c413": "d2a74b30e29cac3502b1f45ea68471ac",
".git/objects/fe/812906e12c60de7a409efe4b200d531bb8725e": "ecc4628d3e4c0abe3054eba4379fd173",
".git/objects/fe/af4ba9ed9457b615da4c1e59e9eaea03b9ef37": "06de69d748cc5ac26679aa25ccc2d8b8",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/fe/d667e7e8c191eda868df959c897a7d9b4d24b4": "523f53da4f6802029ef635798813ed66",
".git/ORIG_HEAD": "9db646f392fce7d27dc515a51cafdaf3",
".git/refs/heads/main": "3b4bb68a0f255af94b1ba8a737fca545",
".git/refs/remotes/origin/main": "3b4bb68a0f255af94b1ba8a737fca545",
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
"assets/NOTICES": "0806168cdcb1ee91dabda0db9a72bd39",
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
"flutter_bootstrap.js": "6f48b36969fc159ff40b927f417e1e2a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c393eadc747089b332f1e08f18ce569e",
"/": "c393eadc747089b332f1e08f18ce569e",
"main.dart.js": "a26e06014a142b969de0db602e61f4b0",
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
