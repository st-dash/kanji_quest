// review-data.js - 漢字クエスト 1〜4年生 漢字おさらい データベース

const REVIEW_GRADES = [
    { grade: 1, name: '1年生の漢字', icon: '🌱', color: '#4fc3f7', enemy: { name: '一年生の子だぬき', sprite: '🦝', maxHp: 400 } },
    { grade: 2, name: '2年生の漢字', icon: '🌿', color: '#66bb6a', enemy: { name: '二年生のからくり人形', sprite: '🪆', maxHp: 400 } },
    { grade: 3, name: '3年生の漢字', icon: '🌳', color: '#ffb74d', enemy: { name: '三年生の砂の精', sprite: '🧞', maxHp: 400 } },
    { grade: 4, name: '4年生の漢字', icon: '🍁', color: '#ba68c8', enemy: { name: '四年生の霧の使い', sprite: '🧙‍♀️', maxHp: 400 } },
];

const REVIEW_KANJI_LIST = [
    {
        "id": 1,
        "kanji": "一",
        "grade": 1,
        "onyomi": ["イチ", "イツ"],
        "kunyomi": ["ひと", "ひと(つ)"],
        "meaning": "数の1をあらわす",
        "compounds": [
            { "word": "一月", "reading": "いちがつ", "sentence": "一月はとても寒い。" },
            { "word": "一つ", "reading": "ひとつ", "sentence": "りんごを一つ食べる。" }
        ]
    },
    {
        "id": 2,
        "kanji": "右",
        "grade": 1,
        "onyomi": ["ウ", "ユウ"],
        "kunyomi": ["みぎ"],
        "meaning": "みぎの方向",
        "compounds": [
            { "word": "右手", "reading": "みぎて", "sentence": "右手でペンを持つ。" },
            { "word": "右側", "reading": "みぎがわ", "sentence": "右側を歩こう。" }
        ]
    },
    {
        "id": 3,
        "kanji": "雨",
        "grade": 1,
        "onyomi": ["ウ"],
        "kunyomi": ["あめ", "あま"],
        "meaning": "空から降ってくる水",
        "compounds": [
            { "word": "雨天", "reading": "うてん", "sentence": "雨天でも学校へ行く。" },
            { "word": "大雨", "reading": "おおあめ", "sentence": "大雨でかさをさす。" }
        ]
    },
    {
        "id": 4,
        "kanji": "円",
        "grade": 1,
        "onyomi": ["エン"],
        "kunyomi": ["まる(い)"],
        "meaning": "お金の単位やまるい形",
        "compounds": [
            { "word": "百円", "reading": "ひゃくえん", "sentence": "百円でパンを買う。" },
            { "word": "円い", "reading": "まるい", "sentence": "この皿は円い形だ。" }
        ]
    },
    {
        "id": 5,
        "kanji": "王",
        "grade": 1,
        "onyomi": ["オウ"],
        "kunyomi": [],
        "meaning": "国をおさめる人",
        "compounds": [
            { "word": "王様", "reading": "おうさま", "sentence": "王様がお城にすむ。" },
            { "word": "王子", "reading": "おうじ", "sentence": "王子はやさしい人だ。" }
        ]
    },
    {
        "id": 6,
        "kanji": "音",
        "grade": 1,
        "onyomi": ["オン", "イン"],
        "kunyomi": ["おと", "ね"],
        "meaning": "耳に聞こえるひびき",
        "compounds": [
            { "word": "音楽", "reading": "おんがく", "sentence": "音楽の時間が好きだ。" },
            { "word": "足音", "reading": "あしおと", "sentence": "廊下で足音がする。" }
        ]
    },
    {
        "id": 7,
        "kanji": "下",
        "grade": 1,
        "onyomi": ["カ", "ゲ"],
        "kunyomi": ["した", "しも", "さ(げる)", "さ(がる)", "くだ(る)", "くだ(さる)", "お(りる)", "お(ろす)"],
        "meaning": "下の方",
        "compounds": [
            { "word": "下校", "reading": "げこう", "sentence": "三時に下校する。" },
            { "word": "下", "reading": "した", "sentence": "つくえの下にねこがいる。" }
        ]
    },
    {
        "id": 8,
        "kanji": "火",
        "grade": 1,
        "onyomi": ["カ"],
        "kunyomi": ["ひ", "ほ"],
        "meaning": "燃えているもの",
        "compounds": [
            { "word": "火曜日", "reading": "かようび", "sentence": "火曜日に体育がある。" },
            { "word": "花火", "reading": "はなび", "sentence": "夏は花火を見る。" }
        ]
    },
    {
        "id": 9,
        "kanji": "花",
        "grade": 1,
        "onyomi": ["カ"],
        "kunyomi": ["はな"],
        "meaning": "きれいに咲く植物",
        "compounds": [
            { "word": "花見", "reading": "はなみ", "sentence": "春に花見に行く。" },
            { "word": "花", "reading": "はな", "sentence": "きれいな花がさく。" }
        ]
    },
    {
        "id": 10,
        "kanji": "貝",
        "grade": 1,
        "onyomi": [],
        "kunyomi": ["かい"],
        "meaning": "海にいるからをもつ生き物",
        "compounds": [
            { "word": "貝殻", "reading": "かいがら", "sentence": "海で貝殻を拾う。" },
            { "word": "貝", "reading": "かい", "sentence": "貝のスープを食べる。" }
        ]
    },
    {
        "id": 11,
        "kanji": "学",
        "grade": 1,
        "onyomi": ["ガク"],
        "kunyomi": ["まな(ぶ)"],
        "meaning": "勉強すること",
        "compounds": [
            { "word": "学校", "reading": "がっこう", "sentence": "毎日学校へ行く。" },
            { "word": "学ぶ", "reading": "まなぶ", "sentence": "たくさんの事を学ぶ。" }
        ]
    },
    {
        "id": 12,
        "kanji": "気",
        "grade": 1,
        "onyomi": ["キ", "ケ"],
        "kunyomi": [],
        "meaning": "空気やこころのようす",
        "compounds": [
            { "word": "元気", "reading": "げんき", "sentence": "今日はとても元気だ。" },
            { "word": "気持ち", "reading": "きもち", "sentence": "気持ちがいい天気だ。" }
        ]
    },
    {
        "id": 13,
        "kanji": "九",
        "grade": 1,
        "onyomi": ["キュウ", "ク"],
        "kunyomi": ["ここの", "ここの(つ)"],
        "meaning": "数の9をあらわす",
        "compounds": [
            { "word": "九月", "reading": "くがつ", "sentence": "九月から二学期だ。" },
            { "word": "九つ", "reading": "ここのつ", "sentence": "あめを九つもらう。" }
        ]
    },
    {
        "id": 14,
        "kanji": "休",
        "grade": 1,
        "onyomi": ["キュウ"],
        "kunyomi": ["やす(む)", "やす(まる)", "やす(める)"],
        "meaning": "やすむこと",
        "compounds": [
            { "word": "休日", "reading": "きゅうじつ", "sentence": "休日は公園で遊ぶ。" },
            { "word": "休む", "reading": "やすむ", "sentence": "早くねて体を休む。" }
        ]
    },
    {
        "id": 15,
        "kanji": "玉",
        "grade": 1,
        "onyomi": ["ギョク"],
        "kunyomi": ["たま"],
        "meaning": "まるい形のもの",
        "compounds": [
            { "word": "目玉", "reading": "めだま", "sentence": "目玉焼きを食べる。" },
            { "word": "玉", "reading": "たま", "sentence": "丸い玉をなげる。" }
        ]
    },
    {
        "id": 16,
        "kanji": "金",
        "grade": 1,
        "onyomi": ["キン", "コン"],
        "kunyomi": ["かね", "かな"],
        "meaning": "お金や金属",
        "compounds": [
            { "word": "金曜日", "reading": "きんようび", "sentence": "金曜日が楽しみだ。" },
            { "word": "お金", "reading": "おかね", "sentence": "お金でお菓子を買う。" }
        ]
    },
    {
        "id": 17,
        "kanji": "空",
        "grade": 1,
        "onyomi": ["クウ"],
        "kunyomi": ["そら", "あ(く)", "あ(ける)", "から"],
        "meaning": "そら、なにもないこと",
        "compounds": [
            { "word": "空気", "reading": "くうき", "sentence": "朝の空気はきれいだ。" },
            { "word": "青空", "reading": "あおぞら", "sentence": "青空の下で遊ぶ。" }
        ]
    },
    {
        "id": 18,
        "kanji": "月",
        "grade": 1,
        "onyomi": ["ゲツ", "ガツ"],
        "kunyomi": ["つき"],
        "meaning": "夜空にうかぶ月、1か月",
        "compounds": [
            { "word": "月曜日", "reading": "げつようび", "sentence": "月曜日から学校だ。" },
            { "word": "三月", "reading": "さんがつ", "sentence": "三月は春が来る。" }
        ]
    },
    {
        "id": 19,
        "kanji": "犬",
        "grade": 1,
        "onyomi": ["ケン"],
        "kunyomi": ["いぬ"],
        "meaning": "ペットのわんわん",
        "compounds": [
            { "word": "子犬", "reading": "こいぬ", "sentence": "子犬と公園で遊ぶ。" },
            { "word": "番犬", "reading": "ばんけん", "sentence": "番犬が家を守る。" }
        ]
    },
    {
        "id": 20,
        "kanji": "見",
        "grade": 1,
        "onyomi": ["ケン"],
        "kunyomi": ["み(る)", "み(える)", "み(せる)"],
        "meaning": "目でみること",
        "compounds": [
            { "word": "見学", "reading": "けんがく", "sentence": "工場を見学する。" },
            { "word": "花見", "reading": "はなみ", "sentence": "春に花見に行く。" }
        ]
    },
    {
        "id": 21,
        "kanji": "五",
        "grade": 1,
        "onyomi": ["ゴ"],
        "kunyomi": ["いつ", "いつ(つ)"],
        "meaning": "数の5をあらわす",
        "compounds": [
            { "word": "五月", "reading": "ごがつ", "sentence": "五月は運動会がある。" },
            { "word": "五つ", "reading": "いつつ", "sentence": "いちごを五つ食べる。" }
        ]
    },
    {
        "id": 22,
        "kanji": "口",
        "grade": 1,
        "onyomi": ["コウ", "ク"],
        "kunyomi": ["くち"],
        "meaning": "食べたり話したりする所",
        "compounds": [
            { "word": "出口", "reading": "でぐち", "sentence": "出口はあちらです。" },
            { "word": "口", "reading": "くち", "sentence": "口を大きく開ける。" }
        ]
    },
    {
        "id": 23,
        "kanji": "校",
        "grade": 1,
        "onyomi": ["コウ"],
        "kunyomi": [],
        "meaning": "学校のこと",
        "compounds": [
            { "word": "学校", "reading": "がっこう", "sentence": "毎日学校へ行く。" },
            { "word": "校門", "reading": "こうもん", "sentence": "校門の前で待つ。" }
        ]
    },
    {
        "id": 24,
        "kanji": "左",
        "grade": 1,
        "onyomi": ["サ"],
        "kunyomi": ["ひだり"],
        "meaning": "ひだりの方向",
        "compounds": [
            { "word": "左手", "reading": "ひだりて", "sentence": "左手で字を書く。" },
            { "word": "左右", "reading": "さゆう", "sentence": "左右をよく見る。" }
        ]
    },
    {
        "id": 25,
        "kanji": "三",
        "grade": 1,
        "onyomi": ["サン"],
        "kunyomi": ["み", "み(つ)", "みっ(つ)"],
        "meaning": "数の3をあらわす",
        "compounds": [
            { "word": "三月", "reading": "さんがつ", "sentence": "三月は春が来る。" },
            { "word": "三つ", "reading": "みっつ", "sentence": "みかんを三つ買う。" }
        ]
    },
    {
        "id": 26,
        "kanji": "山",
        "grade": 1,
        "onyomi": ["サン"],
        "kunyomi": ["やま"],
        "meaning": "高く盛り上がった土地",
        "compounds": [
            { "word": "山道", "reading": "やまみち", "sentence": "山道を歩いて登る。" },
            { "word": "火山", "reading": "かざん", "sentence": "火山から煙が出る。" }
        ]
    },
    {
        "id": 27,
        "kanji": "子",
        "grade": 1,
        "onyomi": ["シ", "ス"],
        "kunyomi": ["こ"],
        "meaning": "こども",
        "compounds": [
            { "word": "子ども", "reading": "こども", "sentence": "公園に子どもがいる。" },
            { "word": "女子", "reading": "じょし", "sentence": "女子チームが勝った。" }
        ]
    },
    {
        "id": 28,
        "kanji": "四",
        "grade": 1,
        "onyomi": ["シ"],
        "kunyomi": ["よ", "よ(つ)", "よっ(つ)", "よん"],
        "meaning": "数の4をあらわす",
        "compounds": [
            { "word": "四月", "reading": "しがつ", "sentence": "四月に入学する。" },
            { "word": "四つ", "reading": "よっつ", "sentence": "クッキーを四つ食べる。" }
        ]
    },
    {
        "id": 29,
        "kanji": "糸",
        "grade": 1,
        "onyomi": ["シ"],
        "kunyomi": ["いと"],
        "meaning": "細長いひものようなもの",
        "compounds": [
            { "word": "毛糸", "reading": "けいと", "sentence": "毛糸のセーターを着る。" },
            { "word": "糸", "reading": "いと", "sentence": "糸で人形を作る。" }
        ]
    },
    {
        "id": 30,
        "kanji": "字",
        "grade": 1,
        "onyomi": ["ジ"],
        "kunyomi": [],
        "meaning": "もじのこと",
        "compounds": [
            { "word": "漢字", "reading": "かんじ", "sentence": "漢字の勉強をする。" },
            { "word": "字", "reading": "じ", "sentence": "ていねいに字を書く。" }
        ]
    },
    {
        "id": 31,
        "kanji": "耳",
        "grade": 1,
        "onyomi": ["ジ"],
        "kunyomi": ["みみ"],
        "meaning": "音を聞く体の部分",
        "compounds": [
            { "word": "耳鼻科", "reading": "じびか", "sentence": "耳鼻科で診てもらう。" },
            { "word": "耳", "reading": "みみ", "sentence": "うさぎの耳は長い。" }
        ]
    },
    {
        "id": 32,
        "kanji": "七",
        "grade": 1,
        "onyomi": ["シチ"],
        "kunyomi": ["なな", "なな(つ)", "なの"],
        "meaning": "数の7をあらわす",
        "compounds": [
            { "word": "七月", "reading": "しちがつ", "sentence": "七月に海へ行く。" },
            { "word": "七つ", "reading": "ななつ", "sentence": "星を七つ数える。" }
        ]
    },
    {
        "id": 33,
        "kanji": "車",
        "grade": 1,
        "onyomi": ["シャ"],
        "kunyomi": ["くるま"],
        "meaning": "タイヤで走る乗り物",
        "compounds": [
            { "word": "電車", "reading": "でんしゃ", "sentence": "電車で学校へ行く。" },
            { "word": "車", "reading": "くるま", "sentence": "車に乗って出かける。" }
        ]
    },
    {
        "id": 34,
        "kanji": "手",
        "grade": 1,
        "onyomi": ["シュ"],
        "kunyomi": ["て", "た"],
        "meaning": "ものをつかむ体の部分",
        "compounds": [
            { "word": "手紙", "reading": "てがみ", "sentence": "友達に手紙を書く。" },
            { "word": "右手", "reading": "みぎて", "sentence": "右手でボールを持つ。" }
        ]
    },
    {
        "id": 35,
        "kanji": "十",
        "grade": 1,
        "onyomi": ["ジュウ", "ジッ"],
        "kunyomi": ["とお", "と"],
        "meaning": "数の10をあらわす",
        "compounds": [
            { "word": "十月", "reading": "じゅうがつ", "sentence": "十月に運動会がある。" },
            { "word": "十", "reading": "とお", "sentence": "りんごが十こある。" }
        ]
    },
    {
        "id": 36,
        "kanji": "出",
        "grade": 1,
        "onyomi": ["シュツ", "スイ"],
        "kunyomi": ["で(る)", "だ(す)"],
        "meaning": "外に出ること",
        "compounds": [
            { "word": "出口", "reading": "でぐち", "sentence": "出口はあちらです。" },
            { "word": "出発", "reading": "しゅっぱつ", "sentence": "朝早くに出発する。" }
        ]
    },
    {
        "id": 37,
        "kanji": "女",
        "grade": 1,
        "onyomi": ["ジョ", "ニョ"],
        "kunyomi": ["おんな", "め"],
        "meaning": "女の人",
        "compounds": [
            { "word": "女子", "reading": "じょし", "sentence": "女子チームが勝った。" },
            { "word": "少女", "reading": "しょうじょ", "sentence": "一人の少女が歩く。" }
        ]
    },
    {
        "id": 38,
        "kanji": "小",
        "grade": 1,
        "onyomi": ["ショウ"],
        "kunyomi": ["ちい(さい)", "こ", "お"],
        "meaning": "ちいさいこと",
        "compounds": [
            { "word": "小学校", "reading": "しょうがっこう", "sentence": "小学校で勉強する。" },
            { "word": "小さい", "reading": "ちいさい", "sentence": "小さい花がさく。" }
        ]
    },
    {
        "id": 39,
        "kanji": "上",
        "grade": 1,
        "onyomi": ["ジョウ"],
        "kunyomi": ["うえ", "うわ", "かみ", "あ(げる)", "あ(がる)", "のぼ(る)"],
        "meaning": "上の方",
        "compounds": [
            { "word": "上手", "reading": "じょうず", "sentence": "絵を上手にかく。" },
            { "word": "上", "reading": "うえ", "sentence": "机の上に本がある。" }
        ]
    },
    {
        "id": 40,
        "kanji": "森",
        "grade": 1,
        "onyomi": ["シン"],
        "kunyomi": ["もり"],
        "meaning": "木がたくさん生えている所",
        "compounds": [
            { "word": "森林", "reading": "しんりん", "sentence": "森林でどんぐりを拾う。" },
            { "word": "森", "reading": "もり", "sentence": "森の中を散歩する。" }
        ]
    },
    {
        "id": 41,
        "kanji": "人",
        "grade": 1,
        "onyomi": ["ジン", "ニン"],
        "kunyomi": ["ひと"],
        "meaning": "にんげんのこと",
        "compounds": [
            { "word": "大人", "reading": "おとな", "sentence": "大人と一緒に歩く。" },
            { "word": "三人", "reading": "さんにん", "sentence": "三人で公園に行く。" }
        ]
    },
    {
        "id": 42,
        "kanji": "水",
        "grade": 1,
        "onyomi": ["スイ"],
        "kunyomi": ["みず"],
        "meaning": "飲んだり洗ったりする液体",
        "compounds": [
            { "word": "水曜日", "reading": "すいようび", "sentence": "水曜日はプールがある。" },
            { "word": "水泳", "reading": "すいえい", "sentence": "夏に水泳を習う。" }
        ]
    },
    {
        "id": 43,
        "kanji": "正",
        "grade": 1,
        "onyomi": ["セイ", "ショウ"],
        "kunyomi": ["ただ(しい)", "ただ(す)", "まさ"],
        "meaning": "正しいこと",
        "compounds": [
            { "word": "正月", "reading": "しょうがつ", "sentence": "正月にお年玉をもらう。" },
            { "word": "正しい", "reading": "ただしい", "sentence": "正しい答えを書く。" }
        ]
    },
    {
        "id": 44,
        "kanji": "生",
        "grade": 1,
        "onyomi": ["セイ", "ショウ"],
        "kunyomi": ["い(きる)", "う(まれる)", "なま", "は(える)", "き"],
        "meaning": "生きること、生まれること",
        "compounds": [
            { "word": "先生", "reading": "せんせい", "sentence": "先生の話を聞く。" },
            { "word": "生まれる", "reading": "うまれる", "sentence": "弟が今日生まれる。" }
        ]
    },
    {
        "id": 45,
        "kanji": "青",
        "grade": 1,
        "onyomi": ["セイ", "ショウ"],
        "kunyomi": ["あお", "あお(い)"],
        "meaning": "空のような色",
        "compounds": [
            { "word": "青空", "reading": "あおぞら", "sentence": "青空の下で遊ぶ。" },
            { "word": "青い", "reading": "あおい", "sentence": "青い海で泳ぐ。" }
        ]
    },
    {
        "id": 46,
        "kanji": "夕",
        "grade": 1,
        "onyomi": ["セキ"],
        "kunyomi": ["ゆう"],
        "meaning": "日がしずむころ",
        "compounds": [
            { "word": "夕方", "reading": "ゆうがた", "sentence": "夕方に家へ帰る。" },
            { "word": "七夕", "reading": "たなばた", "sentence": "七夕に願い事を書く。" }
        ]
    },
    {
        "id": 47,
        "kanji": "石",
        "grade": 1,
        "onyomi": ["セキ", "シャク"],
        "kunyomi": ["いし"],
        "meaning": "石ころ",
        "compounds": [
            { "word": "石", "reading": "いし", "sentence": "川で石を拾う。" },
            { "word": "宝石", "reading": "ほうせき", "sentence": "宝石のように光る。" }
        ]
    },
    {
        "id": 48,
        "kanji": "赤",
        "grade": 1,
        "onyomi": ["セキ", "シャク"],
        "kunyomi": ["あか", "あか(い)"],
        "meaning": "火のような色",
        "compounds": [
            { "word": "赤い", "reading": "あかい", "sentence": "赤いりんごを食べる。" },
            { "word": "赤ちゃん", "reading": "あかちゃん", "sentence": "赤ちゃんが泣いている。" }
        ]
    },
    {
        "id": 49,
        "kanji": "千",
        "grade": 1,
        "onyomi": ["セン"],
        "kunyomi": ["ち"],
        "meaning": "数の1000をあらわす",
        "compounds": [
            { "word": "千円", "reading": "せんえん", "sentence": "千円でおもちゃを買う。" },
            { "word": "三千", "reading": "さんぜん", "sentence": "三千円のお小遣い。" }
        ]
    },
    {
        "id": 50,
        "kanji": "川",
        "grade": 1,
        "onyomi": ["セン"],
        "kunyomi": ["かわ"],
        "meaning": "水が流れるところ",
        "compounds": [
            { "word": "川", "reading": "かわ", "sentence": "川で魚をつかまえる。" },
            { "word": "小川", "reading": "おがわ", "sentence": "小川の水は冷たい。" }
        ]
    },
    {
        "id": 51,
        "kanji": "先",
        "grade": 1,
        "onyomi": ["セン"],
        "kunyomi": ["さき"],
        "meaning": "前や先のこと",
        "compounds": [
            { "word": "先生", "reading": "せんせい", "sentence": "先生の話を聞く。" },
            { "word": "先", "reading": "さき", "sentence": "先に学校へ行く。" }
        ]
    },
    {
        "id": 52,
        "kanji": "早",
        "grade": 1,
        "onyomi": ["ソウ"],
        "kunyomi": ["はや(い)", "はや(まる)", "はや(める)"],
        "meaning": "早いこと",
        "compounds": [
            { "word": "早朝", "reading": "そうちょう", "sentence": "早朝に散歩をする。" },
            { "word": "早い", "reading": "はやい", "sentence": "朝早い時間に起きる。" }
        ]
    },
    {
        "id": 53,
        "kanji": "草",
        "grade": 1,
        "onyomi": ["ソウ"],
        "kunyomi": ["くさ"],
        "meaning": "地面に生える緑の植物",
        "compounds": [
            { "word": "草原", "reading": "そうげん", "sentence": "草原を走り回る。" },
            { "word": "草花", "reading": "くさばな", "sentence": "庭に草花を植える。" }
        ]
    },
    {
        "id": 54,
        "kanji": "足",
        "grade": 1,
        "onyomi": ["ソク"],
        "kunyomi": ["あし", "た(りる)", "た(る)", "た(す)"],
        "meaning": "歩くための体の部分",
        "compounds": [
            { "word": "足音", "reading": "あしおと", "sentence": "階段で足音がする。" },
            { "word": "遠足", "reading": "えんそく", "sentence": "明日は遠足だ。" }
        ]
    },
    {
        "id": 55,
        "kanji": "村",
        "grade": 1,
        "onyomi": ["ソン"],
        "kunyomi": ["むら"],
        "meaning": "人が住む小さな地域",
        "compounds": [
            { "word": "村", "reading": "むら", "sentence": "山の村に住む。" },
            { "word": "農村", "reading": "のうそん", "sentence": "農村でお米を作る。" }
        ]
    },
    {
        "id": 56,
        "kanji": "大",
        "grade": 1,
        "onyomi": ["ダイ", "タイ"],
        "kunyomi": ["おお", "おお(きい)"],
        "meaning": "おおきいこと",
        "compounds": [
            { "word": "大きい", "reading": "おおきい", "sentence": "大きい犬を見た。" },
            { "word": "大人", "reading": "おとな", "sentence": "大人になったら旅をする。" }
        ]
    },
    {
        "id": 57,
        "kanji": "男",
        "grade": 1,
        "onyomi": ["ダン", "ナン"],
        "kunyomi": ["おとこ"],
        "meaning": "男の人",
        "compounds": [
            { "word": "男子", "reading": "だんし", "sentence": "男子チームが勝った。" },
            { "word": "男の子", "reading": "おとこのこ", "sentence": "男の子が走っている。" }
        ]
    },
    {
        "id": 58,
        "kanji": "竹",
        "grade": 1,
        "onyomi": ["チク"],
        "kunyomi": ["たけ"],
        "meaning": "まっすぐのびる緑の植物",
        "compounds": [
            { "word": "竹馬", "reading": "たけうま", "sentence": "竹馬に乗って遊ぶ。" },
            { "word": "竹", "reading": "たけ", "sentence": "竹やぶで虫を探す。" }
        ]
    },
    {
        "id": 59,
        "kanji": "中",
        "grade": 1,
        "onyomi": ["チュウ"],
        "kunyomi": ["なか"],
        "meaning": "中の方",
        "compounds": [
            { "word": "中学校", "reading": "ちゅうがっこう", "sentence": "兄は中学校に通う。" },
            { "word": "中", "reading": "なか", "sentence": "箱の中を見る。" }
        ]
    },
    {
        "id": 60,
        "kanji": "虫",
        "grade": 1,
        "onyomi": ["チュウ"],
        "kunyomi": ["むし"],
        "meaning": "小さい生き物",
        "compounds": [
            { "word": "昆虫", "reading": "こんちゅう", "sentence": "昆虫を採集する。" },
            { "word": "虫", "reading": "むし", "sentence": "虫が葉っぱにいる。" }
        ]
    },
    {
        "id": 61,
        "kanji": "町",
        "grade": 1,
        "onyomi": ["チョウ"],
        "kunyomi": ["まち"],
        "meaning": "人が住むまち",
        "compounds": [
            { "word": "町", "reading": "まち", "sentence": "町を散歩する。" },
            { "word": "下町", "reading": "したまち", "sentence": "下町のお祭りに行く。" }
        ]
    },
    {
        "id": 62,
        "kanji": "天",
        "grade": 1,
        "onyomi": ["テン"],
        "kunyomi": ["あめ", "あま"],
        "meaning": "空のこと",
        "compounds": [
            { "word": "天気", "reading": "てんき", "sentence": "今日は天気がいい。" },
            { "word": "天才", "reading": "てんさい", "sentence": "彼は絵の天才だ。" }
        ]
    },
    {
        "id": 63,
        "kanji": "田",
        "grade": 1,
        "onyomi": ["デン"],
        "kunyomi": ["た"],
        "meaning": "お米を育てる場所",
        "compounds": [
            { "word": "田んぼ", "reading": "たんぼ", "sentence": "田んぼで稲が育つ。" },
            { "word": "水田", "reading": "すいでん", "sentence": "水田でカエルが鳴く。" }
        ]
    },
    {
        "id": 64,
        "kanji": "土",
        "grade": 1,
        "onyomi": ["ド", "ト"],
        "kunyomi": ["つち"],
        "meaning": "地面の土",
        "compounds": [
            { "word": "土曜日", "reading": "どようび", "sentence": "土曜日は学校が休みだ。" },
            { "word": "土", "reading": "つち", "sentence": "畑の土をほる。" }
        ]
    },
    {
        "id": 65,
        "kanji": "二",
        "grade": 1,
        "onyomi": ["ニ"],
        "kunyomi": ["ふた", "ふた(つ)"],
        "meaning": "数の2をあらわす",
        "compounds": [
            { "word": "二月", "reading": "にがつ", "sentence": "二月はまだ寒い。" },
            { "word": "二つ", "reading": "ふたつ", "sentence": "消しゴムを二つ持つ。" }
        ]
    },
    {
        "id": 66,
        "kanji": "日",
        "grade": 1,
        "onyomi": ["ニチ", "ジツ"],
        "kunyomi": ["ひ", "か"],
        "meaning": "太陽や1日のこと",
        "compounds": [
            { "word": "日曜日", "reading": "にちようび", "sentence": "日曜日に公園へ行く。" },
            { "word": "一日", "reading": "いちにち", "sentence": "一日中雨だった。" }
        ]
    },
    {
        "id": 67,
        "kanji": "入",
        "grade": 1,
        "onyomi": ["ニュウ"],
        "kunyomi": ["い(る)", "い(れる)", "はい(る)"],
        "meaning": "中に入ること",
        "compounds": [
            { "word": "入学", "reading": "にゅうがく", "sentence": "四月に入学する。" },
            { "word": "入る", "reading": "はいる", "sentence": "お風呂に入る。" }
        ]
    },
    {
        "id": 68,
        "kanji": "年",
        "grade": 1,
        "onyomi": ["ネン"],
        "kunyomi": ["とし"],
        "meaning": "1年の長さ",
        "compounds": [
            { "word": "一年", "reading": "いちねん", "sentence": "一年生になった。" },
            { "word": "今年", "reading": "ことし", "sentence": "今年の夏は暑い。" }
        ]
    },
    {
        "id": 69,
        "kanji": "白",
        "grade": 1,
        "onyomi": ["ハク", "ビャク"],
        "kunyomi": ["しろ", "しろ(い)"],
        "meaning": "雪のような色",
        "compounds": [
            { "word": "白い", "reading": "しろい", "sentence": "白い雲が浮かぶ。" },
            { "word": "白紙", "reading": "はくし", "sentence": "白紙にえをかく。" }
        ]
    },
    {
        "id": 70,
        "kanji": "八",
        "grade": 1,
        "onyomi": ["ハチ"],
        "kunyomi": ["や", "や(つ)", "やっ(つ)"],
        "meaning": "数の8をあらわす",
        "compounds": [
            { "word": "八月", "reading": "はちがつ", "sentence": "八月は夏休みだ。" },
            { "word": "八つ", "reading": "やっつ", "sentence": "星が八つ見える。" }
        ]
    },
    {
        "id": 71,
        "kanji": "百",
        "grade": 1,
        "onyomi": ["ヒャク"],
        "kunyomi": [],
        "meaning": "数の100をあらわす",
        "compounds": [
            { "word": "百円", "reading": "ひゃくえん", "sentence": "百円でガムを買う。" },
            { "word": "三百", "reading": "さんびゃく", "sentence": "三百人が集まる。" }
        ]
    },
    {
        "id": 72,
        "kanji": "文",
        "grade": 1,
        "onyomi": ["ブン", "モン"],
        "kunyomi": ["ふみ"],
        "meaning": "文字をならべたもの",
        "compounds": [
            { "word": "文字", "reading": "もじ", "sentence": "ひらがなの文字を書く。" },
            { "word": "作文", "reading": "さくぶん", "sentence": "夏休みに作文を書く。" }
        ]
    },
    {
        "id": 73,
        "kanji": "木",
        "grade": 1,
        "onyomi": ["ボク", "モク"],
        "kunyomi": ["き", "こ"],
        "meaning": "木、じゅ木",
        "compounds": [
            { "word": "木曜日", "reading": "もくようび", "sentence": "木曜日に図書室へ行く。" },
            { "word": "木", "reading": "き", "sentence": "大きな木に登る。" }
        ]
    },
    {
        "id": 74,
        "kanji": "本",
        "grade": 1,
        "onyomi": ["ホン"],
        "kunyomi": ["もと"],
        "meaning": "読む本",
        "compounds": [
            { "word": "本", "reading": "ほん", "sentence": "図書館で本を読む。" },
            { "word": "絵本", "reading": "えほん", "sentence": "寝る前に絵本を読む。" }
        ]
    },
    {
        "id": 75,
        "kanji": "名",
        "grade": 1,
        "onyomi": ["メイ", "ミョウ"],
        "kunyomi": ["な"],
        "meaning": "名前のこと",
        "compounds": [
            { "word": "名前", "reading": "なまえ", "sentence": "名前を大きく書く。" },
            { "word": "有名", "reading": "ゆうめい", "sentence": "有名な絵をみる。" }
        ]
    },
    {
        "id": 76,
        "kanji": "目",
        "grade": 1,
        "onyomi": ["モク"],
        "kunyomi": ["め"],
        "meaning": "見るための体の部分",
        "compounds": [
            { "word": "目", "reading": "め", "sentence": "大きな目でみつめる。" },
            { "word": "目標", "reading": "もくひょう", "sentence": "今年の目標を決める。" }
        ]
    },
    {
        "id": 77,
        "kanji": "立",
        "grade": 1,
        "onyomi": ["リツ"],
        "kunyomi": ["た(つ)", "た(てる)"],
        "meaning": "たつこと",
        "compounds": [
            { "word": "立派", "reading": "りっぱ", "sentence": "立派な木が立っている。" },
            { "word": "立つ", "reading": "たつ", "sentence": "まっすぐ立つ練習をする。" }
        ]
    },
    {
        "id": 78,
        "kanji": "力",
        "grade": 1,
        "onyomi": ["リョク", "リキ"],
        "kunyomi": ["ちから"],
        "meaning": "ちから",
        "compounds": [
            { "word": "力", "reading": "ちから", "sentence": "力いっぱい引っぱる。" },
            { "word": "力持ち", "reading": "ちからもち", "sentence": "兄は力持ちだ。" }
        ]
    },
    {
        "id": 79,
        "kanji": "林",
        "grade": 1,
        "onyomi": ["リン"],
        "kunyomi": ["はやし"],
        "meaning": "木が集まっている所",
        "compounds": [
            { "word": "林", "reading": "はやし", "sentence": "林の中で虫を探す。" },
            { "word": "森林", "reading": "しんりん", "sentence": "森林でどんぐりを拾う。" }
        ]
    },
    {
        "id": 80,
        "kanji": "六",
        "grade": 1,
        "onyomi": ["ロク"],
        "kunyomi": ["む", "む(つ)", "むっ(つ)"],
        "meaning": "数の6をあらわす",
        "compounds": [
            { "word": "六月", "reading": "ろくがつ", "sentence": "六月は雨がよく降る。" },
            { "word": "六つ", "reading": "むっつ", "sentence": "玉を六つ並べる。" }
        ]
    },
    {
        "id": 81,
        "kanji": "引",
        "grade": 2,
        "onyomi": ["イン"],
        "kunyomi": ["ひ(く)", "ひ(ける)"],
        "meaning": "ひっぱること",
        "compounds": [
            { "word": "引力", "reading": "いんりょく", "sentence": "地球には引力がある。" },
            { "word": "引く", "reading": "ひく", "sentence": "ロープを引く。" }
        ]
    },
    {
        "id": 82,
        "kanji": "羽",
        "grade": 2,
        "onyomi": ["ウ"],
        "kunyomi": ["は", "はね"],
        "meaning": "鳥や虫のつばさ",
        "compounds": [
            { "word": "羽毛", "reading": "うもう", "sentence": "鳥の羽毛はやわらかい。" },
            { "word": "羽", "reading": "はね", "sentence": "小鳥の羽はきれいだ。" }
        ]
    },
    {
        "id": 83,
        "kanji": "雲",
        "grade": 2,
        "onyomi": ["ウン"],
        "kunyomi": ["くも"],
        "meaning": "空にうかんでいる白いもの",
        "compounds": [
            { "word": "雲海", "reading": "うんかい", "sentence": "山の上から雲海を見た。" },
            { "word": "雲", "reading": "くも", "sentence": "空に大きな雲がある。" }
        ]
    },
    {
        "id": 84,
        "kanji": "園",
        "grade": 2,
        "onyomi": ["エン"],
        "kunyomi": ["その"],
        "meaning": "人があつまる広い場所",
        "compounds": [
            { "word": "公園", "reading": "こうえん", "sentence": "公園であそぶ。" },
            { "word": "花園", "reading": "はなぞの", "sentence": "花園に花がさく。" }
        ]
    },
    {
        "id": 85,
        "kanji": "遠",
        "grade": 2,
        "onyomi": ["エン"],
        "kunyomi": ["とお(い)"],
        "meaning": "きょりがはなれていること",
        "compounds": [
            { "word": "遠足", "reading": "えんそく", "sentence": "あした遠足に行く。" },
            { "word": "遠い", "reading": "とおい", "sentence": "学校まで遠い。" }
        ]
    },
    {
        "id": 86,
        "kanji": "何",
        "grade": 2,
        "onyomi": ["カ"],
        "kunyomi": ["なに", "なん"],
        "meaning": "わからないことをたずねることば",
        "compounds": [
            { "word": "何時", "reading": "なんじ", "sentence": "今何時ですか。" },
            { "word": "何", "reading": "なに", "sentence": "それは何ですか。" }
        ]
    },
    {
        "id": 87,
        "kanji": "科",
        "grade": 2,
        "onyomi": ["カ"],
        "kunyomi": [],
        "meaning": "学校で勉強する分野",
        "compounds": [
            { "word": "理科", "reading": "りか", "sentence": "理科の実験をする。" },
            { "word": "科目", "reading": "かもく", "sentence": "すきな科目は算数だ。" }
        ]
    },
    {
        "id": 88,
        "kanji": "夏",
        "grade": 2,
        "onyomi": ["カ"],
        "kunyomi": ["なつ"],
        "meaning": "あつい季節",
        "compounds": [
            { "word": "夏休み", "reading": "なつやすみ", "sentence": "夏休みに海に行く。" },
            { "word": "初夏", "reading": "しょか", "sentence": "初夏はさわやかだ。" }
        ]
    },
    {
        "id": 89,
        "kanji": "家",
        "grade": 2,
        "onyomi": ["カ", "ケ"],
        "kunyomi": ["いえ", "や"],
        "meaning": "人がすんでいるところ",
        "compounds": [
            { "word": "家族", "reading": "かぞく", "sentence": "家族でご飯を食べる。" },
            { "word": "家", "reading": "いえ", "sentence": "家に帰る。" }
        ]
    },
    {
        "id": 90,
        "kanji": "歌",
        "grade": 2,
        "onyomi": ["カ"],
        "kunyomi": ["うた", "うた(う)"],
        "meaning": "声でうたうもの",
        "compounds": [
            { "word": "歌手", "reading": "かしゅ", "sentence": "歌手が歌を歌う。" },
            { "word": "歌う", "reading": "うたう", "sentence": "元気に歌う。" }
        ]
    },
    {
        "id": 91,
        "kanji": "画",
        "grade": 2,
        "onyomi": ["ガ", "カク"],
        "kunyomi": [],
        "meaning": "絵やけいかくのこと",
        "compounds": [
            { "word": "絵画", "reading": "かいが", "sentence": "美術館で絵画を見た。" },
            { "word": "画用紙", "reading": "がようし", "sentence": "画用紙に絵をかく。" }
        ]
    },
    {
        "id": 92,
        "kanji": "回",
        "grade": 2,
        "onyomi": ["カイ"],
        "kunyomi": ["まわ(る)", "まわ(す)"],
        "meaning": "ぐるっとまわること",
        "compounds": [
            { "word": "回数", "reading": "かいすう", "sentence": "回数を数える。" },
            { "word": "回る", "reading": "まわる", "sentence": "こまが回る。" }
        ]
    },
    {
        "id": 93,
        "kanji": "会",
        "grade": 2,
        "onyomi": ["カイ", "エ"],
        "kunyomi": ["あ(う)"],
        "meaning": "人と人が集まること",
        "compounds": [
            { "word": "会話", "reading": "かいわ", "sentence": "友だちと会話する。" },
            { "word": "会う", "reading": "あう", "sentence": "駅で友だちに会う。" }
        ]
    },
    {
        "id": 94,
        "kanji": "海",
        "grade": 2,
        "onyomi": ["カイ"],
        "kunyomi": ["うみ"],
        "meaning": "広くて青い水のところ",
        "compounds": [
            { "word": "海水", "reading": "かいすい", "sentence": "海水はしょっぱい。" },
            { "word": "海", "reading": "うみ", "sentence": "夏に海で泳ぐ。" }
        ]
    },
    {
        "id": 95,
        "kanji": "絵",
        "grade": 2,
        "onyomi": ["カイ", "エ"],
        "kunyomi": ["え"],
        "meaning": "かいたもの",
        "compounds": [
            { "word": "絵本", "reading": "えほん", "sentence": "絵本を読む。" },
            { "word": "絵", "reading": "え", "sentence": "絵をかくのが好きだ。" }
        ]
    },
    {
        "id": 96,
        "kanji": "外",
        "grade": 2,
        "onyomi": ["ガイ", "ゲ"],
        "kunyomi": ["そと", "ほか", "はず(す)"],
        "meaning": "うちではないところ",
        "compounds": [
            { "word": "外国", "reading": "がいこく", "sentence": "外国へ旅行する。" },
            { "word": "外", "reading": "そと", "sentence": "外で遊ぶ。" }
        ]
    },
    {
        "id": 97,
        "kanji": "角",
        "grade": 2,
        "onyomi": ["カク"],
        "kunyomi": ["かど", "つの"],
        "meaning": "かどや動物のつの",
        "compounds": [
            { "word": "三角", "reading": "さんかく", "sentence": "三角のおにぎり。" },
            { "word": "角", "reading": "かど", "sentence": "角を右にまがる。" }
        ]
    },
    {
        "id": 98,
        "kanji": "楽",
        "grade": 2,
        "onyomi": ["ガク", "ラク"],
        "kunyomi": ["たの(しい)"],
        "meaning": "たのしいこと",
        "compounds": [
            { "word": "音楽", "reading": "おんがく", "sentence": "音楽を聞くのが好きだ。" },
            { "word": "楽しい", "reading": "たのしい", "sentence": "遊ぶのは楽しい。" }
        ]
    },
    {
        "id": 99,
        "kanji": "活",
        "grade": 2,
        "onyomi": ["カツ"],
        "kunyomi": [],
        "meaning": "元気に動くこと",
        "compounds": [
            { "word": "生活", "reading": "せいかつ", "sentence": "毎日の生活を大切にする。" },
            { "word": "活動", "reading": "かつどう", "sentence": "クラブ活動をする。" }
        ]
    },
    {
        "id": 100,
        "kanji": "間",
        "grade": 2,
        "onyomi": ["カン", "ケン"],
        "kunyomi": ["あいだ", "ま"],
        "meaning": "ものとものの間",
        "compounds": [
            { "word": "時間", "reading": "じかん", "sentence": "時間を守る。" },
            { "word": "間", "reading": "あいだ", "sentence": "木と木の間を歩く。" }
        ]
    },
    {
        "id": 101,
        "kanji": "丸",
        "grade": 2,
        "onyomi": ["ガン"],
        "kunyomi": ["まる", "まる(い)"],
        "meaning": "まるいかたち",
        "compounds": [
            { "word": "丸太", "reading": "まるた", "sentence": "丸太を運ぶ。" },
            { "word": "丸い", "reading": "まるい", "sentence": "ボールは丸い。" }
        ]
    },
    {
        "id": 102,
        "kanji": "岩",
        "grade": 2,
        "onyomi": ["ガン"],
        "kunyomi": ["いわ"],
        "meaning": "大きな石",
        "compounds": [
            { "word": "岩石", "reading": "がんせき", "sentence": "山で岩石を見つけた。" },
            { "word": "岩", "reading": "いわ", "sentence": "大きな岩がある。" }
        ]
    },
    {
        "id": 103,
        "kanji": "顔",
        "grade": 2,
        "onyomi": ["ガン"],
        "kunyomi": ["かお"],
        "meaning": "目や鼻がある頭の前の部分",
        "compounds": [
            { "word": "顔色", "reading": "かおいろ", "sentence": "顔色が悪い。" },
            { "word": "顔", "reading": "かお", "sentence": "手で顔を洗う。" }
        ]
    },
    {
        "id": 104,
        "kanji": "汽",
        "grade": 2,
        "onyomi": ["キ"],
        "kunyomi": [],
        "meaning": "水がわいて出るゆげ",
        "compounds": [
            { "word": "汽車", "reading": "きしゃ", "sentence": "汽車に乗って旅をする。" },
            { "word": "汽笛", "reading": "きてき", "sentence": "汽笛が鳴る。" }
        ]
    },
    {
        "id": 105,
        "kanji": "記",
        "grade": 2,
        "onyomi": ["キ"],
        "kunyomi": ["しる(す)"],
        "meaning": "書きしるすこと",
        "compounds": [
            { "word": "日記", "reading": "にっき", "sentence": "毎日日記を書く。" },
            { "word": "記す", "reading": "しるす", "sentence": "名前を記す。" }
        ]
    },
    {
        "id": 106,
        "kanji": "帰",
        "grade": 2,
        "onyomi": ["キ"],
        "kunyomi": ["かえ(る)"],
        "meaning": "元のところにもどること",
        "compounds": [
            { "word": "帰国", "reading": "きこく", "sentence": "父が帰国する。" },
            { "word": "帰る", "reading": "かえる", "sentence": "家に帰る。" }
        ]
    },
    {
        "id": 107,
        "kanji": "弓",
        "grade": 2,
        "onyomi": ["キュウ"],
        "kunyomi": ["ゆみ"],
        "meaning": "矢を飛ばす道具",
        "compounds": [
            { "word": "弓道", "reading": "きゅうどう", "sentence": "弓道を習う。" },
            { "word": "弓", "reading": "ゆみ", "sentence": "弓で矢を射る。" }
        ]
    },
    {
        "id": 108,
        "kanji": "牛",
        "grade": 2,
        "onyomi": ["ギュウ"],
        "kunyomi": ["うし"],
        "meaning": "牧場にいる動物",
        "compounds": [
            { "word": "牛乳", "reading": "ぎゅうにゅう", "sentence": "牛乳を毎日飲む。" },
            { "word": "牛", "reading": "うし", "sentence": "牧場に牛がいる。" }
        ]
    },
    {
        "id": 109,
        "kanji": "魚",
        "grade": 2,
        "onyomi": ["ギョ"],
        "kunyomi": ["うお", "さかな"],
        "meaning": "水の中を泳ぐ生き物",
        "compounds": [
            { "word": "金魚", "reading": "きんぎょ", "sentence": "金魚を水そうで飼う。" },
            { "word": "魚", "reading": "さかな", "sentence": "魚を釣る。" }
        ]
    },
    {
        "id": 110,
        "kanji": "京",
        "grade": 2,
        "onyomi": ["キョウ"],
        "kunyomi": [],
        "meaning": "みやこや大きな町",
        "compounds": [
            { "word": "東京", "reading": "とうきょう", "sentence": "東京に電車で行く。" },
            { "word": "京都", "reading": "きょうと", "sentence": "京都でお寺を見た。" }
        ]
    },
    {
        "id": 111,
        "kanji": "強",
        "grade": 2,
        "onyomi": ["キョウ", "ゴウ"],
        "kunyomi": ["つよ(い)", "し(いる)"],
        "meaning": "力があってつよいこと",
        "compounds": [
            { "word": "勉強", "reading": "べんきょう", "sentence": "毎日勉強する。" },
            { "word": "強い", "reading": "つよい", "sentence": "あの人は力が強い。" }
        ]
    },
    {
        "id": 112,
        "kanji": "教",
        "grade": 2,
        "onyomi": ["キョウ"],
        "kunyomi": ["おし(える)", "おそ(わる)"],
        "meaning": "やり方をおしえること",
        "compounds": [
            { "word": "教室", "reading": "きょうしつ", "sentence": "教室で勉強する。" },
            { "word": "教える", "reading": "おしえる", "sentence": "漢字を教える。" }
        ]
    },
    {
        "id": 113,
        "kanji": "近",
        "grade": 2,
        "onyomi": ["キン"],
        "kunyomi": ["ちか(い)"],
        "meaning": "きょりが近いこと",
        "compounds": [
            { "word": "近所", "reading": "きんじょ", "sentence": "近所を散歩する。" },
            { "word": "近い", "reading": "ちかい", "sentence": "学校は近い。" }
        ]
    },
    {
        "id": 114,
        "kanji": "兄",
        "grade": 2,
        "onyomi": ["キョウ", "ケイ"],
        "kunyomi": ["あに"],
        "meaning": "年上の男のきょうだい",
        "compounds": [
            { "word": "兄弟", "reading": "きょうだい", "sentence": "兄弟でサッカーをする。" },
            { "word": "兄", "reading": "あに", "sentence": "兄と遊ぶ。" }
        ]
    },
    {
        "id": 115,
        "kanji": "形",
        "grade": 2,
        "onyomi": ["ケイ", "ギョウ"],
        "kunyomi": ["かたち", "かた"],
        "meaning": "ものの形やすがた",
        "compounds": [
            { "word": "図形", "reading": "ずけい", "sentence": "図形をノートにかく。" },
            { "word": "形", "reading": "かたち", "sentence": "星の形をした紙。" }
        ]
    },
    {
        "id": 116,
        "kanji": "計",
        "grade": 2,
        "onyomi": ["ケイ"],
        "kunyomi": ["はか(る)"],
        "meaning": "数えたりはかったりすること",
        "compounds": [
            { "word": "時計", "reading": "とけい", "sentence": "時計を見る。" },
            { "word": "計る", "reading": "はかる", "sentence": "時間を計る。" }
        ]
    },
    {
        "id": 117,
        "kanji": "元",
        "grade": 2,
        "onyomi": ["ゲン", "ガン"],
        "kunyomi": ["もと"],
        "meaning": "もともとのところ",
        "compounds": [
            { "word": "元気", "reading": "げんき", "sentence": "元気にあいさつする。" },
            { "word": "元", "reading": "もと", "sentence": "元の場所にもどす。" }
        ]
    },
    {
        "id": 118,
        "kanji": "言",
        "grade": 2,
        "onyomi": ["ゲン", "ゴン"],
        "kunyomi": ["い(う)", "こと"],
        "meaning": "口で話すこと",
        "compounds": [
            { "word": "言葉", "reading": "ことば", "sentence": "やさしい言葉を使う。" },
            { "word": "言う", "reading": "いう", "sentence": "ありがとうと言う。" }
        ]
    },
    {
        "id": 119,
        "kanji": "原",
        "grade": 2,
        "onyomi": ["ゲン"],
        "kunyomi": ["はら"],
        "meaning": "広い野原",
        "compounds": [
            { "word": "原因", "reading": "げんいん", "sentence": "火事の原因を調べる。" },
            { "word": "原っぱ", "reading": "はらっぱ", "sentence": "原っぱで遊ぶ。" }
        ]
    },
    {
        "id": 120,
        "kanji": "戸",
        "grade": 2,
        "onyomi": ["コ"],
        "kunyomi": ["と"],
        "meaning": "家の出入り口の扉",
        "compounds": [
            { "word": "戸口", "reading": "とぐち", "sentence": "戸口で待つ。" },
            { "word": "戸", "reading": "と", "sentence": "戸をしめる。" }
        ]
    },
    {
        "id": 121,
        "kanji": "古",
        "grade": 2,
        "onyomi": ["コ"],
        "kunyomi": ["ふる(い)"],
        "meaning": "時間がたっていること",
        "compounds": [
            { "word": "中古", "reading": "ちゅうこ", "sentence": "中古の自転車を買う。" },
            { "word": "古い", "reading": "ふるい", "sentence": "古い本を読む。" }
        ]
    },
    {
        "id": 122,
        "kanji": "午",
        "grade": 2,
        "onyomi": ["ゴ"],
        "kunyomi": [],
        "meaning": "お昼ごろの時間",
        "compounds": [
            { "word": "午前", "reading": "ごぜん", "sentence": "午前中に宿題をする。" },
            { "word": "午後", "reading": "ごご", "sentence": "午後から遊ぶ。" }
        ]
    },
    {
        "id": 123,
        "kanji": "後",
        "grade": 2,
        "onyomi": ["ゴ", "コウ"],
        "kunyomi": ["のち", "うし(ろ)", "あと", "おく(れる)"],
        "meaning": "あとやうしろのこと",
        "compounds": [
            { "word": "午後", "reading": "ごご", "sentence": "午後は公園で遊ぶ。" },
            { "word": "後ろ", "reading": "うしろ", "sentence": "後ろを見る。" }
        ]
    },
    {
        "id": 124,
        "kanji": "語",
        "grade": 2,
        "onyomi": ["ゴ"],
        "kunyomi": ["かた(る)"],
        "meaning": "ことばや話すこと",
        "compounds": [
            { "word": "国語", "reading": "こくご", "sentence": "国語の勉強をする。" },
            { "word": "語る", "reading": "かたる", "sentence": "思い出を語る。" }
        ]
    },
    {
        "id": 125,
        "kanji": "工",
        "grade": 2,
        "onyomi": ["コウ", "ク"],
        "kunyomi": [],
        "meaning": "物を作ること",
        "compounds": [
            { "word": "工作", "reading": "こうさく", "sentence": "図工で工作をする。" },
            { "word": "大工", "reading": "だいく", "sentence": "大工が家を建てる。" }
        ]
    },
    {
        "id": 126,
        "kanji": "公",
        "grade": 2,
        "onyomi": ["コウ"],
        "kunyomi": ["おおやけ"],
        "meaning": "みんなのためのもの",
        "compounds": [
            { "word": "公園", "reading": "こうえん", "sentence": "公園で遊ぶ。" },
            { "word": "公平", "reading": "こうへい", "sentence": "公平に分ける。" }
        ]
    },
    {
        "id": 127,
        "kanji": "広",
        "grade": 2,
        "onyomi": ["コウ"],
        "kunyomi": ["ひろ(い)", "ひろ(まる)", "ひろ(める)"],
        "meaning": "面積が大きいこと",
        "compounds": [
            { "word": "広場", "reading": "ひろば", "sentence": "広場でボールをける。" },
            { "word": "広い", "reading": "ひろい", "sentence": "公園は広い。" }
        ]
    },
    {
        "id": 128,
        "kanji": "交",
        "grade": 2,
        "onyomi": ["コウ"],
        "kunyomi": ["ま(じる)", "まじ(わる)"],
        "meaning": "入りまじること",
        "compounds": [
            { "word": "交通", "reading": "こうつう", "sentence": "交通に気をつける。" },
            { "word": "交番", "reading": "こうばん", "sentence": "交番で道を聞く。" }
        ]
    },
    {
        "id": 129,
        "kanji": "光",
        "grade": 2,
        "onyomi": ["コウ"],
        "kunyomi": ["ひかり", "ひか(る)"],
        "meaning": "明るいひかり",
        "compounds": [
            { "word": "光線", "reading": "こうせん", "sentence": "太陽の光線があたたかい。" },
            { "word": "光る", "reading": "ひかる", "sentence": "星が光る。" }
        ]
    },
    {
        "id": 130,
        "kanji": "考",
        "grade": 2,
        "onyomi": ["コウ"],
        "kunyomi": ["かんが(える)"],
        "meaning": "頭を使って考えること",
        "compounds": [
            { "word": "考え", "reading": "かんがえ", "sentence": "自分の考えを言う。" },
            { "word": "考える", "reading": "かんがえる", "sentence": "よく考える。" }
        ]
    },
    {
        "id": 131,
        "kanji": "行",
        "grade": 2,
        "onyomi": ["コウ", "ギョウ"],
        "kunyomi": ["い(く)", "おこな(う)"],
        "meaning": "どこかへ行くこと",
        "compounds": [
            { "word": "旅行", "reading": "りょこう", "sentence": "家族で旅行に行く。" },
            { "word": "行く", "reading": "いく", "sentence": "学校に行く。" }
        ]
    },
    {
        "id": 132,
        "kanji": "高",
        "grade": 2,
        "onyomi": ["コウ"],
        "kunyomi": ["たか(い)"],
        "meaning": "たかいこと",
        "compounds": [
            { "word": "高校", "reading": "こうこう", "sentence": "姉は高校生だ。" },
            { "word": "高い", "reading": "たかい", "sentence": "山がとても高い。" }
        ]
    },
    {
        "id": 133,
        "kanji": "黄",
        "grade": 2,
        "onyomi": ["コウ", "オウ"],
        "kunyomi": ["き", "こ"],
        "meaning": "レモンのような色",
        "compounds": [
            { "word": "黄色", "reading": "きいろ", "sentence": "黄色い花がさく。" },
            { "word": "黄金", "reading": "おうごん", "sentence": "黄金にかがやく。" }
        ]
    },
    {
        "id": 134,
        "kanji": "合",
        "grade": 2,
        "onyomi": ["ゴウ"],
        "kunyomi": ["あ(う)", "あ(わせる)"],
        "meaning": "一つになること",
        "compounds": [
            { "word": "合図", "reading": "あいず", "sentence": "合図をする。" },
            { "word": "合う", "reading": "あう", "sentence": "意見が合う。" }
        ]
    },
    {
        "id": 135,
        "kanji": "谷",
        "grade": 2,
        "onyomi": ["コク"],
        "kunyomi": ["たに"],
        "meaning": "山と山の間の低いところ",
        "compounds": [
            { "word": "谷間", "reading": "たにま", "sentence": "谷間に川が流れる。" },
            { "word": "谷", "reading": "たに", "sentence": "深い谷を見る。" }
        ]
    },
    {
        "id": 136,
        "kanji": "国",
        "grade": 2,
        "onyomi": ["コク"],
        "kunyomi": ["くに"],
        "meaning": "国土のこと",
        "compounds": [
            { "word": "外国", "reading": "がいこく", "sentence": "外国へ行く。" },
            { "word": "国", "reading": "くに", "sentence": "日本という国。" }
        ]
    },
    {
        "id": 137,
        "kanji": "黒",
        "grade": 2,
        "onyomi": ["コク"],
        "kunyomi": ["くろ", "くろ(い)"],
        "meaning": "すみのような色",
        "compounds": [
            { "word": "黒板", "reading": "こくばん", "sentence": "黒板に字を書く。" },
            { "word": "黒い", "reading": "くろい", "sentence": "黒い猫がいる。" }
        ]
    },
    {
        "id": 138,
        "kanji": "今",
        "grade": 2,
        "onyomi": ["コン"],
        "kunyomi": ["いま"],
        "meaning": "このとき",
        "compounds": [
            { "word": "今度", "reading": "こんど", "sentence": "今度いっしょに遊ぼう。" },
            { "word": "今", "reading": "いま", "sentence": "今から出かける。" }
        ]
    },
    {
        "id": 139,
        "kanji": "才",
        "grade": 2,
        "onyomi": ["サイ"],
        "kunyomi": [],
        "meaning": "年れいを数えることば",
        "compounds": [
            { "word": "天才", "reading": "てんさい", "sentence": "天才的なピアニスト。" },
            { "word": "七才", "reading": "ななさい", "sentence": "妹は七才になった。" }
        ]
    },
    {
        "id": 140,
        "kanji": "細",
        "grade": 2,
        "onyomi": ["サイ"],
        "kunyomi": ["ほそ(い)", "こま(かい)"],
        "meaning": "ほそいことやこまかいこと",
        "compounds": [
            { "word": "細心", "reading": "さいしん", "sentence": "細心の注意をはらう。" },
            { "word": "細い", "reading": "ほそい", "sentence": "細い道を歩く。" }
        ]
    },
    {
        "id": 141,
        "kanji": "作",
        "grade": 2,
        "onyomi": ["サク", "サ"],
        "kunyomi": ["つく(る)"],
        "meaning": "物をつくること",
        "compounds": [
            { "word": "作文", "reading": "さくぶん", "sentence": "夏休みに作文を書く。" },
            { "word": "作る", "reading": "つくる", "sentence": "クッキーを作る。" }
        ]
    },
    {
        "id": 142,
        "kanji": "算",
        "grade": 2,
        "onyomi": ["サン"],
        "kunyomi": [],
        "meaning": "数を計算すること",
        "compounds": [
            { "word": "算数", "reading": "さんすう", "sentence": "算数のテストがある。" },
            { "word": "計算", "reading": "けいさん", "sentence": "計算をまちがえた。" }
        ]
    },
    {
        "id": 143,
        "kanji": "止",
        "grade": 2,
        "onyomi": ["シ"],
        "kunyomi": ["と(まる)", "と(める)"],
        "meaning": "動きをやめること",
        "compounds": [
            { "word": "中止", "reading": "ちゅうし", "sentence": "雨で試合が中止になる。" },
            { "word": "止まる", "reading": "とまる", "sentence": "バスが止まる。" }
        ]
    },
    {
        "id": 144,
        "kanji": "市",
        "grade": 2,
        "onyomi": ["シ"],
        "kunyomi": ["いち"],
        "meaning": "人が多く住むまち",
        "compounds": [
            { "word": "市場", "reading": "いちば", "sentence": "市場で魚を買う。" },
            { "word": "市民", "reading": "しみん", "sentence": "市民が集まる。" }
        ]
    },
    {
        "id": 145,
        "kanji": "矢",
        "grade": 2,
        "onyomi": ["シ"],
        "kunyomi": ["や"],
        "meaning": "弓で飛ばす道具",
        "compounds": [
            { "word": "矢印", "reading": "やじるし", "sentence": "矢印の方へ進む。" },
            { "word": "矢", "reading": "や", "sentence": "矢を的に当てる。" }
        ]
    },
    {
        "id": 146,
        "kanji": "姉",
        "grade": 2,
        "onyomi": ["シ"],
        "kunyomi": ["あね"],
        "meaning": "年上の女のきょうだい",
        "compounds": [
            { "word": "姉妹", "reading": "しまい", "sentence": "姉妹で仲がいい。" },
            { "word": "姉", "reading": "あね", "sentence": "姉と買い物に行く。" }
        ]
    },
    {
        "id": 147,
        "kanji": "思",
        "grade": 2,
        "onyomi": ["シ"],
        "kunyomi": ["おも(う)"],
        "meaning": "心で感じたり考えたりすること",
        "compounds": [
            { "word": "思考", "reading": "しこう", "sentence": "思考をめぐらせる。" },
            { "word": "思う", "reading": "おもう", "sentence": "楽しいと思う。" }
        ]
    },
    {
        "id": 148,
        "kanji": "紙",
        "grade": 2,
        "onyomi": ["シ"],
        "kunyomi": ["かみ"],
        "meaning": "字や絵をかくうすいもの",
        "compounds": [
            { "word": "用紙", "reading": "ようし", "sentence": "用紙に名前を書く。" },
            { "word": "紙", "reading": "かみ", "sentence": "紙で折り鶴を折る。" }
        ]
    },
    {
        "id": 149,
        "kanji": "寺",
        "grade": 2,
        "onyomi": ["ジ"],
        "kunyomi": ["てら"],
        "meaning": "お坊さんがいる建物",
        "compounds": [
            { "word": "寺院", "reading": "じいん", "sentence": "古い寺院を見学する。" },
            { "word": "寺", "reading": "てら", "sentence": "お寺で手を合わせる。" }
        ]
    },
    {
        "id": 150,
        "kanji": "自",
        "grade": 2,
        "onyomi": ["ジ"],
        "kunyomi": ["みずか(ら)"],
        "meaning": "自分自身のこと",
        "compounds": [
            { "word": "自分", "reading": "じぶん", "sentence": "自分で考える。" },
            { "word": "自転車", "reading": "じてんしゃ", "sentence": "自転車に乗る。" }
        ]
    },
    {
        "id": 151,
        "kanji": "時",
        "grade": 2,
        "onyomi": ["ジ"],
        "kunyomi": ["とき"],
        "meaning": "時間や〜時のこと",
        "compounds": [
            { "word": "時間", "reading": "じかん", "sentence": "時間を守る。" },
            { "word": "時", "reading": "とき", "sentence": "楽しい時をすごす。" }
        ]
    },
    {
        "id": 152,
        "kanji": "室",
        "grade": 2,
        "onyomi": ["シツ"],
        "kunyomi": ["むろ"],
        "meaning": "部屋のこと",
        "compounds": [
            { "word": "教室", "reading": "きょうしつ", "sentence": "教室で本を読む。" },
            { "word": "音楽室", "reading": "おんがくしつ", "sentence": "音楽室で歌う。" }
        ]
    },
    {
        "id": 153,
        "kanji": "社",
        "grade": 2,
        "onyomi": ["シャ"],
        "kunyomi": ["やしろ"],
        "meaning": "神社や会社のこと",
        "compounds": [
            { "word": "神社", "reading": "じんじゃ", "sentence": "神社にお参りする。" },
            { "word": "社会", "reading": "しゃかい", "sentence": "社会科の勉強をする。" }
        ]
    },
    {
        "id": 154,
        "kanji": "弱",
        "grade": 2,
        "onyomi": ["ジャク"],
        "kunyomi": ["よわ(い)", "よわ(る)"],
        "meaning": "力がないこと",
        "compounds": [
            { "word": "弱点", "reading": "じゃくてん", "sentence": "自分の弱点を知る。" },
            { "word": "弱い", "reading": "よわい", "sentence": "風が弱い。" }
        ]
    },
    {
        "id": 155,
        "kanji": "首",
        "grade": 2,
        "onyomi": ["シュ"],
        "kunyomi": ["くび"],
        "meaning": "頭と体をつなぐ部分",
        "compounds": [
            { "word": "首相", "reading": "しゅしょう", "sentence": "首相がスピーチする。" },
            { "word": "首", "reading": "くび", "sentence": "首をかしげる。" }
        ]
    },
    {
        "id": 156,
        "kanji": "秋",
        "grade": 2,
        "onyomi": ["シュウ"],
        "kunyomi": ["あき"],
        "meaning": "すずしくなる季節",
        "compounds": [
            { "word": "秋分", "reading": "しゅうぶん", "sentence": "秋分の日は休みだ。" },
            { "word": "秋", "reading": "あき", "sentence": "秋に紅葉を見る。" }
        ]
    },
    {
        "id": 157,
        "kanji": "週",
        "grade": 2,
        "onyomi": ["シュウ"],
        "kunyomi": [],
        "meaning": "7日間のまとまり",
        "compounds": [
            { "word": "今週", "reading": "こんしゅう", "sentence": "今週は忙しい。" },
            { "word": "週末", "reading": "しゅうまつ", "sentence": "週末に公園へ行く。" }
        ]
    },
    {
        "id": 158,
        "kanji": "春",
        "grade": 2,
        "onyomi": ["シュン"],
        "kunyomi": ["はる"],
        "meaning": "暖かくなる季節",
        "compounds": [
            { "word": "春分", "reading": "しゅんぶん", "sentence": "春分の日をむかえる。" },
            { "word": "春", "reading": "はる", "sentence": "春に桜がさく。" }
        ]
    },
    {
        "id": 159,
        "kanji": "書",
        "grade": 2,
        "onyomi": ["ショ"],
        "kunyomi": ["か(く)"],
        "meaning": "字を書くこと",
        "compounds": [
            { "word": "図書館", "reading": "としょかん", "sentence": "図書館で本を読む。" },
            { "word": "書く", "reading": "かく", "sentence": "手紙を書く。" }
        ]
    },
    {
        "id": 160,
        "kanji": "少",
        "grade": 2,
        "onyomi": ["ショウ"],
        "kunyomi": ["すく(ない)", "すこ(し)"],
        "meaning": "数や量が少ないこと",
        "compounds": [
            { "word": "少年", "reading": "しょうねん", "sentence": "少年野球チームに入る。" },
            { "word": "少し", "reading": "すこし", "sentence": "少し休む。" }
        ]
    },
    {
        "id": 161,
        "kanji": "場",
        "grade": 2,
        "onyomi": ["ジョウ"],
        "kunyomi": ["ば"],
        "meaning": "物事が行われるところ",
        "compounds": [
            { "word": "場所", "reading": "ばしょ", "sentence": "待ち合わせの場所に行く。" },
            { "word": "工場", "reading": "こうじょう", "sentence": "工場で車を作る。" }
        ]
    },
    {
        "id": 162,
        "kanji": "色",
        "grade": 2,
        "onyomi": ["ショク", "シキ"],
        "kunyomi": ["いろ"],
        "meaning": "赤や青などのいろ",
        "compounds": [
            { "word": "色紙", "reading": "いろがみ", "sentence": "色紙で鶴を折る。" },
            { "word": "色", "reading": "いろ", "sentence": "好きな色は青だ。" }
        ]
    },
    {
        "id": 163,
        "kanji": "食",
        "grade": 2,
        "onyomi": ["ショク"],
        "kunyomi": ["た(べる)", "く(う)"],
        "meaning": "食べること",
        "compounds": [
            { "word": "食事", "reading": "しょくじ", "sentence": "家族で食事をする。" },
            { "word": "食べる", "reading": "たべる", "sentence": "ご飯を食べる。" }
        ]
    },
    {
        "id": 164,
        "kanji": "心",
        "grade": 2,
        "onyomi": ["シン"],
        "kunyomi": ["こころ"],
        "meaning": "気持ちや思い",
        "compounds": [
            { "word": "安心", "reading": "あんしん", "sentence": "見つかって安心した。" },
            { "word": "心", "reading": "こころ", "sentence": "心を込めて手紙を書く。" }
        ]
    },
    {
        "id": 165,
        "kanji": "新",
        "grade": 2,
        "onyomi": ["シン"],
        "kunyomi": ["あたら(しい)", "にい"],
        "meaning": "できたばかりのこと",
        "compounds": [
            { "word": "新聞", "reading": "しんぶん", "sentence": "新聞を読む。" },
            { "word": "新しい", "reading": "あたらしい", "sentence": "新しい靴を買う。" }
        ]
    },
    {
        "id": 166,
        "kanji": "親",
        "grade": 2,
        "onyomi": ["シン"],
        "kunyomi": ["おや", "した(しい)"],
        "meaning": "父や母、なかよしなこと",
        "compounds": [
            { "word": "親子", "reading": "おやこ", "sentence": "親子で公園に行く。" },
            { "word": "親しい", "reading": "したしい", "sentence": "親しい友だちと遊ぶ。" }
        ]
    },
    {
        "id": 167,
        "kanji": "図",
        "grade": 2,
        "onyomi": ["ズ", "ト"],
        "kunyomi": ["はか(る)"],
        "meaning": "絵や地図のこと",
        "compounds": [
            { "word": "地図", "reading": "ちず", "sentence": "地図を見て歩く。" },
            { "word": "図書室", "reading": "としょしつ", "sentence": "図書室で本を借りる。" }
        ]
    },
    {
        "id": 168,
        "kanji": "数",
        "grade": 2,
        "onyomi": ["スウ"],
        "kunyomi": ["かず", "かぞ(える)"],
        "meaning": "数字やかぞえること",
        "compounds": [
            { "word": "数字", "reading": "すうじ", "sentence": "数字を書く。" },
            { "word": "数える", "reading": "かぞえる", "sentence": "りんごの数を数える。" }
        ]
    },
    {
        "id": 169,
        "kanji": "西",
        "grade": 2,
        "onyomi": ["セイ", "サイ"],
        "kunyomi": ["にし"],
        "meaning": "太陽がしずむ方角",
        "compounds": [
            { "word": "西洋", "reading": "せいよう", "sentence": "西洋の絵を見る。" },
            { "word": "西", "reading": "にし", "sentence": "太陽が西にしずむ。" }
        ]
    },
    {
        "id": 170,
        "kanji": "声",
        "grade": 2,
        "onyomi": ["セイ", "ショウ"],
        "kunyomi": ["こえ"],
        "meaning": "口から出す音",
        "compounds": [
            { "word": "声援", "reading": "せいえん", "sentence": "声援を送る。" },
            { "word": "声", "reading": "こえ", "sentence": "大きな声であいさつする。" }
        ]
    },
    {
        "id": 171,
        "kanji": "星",
        "grade": 2,
        "onyomi": ["セイ", "ショウ"],
        "kunyomi": ["ほし"],
        "meaning": "夜空にひかるもの",
        "compounds": [
            { "word": "星座", "reading": "せいざ", "sentence": "星座を観察する。" },
            { "word": "星", "reading": "ほし", "sentence": "星がきれいに光る。" }
        ]
    },
    {
        "id": 172,
        "kanji": "晴",
        "grade": 2,
        "onyomi": ["セイ"],
        "kunyomi": ["は(れる)", "は(らす)"],
        "meaning": "空が晴れて青いこと",
        "compounds": [
            { "word": "晴天", "reading": "せいてん", "sentence": "晴天の日に出かける。" },
            { "word": "晴れる", "reading": "はれる", "sentence": "明日は晴れるだろう。" }
        ]
    },
    {
        "id": 173,
        "kanji": "切",
        "grade": 2,
        "onyomi": ["セツ", "サイ"],
        "kunyomi": ["き(る)", "き(れる)"],
        "meaning": "物をきること",
        "compounds": [
            { "word": "切符", "reading": "きっぷ", "sentence": "電車の切符を買う。" },
            { "word": "切る", "reading": "きる", "sentence": "紙をはさみで切る。" }
        ]
    },
    {
        "id": 174,
        "kanji": "雪",
        "grade": 2,
        "onyomi": ["セツ"],
        "kunyomi": ["ゆき"],
        "meaning": "空から降る白いもの",
        "compounds": [
            { "word": "雪国", "reading": "ゆきぐに", "sentence": "雪国で雪だるまを作る。" },
            { "word": "雪", "reading": "ゆき", "sentence": "雪がたくさん降った。" }
        ]
    },
    {
        "id": 175,
        "kanji": "船",
        "grade": 2,
        "onyomi": ["セン"],
        "kunyomi": ["ふね", "ふな"],
        "meaning": "海や川を進む乗り物",
        "compounds": [
            { "word": "船長", "reading": "せんちょう", "sentence": "船長が船を動かす。" },
            { "word": "船", "reading": "ふね", "sentence": "船に乗って旅をする。" }
        ]
    },
    {
        "id": 176,
        "kanji": "線",
        "grade": 2,
        "onyomi": ["セン"],
        "kunyomi": [],
        "meaning": "細く長くつづく筋",
        "compounds": [
            { "word": "直線", "reading": "ちょくせん", "sentence": "直線を定規で引く。" },
            { "word": "線路", "reading": "せんろ", "sentence": "電車が線路を走る。" }
        ]
    },
    {
        "id": 177,
        "kanji": "前",
        "grade": 2,
        "onyomi": ["ゼン"],
        "kunyomi": ["まえ"],
        "meaning": "まえのこと",
        "compounds": [
            { "word": "午前", "reading": "ごぜん", "sentence": "午前中に勉強する。" },
            { "word": "前", "reading": "まえ", "sentence": "駅の前で待つ。" }
        ]
    },
    {
        "id": 178,
        "kanji": "組",
        "grade": 2,
        "onyomi": ["ソ"],
        "kunyomi": ["く(む)", "くみ"],
        "meaning": "あつまりやクラス",
        "compounds": [
            { "word": "組合", "reading": "くみあい", "sentence": "組合の集まりに行く。" },
            { "word": "組", "reading": "くみ", "sentence": "一組で仲良く遊ぶ。" }
        ]
    },
    {
        "id": 179,
        "kanji": "走",
        "grade": 2,
        "onyomi": ["ソウ"],
        "kunyomi": ["はし(る)"],
        "meaning": "走ること",
        "compounds": [
            { "word": "走者", "reading": "そうしゃ", "sentence": "走者がゴールを目指す。" },
            { "word": "走る", "reading": "はしる", "sentence": "公園を走る。" }
        ]
    },
    {
        "id": 180,
        "kanji": "多",
        "grade": 2,
        "onyomi": ["タ"],
        "kunyomi": ["おお(い)"],
        "meaning": "数や量が多いこと",
        "compounds": [
            { "word": "多数", "reading": "たすう", "sentence": "多数の人が集まる。" },
            { "word": "多い", "reading": "おおい", "sentence": "公園に人が多い。" }
        ]
    },
    {
        "id": 181,
        "kanji": "太",
        "grade": 2,
        "onyomi": ["タイ", "タ"],
        "kunyomi": ["ふと(い)", "ふと(る)"],
        "meaning": "ふといこと",
        "compounds": [
            { "word": "太陽", "reading": "たいよう", "sentence": "太陽が明るく照る。" },
            { "word": "太い", "reading": "ふとい", "sentence": "太い木の幹。" }
        ]
    },
    {
        "id": 182,
        "kanji": "体",
        "grade": 2,
        "onyomi": ["タイ", "テイ"],
        "kunyomi": ["からだ"],
        "meaning": "人や動物のからだ",
        "compounds": [
            { "word": "体育", "reading": "たいいく", "sentence": "体育でかけっこをする。" },
            { "word": "体", "reading": "からだ", "sentence": "体を動かす。" }
        ]
    },
    {
        "id": 183,
        "kanji": "台",
        "grade": 2,
        "onyomi": ["ダイ", "タイ"],
        "kunyomi": [],
        "meaning": "物をのせる台のこと",
        "compounds": [
            { "word": "台風", "reading": "たいふう", "sentence": "台風が近づく。" },
            { "word": "一台", "reading": "いちだい", "sentence": "車が一台とまる。" }
        ]
    },
    {
        "id": 184,
        "kanji": "地",
        "grade": 2,
        "onyomi": ["チ", "ジ"],
        "kunyomi": [],
        "meaning": "大地や土地のこと",
        "compounds": [
            { "word": "地図", "reading": "ちず", "sentence": "地図を見る。" },
            { "word": "地面", "reading": "じめん", "sentence": "地面に絵をかく。" }
        ]
    },
    {
        "id": 185,
        "kanji": "池",
        "grade": 2,
        "onyomi": ["チ"],
        "kunyomi": ["いけ"],
        "meaning": "水がたまっている場所",
        "compounds": [
            { "word": "電池", "reading": "でんち", "sentence": "電池を交換する。" },
            { "word": "池", "reading": "いけ", "sentence": "池に魚がいる。" }
        ]
    },
    {
        "id": 186,
        "kanji": "知",
        "grade": 2,
        "onyomi": ["チ"],
        "kunyomi": ["し(る)"],
        "meaning": "知ることやわかること",
        "compounds": [
            { "word": "知識", "reading": "ちしき", "sentence": "知識を増やす。" },
            { "word": "知る", "reading": "しる", "sentence": "答えを知る。" }
        ]
    },
    {
        "id": 187,
        "kanji": "茶",
        "grade": 2,
        "onyomi": ["チャ", "サ"],
        "kunyomi": [],
        "meaning": "飲み物のお茶",
        "compounds": [
            { "word": "茶色", "reading": "ちゃいろ", "sentence": "茶色のかばんを持つ。" },
            { "word": "お茶", "reading": "おちゃ", "sentence": "お茶を飲む。" }
        ]
    },
    {
        "id": 188,
        "kanji": "昼",
        "grade": 2,
        "onyomi": ["チュウ"],
        "kunyomi": ["ひる"],
        "meaning": "太陽が出ている間、お昼",
        "compounds": [
            { "word": "昼食", "reading": "ちゅうしょく", "sentence": "昼食を食べる。" },
            { "word": "昼", "reading": "ひる", "sentence": "昼にお弁当を食べる。" }
        ]
    },
    {
        "id": 189,
        "kanji": "長",
        "grade": 2,
        "onyomi": ["チョウ"],
        "kunyomi": ["なが(い)"],
        "meaning": "ながいことや一番上の人",
        "compounds": [
            { "word": "校長", "reading": "こうちょう", "sentence": "校長先生の話を聞く。" },
            { "word": "長い", "reading": "ながい", "sentence": "髪が長い。" }
        ]
    },
    {
        "id": 190,
        "kanji": "鳥",
        "grade": 2,
        "onyomi": ["チョウ"],
        "kunyomi": ["とり"],
        "meaning": "空を飛ぶ生き物",
        "compounds": [
            { "word": "白鳥", "reading": "はくちょう", "sentence": "白鳥が湖に泳ぐ。" },
            { "word": "鳥", "reading": "とり", "sentence": "鳥が空を飛ぶ。" }
        ]
    },
    {
        "id": 191,
        "kanji": "朝",
        "grade": 2,
        "onyomi": ["チョウ"],
        "kunyomi": ["あさ"],
        "meaning": "一日のはじめの時間",
        "compounds": [
            { "word": "朝食", "reading": "ちょうしょく", "sentence": "朝食を食べる。" },
            { "word": "朝", "reading": "あさ", "sentence": "朝早く起きる。" }
        ]
    },
    {
        "id": 192,
        "kanji": "直",
        "grade": 2,
        "onyomi": ["チョク", "ジキ"],
        "kunyomi": ["なお(す)", "なお(る)"],
        "meaning": "まっすぐやなおすこと",
        "compounds": [
            { "word": "正直", "reading": "しょうじき", "sentence": "正直に話す。" },
            { "word": "直す", "reading": "なおす", "sentence": "まちがいを直す。" }
        ]
    },
    {
        "id": 193,
        "kanji": "通",
        "grade": 2,
        "onyomi": ["ツウ"],
        "kunyomi": ["とお(る)", "かよ(う)"],
        "meaning": "通ることや行き来すること",
        "compounds": [
            { "word": "交通", "reading": "こうつう", "sentence": "交通に気をつける。" },
            { "word": "通う", "reading": "かよう", "sentence": "学校に通う。" }
        ]
    },
    {
        "id": 194,
        "kanji": "弟",
        "grade": 2,
        "onyomi": ["テイ", "ダイ"],
        "kunyomi": ["おとうと"],
        "meaning": "年下の男のきょうだい",
        "compounds": [
            { "word": "兄弟", "reading": "きょうだい", "sentence": "兄弟でけんかする。" },
            { "word": "弟", "reading": "おとうと", "sentence": "弟と遊ぶ。" }
        ]
    },
    {
        "id": 195,
        "kanji": "店",
        "grade": 2,
        "onyomi": ["テン"],
        "kunyomi": ["みせ"],
        "meaning": "物を売るところ",
        "compounds": [
            { "word": "店員", "reading": "てんいん", "sentence": "店員さんにあいさつする。" },
            { "word": "店", "reading": "みせ", "sentence": "店でパンを買う。" }
        ]
    },
    {
        "id": 196,
        "kanji": "点",
        "grade": 2,
        "onyomi": ["テン"],
        "kunyomi": [],
        "meaning": "小さなしるしや点数",
        "compounds": [
            { "word": "点数", "reading": "てんすう", "sentence": "テストの点数がいい。" },
            { "word": "点", "reading": "てん", "sentence": "紙に点をうつ。" }
        ]
    },
    {
        "id": 197,
        "kanji": "電",
        "grade": 2,
        "onyomi": ["デン"],
        "kunyomi": [],
        "meaning": "電気のこと",
        "compounds": [
            { "word": "電車", "reading": "でんしゃ", "sentence": "電車に乗って行く。" },
            { "word": "電気", "reading": "でんき", "sentence": "電気をつける。" }
        ]
    },
    {
        "id": 198,
        "kanji": "刀",
        "grade": 2,
        "onyomi": ["トウ"],
        "kunyomi": ["かたな"],
        "meaning": "武士が使う刃物",
        "compounds": [
            { "word": "木刀", "reading": "ぼくとう", "sentence": "木刀で素振りをする。" },
            { "word": "刀", "reading": "かたな", "sentence": "刀を腰にさす。" }
        ]
    },
    {
        "id": 199,
        "kanji": "冬",
        "grade": 2,
        "onyomi": ["トウ"],
        "kunyomi": ["ふゆ"],
        "meaning": "寒い季節",
        "compounds": [
            { "word": "冬休み", "reading": "ふゆやすみ", "sentence": "冬休みにスキーをする。" },
            { "word": "冬", "reading": "ふゆ", "sentence": "冬は雪が降る。" }
        ]
    },
    {
        "id": 200,
        "kanji": "当",
        "grade": 2,
        "onyomi": ["トウ"],
        "kunyomi": ["あ(たる)", "あ(てる)"],
        "meaning": "あたることや正しいこと",
        "compounds": [
            { "word": "本当", "reading": "ほんとう", "sentence": "本当のことを言う。" },
            { "word": "当たる", "reading": "あたる", "sentence": "矢が的に当たる。" }
        ]
    },
    {
        "id": 201,
        "kanji": "東",
        "grade": 2,
        "onyomi": ["トウ"],
        "kunyomi": ["ひがし"],
        "meaning": "太陽がのぼる方角",
        "compounds": [
            { "word": "東西", "reading": "とうざい", "sentence": "東西南北を覚える。" },
            { "word": "東", "reading": "ひがし", "sentence": "太陽が東からのぼる。" }
        ]
    },
    {
        "id": 202,
        "kanji": "答",
        "grade": 2,
        "onyomi": ["トウ"],
        "kunyomi": ["こた(える)", "こた(え)"],
        "meaning": "こたえること",
        "compounds": [
            { "word": "問答", "reading": "もんどう", "sentence": "先生と問答する。" },
            { "word": "答える", "reading": "こたえる", "sentence": "質問に答える。" }
        ]
    },
    {
        "id": 203,
        "kanji": "頭",
        "grade": 2,
        "onyomi": ["トウ", "ズ"],
        "kunyomi": ["あたま", "かしら"],
        "meaning": "体の一番上の部分",
        "compounds": [
            { "word": "頭上", "reading": "ずじょう", "sentence": "頭上に気をつける。" },
            { "word": "頭", "reading": "あたま", "sentence": "頭をなでる。" }
        ]
    },
    {
        "id": 204,
        "kanji": "同",
        "grade": 2,
        "onyomi": ["ドウ"],
        "kunyomi": ["おな(じ)"],
        "meaning": "同じであること",
        "compounds": [
            { "word": "同時", "reading": "どうじ", "sentence": "同時にスタートする。" },
            { "word": "同じ", "reading": "おなじ", "sentence": "同じ答えになる。" }
        ]
    },
    {
        "id": 205,
        "kanji": "道",
        "grade": 2,
        "onyomi": ["ドウ"],
        "kunyomi": ["みち"],
        "meaning": "人が歩くところ",
        "compounds": [
            { "word": "道路", "reading": "どうろ", "sentence": "道路を渡る。" },
            { "word": "道", "reading": "みち", "sentence": "道を歩く。" }
        ]
    },
    {
        "id": 206,
        "kanji": "読",
        "grade": 2,
        "onyomi": ["ドク", "トウ"],
        "kunyomi": ["よ(む)"],
        "meaning": "字や本をよむこと",
        "compounds": [
            { "word": "読書", "reading": "どくしょ", "sentence": "読書が好きだ。" },
            { "word": "読む", "reading": "よむ", "sentence": "本を読む。" }
        ]
    },
    {
        "id": 207,
        "kanji": "内",
        "grade": 2,
        "onyomi": ["ナイ"],
        "kunyomi": ["うち"],
        "meaning": "うちがわのこと",
        "compounds": [
            { "word": "内容", "reading": "ないよう", "sentence": "内容をたしかめる。" },
            { "word": "内", "reading": "うち", "sentence": "家の内で遊ぶ。" }
        ]
    },
    {
        "id": 208,
        "kanji": "南",
        "grade": 2,
        "onyomi": ["ナン"],
        "kunyomi": ["みなみ"],
        "meaning": "太陽がよく当たる方角",
        "compounds": [
            { "word": "南極", "reading": "なんきょく", "sentence": "南極はとても寒い。" },
            { "word": "南", "reading": "みなみ", "sentence": "鳥が南へ飛ぶ。" }
        ]
    },
    {
        "id": 209,
        "kanji": "肉",
        "grade": 2,
        "onyomi": ["ニク"],
        "kunyomi": [],
        "meaning": "食べる動物の体の部分",
        "compounds": [
            { "word": "牛肉", "reading": "ぎゅうにく", "sentence": "牛肉を焼いて食べる。" },
            { "word": "肉", "reading": "にく", "sentence": "肉を食べる。" }
        ]
    },
    {
        "id": 210,
        "kanji": "馬",
        "grade": 2,
        "onyomi": ["バ"],
        "kunyomi": ["うま"],
        "meaning": "人を乗せて走る動物",
        "compounds": [
            { "word": "馬車", "reading": "ばしゃ", "sentence": "馬車に乗る。" },
            { "word": "馬", "reading": "うま", "sentence": "馬が走る。" }
        ]
    },
    {
        "id": 211,
        "kanji": "売",
        "grade": 2,
        "onyomi": ["バイ"],
        "kunyomi": ["う(る)", "う(れる)"],
        "meaning": "品物をうること",
        "compounds": [
            { "word": "発売", "reading": "はつばい", "sentence": "新しいゲームが発売される。" },
            { "word": "売る", "reading": "うる", "sentence": "店でパンを売る。" }
        ]
    },
    {
        "id": 212,
        "kanji": "買",
        "grade": 2,
        "onyomi": ["バイ"],
        "kunyomi": ["か(う)"],
        "meaning": "品物をかうこと",
        "compounds": [
            { "word": "売買", "reading": "ばいばい", "sentence": "車を売買する。" },
            { "word": "買う", "reading": "かう", "sentence": "文房具を買う。" }
        ]
    },
    {
        "id": 213,
        "kanji": "麦",
        "grade": 2,
        "onyomi": ["バク"],
        "kunyomi": ["むぎ"],
        "meaning": "パンやうどんの原料になる植物",
        "compounds": [
            { "word": "麦茶", "reading": "むぎちゃ", "sentence": "夏は麦茶を飲む。" },
            { "word": "麦", "reading": "むぎ", "sentence": "畑に麦が育つ。" }
        ]
    },
    {
        "id": 214,
        "kanji": "半",
        "grade": 2,
        "onyomi": ["ハン"],
        "kunyomi": ["なか(ば)"],
        "meaning": "半分のこと",
        "compounds": [
            { "word": "半分", "reading": "はんぶん", "sentence": "りんごを半分に切る。" },
            { "word": "半ば", "reading": "なかば", "sentence": "月の半ばに旅行する。" }
        ]
    },
    {
        "id": 215,
        "kanji": "番",
        "grade": 2,
        "onyomi": ["バン"],
        "kunyomi": [],
        "meaning": "順番のこと",
        "compounds": [
            { "word": "番号", "reading": "ばんごう", "sentence": "番号を覚える。" },
            { "word": "一番", "reading": "いちばん", "sentence": "一番に走る。" }
        ]
    },
    {
        "id": 216,
        "kanji": "父",
        "grade": 2,
        "onyomi": ["フ"],
        "kunyomi": ["ちち"],
        "meaning": "お父さんのこと",
        "compounds": [
            { "word": "父母", "reading": "ふぼ", "sentence": "父母に感謝する。" },
            { "word": "父", "reading": "ちち", "sentence": "父と公園に行く。" }
        ]
    },
    {
        "id": 217,
        "kanji": "風",
        "grade": 2,
        "onyomi": ["フウ", "フ"],
        "kunyomi": ["かぜ", "かざ"],
        "meaning": "空気の流れ",
        "compounds": [
            { "word": "台風", "reading": "たいふう", "sentence": "台風が近づく。" },
            { "word": "風", "reading": "かぜ", "sentence": "風が気持ちいい。" }
        ]
    },
    {
        "id": 218,
        "kanji": "分",
        "grade": 2,
        "onyomi": ["ブン", "フン", "ブ"],
        "kunyomi": ["わ(ける)", "わ(かる)"],
        "meaning": "わけることや〜分",
        "compounds": [
            { "word": "五分", "reading": "ごふん", "sentence": "あと五分で始まる。" },
            { "word": "分ける", "reading": "わける", "sentence": "お菓子を分ける。" }
        ]
    },
    {
        "id": 219,
        "kanji": "聞",
        "grade": 2,
        "onyomi": ["ブン", "モン"],
        "kunyomi": ["き(く)", "き(こえる)"],
        "meaning": "耳で聞くこと",
        "compounds": [
            { "word": "新聞", "reading": "しんぶん", "sentence": "新聞を読む。" },
            { "word": "聞く", "reading": "きく", "sentence": "音楽を聞く。" }
        ]
    },
    {
        "id": 220,
        "kanji": "米",
        "grade": 2,
        "onyomi": ["ベイ", "マイ"],
        "kunyomi": ["こめ"],
        "meaning": "ご飯になる穀物",
        "compounds": [
            { "word": "米国", "reading": "べいこく", "sentence": "米国について調べる。" },
            { "word": "米", "reading": "こめ", "sentence": "田んぼで米を作る。" }
        ]
    },
    {
        "id": 221,
        "kanji": "歩",
        "grade": 2,
        "onyomi": ["ホ", "ブ"],
        "kunyomi": ["ある(く)", "あゆ(む)"],
        "meaning": "あるくこと",
        "compounds": [
            { "word": "歩道", "reading": "ほどう", "sentence": "歩道を歩く。" },
            { "word": "歩く", "reading": "あるく", "sentence": "公園を歩く。" }
        ]
    },
    {
        "id": 222,
        "kanji": "母",
        "grade": 2,
        "onyomi": ["ボ"],
        "kunyomi": ["はは"],
        "meaning": "お母さんのこと",
        "compounds": [
            { "word": "母親", "reading": "ははおや", "sentence": "母親と買い物に行く。" },
            { "word": "母", "reading": "はは", "sentence": "母と料理を作る。" }
        ]
    },
    {
        "id": 223,
        "kanji": "方",
        "grade": 2,
        "onyomi": ["ホウ"],
        "kunyomi": ["かた"],
        "meaning": "方向ややり方",
        "compounds": [
            { "word": "方向", "reading": "ほうこう", "sentence": "方向をたしかめる。" },
            { "word": "方", "reading": "かた", "sentence": "やり方を教わる。" }
        ]
    },
    {
        "id": 224,
        "kanji": "北",
        "grade": 2,
        "onyomi": ["ホク"],
        "kunyomi": ["きた"],
        "meaning": "太陽が当たりにくい方角",
        "compounds": [
            { "word": "北極", "reading": "ほっきょく", "sentence": "北極はとても寒い。" },
            { "word": "北", "reading": "きた", "sentence": "鳥が北へ帰る。" }
        ]
    },
    {
        "id": 225,
        "kanji": "毎",
        "grade": 2,
        "onyomi": ["マイ"],
        "kunyomi": [],
        "meaning": "いつも、そのたびごと",
        "compounds": [
            { "word": "毎日", "reading": "まいにち", "sentence": "毎日勉強する。" },
            { "word": "毎朝", "reading": "まいあさ", "sentence": "毎朝散歩する。" }
        ]
    },
    {
        "id": 226,
        "kanji": "妹",
        "grade": 2,
        "onyomi": ["マイ"],
        "kunyomi": ["いもうと"],
        "meaning": "年下の女のきょうだい",
        "compounds": [
            { "word": "姉妹", "reading": "しまい", "sentence": "姉妹で遊ぶ。" },
            { "word": "妹", "reading": "いもうと", "sentence": "妹と絵をかく。" }
        ]
    },
    {
        "id": 227,
        "kanji": "万",
        "grade": 2,
        "onyomi": ["マン"],
        "kunyomi": [],
        "meaning": "大きな数、一万",
        "compounds": [
            { "word": "万年筆", "reading": "まんねんひつ", "sentence": "万年筆で手紙を書く。" },
            { "word": "一万", "reading": "いちまん", "sentence": "一万円のおもちゃ。" }
        ]
    },
    {
        "id": 228,
        "kanji": "明",
        "grade": 2,
        "onyomi": ["メイ", "ミョウ"],
        "kunyomi": ["あか(るい)", "あ(ける)"],
        "meaning": "あかるいこと",
        "compounds": [
            { "word": "説明", "reading": "せつめい", "sentence": "やり方を説明する。" },
            { "word": "明るい", "reading": "あかるい", "sentence": "明るい部屋。" }
        ]
    },
    {
        "id": 229,
        "kanji": "鳴",
        "grade": 2,
        "onyomi": ["メイ"],
        "kunyomi": ["な(く)", "な(る)"],
        "meaning": "鳥や虫が声を出すこと",
        "compounds": [
            { "word": "悲鳴", "reading": "ひめい", "sentence": "悲鳴を上げる。" },
            { "word": "鳴く", "reading": "なく", "sentence": "小鳥が鳴く。" }
        ]
    },
    {
        "id": 230,
        "kanji": "毛",
        "grade": 2,
        "onyomi": ["モウ"],
        "kunyomi": ["け"],
        "meaning": "体に生えているもの",
        "compounds": [
            { "word": "毛布", "reading": "もうふ", "sentence": "毛布にくるまる。" },
            { "word": "毛", "reading": "け", "sentence": "犬の毛をブラシでとかす。" }
        ]
    },
    {
        "id": 231,
        "kanji": "門",
        "grade": 2,
        "onyomi": ["モン"],
        "kunyomi": ["かど"],
        "meaning": "家や学校の出入り口",
        "compounds": [
            { "word": "校門", "reading": "こうもん", "sentence": "校門で友だちと会う。" },
            { "word": "門", "reading": "かど", "sentence": "門の前で待つ。" }
        ]
    },
    {
        "id": 232,
        "kanji": "夜",
        "grade": 2,
        "onyomi": ["ヤ"],
        "kunyomi": ["よる", "よ"],
        "meaning": "暗くなってからの時間",
        "compounds": [
            { "word": "夜食", "reading": "やしょく", "sentence": "夜食を食べる。" },
            { "word": "夜", "reading": "よる", "sentence": "夜に星を見る。" }
        ]
    },
    {
        "id": 233,
        "kanji": "野",
        "grade": 2,
        "onyomi": ["ヤ"],
        "kunyomi": ["の"],
        "meaning": "広い野原",
        "compounds": [
            { "word": "野原", "reading": "のはら", "sentence": "野原で虫を捕まえる。" },
            { "word": "野菜", "reading": "やさい", "sentence": "野菜を食べる。" }
        ]
    },
    {
        "id": 234,
        "kanji": "友",
        "grade": 2,
        "onyomi": ["ユウ"],
        "kunyomi": ["とも"],
        "meaning": "仲のよい人",
        "compounds": [
            { "word": "友人", "reading": "ゆうじん", "sentence": "友人と遊ぶ。" },
            { "word": "友だち", "reading": "ともだち", "sentence": "友だちと公園に行く。" }
        ]
    },
    {
        "id": 235,
        "kanji": "用",
        "grade": 2,
        "onyomi": ["ヨウ"],
        "kunyomi": ["もち(いる)"],
        "meaning": "使うこと",
        "compounds": [
            { "word": "用意", "reading": "ようい", "sentence": "出かける用意をする。" },
            { "word": "用いる", "reading": "もちいる", "sentence": "道具を用いる。" }
        ]
    },
    {
        "id": 236,
        "kanji": "曜",
        "grade": 2,
        "onyomi": ["ヨウ"],
        "kunyomi": [],
        "meaning": "曜日をあらわすことば",
        "compounds": [
            { "word": "曜日", "reading": "ようび", "sentence": "今日は何曜日ですか。" },
            { "word": "月曜", "reading": "げつよう", "sentence": "月曜から学校が始まる。" }
        ]
    },
    {
        "id": 237,
        "kanji": "来",
        "grade": 2,
        "onyomi": ["ライ"],
        "kunyomi": ["く(る)", "きた(る)"],
        "meaning": "こちらに来ること",
        "compounds": [
            { "word": "来年", "reading": "らいねん", "sentence": "来年は三年生になる。" },
            { "word": "来る", "reading": "くる", "sentence": "友だちが来る。" }
        ]
    },
    {
        "id": 238,
        "kanji": "里",
        "grade": 2,
        "onyomi": ["リ"],
        "kunyomi": ["さと"],
        "meaning": "人が住む田舎の村",
        "compounds": [
            { "word": "里山", "reading": "さとやま", "sentence": "里山を散歩する。" },
            { "word": "里", "reading": "さと", "sentence": "祖父の里へ行く。" }
        ]
    },
    {
        "id": 239,
        "kanji": "理",
        "grade": 2,
        "onyomi": ["リ"],
        "kunyomi": [],
        "meaning": "筋道やわけ",
        "compounds": [
            { "word": "理科", "reading": "りか", "sentence": "理科の実験をする。" },
            { "word": "料理", "reading": "りょうり", "sentence": "料理を作る。" }
        ]
    },
    {
        "id": 240,
        "kanji": "話",
        "grade": 2,
        "onyomi": ["ワ"],
        "kunyomi": ["はな(す)", "はなし"],
        "meaning": "話すこと",
        "compounds": [
            { "word": "電話", "reading": "でんわ", "sentence": "電話をかける。" },
            { "word": "話す", "reading": "はなす", "sentence": "友だちと話す。" }
        ]
    },
    {
        "id": 241,
        "kanji": "悪",
        "grade": 3,
        "onyomi": ["アク", "オ"],
        "kunyomi": ["わる(い)"],
        "meaning": "よくないこと",
        "compounds": [
            { "word": "悪者", "reading": "わるもの", "sentence": "物語の悪者をたおす。" },
            { "word": "悪い", "reading": "わるい", "sentence": "うそをつくのは悪い。" }
        ]
    },
    {
        "id": 242,
        "kanji": "安",
        "grade": 3,
        "onyomi": ["アン"],
        "kunyomi": ["やす(い)"],
        "meaning": "やすいこと、しんぱいがないこと",
        "compounds": [
            { "word": "安心", "reading": "あんしん", "sentence": "母のえがおで安心した。" },
            { "word": "安い", "reading": "やすい", "sentence": "このお菓子は安い。" }
        ]
    },
    {
        "id": 243,
        "kanji": "暗",
        "grade": 3,
        "onyomi": ["アン"],
        "kunyomi": ["くら(い)"],
        "meaning": "くらいこと",
        "compounds": [
            { "word": "暗記", "reading": "あんき", "sentence": "九九を暗記する。" },
            { "word": "暗い", "reading": "くらい", "sentence": "夜道は暗い。" }
        ]
    },
    {
        "id": 244,
        "kanji": "医",
        "grade": 3,
        "onyomi": ["イ"],
        "kunyomi": [],
        "meaning": "病気をなおすこと",
        "compounds": [
            { "word": "医者", "reading": "いしゃ", "sentence": "医者に病気をみてもらう。" },
            { "word": "医院", "reading": "いいん", "sentence": "近くの医院に行く。" }
        ]
    },
    {
        "id": 245,
        "kanji": "委",
        "grade": 3,
        "onyomi": ["イ"],
        "kunyomi": ["ゆだ(ねる)"],
        "meaning": "まかせること",
        "compounds": [
            { "word": "委員", "reading": "いいん", "sentence": "クラスの委員になる。" },
            { "word": "委員会", "reading": "いいんかい", "sentence": "委員会で話し合う。" }
        ]
    },
    {
        "id": 246,
        "kanji": "意",
        "grade": 3,
        "onyomi": ["イ"],
        "kunyomi": [],
        "meaning": "心の中で思うこと",
        "compounds": [
            { "word": "意味", "reading": "いみ", "sentence": "言葉の意味を調べる。" },
            { "word": "注意", "reading": "ちゅうい", "sentence": "車に注意する。" }
        ]
    },
    {
        "id": 247,
        "kanji": "育",
        "grade": 3,
        "onyomi": ["イク"],
        "kunyomi": ["そだ(つ)", "そだ(てる)", "はぐく(む)"],
        "meaning": "そだつこと、そだてること",
        "compounds": [
            { "word": "教育", "reading": "きょういく", "sentence": "学校で教育を受ける。" },
            { "word": "育つ", "reading": "そだつ", "sentence": "花が大きく育つ。" }
        ]
    },
    {
        "id": 248,
        "kanji": "員",
        "grade": 3,
        "onyomi": ["イン"],
        "kunyomi": [],
        "meaning": "なかまに入っている人",
        "compounds": [
            { "word": "会員", "reading": "かいいん", "sentence": "図書館の会員になる。" },
            { "word": "店員", "reading": "てんいん", "sentence": "店員さんにお礼を言う。" }
        ]
    },
    {
        "id": 249,
        "kanji": "院",
        "grade": 3,
        "onyomi": ["イン"],
        "kunyomi": [],
        "meaning": "大きな建物",
        "compounds": [
            { "word": "病院", "reading": "びょういん", "sentence": "病院で注射をした。" },
            { "word": "入院", "reading": "にゅういん", "sentence": "祖父が入院した。" }
        ]
    },
    {
        "id": 250,
        "kanji": "飲",
        "grade": 3,
        "onyomi": ["イン"],
        "kunyomi": ["の(む)"],
        "meaning": "のむこと",
        "compounds": [
            { "word": "飲み物", "reading": "のみもの", "sentence": "冷たい飲み物を飲む。" },
            { "word": "飲む", "reading": "のむ", "sentence": "毎朝牛乳を飲む。" }
        ]
    },
    {
        "id": 251,
        "kanji": "運",
        "grade": 3,
        "onyomi": ["ウン"],
        "kunyomi": ["はこ(ぶ)"],
        "meaning": "はこぶこと、めぐりあわせ",
        "compounds": [
            { "word": "運動", "reading": "うんどう", "sentence": "校庭で運動をする。" },
            { "word": "運ぶ", "reading": "はこぶ", "sentence": "荷物を運ぶ。" }
        ]
    },
    {
        "id": 252,
        "kanji": "泳",
        "grade": 3,
        "onyomi": ["エイ"],
        "kunyomi": ["およ(ぐ)"],
        "meaning": "およぐこと",
        "compounds": [
            { "word": "水泳", "reading": "すいえい", "sentence": "夏は水泳を習う。" },
            { "word": "泳ぐ", "reading": "およぐ", "sentence": "プールで泳ぐ。" }
        ]
    },
    {
        "id": 253,
        "kanji": "駅",
        "grade": 3,
        "onyomi": ["エキ"],
        "kunyomi": [],
        "meaning": "電車がとまる所",
        "compounds": [
            { "word": "駅前", "reading": "えきまえ", "sentence": "駅前で待ち合わせる。" },
            { "word": "駅員", "reading": "えきいん", "sentence": "駅員に道を聞く。" }
        ]
    },
    {
        "id": 254,
        "kanji": "央",
        "grade": 3,
        "onyomi": ["オウ"],
        "kunyomi": [],
        "meaning": "まんなか",
        "compounds": [
            { "word": "中央", "reading": "ちゅうおう", "sentence": "机を教室の中央に置く。" },
            { "word": "中央口", "reading": "ちゅうおうぐち", "sentence": "駅の中央口で待つ。" }
        ]
    },
    {
        "id": 255,
        "kanji": "横",
        "grade": 3,
        "onyomi": ["オウ"],
        "kunyomi": ["よこ"],
        "meaning": "よこの方向",
        "compounds": [
            { "word": "横断", "reading": "おうだん", "sentence": "横断歩道をわたる。" },
            { "word": "横", "reading": "よこ", "sentence": "本を横に並べる。" }
        ]
    },
    {
        "id": 256,
        "kanji": "屋",
        "grade": 3,
        "onyomi": ["オク"],
        "kunyomi": ["や"],
        "meaning": "いえ、店",
        "compounds": [
            { "word": "屋根", "reading": "やね", "sentence": "屋根に雪がつもる。" },
            { "word": "花屋", "reading": "はなや", "sentence": "花屋で花を買う。" }
        ]
    },
    {
        "id": 257,
        "kanji": "温",
        "grade": 3,
        "onyomi": ["オン"],
        "kunyomi": ["あたた(かい)", "あたた(める)", "あたた(まる)"],
        "meaning": "あたたかいこと",
        "compounds": [
            { "word": "体温", "reading": "たいおん", "sentence": "体温を測る。" },
            { "word": "温かい", "reading": "あたたかい", "sentence": "温かいスープを飲む。" }
        ]
    },
    {
        "id": 258,
        "kanji": "化",
        "grade": 3,
        "onyomi": ["カ", "ケ"],
        "kunyomi": ["ば(ける)", "ば(かす)"],
        "meaning": "すがたがかわること",
        "compounds": [
            { "word": "変化", "reading": "へんか", "sentence": "季節が変化する。" },
            { "word": "化ける", "reading": "ばける", "sentence": "きつねが化ける話。" }
        ]
    },
    {
        "id": 259,
        "kanji": "荷",
        "grade": 3,
        "onyomi": ["カ"],
        "kunyomi": ["に"],
        "meaning": "にもつ",
        "compounds": [
            { "word": "荷物", "reading": "にもつ", "sentence": "重い荷物を持つ。" },
            { "word": "手荷物", "reading": "てにもつ", "sentence": "手荷物を受け取る。" }
        ]
    },
    {
        "id": 260,
        "kanji": "界",
        "grade": 3,
        "onyomi": ["カイ"],
        "kunyomi": [],
        "meaning": "くぎられた範囲",
        "compounds": [
            { "word": "世界", "reading": "せかい", "sentence": "世界の国旗を覚える。" },
            { "word": "世界地図", "reading": "せかいちず", "sentence": "世界地図を見て国を探す。" }
        ]
    },
    {
        "id": 261,
        "kanji": "開",
        "grade": 3,
        "onyomi": ["カイ"],
        "kunyomi": ["ひら(く)", "あ(く)", "あ(ける)"],
        "meaning": "ひらくこと",
        "compounds": [
            { "word": "開店", "reading": "かいてん", "sentence": "朝九時に開店する。" },
            { "word": "開く", "reading": "ひらく", "sentence": "本を開く。" }
        ]
    },
    {
        "id": 262,
        "kanji": "階",
        "grade": 3,
        "onyomi": ["カイ"],
        "kunyomi": [],
        "meaning": "たてものの層",
        "compounds": [
            { "word": "階段", "reading": "かいだん", "sentence": "階段をのぼる。" },
            { "word": "二階", "reading": "にかい", "sentence": "二階の部屋で遊ぶ。" }
        ]
    },
    {
        "id": 263,
        "kanji": "寒",
        "grade": 3,
        "onyomi": ["カン"],
        "kunyomi": ["さむ(い)"],
        "meaning": "さむいこと",
        "compounds": [
            { "word": "寒い", "reading": "さむい", "sentence": "冬はとても寒い。" },
            { "word": "寒気", "reading": "かんき", "sentence": "熱が出て寒気がする。" }
        ]
    },
    {
        "id": 264,
        "kanji": "感",
        "grade": 3,
        "onyomi": ["カン"],
        "kunyomi": [],
        "meaning": "心で感じること",
        "compounds": [
            { "word": "感想", "reading": "かんそう", "sentence": "本を読んで感想を書く。" },
            { "word": "感動", "reading": "かんどう", "sentence": "映画を見て感動した。" }
        ]
    },
    {
        "id": 265,
        "kanji": "漢",
        "grade": 3,
        "onyomi": ["カン"],
        "kunyomi": [],
        "meaning": "漢字の「漢」、中国のこと",
        "compounds": [
            { "word": "漢字", "reading": "かんじ", "sentence": "漢字を毎日練習する。" },
            { "word": "漢字ドリル", "reading": "かんじドリル", "sentence": "漢字ドリルで復習する。" }
        ]
    },
    {
        "id": 266,
        "kanji": "館",
        "grade": 3,
        "onyomi": ["カン"],
        "kunyomi": [],
        "meaning": "大きな建物",
        "compounds": [
            { "word": "図書館", "reading": "としょかん", "sentence": "図書館で本を借りる。" },
            { "word": "美術館", "reading": "びじゅつかん", "sentence": "美術館で絵を見る。" }
        ]
    },
    {
        "id": 267,
        "kanji": "岸",
        "grade": 3,
        "onyomi": ["ガン"],
        "kunyomi": ["きし"],
        "meaning": "陸と水のさかいめ",
        "compounds": [
            { "word": "海岸", "reading": "かいがん", "sentence": "海岸で貝がらを拾う。" },
            { "word": "岸", "reading": "きし", "sentence": "川の岸を歩く。" }
        ]
    },
    {
        "id": 268,
        "kanji": "起",
        "grade": 3,
        "onyomi": ["キ"],
        "kunyomi": ["お(きる)", "お(こる)", "お(こす)"],
        "meaning": "おきること",
        "compounds": [
            { "word": "起立", "reading": "きりつ", "sentence": "先生の合図で起立する。" },
            { "word": "起きる", "reading": "おきる", "sentence": "朝六時に起きる。" }
        ]
    },
    {
        "id": 269,
        "kanji": "期",
        "grade": 3,
        "onyomi": ["キ", "ゴ"],
        "kunyomi": [],
        "meaning": "きまった間、とき",
        "compounds": [
            { "word": "期間", "reading": "きかん", "sentence": "夏休みの期間は長い。" },
            { "word": "時期", "reading": "じき", "sentence": "桜が咲く時期。" }
        ]
    },
    {
        "id": 270,
        "kanji": "客",
        "grade": 3,
        "onyomi": ["キャク", "カク"],
        "kunyomi": [],
        "meaning": "たずねてくる人",
        "compounds": [
            { "word": "客", "reading": "きゃく", "sentence": "お店にお客が来る。" },
            { "word": "観光客", "reading": "かんこうきゃく", "sentence": "観光客が写真をとる。" }
        ]
    },
    {
        "id": 271,
        "kanji": "究",
        "grade": 3,
        "onyomi": ["キュウ"],
        "kunyomi": ["きわ(める)"],
        "meaning": "深く調べること",
        "compounds": [
            { "word": "研究", "reading": "けんきゅう", "sentence": "昆虫を研究する。" },
            { "word": "研究者", "reading": "けんきゅうしゃ", "sentence": "研究者が発見をする。" }
        ]
    },
    {
        "id": 272,
        "kanji": "急",
        "grade": 3,
        "onyomi": ["キュウ"],
        "kunyomi": ["いそ(ぐ)"],
        "meaning": "はやいこと、たいへんなこと",
        "compounds": [
            { "word": "急行", "reading": "きゅうこう", "sentence": "急行電車に乗る。" },
            { "word": "急ぐ", "reading": "いそぐ", "sentence": "学校に急ぐ。" }
        ]
    },
    {
        "id": 273,
        "kanji": "級",
        "grade": 3,
        "onyomi": ["キュウ"],
        "kunyomi": [],
        "meaning": "くらい、クラス",
        "compounds": [
            { "word": "学級", "reading": "がっきゅう", "sentence": "学級会を開く。" },
            { "word": "上級", "reading": "じょうきゅう", "sentence": "上級生になる。" }
        ]
    },
    {
        "id": 274,
        "kanji": "宮",
        "grade": 3,
        "onyomi": ["キュウ", "グウ", "ク"],
        "kunyomi": ["みや"],
        "meaning": "神様をまつる建物",
        "compounds": [
            { "word": "宮殿", "reading": "きゅうでん", "sentence": "王様の宮殿を見学する。" },
            { "word": "神宮", "reading": "じんぐう", "sentence": "神宮にお参りする。" }
        ]
    },
    {
        "id": 275,
        "kanji": "球",
        "grade": 3,
        "onyomi": ["キュウ"],
        "kunyomi": ["たま"],
        "meaning": "まるいもの",
        "compounds": [
            { "word": "野球", "reading": "やきゅう", "sentence": "毎週野球の練習をする。" },
            { "word": "地球", "reading": "ちきゅう", "sentence": "地球はまるい。" }
        ]
    },
    {
        "id": 276,
        "kanji": "去",
        "grade": 3,
        "onyomi": ["キョ", "コ"],
        "kunyomi": ["さ(る)"],
        "meaning": "すぎさること",
        "compounds": [
            { "word": "去年", "reading": "きょねん", "sentence": "去年より背が伸びた。" },
            { "word": "過去", "reading": "かこ", "sentence": "過去の写真を見る。" }
        ]
    },
    {
        "id": 277,
        "kanji": "橋",
        "grade": 3,
        "onyomi": ["キョウ"],
        "kunyomi": ["はし"],
        "meaning": "川や道にかけるもの",
        "compounds": [
            { "word": "橋", "reading": "はし", "sentence": "橋をわたって公園へ行く。" },
            { "word": "鉄橋", "reading": "てっきょう", "sentence": "電車が鉄橋を通る。" }
        ]
    },
    {
        "id": 278,
        "kanji": "業",
        "grade": 3,
        "onyomi": ["ギョウ", "ゴウ"],
        "kunyomi": ["わざ"],
        "meaning": "しごと、まなぶこと",
        "compounds": [
            { "word": "授業", "reading": "じゅぎょう", "sentence": "算数の授業を受ける。" },
            { "word": "卒業", "reading": "そつぎょう", "sentence": "六年生で卒業する。" }
        ]
    },
    {
        "id": 279,
        "kanji": "曲",
        "grade": 3,
        "onyomi": ["キョク"],
        "kunyomi": ["ま(がる)", "ま(げる)"],
        "meaning": "まがること、うた",
        "compounds": [
            { "word": "曲がる", "reading": "まがる", "sentence": "右に曲がる。" },
            { "word": "曲", "reading": "きょく", "sentence": "好きな曲を歌う。" }
        ]
    },
    {
        "id": 280,
        "kanji": "局",
        "grade": 3,
        "onyomi": ["キョク"],
        "kunyomi": [],
        "meaning": "しごとをする場所",
        "compounds": [
            { "word": "郵便局", "reading": "ゆうびんきょく", "sentence": "郵便局で切手を買う。" },
            { "word": "薬局", "reading": "やっきょく", "sentence": "薬局で薬をもらう。" }
        ]
    },
    {
        "id": 281,
        "kanji": "銀",
        "grade": 3,
        "onyomi": ["ギン"],
        "kunyomi": [],
        "meaning": "銀色の金属",
        "compounds": [
            { "word": "銀行", "reading": "ぎんこう", "sentence": "銀行にお金をあずける。" },
            { "word": "銀色", "reading": "ぎんいろ", "sentence": "銀色のゆびわ。" }
        ]
    },
    {
        "id": 282,
        "kanji": "区",
        "grade": 3,
        "onyomi": ["ク"],
        "kunyomi": [],
        "meaning": "くぎられた地いき",
        "compounds": [
            { "word": "区役所", "reading": "くやくしょ", "sentence": "区役所に行く。" },
            { "word": "地区", "reading": "ちく", "sentence": "地区の祭りに参加する。" }
        ]
    },
    {
        "id": 283,
        "kanji": "苦",
        "grade": 3,
        "onyomi": ["ク"],
        "kunyomi": ["くる(しい)", "にが(い)"],
        "meaning": "つらいこと、にがいこと",
        "compounds": [
            { "word": "苦手", "reading": "にがて", "sentence": "算数が苦手だ。" },
            { "word": "苦しい", "reading": "くるしい", "sentence": "走って苦しい。" }
        ]
    },
    {
        "id": 284,
        "kanji": "具",
        "grade": 3,
        "onyomi": ["グ"],
        "kunyomi": [],
        "meaning": "どうぐ",
        "compounds": [
            { "word": "道具", "reading": "どうぐ", "sentence": "工作の道具を使う。" },
            { "word": "具合", "reading": "ぐあい", "sentence": "体の具合が悪い。" }
        ]
    },
    {
        "id": 285,
        "kanji": "君",
        "grade": 3,
        "onyomi": ["クン"],
        "kunyomi": ["きみ"],
        "meaning": "男の子をよぶ言葉",
        "compounds": [
            { "word": "君", "reading": "きみ", "sentence": "君と一緒に遊ぼう。" },
            { "word": "君たち", "reading": "きみたち", "sentence": "君たちは友達だ。" }
        ]
    },
    {
        "id": 286,
        "kanji": "係",
        "grade": 3,
        "onyomi": ["ケイ"],
        "kunyomi": ["かか(る)", "かかり"],
        "meaning": "うけもつ人、かかわり",
        "compounds": [
            { "word": "係", "reading": "かかり", "sentence": "掃除係になる。" },
            { "word": "関係", "reading": "かんけい", "sentence": "友達との関係を大切にする。" }
        ]
    },
    {
        "id": 287,
        "kanji": "軽",
        "grade": 3,
        "onyomi": ["ケイ"],
        "kunyomi": ["かる(い)"],
        "meaning": "かるいこと",
        "compounds": [
            { "word": "軽い", "reading": "かるい", "sentence": "このかばんは軽い。" },
            { "word": "軽食", "reading": "けいしょく", "sentence": "軽食を食べる。" }
        ]
    },
    {
        "id": 288,
        "kanji": "血",
        "grade": 3,
        "onyomi": ["ケツ"],
        "kunyomi": ["ち"],
        "meaning": "からだをながれる赤いもの",
        "compounds": [
            { "word": "血", "reading": "ち", "sentence": "転んで血が出た。" },
            { "word": "血液", "reading": "けつえき", "sentence": "血液けんさを受ける。" }
        ]
    },
    {
        "id": 289,
        "kanji": "決",
        "grade": 3,
        "onyomi": ["ケツ"],
        "kunyomi": ["き(める)", "き(まる)"],
        "meaning": "きめること",
        "compounds": [
            { "word": "決定", "reading": "けってい", "sentence": "遠足の行き先が決定した。" },
            { "word": "決める", "reading": "きめる", "sentence": "遊ぶ場所を決める。" }
        ]
    },
    {
        "id": 290,
        "kanji": "研",
        "grade": 3,
        "onyomi": ["ケン"],
        "kunyomi": ["と(ぐ)"],
        "meaning": "みがくこと、しらべること",
        "compounds": [
            { "word": "研究", "reading": "けんきゅう", "sentence": "植物を研究する。" },
            { "word": "研ぐ", "reading": "とぐ", "sentence": "包丁を研ぐ。" }
        ]
    },
    {
        "id": 291,
        "kanji": "県",
        "grade": 3,
        "onyomi": ["ケン"],
        "kunyomi": [],
        "meaning": "都道府県のひとつ",
        "compounds": [
            { "word": "県庁", "reading": "けんちょう", "sentence": "県庁で働く人。" },
            { "word": "県", "reading": "けん", "sentence": "自分の住む県を調べる。" }
        ]
    },
    {
        "id": 292,
        "kanji": "庫",
        "grade": 3,
        "onyomi": ["コ"],
        "kunyomi": [],
        "meaning": "ものをしまう所",
        "compounds": [
            { "word": "倉庫", "reading": "そうこ", "sentence": "倉庫に荷物をしまう。" },
            { "word": "冷蔵庫", "reading": "れいぞうこ", "sentence": "冷蔵庫に牛乳を入れる。" }
        ]
    },
    {
        "id": 293,
        "kanji": "湖",
        "grade": 3,
        "onyomi": ["コ"],
        "kunyomi": ["みずうみ"],
        "meaning": "大きな水のたまり場",
        "compounds": [
            { "word": "湖", "reading": "みずうみ", "sentence": "湖でボートに乗る。" },
            { "word": "湖水", "reading": "こすい", "sentence": "湖水がきれいだ。" }
        ]
    },
    {
        "id": 294,
        "kanji": "向",
        "grade": 3,
        "onyomi": ["コウ"],
        "kunyomi": ["む(く)", "む(かう)", "む(こう)", "む(ける)"],
        "meaning": "むくこと、方向",
        "compounds": [
            { "word": "方向", "reading": "ほうこう", "sentence": "北の方向へ進む。" },
            { "word": "向く", "reading": "むく", "sentence": "こちらを向く。" }
        ]
    },
    {
        "id": 295,
        "kanji": "幸",
        "grade": 3,
        "onyomi": ["コウ"],
        "kunyomi": ["しあわ(せ)", "さいわ(い)"],
        "meaning": "しあわせなこと",
        "compounds": [
            { "word": "幸福", "reading": "こうふく", "sentence": "幸福な毎日を過ごす。" },
            { "word": "幸せ", "reading": "しあわせ", "sentence": "家族といて幸せだ。" }
        ]
    },
    {
        "id": 296,
        "kanji": "港",
        "grade": 3,
        "onyomi": ["コウ"],
        "kunyomi": ["みなと"],
        "meaning": "船が出入りする所",
        "compounds": [
            { "word": "港", "reading": "みなと", "sentence": "港から船が出る。" },
            { "word": "空港", "reading": "くうこう", "sentence": "空港で飛行機に乗る。" }
        ]
    },
    {
        "id": 297,
        "kanji": "号",
        "grade": 3,
        "onyomi": ["ゴウ"],
        "kunyomi": [],
        "meaning": "しるし、番号",
        "compounds": [
            { "word": "番号", "reading": "ばんごう", "sentence": "電話番号を覚える。" },
            { "word": "信号", "reading": "しんごう", "sentence": "信号を守って渡る。" }
        ]
    },
    {
        "id": 298,
        "kanji": "根",
        "grade": 3,
        "onyomi": ["コン"],
        "kunyomi": ["ね"],
        "meaning": "植物のね",
        "compounds": [
            { "word": "根", "reading": "ね", "sentence": "木の根がのびる。" },
            { "word": "大根", "reading": "だいこん", "sentence": "大根を切って料理する。" }
        ]
    },
    {
        "id": 299,
        "kanji": "祭",
        "grade": 3,
        "onyomi": ["サイ"],
        "kunyomi": ["まつ(り)"],
        "meaning": "おいわいの行事",
        "compounds": [
            { "word": "祭り", "reading": "まつり", "sentence": "夏祭りに出かける。" },
            { "word": "文化祭", "reading": "ぶんかさい", "sentence": "学校の文化祭を楽しむ。" }
        ]
    },
    {
        "id": 300,
        "kanji": "皿",
        "grade": 3,
        "onyomi": [],
        "kunyomi": ["さら"],
        "meaning": "食べ物をのせる道具",
        "compounds": [
            { "word": "皿", "reading": "さら", "sentence": "皿にご飯をよそう。" },
            { "word": "小皿", "reading": "こざら", "sentence": "小皿にしょうゆを入れる。" }
        ]
    },
    {
        "id": 301,
        "kanji": "仕",
        "grade": 3,
        "onyomi": ["シ", "ジ"],
        "kunyomi": ["つか(える)"],
        "meaning": "しごとをすること",
        "compounds": [
            { "word": "仕事", "reading": "しごと", "sentence": "父は毎日仕事に行く。" },
            { "word": "仕方", "reading": "しかた", "sentence": "宿題の仕方を聞く。" }
        ]
    },
    {
        "id": 302,
        "kanji": "死",
        "grade": 3,
        "onyomi": ["シ"],
        "kunyomi": ["し(ぬ)"],
        "meaning": "いのちがなくなること",
        "compounds": [
            { "word": "死", "reading": "し", "sentence": "生と死について学ぶ。" },
            { "word": "死ぬ", "reading": "しぬ", "sentence": "花が枯れて死ぬ。" }
        ]
    },
    {
        "id": 303,
        "kanji": "使",
        "grade": 3,
        "onyomi": ["シ"],
        "kunyomi": ["つか(う)"],
        "meaning": "つかうこと",
        "compounds": [
            { "word": "使用", "reading": "しよう", "sentence": "道具を使用する。" },
            { "word": "使う", "reading": "つかう", "sentence": "はさみを使う。" }
        ]
    },
    {
        "id": 304,
        "kanji": "始",
        "grade": 3,
        "onyomi": ["シ"],
        "kunyomi": ["はじ(める)", "はじ(まる)"],
        "meaning": "はじめること",
        "compounds": [
            { "word": "開始", "reading": "かいし", "sentence": "試合が開始する。" },
            { "word": "始める", "reading": "はじめる", "sentence": "勉強を始める。" }
        ]
    },
    {
        "id": 305,
        "kanji": "指",
        "grade": 3,
        "onyomi": ["シ"],
        "kunyomi": ["ゆび", "さ(す)"],
        "meaning": "手のゆび、さししめすこと",
        "compounds": [
            { "word": "指", "reading": "ゆび", "sentence": "指でボタンを押す。" },
            { "word": "指す", "reading": "さす", "sentence": "地図で場所を指す。" }
        ]
    },
    {
        "id": 306,
        "kanji": "歯",
        "grade": 3,
        "onyomi": ["シ"],
        "kunyomi": ["は"],
        "meaning": "口の中の白いもの",
        "compounds": [
            { "word": "歯", "reading": "は", "sentence": "毎日歯をみがく。" },
            { "word": "歯医者", "reading": "はいしゃ", "sentence": "歯医者に行く。" }
        ]
    },
    {
        "id": 307,
        "kanji": "詩",
        "grade": 3,
        "onyomi": ["シ"],
        "kunyomi": [],
        "meaning": "気持ちを短い言葉で表したもの",
        "compounds": [
            { "word": "詩", "reading": "し", "sentence": "国語の時間に詩を読む。" },
            { "word": "詩人", "reading": "しじん", "sentence": "有名な詩人の作品。" }
        ]
    },
    {
        "id": 308,
        "kanji": "次",
        "grade": 3,
        "onyomi": ["ジ", "シ"],
        "kunyomi": ["つぎ", "つ(ぐ)"],
        "meaning": "そのあと",
        "compounds": [
            { "word": "次", "reading": "つぎ", "sentence": "次のページを開く。" },
            { "word": "次回", "reading": "じかい", "sentence": "次回もがんばろう。" }
        ]
    },
    {
        "id": 309,
        "kanji": "事",
        "grade": 3,
        "onyomi": ["ジ"],
        "kunyomi": ["こと"],
        "meaning": "ものごと",
        "compounds": [
            { "word": "事", "reading": "こと", "sentence": "大切な事を伝える。" },
            { "word": "火事", "reading": "かじ", "sentence": "火事に気をつける。" }
        ]
    },
    {
        "id": 310,
        "kanji": "持",
        "grade": 3,
        "onyomi": ["ジ"],
        "kunyomi": ["も(つ)"],
        "meaning": "もつこと",
        "compounds": [
            { "word": "気持ち", "reading": "きもち", "sentence": "うれしい気持ちになる。" },
            { "word": "持つ", "reading": "もつ", "sentence": "かばんを持つ。" }
        ]
    },
    {
        "id": 311,
        "kanji": "式",
        "grade": 3,
        "onyomi": ["シキ"],
        "kunyomi": [],
        "meaning": "きまったやり方",
        "compounds": [
            { "word": "式", "reading": "しき", "sentence": "入学式に出る。" },
            { "word": "計算式", "reading": "けいさんしき", "sentence": "計算式を作る。" }
        ]
    },
    {
        "id": 312,
        "kanji": "実",
        "grade": 3,
        "onyomi": ["ジツ"],
        "kunyomi": ["み", "みの(る)"],
        "meaning": "ほんとうのこと、木の実",
        "compounds": [
            { "word": "実", "reading": "み", "sentence": "柿の実がなる。" },
            { "word": "実験", "reading": "じっけん", "sentence": "理科の実験をする。" }
        ]
    },
    {
        "id": 313,
        "kanji": "写",
        "grade": 3,
        "onyomi": ["シャ"],
        "kunyomi": ["うつ(す)", "うつ(る)"],
        "meaning": "そっくりにうつすこと",
        "compounds": [
            { "word": "写真", "reading": "しゃしん", "sentence": "家族で写真をとる。" },
            { "word": "写す", "reading": "うつす", "sentence": "黒板の字を写す。" }
        ]
    },
    {
        "id": 314,
        "kanji": "者",
        "grade": 3,
        "onyomi": ["シャ"],
        "kunyomi": ["もの"],
        "meaning": "人",
        "compounds": [
            { "word": "者", "reading": "もの", "sentence": "勇気ある者になる。" },
            { "word": "作者", "reading": "さくしゃ", "sentence": "物語の作者を調べる。" }
        ]
    },
    {
        "id": 315,
        "kanji": "主",
        "grade": 3,
        "onyomi": ["シュ"],
        "kunyomi": ["ぬし", "おも(に)"],
        "meaning": "いちばん大切なもの、中心",
        "compounds": [
            { "word": "主人公", "reading": "しゅじんこう", "sentence": "物語の主人公。" },
            { "word": "主に", "reading": "おもに", "sentence": "主に朝ごはんを食べる。" }
        ]
    },
    {
        "id": 316,
        "kanji": "守",
        "grade": 3,
        "onyomi": ["シュ", "ス"],
        "kunyomi": ["まも(る)"],
        "meaning": "まもること",
        "compounds": [
            { "word": "留守", "reading": "るす", "sentence": "留守番をする。" },
            { "word": "守る", "reading": "まもる", "sentence": "約束を守る。" }
        ]
    },
    {
        "id": 317,
        "kanji": "取",
        "grade": 3,
        "onyomi": ["シュ"],
        "kunyomi": ["と(る)"],
        "meaning": "とること",
        "compounds": [
            { "word": "取る", "reading": "とる", "sentence": "本を手に取る。" },
            { "word": "受け取る", "reading": "うけとる", "sentence": "手紙を受け取る。" }
        ]
    },
    {
        "id": 318,
        "kanji": "酒",
        "grade": 3,
        "onyomi": ["シュ"],
        "kunyomi": ["さけ"],
        "meaning": "お酒",
        "compounds": [
            { "word": "酒", "reading": "さけ", "sentence": "父はお酒を飲む。" },
            { "word": "日本酒", "reading": "にほんしゅ", "sentence": "祖父は日本酒が好きだ。" }
        ]
    },
    {
        "id": 319,
        "kanji": "受",
        "grade": 3,
        "onyomi": ["ジュ"],
        "kunyomi": ["う(ける)"],
        "meaning": "うけること",
        "compounds": [
            { "word": "受付", "reading": "うけつけ", "sentence": "受付で名前を書く。" },
            { "word": "受ける", "reading": "うける", "sentence": "テストを受ける。" }
        ]
    },
    {
        "id": 320,
        "kanji": "州",
        "grade": 3,
        "onyomi": ["シュウ"],
        "kunyomi": ["す"],
        "meaning": "大きな陸地",
        "compounds": [
            { "word": "九州", "reading": "きゅうしゅう", "sentence": "九州へ旅行に行く。" },
            { "word": "本州", "reading": "ほんしゅう", "sentence": "本州でいちばん高い山。" }
        ]
    },
    {
        "id": 321,
        "kanji": "拾",
        "grade": 3,
        "onyomi": ["シュウ", "ジュウ"],
        "kunyomi": ["ひろ(う)"],
        "meaning": "ひろうこと",
        "compounds": [
            { "word": "拾う", "reading": "ひろう", "sentence": "ゴミを拾う。" },
            { "word": "落ち葉拾い", "reading": "おちばひろい", "sentence": "落ち葉拾いをする。" }
        ]
    },
    {
        "id": 322,
        "kanji": "終",
        "grade": 3,
        "onyomi": ["シュウ"],
        "kunyomi": ["お(わる)", "お(える)"],
        "meaning": "おわること",
        "compounds": [
            { "word": "終了", "reading": "しゅうりょう", "sentence": "授業が終了する。" },
            { "word": "終わる", "reading": "おわる", "sentence": "宿題が終わる。" }
        ]
    },
    {
        "id": 323,
        "kanji": "習",
        "grade": 3,
        "onyomi": ["シュウ"],
        "kunyomi": ["なら(う)"],
        "meaning": "ならうこと",
        "compounds": [
            { "word": "習慣", "reading": "しゅうかん", "sentence": "早ね早おきの習慣。" },
            { "word": "習う", "reading": "ならう", "sentence": "ピアノを習う。" }
        ]
    },
    {
        "id": 324,
        "kanji": "集",
        "grade": 3,
        "onyomi": ["シュウ"],
        "kunyomi": ["あつ(まる)", "あつ(める)"],
        "meaning": "あつまること",
        "compounds": [
            { "word": "集合", "reading": "しゅうごう", "sentence": "公園に集合する。" },
            { "word": "集める", "reading": "あつめる", "sentence": "切手を集める。" }
        ]
    },
    {
        "id": 325,
        "kanji": "住",
        "grade": 3,
        "onyomi": ["ジュウ"],
        "kunyomi": ["す(む)"],
        "meaning": "すむこと",
        "compounds": [
            { "word": "住所", "reading": "じゅうしょ", "sentence": "住所を書く。" },
            { "word": "住む", "reading": "すむ", "sentence": "町に住む。" }
        ]
    },
    {
        "id": 326,
        "kanji": "重",
        "grade": 3,
        "onyomi": ["ジュウ", "チョウ"],
        "kunyomi": ["おも(い)", "かさ(なる)", "かさ(ねる)"],
        "meaning": "おもいこと、たいせつなこと",
        "compounds": [
            { "word": "重要", "reading": "じゅうよう", "sentence": "重要な話を聞く。" },
            { "word": "重い", "reading": "おもい", "sentence": "石は重い。" }
        ]
    },
    {
        "id": 327,
        "kanji": "宿",
        "grade": 3,
        "onyomi": ["シュク"],
        "kunyomi": ["やど"],
        "meaning": "とまる所",
        "compounds": [
            { "word": "宿題", "reading": "しゅくだい", "sentence": "毎日宿題をする。" },
            { "word": "宿", "reading": "やど", "sentence": "温泉の宿に泊まる。" }
        ]
    },
    {
        "id": 328,
        "kanji": "所",
        "grade": 3,
        "onyomi": ["ショ"],
        "kunyomi": ["ところ"],
        "meaning": "ばしょ",
        "compounds": [
            { "word": "場所", "reading": "ばしょ", "sentence": "集まる場所を決める。" },
            { "word": "所", "reading": "ところ", "sentence": "好きな所に座る。" }
        ]
    },
    {
        "id": 329,
        "kanji": "暑",
        "grade": 3,
        "onyomi": ["ショ"],
        "kunyomi": ["あつ(い)"],
        "meaning": "気温が高いこと",
        "compounds": [
            { "word": "暑い", "reading": "あつい", "sentence": "夏はとても暑い。" },
            { "word": "暑さ", "reading": "あつさ", "sentence": "暑さに気をつける。" }
        ]
    },
    {
        "id": 330,
        "kanji": "助",
        "grade": 3,
        "onyomi": ["ジョ"],
        "kunyomi": ["たす(ける)", "たす(かる)"],
        "meaning": "たすけること",
        "compounds": [
            { "word": "助手", "reading": "じょしゅ", "sentence": "先生の助手をする。" },
            { "word": "助ける", "reading": "たすける", "sentence": "困っている人を助ける。" }
        ]
    },
    {
        "id": 331,
        "kanji": "昭",
        "grade": 3,
        "onyomi": ["ショウ"],
        "kunyomi": [],
        "meaning": "昭和時代の「昭」",
        "compounds": [
            { "word": "昭和", "reading": "しょうわ", "sentence": "昭和のころの写真。" },
            { "word": "昭和時代", "reading": "しょうわじだい", "sentence": "昭和時代の話を聞く。" }
        ]
    },
    {
        "id": 332,
        "kanji": "消",
        "grade": 3,
        "onyomi": ["ショウ"],
        "kunyomi": ["き(える)", "け(す)"],
        "meaning": "きえること、けすこと",
        "compounds": [
            { "word": "消火", "reading": "しょうか", "sentence": "消火器で火を消す。" },
            { "word": "消える", "reading": "きえる", "sentence": "電気が消える。" }
        ]
    },
    {
        "id": 333,
        "kanji": "商",
        "grade": 3,
        "onyomi": ["ショウ"],
        "kunyomi": ["あきな(う)"],
        "meaning": "物を売り買いすること",
        "compounds": [
            { "word": "商店", "reading": "しょうてん", "sentence": "商店街で買い物をする。" },
            { "word": "商品", "reading": "しょうひん", "sentence": "新しい商品を買う。" }
        ]
    },
    {
        "id": 334,
        "kanji": "章",
        "grade": 3,
        "onyomi": ["ショウ"],
        "kunyomi": [],
        "meaning": "文章のまとまり",
        "compounds": [
            { "word": "文章", "reading": "ぶんしょう", "sentence": "文章を書く練習をする。" },
            { "word": "第一章", "reading": "だいいっしょう", "sentence": "物語の第一章を読む。" }
        ]
    },
    {
        "id": 335,
        "kanji": "勝",
        "grade": 3,
        "onyomi": ["ショウ"],
        "kunyomi": ["か(つ)", "まさ(る)"],
        "meaning": "かつこと",
        "compounds": [
            { "word": "勝利", "reading": "しょうり", "sentence": "試合に勝利する。" },
            { "word": "勝つ", "reading": "かつ", "sentence": "試合に勝つ。" }
        ]
    },
    {
        "id": 336,
        "kanji": "乗",
        "grade": 3,
        "onyomi": ["ジョウ"],
        "kunyomi": ["の(る)"],
        "meaning": "のること",
        "compounds": [
            { "word": "乗車", "reading": "じょうしゃ", "sentence": "バスに乗車する。" },
            { "word": "乗る", "reading": "のる", "sentence": "電車に乗る。" }
        ]
    },
    {
        "id": 337,
        "kanji": "植",
        "grade": 3,
        "onyomi": ["ショク"],
        "kunyomi": ["う(える)"],
        "meaning": "うえること",
        "compounds": [
            { "word": "植物", "reading": "しょくぶつ", "sentence": "植物の観察をする。" },
            { "word": "植える", "reading": "うえる", "sentence": "花を植える。" }
        ]
    },
    {
        "id": 338,
        "kanji": "申",
        "grade": 3,
        "onyomi": ["シン"],
        "kunyomi": ["もう(す)"],
        "meaning": "ていねいに言うこと",
        "compounds": [
            { "word": "申す", "reading": "もうす", "sentence": "「山田です」と申す。" },
            { "word": "申し込み", "reading": "もうしこみ", "sentence": "大会に申し込みをする。" }
        ]
    },
    {
        "id": 339,
        "kanji": "身",
        "grade": 3,
        "onyomi": ["シン"],
        "kunyomi": ["み"],
        "meaning": "からだ",
        "compounds": [
            { "word": "身長", "reading": "しんちょう", "sentence": "身長をはかる。" },
            { "word": "身", "reading": "み", "sentence": "身を守る。" }
        ]
    },
    {
        "id": 340,
        "kanji": "神",
        "grade": 3,
        "onyomi": ["シン", "ジン"],
        "kunyomi": ["かみ"],
        "meaning": "神様",
        "compounds": [
            { "word": "神社", "reading": "じんじゃ", "sentence": "神社にお参りする。" },
            { "word": "神様", "reading": "かみさま", "sentence": "神様にお祈りする。" }
        ]
    },
    {
        "id": 341,
        "kanji": "真",
        "grade": 3,
        "onyomi": ["シン"],
        "kunyomi": ["ま"],
        "meaning": "ほんとうのこと",
        "compounds": [
            { "word": "真実", "reading": "しんじつ", "sentence": "真実を話す。" },
            { "word": "真っすぐ", "reading": "まっすぐ", "sentence": "真っすぐ歩く。" }
        ]
    },
    {
        "id": 342,
        "kanji": "深",
        "grade": 3,
        "onyomi": ["シン"],
        "kunyomi": ["ふか(い)"],
        "meaning": "ふかいこと",
        "compounds": [
            { "word": "深い", "reading": "ふかい", "sentence": "この川は深い。" },
            { "word": "水深", "reading": "すいしん", "sentence": "水深に気をつける。" }
        ]
    },
    {
        "id": 343,
        "kanji": "進",
        "grade": 3,
        "onyomi": ["シン"],
        "kunyomi": ["すす(む)", "すす(める)"],
        "meaning": "すすむこと",
        "compounds": [
            { "word": "前進", "reading": "ぜんしん", "sentence": "一歩前進する。" },
            { "word": "進む", "reading": "すすむ", "sentence": "前に進む。" }
        ]
    },
    {
        "id": 344,
        "kanji": "世",
        "grade": 3,
        "onyomi": ["セイ", "セ"],
        "kunyomi": ["よ"],
        "meaning": "世の中",
        "compounds": [
            { "word": "世話", "reading": "せわ", "sentence": "妹の世話をする。" },
            { "word": "世の中", "reading": "よのなか", "sentence": "世の中のできごとを知る。" }
        ]
    },
    {
        "id": 345,
        "kanji": "整",
        "grade": 3,
        "onyomi": ["セイ"],
        "kunyomi": ["ととの(える)", "ととの(う)"],
        "meaning": "きちんとすること",
        "compounds": [
            { "word": "整理", "reading": "せいり", "sentence": "机の上を整理する。" },
            { "word": "整える", "reading": "ととのえる", "sentence": "服装を整える。" }
        ]
    },
    {
        "id": 346,
        "kanji": "昔",
        "grade": 3,
        "onyomi": ["セキ", "シャク"],
        "kunyomi": ["むかし"],
        "meaning": "むかし",
        "compounds": [
            { "word": "昔話", "reading": "むかしばなし", "sentence": "昔話を聞く。" },
            { "word": "昔", "reading": "むかし", "sentence": "昔のことを思い出す。" }
        ]
    },
    {
        "id": 347,
        "kanji": "全",
        "grade": 3,
        "onyomi": ["ゼン"],
        "kunyomi": ["まった(く)", "すべ(て)"],
        "meaning": "すべて",
        "compounds": [
            { "word": "全部", "reading": "ぜんぶ", "sentence": "全部食べる。" },
            { "word": "全て", "reading": "すべて", "sentence": "全てが終わった。" }
        ]
    },
    {
        "id": 348,
        "kanji": "相",
        "grade": 3,
        "onyomi": ["ソウ", "ショウ"],
        "kunyomi": ["あい"],
        "meaning": "たがいに、すがた",
        "compounds": [
            { "word": "相談", "reading": "そうだん", "sentence": "先生に相談する。" },
            { "word": "相手", "reading": "あいて", "sentence": "試合の相手を決める。" }
        ]
    },
    {
        "id": 349,
        "kanji": "送",
        "grade": 3,
        "onyomi": ["ソウ"],
        "kunyomi": ["おく(る)"],
        "meaning": "おくること",
        "compounds": [
            { "word": "放送", "reading": "ほうそう", "sentence": "テレビの放送を見る。" },
            { "word": "送る", "reading": "おくる", "sentence": "手紙を送る。" }
        ]
    },
    {
        "id": 350,
        "kanji": "想",
        "grade": 3,
        "onyomi": ["ソウ"],
        "kunyomi": [],
        "meaning": "頭で思いえがくこと",
        "compounds": [
            { "word": "想像", "reading": "そうぞう", "sentence": "未来を想像する。" },
            { "word": "予想", "reading": "よそう", "sentence": "結果を予想する。" }
        ]
    },
    {
        "id": 351,
        "kanji": "息",
        "grade": 3,
        "onyomi": ["ソク"],
        "kunyomi": ["いき"],
        "meaning": "いき",
        "compounds": [
            { "word": "息", "reading": "いき", "sentence": "深呼吸で息を吸う。" },
            { "word": "休息", "reading": "きゅうそく", "sentence": "休息をとる。" }
        ]
    },
    {
        "id": 352,
        "kanji": "速",
        "grade": 3,
        "onyomi": ["ソク"],
        "kunyomi": ["はや(い)"],
        "meaning": "はやいこと",
        "compounds": [
            { "word": "速度", "reading": "そくど", "sentence": "速度を落とす。" },
            { "word": "速い", "reading": "はやい", "sentence": "チーターは速い。" }
        ]
    },
    {
        "id": 353,
        "kanji": "族",
        "grade": 3,
        "onyomi": ["ゾク"],
        "kunyomi": [],
        "meaning": "血のつながりのある人々",
        "compounds": [
            { "word": "家族", "reading": "かぞく", "sentence": "家族で出かける。" },
            { "word": "水族館", "reading": "すいぞくかん", "sentence": "水族館でイルカを見る。" }
        ]
    },
    {
        "id": 354,
        "kanji": "他",
        "grade": 3,
        "onyomi": ["タ"],
        "kunyomi": ["ほか"],
        "meaning": "それ以外",
        "compounds": [
            { "word": "他人", "reading": "たにん", "sentence": "他人の物を大切にする。" },
            { "word": "他", "reading": "ほか", "sentence": "他の場所を探す。" }
        ]
    },
    {
        "id": 355,
        "kanji": "打",
        "grade": 3,
        "onyomi": ["ダ"],
        "kunyomi": ["う(つ)"],
        "meaning": "うつこと",
        "compounds": [
            { "word": "打者", "reading": "だしゃ", "sentence": "野球の打者になる。" },
            { "word": "打つ", "reading": "うつ", "sentence": "ボールを打つ。" }
        ]
    },
    {
        "id": 356,
        "kanji": "対",
        "grade": 3,
        "onyomi": ["タイ", "ツイ"],
        "kunyomi": [],
        "meaning": "むきあうこと、くらべること",
        "compounds": [
            { "word": "反対", "reading": "はんたい", "sentence": "意見に反対する。" },
            { "word": "対話", "reading": "たいわ", "sentence": "友達と対話する。" }
        ]
    },
    {
        "id": 357,
        "kanji": "待",
        "grade": 3,
        "onyomi": ["タイ"],
        "kunyomi": ["ま(つ)"],
        "meaning": "まつこと",
        "compounds": [
            { "word": "期待", "reading": "きたい", "sentence": "遠足を期待する。" },
            { "word": "待つ", "reading": "まつ", "sentence": "バスを待つ。" }
        ]
    },
    {
        "id": 358,
        "kanji": "代",
        "grade": 3,
        "onyomi": ["ダイ", "タイ"],
        "kunyomi": ["か(わる)", "か(える)", "よ", "しろ"],
        "meaning": "かわること、時代",
        "compounds": [
            { "word": "時代", "reading": "じだい", "sentence": "昔の時代を学ぶ。" },
            { "word": "代わる", "reading": "かわる", "sentence": "係を代わる。" }
        ]
    },
    {
        "id": 359,
        "kanji": "第",
        "grade": 3,
        "onyomi": ["ダイ"],
        "kunyomi": [],
        "meaning": "じゅんばんを表す言葉",
        "compounds": [
            { "word": "第一", "reading": "だいいち", "sentence": "第一位になる。" },
            { "word": "第二", "reading": "だいに", "sentence": "第二の目標を立てる。" }
        ]
    },
    {
        "id": 360,
        "kanji": "題",
        "grade": 3,
        "onyomi": ["ダイ"],
        "kunyomi": [],
        "meaning": "問題、テーマ",
        "compounds": [
            { "word": "問題", "reading": "もんだい", "sentence": "算数の問題を解く。" },
            { "word": "題名", "reading": "だいめい", "sentence": "物語の題名を考える。" }
        ]
    },
    {
        "id": 361,
        "kanji": "炭",
        "grade": 3,
        "onyomi": ["タン"],
        "kunyomi": ["すみ"],
        "meaning": "すみ",
        "compounds": [
            { "word": "炭", "reading": "すみ", "sentence": "炭で火をおこす。" },
            { "word": "木炭", "reading": "もくたん", "sentence": "木炭で絵をかく。" }
        ]
    },
    {
        "id": 362,
        "kanji": "短",
        "grade": 3,
        "onyomi": ["タン"],
        "kunyomi": ["みじか(い)"],
        "meaning": "みじかいこと",
        "compounds": [
            { "word": "短い", "reading": "みじかい", "sentence": "ひもが短い。" },
            { "word": "短時間", "reading": "たんじかん", "sentence": "短時間で終わらせる。" }
        ]
    },
    {
        "id": 363,
        "kanji": "談",
        "grade": 3,
        "onyomi": ["ダン"],
        "kunyomi": [],
        "meaning": "話すこと",
        "compounds": [
            { "word": "相談", "reading": "そうだん", "sentence": "友達に相談する。" },
            { "word": "冗談", "reading": "じょうだん", "sentence": "冗談を言って笑う。" }
        ]
    },
    {
        "id": 364,
        "kanji": "着",
        "grade": 3,
        "onyomi": ["チャク", "ジャク"],
        "kunyomi": ["き(る)", "つ(く)", "つ(ける)"],
        "meaning": "きること、つくこと",
        "compounds": [
            { "word": "到着", "reading": "とうちゃく", "sentence": "駅に到着する。" },
            { "word": "着る", "reading": "きる", "sentence": "上着を着る。" }
        ]
    },
    {
        "id": 365,
        "kanji": "注",
        "grade": 3,
        "onyomi": ["チュウ"],
        "kunyomi": ["そそ(ぐ)"],
        "meaning": "そそぐこと、気をつけること",
        "compounds": [
            { "word": "注文", "reading": "ちゅうもん", "sentence": "お店で注文する。" },
            { "word": "注ぐ", "reading": "そそぐ", "sentence": "コップに水を注ぐ。" }
        ]
    },
    {
        "id": 366,
        "kanji": "柱",
        "grade": 3,
        "onyomi": ["チュウ"],
        "kunyomi": ["はしら"],
        "meaning": "たてものをささえるもの",
        "compounds": [
            { "word": "柱", "reading": "はしら", "sentence": "家の柱を見る。" },
            { "word": "電柱", "reading": "でんちゅう", "sentence": "電柱に鳥がとまる。" }
        ]
    },
    {
        "id": 367,
        "kanji": "丁",
        "grade": 3,
        "onyomi": ["チョウ", "テイ"],
        "kunyomi": [],
        "meaning": "まちの区画、ものの数え方",
        "compounds": [
            { "word": "丁目", "reading": "ちょうめ", "sentence": "一丁目に住んでいる。" },
            { "word": "包丁", "reading": "ほうちょう", "sentence": "包丁で野菜を切る。" }
        ]
    },
    {
        "id": 368,
        "kanji": "帳",
        "grade": 3,
        "onyomi": ["チョウ"],
        "kunyomi": [],
        "meaning": "書きとめるノート",
        "compounds": [
            { "word": "手帳", "reading": "てちょう", "sentence": "予定を手帳に書く。" },
            { "word": "通帳", "reading": "つうちょう", "sentence": "銀行の通帳を見る。" }
        ]
    },
    {
        "id": 369,
        "kanji": "調",
        "grade": 3,
        "onyomi": ["チョウ"],
        "kunyomi": ["しら(べる)", "ととの(う)", "ととの(える)"],
        "meaning": "しらべること、ととのえること",
        "compounds": [
            { "word": "調査", "reading": "ちょうさ", "sentence": "生き物を調査する。" },
            { "word": "調べる", "reading": "しらべる", "sentence": "図鑑で調べる。" }
        ]
    },
    {
        "id": 370,
        "kanji": "追",
        "grade": 3,
        "onyomi": ["ツイ"],
        "kunyomi": ["お(う)"],
        "meaning": "おいかけること",
        "compounds": [
            { "word": "追加", "reading": "ついか", "sentence": "問題を追加する。" },
            { "word": "追う", "reading": "おう", "sentence": "ボールを追う。" }
        ]
    },
    {
        "id": 371,
        "kanji": "定",
        "grade": 3,
        "onyomi": ["テイ", "ジョウ"],
        "kunyomi": ["さだ(める)", "さだ(か)"],
        "meaning": "きめること",
        "compounds": [
            { "word": "予定", "reading": "よてい", "sentence": "明日の予定を立てる。" },
            { "word": "定食", "reading": "ていしょく", "sentence": "食堂で定食を食べる。" }
        ]
    },
    {
        "id": 372,
        "kanji": "庭",
        "grade": 3,
        "onyomi": ["テイ"],
        "kunyomi": ["にわ"],
        "meaning": "にわ",
        "compounds": [
            { "word": "庭", "reading": "にわ", "sentence": "庭で花を育てる。" },
            { "word": "家庭", "reading": "かてい", "sentence": "家庭で手伝いをする。" }
        ]
    },
    {
        "id": 373,
        "kanji": "笛",
        "grade": 3,
        "onyomi": ["テキ"],
        "kunyomi": ["ふえ"],
        "meaning": "ふえ",
        "compounds": [
            { "word": "笛", "reading": "ふえ", "sentence": "笛をふいて合図する。" },
            { "word": "口笛", "reading": "くちぶえ", "sentence": "口笛を吹く。" }
        ]
    },
    {
        "id": 374,
        "kanji": "鉄",
        "grade": 3,
        "onyomi": ["テツ"],
        "kunyomi": [],
        "meaning": "鉄という金属",
        "compounds": [
            { "word": "鉄道", "reading": "てつどう", "sentence": "鉄道で旅行する。" },
            { "word": "地下鉄", "reading": "ちかてつ", "sentence": "地下鉄に乗る。" }
        ]
    },
    {
        "id": 375,
        "kanji": "転",
        "grade": 3,
        "onyomi": ["テン"],
        "kunyomi": ["ころ(がる)", "ころ(げる)", "ころ(がす)", "ころ(ぶ)"],
        "meaning": "ころがること、うつること",
        "compounds": [
            { "word": "自転車", "reading": "じてんしゃ", "sentence": "自転車に乗る。" },
            { "word": "転ぶ", "reading": "ころぶ", "sentence": "石につまずいて転ぶ。" }
        ]
    },
    {
        "id": 376,
        "kanji": "都",
        "grade": 3,
        "onyomi": ["ト", "ツ"],
        "kunyomi": ["みやこ"],
        "meaning": "大きな町、みやこ",
        "compounds": [
            { "word": "都会", "reading": "とかい", "sentence": "都会に出かける。" },
            { "word": "都合", "reading": "つごう", "sentence": "都合を確かめる。" }
        ]
    },
    {
        "id": 377,
        "kanji": "度",
        "grade": 3,
        "onyomi": ["ド", "タク"],
        "kunyomi": ["たび"],
        "meaning": "かいすう、ていど",
        "compounds": [
            { "word": "今度", "reading": "こんど", "sentence": "今度遊びに行こう。" },
            { "word": "何度", "reading": "なんど", "sentence": "何度も練習する。" }
        ]
    },
    {
        "id": 378,
        "kanji": "投",
        "grade": 3,
        "onyomi": ["トウ"],
        "kunyomi": ["な(げる)"],
        "meaning": "なげること",
        "compounds": [
            { "word": "投手", "reading": "とうしゅ", "sentence": "野球の投手になる。" },
            { "word": "投げる", "reading": "なげる", "sentence": "ボールを投げる。" }
        ]
    },
    {
        "id": 379,
        "kanji": "豆",
        "grade": 3,
        "onyomi": ["トウ", "ズ"],
        "kunyomi": ["まめ"],
        "meaning": "まめ",
        "compounds": [
            { "word": "豆", "reading": "まめ", "sentence": "畑で豆を育てる。" },
            { "word": "大豆", "reading": "だいず", "sentence": "大豆で味噌を作る。" }
        ]
    },
    {
        "id": 380,
        "kanji": "島",
        "grade": 3,
        "onyomi": ["トウ"],
        "kunyomi": ["しま"],
        "meaning": "しま",
        "compounds": [
            { "word": "島", "reading": "しま", "sentence": "船で島に行く。" },
            { "word": "半島", "reading": "はんとう", "sentence": "半島の地図を見る。" }
        ]
    },
    {
        "id": 381,
        "kanji": "湯",
        "grade": 3,
        "onyomi": ["トウ"],
        "kunyomi": ["ゆ"],
        "meaning": "あついお湯",
        "compounds": [
            { "word": "湯", "reading": "ゆ", "sentence": "お湯をわかす。" },
            { "word": "銭湯", "reading": "せんとう", "sentence": "家族で銭湯に行く。" }
        ]
    },
    {
        "id": 382,
        "kanji": "登",
        "grade": 3,
        "onyomi": ["トウ", "ト"],
        "kunyomi": ["のぼ(る)"],
        "meaning": "のぼること",
        "compounds": [
            { "word": "登山", "reading": "とざん", "sentence": "家族で登山をする。" },
            { "word": "登る", "reading": "のぼる", "sentence": "山に登る。" }
        ]
    },
    {
        "id": 383,
        "kanji": "等",
        "grade": 3,
        "onyomi": ["トウ"],
        "kunyomi": ["ひと(しい)", "など"],
        "meaning": "おなじこと",
        "compounds": [
            { "word": "平等", "reading": "びょうどう", "sentence": "みんな平等にあつかう。" },
            { "word": "等しい", "reading": "ひとしい", "sentence": "二つの数が等しい。" }
        ]
    },
    {
        "id": 384,
        "kanji": "動",
        "grade": 3,
        "onyomi": ["ドウ"],
        "kunyomi": ["うご(く)", "うご(かす)"],
        "meaning": "うごくこと",
        "compounds": [
            { "word": "動物", "reading": "どうぶつ", "sentence": "動物園で動物を見る。" },
            { "word": "動く", "reading": "うごく", "sentence": "機械が動く。" }
        ]
    },
    {
        "id": 385,
        "kanji": "童",
        "grade": 3,
        "onyomi": ["ドウ"],
        "kunyomi": ["わらべ"],
        "meaning": "こども",
        "compounds": [
            { "word": "童話", "reading": "どうわ", "sentence": "童話を読み聞かせる。" },
            { "word": "児童", "reading": "じどう", "sentence": "児童が集まる。" }
        ]
    },
    {
        "id": 386,
        "kanji": "農",
        "grade": 3,
        "onyomi": ["ノウ"],
        "kunyomi": [],
        "meaning": "田畑で作物を作ること",
        "compounds": [
            { "word": "農業", "reading": "のうぎょう", "sentence": "農業をいとなむ家。" },
            { "word": "農家", "reading": "のうか", "sentence": "農家でトマトを収穫する。" }
        ]
    },
    {
        "id": 387,
        "kanji": "波",
        "grade": 3,
        "onyomi": ["ハ"],
        "kunyomi": ["なみ"],
        "meaning": "なみ",
        "compounds": [
            { "word": "波", "reading": "なみ", "sentence": "海の波であそぶ。" },
            { "word": "電波", "reading": "でんぱ", "sentence": "電波が届く。" }
        ]
    },
    {
        "id": 388,
        "kanji": "配",
        "grade": 3,
        "onyomi": ["ハイ"],
        "kunyomi": ["くば(る)"],
        "meaning": "くばること",
        "compounds": [
            { "word": "配達", "reading": "はいたつ", "sentence": "新聞を配達する。" },
            { "word": "配る", "reading": "くばる", "sentence": "プリントを配る。" }
        ]
    },
    {
        "id": 389,
        "kanji": "倍",
        "grade": 3,
        "onyomi": ["バイ"],
        "kunyomi": [],
        "meaning": "同じ数を重ねること",
        "compounds": [
            { "word": "倍", "reading": "ばい", "sentence": "二倍の大きさになる。" },
            { "word": "倍数", "reading": "ばいすう", "sentence": "倍数を計算する。" }
        ]
    },
    {
        "id": 390,
        "kanji": "箱",
        "grade": 3,
        "onyomi": [],
        "kunyomi": ["はこ"],
        "meaning": "いれもの",
        "compounds": [
            { "word": "箱", "reading": "はこ", "sentence": "箱におもちゃを入れる。" },
            { "word": "筆箱", "reading": "ふでばこ", "sentence": "筆箱に鉛筆を入れる。" }
        ]
    },
    {
        "id": 391,
        "kanji": "畑",
        "grade": 3,
        "onyomi": [],
        "kunyomi": ["はたけ", "はた"],
        "meaning": "作物を育てる土地",
        "compounds": [
            { "word": "畑", "reading": "はたけ", "sentence": "畑で野菜を作る。" },
            { "word": "花畑", "reading": "はなばたけ", "sentence": "花畑を歩く。" }
        ]
    },
    {
        "id": 392,
        "kanji": "発",
        "grade": 3,
        "onyomi": ["ハツ", "ホツ"],
        "kunyomi": [],
        "meaning": "出発すること、おこること",
        "compounds": [
            { "word": "出発", "reading": "しゅっぱつ", "sentence": "朝九時に出発する。" },
            { "word": "発見", "reading": "はっけん", "sentence": "新しい虫を発見する。" }
        ]
    },
    {
        "id": 393,
        "kanji": "反",
        "grade": 3,
        "onyomi": ["ハン", "ホン", "タン"],
        "kunyomi": ["そ(る)", "そ(らす)"],
        "meaning": "さからうこと、はんたい",
        "compounds": [
            { "word": "反省", "reading": "はんせい", "sentence": "忘れ物をして反省する。" },
            { "word": "反対", "reading": "はんたい", "sentence": "意見に反対する。" }
        ]
    },
    {
        "id": 394,
        "kanji": "坂",
        "grade": 3,
        "onyomi": ["ハン"],
        "kunyomi": ["さか"],
        "meaning": "さかみち",
        "compounds": [
            { "word": "坂", "reading": "さか", "sentence": "急な坂をのぼる。" },
            { "word": "坂道", "reading": "さかみち", "sentence": "坂道を自転車で下る。" }
        ]
    },
    {
        "id": 395,
        "kanji": "板",
        "grade": 3,
        "onyomi": ["ハン", "バン"],
        "kunyomi": ["いた"],
        "meaning": "いた",
        "compounds": [
            { "word": "黒板", "reading": "こくばん", "sentence": "黒板に字を書く。" },
            { "word": "板", "reading": "いた", "sentence": "板で本だなを作る。" }
        ]
    },
    {
        "id": 396,
        "kanji": "皮",
        "grade": 3,
        "onyomi": ["ヒ"],
        "kunyomi": ["かわ"],
        "meaning": "表面をおおうもの",
        "compounds": [
            { "word": "皮", "reading": "かわ", "sentence": "りんごの皮をむく。" },
            { "word": "毛皮", "reading": "けがわ", "sentence": "動物の毛皮。" }
        ]
    },
    {
        "id": 397,
        "kanji": "悲",
        "grade": 3,
        "onyomi": ["ヒ"],
        "kunyomi": ["かな(しい)", "かな(しむ)"],
        "meaning": "かなしいこと",
        "compounds": [
            { "word": "悲しい", "reading": "かなしい", "sentence": "お別れが悲しい。" },
            { "word": "悲鳴", "reading": "ひめい", "sentence": "驚いて悲鳴をあげる。" }
        ]
    },
    {
        "id": 398,
        "kanji": "美",
        "grade": 3,
        "onyomi": ["ビ"],
        "kunyomi": ["うつく(しい)"],
        "meaning": "きれいなこと",
        "compounds": [
            { "word": "美しい", "reading": "うつくしい", "sentence": "夕日が美しい。" },
            { "word": "美術", "reading": "びじゅつ", "sentence": "美術の授業で絵を描く。" }
        ]
    },
    {
        "id": 399,
        "kanji": "鼻",
        "grade": 3,
        "onyomi": ["ビ"],
        "kunyomi": ["はな"],
        "meaning": "はな",
        "compounds": [
            { "word": "鼻", "reading": "はな", "sentence": "鼻をかむ。" },
            { "word": "鼻血", "reading": "はなぢ", "sentence": "転んで鼻血が出た。" }
        ]
    },
    {
        "id": 400,
        "kanji": "筆",
        "grade": 3,
        "onyomi": ["ヒツ"],
        "kunyomi": ["ふで"],
        "meaning": "ふで",
        "compounds": [
            { "word": "筆", "reading": "ふで", "sentence": "筆で絵をかく。" },
            { "word": "鉛筆", "reading": "えんぴつ", "sentence": "鉛筆で字を書く。" }
        ]
    },
    {
        "id": 401,
        "kanji": "氷",
        "grade": 3,
        "onyomi": ["ヒョウ"],
        "kunyomi": ["こおり"],
        "meaning": "こおり",
        "compounds": [
            { "word": "氷", "reading": "こおり", "sentence": "氷で体を冷やす。" },
            { "word": "氷山", "reading": "ひょうざん", "sentence": "氷山を写真で見る。" }
        ]
    },
    {
        "id": 402,
        "kanji": "表",
        "grade": 3,
        "onyomi": ["ヒョウ"],
        "kunyomi": ["おもて", "あらわ(す)", "あらわ(れる)"],
        "meaning": "おもて、あらわすこと",
        "compounds": [
            { "word": "発表", "reading": "はっぴょう", "sentence": "調べたことを発表する。" },
            { "word": "表す", "reading": "あらわす", "sentence": "気持ちを表す。" }
        ]
    },
    {
        "id": 403,
        "kanji": "秒",
        "grade": 3,
        "onyomi": ["ビョウ"],
        "kunyomi": [],
        "meaning": "時間の単位",
        "compounds": [
            { "word": "秒", "reading": "びょう", "sentence": "一分は六十秒。" },
            { "word": "秒速", "reading": "びょうそく", "sentence": "秒速を計算する。" }
        ]
    },
    {
        "id": 404,
        "kanji": "病",
        "grade": 3,
        "onyomi": ["ビョウ", "ヘイ"],
        "kunyomi": ["や(む)"],
        "meaning": "びょうき",
        "compounds": [
            { "word": "病気", "reading": "びょうき", "sentence": "病気で学校を休む。" },
            { "word": "病院", "reading": "びょういん", "sentence": "病院でみてもらう。" }
        ]
    },
    {
        "id": 405,
        "kanji": "品",
        "grade": 3,
        "onyomi": ["ヒン"],
        "kunyomi": ["しな"],
        "meaning": "もの、しなもの",
        "compounds": [
            { "word": "品物", "reading": "しなもの", "sentence": "お店の品物を選ぶ。" },
            { "word": "作品", "reading": "さくひん", "sentence": "図工の作品を作る。" }
        ]
    },
    {
        "id": 406,
        "kanji": "負",
        "grade": 3,
        "onyomi": ["フ"],
        "kunyomi": ["ま(ける)", "お(う)"],
        "meaning": "まけること、せおうこと",
        "compounds": [
            { "word": "負ける", "reading": "まける", "sentence": "試合に負ける。" },
            { "word": "勝負", "reading": "しょうぶ", "sentence": "本気で勝負する。" }
        ]
    },
    {
        "id": 407,
        "kanji": "部",
        "grade": 3,
        "onyomi": ["ブ"],
        "kunyomi": [],
        "meaning": "部分、グループ",
        "compounds": [
            { "word": "部屋", "reading": "へや", "sentence": "自分の部屋を掃除する。" },
            { "word": "部分", "reading": "ぶぶん", "sentence": "文章の大事な部分。" }
        ]
    },
    {
        "id": 408,
        "kanji": "服",
        "grade": 3,
        "onyomi": ["フク"],
        "kunyomi": [],
        "meaning": "きもの",
        "compounds": [
            { "word": "服", "reading": "ふく", "sentence": "新しい服を着る。" },
            { "word": "洋服", "reading": "ようふく", "sentence": "洋服を選ぶ。" }
        ]
    },
    {
        "id": 409,
        "kanji": "福",
        "grade": 3,
        "onyomi": ["フク"],
        "kunyomi": [],
        "meaning": "しあわせ",
        "compounds": [
            { "word": "福", "reading": "ふく", "sentence": "節分に福は内と言う。" },
            { "word": "福袋", "reading": "ふくぶくろ", "sentence": "お正月に福袋を買う。" }
        ]
    },
    {
        "id": 410,
        "kanji": "物",
        "grade": 3,
        "onyomi": ["ブツ", "モツ"],
        "kunyomi": ["もの"],
        "meaning": "もの",
        "compounds": [
            { "word": "物語", "reading": "ものがたり", "sentence": "楽しい物語を読む。" },
            { "word": "食べ物", "reading": "たべもの", "sentence": "好きな食べ物はカレーだ。" }
        ]
    },
    {
        "id": 411,
        "kanji": "平",
        "grade": 3,
        "onyomi": ["ヘイ", "ビョウ"],
        "kunyomi": ["たい(ら)", "ひら"],
        "meaning": "たいらなこと、おだやかなこと",
        "compounds": [
            { "word": "平和", "reading": "へいわ", "sentence": "世界の平和を願う。" },
            { "word": "平ら", "reading": "たいら", "sentence": "平らな道を歩く。" }
        ]
    },
    {
        "id": 412,
        "kanji": "返",
        "grade": 3,
        "onyomi": ["ヘン"],
        "kunyomi": ["かえ(す)", "かえ(る)"],
        "meaning": "もどすこと",
        "compounds": [
            { "word": "返事", "reading": "へんじ", "sentence": "手紙に返事を書く。" },
            { "word": "返す", "reading": "かえす", "sentence": "本を図書館に返す。" }
        ]
    },
    {
        "id": 413,
        "kanji": "勉",
        "grade": 3,
        "onyomi": ["ベン"],
        "kunyomi": [],
        "meaning": "つとめはげむこと",
        "compounds": [
            { "word": "勉強", "reading": "べんきょう", "sentence": "毎日勉強する。" },
            { "word": "勉強家", "reading": "べんきょうか", "sentence": "姉は勉強家だ。" }
        ]
    },
    {
        "id": 414,
        "kanji": "放",
        "grade": 3,
        "onyomi": ["ホウ"],
        "kunyomi": ["はな(す)", "はな(れる)"],
        "meaning": "はなすこと、じゆうにすること",
        "compounds": [
            { "word": "放す", "reading": "はなす", "sentence": "小鳥を空に放す。" },
            { "word": "放課後", "reading": "ほうかご", "sentence": "放課後に公園で遊ぶ。" }
        ]
    },
    {
        "id": 415,
        "kanji": "味",
        "grade": 3,
        "onyomi": ["ミ"],
        "kunyomi": ["あじ"],
        "meaning": "あじ",
        "compounds": [
            { "word": "味", "reading": "あじ", "sentence": "スープの味をみる。" },
            { "word": "興味", "reading": "きょうみ", "sentence": "昆虫に興味がある。" }
        ]
    },
    {
        "id": 416,
        "kanji": "命",
        "grade": 3,
        "onyomi": ["メイ", "ミョウ"],
        "kunyomi": ["いのち"],
        "meaning": "いのち",
        "compounds": [
            { "word": "命", "reading": "いのち", "sentence": "命を大切にする。" },
            { "word": "運命", "reading": "うんめい", "sentence": "運命の出会い。" }
        ]
    },
    {
        "id": 417,
        "kanji": "面",
        "grade": 3,
        "onyomi": ["メン"],
        "kunyomi": ["おも", "おもて"],
        "meaning": "おもて、かお",
        "compounds": [
            { "word": "面白い", "reading": "おもしろい", "sentence": "この本は面白い。" },
            { "word": "画面", "reading": "がめん", "sentence": "テレビの画面を見る。" }
        ]
    },
    {
        "id": 418,
        "kanji": "問",
        "grade": 3,
        "onyomi": ["モン"],
        "kunyomi": ["と(う)", "と(い)"],
        "meaning": "たずねること",
        "compounds": [
            { "word": "問い", "reading": "とい", "sentence": "問いに答える。" },
            { "word": "質問", "reading": "しつもん", "sentence": "先生に質問する。" }
        ]
    },
    {
        "id": 419,
        "kanji": "役",
        "grade": 3,
        "onyomi": ["ヤク", "エキ"],
        "kunyomi": [],
        "meaning": "やくわり、しごと",
        "compounds": [
            { "word": "役目", "reading": "やくめ", "sentence": "係の役目を果たす。" },
            { "word": "主役", "reading": "しゅやく", "sentence": "劇の主役になる。" }
        ]
    },
    {
        "id": 420,
        "kanji": "薬",
        "grade": 3,
        "onyomi": ["ヤク"],
        "kunyomi": ["くすり"],
        "meaning": "くすり",
        "compounds": [
            { "word": "薬", "reading": "くすり", "sentence": "風邪の薬を飲む。" },
            { "word": "目薬", "reading": "めぐすり", "sentence": "目薬をさす。" }
        ]
    },
    {
        "id": 421,
        "kanji": "由",
        "grade": 3,
        "onyomi": ["ユ", "ユウ", "ユイ"],
        "kunyomi": ["よし"],
        "meaning": "わけ、りゆう",
        "compounds": [
            { "word": "理由", "reading": "りゆう", "sentence": "遅れた理由を話す。" },
            { "word": "自由", "reading": "じゆう", "sentence": "休み時間は自由に遊ぶ。" }
        ]
    },
    {
        "id": 422,
        "kanji": "油",
        "grade": 3,
        "onyomi": ["ユ"],
        "kunyomi": ["あぶら"],
        "meaning": "あぶら",
        "compounds": [
            { "word": "油", "reading": "あぶら", "sentence": "フライパンに油をひく。" },
            { "word": "石油", "reading": "せきゆ", "sentence": "石油からできる製品。" }
        ]
    },
    {
        "id": 423,
        "kanji": "有",
        "grade": 3,
        "onyomi": ["ユウ", "ウ"],
        "kunyomi": ["あ(る)"],
        "meaning": "あること",
        "compounds": [
            { "word": "有名", "reading": "ゆうめい", "sentence": "有名な絵をみる。" },
            { "word": "共有", "reading": "きょうゆう", "sentence": "おもちゃを共有する。" }
        ]
    },
    {
        "id": 424,
        "kanji": "遊",
        "grade": 3,
        "onyomi": ["ユウ"],
        "kunyomi": ["あそ(ぶ)"],
        "meaning": "あそぶこと",
        "compounds": [
            { "word": "遊具", "reading": "ゆうぐ", "sentence": "公園の遊具で遊ぶ。" },
            { "word": "遊ぶ", "reading": "あそぶ", "sentence": "友達と遊ぶ。" }
        ]
    },
    {
        "id": 425,
        "kanji": "予",
        "grade": 3,
        "onyomi": ["ヨ"],
        "kunyomi": [],
        "meaning": "前もってすること",
        "compounds": [
            { "word": "予習", "reading": "よしゅう", "sentence": "明日の授業の予習をする。" },
            { "word": "予報", "reading": "よほう", "sentence": "天気予報を見る。" }
        ]
    },
    {
        "id": 426,
        "kanji": "羊",
        "grade": 3,
        "onyomi": ["ヨウ"],
        "kunyomi": ["ひつじ"],
        "meaning": "ひつじ",
        "compounds": [
            { "word": "羊", "reading": "ひつじ", "sentence": "牧場で羊を見る。" },
            { "word": "羊毛", "reading": "ようもう", "sentence": "羊毛でセーターを作る。" }
        ]
    },
    {
        "id": 427,
        "kanji": "洋",
        "grade": 3,
        "onyomi": ["ヨウ"],
        "kunyomi": [],
        "meaning": "広い海、西洋",
        "compounds": [
            { "word": "海洋", "reading": "かいよう", "sentence": "海洋生物を調べる。" },
            { "word": "西洋", "reading": "せいよう", "sentence": "西洋の絵を見る。" }
        ]
    },
    {
        "id": 428,
        "kanji": "葉",
        "grade": 3,
        "onyomi": ["ヨウ"],
        "kunyomi": ["は"],
        "meaning": "植物のはっぱ",
        "compounds": [
            { "word": "葉", "reading": "は", "sentence": "秋に葉が色づく。" },
            { "word": "紅葉", "reading": "こうよう", "sentence": "紅葉を見に行く。" }
        ]
    },
    {
        "id": 429,
        "kanji": "陽",
        "grade": 3,
        "onyomi": ["ヨウ"],
        "kunyomi": [],
        "meaning": "太陽の光",
        "compounds": [
            { "word": "太陽", "reading": "たいよう", "sentence": "太陽が明るく輝く。" },
            { "word": "太陽系", "reading": "たいようけい", "sentence": "太陽系の星を学ぶ。" }
        ]
    },
    {
        "id": 430,
        "kanji": "様",
        "grade": 3,
        "onyomi": ["ヨウ"],
        "kunyomi": ["さま"],
        "meaning": "ようす、敬う言い方",
        "compounds": [
            { "word": "様子", "reading": "ようす", "sentence": "友達の様子を見る。" },
            { "word": "お客様", "reading": "おきゃくさま", "sentence": "お客様にあいさつする。" }
        ]
    },
    {
        "id": 431,
        "kanji": "落",
        "grade": 3,
        "onyomi": ["ラク"],
        "kunyomi": ["お(ちる)", "お(とす)"],
        "meaning": "おちること",
        "compounds": [
            { "word": "落下", "reading": "らっか", "sentence": "リンゴが落下する。" },
            { "word": "落ちる", "reading": "おちる", "sentence": "葉っぱが落ちる。" }
        ]
    },
    {
        "id": 432,
        "kanji": "流",
        "grade": 3,
        "onyomi": ["リュウ", "ル"],
        "kunyomi": ["なが(れる)", "なが(す)"],
        "meaning": "ながれること",
        "compounds": [
            { "word": "流行", "reading": "りゅうこう", "sentence": "今年の流行を調べる。" },
            { "word": "流れる", "reading": "ながれる", "sentence": "川が流れる。" }
        ]
    },
    {
        "id": 433,
        "kanji": "旅",
        "grade": 3,
        "onyomi": ["リョ"],
        "kunyomi": ["たび"],
        "meaning": "たび",
        "compounds": [
            { "word": "旅行", "reading": "りょこう", "sentence": "家族で旅行に行く。" },
            { "word": "旅", "reading": "たび", "sentence": "一人旅を夢見る。" }
        ]
    },
    {
        "id": 434,
        "kanji": "両",
        "grade": 3,
        "onyomi": ["リョウ"],
        "kunyomi": [],
        "meaning": "ふたつ、両方",
        "compounds": [
            { "word": "両手", "reading": "りょうて", "sentence": "両手でボールをつかむ。" },
            { "word": "両親", "reading": "りょうしん", "sentence": "両親に感謝する。" }
        ]
    },
    {
        "id": 435,
        "kanji": "緑",
        "grade": 3,
        "onyomi": ["リョク", "ロク"],
        "kunyomi": ["みどり"],
        "meaning": "みどり色",
        "compounds": [
            { "word": "緑", "reading": "みどり", "sentence": "緑の葉っぱ。" },
            { "word": "緑色", "reading": "みどりいろ", "sentence": "緑色のクレヨン。" }
        ]
    },
    {
        "id": 436,
        "kanji": "礼",
        "grade": 3,
        "onyomi": ["レイ", "ライ"],
        "kunyomi": [],
        "meaning": "おじぎ、感謝の気持ち",
        "compounds": [
            { "word": "お礼", "reading": "おれい", "sentence": "助けてくれたお礼を言う。" },
            { "word": "礼儀", "reading": "れいぎ", "sentence": "礼儀正しくあいさつする。" }
        ]
    },
    {
        "id": 437,
        "kanji": "列",
        "grade": 3,
        "onyomi": ["レツ"],
        "kunyomi": [],
        "meaning": "ならぶこと",
        "compounds": [
            { "word": "行列", "reading": "ぎょうれつ", "sentence": "お店の前に行列ができる。" },
            { "word": "列車", "reading": "れっしゃ", "sentence": "列車に乗って旅する。" }
        ]
    },
    {
        "id": 438,
        "kanji": "練",
        "grade": 3,
        "onyomi": ["レン"],
        "kunyomi": ["ね(る)"],
        "meaning": "くり返し習うこと",
        "compounds": [
            { "word": "練習", "reading": "れんしゅう", "sentence": "サッカーの練習をする。" },
            { "word": "練る", "reading": "ねる", "sentence": "計画を練る。" }
        ]
    },
    {
        "id": 439,
        "kanji": "路",
        "grade": 3,
        "onyomi": ["ロ"],
        "kunyomi": ["じ"],
        "meaning": "みち",
        "compounds": [
            { "word": "道路", "reading": "どうろ", "sentence": "道路を渡る。" },
            { "word": "線路", "reading": "せんろ", "sentence": "電車が線路を走る。" }
        ]
    },
    {
        "id": 440,
        "kanji": "和",
        "grade": 3,
        "onyomi": ["ワ", "オ"],
        "kunyomi": ["やわ(らぐ)", "なご(む)"],
        "meaning": "なかよくすること、日本風",
        "compounds": [
            { "word": "和室", "reading": "わしつ", "sentence": "和室でお茶をいただく。" },
            { "word": "和食", "reading": "わしょく", "sentence": "和食を食べる。" }
        ]
    },
    {
        "id": 441,
        "kanji": "愛",
        "grade": 4,
        "onyomi": ["アイ"],
        "kunyomi": [],
        "meaning": "大切に思う気持ち",
        "compounds": [
            { "word": "愛犬", "reading": "あいけん", "sentence": "愛犬と公園を散歩する。" },
            { "word": "愛情", "reading": "あいじょう", "sentence": "母の愛情を感じる。" }
        ]
    },
    {
        "id": 442,
        "kanji": "案",
        "grade": 4,
        "onyomi": ["アン"],
        "kunyomi": [],
        "meaning": "考えやよびかけのこと",
        "compounds": [
            { "word": "案内", "reading": "あんない", "sentence": "駅まで道を案内する。" },
            { "word": "名案", "reading": "めいあん", "sentence": "友達がいい名案を出した。" }
        ]
    },
    {
        "id": 443,
        "kanji": "以",
        "grade": 4,
        "onyomi": ["イ"],
        "kunyomi": [],
        "meaning": "「〜より」という意味を表す漢字",
        "compounds": [
            { "word": "以上", "reading": "いじょう", "sentence": "五さい以上の子が遊べる。" },
            { "word": "以外", "reading": "いがい", "sentence": "月曜日以外は休みだ。" }
        ]
    },
    {
        "id": 444,
        "kanji": "衣",
        "grade": 4,
        "onyomi": ["イ"],
        "kunyomi": ["ころも"],
        "meaning": "着るもの、衣服のこと",
        "compounds": [
            { "word": "衣服", "reading": "いふく", "sentence": "衣服をきちんとたたむ。" },
            { "word": "衣替え", "reading": "ころもがえ", "sentence": "六月に衣替えをする。" }
        ]
    },
    {
        "id": 445,
        "kanji": "位",
        "grade": 4,
        "onyomi": ["イ"],
        "kunyomi": ["くらい"],
        "meaning": "順番や場所を表すことば",
        "compounds": [
            { "word": "一位", "reading": "いちい", "sentence": "マラソンで一位になった。" },
            { "word": "位置", "reading": "いち", "sentence": "地図で位置を確かめる。" }
        ]
    },
    {
        "id": 446,
        "kanji": "茨",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["いばら"],
        "meaning": "地名によく使う漢字（とげのある植物）",
        "compounds": [
            { "word": "茨城", "reading": "いばらき", "sentence": "茨城県はほし芋が有名だ。" },
            { "word": "茨", "reading": "いばら", "sentence": "庭にいばらの木がある。" }
        ]
    },
    {
        "id": 447,
        "kanji": "印",
        "grade": 4,
        "onyomi": ["イン"],
        "kunyomi": ["しるし"],
        "meaning": "しるしやマークのこと",
        "compounds": [
            { "word": "印刷", "reading": "いんさつ", "sentence": "プリンターで印刷する。" },
            { "word": "目印", "reading": "めじるし", "sentence": "木に目印をつけた。" }
        ]
    },
    {
        "id": 448,
        "kanji": "英",
        "grade": 4,
        "onyomi": ["エイ"],
        "kunyomi": [],
        "meaning": "すぐれていること、イギリスを表す漢字",
        "compounds": [
            { "word": "英語", "reading": "えいご", "sentence": "英語の授業がある。" },
            { "word": "英雄", "reading": "えいゆう", "sentence": "英雄のような活やくをした。" }
        ]
    },
    {
        "id": 449,
        "kanji": "栄",
        "grade": 4,
        "onyomi": ["エイ"],
        "kunyomi": ["さか(える)"],
        "meaning": "さかえて元気になること",
        "compounds": [
            { "word": "栄養", "reading": "えいよう", "sentence": "栄養のある食事をとる。" },
            { "word": "栄える", "reading": "さかえる", "sentence": "町が大きく栄える。" }
        ]
    },
    {
        "id": 450,
        "kanji": "媛",
        "grade": 4,
        "onyomi": ["エン"],
        "kunyomi": ["ひめ"],
        "meaning": "美しい女性という意味の漢字（地名にも使う）",
        "compounds": [
            { "word": "愛媛", "reading": "えひめ", "sentence": "愛媛県はみかんが有名だ。" },
            { "word": "才媛", "reading": "さいえん", "sentence": "姉は才媛とよばれる。" }
        ]
    },
    {
        "id": 451,
        "kanji": "塩",
        "grade": 4,
        "onyomi": ["エン"],
        "kunyomi": ["しお"],
        "meaning": "しょっぱい味の調味料",
        "compounds": [
            { "word": "塩分", "reading": "えんぶん", "sentence": "塩分の取りすぎに注意する。" },
            { "word": "塩", "reading": "しお", "sentence": "料理に塩を少し入れる。" }
        ]
    },
    {
        "id": 452,
        "kanji": "岡",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["おか"],
        "meaning": "小さな山、地名によく使う漢字",
        "compounds": [
            { "word": "福岡", "reading": "ふくおか", "sentence": "福岡でラーメンを食べた。" },
            { "word": "岡", "reading": "おか", "sentence": "岡の上から町を見る。" }
        ]
    },
    {
        "id": 453,
        "kanji": "億",
        "grade": 4,
        "onyomi": ["オク"],
        "kunyomi": [],
        "meaning": "大きな数の単位（一億など）",
        "compounds": [
            { "word": "一億", "reading": "いちおく", "sentence": "この本は一億冊売れた。" },
            { "word": "数億", "reading": "すうおく", "sentence": "夜空に数億の星がある。" }
        ]
    },
    {
        "id": 454,
        "kanji": "加",
        "grade": 4,
        "onyomi": ["カ"],
        "kunyomi": ["くわ(える)", "くわ(わる)"],
        "meaning": "たし加えること",
        "compounds": [
            { "word": "加入", "reading": "かにゅう", "sentence": "サッカー部に加入する。" },
            { "word": "加える", "reading": "くわえる", "sentence": "スープに塩を加える。" }
        ]
    },
    {
        "id": 455,
        "kanji": "果",
        "grade": 4,
        "onyomi": ["カ"],
        "kunyomi": ["は(たす)", "は(てる)", "は(て)"],
        "meaning": "やりとげること、くだもの",
        "compounds": [
            { "word": "果物", "reading": "くだもの", "sentence": "果物を切って食べる。" },
            { "word": "結果", "reading": "けっか", "sentence": "テストの結果を見る。" }
        ]
    },
    {
        "id": 456,
        "kanji": "貨",
        "grade": 4,
        "onyomi": ["カ"],
        "kunyomi": [],
        "meaning": "お金や品物のこと",
        "compounds": [
            { "word": "貨物", "reading": "かもつ", "sentence": "貨物列車が通り過ぎた。" },
            { "word": "百貨店", "reading": "ひゃっかてん", "sentence": "百貨店で買い物をする。" }
        ]
    },
    {
        "id": 457,
        "kanji": "課",
        "grade": 4,
        "onyomi": ["カ"],
        "kunyomi": [],
        "meaning": "仕事や勉強の区切りのこと",
        "compounds": [
            { "word": "課題", "reading": "かだい", "sentence": "夏休みの課題を終える。" },
            { "word": "一課", "reading": "いっか", "sentence": "教科書の一課を読む。" }
        ]
    },
    {
        "id": 458,
        "kanji": "芽",
        "grade": 4,
        "onyomi": ["ガ"],
        "kunyomi": ["め"],
        "meaning": "植物のめのこと",
        "compounds": [
            { "word": "発芽", "reading": "はつが", "sentence": "種から発芽した。" },
            { "word": "芽", "reading": "め", "sentence": "花の芽が出てきた。" }
        ]
    },
    {
        "id": 459,
        "kanji": "賀",
        "grade": 4,
        "onyomi": ["ガ"],
        "kunyomi": [],
        "meaning": "お祝いすること",
        "compounds": [
            { "word": "年賀状", "reading": "ねんがじょう", "sentence": "祖父に年賀状を書く。" },
            { "word": "祝賀", "reading": "しゅくが", "sentence": "祝賀会が開かれた。" }
        ]
    },
    {
        "id": 460,
        "kanji": "改",
        "grade": 4,
        "onyomi": ["カイ"],
        "kunyomi": ["あらた(める)", "あらた(まる)"],
        "meaning": "新しくすること、直すこと",
        "compounds": [
            { "word": "改札", "reading": "かいさつ", "sentence": "駅の改札を通る。" },
            { "word": "改める", "reading": "あらためる", "sentence": "生活習慣を改める。" }
        ]
    },
    {
        "id": 461,
        "kanji": "械",
        "grade": 4,
        "onyomi": ["カイ"],
        "kunyomi": [],
        "meaning": "機械の部品を表す漢字",
        "compounds": [
            { "word": "機械", "reading": "きかい", "sentence": "工場の機械が動く。" },
            { "word": "器械", "reading": "きかい", "sentence": "器械体操を習う。" }
        ]
    },
    {
        "id": 462,
        "kanji": "害",
        "grade": 4,
        "onyomi": ["ガイ"],
        "kunyomi": [],
        "meaning": "悪いことが起きること",
        "compounds": [
            { "word": "災害", "reading": "さいがい", "sentence": "台風の災害に備える。" },
            { "word": "害虫", "reading": "がいちゅう", "sentence": "畑の害虫を退治する。" }
        ]
    },
    {
        "id": 463,
        "kanji": "街",
        "grade": 4,
        "onyomi": ["ガイ", "カイ"],
        "kunyomi": ["まち"],
        "meaning": "にぎやかな通りのこと",
        "compounds": [
            { "word": "街灯", "reading": "がいとう", "sentence": "夜道に街灯がともる。" },
            { "word": "商店街", "reading": "しょうてんがい", "sentence": "商店街で買い物をする。" }
        ]
    },
    {
        "id": 464,
        "kanji": "各",
        "grade": 4,
        "onyomi": ["カク"],
        "kunyomi": ["おのおの"],
        "meaning": "それぞれという意味",
        "compounds": [
            { "word": "各地", "reading": "かくち", "sentence": "各地から人が集まる。" },
            { "word": "各自", "reading": "かくじ", "sentence": "各自で用意をする。" }
        ]
    },
    {
        "id": 465,
        "kanji": "覚",
        "grade": 4,
        "onyomi": ["カク"],
        "kunyomi": ["おぼ(える)", "さ(める)", "さ(ます)"],
        "meaning": "おぼえること、気づくこと",
        "compounds": [
            { "word": "感覚", "reading": "かんかく", "sentence": "寒さで手の感覚がない。" },
            { "word": "覚える", "reading": "おぼえる", "sentence": "新しい漢字を覚える。" }
        ]
    },
    {
        "id": 466,
        "kanji": "潟",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["かた"],
        "meaning": "遠浅の海岸、地名によく使う漢字",
        "compounds": [
            { "word": "新潟", "reading": "にいがた", "sentence": "新潟でお米を買った。" },
            { "word": "干潟", "reading": "ひがた", "sentence": "干潟で貝をひろう。" }
        ]
    },
    {
        "id": 467,
        "kanji": "完",
        "grade": 4,
        "onyomi": ["カン"],
        "kunyomi": [],
        "meaning": "全部終わること",
        "compounds": [
            { "word": "完成", "reading": "かんせい", "sentence": "絵がついに完成した。" },
            { "word": "完全", "reading": "かんぜん", "sentence": "完全に暗記できた。" }
        ]
    },
    {
        "id": 468,
        "kanji": "官",
        "grade": 4,
        "onyomi": ["カン"],
        "kunyomi": [],
        "meaning": "国の仕事をする人",
        "compounds": [
            { "word": "警官", "reading": "けいかん", "sentence": "警官に道を聞いた。" },
            { "word": "官庁", "reading": "かんちょう", "sentence": "官庁で手続きをする。" }
        ]
    },
    {
        "id": 469,
        "kanji": "管",
        "grade": 4,
        "onyomi": ["カン"],
        "kunyomi": ["くだ"],
        "meaning": "細長いつつのこと",
        "compounds": [
            { "word": "水道管", "reading": "すいどうかん", "sentence": "水道管が破れつした。" },
            { "word": "管理", "reading": "かんり", "sentence": "図書室を管理する。" }
        ]
    },
    {
        "id": 470,
        "kanji": "関",
        "grade": 4,
        "onyomi": ["カン"],
        "kunyomi": ["せき", "かか(わる)"],
        "meaning": "つながりがあること",
        "compounds": [
            { "word": "関係", "reading": "かんけい", "sentence": "二つの出来事は関係がある。" },
            { "word": "関する", "reading": "かんする", "sentence": "歴史に関する本を読む。" }
        ]
    },
    {
        "id": 471,
        "kanji": "観",
        "grade": 4,
        "onyomi": ["カン"],
        "kunyomi": [],
        "meaning": "よく見ること",
        "compounds": [
            { "word": "観光", "reading": "かんこう", "sentence": "京都を観光する。" },
            { "word": "観察", "reading": "かんさつ", "sentence": "アリの動きを観察する。" }
        ]
    },
    {
        "id": 472,
        "kanji": "願",
        "grade": 4,
        "onyomi": ["ガン"],
        "kunyomi": ["ねが(う)"],
        "meaning": "そうなってほしいと思うこと",
        "compounds": [
            { "word": "願書", "reading": "がんしょ", "sentence": "学校に願書を出す。" },
            { "word": "願う", "reading": "ねがう", "sentence": "晴れることを願う。" }
        ]
    },
    {
        "id": 473,
        "kanji": "岐",
        "grade": 4,
        "onyomi": ["キ"],
        "kunyomi": [],
        "meaning": "道が分かれること、地名にも使う漢字",
        "compounds": [
            { "word": "岐阜", "reading": "ぎふ", "sentence": "岐阜で鵜飼を見た。" },
            { "word": "分岐点", "reading": "ぶんきてん", "sentence": "道の分岐点で立ち止まる。" }
        ]
    },
    {
        "id": 474,
        "kanji": "希",
        "grade": 4,
        "onyomi": ["キ"],
        "kunyomi": [],
        "meaning": "そうなってほしいと望むこと",
        "compounds": [
            { "word": "希望", "reading": "きぼう", "sentence": "未来に希望を持つ。" },
            { "word": "希少", "reading": "きしょう", "sentence": "これは希少な動物だ。" }
        ]
    },
    {
        "id": 475,
        "kanji": "季",
        "grade": 4,
        "onyomi": ["キ"],
        "kunyomi": [],
        "meaning": "季節のこと",
        "compounds": [
            { "word": "四季", "reading": "しき", "sentence": "日本には四季がある。" },
            { "word": "季節", "reading": "きせつ", "sentence": "好きな季節は秋だ。" }
        ]
    },
    {
        "id": 476,
        "kanji": "旗",
        "grade": 4,
        "onyomi": ["キ"],
        "kunyomi": ["はた"],
        "meaning": "はたのこと",
        "compounds": [
            { "word": "国旗", "reading": "こっき", "sentence": "国旗をポールに上げる。" },
            { "word": "旗", "reading": "はた", "sentence": "運動会で旗をふる。" }
        ]
    },
    {
        "id": 477,
        "kanji": "器",
        "grade": 4,
        "onyomi": ["キ"],
        "kunyomi": ["うつわ"],
        "meaning": "入れ物や道具のこと",
        "compounds": [
            { "word": "楽器", "reading": "がっき", "sentence": "好きな楽器はピアノだ。" },
            { "word": "食器", "reading": "しょっき", "sentence": "食後に食器を洗う。" }
        ]
    },
    {
        "id": 478,
        "kanji": "機",
        "grade": 4,
        "onyomi": ["キ"],
        "kunyomi": [],
        "meaning": "きかいやチャンスのこと",
        "compounds": [
            { "word": "飛行機", "reading": "ひこうき", "sentence": "飛行機で旅行に行く。" },
            { "word": "機会", "reading": "きかい", "sentence": "話す機会がなかった。" }
        ]
    },
    {
        "id": 479,
        "kanji": "議",
        "grade": 4,
        "onyomi": ["ギ"],
        "kunyomi": [],
        "meaning": "話し合うこと",
        "compounds": [
            { "word": "会議", "reading": "かいぎ", "sentence": "先生たちが会議をする。" },
            { "word": "議題", "reading": "ぎだい", "sentence": "次の議題に進む。" }
        ]
    },
    {
        "id": 480,
        "kanji": "求",
        "grade": 4,
        "onyomi": ["キュウ"],
        "kunyomi": ["もと(める)"],
        "meaning": "ほしいと願うこと",
        "compounds": [
            { "word": "要求", "reading": "ようきゅう", "sentence": "高い品質を要求する。" },
            { "word": "求める", "reading": "もとめる", "sentence": "助けを求める。" }
        ]
    },
    {
        "id": 481,
        "kanji": "泣",
        "grade": 4,
        "onyomi": ["キュウ"],
        "kunyomi": ["な(く)"],
        "meaning": "なみだを流すこと",
        "compounds": [
            { "word": "号泣", "reading": "ごうきゅう", "sentence": "映画を見て号泣した。" },
            { "word": "泣く", "reading": "なく", "sentence": "転んで泣いてしまった。" }
        ]
    },
    {
        "id": 482,
        "kanji": "給",
        "grade": 4,
        "onyomi": ["キュウ"],
        "kunyomi": [],
        "meaning": "くばること",
        "compounds": [
            { "word": "給食", "reading": "きゅうしょく", "sentence": "給食のカレーが好きだ。" },
            { "word": "給水", "reading": "きゅうすい", "sentence": "運動の後で給水する。" }
        ]
    },
    {
        "id": 483,
        "kanji": "挙",
        "grade": 4,
        "onyomi": ["キョ"],
        "kunyomi": ["あ(げる)"],
        "meaning": "手をあげること、おこなうこと",
        "compounds": [
            { "word": "選挙", "reading": "せんきょ", "sentence": "来月選挙が行われる。" },
            { "word": "挙げる", "reading": "あげる", "sentence": "質問がある人は手を挙げる。" }
        ]
    },
    {
        "id": 484,
        "kanji": "漁",
        "grade": 4,
        "onyomi": ["ギョ", "リョウ"],
        "kunyomi": [],
        "meaning": "魚や貝をとること",
        "compounds": [
            { "word": "漁業", "reading": "ぎょぎょう", "sentence": "この町は漁業がさかんだ。" },
            { "word": "漁師", "reading": "りょうし", "sentence": "漁師が魚をとりに出る。" }
        ]
    },
    {
        "id": 485,
        "kanji": "共",
        "grade": 4,
        "onyomi": ["キョウ"],
        "kunyomi": ["とも"],
        "meaning": "いっしょにすること",
        "compounds": [
            { "word": "共通", "reading": "きょうつう", "sentence": "二人には共通の趣味がある。" },
            { "word": "共に", "reading": "ともに", "sentence": "家族と共に旅行する。" }
        ]
    },
    {
        "id": 486,
        "kanji": "協",
        "grade": 4,
        "onyomi": ["キョウ"],
        "kunyomi": [],
        "meaning": "力を合わせること",
        "compounds": [
            { "word": "協力", "reading": "きょうりょく", "sentence": "友達と協力して作る。" },
            { "word": "協同", "reading": "きょうどう", "sentence": "みんなで協同して働く。" }
        ]
    },
    {
        "id": 487,
        "kanji": "鏡",
        "grade": 4,
        "onyomi": ["キョウ"],
        "kunyomi": ["かがみ"],
        "meaning": "姿を映す道具のこと",
        "compounds": [
            { "word": "鏡", "reading": "かがみ", "sentence": "鏡の前で髪をとかす。" },
            { "word": "望遠鏡", "reading": "ぼうえんきょう", "sentence": "望遠鏡で星を見る。" }
        ]
    },
    {
        "id": 488,
        "kanji": "競",
        "grade": 4,
        "onyomi": ["キョウ", "ケイ"],
        "kunyomi": ["きそ(う)", "せ(る)"],
        "meaning": "争うこと、比べること",
        "compounds": [
            { "word": "競争", "reading": "きょうそう", "sentence": "かけっこで競争する。" },
            { "word": "競う", "reading": "きそう", "sentence": "友達と速さを競う。" }
        ]
    },
    {
        "id": 489,
        "kanji": "極",
        "grade": 4,
        "onyomi": ["キョク", "ゴク"],
        "kunyomi": ["きわ(める)", "きわ(まる)"],
        "meaning": "いちばんはしのところ",
        "compounds": [
            { "word": "北極", "reading": "ほっきょく", "sentence": "北極には氷がたくさんある。" },
            { "word": "極める", "reading": "きわめる", "sentence": "柔道の道を極める。" }
        ]
    },
    {
        "id": 490,
        "kanji": "熊",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["くま"],
        "meaning": "動物のくま、地名にも使う漢字",
        "compounds": [
            { "word": "熊本", "reading": "くまもと", "sentence": "熊本でお城を見た。" },
            { "word": "熊", "reading": "くま", "sentence": "山で熊を見かけた。" }
        ]
    },
    {
        "id": 491,
        "kanji": "訓",
        "grade": 4,
        "onyomi": ["クン"],
        "kunyomi": [],
        "meaning": "教えや、読み方のこと",
        "compounds": [
            { "word": "訓読み", "reading": "くんよみ", "sentence": "漢字の訓読みを覚える。" },
            { "word": "教訓", "reading": "きょうくん", "sentence": "物語から教訓を学ぶ。" }
        ]
    },
    {
        "id": 492,
        "kanji": "軍",
        "grade": 4,
        "onyomi": ["グン"],
        "kunyomi": [],
        "meaning": "兵隊の集まりのこと",
        "compounds": [
            { "word": "軍隊", "reading": "ぐんたい", "sentence": "歴史の授業で軍隊を学ぶ。" },
            { "word": "将軍", "reading": "しょうぐん", "sentence": "昔の将軍について調べる。" }
        ]
    },
    {
        "id": 493,
        "kanji": "郡",
        "grade": 4,
        "onyomi": ["グン"],
        "kunyomi": [],
        "meaning": "地方の区分けのひとつ",
        "compounds": [
            { "word": "郡部", "reading": "ぐんぶ", "sentence": "祖父の家は郡部にある。" },
            { "word": "郡", "reading": "ぐん", "sentence": "この村は山田郡にある。" }
        ]
    },
    {
        "id": 494,
        "kanji": "群",
        "grade": 4,
        "onyomi": ["グン"],
        "kunyomi": ["む(れる)", "むら(がる)", "むれ"],
        "meaning": "たくさん集まること",
        "compounds": [
            { "word": "群れ", "reading": "むれ", "sentence": "魚の群れが川を泳ぐ。" },
            { "word": "大群", "reading": "たいぐん", "sentence": "鳥の大群が空を飛ぶ。" }
        ]
    },
    {
        "id": 495,
        "kanji": "径",
        "grade": 4,
        "onyomi": ["ケイ"],
        "kunyomi": [],
        "meaning": "道や円のはばのこと",
        "compounds": [
            { "word": "直径", "reading": "ちょっけい", "sentence": "円の直径をはかる。" },
            { "word": "半径", "reading": "はんけい", "sentence": "円の半径を求める。" }
        ]
    },
    {
        "id": 496,
        "kanji": "景",
        "grade": 4,
        "onyomi": ["ケイ"],
        "kunyomi": [],
        "meaning": "けしきのこと",
        "compounds": [
            { "word": "景色", "reading": "けしき", "sentence": "山の上から景色を見る。" },
            { "word": "風景", "reading": "ふうけい", "sentence": "美しい風景を写真にとる。" }
        ]
    },
    {
        "id": 497,
        "kanji": "芸",
        "grade": 4,
        "onyomi": ["ゲイ"],
        "kunyomi": [],
        "meaning": "うつくしい技やわざのこと",
        "compounds": [
            { "word": "芸術", "reading": "げいじゅつ", "sentence": "美術館で芸術を楽しむ。" },
            { "word": "園芸", "reading": "えんげい", "sentence": "祖母は園芸が好きだ。" }
        ]
    },
    {
        "id": 498,
        "kanji": "欠",
        "grade": 4,
        "onyomi": ["ケツ"],
        "kunyomi": ["か(ける)", "か(く)"],
        "meaning": "足りないこと、休むこと",
        "compounds": [
            { "word": "欠席", "reading": "けっせき", "sentence": "風邪で学校を欠席した。" },
            { "word": "欠ける", "reading": "かける", "sentence": "お皿の一部が欠ける。" }
        ]
    },
    {
        "id": 499,
        "kanji": "結",
        "grade": 4,
        "onyomi": ["ケツ"],
        "kunyomi": ["むす(ぶ)", "ゆ(う)", "ゆ(わえる)"],
        "meaning": "むすぶこと",
        "compounds": [
            { "word": "結果", "reading": "けっか", "sentence": "実験の結果をまとめる。" },
            { "word": "結ぶ", "reading": "むすぶ", "sentence": "くつのひもを結ぶ。" }
        ]
    },
    {
        "id": 500,
        "kanji": "建",
        "grade": 4,
        "onyomi": ["ケン"],
        "kunyomi": ["た(てる)", "た(つ)"],
        "meaning": "たてること",
        "compounds": [
            { "word": "建物", "reading": "たてもの", "sentence": "高い建物が立ちならぶ。" },
            { "word": "建てる", "reading": "たてる", "sentence": "新しい家を建てる。" }
        ]
    },
    {
        "id": 501,
        "kanji": "健",
        "grade": 4,
        "onyomi": ["ケン"],
        "kunyomi": ["すこ(やか)"],
        "meaning": "元気でじょうぶなこと",
        "compounds": [
            { "word": "健康", "reading": "けんこう", "sentence": "毎日運動して健康を保つ。" },
            { "word": "健やか", "reading": "すこやか", "sentence": "子どもが健やかに育つ。" }
        ]
    },
    {
        "id": 502,
        "kanji": "験",
        "grade": 4,
        "onyomi": ["ケン"],
        "kunyomi": [],
        "meaning": "ためすこと",
        "compounds": [
            { "word": "実験", "reading": "じっけん", "sentence": "理科室で実験をする。" },
            { "word": "経験", "reading": "けいけん", "sentence": "いい経験になった。" }
        ]
    },
    {
        "id": 503,
        "kanji": "固",
        "grade": 4,
        "onyomi": ["コ"],
        "kunyomi": ["かた(い)", "かた(める)", "かた(まる)"],
        "meaning": "かたいこと",
        "compounds": [
            { "word": "固体", "reading": "こたい", "sentence": "氷は水の固体だ。" },
            { "word": "固い", "reading": "かたい", "sentence": "このパンは固い。" }
        ]
    },
    {
        "id": 504,
        "kanji": "功",
        "grade": 4,
        "onyomi": ["コウ"],
        "kunyomi": [],
        "meaning": "うまくいくこと、てがら",
        "compounds": [
            { "word": "成功", "reading": "せいこう", "sentence": "実験が成功した。" },
            { "word": "功績", "reading": "こうせき", "sentence": "選手の功績をたたえる。" }
        ]
    },
    {
        "id": 505,
        "kanji": "好",
        "grade": 4,
        "onyomi": ["コウ"],
        "kunyomi": ["この(む)", "す(く)"],
        "meaning": "好きなこと",
        "compounds": [
            { "word": "好物", "reading": "こうぶつ", "sentence": "すしは父の好物だ。" },
            { "word": "好き", "reading": "すき", "sentence": "わたしは犬が好きだ。" }
        ]
    },
    {
        "id": 506,
        "kanji": "香",
        "grade": 4,
        "onyomi": ["コウ"],
        "kunyomi": ["かお(り)", "かお(る)", "か"],
        "meaning": "よいにおいのこと、地名にも使う漢字",
        "compounds": [
            { "word": "香川", "reading": "かがわ", "sentence": "香川でうどんを食べた。" },
            { "word": "香り", "reading": "かおり", "sentence": "花のよい香りがする。" }
        ]
    },
    {
        "id": 507,
        "kanji": "候",
        "grade": 4,
        "onyomi": ["コウ"],
        "kunyomi": [],
        "meaning": "天気やようすのこと",
        "compounds": [
            { "word": "天候", "reading": "てんこう", "sentence": "天候が急に変わった。" },
            { "word": "候補", "reading": "こうほ", "sentence": "次の会長の候補に選ばれる。" }
        ]
    },
    {
        "id": 508,
        "kanji": "康",
        "grade": 4,
        "onyomi": ["コウ"],
        "kunyomi": [],
        "meaning": "元気で安らかなこと",
        "compounds": [
            { "word": "健康", "reading": "けんこう", "sentence": "早ねをして健康を守る。" },
            { "word": "健康的", "reading": "けんこうてき", "sentence": "健康的な食事をとる。" }
        ]
    },
    {
        "id": 509,
        "kanji": "佐",
        "grade": 4,
        "onyomi": ["サ"],
        "kunyomi": [],
        "meaning": "助けるという意味の漢字、地名にも使う",
        "compounds": [
            { "word": "佐賀", "reading": "さが", "sentence": "佐賀でのりを買った。" },
            { "word": "補佐", "reading": "ほさ", "sentence": "父の仕事を補佐する。" }
        ]
    },
    {
        "id": 510,
        "kanji": "差",
        "grade": 4,
        "onyomi": ["サ"],
        "kunyomi": ["さ(す)"],
        "meaning": "ちがいのこと",
        "compounds": [
            { "word": "大差", "reading": "たいさ", "sentence": "大差をつけて勝った。" },
            { "word": "差", "reading": "さ", "sentence": "二つの数の差を求める。" }
        ]
    },
    {
        "id": 511,
        "kanji": "菜",
        "grade": 4,
        "onyomi": ["サイ"],
        "kunyomi": ["な"],
        "meaning": "やさいのこと",
        "compounds": [
            { "word": "野菜", "reading": "やさい", "sentence": "畑で野菜を育てる。" },
            { "word": "菜の花", "reading": "なのはな", "sentence": "春に菜の花がさく。" }
        ]
    },
    {
        "id": 512,
        "kanji": "最",
        "grade": 4,
        "onyomi": ["サイ"],
        "kunyomi": ["もっと(も)"],
        "meaning": "いちばんという意味",
        "compounds": [
            { "word": "最初", "reading": "さいしょ", "sentence": "最初に手を洗う。" },
            { "word": "最も", "reading": "もっとも", "sentence": "これが最もおいしい。" }
        ]
    },
    {
        "id": 513,
        "kanji": "埼",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["さい"],
        "meaning": "地名によく使う漢字",
        "compounds": [
            { "word": "埼玉", "reading": "さいたま", "sentence": "埼玉に祖父母が住む。" },
            { "word": "埼玉県", "reading": "さいたまけん", "sentence": "埼玉県で花火大会がある。" }
        ]
    },
    {
        "id": 514,
        "kanji": "材",
        "grade": 4,
        "onyomi": ["ザイ"],
        "kunyomi": [],
        "meaning": "材料やもとになるもの",
        "compounds": [
            { "word": "材料", "reading": "ざいりょう", "sentence": "料理の材料をそろえる。" },
            { "word": "木材", "reading": "もくざい", "sentence": "木材で本だなを作る。" }
        ]
    },
    {
        "id": 515,
        "kanji": "崎",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["さき"],
        "meaning": "岬のこと、地名によく使う漢字",
        "compounds": [
            { "word": "長崎", "reading": "ながさき", "sentence": "長崎でカステラを買った。" },
            { "word": "崎", "reading": "さき", "sentence": "岬の先を崎とよぶ。" }
        ]
    },
    {
        "id": 516,
        "kanji": "昨",
        "grade": 4,
        "onyomi": ["サク"],
        "kunyomi": [],
        "meaning": "前の、という意味",
        "compounds": [
            { "word": "昨年", "reading": "さくねん", "sentence": "昨年よりせが伸びた。" },
            { "word": "昨夜", "reading": "さくや", "sentence": "昨夜は雨が降った。" }
        ]
    },
    {
        "id": 517,
        "kanji": "札",
        "grade": 4,
        "onyomi": ["サツ"],
        "kunyomi": ["ふだ"],
        "meaning": "紙のお金やふだのこと",
        "compounds": [
            { "word": "表札", "reading": "ひょうさつ", "sentence": "玄関に表札をかける。" },
            { "word": "お札", "reading": "おさつ", "sentence": "お財布にお札を入れる。" }
        ]
    },
    {
        "id": 518,
        "kanji": "刷",
        "grade": 4,
        "onyomi": ["サツ"],
        "kunyomi": ["す(る)"],
        "meaning": "印刷すること",
        "compounds": [
            { "word": "印刷", "reading": "いんさつ", "sentence": "プリントを印刷する。" },
            { "word": "刷る", "reading": "する", "sentence": "版画を刷る。" }
        ]
    },
    {
        "id": 519,
        "kanji": "察",
        "grade": 4,
        "onyomi": ["サツ"],
        "kunyomi": [],
        "meaning": "よく見て考えること",
        "compounds": [
            { "word": "観察", "reading": "かんさつ", "sentence": "植物を観察する。" },
            { "word": "警察", "reading": "けいさつ", "sentence": "警察に道をたずねる。" }
        ]
    },
    {
        "id": 520,
        "kanji": "参",
        "grade": 4,
        "onyomi": ["サン"],
        "kunyomi": ["まい(る)"],
        "meaning": "行くこと、加わること",
        "compounds": [
            { "word": "参加", "reading": "さんか", "sentence": "運動会に参加する。" },
            { "word": "参る", "reading": "まいる", "sentence": "お墓に参る。" }
        ]
    },
    {
        "id": 521,
        "kanji": "産",
        "grade": 4,
        "onyomi": ["サン"],
        "kunyomi": ["う(む)", "うぶ"],
        "meaning": "生まれること、作ること",
        "compounds": [
            { "word": "生産", "reading": "せいさん", "sentence": "工場で自動車を生産する。" },
            { "word": "産む", "reading": "うむ", "sentence": "ねこが子ねこを産む。" }
        ]
    },
    {
        "id": 522,
        "kanji": "散",
        "grade": 4,
        "onyomi": ["サン"],
        "kunyomi": ["ち(る)", "ち(らす)", "ち(らかる)"],
        "meaning": "ばらばらになること",
        "compounds": [
            { "word": "散歩", "reading": "さんぽ", "sentence": "犬と散歩に出かける。" },
            { "word": "散る", "reading": "ちる", "sentence": "桜の花びらが散る。" }
        ]
    },
    {
        "id": 523,
        "kanji": "残",
        "grade": 4,
        "onyomi": ["ザン"],
        "kunyomi": ["のこ(る)", "のこ(す)"],
        "meaning": "あとにのこること",
        "compounds": [
            { "word": "残念", "reading": "ざんねん", "sentence": "雨で中止になり残念だ。" },
            { "word": "残る", "reading": "のこる", "sentence": "ご飯が少し残る。" }
        ]
    },
    {
        "id": 524,
        "kanji": "氏",
        "grade": 4,
        "onyomi": ["シ"],
        "kunyomi": ["うじ"],
        "meaning": "名字のこと",
        "compounds": [
            { "word": "氏名", "reading": "しめい", "sentence": "用紙に氏名を書く。" },
            { "word": "山田氏", "reading": "やまだし", "sentence": "山田氏があいさつをした。" }
        ]
    },
    {
        "id": 525,
        "kanji": "司",
        "grade": 4,
        "onyomi": ["シ"],
        "kunyomi": [],
        "meaning": "仕事をとりしきること",
        "compounds": [
            { "word": "司会", "reading": "しかい", "sentence": "発表会の司会をする。" },
            { "word": "司書", "reading": "ししょ", "sentence": "図書館の司書に聞く。" }
        ]
    },
    {
        "id": 526,
        "kanji": "試",
        "grade": 4,
        "onyomi": ["シ"],
        "kunyomi": ["こころ(みる)", "ため(す)"],
        "meaning": "ためすこと",
        "compounds": [
            { "word": "試験", "reading": "しけん", "sentence": "来週テストがある。" },
            { "word": "試す", "reading": "ためす", "sentence": "新しい方法を試す。" }
        ]
    },
    {
        "id": 527,
        "kanji": "児",
        "grade": 4,
        "onyomi": ["ジ"],
        "kunyomi": [],
        "meaning": "子どものこと",
        "compounds": [
            { "word": "児童", "reading": "じどう", "sentence": "児童館で遊ぶ。" },
            { "word": "幼児", "reading": "ようじ", "sentence": "幼児が公園で遊ぶ。" }
        ]
    },
    {
        "id": 528,
        "kanji": "治",
        "grade": 4,
        "onyomi": ["ジ", "チ"],
        "kunyomi": ["おさ(める)", "なお(る)", "なお(す)"],
        "meaning": "おさめること、けがや病気をなおすこと",
        "compounds": [
            { "word": "政治", "reading": "せいじ", "sentence": "国の政治について学ぶ。" },
            { "word": "治る", "reading": "なおる", "sentence": "かぜが治る。" }
        ]
    },
    {
        "id": 529,
        "kanji": "滋",
        "grade": 4,
        "onyomi": ["ジ"],
        "kunyomi": [],
        "meaning": "栄養があるという意味、地名にも使う漢字",
        "compounds": [
            { "word": "滋賀", "reading": "しが", "sentence": "滋賀に大きな湖がある。" },
            { "word": "滋養", "reading": "じよう", "sentence": "滋養のある食べ物をとる。" }
        ]
    },
    {
        "id": 530,
        "kanji": "辞",
        "grade": 4,
        "onyomi": ["ジ"],
        "kunyomi": ["や(める)"],
        "meaning": "言葉のこと、やめること",
        "compounds": [
            { "word": "辞書", "reading": "じしょ", "sentence": "辞書で言葉の意味を調べる。" },
            { "word": "辞める", "reading": "やめる", "sentence": "習い事を辞める。" }
        ]
    },
    {
        "id": 531,
        "kanji": "鹿",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["しか"],
        "meaning": "動物のしか、地名にも使う漢字",
        "compounds": [
            { "word": "鹿児島", "reading": "かごしま", "sentence": "鹿児島でさつまいもを食べた。" },
            { "word": "鹿", "reading": "しか", "sentence": "公園で鹿にえさをやる。" }
        ]
    },
    {
        "id": 532,
        "kanji": "失",
        "grade": 4,
        "onyomi": ["シツ"],
        "kunyomi": ["うしな(う)"],
        "meaning": "なくすこと",
        "compounds": [
            { "word": "失敗", "reading": "しっぱい", "sentence": "実験に失敗した。" },
            { "word": "失う", "reading": "うしなう", "sentence": "自信を失う。" }
        ]
    },
    {
        "id": 533,
        "kanji": "借",
        "grade": 4,
        "onyomi": ["シャク"],
        "kunyomi": ["か(りる)"],
        "meaning": "かりること",
        "compounds": [
            { "word": "借金", "reading": "しゃっきん", "sentence": "借金を返す計画を立てる。" },
            { "word": "借りる", "reading": "かりる", "sentence": "図書館で本を借りる。" }
        ]
    },
    {
        "id": 534,
        "kanji": "種",
        "grade": 4,
        "onyomi": ["シュ"],
        "kunyomi": ["たね"],
        "meaning": "たねのこと、しゅるいのこと",
        "compounds": [
            { "word": "種類", "reading": "しゅるい", "sentence": "魚には多くの種類がある。" },
            { "word": "種", "reading": "たね", "sentence": "花の種をまく。" }
        ]
    },
    {
        "id": 535,
        "kanji": "周",
        "grade": 4,
        "onyomi": ["シュウ"],
        "kunyomi": ["まわ(り)"],
        "meaning": "まわりのこと",
        "compounds": [
            { "word": "周辺", "reading": "しゅうへん", "sentence": "駅の周辺を歩く。" },
            { "word": "周り", "reading": "まわり", "sentence": "池の周りを走る。" }
        ]
    },
    {
        "id": 536,
        "kanji": "祝",
        "grade": 4,
        "onyomi": ["シュク"],
        "kunyomi": ["いわ(う)"],
        "meaning": "お祝いすること",
        "compounds": [
            { "word": "祝日", "reading": "しゅくじつ", "sentence": "今日は祝日で学校は休みだ。" },
            { "word": "祝う", "reading": "いわう", "sentence": "みんなで誕生日を祝う。" }
        ]
    },
    {
        "id": 537,
        "kanji": "順",
        "grade": 4,
        "onyomi": ["ジュン"],
        "kunyomi": [],
        "meaning": "順番のこと",
        "compounds": [
            { "word": "順番", "reading": "じゅんばん", "sentence": "順番にならんで待つ。" },
            { "word": "順序", "reading": "じゅんじょ", "sentence": "作業の順序を考える。" }
        ]
    },
    {
        "id": 538,
        "kanji": "初",
        "grade": 4,
        "onyomi": ["ショ"],
        "kunyomi": ["はじ(め)", "はつ", "うい", "そ(める)"],
        "meaning": "はじめてのこと",
        "compounds": [
            { "word": "最初", "reading": "さいしょ", "sentence": "最初に自己紹介をする。" },
            { "word": "初め", "reading": "はじめ", "sentence": "物語の初めを読む。" }
        ]
    },
    {
        "id": 539,
        "kanji": "松",
        "grade": 4,
        "onyomi": ["ショウ"],
        "kunyomi": ["まつ"],
        "meaning": "松の木のこと",
        "compounds": [
            { "word": "松林", "reading": "まつばやし", "sentence": "海岸に松林が広がる。" },
            { "word": "松", "reading": "まつ", "sentence": "庭に松の木を植える。" }
        ]
    },
    {
        "id": 540,
        "kanji": "笑",
        "grade": 4,
        "onyomi": ["ショウ"],
        "kunyomi": ["わら(う)", "え(む)"],
        "meaning": "わらうこと",
        "compounds": [
            { "word": "笑顔", "reading": "えがお", "sentence": "妹が笑顔で走ってきた。" },
            { "word": "笑う", "reading": "わらう", "sentence": "面白い話でみんなが笑う。" }
        ]
    },
    {
        "id": 541,
        "kanji": "唱",
        "grade": 4,
        "onyomi": ["ショウ"],
        "kunyomi": ["とな(える)"],
        "meaning": "声に出して言うこと",
        "compounds": [
            { "word": "合唱", "reading": "がっしょう", "sentence": "音楽会で合唱をする。" },
            { "word": "唱える", "reading": "となえる", "sentence": "呪文を唱える。" }
        ]
    },
    {
        "id": 542,
        "kanji": "焼",
        "grade": 4,
        "onyomi": ["ショウ"],
        "kunyomi": ["や(く)", "や(ける)"],
        "meaning": "火でやくこと",
        "compounds": [
            { "word": "夕焼け", "reading": "ゆうやけ", "sentence": "きれいな夕焼けを見る。" },
            { "word": "焼く", "reading": "やく", "sentence": "パンをトースターで焼く。" }
        ]
    },
    {
        "id": 543,
        "kanji": "照",
        "grade": 4,
        "onyomi": ["ショウ"],
        "kunyomi": ["て(る)", "て(らす)", "て(れる)"],
        "meaning": "光をあてること",
        "compounds": [
            { "word": "照明", "reading": "しょうめい", "sentence": "部屋の照明をつける。" },
            { "word": "照れる", "reading": "てれる", "sentence": "ほめられて照れる。" }
        ]
    },
    {
        "id": 544,
        "kanji": "城",
        "grade": 4,
        "onyomi": ["ジョウ"],
        "kunyomi": ["しろ"],
        "meaning": "お城のこと",
        "compounds": [
            { "word": "城下町", "reading": "じょうかまち", "sentence": "城下町を歩いて観光する。" },
            { "word": "城", "reading": "しろ", "sentence": "高い山に城が建つ。" }
        ]
    },
    {
        "id": 545,
        "kanji": "縄",
        "grade": 4,
        "onyomi": ["ジョウ"],
        "kunyomi": ["なわ"],
        "meaning": "なわのこと、地名にも使う漢字",
        "compounds": [
            { "word": "沖縄", "reading": "おきなわ", "sentence": "沖縄の海はとてもきれいだ。" },
            { "word": "縄", "reading": "なわ", "sentence": "縄を使って荷物をしばる。" }
        ]
    },
    {
        "id": 546,
        "kanji": "臣",
        "grade": 4,
        "onyomi": ["シン", "ジン"],
        "kunyomi": [],
        "meaning": "王や国に仕える人",
        "compounds": [
            { "word": "大臣", "reading": "だいじん", "sentence": "大臣が国会で話す。" },
            { "word": "家臣", "reading": "かしん", "sentence": "殿様に家臣が仕える。" }
        ]
    },
    {
        "id": 547,
        "kanji": "信",
        "grade": 4,
        "onyomi": ["シン"],
        "kunyomi": [],
        "meaning": "信じること",
        "compounds": [
            { "word": "信号", "reading": "しんごう", "sentence": "信号が青に変わる。" },
            { "word": "自信", "reading": "じしん", "sentence": "発表に自信を持つ。" }
        ]
    },
    {
        "id": 548,
        "kanji": "井",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["い"],
        "meaning": "井戸のこと",
        "compounds": [
            { "word": "井戸", "reading": "いど", "sentence": "昔は井戸から水をくんだ。" },
            { "word": "天井", "reading": "てんじょう", "sentence": "部屋の天井を見上げる。" }
        ]
    },
    {
        "id": 549,
        "kanji": "成",
        "grade": 4,
        "onyomi": ["セイ"],
        "kunyomi": ["な(る)", "な(す)"],
        "meaning": "できあがること",
        "compounds": [
            { "word": "完成", "reading": "かんせい", "sentence": "模型がついに完成した。" },
            { "word": "成る", "reading": "なる", "sentence": "実験は成功に成る。" }
        ]
    },
    {
        "id": 550,
        "kanji": "省",
        "grade": 4,
        "onyomi": ["セイ", "ショウ"],
        "kunyomi": ["かえり(みる)", "はぶ(く)"],
        "meaning": "反省すること、はぶくこと",
        "compounds": [
            { "word": "反省", "reading": "はんせい", "sentence": "失敗を反省する。" },
            { "word": "省く", "reading": "はぶく", "sentence": "むだな手順を省く。" }
        ]
    },
    {
        "id": 551,
        "kanji": "清",
        "grade": 4,
        "onyomi": ["セイ"],
        "kunyomi": ["きよ(い)", "きよ(まる)", "きよ(める)"],
        "meaning": "きれいなこと",
        "compounds": [
            { "word": "清潔", "reading": "せいけつ", "sentence": "部屋を清潔にたもつ。" },
            { "word": "清い", "reading": "きよい", "sentence": "山から清い水が流れる。" }
        ]
    },
    {
        "id": 552,
        "kanji": "静",
        "grade": 4,
        "onyomi": ["セイ", "ジョウ"],
        "kunyomi": ["しず(か)", "しず(める)", "しず(まる)"],
        "meaning": "しずかなこと",
        "compounds": [
            { "word": "静か", "reading": "しずか", "sentence": "図書館の中は静かだ。" },
            { "word": "安静", "reading": "あんせい", "sentence": "けがをして安静にする。" }
        ]
    },
    {
        "id": 553,
        "kanji": "席",
        "grade": 4,
        "onyomi": ["セキ"],
        "kunyomi": [],
        "meaning": "すわる場所のこと",
        "compounds": [
            { "word": "座席", "reading": "ざせき", "sentence": "電車の座席にすわる。" },
            { "word": "出席", "reading": "しゅっせき", "sentence": "授業に出席する。" }
        ]
    },
    {
        "id": 554,
        "kanji": "積",
        "grade": 4,
        "onyomi": ["セキ"],
        "kunyomi": ["つ(む)", "つ(もる)"],
        "meaning": "つみ重ねること",
        "compounds": [
            { "word": "面積", "reading": "めんせき", "sentence": "教室の面積を計算する。" },
            { "word": "積む", "reading": "つむ", "sentence": "箱をトラックに積む。" }
        ]
    },
    {
        "id": 555,
        "kanji": "折",
        "grade": 4,
        "onyomi": ["セツ"],
        "kunyomi": ["お(る)", "お(れる)"],
        "meaning": "おること",
        "compounds": [
            { "word": "折り紙", "reading": "おりがみ", "sentence": "折り紙でつるを作る。" },
            { "word": "折る", "reading": "おる", "sentence": "紙をきれいに折る。" }
        ]
    },
    {
        "id": 556,
        "kanji": "節",
        "grade": 4,
        "onyomi": ["セツ"],
        "kunyomi": ["ふし"],
        "meaning": "区切りのこと",
        "compounds": [
            { "word": "季節", "reading": "きせつ", "sentence": "好きな季節は春だ。" },
            { "word": "節目", "reading": "ふしめ", "sentence": "卒業は人生の節目だ。" }
        ]
    },
    {
        "id": 557,
        "kanji": "説",
        "grade": 4,
        "onyomi": ["セツ"],
        "kunyomi": ["と(く)"],
        "meaning": "話して聞かせること",
        "compounds": [
            { "word": "説明", "reading": "せつめい", "sentence": "やり方を説明する。" },
            { "word": "伝説", "reading": "でんせつ", "sentence": "村に伝わる伝説を聞く。" }
        ]
    },
    {
        "id": 558,
        "kanji": "浅",
        "grade": 4,
        "onyomi": ["セン"],
        "kunyomi": ["あさ(い)"],
        "meaning": "あさいこと",
        "compounds": [
            { "word": "浅瀬", "reading": "あさせ", "sentence": "川の浅瀬で魚をつかまえる。" },
            { "word": "浅い", "reading": "あさい", "sentence": "このプールは浅い。" }
        ]
    },
    {
        "id": 559,
        "kanji": "戦",
        "grade": 4,
        "onyomi": ["セン"],
        "kunyomi": ["たたか(う)", "いくさ"],
        "meaning": "たたかうこと",
        "compounds": [
            { "word": "戦争", "reading": "せんそう", "sentence": "戦争のない世界を願う。" },
            { "word": "戦う", "reading": "たたかう", "sentence": "決勝で戦う。" }
        ]
    },
    {
        "id": 560,
        "kanji": "選",
        "grade": 4,
        "onyomi": ["セン"],
        "kunyomi": ["えら(ぶ)"],
        "meaning": "えらぶこと",
        "compounds": [
            { "word": "選手", "reading": "せんしゅ", "sentence": "サッカーの選手にあこがれる。" },
            { "word": "選ぶ", "reading": "えらぶ", "sentence": "好きな本を選ぶ。" }
        ]
    },
    {
        "id": 561,
        "kanji": "然",
        "grade": 4,
        "onyomi": ["ゼン", "ネン"],
        "kunyomi": [],
        "meaning": "そのようであるという意味",
        "compounds": [
            { "word": "自然", "reading": "しぜん", "sentence": "山の自然を大切にする。" },
            { "word": "天然", "reading": "てんねん", "sentence": "天然の温泉に入る。" }
        ]
    },
    {
        "id": 562,
        "kanji": "争",
        "grade": 4,
        "onyomi": ["ソウ"],
        "kunyomi": ["あらそ(う)"],
        "meaning": "あらそうこと",
        "compounds": [
            { "word": "戦争", "reading": "せんそう", "sentence": "戦争の歴史を学ぶ。" },
            { "word": "争う", "reading": "あらそう", "sentence": "順位を争う。" }
        ]
    },
    {
        "id": 563,
        "kanji": "倉",
        "grade": 4,
        "onyomi": ["ソウ"],
        "kunyomi": ["くら"],
        "meaning": "ものをしまう建物のこと",
        "compounds": [
            { "word": "倉庫", "reading": "そうこ", "sentence": "荷物を倉庫にしまう。" },
            { "word": "倉", "reading": "くら", "sentence": "倉に古い道具がある。" }
        ]
    },
    {
        "id": 564,
        "kanji": "巣",
        "grade": 4,
        "onyomi": ["ソウ"],
        "kunyomi": ["す"],
        "meaning": "動物のすみかのこと",
        "compounds": [
            { "word": "巣", "reading": "す", "sentence": "鳥が木の上に巣を作る。" },
            { "word": "巣立つ", "reading": "すだつ", "sentence": "ひな鳥が巣立つ。" }
        ]
    },
    {
        "id": 565,
        "kanji": "束",
        "grade": 4,
        "onyomi": ["ソク"],
        "kunyomi": ["たば"],
        "meaning": "たばねること",
        "compounds": [
            { "word": "花束", "reading": "はなたば", "sentence": "母に花束をおくる。" },
            { "word": "約束", "reading": "やくそく", "sentence": "友達と約束をする。" }
        ]
    },
    {
        "id": 566,
        "kanji": "側",
        "grade": 4,
        "onyomi": ["ソク"],
        "kunyomi": ["がわ"],
        "meaning": "どちらかの方向のこと",
        "compounds": [
            { "word": "右側", "reading": "みぎがわ", "sentence": "道の右側を歩く。" },
            { "word": "内側", "reading": "うちがわ", "sentence": "線の内側に立つ。" }
        ]
    },
    {
        "id": 567,
        "kanji": "続",
        "grade": 4,
        "onyomi": ["ゾク"],
        "kunyomi": ["つづ(く)", "つづ(ける)"],
        "meaning": "つづくこと",
        "compounds": [
            { "word": "継続", "reading": "けいぞく", "sentence": "練習を継続する。" },
            { "word": "続く", "reading": "つづく", "sentence": "晴れの日が続く。" }
        ]
    },
    {
        "id": 568,
        "kanji": "卒",
        "grade": 4,
        "onyomi": ["ソツ"],
        "kunyomi": [],
        "meaning": "終えること",
        "compounds": [
            { "word": "卒業", "reading": "そつぎょう", "sentence": "三月に卒業する。" },
            { "word": "卒業式", "reading": "そつぎょうしき", "sentence": "体育館で卒業式が行われる。" }
        ]
    },
    {
        "id": 569,
        "kanji": "孫",
        "grade": 4,
        "onyomi": ["ソン"],
        "kunyomi": ["まご"],
        "meaning": "子どもの子どものこと",
        "compounds": [
            { "word": "子孫", "reading": "しそん", "sentence": "祖先から子孫へ受けつぐ。" },
            { "word": "孫", "reading": "まご", "sentence": "祖母が孫と遊ぶ。" }
        ]
    },
    {
        "id": 570,
        "kanji": "帯",
        "grade": 4,
        "onyomi": ["タイ"],
        "kunyomi": ["おび", "お(びる)"],
        "meaning": "おびのこと、身につけること",
        "compounds": [
            { "word": "帯", "reading": "おび", "sentence": "着物に帯をむすぶ。" },
            { "word": "熱帯", "reading": "ねったい", "sentence": "熱帯の魚を水そうで飼う。" }
        ]
    },
    {
        "id": 571,
        "kanji": "隊",
        "grade": 4,
        "onyomi": ["タイ"],
        "kunyomi": [],
        "meaning": "集まって行動するグループ",
        "compounds": [
            { "word": "隊列", "reading": "たいれつ", "sentence": "隊列をくんで歩く。" },
            { "word": "軍隊", "reading": "ぐんたい", "sentence": "歴史の本で軍隊を調べる。" }
        ]
    },
    {
        "id": 572,
        "kanji": "達",
        "grade": 4,
        "onyomi": ["タツ"],
        "kunyomi": [],
        "meaning": "目的地につくこと、〜たち",
        "compounds": [
            { "word": "友達", "reading": "ともだち", "sentence": "友達と公園で遊ぶ。" },
            { "word": "発達", "reading": "はったつ", "sentence": "科学技術が発達する。" }
        ]
    },
    {
        "id": 573,
        "kanji": "単",
        "grade": 4,
        "onyomi": ["タン"],
        "kunyomi": [],
        "meaning": "ひとつだけ、簡単なこと",
        "compounds": [
            { "word": "単語", "reading": "たんご", "sentence": "英語の単語を覚える。" },
            { "word": "簡単", "reading": "かんたん", "sentence": "問題は意外と簡単だった。" }
        ]
    },
    {
        "id": 574,
        "kanji": "置",
        "grade": 4,
        "onyomi": ["チ"],
        "kunyomi": ["お(く)"],
        "meaning": "おくこと",
        "compounds": [
            { "word": "位置", "reading": "いち", "sentence": "地図で位置を確認する。" },
            { "word": "置く", "reading": "おく", "sentence": "机の上に本を置く。" }
        ]
    },
    {
        "id": 575,
        "kanji": "仲",
        "grade": 4,
        "onyomi": ["チュウ"],
        "kunyomi": ["なか"],
        "meaning": "人とのつながりのこと",
        "compounds": [
            { "word": "仲間", "reading": "なかま", "sentence": "部活の仲間と練習する。" },
            { "word": "仲良し", "reading": "なかよし", "sentence": "となりの子と仲良しだ。" }
        ]
    },
    {
        "id": 576,
        "kanji": "沖",
        "grade": 4,
        "onyomi": ["チュウ"],
        "kunyomi": ["おき"],
        "meaning": "海岸から遠い海のこと、地名にも使う漢字",
        "compounds": [
            { "word": "沖縄", "reading": "おきなわ", "sentence": "沖縄の海で泳いだ。" },
            { "word": "沖", "reading": "おき", "sentence": "沖に船が見える。" }
        ]
    },
    {
        "id": 577,
        "kanji": "兆",
        "grade": 4,
        "onyomi": ["チョウ"],
        "kunyomi": ["きざ(し)"],
        "meaning": "大きな数の単位、きざしのこと",
        "compounds": [
            { "word": "一兆", "reading": "いっちょう", "sentence": "一兆という数はとても大きい。" },
            { "word": "兆候", "reading": "ちょうこう", "sentence": "雨が降る兆候が見える。" }
        ]
    },
    {
        "id": 578,
        "kanji": "低",
        "grade": 4,
        "onyomi": ["テイ"],
        "kunyomi": ["ひく(い)", "ひく(める)", "ひく(まる)"],
        "meaning": "ひくいこと",
        "compounds": [
            { "word": "低学年", "reading": "ていがくねん", "sentence": "低学年向けの絵本を読む。" },
            { "word": "低い", "reading": "ひくい", "sentence": "このいすは低い。" }
        ]
    },
    {
        "id": 579,
        "kanji": "底",
        "grade": 4,
        "onyomi": ["テイ"],
        "kunyomi": ["そこ"],
        "meaning": "いちばん下の部分のこと",
        "compounds": [
            { "word": "海底", "reading": "かいてい", "sentence": "海底に沈んだ船を調べる。" },
            { "word": "底", "reading": "そこ", "sentence": "コップの底に水が残る。" }
        ]
    },
    {
        "id": 580,
        "kanji": "的",
        "grade": 4,
        "onyomi": ["テキ"],
        "kunyomi": ["まと"],
        "meaning": "まとのこと、〜のようなという意味",
        "compounds": [
            { "word": "目的", "reading": "もくてき", "sentence": "旅行の目的を考える。" },
            { "word": "的", "reading": "まと", "sentence": "矢で的をねらう。" }
        ]
    },
    {
        "id": 581,
        "kanji": "典",
        "grade": 4,
        "onyomi": ["テン"],
        "kunyomi": [],
        "meaning": "決まりや書物のこと",
        "compounds": [
            { "word": "辞典", "reading": "じてん", "sentence": "辞典で言葉を調べる。" },
            { "word": "式典", "reading": "しきてん", "sentence": "入学の式典に出る。" }
        ]
    },
    {
        "id": 582,
        "kanji": "伝",
        "grade": 4,
        "onyomi": ["デン"],
        "kunyomi": ["つた(える)", "つた(わる)", "つた(う)"],
        "meaning": "つたえること",
        "compounds": [
            { "word": "伝説", "reading": "でんせつ", "sentence": "町に伝わる伝説を聞く。" },
            { "word": "伝える", "reading": "つたえる", "sentence": "気持ちを言葉で伝える。" }
        ]
    },
    {
        "id": 583,
        "kanji": "徒",
        "grade": 4,
        "onyomi": ["ト"],
        "kunyomi": [],
        "meaning": "歩くこと、勉強する人",
        "compounds": [
            { "word": "生徒", "reading": "せいと", "sentence": "中学校の生徒に会う。" },
            { "word": "徒歩", "reading": "とほ", "sentence": "駅まで徒歩で行く。" }
        ]
    },
    {
        "id": 584,
        "kanji": "努",
        "grade": 4,
        "onyomi": ["ド"],
        "kunyomi": ["つと(める)"],
        "meaning": "がんばること",
        "compounds": [
            { "word": "努力", "reading": "どりょく", "sentence": "合格に向けて努力する。" },
            { "word": "努める", "reading": "つとめる", "sentence": "早ね早おきに努める。" }
        ]
    },
    {
        "id": 585,
        "kanji": "灯",
        "grade": 4,
        "onyomi": ["トウ"],
        "kunyomi": ["ひ"],
        "meaning": "あかりのこと",
        "compounds": [
            { "word": "電灯", "reading": "でんとう", "sentence": "暗くなったので電灯をつける。" },
            { "word": "灯", "reading": "ひ", "sentence": "ろうそくの灯がゆれる。" }
        ]
    },
    {
        "id": 586,
        "kanji": "働",
        "grade": 4,
        "onyomi": ["ドウ"],
        "kunyomi": ["はたら(く)"],
        "meaning": "はたらくこと",
        "compounds": [
            { "word": "労働", "reading": "ろうどう", "sentence": "畑で労働する。" },
            { "word": "働く", "reading": "はたらく", "sentence": "父は会社で働く。" }
        ]
    },
    {
        "id": 587,
        "kanji": "特",
        "grade": 4,
        "onyomi": ["トク"],
        "kunyomi": [],
        "meaning": "とくべつなこと",
        "compounds": [
            { "word": "特別", "reading": "とくべつ", "sentence": "今日は特別な日だ。" },
            { "word": "特急", "reading": "とっきゅう", "sentence": "特急電車に乗る。" }
        ]
    },
    {
        "id": 588,
        "kanji": "徳",
        "grade": 4,
        "onyomi": ["トク"],
        "kunyomi": [],
        "meaning": "心が正しく立派なこと",
        "compounds": [
            { "word": "道徳", "reading": "どうとく", "sentence": "道徳の授業で話し合う。" },
            { "word": "人徳", "reading": "じんとく", "sentence": "人徳のある人だ。" }
        ]
    },
    {
        "id": 589,
        "kanji": "栃",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["とち"],
        "meaning": "地名によく使う漢字",
        "compounds": [
            { "word": "栃木", "reading": "とちぎ", "sentence": "栃木でいちごを食べた。" },
            { "word": "栃", "reading": "とち", "sentence": "とちの木の実を拾う。" }
        ]
    },
    {
        "id": 590,
        "kanji": "奈",
        "grade": 4,
        "onyomi": ["ナ"],
        "kunyomi": [],
        "meaning": "地名によく使う漢字",
        "compounds": [
            { "word": "奈良", "reading": "なら", "sentence": "奈良で鹿を見た。" },
            { "word": "神奈川", "reading": "かながわ", "sentence": "神奈川に海水浴に行く。" }
        ]
    },
    {
        "id": 591,
        "kanji": "梨",
        "grade": 4,
        "onyomi": [],
        "kunyomi": ["なし"],
        "meaning": "くだもの、なしの実、地名にも使う漢字",
        "compounds": [
            { "word": "山梨", "reading": "やまなし", "sentence": "山梨でぶどうを食べた。" },
            { "word": "梨", "reading": "なし", "sentence": "甘い梨を食べる。" }
        ]
    },
    {
        "id": 592,
        "kanji": "熱",
        "grade": 4,
        "onyomi": ["ネツ"],
        "kunyomi": ["あつ(い)"],
        "meaning": "熱いこと、熱心なこと",
        "compounds": [
            { "word": "熱心", "reading": "ねっしん", "sentence": "熱心に練習する。" },
            { "word": "熱い", "reading": "あつい", "sentence": "熱いお茶を飲む。" }
        ]
    },
    {
        "id": 593,
        "kanji": "念",
        "grade": 4,
        "onyomi": ["ネン"],
        "kunyomi": [],
        "meaning": "心の中で思うこと",
        "compounds": [
            { "word": "記念", "reading": "きねん", "sentence": "卒業の記念に写真をとる。" },
            { "word": "残念", "reading": "ざんねん", "sentence": "負けてしまい残念だ。" }
        ]
    },
    {
        "id": 594,
        "kanji": "敗",
        "grade": 4,
        "onyomi": ["ハイ"],
        "kunyomi": ["やぶ(れる)"],
        "meaning": "負けること",
        "compounds": [
            { "word": "失敗", "reading": "しっぱい", "sentence": "実験に失敗した。" },
            { "word": "敗れる", "reading": "やぶれる", "sentence": "決勝で敗れる。" }
        ]
    },
    {
        "id": 595,
        "kanji": "梅",
        "grade": 4,
        "onyomi": ["バイ"],
        "kunyomi": ["うめ"],
        "meaning": "くだもの、梅の実のこと",
        "compounds": [
            { "word": "梅雨", "reading": "つゆ", "sentence": "六月は梅雨で雨が多い。" },
            { "word": "梅", "reading": "うめ", "sentence": "庭の梅の花がさいた。" }
        ]
    },
    {
        "id": 596,
        "kanji": "博",
        "grade": 4,
        "onyomi": ["ハク", "バク"],
        "kunyomi": [],
        "meaning": "広く知っていること",
        "compounds": [
            { "word": "博物館", "reading": "はくぶつかん", "sentence": "博物館で恐竜の骨を見る。" },
            { "word": "博士", "reading": "はかせ", "sentence": "博士のように物知りだ。" }
        ]
    },
    {
        "id": 597,
        "kanji": "阪",
        "grade": 4,
        "onyomi": ["ハン"],
        "kunyomi": [],
        "meaning": "地名によく使う漢字（坂）",
        "compounds": [
            { "word": "大阪", "reading": "おおさか", "sentence": "大阪でたこ焼きを食べた。" },
            { "word": "阪神", "reading": "はんしん", "sentence": "阪神地方について調べる。" }
        ]
    },
    {
        "id": 598,
        "kanji": "飯",
        "grade": 4,
        "onyomi": ["ハン"],
        "kunyomi": ["めし"],
        "meaning": "ごはんのこと",
        "compounds": [
            { "word": "夕飯", "reading": "ゆうはん", "sentence": "家族で夕飯を食べる。" },
            { "word": "ご飯", "reading": "ごはん", "sentence": "朝ご飯をしっかり食べる。" }
        ]
    },
    {
        "id": 599,
        "kanji": "飛",
        "grade": 4,
        "onyomi": ["ヒ"],
        "kunyomi": ["と(ぶ)", "と(ばす)"],
        "meaning": "空をとぶこと",
        "compounds": [
            { "word": "飛行機", "reading": "ひこうき", "sentence": "飛行機で北海道へ行く。" },
            { "word": "飛ぶ", "reading": "とぶ", "sentence": "小鳥が空を飛ぶ。" }
        ]
    },
    {
        "id": 600,
        "kanji": "必",
        "grade": 4,
        "onyomi": ["ヒツ"],
        "kunyomi": ["かなら(ず)"],
        "meaning": "きっと、という意味",
        "compounds": [
            { "word": "必要", "reading": "ひつよう", "sentence": "水は生きるために必要だ。" },
            { "word": "必ず", "reading": "かならず", "sentence": "約束は必ず守る。" }
        ]
    },
    {
        "id": 601,
        "kanji": "票",
        "grade": 4,
        "onyomi": ["ヒョウ"],
        "kunyomi": [],
        "meaning": "投票のふだのこと",
        "compounds": [
            { "word": "投票", "reading": "とうひょう", "sentence": "学級会で投票をする。" },
            { "word": "開票", "reading": "かいひょう", "sentence": "選挙の開票を見守る。" }
        ]
    },
    {
        "id": 602,
        "kanji": "標",
        "grade": 4,
        "onyomi": ["ヒョウ"],
        "kunyomi": [],
        "meaning": "目印のこと",
        "compounds": [
            { "word": "目標", "reading": "もくひょう", "sentence": "今月の目標を決める。" },
            { "word": "標識", "reading": "ひょうしき", "sentence": "道路の標識を見る。" }
        ]
    },
    {
        "id": 603,
        "kanji": "不",
        "grade": 4,
        "onyomi": ["フ", "ブ"],
        "kunyomi": [],
        "meaning": "打ち消しの意味を表す漢字",
        "compounds": [
            { "word": "不安", "reading": "ふあん", "sentence": "テストの前は不安になる。" },
            { "word": "不便", "reading": "ふべん", "sentence": "駅から遠くて不便だ。" }
        ]
    },
    {
        "id": 604,
        "kanji": "夫",
        "grade": 4,
        "onyomi": ["フ"],
        "kunyomi": ["おっと"],
        "meaning": "結婚した男の人のこと",
        "compounds": [
            { "word": "夫婦", "reading": "ふうふ", "sentence": "となりの夫婦は仲がいい。" },
            { "word": "夫", "reading": "おっと", "sentence": "母の夫は父だ。" }
        ]
    },
    {
        "id": 605,
        "kanji": "付",
        "grade": 4,
        "onyomi": ["フ"],
        "kunyomi": ["つ(く)", "つ(ける)"],
        "meaning": "くっつくこと",
        "compounds": [
            { "word": "付近", "reading": "ふきん", "sentence": "駅の付近で待ち合わせる。" },
            { "word": "付ける", "reading": "つける", "sentence": "名前をノートに付ける。" }
        ]
    },
    {
        "id": 606,
        "kanji": "府",
        "grade": 4,
        "onyomi": ["フ"],
        "kunyomi": [],
        "meaning": "都道府県のひとつ",
        "compounds": [
            { "word": "大阪府", "reading": "おおさかふ", "sentence": "大阪府に旅行に行く。" },
            { "word": "政府", "reading": "せいふ", "sentence": "政府がニュースで発表する。" }
        ]
    },
    {
        "id": 607,
        "kanji": "阜",
        "grade": 4,
        "onyomi": ["フ"],
        "kunyomi": [],
        "meaning": "地名に使う漢字（岐阜県）",
        "compounds": [
            { "word": "岐阜", "reading": "ぎふ", "sentence": "岐阜で長良川を見た。" },
            { "word": "岐阜市", "reading": "ぎふし", "sentence": "岐阜市は岐阜県の県庁所在地だ。" }
        ]
    },
    {
        "id": 608,
        "kanji": "富",
        "grade": 4,
        "onyomi": ["フ", "フウ"],
        "kunyomi": ["と(む)", "とみ"],
        "meaning": "豊かなこと、地名にも使う漢字",
        "compounds": [
            { "word": "富士山", "reading": "ふじさん", "sentence": "富士山は日本一高い山だ。" },
            { "word": "富む", "reading": "とむ", "sentence": "この土地は自然に富む。" }
        ]
    },
    {
        "id": 609,
        "kanji": "副",
        "grade": 4,
        "onyomi": ["フク"],
        "kunyomi": [],
        "meaning": "二番目、サブのこと",
        "compounds": [
            { "word": "副会長", "reading": "ふくかいちょう", "sentence": "クラスの副会長に選ばれる。" },
            { "word": "副賞", "reading": "ふくしょう", "sentence": "コンテストで副賞をもらった。" }
        ]
    },
    {
        "id": 610,
        "kanji": "兵",
        "grade": 4,
        "onyomi": ["ヘイ", "ヒョウ"],
        "kunyomi": [],
        "meaning": "戦う人、兵隊のこと",
        "compounds": [
            { "word": "兵隊", "reading": "へいたい", "sentence": "歴史の本で兵隊を調べる。" },
            { "word": "兵士", "reading": "へいし", "sentence": "昔の兵士について学ぶ。" }
        ]
    },
    {
        "id": 611,
        "kanji": "別",
        "grade": 4,
        "onyomi": ["ベツ"],
        "kunyomi": ["わか(れる)"],
        "meaning": "分けること、わかれること",
        "compounds": [
            { "word": "特別", "reading": "とくべつ", "sentence": "今日は特別なごちそうだ。" },
            { "word": "別れる", "reading": "わかれる", "sentence": "駅で友達と別れる。" }
        ]
    },
    {
        "id": 612,
        "kanji": "辺",
        "grade": 4,
        "onyomi": ["ヘン"],
        "kunyomi": ["あた(り)"],
        "meaning": "あたりのこと",
        "compounds": [
            { "word": "周辺", "reading": "しゅうへん", "sentence": "学校の周辺を歩く。" },
            { "word": "辺り", "reading": "あたり", "sentence": "この辺りは静かだ。" }
        ]
    },
    {
        "id": 613,
        "kanji": "変",
        "grade": 4,
        "onyomi": ["ヘン"],
        "kunyomi": ["か(わる)", "か(える)"],
        "meaning": "変わること",
        "compounds": [
            { "word": "変化", "reading": "へんか", "sentence": "季節の変化を感じる。" },
            { "word": "変える", "reading": "かえる", "sentence": "髪型を変える。" }
        ]
    },
    {
        "id": 614,
        "kanji": "便",
        "grade": 4,
        "onyomi": ["ベン", "ビン"],
        "kunyomi": ["たよ(り)"],
        "meaning": "都合がよいこと、たよりのこと",
        "compounds": [
            { "word": "便利", "reading": "べんり", "sentence": "この道具はとても便利だ。" },
            { "word": "便り", "reading": "たより", "sentence": "祖父から便りが届く。" }
        ]
    },
    {
        "id": 615,
        "kanji": "包",
        "grade": 4,
        "onyomi": ["ホウ"],
        "kunyomi": ["つつ(む)"],
        "meaning": "つつむこと",
        "compounds": [
            { "word": "包帯", "reading": "ほうたい", "sentence": "けがに包帯を巻く。" },
            { "word": "包む", "reading": "つつむ", "sentence": "プレゼントを紙で包む。" }
        ]
    },
    {
        "id": 616,
        "kanji": "法",
        "grade": 4,
        "onyomi": ["ホウ"],
        "kunyomi": [],
        "meaning": "きまりのこと",
        "compounds": [
            { "word": "方法", "reading": "ほうほう", "sentence": "新しい方法を考える。" },
            { "word": "法律", "reading": "ほうりつ", "sentence": "社会科で法律を学ぶ。" }
        ]
    },
    {
        "id": 617,
        "kanji": "望",
        "grade": 4,
        "onyomi": ["ボウ"],
        "kunyomi": ["のぞ(む)"],
        "meaning": "のぞむこと",
        "compounds": [
            { "word": "希望", "reading": "きぼう", "sentence": "未来に希望を持つ。" },
            { "word": "望む", "reading": "のぞむ", "sentence": "平和な世界を望む。" }
        ]
    },
    {
        "id": 618,
        "kanji": "牧",
        "grade": 4,
        "onyomi": ["ボク"],
        "kunyomi": ["まき"],
        "meaning": "牛や馬を育てる場所",
        "compounds": [
            { "word": "牧場", "reading": "ぼくじょう", "sentence": "牧場で牛にえさをやる。" },
            { "word": "牧草", "reading": "ぼくそう", "sentence": "牛が牧草を食べる。" }
        ]
    },
    {
        "id": 619,
        "kanji": "末",
        "grade": 4,
        "onyomi": ["マツ"],
        "kunyomi": ["すえ"],
        "meaning": "おわりのこと",
        "compounds": [
            { "word": "週末", "reading": "しゅうまつ", "sentence": "週末は家族と出かける。" },
            { "word": "末", "reading": "すえ", "sentence": "考えた末に答えを出した。" }
        ]
    },
    {
        "id": 620,
        "kanji": "満",
        "grade": 4,
        "onyomi": ["マン"],
        "kunyomi": ["み(ちる)", "み(たす)"],
        "meaning": "いっぱいになること",
        "compounds": [
            { "word": "満点", "reading": "まんてん", "sentence": "テストで満点を取った。" },
            { "word": "満ちる", "reading": "みちる", "sentence": "会場が人で満ちる。" }
        ]
    },
    {
        "id": 621,
        "kanji": "未",
        "grade": 4,
        "onyomi": ["ミ"],
        "kunyomi": [],
        "meaning": "まだ〜していないという意味",
        "compounds": [
            { "word": "未来", "reading": "みらい", "sentence": "未来の夢について話す。" },
            { "word": "未定", "reading": "みてい", "sentence": "次の予定はまだ未定だ。" }
        ]
    },
    {
        "id": 622,
        "kanji": "民",
        "grade": 4,
        "onyomi": ["ミン"],
        "kunyomi": ["たみ"],
        "meaning": "国や町の人々のこと",
        "compounds": [
            { "word": "国民", "reading": "こくみん", "sentence": "国民の意見を聞く。" },
            { "word": "市民", "reading": "しみん", "sentence": "市民が公園で活動する。" }
        ]
    },
    {
        "id": 623,
        "kanji": "無",
        "grade": 4,
        "onyomi": ["ム", "ブ"],
        "kunyomi": ["な(い)"],
        "meaning": "ないこと",
        "compounds": [
            { "word": "無事", "reading": "ぶじ", "sentence": "旅行から無事に帰る。" },
            { "word": "無い", "reading": "ない", "sentence": "教室にだれも無い。" }
        ]
    },
    {
        "id": 624,
        "kanji": "約",
        "grade": 4,
        "onyomi": ["ヤク"],
        "kunyomi": [],
        "meaning": "約束、だいたいという意味",
        "compounds": [
            { "word": "約束", "reading": "やくそく", "sentence": "友達と会う約束をする。" },
            { "word": "予約", "reading": "よやく", "sentence": "レストランを予約する。" }
        ]
    },
    {
        "id": 625,
        "kanji": "勇",
        "grade": 4,
        "onyomi": ["ユウ"],
        "kunyomi": ["いさ(む)"],
        "meaning": "勇気があること",
        "compounds": [
            { "word": "勇気", "reading": "ゆうき", "sentence": "勇気を出して発表する。" },
            { "word": "勇ましい", "reading": "いさましい", "sentence": "勇ましい姿で走る。" }
        ]
    },
    {
        "id": 626,
        "kanji": "要",
        "grade": 4,
        "onyomi": ["ヨウ"],
        "kunyomi": ["い(る)", "かなめ"],
        "meaning": "必要なこと、大切なこと",
        "compounds": [
            { "word": "必要", "reading": "ひつよう", "sentence": "かさが必要な天気だ。" },
            { "word": "要る", "reading": "いる", "sentence": "遠足にはお金が要る。" }
        ]
    },
    {
        "id": 627,
        "kanji": "養",
        "grade": 4,
        "onyomi": ["ヨウ"],
        "kunyomi": ["やしな(う)"],
        "meaning": "育てること",
        "compounds": [
            { "word": "栄養", "reading": "えいよう", "sentence": "栄養のバランスを考える。" },
            { "word": "養う", "reading": "やしなう", "sentence": "体力を養う。" }
        ]
    },
    {
        "id": 628,
        "kanji": "浴",
        "grade": 4,
        "onyomi": ["ヨク"],
        "kunyomi": ["あ(びる)", "あ(びせる)"],
        "meaning": "水をあびること",
        "compounds": [
            { "word": "入浴", "reading": "にゅうよく", "sentence": "夜に入浴して温まる。" },
            { "word": "浴びる", "reading": "あびる", "sentence": "シャワーを浴びる。" }
        ]
    },
    {
        "id": 629,
        "kanji": "利",
        "grade": 4,
        "onyomi": ["リ"],
        "kunyomi": ["き(く)"],
        "meaning": "役に立つこと",
        "compounds": [
            { "word": "利用", "reading": "りよう", "sentence": "図書館を利用する。" },
            { "word": "便利", "reading": "べんり", "sentence": "この機械は便利だ。" }
        ]
    },
    {
        "id": 630,
        "kanji": "陸",
        "grade": 4,
        "onyomi": ["リク"],
        "kunyomi": [],
        "meaning": "地面、大地のこと",
        "compounds": [
            { "word": "大陸", "reading": "たいりく", "sentence": "世界には六つの大陸がある。" },
            { "word": "陸上", "reading": "りくじょう", "sentence": "陸上部で走る練習をする。" }
        ]
    },
    {
        "id": 631,
        "kanji": "良",
        "grade": 4,
        "onyomi": ["リョウ"],
        "kunyomi": ["よ(い)"],
        "meaning": "よいこと",
        "compounds": [
            { "word": "良心", "reading": "りょうしん", "sentence": "良心にしたがって行動する。" },
            { "word": "良い", "reading": "よい", "sentence": "今日は天気が良い。" }
        ]
    },
    {
        "id": 632,
        "kanji": "料",
        "grade": 4,
        "onyomi": ["リョウ"],
        "kunyomi": [],
        "meaning": "お金、材料のこと",
        "compounds": [
            { "word": "料理", "reading": "りょうり", "sentence": "家族のために料理を作る。" },
            { "word": "材料", "reading": "ざいりょう", "sentence": "料理の材料を買う。" }
        ]
    },
    {
        "id": 633,
        "kanji": "量",
        "grade": 4,
        "onyomi": ["リョウ"],
        "kunyomi": ["はか(る)"],
        "meaning": "多さや重さのこと",
        "compounds": [
            { "word": "分量", "reading": "ぶんりょう", "sentence": "調味料の分量をはかる。" },
            { "word": "量る", "reading": "はかる", "sentence": "体重を量る。" }
        ]
    },
    {
        "id": 634,
        "kanji": "輪",
        "grade": 4,
        "onyomi": ["リン"],
        "kunyomi": ["わ"],
        "meaning": "まるい形のこと",
        "compounds": [
            { "word": "車輪", "reading": "しゃりん", "sentence": "自転車の車輪が回る。" },
            { "word": "輪", "reading": "わ", "sentence": "みんなで輪になって座る。" }
        ]
    },
    {
        "id": 635,
        "kanji": "類",
        "grade": 4,
        "onyomi": ["ルイ"],
        "kunyomi": ["たぐ(い)"],
        "meaning": "同じなかまのこと",
        "compounds": [
            { "word": "種類", "reading": "しゅるい", "sentence": "お菓子には多くの種類がある。" },
            { "word": "人類", "reading": "じんるい", "sentence": "人類の歴史を学ぶ。" }
        ]
    },
    {
        "id": 636,
        "kanji": "令",
        "grade": 4,
        "onyomi": ["レイ"],
        "kunyomi": [],
        "meaning": "命令や決まりのこと",
        "compounds": [
            { "word": "命令", "reading": "めいれい", "sentence": "先生の命令に従う。" },
            { "word": "号令", "reading": "ごうれい", "sentence": "号令に合わせて整列する。" }
        ]
    },
    {
        "id": 637,
        "kanji": "冷",
        "grade": 4,
        "onyomi": ["レイ"],
        "kunyomi": ["つめ(たい)", "ひ(える)", "ひ(やす)", "さ(める)"],
        "meaning": "つめたいこと",
        "compounds": [
            { "word": "冷蔵庫", "reading": "れいぞうこ", "sentence": "ジュースを冷蔵庫に入れる。" },
            { "word": "冷たい", "reading": "つめたい", "sentence": "冷たい水で顔を洗う。" }
        ]
    },
    {
        "id": 638,
        "kanji": "例",
        "grade": 4,
        "onyomi": ["レイ"],
        "kunyomi": ["たと(える)"],
        "meaning": "たとえのこと",
        "compounds": [
            { "word": "例文", "reading": "れいぶん", "sentence": "教科書の例文を読む。" },
            { "word": "例える", "reading": "たとえる", "sentence": "空を海に例える。" }
        ]
    },
    {
        "id": 639,
        "kanji": "連",
        "grade": 4,
        "onyomi": ["レン"],
        "kunyomi": ["つら(なる)", "つら(ねる)", "つ(れる)"],
        "meaning": "つながること",
        "compounds": [
            { "word": "連休", "reading": "れんきゅう", "sentence": "連休に家族で旅行する。" },
            { "word": "連れる", "reading": "つれる", "sentence": "弟を連れて出かける。" }
        ]
    },
    {
        "id": 640,
        "kanji": "老",
        "grade": 4,
        "onyomi": ["ロウ"],
        "kunyomi": ["お(いる)", "ふ(ける)"],
        "meaning": "年をとること",
        "compounds": [
            { "word": "老人", "reading": "ろうじん", "sentence": "老人にせきをゆずる。" },
            { "word": "老いる", "reading": "おいる", "sentence": "犬も老いると動きが遅くなる。" }
        ]
    },
    {
        "id": 641,
        "kanji": "労",
        "grade": 4,
        "onyomi": ["ロウ"],
        "kunyomi": [],
        "meaning": "働くこと、苦労のこと",
        "compounds": [
            { "word": "苦労", "reading": "くろう", "sentence": "宿題を終えるのに苦労した。" },
            { "word": "労働", "reading": "ろうどう", "sentence": "畑で労働する人を見る。" }
        ]
    },
    {
        "id": 642,
        "kanji": "録",
        "grade": 4,
        "onyomi": ["ロク"],
        "kunyomi": [],
        "meaning": "書き記すこと",
        "compounds": [
            { "word": "記録", "reading": "きろく", "sentence": "走った時間を記録する。" },
            { "word": "録音", "reading": "ろくおん", "sentence": "自分の声を録音する。" }
        ]
    }
];

const REVIEW_KANJI_BY_ID = {};
REVIEW_KANJI_LIST.forEach(k => { REVIEW_KANJI_BY_ID[k.id] = k; });
