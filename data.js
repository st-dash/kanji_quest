// data.js - 漢字クエスト 問題データベース

const INTERVALS = [1, 3, 7]; // 間違いノートの復習間隔（日）

const KANJI_LIST = [
    {
        "id": 1,
        "kanji": "圧",
        "strokes": 5,
        "onyomi": [
            "アツ"
        ],
        "kunyomi": [],
        "meaning": "力でおさえつけること",
        "parts": [
            {
                "char": "厂",
                "label": "がんだれ",
                "note": "がけ"
            },
            {
                "char": "土",
                "label": "つち",
                "note": "つち"
            }
        ],
        "partsStory": "がけ(厂)が土をおさえつける形から「おさえる」を表す。",
        "compounds": [
            {
                "word": "気圧",
                "reading": "きあつ",
                "sentence": "台風で気圧が下がる。"
            },
            {
                "word": "圧力",
                "reading": "あつりょく",
                "sentence": "水の圧力を調べる。"
            }
        ],
        "stageId": 0,
        "confusables": [
            146,
            43
        ]
    },
    {
        "id": 2,
        "kanji": "囲",
        "strokes": 7,
        "onyomi": [
            "イ"
        ],
        "kunyomi": [
            "かこ(む)"
        ],
        "meaning": "まわりをとりかこむこと",
        "parts": [
            {
                "char": "囗",
                "label": "くにがまえ",
                "note": "かこい"
            },
            {
                "char": "井",
                "label": "い",
                "note": "井戸"
            }
        ],
        "partsStory": "くにがまえ(囗)が井戸のまわりを囲むように、まわりをかこむ。",
        "compounds": [
            {
                "word": "周囲",
                "reading": "しゅうい",
                "sentence": "家の周囲を歩く。"
            },
            {
                "word": "範囲",
                "reading": "はんい",
                "sentence": "テストの範囲を確認する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            137,
            4
        ]
    },
    {
        "id": 3,
        "kanji": "移",
        "strokes": 11,
        "onyomi": [
            "イ"
        ],
        "kunyomi": [
            "うつ(る)"
        ],
        "meaning": "場所や状態がかわること",
        "parts": [
            {
                "char": "禾",
                "label": "のぎへん",
                "note": "いね"
            },
            {
                "char": "多",
                "label": "おおい",
                "note": "多い"
            }
        ],
        "partsStory": "稲(禾)がたくさん(多)実って別の場所へ移されていく。",
        "compounds": [
            {
                "word": "移動",
                "reading": "いどう",
                "sentence": "となりの町へ移動する。"
            },
            {
                "word": "移住",
                "reading": "いじゅう",
                "sentence": "外国に移住する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            117,
            144
        ]
    },
    {
        "id": 4,
        "kanji": "因",
        "strokes": 6,
        "onyomi": [
            "イン"
        ],
        "kunyomi": [
            "よ(る)"
        ],
        "meaning": "ものごとの原因",
        "parts": [
            {
                "char": "囗",
                "label": "くにがまえ",
                "note": "かこい"
            },
            {
                "char": "大",
                "label": "だい",
                "note": "人が大の字になる形"
            }
        ],
        "partsStory": "囲い(囗)の中に大の字で人がいる形から、事のもとになるものを表す。",
        "compounds": [
            {
                "word": "原因",
                "reading": "げんいん",
                "sentence": "事故の原因を調べる。"
            },
            {
                "word": "因果",
                "reading": "いんが",
                "sentence": "因果関係を説明する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            2,
            137
        ]
    },
    {
        "id": 5,
        "kanji": "永",
        "strokes": 5,
        "onyomi": [
            "エイ"
        ],
        "kunyomi": [
            "なが(い)"
        ],
        "meaning": "とても長く続くこと",
        "parts": [
            {
                "char": "水",
                "label": "みず",
                "note": "水の流れ"
            }
        ],
        "partsStory": "水が長く流れ続ける形から「長い」という意味になった。",
        "compounds": [
            {
                "word": "永遠",
                "reading": "えいえん",
                "sentence": "永遠の友情をちかう。"
            },
            {
                "word": "永久",
                "reading": "えいきゅう",
                "sentence": "永久に残る記録。"
            }
        ],
        "stageId": 0,
        "confusables": [
            13,
            16
        ]
    },
    {
        "id": 6,
        "kanji": "営",
        "strokes": 12,
        "onyomi": [
            "エイ"
        ],
        "kunyomi": [
            "いとな(む)"
        ],
        "meaning": "仕事や生活をおこなうこと",
        "parts": [
            {
                "char": "冖",
                "label": "わかんむり",
                "note": "おおい"
            },
            {
                "char": "呂",
                "label": "ろ",
                "note": "積み重なる建物"
            }
        ],
        "partsStory": "屋根(冖)の下で仕事を積み重ねる(呂)ことから「いとなむ」。",
        "compounds": [
            {
                "word": "営業",
                "reading": "えいぎょう",
                "sentence": "店が朝から営業する。"
            },
            {
                "word": "経営",
                "reading": "けいえい",
                "sentence": "会社を経営する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            3,
            12
        ]
    },
    {
        "id": 7,
        "kanji": "衛",
        "strokes": 16,
        "onyomi": [
            "エイ"
        ],
        "kunyomi": [],
        "meaning": "まもること",
        "parts": [
            {
                "char": "行",
                "label": "ぎょうがまえ",
                "note": "みち"
            },
            {
                "char": "韋",
                "label": "い",
                "note": "かこい守る"
            }
        ],
        "partsStory": "道(行)の中を韋(かこい)で固めて守ることを表す。",
        "compounds": [
            {
                "word": "衛生",
                "reading": "えいせい",
                "sentence": "衛生に気をつける。"
            },
            {
                "word": "護衛",
                "reading": "ごえい",
                "sentence": "王様を護衛する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            98
        ]
    },
    {
        "id": 8,
        "kanji": "易",
        "strokes": 8,
        "onyomi": [
            "イ",
            "エキ"
        ],
        "kunyomi": [
            "やさ(しい)"
        ],
        "meaning": "たやすいこと、また変わること",
        "parts": [
            {
                "char": "日",
                "label": "ひ",
                "note": "太陽"
            },
            {
                "char": "勿",
                "label": "ぶつ",
                "note": "変化"
            }
        ],
        "partsStory": "日(太陽)の光が形を変える(勿)ように、変わりやすくやさしいことを表す。",
        "compounds": [
            {
                "word": "貿易",
                "reading": "ぼうえき",
                "sentence": "外国と貿易をする。"
            },
            {
                "word": "容易",
                "reading": "ようい",
                "sentence": "この問題は容易だ。"
            }
        ],
        "stageId": 0,
        "confusables": [
            38,
            181
        ]
    },
    {
        "id": 9,
        "kanji": "益",
        "strokes": 10,
        "onyomi": [
            "エキ",
            "ヤク"
        ],
        "kunyomi": [],
        "meaning": "利益、ためになること",
        "parts": [
            {
                "char": "八",
                "label": "はち",
                "note": "あふれ広がる"
            },
            {
                "char": "皿",
                "label": "さら",
                "note": "うつわ"
            }
        ],
        "partsStory": "皿(さら)から水があふれ八の形に広がる様子から、ふえる・ためになるという意味に。",
        "compounds": [
            {
                "word": "利益",
                "reading": "りえき",
                "sentence": "お店の利益を計算する。"
            },
            {
                "word": "有益",
                "reading": "ゆうえき",
                "sentence": "有益な情報を得る。"
            }
        ],
        "stageId": 0,
        "confusables": [
            7,
            1
        ]
    },
    {
        "id": 10,
        "kanji": "液",
        "strokes": 11,
        "onyomi": [
            "エキ"
        ],
        "kunyomi": [],
        "meaning": "液体、しる",
        "parts": [
            {
                "char": "氵",
                "label": "さんずい",
                "note": "水"
            },
            {
                "char": "夜",
                "label": "よる",
                "note": "夜"
            }
        ],
        "partsStory": "水(氵)が夜のように形を変えて流れ動くものを表す。",
        "compounds": [
            {
                "word": "液体",
                "reading": "えきたい",
                "sentence": "水は液体だ。"
            },
            {
                "word": "血液",
                "reading": "けつえき",
                "sentence": "血液を検査する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            54,
            11
        ]
    },
    {
        "id": 11,
        "kanji": "演",
        "strokes": 14,
        "onyomi": [
            "エン"
        ],
        "kunyomi": [],
        "meaning": "舞台などでおこなうこと",
        "parts": [
            {
                "char": "氵",
                "label": "さんずい",
                "note": "水"
            },
            {
                "char": "寅",
                "label": "とら",
                "note": "とら"
            }
        ],
        "partsStory": "水(氵)がとら(寅)のように勢いよく広がる様子から、演じ広げることを表す。",
        "compounds": [
            {
                "word": "演技",
                "reading": "えんぎ",
                "sentence": "すばらしい演技を見る。"
            },
            {
                "word": "講演",
                "reading": "こうえん",
                "sentence": "先生の講演を聞く。"
            }
        ],
        "stageId": 0,
        "confusables": [
            48,
            54
        ]
    },
    {
        "id": 12,
        "kanji": "応",
        "strokes": 7,
        "onyomi": [
            "オウ"
        ],
        "kunyomi": [
            "こた(える)"
        ],
        "meaning": "こたえること、対応すること",
        "parts": [
            {
                "char": "广",
                "label": "まだれ",
                "note": "やね"
            },
            {
                "char": "心",
                "label": "こころ",
                "note": "こころ"
            }
        ],
        "partsStory": "屋根(广)の下で心をこめてこたえることを表す。",
        "compounds": [
            {
                "word": "対応",
                "reading": "たいおう",
                "sentence": "問題に対応する。"
            },
            {
                "word": "応答",
                "reading": "おうとう",
                "sentence": "質問に応答する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            84,
            100
        ]
    },
    {
        "id": 13,
        "kanji": "往",
        "strokes": 8,
        "onyomi": [
            "オウ"
        ],
        "kunyomi": [],
        "meaning": "行くこと",
        "parts": [
            {
                "char": "彳",
                "label": "ぎょうにんべん",
                "note": "みちをゆく"
            },
            {
                "char": "主",
                "label": "ぬし",
                "note": "目的地"
            }
        ],
        "partsStory": "道を行く(彳)ことで目的地(主)へ向かうことを表す。",
        "compounds": [
            {
                "word": "往復",
                "reading": "おうふく",
                "sentence": "駅まで往復する。"
            },
            {
                "word": "往来",
                "reading": "おうらい",
                "sentence": "人の往来が多い道。"
            }
        ],
        "stageId": 0,
        "confusables": [
            169,
            124
        ]
    },
    {
        "id": 14,
        "kanji": "桜",
        "strokes": 10,
        "onyomi": [
            "オウ"
        ],
        "kunyomi": [
            "さくら"
        ],
        "meaning": "さくらの木",
        "parts": [
            {
                "char": "木",
                "label": "きへん",
                "note": "木"
            },
            {
                "char": "嬰",
                "label": "えい",
                "note": "美しい"
            }
        ],
        "partsStory": "木へんに美しい様子を表す部分が合わさり、さくらの木を表す。",
        "compounds": [
            {
                "word": "桜色",
                "reading": "さくらいろ",
                "sentence": "桜色のリボンをつける。"
            },
            {
                "word": "夜桜",
                "reading": "よざくら",
                "sentence": "夜桜を見に行く。"
            }
        ],
        "stageId": 0,
        "confusables": [
            68,
            85
        ]
    },
    {
        "id": 15,
        "kanji": "可",
        "strokes": 5,
        "onyomi": [
            "カ"
        ],
        "kunyomi": [],
        "meaning": "よいとみとめること、できること",
        "parts": [
            {
                "char": "口",
                "label": "くち",
                "note": "くち"
            },
            {
                "char": "丁",
                "label": "てい",
                "note": "はっきり言う"
            }
        ],
        "partsStory": "口ではっきりと言い、「よし」とみとめることを表す。",
        "compounds": [
            {
                "word": "可能",
                "reading": "かのう",
                "sentence": "それは可能だ。"
            },
            {
                "word": "許可",
                "reading": "きょか",
                "sentence": "外出の許可をもらう。"
            }
        ],
        "stageId": 0,
        "confusables": [
            83,
            33
        ]
    },
    {
        "id": 16,
        "kanji": "仮",
        "strokes": 6,
        "onyomi": [
            "カ"
        ],
        "kunyomi": [
            "かり"
        ],
        "meaning": "本当でない、一時的なこと",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "反",
                "label": "はん",
                "note": "反対"
            }
        ],
        "partsStory": "人(イ)が本当のすがたとは反対(反)の、一時的なすがたをとることを表す。",
        "compounds": [
            {
                "word": "仮定",
                "reading": "かてい",
                "sentence": "仮定の話をする。"
            },
            {
                "word": "仮面",
                "reading": "かめん",
                "sentence": "仮面をかぶる。"
            }
        ],
        "stageId": 0,
        "confusables": [
            17,
            142
        ]
    },
    {
        "id": 17,
        "kanji": "価",
        "strokes": 8,
        "onyomi": [
            "カ"
        ],
        "kunyomi": [
            "あたい"
        ],
        "meaning": "ねうち、値段",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "西",
                "label": "にし",
                "note": "品物をあつめる"
            }
        ],
        "partsStory": "人(イ)が品物のねうち(価値)をはかることを表す。",
        "compounds": [
            {
                "word": "価格",
                "reading": "かかく",
                "sentence": "商品の価格を見る。"
            },
            {
                "word": "価値",
                "reading": "かち",
                "sentence": "この本には価値がある。"
            }
        ],
        "stageId": 0,
        "confusables": [
            127,
            96
        ]
    },
    {
        "id": 18,
        "kanji": "河",
        "strokes": 8,
        "onyomi": [
            "カ"
        ],
        "kunyomi": [
            "かわ"
        ],
        "meaning": "大きな川",
        "parts": [
            {
                "char": "氵",
                "label": "さんずい",
                "note": "水"
            },
            {
                "char": "可",
                "label": "か",
                "note": "よい流れ"
            }
        ],
        "partsStory": "水(氵)が流れを作って大きな川になることを表す。",
        "compounds": [
            {
                "word": "河川",
                "reading": "かせん",
                "sentence": "河川の水位を調べる。"
            },
            {
                "word": "銀河",
                "reading": "ぎんが",
                "sentence": "銀河を観察する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            11,
            67
        ]
    },
    {
        "id": 19,
        "kanji": "過",
        "strokes": 12,
        "onyomi": [
            "カ"
        ],
        "kunyomi": [
            "す(ぎる)"
        ],
        "meaning": "通りすぎる、度をこすこと",
        "parts": [
            {
                "char": "辶",
                "label": "しんにょう",
                "note": "すすむ"
            },
            {
                "char": "咼",
                "label": "か",
                "note": "通り道"
            }
        ],
        "partsStory": "進む(辶)ことで、ある地点をこえて過ぎていくことを表す。",
        "compounds": [
            {
                "word": "過去",
                "reading": "かこ",
                "sentence": "過去の出来事を話す。"
            },
            {
                "word": "通過",
                "reading": "つうか",
                "sentence": "駅を通過する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            185,
            126
        ]
    },
    {
        "id": 20,
        "kanji": "快",
        "strokes": 7,
        "onyomi": [
            "カイ"
        ],
        "kunyomi": [
            "こころよ(い)"
        ],
        "meaning": "気持ちがよいこと",
        "parts": [
            {
                "char": "忄",
                "label": "りっしんべん",
                "note": "こころ"
            },
            {
                "char": "夬",
                "label": "けつ",
                "note": "すっきり決まる"
            }
        ],
        "partsStory": "心(忄)がすっきり決まる(夬)ことで快い気持ちになることを表す。",
        "compounds": [
            {
                "word": "快適",
                "reading": "かいてき",
                "sentence": "快適な部屋にすむ。"
            },
            {
                "word": "愉快",
                "reading": "ゆかい",
                "sentence": "愉快な気分になる。"
            }
        ],
        "stageId": 0,
        "confusables": [
            108,
            112
        ]
    },
    {
        "id": 21,
        "kanji": "解",
        "strokes": 13,
        "onyomi": [
            "カイ"
        ],
        "kunyomi": [
            "と(く)"
        ],
        "meaning": "とくこと、わかること",
        "parts": [
            {
                "char": "角",
                "label": "つの",
                "note": "つの"
            },
            {
                "char": "刀",
                "label": "かたな",
                "note": "刀"
            },
            {
                "char": "牛",
                "label": "うし",
                "note": "牛"
            }
        ],
        "partsStory": "牛の角を刀で分けてとくことから「解く」「理解する」を表す。",
        "compounds": [
            {
                "word": "理解",
                "reading": "りかい",
                "sentence": "内容を理解する。"
            },
            {
                "word": "解決",
                "reading": "かいけつ",
                "sentence": "問題を解決する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            49,
            66
        ]
    },
    {
        "id": 22,
        "kanji": "格",
        "strokes": 10,
        "onyomi": [
            "カク"
        ],
        "kunyomi": [],
        "meaning": "身分やきまり、正しい形",
        "parts": [
            {
                "char": "木",
                "label": "きへん",
                "note": "木"
            },
            {
                "char": "各",
                "label": "かく",
                "note": "それぞれ"
            }
        ],
        "partsStory": "木のようにそれぞれ(各)がしっかりした形・きまりを持つことを表す。",
        "compounds": [
            {
                "word": "性格",
                "reading": "せいかく",
                "sentence": "明るい性格の人。"
            },
            {
                "word": "合格",
                "reading": "ごうかく",
                "sentence": "試験に合格する。"
            }
        ],
        "stageId": 0,
        "confusables": [
            26,
            14
        ]
    },
    {
        "id": 23,
        "kanji": "確",
        "strokes": 15,
        "onyomi": [
            "カク"
        ],
        "kunyomi": [
            "たし(か)"
        ],
        "meaning": "たしかなこと",
        "parts": [
            {
                "char": "石",
                "label": "いしへん",
                "note": "石"
            },
            {
                "char": "隺",
                "label": "かく",
                "note": "高くたしか"
            }
        ],
        "partsStory": "石のようにかたく、まちがいなくたしかであることを表す。",
        "compounds": [
            {
                "word": "確認",
                "reading": "かくにん",
                "sentence": "内容を確認する。"
            },
            {
                "word": "正確",
                "reading": "せいかく",
                "sentence": "正確な時間を答える。"
            }
        ],
        "stageId": 0,
        "confusables": [
            155
        ]
    },
    {
        "id": 24,
        "kanji": "額",
        "strokes": 18,
        "onyomi": [
            "ガク"
        ],
        "kunyomi": [
            "ひたい"
        ],
        "meaning": "おでこ。お金や物の量",
        "parts": [
            {
                "char": "客",
                "label": "きゃく",
                "note": "訪ねてくる人"
            },
            {
                "char": "頁",
                "label": "おおがい",
                "note": "頭・顔"
            }
        ],
        "partsStory": "客(きゃく)と頭を表す頁(おおがい)が合わさり人の顔の上部「ひたい」を表す。転じて数量の意味も持つ。",
        "compounds": [
            {
                "word": "金額",
                "reading": "きんがく",
                "sentence": "買い物の金額を計算する。"
            },
            {
                "word": "全額",
                "reading": "ぜんがく",
                "sentence": "全額をいちどに支はらう。"
            }
        ],
        "stageId": 0,
        "confusables": [
            192
        ]
    },
    {
        "id": 25,
        "kanji": "刊",
        "strokes": 5,
        "onyomi": [
            "カン"
        ],
        "kunyomi": [],
        "meaning": "本などを印刷して出すこと",
        "parts": [
            {
                "char": "干",
                "label": "かん",
                "note": "ほす・ととのえる"
            },
            {
                "char": "刂",
                "label": "りっとう",
                "note": "刀"
            }
        ],
        "partsStory": "ととのえた(干)版を刀(刂)でほって本を出版することを表す。",
        "compounds": [
            {
                "word": "週刊",
                "reading": "しゅうかん",
                "sentence": "週刊のざっしを読む。"
            },
            {
                "word": "発刊",
                "reading": "はっかん",
                "sentence": "新しい本が発刊された。"
            }
        ],
        "stageId": 1,
        "confusables": [
            111,
            129
        ]
    },
    {
        "id": 26,
        "kanji": "幹",
        "strokes": 13,
        "onyomi": [
            "カン"
        ],
        "kunyomi": [
            "みき"
        ],
        "meaning": "木のみき、ものごとの中心",
        "parts": [
            {
                "char": "木",
                "label": "き",
                "note": "木のみき"
            },
            {
                "char": "干",
                "label": "かん",
                "note": "まっすぐ立つ"
            }
        ],
        "partsStory": "木がまっすぐ(干)立つ「みき」のすがたを表す。",
        "compounds": [
            {
                "word": "幹線",
                "reading": "かんせん",
                "sentence": "幹線道路を走る。"
            },
            {
                "word": "新幹線",
                "reading": "しんかんせん",
                "sentence": "新幹線に乗る。"
            }
        ],
        "stageId": 1,
        "confusables": [
            105,
            14
        ]
    },
    {
        "id": 27,
        "kanji": "慣",
        "strokes": 14,
        "onyomi": [
            "カン"
        ],
        "kunyomi": [
            "な(れる)"
        ],
        "meaning": "いつものようになれること",
        "parts": [
            {
                "char": "忄",
                "label": "りっしんべん",
                "note": "こころ"
            },
            {
                "char": "貫",
                "label": "かん",
                "note": "つらぬく"
            }
        ],
        "partsStory": "心(忄)が同じことをつらぬく(貫)ように繰り返し、なれることを表す。",
        "compounds": [
            {
                "word": "習慣",
                "reading": "しゅうかん",
                "sentence": "早起きが習慣になる。"
            },
            {
                "word": "慣用句",
                "reading": "かんようく",
                "sentence": "慣用句を覚える。"
            }
        ],
        "stageId": 1,
        "confusables": [
            20,
            112
        ]
    },
    {
        "id": 28,
        "kanji": "眼",
        "strokes": 11,
        "onyomi": [
            "ガン"
        ],
        "kunyomi": [
            "まなこ"
        ],
        "meaning": "め、目玉",
        "parts": [
            {
                "char": "目",
                "label": "めへん",
                "note": "め"
            },
            {
                "char": "艮",
                "label": "こん",
                "note": "じっと見る"
            }
        ],
        "partsStory": "目へんにじっと見る様子(艮)が合わさり「め」を表す。",
        "compounds": [
            {
                "word": "眼科",
                "reading": "がんか",
                "sentence": "眼科で目を調べる。"
            },
            {
                "word": "眼鏡",
                "reading": "めがね",
                "sentence": "眼鏡をかける。"
            }
        ],
        "stageId": 1,
        "confusables": [
            134,
            52
        ]
    },
    {
        "id": 29,
        "kanji": "紀",
        "strokes": 9,
        "onyomi": [
            "キ"
        ],
        "kunyomi": [],
        "meaning": "すじみち、年代の単位",
        "parts": [
            {
                "char": "糸",
                "label": "いとへん",
                "note": "糸"
            },
            {
                "char": "己",
                "label": "き",
                "note": "すじみち"
            }
        ],
        "partsStory": "糸(いと)のようにすじ道(己)を通してまとめることを表す。",
        "compounds": [
            {
                "word": "世紀",
                "reading": "せいき",
                "sentence": "二十一世紀に生きる。"
            },
            {
                "word": "紀行",
                "reading": "きこう",
                "sentence": "旅の紀行文を書く。"
            }
        ],
        "stageId": 1,
        "confusables": [
            186,
            47
        ]
    },
    {
        "id": 30,
        "kanji": "基",
        "strokes": 11,
        "onyomi": [
            "キ"
        ],
        "kunyomi": [
            "もと"
        ],
        "meaning": "ものごとのもと、土台",
        "parts": [
            {
                "char": "其",
                "label": "き",
                "note": "その"
            },
            {
                "char": "土",
                "label": "つち",
                "note": "土台"
            }
        ],
        "partsStory": "土台(土)の上にものを積み上げる、ものごとの「もと」を表す。",
        "compounds": [
            {
                "word": "基本",
                "reading": "きほん",
                "sentence": "基本のルールを学ぶ。"
            },
            {
                "word": "基礎",
                "reading": "きそ",
                "sentence": "基礎を固める。"
            }
        ],
        "stageId": 1,
        "confusables": [
            1,
            176
        ]
    },
    {
        "id": 31,
        "kanji": "寄",
        "strokes": 11,
        "onyomi": [
            "キ"
        ],
        "kunyomi": [
            "よ(る)"
        ],
        "meaning": "近づくこと、たよること",
        "parts": [
            {
                "char": "宀",
                "label": "うかんむり",
                "note": "いえ"
            },
            {
                "char": "奇",
                "label": "き",
                "note": "思いがけない"
            }
        ],
        "partsStory": "家(宀)に思いがけず(奇)立ち寄ることを表す。",
        "compounds": [
            {
                "word": "寄付",
                "reading": "きふ",
                "sentence": "お金を寄付する。"
            },
            {
                "word": "寄港",
                "reading": "きこう",
                "sentence": "船が港に寄港する。"
            }
        ],
        "stageId": 1,
        "confusables": [
            189
        ]
    },
    {
        "id": 32,
        "kanji": "規",
        "strokes": 11,
        "onyomi": [
            "キ"
        ],
        "kunyomi": [],
        "meaning": "手本やきまり",
        "parts": [
            {
                "char": "夫",
                "label": "ふ",
                "note": "立派な人"
            },
            {
                "char": "見",
                "label": "みる",
                "note": "見る"
            }
        ],
        "partsStory": "立派な人(夫)がしっかり見る(見)ことから、正しいきまりを表す。",
        "compounds": [
            {
                "word": "規則",
                "reading": "きそく",
                "sentence": "学校の規則を守る。"
            },
            {
                "word": "規模",
                "reading": "きぼ",
                "sentence": "大きな規模の工事。"
            }
        ],
        "stageId": 1,
        "confusables": [
            53
        ]
    },
    {
        "id": 33,
        "kanji": "喜",
        "strokes": 12,
        "onyomi": [
            "キ"
        ],
        "kunyomi": [
            "よろこ(ぶ)"
        ],
        "meaning": "よろこぶこと",
        "parts": [
            {
                "char": "士",
                "label": "し",
                "note": "太鼓の飾り"
            },
            {
                "char": "豆",
                "label": "たいこの形",
                "note": "太鼓"
            },
            {
                "char": "口",
                "label": "くち",
                "note": "くち"
            }
        ],
        "partsStory": "太鼓(豆の形)を打ち鳴らし口で喜びを表す様子から「よろこぶ」を表す。",
        "compounds": [
            {
                "word": "喜劇",
                "reading": "きげき",
                "sentence": "喜劇を見て笑う。"
            },
            {
                "word": "大喜び",
                "reading": "おおよろこび",
                "sentence": "合格して大喜びする。"
            }
        ],
        "stageId": 1,
        "confusables": [
            66,
            45
        ]
    },
    {
        "id": 34,
        "kanji": "技",
        "strokes": 7,
        "onyomi": [
            "ギ"
        ],
        "kunyomi": [
            "わざ"
        ],
        "meaning": "うでまえ、わざ",
        "parts": [
            {
                "char": "扌",
                "label": "てへん",
                "note": "手"
            },
            {
                "char": "支",
                "label": "し",
                "note": "ささえる"
            }
        ],
        "partsStory": "手(扌)でささえながら(支)身につけたうでまえを表す。",
        "compounds": [
            {
                "word": "技術",
                "reading": "ぎじゅつ",
                "sentence": "技術が進歩する。"
            },
            {
                "word": "特技",
                "reading": "とくぎ",
                "sentence": "わたしの特技は水泳だ。"
            }
        ],
        "stageId": 1,
        "confusables": [
            133,
            72
        ]
    },
    {
        "id": 35,
        "kanji": "義",
        "strokes": 13,
        "onyomi": [
            "ギ"
        ],
        "kunyomi": [],
        "meaning": "正しい道すじ",
        "parts": [
            {
                "char": "羊",
                "label": "ひつじ",
                "note": "美しい"
            },
            {
                "char": "我",
                "label": "われ",
                "note": "自分"
            }
        ],
        "partsStory": "羊のように美しく正しい我(われ)のふるまいを表す。",
        "compounds": [
            {
                "word": "正義",
                "reading": "せいぎ",
                "sentence": "正義のために戦う。"
            },
            {
                "word": "義務",
                "reading": "ぎむ",
                "sentence": "納税は国民の義務だ。"
            }
        ],
        "stageId": 1,
        "confusables": [
            31,
            42
        ]
    },
    {
        "id": 36,
        "kanji": "逆",
        "strokes": 9,
        "onyomi": [
            "ギャク"
        ],
        "kunyomi": [
            "さか"
        ],
        "meaning": "反対、さかさま",
        "parts": [
            {
                "char": "辶",
                "label": "しんにょう",
                "note": "すすむ"
            },
            {
                "char": "屰",
                "label": "ぎゃく",
                "note": "さからう"
            }
        ],
        "partsStory": "進む(辶)のとは反対の方向(屰)に向かうことを表す。",
        "compounds": [
            {
                "word": "逆転",
                "reading": "ぎゃくてん",
                "sentence": "試合の逆転をねらう。"
            },
            {
                "word": "逆立ち",
                "reading": "さかだち",
                "sentence": "逆立ちの練習をする。"
            }
        ],
        "stageId": 1,
        "confusables": [
            97,
            185
        ]
    },
    {
        "id": 37,
        "kanji": "久",
        "strokes": 3,
        "onyomi": [
            "キュウ"
        ],
        "kunyomi": [
            "ひさ(しい)"
        ],
        "meaning": "長い時間",
        "parts": [
            {
                "char": "丿",
                "label": "の",
                "note": "人の形"
            },
            {
                "char": "乁",
                "label": "い",
                "note": "長く続く"
            }
        ],
        "partsStory": "人が長く続く形から「久しい」という意味になった。",
        "compounds": [
            {
                "word": "永久",
                "reading": "えいきゅう",
                "sentence": "永久に残す記録。"
            },
            {
                "word": "久々",
                "reading": "ひさびさ",
                "sentence": "久々に友達に会う。"
            }
        ],
        "stageId": 1,
        "confusables": [
            43,
            38
        ]
    },
    {
        "id": 38,
        "kanji": "旧",
        "strokes": 5,
        "onyomi": [
            "キュウ"
        ],
        "kunyomi": [],
        "meaning": "昔の、古いこと",
        "parts": [
            {
                "char": "日",
                "label": "ひ",
                "note": "日"
            },
            {
                "char": "臼",
                "label": "きゅう",
                "note": "古い臼"
            }
        ],
        "partsStory": "古い臼(うす)のように昔から変わらないものを表す。",
        "compounds": [
            {
                "word": "旧式",
                "reading": "きゅうしき",
                "sentence": "旧式の機械を使う。"
            },
            {
                "word": "新旧",
                "reading": "しんきゅう",
                "sentence": "新旧の作品を比べる。"
            }
        ],
        "stageId": 1,
        "confusables": [
            8,
            181
        ]
    },
    {
        "id": 39,
        "kanji": "救",
        "strokes": 11,
        "onyomi": [
            "キュウ"
        ],
        "kunyomi": [
            "すく(う)"
        ],
        "meaning": "たすけること",
        "parts": [
            {
                "char": "求",
                "label": "きゅう",
                "note": "もとめる"
            },
            {
                "char": "攵",
                "label": "ぼくづくり",
                "note": "力をつくす"
            }
        ],
        "partsStory": "助けを求める(求)人に力をつくして(攵)たすけることを表す。",
        "compounds": [
            {
                "word": "救助",
                "reading": "きゅうじょ",
                "sentence": "人命を救助する。"
            },
            {
                "word": "救急",
                "reading": "きゅうきゅう",
                "sentence": "救急車を呼ぶ。"
            }
        ],
        "stageId": 1,
        "confusables": [
            183,
            113
        ]
    },
    {
        "id": 40,
        "kanji": "居",
        "strokes": 8,
        "onyomi": [
            "キョ"
        ],
        "kunyomi": [
            "い(る)"
        ],
        "meaning": "すむこと、いること",
        "parts": [
            {
                "char": "尸",
                "label": "しかばね",
                "note": "やね・からだ"
            },
            {
                "char": "古",
                "label": "こ",
                "note": "古くから"
            }
        ],
        "partsStory": "屋根(尸)の下に古くから住み、そこにいることを表す。",
        "compounds": [
            {
                "word": "住居",
                "reading": "じゅうきょ",
                "sentence": "新しい住居を探す。"
            },
            {
                "word": "居間",
                "reading": "いま",
                "sentence": "居間でテレビを見る。"
            }
        ],
        "stageId": 1,
        "confusables": [
            131,
            55
        ]
    },
    {
        "id": 41,
        "kanji": "許",
        "strokes": 11,
        "onyomi": [
            "キョ"
        ],
        "kunyomi": [
            "ゆる(す)"
        ],
        "meaning": "ゆるすこと",
        "parts": [
            {
                "char": "言",
                "label": "ごんべん",
                "note": "ことば"
            },
            {
                "char": "午",
                "label": "ご",
                "note": "うなずく"
            }
        ],
        "partsStory": "言葉(言)でうなずく(午)ように認め、ゆるすことを表す。",
        "compounds": [
            {
                "word": "許可",
                "reading": "きょか",
                "sentence": "外出の許可をもらう。"
            },
            {
                "word": "特許",
                "reading": "とっきょ",
                "sentence": "新しい発明の特許を取る。"
            }
        ],
        "stageId": 1,
        "confusables": [
            91,
            57
        ]
    },
    {
        "id": 42,
        "kanji": "境",
        "strokes": 14,
        "onyomi": [
            "キョウ"
        ],
        "kunyomi": [
            "さかい"
        ],
        "meaning": "さかいめ、場所",
        "parts": [
            {
                "char": "土",
                "label": "つちへん",
                "note": "土地"
            },
            {
                "char": "竟",
                "label": "きょう",
                "note": "終わる"
            }
        ],
        "partsStory": "土地(土)が終わる(竟)ところ、さかいめを表す。",
        "compounds": [
            {
                "word": "環境",
                "reading": "かんきょう",
                "sentence": "自然環境を守る。"
            },
            {
                "word": "国境",
                "reading": "こっきょう",
                "sentence": "国境をこえる。"
            }
        ],
        "stageId": 1,
        "confusables": [
            1,
            74
        ]
    },
    {
        "id": 43,
        "kanji": "均",
        "strokes": 7,
        "onyomi": [
            "キン"
        ],
        "kunyomi": [],
        "meaning": "等しくそろえること",
        "parts": [
            {
                "char": "土",
                "label": "つちへん",
                "note": "土"
            },
            {
                "char": "勻",
                "label": "きん",
                "note": "ひとしい"
            }
        ],
        "partsStory": "土(つち)をならしてひとしく(勻)することを表す。",
        "compounds": [
            {
                "word": "平均",
                "reading": "へいきん",
                "sentence": "平均点を計算する。"
            },
            {
                "word": "均等",
                "reading": "きんとう",
                "sentence": "均等に分ける。"
            }
        ],
        "stageId": 1,
        "confusables": [
            46,
            42
        ]
    },
    {
        "id": 44,
        "kanji": "禁",
        "strokes": 13,
        "onyomi": [
            "キン"
        ],
        "kunyomi": [],
        "meaning": "禁止すること",
        "parts": [
            {
                "char": "林",
                "label": "はやし",
                "note": "林"
            },
            {
                "char": "示",
                "label": "しめす",
                "note": "神を示す"
            }
        ],
        "partsStory": "神を示す(示)場所である林に立ち入るのを禁じることを表す。",
        "compounds": [
            {
                "word": "禁止",
                "reading": "きんし",
                "sentence": "駐車を禁止する。"
            },
            {
                "word": "禁物",
                "reading": "きんもつ",
                "sentence": "油断は禁物だ。"
            }
        ],
        "stageId": 1,
        "confusables": [
            123
        ]
    },
    {
        "id": 45,
        "kanji": "句",
        "strokes": 5,
        "onyomi": [
            "ク"
        ],
        "kunyomi": [],
        "meaning": "ことばのひとくぎり",
        "parts": [
            {
                "char": "勹",
                "label": "つつみがまえ",
                "note": "つつむ"
            },
            {
                "char": "口",
                "label": "くち",
                "note": "くち"
            }
        ],
        "partsStory": "口から出た言葉をつつむ(勹)ようにひとまとめにした句を表す。",
        "compounds": [
            {
                "word": "俳句",
                "reading": "はいく",
                "sentence": "俳句を作る。"
            },
            {
                "word": "語句",
                "reading": "ごく",
                "sentence": "むずかしい語句を調べる。"
            }
        ],
        "stageId": 1,
        "confusables": [
            83,
            66
        ]
    },
    {
        "id": 46,
        "kanji": "型",
        "strokes": 9,
        "onyomi": [
            "ケイ"
        ],
        "kunyomi": [
            "かた"
        ],
        "meaning": "形、パターン",
        "parts": [
            {
                "char": "刑",
                "label": "けい",
                "note": "かたどる"
            },
            {
                "char": "土",
                "label": "つち",
                "note": "土"
            }
        ],
        "partsStory": "土(つち)をかたどる型(刑)で押し固めて形を作ることを表す。",
        "compounds": [
            {
                "word": "典型",
                "reading": "てんけい",
                "sentence": "典型的な例をあげる。"
            },
            {
                "word": "血液型",
                "reading": "けつえきがた",
                "sentence": "血液型を調べる。"
            }
        ],
        "stageId": 1,
        "confusables": [
            128,
            1
        ]
    },
    {
        "id": 47,
        "kanji": "経",
        "strokes": 11,
        "onyomi": [
            "ケイ"
        ],
        "kunyomi": [
            "へ(る)"
        ],
        "meaning": "通る、すじみち",
        "parts": [
            {
                "char": "糸",
                "label": "いとへん",
                "note": "糸"
            },
            {
                "char": "圣",
                "label": "けい",
                "note": "まっすぐ通る"
            }
        ],
        "partsStory": "糸(いと)がまっすぐ通っていくように、時間や場所を経ることを表す。",
        "compounds": [
            {
                "word": "経験",
                "reading": "けいけん",
                "sentence": "貴重な経験をする。"
            },
            {
                "word": "経済",
                "reading": "けいざい",
                "sentence": "経済を学ぶ。"
            }
        ],
        "stageId": 1,
        "confusables": [
            124,
            119
        ]
    },
    {
        "id": 48,
        "kanji": "潔",
        "strokes": 15,
        "onyomi": [
            "ケツ"
        ],
        "kunyomi": [
            "いさぎよ(い)"
        ],
        "meaning": "清らかでけがれがないこと",
        "parts": [
            {
                "char": "氵",
                "label": "さんずい",
                "note": "水"
            },
            {
                "char": "絜",
                "label": "けつ",
                "note": "清める"
            }
        ],
        "partsStory": "水(氵)のように清らかで、けがれのない様子を表す。",
        "compounds": [
            {
                "word": "清潔",
                "reading": "せいけつ",
                "sentence": "部屋を清潔にたもつ。"
            },
            {
                "word": "潔白",
                "reading": "けっぱく",
                "sentence": "身の潔白を証明する。"
            }
        ],
        "stageId": 1,
        "confusables": [
            67,
            18
        ]
    },
    {
        "id": 49,
        "kanji": "件",
        "strokes": 6,
        "onyomi": [
            "ケン"
        ],
        "kunyomi": [],
        "meaning": "ことがら",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "牛",
                "label": "うし",
                "note": "牛"
            }
        ],
        "partsStory": "人(イ)と牛(うし)を数える単位から、ことがらを数える言葉になった。",
        "compounds": [
            {
                "word": "事件",
                "reading": "じけん",
                "sentence": "事件が起きる。"
            },
            {
                "word": "条件",
                "reading": "じょうけん",
                "sentence": "参加の条件を確認する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            16,
            142
        ]
    },
    {
        "id": 50,
        "kanji": "険",
        "strokes": 11,
        "onyomi": [
            "ケン"
        ],
        "kunyomi": [
            "けわ(しい)"
        ],
        "meaning": "あぶないこと",
        "parts": [
            {
                "char": "阝",
                "label": "こざとへん",
                "note": "山・丘"
            },
            {
                "char": "僉",
                "label": "けん",
                "note": "多くの人"
            }
        ],
        "partsStory": "山(阝)が険しくそびえ、あぶない様子を表す。",
        "compounds": [
            {
                "word": "危険",
                "reading": "きけん",
                "sentence": "危険な場所に近づかない。"
            },
            {
                "word": "保険",
                "reading": "ほけん",
                "sentence": "火災保険に入る。"
            }
        ],
        "stageId": 2,
        "confusables": [
            179,
            51
        ]
    },
    {
        "id": 51,
        "kanji": "検",
        "strokes": 12,
        "onyomi": [
            "ケン"
        ],
        "kunyomi": [],
        "meaning": "しらべること",
        "parts": [
            {
                "char": "木",
                "label": "きへん",
                "note": "木の札"
            },
            {
                "char": "僉",
                "label": "けん",
                "note": "多くを集める"
            }
        ],
        "partsStory": "木の札を多く集めて調べる(僉)ことを表す。",
        "compounds": [
            {
                "word": "検査",
                "reading": "けんさ",
                "sentence": "体を検査する。"
            },
            {
                "word": "点検",
                "reading": "てんけん",
                "sentence": "機械を点検する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            68,
            50
        ]
    },
    {
        "id": 52,
        "kanji": "限",
        "strokes": 9,
        "onyomi": [
            "ゲン"
        ],
        "kunyomi": [
            "かぎ(る)"
        ],
        "meaning": "くぎり、かぎること",
        "parts": [
            {
                "char": "阝",
                "label": "こざとへん",
                "note": "山・丘"
            },
            {
                "char": "艮",
                "label": "こん",
                "note": "じっと目をとめる"
            }
        ],
        "partsStory": "山(阝)にじっと目をとめ(艮)、そこまでとくぎることを表す。",
        "compounds": [
            {
                "word": "制限",
                "reading": "せいげん",
                "sentence": "速度を制限する。"
            },
            {
                "word": "期限",
                "reading": "きげん",
                "sentence": "提出の期限を守る。"
            }
        ],
        "stageId": 2,
        "confusables": [
            134,
            179
        ]
    },
    {
        "id": 53,
        "kanji": "現",
        "strokes": 11,
        "onyomi": [
            "ゲン"
        ],
        "kunyomi": [
            "あらわ(れる)"
        ],
        "meaning": "あらわれること",
        "parts": [
            {
                "char": "王",
                "label": "たまへん",
                "note": "玉"
            },
            {
                "char": "見",
                "label": "みる",
                "note": "見える"
            }
        ],
        "partsStory": "玉(王)をみがいて見える(見)ようにする、あらわれることを表す。",
        "compounds": [
            {
                "word": "現在",
                "reading": "げんざい",
                "sentence": "現在の時こくを言う。"
            },
            {
                "word": "表現",
                "reading": "ひょうげん",
                "sentence": "気持ちを表現する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            32
        ]
    },
    {
        "id": 54,
        "kanji": "減",
        "strokes": 12,
        "onyomi": [
            "ゲン"
        ],
        "kunyomi": [
            "へ(る)"
        ],
        "meaning": "へること",
        "parts": [
            {
                "char": "氵",
                "label": "さんずい",
                "note": "水"
            },
            {
                "char": "咸",
                "label": "かん",
                "note": "すべて"
            }
        ],
        "partsStory": "水(氵)がすべて(咸)少しずつへっていくことを表す。",
        "compounds": [
            {
                "word": "減少",
                "reading": "げんしょう",
                "sentence": "人口が減少する。"
            },
            {
                "word": "加減",
                "reading": "かげん",
                "sentence": "火加減を見る。"
            }
        ],
        "stageId": 2,
        "confusables": [
            67,
            11
        ]
    },
    {
        "id": 55,
        "kanji": "故",
        "strokes": 9,
        "onyomi": [
            "コ"
        ],
        "kunyomi": [
            "ゆえ"
        ],
        "meaning": "わけ、むかしのこと",
        "parts": [
            {
                "char": "古",
                "label": "ふるい",
                "note": "古い"
            },
            {
                "char": "攵",
                "label": "ぼくづくり",
                "note": "力を加える"
            }
        ],
        "partsStory": "古い(古)出来事に手を加える(攵)ことから、理由やわけを表す。",
        "compounds": [
            {
                "word": "故障",
                "reading": "こしょう",
                "sentence": "機械が故障する。"
            },
            {
                "word": "事故",
                "reading": "じこ",
                "sentence": "事故に気をつける。"
            }
        ],
        "stageId": 2,
        "confusables": [
            58,
            183
        ]
    },
    {
        "id": 56,
        "kanji": "個",
        "strokes": 10,
        "onyomi": [
            "コ"
        ],
        "kunyomi": [],
        "meaning": "ひとつひとつ",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "固",
                "label": "こ",
                "note": "かたい"
            }
        ],
        "partsStory": "人(イ)がそれぞれ固く(固)独立したひとつであることを表す。",
        "compounds": [
            {
                "word": "個人",
                "reading": "こじん",
                "sentence": "個人の意見を言う。"
            },
            {
                "word": "個性",
                "reading": "こせい",
                "sentence": "個性をのばす。"
            }
        ],
        "stageId": 2,
        "confusables": [
            96,
            175
        ]
    },
    {
        "id": 57,
        "kanji": "護",
        "strokes": 20,
        "onyomi": [
            "ゴ"
        ],
        "kunyomi": [],
        "meaning": "まもること",
        "parts": [
            {
                "char": "言",
                "label": "ごんべん",
                "note": "ことば"
            },
            {
                "char": "蒦",
                "label": "かく",
                "note": "大切にする"
            }
        ],
        "partsStory": "言葉(言)をつくして大切に(蒦)まもることを表す。",
        "compounds": [
            {
                "word": "保護",
                "reading": "ほご",
                "sentence": "自然を保護する。"
            },
            {
                "word": "看護",
                "reading": "かんご",
                "sentence": "病人を看護する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            41,
            164
        ]
    },
    {
        "id": 58,
        "kanji": "効",
        "strokes": 8,
        "onyomi": [
            "コウ"
        ],
        "kunyomi": [
            "き(く)"
        ],
        "meaning": "ききめがあること",
        "parts": [
            {
                "char": "交",
                "label": "こう",
                "note": "まじわる"
            },
            {
                "char": "攵",
                "label": "ぼくづくり",
                "note": "力をつくす"
            }
        ],
        "partsStory": "力を尽くして(攵)働きかけ、ききめを出すことを表す。",
        "compounds": [
            {
                "word": "効果",
                "reading": "こうか",
                "sentence": "薬の効果が出る。"
            },
            {
                "word": "有効",
                "reading": "ゆうこう",
                "sentence": "チケットが有効だ。"
            }
        ],
        "stageId": 2,
        "confusables": [
            183,
            55
        ]
    },
    {
        "id": 59,
        "kanji": "厚",
        "strokes": 9,
        "onyomi": [
            "コウ"
        ],
        "kunyomi": [
            "あつ(い)"
        ],
        "meaning": "あつみがあること",
        "parts": [
            {
                "char": "厂",
                "label": "がんだれ",
                "note": "がけ"
            },
            {
                "char": "厚の下部",
                "label": "こう",
                "note": "積み重なる"
            }
        ],
        "partsStory": "がけ(厂)の下にものが積み重なる様子から「あつい」を表す。",
        "compounds": [
            {
                "word": "厚意",
                "reading": "こうい",
                "sentence": "厚意に感謝する。"
            },
            {
                "word": "厚紙",
                "reading": "あつがみ",
                "sentence": "厚紙で工作する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            193,
            1
        ]
    },
    {
        "id": 60,
        "kanji": "耕",
        "strokes": 10,
        "onyomi": [
            "コウ"
        ],
        "kunyomi": [
            "たがや(す)"
        ],
        "meaning": "田畑をたがやすこと",
        "parts": [
            {
                "char": "耒",
                "label": "すきへん",
                "note": "すき"
            },
            {
                "char": "井",
                "label": "い",
                "note": "田のあぜ"
            }
        ],
        "partsStory": "すき(耒)で田(井)を耕すことを表す。",
        "compounds": [
            {
                "word": "耕作",
                "reading": "こうさく",
                "sentence": "田んぼを耕作する。"
            },
            {
                "word": "農耕",
                "reading": "のうこう",
                "sentence": "農耕が始まる。"
            }
        ],
        "stageId": 2,
        "confusables": [
            2
        ]
    },
    {
        "id": 61,
        "kanji": "航",
        "strokes": 10,
        "onyomi": [
            "コウ"
        ],
        "kunyomi": [],
        "meaning": "船や飛行機で進むこと",
        "parts": [
            {
                "char": "舟",
                "label": "ふねへん",
                "note": "舟"
            },
            {
                "char": "亢",
                "label": "こう",
                "note": "高く進む"
            }
        ],
        "partsStory": "舟(ふね)が高く(亢)進んでいくことを表す。",
        "compounds": [
            {
                "word": "航海",
                "reading": "こうかい",
                "sentence": "船で航海する。"
            },
            {
                "word": "航空",
                "reading": "こうくう",
                "sentence": "航空会社で働く。"
            }
        ],
        "stageId": 2,
        "confusables": [
            68,
            63
        ]
    },
    {
        "id": 62,
        "kanji": "鉱",
        "strokes": 13,
        "onyomi": [
            "コウ"
        ],
        "kunyomi": [],
        "meaning": "地中からとれる金属のもと",
        "parts": [
            {
                "char": "釒",
                "label": "かねへん",
                "note": "金属"
            },
            {
                "char": "広",
                "label": "ひろい",
                "note": "広い"
            }
        ],
        "partsStory": "金属(釒)が広く(広)地中にうもれていることを表す。",
        "compounds": [
            {
                "word": "鉱山",
                "reading": "こうざん",
                "sentence": "鉱山で働く。"
            },
            {
                "word": "鉱物",
                "reading": "こうぶつ",
                "sentence": "鉱物を採集する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            147
        ]
    },
    {
        "id": 63,
        "kanji": "構",
        "strokes": 14,
        "onyomi": [
            "コウ"
        ],
        "kunyomi": [
            "かま(える)"
        ],
        "meaning": "組み立てること",
        "parts": [
            {
                "char": "木",
                "label": "きへん",
                "note": "木"
            },
            {
                "char": "冓",
                "label": "こう",
                "note": "組み合わせる"
            }
        ],
        "partsStory": "木を組み合わせて(冓)建物を構えることを表す。",
        "compounds": [
            {
                "word": "構造",
                "reading": "こうぞう",
                "sentence": "建物の構造を調べる。"
            },
            {
                "word": "構成",
                "reading": "こうせい",
                "sentence": "文章の構成を考える。"
            }
        ],
        "stageId": 2,
        "confusables": [
            85,
            65
        ]
    },
    {
        "id": 64,
        "kanji": "興",
        "strokes": 16,
        "onyomi": [
            "コウ"
        ],
        "kunyomi": [
            "おこ(る)"
        ],
        "meaning": "さかんになること",
        "parts": [
            {
                "char": "同",
                "label": "どう",
                "note": "力を合わせる"
            },
            {
                "char": "舁",
                "label": "よ",
                "note": "両手で持ち上げる"
            }
        ],
        "partsStory": "みんなで力を合わせ(同)持ち上げるように、ものごとをおこすことを表す。",
        "compounds": [
            {
                "word": "興味",
                "reading": "きょうみ",
                "sentence": "歴史に興味がある。"
            },
            {
                "word": "復興",
                "reading": "ふっこう",
                "sentence": "町の復興を願う。"
            }
        ],
        "stageId": 2,
        "confusables": [
            147
        ]
    },
    {
        "id": 65,
        "kanji": "講",
        "strokes": 17,
        "onyomi": [
            "コウ"
        ],
        "kunyomi": [],
        "meaning": "説明すること、話し合うこと",
        "parts": [
            {
                "char": "言",
                "label": "ごんべん",
                "note": "ことば"
            },
            {
                "char": "冓",
                "label": "こう",
                "note": "組み立てる"
            }
        ],
        "partsStory": "言葉(言)を組み立てて(冓)人に説き聞かせることを表す。",
        "compounds": [
            {
                "word": "講義",
                "reading": "こうぎ",
                "sentence": "大学の講義を聞く。"
            },
            {
                "word": "講演",
                "reading": "こうえん",
                "sentence": "講演会に参加する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            102,
            41
        ]
    },
    {
        "id": 66,
        "kanji": "告",
        "strokes": 7,
        "onyomi": [
            "コク"
        ],
        "kunyomi": [
            "つ(げる)"
        ],
        "meaning": "知らせること",
        "parts": [
            {
                "char": "牛",
                "label": "うし",
                "note": "牛"
            },
            {
                "char": "口",
                "label": "くち",
                "note": "くち"
            }
        ],
        "partsStory": "牛の角のように大きな声で口から告げ知らせることを表す。",
        "compounds": [
            {
                "word": "報告",
                "reading": "ほうこく",
                "sentence": "結果を報告する。"
            },
            {
                "word": "広告",
                "reading": "こうこく",
                "sentence": "テレビの広告を見る。"
            }
        ],
        "stageId": 2,
        "confusables": [
            21,
            15
        ]
    },
    {
        "id": 67,
        "kanji": "混",
        "strokes": 11,
        "onyomi": [
            "コン"
        ],
        "kunyomi": [
            "ま(ざる)"
        ],
        "meaning": "まじること",
        "parts": [
            {
                "char": "氵",
                "label": "さんずい",
                "note": "水"
            },
            {
                "char": "昆",
                "label": "こん",
                "note": "多くが集まる"
            }
        ],
        "partsStory": "水(氵)にいろいろなものがまじりあう様子を表す。",
        "compounds": [
            {
                "word": "混雑",
                "reading": "こんざつ",
                "sentence": "電車が混雑する。"
            },
            {
                "word": "混合",
                "reading": "こんごう",
                "sentence": "絵の具を混合する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            11,
            18
        ]
    },
    {
        "id": 68,
        "kanji": "査",
        "strokes": 9,
        "onyomi": [
            "サ"
        ],
        "kunyomi": [],
        "meaning": "しらべること",
        "parts": [
            {
                "char": "木",
                "label": "き",
                "note": "木の札"
            },
            {
                "char": "且",
                "label": "しょ",
                "note": "積み重ねる"
            }
        ],
        "partsStory": "木の札(且)を積み重ねて調べることを表す。",
        "compounds": [
            {
                "word": "検査",
                "reading": "けんさ",
                "sentence": "血液を検査する。"
            },
            {
                "word": "調査",
                "reading": "ちょうさ",
                "sentence": "アンケートで調査する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            123,
            14
        ]
    },
    {
        "id": 69,
        "kanji": "再",
        "strokes": 6,
        "onyomi": [
            "サイ"
        ],
        "kunyomi": [],
        "meaning": "ふたたび",
        "parts": [
            {
                "char": "冉",
                "label": "ぜん",
                "note": "重なる"
            },
            {
                "char": "一",
                "label": "いち",
                "note": "もう一度"
            }
        ],
        "partsStory": "ものが重なって(冉)もう一度(一)くり返される様子を表す。",
        "compounds": [
            {
                "word": "再会",
                "reading": "さいかい",
                "sentence": "旧友と再会する。"
            },
            {
                "word": "再生",
                "reading": "さいせい",
                "sentence": "動画を再生する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            81
        ]
    },
    {
        "id": 70,
        "kanji": "災",
        "strokes": 7,
        "onyomi": [
            "サイ"
        ],
        "kunyomi": [
            "わざわ(い)"
        ],
        "meaning": "わざわい、災害",
        "parts": [
            {
                "char": "巛",
                "label": "かわ",
                "note": "川の氾濫"
            },
            {
                "char": "火",
                "label": "ひ",
                "note": "火事"
            }
        ],
        "partsStory": "川(巛)の氾濫と火(ひ)の災いが重なる様子を表す。",
        "compounds": [
            {
                "word": "災害",
                "reading": "さいがい",
                "sentence": "災害にそなえる。"
            },
            {
                "word": "火災",
                "reading": "かさい",
                "sentence": "火災が発生する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            153
        ]
    },
    {
        "id": 71,
        "kanji": "妻",
        "strokes": 8,
        "onyomi": [
            "サイ"
        ],
        "kunyomi": [
            "つま"
        ],
        "meaning": "つま、配偶者の女性",
        "parts": [
            {
                "char": "⺕",
                "label": "て",
                "note": "手で髪を結う"
            },
            {
                "char": "女",
                "label": "おんな",
                "note": "女"
            }
        ],
        "partsStory": "髪をきれいに結った女性(女)がつまであることを表す。",
        "compounds": [
            {
                "word": "夫妻",
                "reading": "ふさい",
                "sentence": "ご夫妻であいさつする。"
            },
            {
                "word": "妻子",
                "reading": "さいし",
                "sentence": "妻子を大切にする。"
            }
        ],
        "stageId": 2,
        "confusables": [
            167
        ]
    },
    {
        "id": 72,
        "kanji": "採",
        "strokes": 11,
        "onyomi": [
            "サイ"
        ],
        "kunyomi": [
            "と(る)"
        ],
        "meaning": "とりいれること",
        "parts": [
            {
                "char": "扌",
                "label": "てへん",
                "note": "手"
            },
            {
                "char": "采",
                "label": "さい",
                "note": "草木をつむ"
            }
        ],
        "partsStory": "手(扌)で草木を採る(采)ことを表す。",
        "compounds": [
            {
                "word": "採用",
                "reading": "さいよう",
                "sentence": "新しい方法を採用する。"
            },
            {
                "word": "採点",
                "reading": "さいてん",
                "sentence": "テストを採点する。"
            }
        ],
        "stageId": 2,
        "confusables": [
            133,
            95
        ]
    },
    {
        "id": 73,
        "kanji": "際",
        "strokes": 14,
        "onyomi": [
            "サイ"
        ],
        "kunyomi": [
            "きわ"
        ],
        "meaning": "であう、さかいめ",
        "parts": [
            {
                "char": "阝",
                "label": "こざとへん",
                "note": "山"
            },
            {
                "char": "祭",
                "label": "まつり",
                "note": "祭り"
            }
        ],
        "partsStory": "山(阝)と祭りが出会う場所、きわ・さかいめを表す。",
        "compounds": [
            {
                "word": "国際",
                "reading": "こくさい",
                "sentence": "国際交流をする。"
            },
            {
                "word": "実際",
                "reading": "じっさい",
                "sentence": "実際にやってみる。"
            }
        ],
        "stageId": 3,
        "confusables": [
            52,
            50
        ]
    },
    {
        "id": 74,
        "kanji": "在",
        "strokes": 6,
        "onyomi": [
            "ザイ"
        ],
        "kunyomi": [
            "あ(る)"
        ],
        "meaning": "そこにあること",
        "parts": [
            {
                "char": "土",
                "label": "つち",
                "note": "土地"
            },
            {
                "char": "才",
                "label": "さい",
                "note": "才能"
            }
        ],
        "partsStory": "才能(才)が土地(土)に根づいて存在することを表す。",
        "compounds": [
            {
                "word": "現在",
                "reading": "げんざい",
                "sentence": "現在の時こくを見る。"
            },
            {
                "word": "在庫",
                "reading": "ざいこ",
                "sentence": "商品の在庫を調べる。"
            }
        ],
        "stageId": 3,
        "confusables": [
            146,
            1
        ]
    },
    {
        "id": 75,
        "kanji": "財",
        "strokes": 10,
        "onyomi": [
            "ザイ"
        ],
        "kunyomi": [],
        "meaning": "お金や品物",
        "parts": [
            {
                "char": "貝",
                "label": "かいへん",
                "note": "お金"
            },
            {
                "char": "才",
                "label": "さい",
                "note": "才能"
            }
        ],
        "partsStory": "貝(お金)を才能でうみだす、財産を表す。",
        "compounds": [
            {
                "word": "財産",
                "reading": "ざいさん",
                "sentence": "財産を大切に守る。"
            },
            {
                "word": "財布",
                "reading": "さいふ",
                "sentence": "財布を落とす。"
            }
        ],
        "stageId": 3,
        "confusables": [
            118,
            87
        ]
    },
    {
        "id": 76,
        "kanji": "罪",
        "strokes": 13,
        "onyomi": [
            "ザイ"
        ],
        "kunyomi": [
            "つみ"
        ],
        "meaning": "つみ、悪いおこない",
        "parts": [
            {
                "char": "罒",
                "label": "あみがしら",
                "note": "あみ"
            },
            {
                "char": "非",
                "label": "ひ",
                "note": "よくない"
            }
        ],
        "partsStory": "網(罒)で悪いこと(非)をとらえる、つみを表す。",
        "compounds": [
            {
                "word": "犯罪",
                "reading": "はんざい",
                "sentence": "犯罪を防止する。"
            },
            {
                "word": "謝罪",
                "reading": "しゃざい",
                "sentence": "謝罪の手紙を書く。"
            }
        ],
        "stageId": 3,
        "confusables": [
            161
        ]
    },
    {
        "id": 77,
        "kanji": "殺",
        "strokes": 10,
        "onyomi": [
            "サツ"
        ],
        "kunyomi": [
            "ころ(す)"
        ],
        "meaning": "いのちをうばうこと",
        "parts": [
            {
                "char": "㐅",
                "label": "じゅう",
                "note": "木の枝"
            },
            {
                "char": "殳",
                "label": "る",
                "note": "打つ道具"
            }
        ],
        "partsStory": "打つ道具(殳)で強く打つ様子から、命をうばうことを表す。",
        "compounds": [
            {
                "word": "殺人",
                "reading": "さつじん",
                "sentence": "殺人事件を調べる。"
            },
            {
                "word": "相殺",
                "reading": "そうさい",
                "sentence": "利益と損失が相殺される。"
            }
        ],
        "stageId": 3,
        "confusables": [
            121
        ]
    },
    {
        "id": 78,
        "kanji": "雑",
        "strokes": 14,
        "onyomi": [
            "ザツ"
        ],
        "kunyomi": [],
        "meaning": "いろいろまじること",
        "parts": [
            {
                "char": "九",
                "label": "きゅう",
                "note": "多くの"
            },
            {
                "char": "隹",
                "label": "ふるとり",
                "note": "鳥"
            }
        ],
        "partsStory": "木にとまる鳥(隹)たちがいろいろまじりあう様子を表す。",
        "compounds": [
            {
                "word": "雑誌",
                "reading": "ざっし",
                "sentence": "雑誌を読む。"
            },
            {
                "word": "複雑",
                "reading": "ふくざつ",
                "sentence": "複雑な問題を解く。"
            }
        ],
        "stageId": 3,
        "confusables": [
            99
        ]
    },
    {
        "id": 79,
        "kanji": "酸",
        "strokes": 14,
        "onyomi": [
            "サン"
        ],
        "kunyomi": [
            "す(っぱい)"
        ],
        "meaning": "すっぱい味、化学の酸",
        "parts": [
            {
                "char": "酉",
                "label": "とりへん",
                "note": "酒つぼ"
            },
            {
                "char": "夋",
                "label": "しゅん",
                "note": "すすむ"
            }
        ],
        "partsStory": "酒つぼ(酉)から出るすっぱい味を表す。",
        "compounds": [
            {
                "word": "酸素",
                "reading": "さんそ",
                "sentence": "酸素を吸う。"
            },
            {
                "word": "酸味",
                "reading": "さんみ",
                "sentence": "レモンの酸味を感じる。"
            }
        ],
        "stageId": 3,
        "confusables": [
            76,
            83
        ]
    },
    {
        "id": 80,
        "kanji": "賛",
        "strokes": 15,
        "onyomi": [
            "サン"
        ],
        "kunyomi": [],
        "meaning": "よいと認めて力を貸すこと",
        "parts": [
            {
                "char": "先",
                "label": "せん",
                "note": "先に立つ"
            },
            {
                "char": "貝",
                "label": "かい",
                "note": "お金"
            }
        ],
        "partsStory": "お金(貝)を出して先に立ち(先)協力し、賛成することを表す。",
        "compounds": [
            {
                "word": "賛成",
                "reading": "さんせい",
                "sentence": "意見に賛成する。"
            },
            {
                "word": "協賛",
                "reading": "きょうさん",
                "sentence": "イベントに協賛する。"
            }
        ],
        "stageId": 3,
        "confusables": [
            118,
            87
        ]
    },
    {
        "id": 81,
        "kanji": "士",
        "strokes": 3,
        "onyomi": [
            "シ"
        ],
        "kunyomi": [],
        "meaning": "りっぱな男の人、専門家",
        "parts": [
            {
                "char": "十",
                "label": "じゅう",
                "note": "多くを知る"
            },
            {
                "char": "一",
                "label": "いち",
                "note": "ひとつにまとめる"
            }
        ],
        "partsStory": "多くのことを知り一つにまとめる立派な人を表す。",
        "compounds": [
            {
                "word": "兵士",
                "reading": "へいし",
                "sentence": "兵士が行進する。"
            },
            {
                "word": "弁護士",
                "reading": "べんごし",
                "sentence": "弁護士に相談する。"
            }
        ],
        "stageId": 3,
        "confusables": [
            69,
            82
        ]
    },
    {
        "id": 82,
        "kanji": "支",
        "strokes": 4,
        "onyomi": [
            "シ"
        ],
        "kunyomi": [
            "ささ(える)"
        ],
        "meaning": "ささえること",
        "parts": [
            {
                "char": "十",
                "label": "じゅう",
                "note": "枝"
            },
            {
                "char": "又",
                "label": "また",
                "note": "手"
            }
        ],
        "partsStory": "手(又)で枝のようなものをささえることを表す。",
        "compounds": [
            {
                "word": "支店",
                "reading": "してん",
                "sentence": "支店で買い物をする。"
            },
            {
                "word": "支持",
                "reading": "しじ",
                "sentence": "意見を支持する。"
            }
        ],
        "stageId": 3,
        "confusables": [
            177,
            81
        ]
    },
    {
        "id": 83,
        "kanji": "史",
        "strokes": 5,
        "onyomi": [
            "シ"
        ],
        "kunyomi": [],
        "meaning": "歴史、できごとの記録",
        "parts": [
            {
                "char": "口",
                "label": "くち",
                "note": "かたり伝える"
            },
            {
                "char": "中",
                "label": "ちゅう",
                "note": "中正"
            }
        ],
        "partsStory": "中正な立場で口から語り継がれる出来事の記録を表す。",
        "compounds": [
            {
                "word": "歴史",
                "reading": "れきし",
                "sentence": "歴史の授業を受ける。"
            },
            {
                "word": "日本史",
                "reading": "にほんし",
                "sentence": "日本史を学ぶ。"
            }
        ],
        "stageId": 3,
        "confusables": [
            15,
            33
        ]
    },
    {
        "id": 84,
        "kanji": "志",
        "strokes": 7,
        "onyomi": [
            "シ"
        ],
        "kunyomi": [
            "こころざ(す)"
        ],
        "meaning": "こころざし、目標",
        "parts": [
            {
                "char": "士",
                "label": "し",
                "note": "立派な人"
            },
            {
                "char": "心",
                "label": "こころ",
                "note": "心"
            }
        ],
        "partsStory": "立派な人(士)の心が目指す、こころざしを表す。",
        "compounds": [
            {
                "word": "意志",
                "reading": "いし",
                "sentence": "強い意志を持つ。"
            },
            {
                "word": "志望",
                "reading": "しぼう",
                "sentence": "志望校を決める。"
            }
        ],
        "stageId": 3,
        "confusables": [
            136,
            33
        ]
    },
    {
        "id": 85,
        "kanji": "枝",
        "strokes": 8,
        "onyomi": [
            "シ"
        ],
        "kunyomi": [
            "えだ"
        ],
        "meaning": "木のえだ",
        "parts": [
            {
                "char": "木",
                "label": "きへん",
                "note": "木"
            },
            {
                "char": "支",
                "label": "し",
                "note": "ささえる・分かれる"
            }
        ],
        "partsStory": "木(木)からささえられて(支)分かれ出るえだを表す。",
        "compounds": [
            {
                "word": "枝葉",
                "reading": "えだは",
                "sentence": "枝葉をせん定する。"
            },
            {
                "word": "小枝",
                "reading": "こえだ",
                "sentence": "小枝を集める。"
            }
        ],
        "stageId": 3,
        "confusables": [
            34,
            26
        ]
    },
    {
        "id": 86,
        "kanji": "師",
        "strokes": 10,
        "onyomi": [
            "シ"
        ],
        "kunyomi": [],
        "meaning": "先生、専門の人",
        "parts": [
            {
                "char": "帀",
                "label": "きん",
                "note": "あまねく"
            },
            {
                "char": "𠂤",
                "label": "たい",
                "note": "人々の集まり"
            }
        ],
        "partsStory": "人々をあまねく(帀)導く先生や専門家を表す字。",
        "compounds": [
            {
                "word": "教師",
                "reading": "きょうし",
                "sentence": "教師になる夢を持つ。"
            },
            {
                "word": "医師",
                "reading": "いし",
                "sentence": "医師にみてもらう。"
            }
        ],
        "stageId": 3,
        "confusables": [
            80,
            88
        ]
    },
    {
        "id": 87,
        "kanji": "資",
        "strokes": 13,
        "onyomi": [
            "シ"
        ],
        "kunyomi": [],
        "meaning": "元手となるお金や才能",
        "parts": [
            {
                "char": "次",
                "label": "じ",
                "note": "つぎつぎ"
            },
            {
                "char": "貝",
                "label": "かい",
                "note": "お金"
            }
        ],
        "partsStory": "つぎつぎ(次)に必要になるお金(貝)、資本を表す。",
        "compounds": [
            {
                "word": "資料",
                "reading": "しりょう",
                "sentence": "発表の資料を作る。"
            },
            {
                "word": "資金",
                "reading": "しきん",
                "sentence": "事業の資金を集める。"
            }
        ],
        "stageId": 3,
        "confusables": [
            75,
            165
        ]
    },
    {
        "id": 88,
        "kanji": "飼",
        "strokes": 13,
        "onyomi": [
            "シ"
        ],
        "kunyomi": [
            "か(う)"
        ],
        "meaning": "動物をやしなうこと",
        "parts": [
            {
                "char": "飠",
                "label": "しょくへん",
                "note": "食べ物"
            },
            {
                "char": "司",
                "label": "し",
                "note": "管理する"
            }
        ],
        "partsStory": "食べ物(飠)を管理して(司)動物を飼うことを表す。",
        "compounds": [
            {
                "word": "飼育",
                "reading": "しいく",
                "sentence": "うさぎを飼育する。"
            },
            {
                "word": "飼料",
                "reading": "しりょう",
                "sentence": "牛に飼料をあたえる。"
            }
        ],
        "stageId": 3,
        "confusables": [
            78,
            90
        ]
    },
    {
        "id": 89,
        "kanji": "示",
        "strokes": 5,
        "onyomi": [
            "シ",
            "ジ"
        ],
        "kunyomi": [
            "しめ(す)"
        ],
        "meaning": "しめすこと",
        "parts": [
            {
                "char": "二",
                "label": "に",
                "note": "天"
            },
            {
                "char": "小",
                "label": "しょう",
                "note": "祭りの台"
            }
        ],
        "partsStory": "神を祭る台の形から、人に示すことを表す。",
        "compounds": [
            {
                "word": "指示",
                "reading": "しじ",
                "sentence": "先生の指示にしたがう。"
            },
            {
                "word": "表示",
                "reading": "ひょうじ",
                "sentence": "値段を表示する。"
            }
        ],
        "stageId": 3,
        "confusables": [
            188
        ]
    },
    {
        "id": 90,
        "kanji": "似",
        "strokes": 7,
        "onyomi": [
            "ジ"
        ],
        "kunyomi": [
            "に(る)"
        ],
        "meaning": "似ていること",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "以",
                "label": "い",
                "note": "それをもって"
            }
        ],
        "partsStory": "人(イ)がそれをもって(以)近い形をしている、似ることを表す。",
        "compounds": [
            {
                "word": "類似",
                "reading": "るいじ",
                "sentence": "類似した品物を見つける。"
            },
            {
                "word": "似顔絵",
                "reading": "にがおえ",
                "sentence": "似顔絵をかく。"
            }
        ],
        "stageId": 3,
        "confusables": [
            127,
            49
        ]
    },
    {
        "id": 91,
        "kanji": "識",
        "strokes": 19,
        "onyomi": [
            "シキ"
        ],
        "kunyomi": [],
        "meaning": "知ること、見分けること",
        "parts": [
            {
                "char": "言",
                "label": "ごんべん",
                "note": "ことば"
            },
            {
                "char": "戠",
                "label": "しょく",
                "note": "目印をつける"
            }
        ],
        "partsStory": "言葉(言)で目印(戠)をつけて見分け、知ることを表す。",
        "compounds": [
            {
                "word": "知識",
                "reading": "ちしき",
                "sentence": "知識を身につける。"
            },
            {
                "word": "意識",
                "reading": "いしき",
                "sentence": "意識をはっきり持つ。"
            }
        ],
        "stageId": 3,
        "confusables": [
            65,
            109
        ]
    },
    {
        "id": 92,
        "kanji": "質",
        "strokes": 15,
        "onyomi": [
            "シツ",
            "シチ"
        ],
        "kunyomi": [],
        "meaning": "中身、たち",
        "parts": [
            {
                "char": "斦",
                "label": "ぎん",
                "note": "はかりにかける"
            },
            {
                "char": "貝",
                "label": "かい",
                "note": "財産"
            }
        ],
        "partsStory": "財産(貝)をはかりにかける(斦)ことから、ものの中身や質を表す。",
        "compounds": [
            {
                "word": "質問",
                "reading": "しつもん",
                "sentence": "先生に質問する。"
            },
            {
                "word": "性質",
                "reading": "せいしつ",
                "sentence": "水の性質を調べる。"
            }
        ],
        "stageId": 3,
        "confusables": [
            129,
            104
        ]
    },
    {
        "id": 93,
        "kanji": "舎",
        "strokes": 8,
        "onyomi": [
            "シャ"
        ],
        "kunyomi": [],
        "meaning": "いえ、たてもの",
        "parts": [
            {
                "char": "人",
                "label": "ひと",
                "note": "人"
            },
            {
                "char": "舌",
                "label": "した",
                "note": "建物の形"
            }
        ],
        "partsStory": "人がやどる建物の形から、いえ・たてものを表す。",
        "compounds": [
            {
                "word": "校舎",
                "reading": "こうしゃ",
                "sentence": "新しい校舎で学ぶ。"
            },
            {
                "word": "田舎",
                "reading": "いなか",
                "sentence": "田舎で過ごす夏休み。"
            }
        ],
        "stageId": 3,
        "confusables": [
            188
        ]
    },
    {
        "id": 94,
        "kanji": "謝",
        "strokes": 17,
        "onyomi": [
            "シャ"
        ],
        "kunyomi": [
            "あやま(る)"
        ],
        "meaning": "あやまること、お礼を言うこと",
        "parts": [
            {
                "char": "言",
                "label": "ごんべん",
                "note": "ことば"
            },
            {
                "char": "射",
                "label": "しゃ",
                "note": "まとに向ける"
            }
        ],
        "partsStory": "言葉(言)をまとに向けて(射)相手に伝え、あやまりや感謝を表す。",
        "compounds": [
            {
                "word": "感謝",
                "reading": "かんしゃ",
                "sentence": "感謝の気持ちを伝える。"
            },
            {
                "word": "謝罪",
                "reading": "しゃざい",
                "sentence": "謝罪の手紙を書く。"
            }
        ],
        "stageId": 3,
        "confusables": [
            41,
            91
        ]
    },
    {
        "id": 95,
        "kanji": "授",
        "strokes": 11,
        "onyomi": [
            "ジュ"
        ],
        "kunyomi": [
            "さず(ける)"
        ],
        "meaning": "さずけること",
        "parts": [
            {
                "char": "扌",
                "label": "てへん",
                "note": "手"
            },
            {
                "char": "受",
                "label": "じゅ",
                "note": "受け取る"
            }
        ],
        "partsStory": "手(扌)から手へ受け(受)渡し、さずけることを表す。",
        "compounds": [
            {
                "word": "授業",
                "reading": "じゅぎょう",
                "sentence": "算数の授業を受ける。"
            },
            {
                "word": "教授",
                "reading": "きょうじゅ",
                "sentence": "大学の教授に会う。"
            }
        ],
        "stageId": 3,
        "confusables": [
            72,
            34
        ]
    },
    {
        "id": 96,
        "kanji": "修",
        "strokes": 10,
        "onyomi": [
            "シュウ"
        ],
        "kunyomi": [
            "おさ(める)"
        ],
        "meaning": "学問や行いをおさめること",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "彡",
                "label": "さんづくり",
                "note": "かざる・ととのえる"
            }
        ],
        "partsStory": "人(イ)が身をととのえて(彡)学問をおさめることを表す。",
        "compounds": [
            {
                "word": "修学旅行",
                "reading": "しゅうがくりょこう",
                "sentence": "修学旅行に行く。"
            },
            {
                "word": "研修",
                "reading": "けんしゅう",
                "sentence": "新入社員が研修を受ける。"
            }
        ],
        "stageId": 3,
        "confusables": [
            90,
            152
        ]
    },
    {
        "id": 97,
        "kanji": "述",
        "strokes": 8,
        "onyomi": [
            "ジュツ"
        ],
        "kunyomi": [
            "の(べる)"
        ],
        "meaning": "述べること",
        "parts": [
            {
                "char": "辶",
                "label": "しんにょう",
                "note": "すすむ"
            },
            {
                "char": "朮",
                "label": "じゅつ",
                "note": "すじを通す"
            }
        ],
        "partsStory": "考えを進めながら(辶)言葉にして述べることを表す。",
        "compounds": [
            {
                "word": "述語",
                "reading": "じゅつご",
                "sentence": "文の述語を見つける。"
            },
            {
                "word": "記述",
                "reading": "きじゅつ",
                "sentence": "意見を記述する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            126,
            98
        ]
    },
    {
        "id": 98,
        "kanji": "術",
        "strokes": 11,
        "onyomi": [
            "ジュツ"
        ],
        "kunyomi": [],
        "meaning": "わざ、方法",
        "parts": [
            {
                "char": "行",
                "label": "ぎょうがまえ",
                "note": "みち"
            },
            {
                "char": "朮",
                "label": "じゅつ",
                "note": "すじを通す"
            }
        ],
        "partsStory": "道(行)の中で身につけたわざを表す。",
        "compounds": [
            {
                "word": "技術",
                "reading": "ぎじゅつ",
                "sentence": "新しい技術を学ぶ。"
            },
            {
                "word": "手術",
                "reading": "しゅじゅつ",
                "sentence": "病院で手術を受ける。"
            }
        ],
        "stageId": 4,
        "confusables": [
            7,
            97
        ]
    },
    {
        "id": 99,
        "kanji": "準",
        "strokes": 13,
        "onyomi": [
            "ジュン"
        ],
        "kunyomi": [],
        "meaning": "水平にそろえること、基準",
        "parts": [
            {
                "char": "氵",
                "label": "さんずい",
                "note": "水"
            },
            {
                "char": "隹",
                "label": "ふるとり",
                "note": "鳥"
            }
        ],
        "partsStory": "水(氵)のように平らにそろえる、基準を表す。",
        "compounds": [
            {
                "word": "準備",
                "reading": "じゅんび",
                "sentence": "遠足の準備をする。"
            },
            {
                "word": "標準",
                "reading": "ひょうじゅん",
                "sentence": "標準的な大きさだ。"
            }
        ],
        "stageId": 4,
        "confusables": [
            10,
            48
        ]
    },
    {
        "id": 100,
        "kanji": "序",
        "strokes": 7,
        "onyomi": [
            "ジョ"
        ],
        "kunyomi": [],
        "meaning": "順序、はじめ",
        "parts": [
            {
                "char": "广",
                "label": "まだれ",
                "note": "やね"
            },
            {
                "char": "予",
                "label": "よ",
                "note": "あらかじめ"
            }
        ],
        "partsStory": "屋根(广)の下であらかじめ(予)順序立てることを表す。",
        "compounds": [
            {
                "word": "順序",
                "reading": "じゅんじょ",
                "sentence": "順序よくならべる。"
            },
            {
                "word": "秩序",
                "reading": "ちつじょ",
                "sentence": "社会の秩序を守る。"
            }
        ],
        "stageId": 4,
        "confusables": [
            12
        ]
    },
    {
        "id": 101,
        "kanji": "招",
        "strokes": 8,
        "onyomi": [
            "ショウ"
        ],
        "kunyomi": [
            "まね(く)"
        ],
        "meaning": "招くこと",
        "parts": [
            {
                "char": "扌",
                "label": "てへん",
                "note": "手"
            },
            {
                "char": "召",
                "label": "しょう",
                "note": "呼びかける"
            }
        ],
        "partsStory": "手(扌)で呼びかけて(召)招くことを表す。",
        "compounds": [
            {
                "word": "招待",
                "reading": "しょうたい",
                "sentence": "誕生日会に招待する。"
            },
            {
                "word": "招集",
                "reading": "しょうしゅう",
                "sentence": "会議を招集する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            120,
            34
        ]
    },
    {
        "id": 102,
        "kanji": "証",
        "strokes": 12,
        "onyomi": [
            "ショウ"
        ],
        "kunyomi": [],
        "meaning": "正しいと証明すること",
        "parts": [
            {
                "char": "言",
                "label": "ごんべん",
                "note": "ことば"
            },
            {
                "char": "正",
                "label": "せい",
                "note": "正しい"
            }
        ],
        "partsStory": "言葉(言)で正しい(正)ことを明らかにする、証を表す。",
        "compounds": [
            {
                "word": "証明",
                "reading": "しょうめい",
                "sentence": "身分を証明する。"
            },
            {
                "word": "保証",
                "reading": "ほしょう",
                "sentence": "品質を保証する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            57,
            91
        ]
    },
    {
        "id": 103,
        "kanji": "象",
        "strokes": 12,
        "onyomi": [
            "ショウ",
            "ゾウ"
        ],
        "kunyomi": [],
        "meaning": "すがた、ぞうという動物",
        "parts": [
            {
                "char": "象",
                "label": "ぞう",
                "note": "ぞうの形をえがいた字"
            }
        ],
        "partsStory": "大きなぞうの姿をそのままえがいた字。",
        "compounds": [
            {
                "word": "対象",
                "reading": "たいしょう",
                "sentence": "小学生を対象にする。"
            },
            {
                "word": "現象",
                "reading": "げんしょう",
                "sentence": "自然現象を観察する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            127
        ]
    },
    {
        "id": 104,
        "kanji": "賞",
        "strokes": 15,
        "onyomi": [
            "ショウ"
        ],
        "kunyomi": [],
        "meaning": "ほめてあたえるもの",
        "parts": [
            {
                "char": "尚",
                "label": "しょう",
                "note": "とうとい"
            },
            {
                "char": "貝",
                "label": "かい",
                "note": "お金"
            }
        ],
        "partsStory": "尊いもの(尚)としてお金(貝)をあたえ、ほめたたえることを表す。",
        "compounds": [
            {
                "word": "賞状",
                "reading": "しょうじょう",
                "sentence": "賞状をもらう。"
            },
            {
                "word": "入賞",
                "reading": "にゅうしょう",
                "sentence": "大会で入賞する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            146,
            135
        ]
    },
    {
        "id": 105,
        "kanji": "条",
        "strokes": 7,
        "onyomi": [
            "ジョウ"
        ],
        "kunyomi": [],
        "meaning": "すじ、箇条",
        "parts": [
            {
                "char": "夂",
                "label": "すいにょう",
                "note": "のびる"
            },
            {
                "char": "木",
                "label": "き",
                "note": "木の枝"
            }
        ],
        "partsStory": "木の枝が長く伸びる様子から、すじ・箇条を表す。",
        "compounds": [
            {
                "word": "条件",
                "reading": "じょうけん",
                "sentence": "条件を確認する。"
            },
            {
                "word": "条約",
                "reading": "じょうやく",
                "sentence": "平和条約を結ぶ。"
            }
        ],
        "stageId": 4,
        "confusables": [
            85,
            14
        ]
    },
    {
        "id": 106,
        "kanji": "状",
        "strokes": 7,
        "onyomi": [
            "ジョウ"
        ],
        "kunyomi": [],
        "meaning": "ようす、手紙",
        "parts": [
            {
                "char": "爿",
                "label": "しょうへん",
                "note": "寝台"
            },
            {
                "char": "犬",
                "label": "いぬ",
                "note": "犬"
            }
        ],
        "partsStory": "寝台(爿)にいる犬のようすを描き、ありさまを表す。",
        "compounds": [
            {
                "word": "状態",
                "reading": "じょうたい",
                "sentence": "部屋の状態を見る。"
            },
            {
                "word": "年賀状",
                "reading": "ねんがじょう",
                "sentence": "年賀状を書く。"
            }
        ],
        "stageId": 4,
        "confusables": [
            102,
            111
        ]
    },
    {
        "id": 107,
        "kanji": "常",
        "strokes": 11,
        "onyomi": [
            "ジョウ"
        ],
        "kunyomi": [
            "つね"
        ],
        "meaning": "いつも、ふだん",
        "parts": [
            {
                "char": "尚",
                "label": "しょう",
                "note": "とうとい"
            },
            {
                "char": "巾",
                "label": "はば",
                "note": "ぬの"
            }
        ],
        "partsStory": "尊い(尚)ぬの(巾)がいつまでも変わらずあることから「つね」を表す。",
        "compounds": [
            {
                "word": "日常",
                "reading": "にちじょう",
                "sentence": "日常生活を送る。"
            },
            {
                "word": "正常",
                "reading": "せいじょう",
                "sentence": "機械が正常に動く。"
            }
        ],
        "stageId": 4,
        "confusables": [
            146,
            166
        ]
    },
    {
        "id": 108,
        "kanji": "情",
        "strokes": 11,
        "onyomi": [
            "ジョウ"
        ],
        "kunyomi": [
            "なさ(け)"
        ],
        "meaning": "気持ち、なさけ",
        "parts": [
            {
                "char": "忄",
                "label": "りっしんべん",
                "note": "こころ"
            },
            {
                "char": "青",
                "label": "あお",
                "note": "澄んでいる"
            }
        ],
        "partsStory": "心(忄)が澄んだ青(青)のように、まことの気持ちを表す。",
        "compounds": [
            {
                "word": "感情",
                "reading": "かんじょう",
                "sentence": "感情を表に出す。"
            },
            {
                "word": "情報",
                "reading": "じょうほう",
                "sentence": "新しい情報を集める。"
            }
        ],
        "stageId": 4,
        "confusables": [
            20,
            27
        ]
    },
    {
        "id": 109,
        "kanji": "織",
        "strokes": 18,
        "onyomi": [
            "シキ"
        ],
        "kunyomi": [
            "お(る)"
        ],
        "meaning": "糸で布をおること",
        "parts": [
            {
                "char": "糸",
                "label": "いとへん",
                "note": "糸"
            },
            {
                "char": "戠",
                "label": "しょく",
                "note": "目印を通す"
            }
        ],
        "partsStory": "糸(糸)を目印(戠)通りに組んで布を織ることを表す。",
        "compounds": [
            {
                "word": "組織",
                "reading": "そしき",
                "sentence": "チームを組織する。"
            },
            {
                "word": "織物",
                "reading": "おりもの",
                "sentence": "美しい織物を作る。"
            }
        ],
        "stageId": 4,
        "confusables": [
            91,
            186
        ]
    },
    {
        "id": 110,
        "kanji": "職",
        "strokes": 18,
        "onyomi": [
            "ショク"
        ],
        "kunyomi": [],
        "meaning": "しごと、役目",
        "parts": [
            {
                "char": "耳",
                "label": "みみへん",
                "note": "耳"
            },
            {
                "char": "戠",
                "label": "しょく",
                "note": "目印を通す"
            }
        ],
        "partsStory": "耳(耳)でよく聞いて目印(戠)通りにつとめる仕事を表す。",
        "compounds": [
            {
                "word": "職業",
                "reading": "しょくぎょう",
                "sentence": "将来の職業を考える。"
            },
            {
                "word": "就職",
                "reading": "しゅうしょく",
                "sentence": "会社に就職する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            109,
            91
        ]
    },
    {
        "id": 111,
        "kanji": "制",
        "strokes": 8,
        "onyomi": [
            "セイ"
        ],
        "kunyomi": [],
        "meaning": "きまりを作ること、おさえること",
        "parts": [
            {
                "char": "未",
                "label": "み",
                "note": "木の枝"
            },
            {
                "char": "刂",
                "label": "りっとう",
                "note": "刀"
            }
        ],
        "partsStory": "木の枝(未)を刀(刂)で切りそろえ、きまりを制することを表す。",
        "compounds": [
            {
                "word": "制度",
                "reading": "せいど",
                "sentence": "新しい制度が始まる。"
            },
            {
                "word": "制服",
                "reading": "せいふく",
                "sentence": "学校の制服を着る。"
            }
        ],
        "stageId": 4,
        "confusables": [
            157,
            25
        ]
    },
    {
        "id": 112,
        "kanji": "性",
        "strokes": 8,
        "onyomi": [
            "セイ",
            "ショウ"
        ],
        "kunyomi": [],
        "meaning": "うまれつきの質",
        "parts": [
            {
                "char": "忄",
                "label": "りっしんべん",
                "note": "こころ"
            },
            {
                "char": "生",
                "label": "せい",
                "note": "うまれる"
            }
        ],
        "partsStory": "心(忄)にうまれつき(生)そなわった性質を表す。",
        "compounds": [
            {
                "word": "性格",
                "reading": "せいかく",
                "sentence": "やさしい性格の人。"
            },
            {
                "word": "個性",
                "reading": "こせい",
                "sentence": "個性をのばす。"
            }
        ],
        "stageId": 4,
        "confusables": [
            27,
            108
        ]
    },
    {
        "id": 113,
        "kanji": "政",
        "strokes": 9,
        "onyomi": [
            "セイ"
        ],
        "kunyomi": [],
        "meaning": "国をおさめること",
        "parts": [
            {
                "char": "正",
                "label": "せい",
                "note": "正しい"
            },
            {
                "char": "攵",
                "label": "ぼくづくり",
                "note": "力をつくす"
            }
        ],
        "partsStory": "正しく(正)力を尽くして(攵)国をおさめる政治を表す。",
        "compounds": [
            {
                "word": "政治",
                "reading": "せいじ",
                "sentence": "政治について学ぶ。"
            },
            {
                "word": "政府",
                "reading": "せいふ",
                "sentence": "政府が発表する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            58,
            102
        ]
    },
    {
        "id": 114,
        "kanji": "勢",
        "strokes": 13,
        "onyomi": [
            "セイ"
        ],
        "kunyomi": [],
        "meaning": "いきおい",
        "parts": [
            {
                "char": "埶",
                "label": "げい",
                "note": "草木を植える"
            },
            {
                "char": "力",
                "label": "ちから",
                "note": "ちから"
            }
        ],
        "partsStory": "草木を植える力(埶)がさらに力(力)を得て、いきおいを表す。",
        "compounds": [
            {
                "word": "勢力",
                "reading": "せいりょく",
                "sentence": "台風の勢力が強まる。"
            },
            {
                "word": "姿勢",
                "reading": "しせい",
                "sentence": "正しい姿勢ですわる。"
            }
        ],
        "stageId": 4,
        "confusables": [
            101,
            120
        ]
    },
    {
        "id": 115,
        "kanji": "精",
        "strokes": 14,
        "onyomi": [
            "セイ"
        ],
        "kunyomi": [],
        "meaning": "まじりけのない、くわしいこと",
        "parts": [
            {
                "char": "米",
                "label": "こめへん",
                "note": "米"
            },
            {
                "char": "青",
                "label": "あお",
                "note": "清らか"
            }
        ],
        "partsStory": "米(米)を清らか(青)に精米するように、まじりけのないことを表す。",
        "compounds": [
            {
                "word": "精神",
                "reading": "せいしん",
                "sentence": "精神を集中する。"
            },
            {
                "word": "精密",
                "reading": "せいみつ",
                "sentence": "精密な機械を作る。"
            }
        ],
        "stageId": 4,
        "confusables": [
            185,
            108
        ]
    },
    {
        "id": 116,
        "kanji": "製",
        "strokes": 14,
        "onyomi": [
            "セイ"
        ],
        "kunyomi": [],
        "meaning": "布や物を作ること",
        "parts": [
            {
                "char": "制",
                "label": "せい",
                "note": "型に合わせる"
            },
            {
                "char": "衣",
                "label": "ころも",
                "note": "ぬの"
            }
        ],
        "partsStory": "布(衣)を型(制)に合わせて仕立て、製造することを表す。",
        "compounds": [
            {
                "word": "製品",
                "reading": "せいひん",
                "sentence": "新しい製品を作る。"
            },
            {
                "word": "製造",
                "reading": "せいぞう",
                "sentence": "自動車を製造する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            99,
            97
        ]
    },
    {
        "id": 117,
        "kanji": "税",
        "strokes": 12,
        "onyomi": [
            "ゼイ"
        ],
        "kunyomi": [],
        "meaning": "国に納めるお金",
        "parts": [
            {
                "char": "禾",
                "label": "のぎへん",
                "note": "いね"
            },
            {
                "char": "兌",
                "label": "だ",
                "note": "交換する"
            }
        ],
        "partsStory": "稲(禾)の実りの一部を交換して(兌)国に納める税を表す。",
        "compounds": [
            {
                "word": "税金",
                "reading": "ぜいきん",
                "sentence": "税金を納める。"
            },
            {
                "word": "消費税",
                "reading": "しょうひぜい",
                "sentence": "消費税を計算する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            144,
            3
        ]
    },
    {
        "id": 118,
        "kanji": "責",
        "strokes": 11,
        "onyomi": [
            "セキ"
        ],
        "kunyomi": [
            "せ(める)"
        ],
        "meaning": "せめること、つとめ",
        "parts": [
            {
                "char": "主",
                "label": "しゅ",
                "note": "あるじ"
            },
            {
                "char": "貝",
                "label": "かい",
                "note": "財産"
            }
        ],
        "partsStory": "あるじ(主)が財産(貝)の管理につとめ、責任を表す。",
        "compounds": [
            {
                "word": "責任",
                "reading": "せきにん",
                "sentence": "責任をもって行動する。"
            },
            {
                "word": "自責",
                "reading": "じせき",
                "sentence": "自責の念を持つ。"
            }
        ],
        "stageId": 4,
        "confusables": [
            162,
            129
        ]
    },
    {
        "id": 119,
        "kanji": "績",
        "strokes": 17,
        "onyomi": [
            "セキ"
        ],
        "kunyomi": [],
        "meaning": "しごとの成果",
        "parts": [
            {
                "char": "糸",
                "label": "いとへん",
                "note": "糸"
            },
            {
                "char": "責",
                "label": "せき",
                "note": "つとめ"
            }
        ],
        "partsStory": "糸(糸)をつむぎ、つとめ(責)を果たした成果を表す。",
        "compounds": [
            {
                "word": "成績",
                "reading": "せいせき",
                "sentence": "テストの成績が上がる。"
            },
            {
                "word": "業績",
                "reading": "ぎょうせき",
                "sentence": "会社の業績を発表する。"
            }
        ],
        "stageId": 4,
        "confusables": [
            125,
            122
        ]
    },
    {
        "id": 120,
        "kanji": "接",
        "strokes": 11,
        "onyomi": [
            "セツ"
        ],
        "kunyomi": [],
        "meaning": "つなぐこと、近づくこと",
        "parts": [
            {
                "char": "扌",
                "label": "てへん",
                "note": "手"
            },
            {
                "char": "妾",
                "label": "しょう",
                "note": "寄りそう"
            }
        ],
        "partsStory": "手(扌)を差し出して寄りそい(妾)、つなぎ接することを表す。",
        "compounds": [
            {
                "word": "接続",
                "reading": "せつぞく",
                "sentence": "インターネットに接続する。"
            },
            {
                "word": "直接",
                "reading": "ちょくせつ",
                "sentence": "直接会って話す。"
            }
        ],
        "stageId": 4,
        "confusables": [
            133,
            34
        ]
    },
    {
        "id": 121,
        "kanji": "設",
        "strokes": 11,
        "onyomi": [
            "セツ"
        ],
        "kunyomi": [],
        "meaning": "作り設けること",
        "parts": [
            {
                "char": "言",
                "label": "ごんべん",
                "note": "ことば"
            },
            {
                "char": "殳",
                "label": "る",
                "note": "道具で作る"
            }
        ],
        "partsStory": "言葉(言)で計画し道具(殳)で作り設けることを表す。",
        "compounds": [
            {
                "word": "建設",
                "reading": "けんせつ",
                "sentence": "新しい駅を建設する。"
            },
            {
                "word": "設計",
                "reading": "せっけい",
                "sentence": "家の設計図をかく。"
            }
        ],
        "stageId": 5,
        "confusables": [
            65,
            91
        ]
    },
    {
        "id": 122,
        "kanji": "絶",
        "strokes": 12,
        "onyomi": [
            "ゼツ"
        ],
        "kunyomi": [
            "た(える)"
        ],
        "meaning": "たえること、この上ないこと",
        "parts": [
            {
                "char": "糸",
                "label": "いとへん",
                "note": "糸"
            },
            {
                "char": "色の変形",
                "label": "ぜつ",
                "note": "刀で切る"
            }
        ],
        "partsStory": "糸(糸)が刀で切られてたえることを表す。",
        "compounds": [
            {
                "word": "絶対",
                "reading": "ぜったい",
                "sentence": "絶対に成功させる。"
            },
            {
                "word": "絶滅",
                "reading": "ぜつめつ",
                "sentence": "絶滅した動物を調べる。"
            }
        ],
        "stageId": 5,
        "confusables": [
            109,
            186
        ]
    },
    {
        "id": 123,
        "kanji": "祖",
        "strokes": 9,
        "onyomi": [
            "ソ"
        ],
        "kunyomi": [],
        "meaning": "先祖、もと",
        "parts": [
            {
                "char": "示",
                "label": "しめすへん",
                "note": "神を祭る"
            },
            {
                "char": "且",
                "label": "しょ",
                "note": "積み重ねる"
            }
        ],
        "partsStory": "神を祭る(示)台に積み重ねた(且)先祖を表す。",
        "compounds": [
            {
                "word": "祖先",
                "reading": "そせん",
                "sentence": "祖先をうやまう。"
            },
            {
                "word": "祖父",
                "reading": "そふ",
                "sentence": "祖父の家に遊びに行く。"
            }
        ],
        "stageId": 5,
        "confusables": [
            44,
            68
        ]
    },
    {
        "id": 124,
        "kanji": "素",
        "strokes": 10,
        "onyomi": [
            "ソ"
        ],
        "kunyomi": [],
        "meaning": "もとになるもの、かざりけがない",
        "parts": [
            {
                "char": "主",
                "label": "しゅ",
                "note": "あるじ"
            },
            {
                "char": "糸",
                "label": "いと",
                "note": "糸"
            }
        ],
        "partsStory": "白い糸(糸)のようにかざりけのない、もとの姿を表す。",
        "compounds": [
            {
                "word": "要素",
                "reading": "ようそ",
                "sentence": "成功の要素を考える。"
            },
            {
                "word": "素直",
                "reading": "すなお",
                "sentence": "素直な気持ちを伝える。"
            }
        ],
        "stageId": 5,
        "confusables": [
            125,
            119
        ]
    },
    {
        "id": 125,
        "kanji": "総",
        "strokes": 14,
        "onyomi": [
            "ソウ"
        ],
        "kunyomi": [],
        "meaning": "すべてをまとめること",
        "parts": [
            {
                "char": "糸",
                "label": "いとへん",
                "note": "糸"
            },
            {
                "char": "悤",
                "label": "そう",
                "note": "まとめる"
            }
        ],
        "partsStory": "糸(糸)を全部まとめて束ねることを表す。",
        "compounds": [
            {
                "word": "総合",
                "reading": "そうごう",
                "sentence": "総合的に判断する。"
            },
            {
                "word": "総理大臣",
                "reading": "そうりだいじん",
                "sentence": "総理大臣が発表する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            109,
            122
        ]
    },
    {
        "id": 126,
        "kanji": "造",
        "strokes": 10,
        "onyomi": [
            "ゾウ"
        ],
        "kunyomi": [
            "つく(る)"
        ],
        "meaning": "作ること",
        "parts": [
            {
                "char": "辶",
                "label": "しんにょう",
                "note": "すすむ"
            },
            {
                "char": "告",
                "label": "こく",
                "note": "告げる"
            }
        ],
        "partsStory": "言葉で告げ(告)ながら進めて(辶)作ることを表す。",
        "compounds": [
            {
                "word": "製造",
                "reading": "せいぞう",
                "sentence": "工場で製造する。"
            },
            {
                "word": "造船",
                "reading": "ぞうせん",
                "sentence": "造船所を見学する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            185,
            97
        ]
    },
    {
        "id": 127,
        "kanji": "像",
        "strokes": 14,
        "onyomi": [
            "ゾウ"
        ],
        "kunyomi": [],
        "meaning": "すがた、彫刻",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "象",
                "label": "ぞう",
                "note": "かたどる"
            }
        ],
        "partsStory": "人(イ)のすがたをかたどる(象)像を表す。",
        "compounds": [
            {
                "word": "想像",
                "reading": "そうぞう",
                "sentence": "未来を想像する。"
            },
            {
                "word": "銅像",
                "reading": "どうぞう",
                "sentence": "公園の銅像を見る。"
            }
        ],
        "stageId": 5,
        "confusables": [
            163,
            175
        ]
    },
    {
        "id": 128,
        "kanji": "増",
        "strokes": 14,
        "onyomi": [
            "ゾウ"
        ],
        "kunyomi": [
            "ふ(える)"
        ],
        "meaning": "ふえること",
        "parts": [
            {
                "char": "土",
                "label": "つちへん",
                "note": "土"
            },
            {
                "char": "曽",
                "label": "そう",
                "note": "幾重にも重なる"
            }
        ],
        "partsStory": "土(つち)が幾重にも(曽)積み重なり増えることを表す。",
        "compounds": [
            {
                "word": "増加",
                "reading": "ぞうか",
                "sentence": "人口が増加する。"
            },
            {
                "word": "急増",
                "reading": "きゅうぞう",
                "sentence": "来客が急増する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            176,
            74
        ]
    },
    {
        "id": 129,
        "kanji": "則",
        "strokes": 9,
        "onyomi": [
            "ソク"
        ],
        "kunyomi": [],
        "meaning": "きまり、のっとること",
        "parts": [
            {
                "char": "貝",
                "label": "かい",
                "note": "財産"
            },
            {
                "char": "刂",
                "label": "りっとう",
                "note": "刀"
            }
        ],
        "partsStory": "財産(貝)の分け方を刀(刂)で正しく決める、きまりを表す。",
        "compounds": [
            {
                "word": "規則",
                "reading": "きそく",
                "sentence": "規則を守って行動する。"
            },
            {
                "word": "法則",
                "reading": "ほうそく",
                "sentence": "自然の法則を学ぶ。"
            }
        ],
        "stageId": 5,
        "confusables": [
            180,
            25
        ]
    },
    {
        "id": 130,
        "kanji": "測",
        "strokes": 12,
        "onyomi": [
            "ソク"
        ],
        "kunyomi": [
            "はか(る)"
        ],
        "meaning": "長さや重さをはかること",
        "parts": [
            {
                "char": "氵",
                "label": "さんずい",
                "note": "水"
            },
            {
                "char": "則",
                "label": "そく",
                "note": "きまり通りに"
            }
        ],
        "partsStory": "水(氵)の量をきまり(則)に従って正確にはかることを表す。",
        "compounds": [
            {
                "word": "予測",
                "reading": "よそく",
                "sentence": "明日の天気を予測する。"
            },
            {
                "word": "測定",
                "reading": "そくてい",
                "sentence": "体温を測定する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            18,
            11
        ]
    },
    {
        "id": 131,
        "kanji": "属",
        "strokes": 12,
        "onyomi": [
            "ゾク"
        ],
        "kunyomi": [],
        "meaning": "つながり、なかまに入ること",
        "parts": [
            {
                "char": "尸",
                "label": "しかばね",
                "note": "やね"
            },
            {
                "char": "蜀",
                "label": "しょく",
                "note": "虫がつながる"
            }
        ],
        "partsStory": "屋根(尸)の下に虫(蜀)がつながり集まる様子から、所属を表す。",
        "compounds": [
            {
                "word": "所属",
                "reading": "しょぞく",
                "sentence": "サッカー部に所属する。"
            },
            {
                "word": "金属",
                "reading": "きんぞく",
                "sentence": "金属でできた道具。"
            }
        ],
        "stageId": 5,
        "confusables": [
            151,
            40
        ]
    },
    {
        "id": 132,
        "kanji": "率",
        "strokes": 11,
        "onyomi": [
            "リツ",
            "ソツ"
        ],
        "kunyomi": [],
        "meaning": "わりあい、ひきいること",
        "parts": [
            {
                "char": "率の形",
                "label": "りつ",
                "note": "あみで束ねる"
            }
        ],
        "partsStory": "あみでまとめて束ねる形から、ひきいる・わりあいを表す。",
        "compounds": [
            {
                "word": "効率",
                "reading": "こうりつ",
                "sentence": "効率よく勉強する。"
            },
            {
                "word": "引率",
                "reading": "いんそつ",
                "sentence": "先生が生徒を引率する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            133,
            129
        ]
    },
    {
        "id": 133,
        "kanji": "損",
        "strokes": 13,
        "onyomi": [
            "ソン"
        ],
        "kunyomi": [
            "そこ(なう)"
        ],
        "meaning": "そこなうこと、へること",
        "parts": [
            {
                "char": "扌",
                "label": "てへん",
                "note": "手"
            },
            {
                "char": "員",
                "label": "いん",
                "note": "人数"
            }
        ],
        "partsStory": "手(扌)から人数(員)が減るように、損なうことを表す。",
        "compounds": [
            {
                "word": "損失",
                "reading": "そんしつ",
                "sentence": "大きな損失を出す。"
            },
            {
                "word": "破損",
                "reading": "はそん",
                "sentence": "荷物が破損する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            143,
            34
        ]
    },
    {
        "id": 134,
        "kanji": "退",
        "strokes": 9,
        "onyomi": [
            "タイ"
        ],
        "kunyomi": [
            "しりぞ(く)"
        ],
        "meaning": "しりぞくこと",
        "parts": [
            {
                "char": "辶",
                "label": "しんにょう",
                "note": "すすむ"
            },
            {
                "char": "艮",
                "label": "こん",
                "note": "あとずさり"
            }
        ],
        "partsStory": "進む(辶)のとは反対にあとずさりする(艮)ことを表す。",
        "compounds": [
            {
                "word": "退場",
                "reading": "たいじょう",
                "sentence": "選手が退場する。"
            },
            {
                "word": "後退",
                "reading": "こうたい",
                "sentence": "車が後退する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            28,
            126
        ]
    },
    {
        "id": 135,
        "kanji": "貸",
        "strokes": 12,
        "onyomi": [
            "タイ"
        ],
        "kunyomi": [
            "か(す)"
        ],
        "meaning": "貸すこと",
        "parts": [
            {
                "char": "代",
                "label": "だい",
                "note": "代わりに"
            },
            {
                "char": "貝",
                "label": "かい",
                "note": "お金"
            }
        ],
        "partsStory": "代わり(代)にお金(貝)をわたし、貸すことを表す。",
        "compounds": [
            {
                "word": "貸借",
                "reading": "たいしゃく",
                "sentence": "お金の貸借をする。"
            },
            {
                "word": "賃貸",
                "reading": "ちんたい",
                "sentence": "賃貸のアパートに住む。"
            }
        ],
        "stageId": 5,
        "confusables": [
            162,
            180
        ]
    },
    {
        "id": 136,
        "kanji": "態",
        "strokes": 14,
        "onyomi": [
            "タイ"
        ],
        "kunyomi": [],
        "meaning": "ようす、ありさま",
        "parts": [
            {
                "char": "能",
                "label": "のう",
                "note": "能力"
            },
            {
                "char": "心",
                "label": "こころ",
                "note": "心"
            }
        ],
        "partsStory": "心(心)の能力(能)が表に出た、ありさまを表す。",
        "compounds": [
            {
                "word": "態度",
                "reading": "たいど",
                "sentence": "まじめな態度で聞く。"
            },
            {
                "word": "状態",
                "reading": "じょうたい",
                "sentence": "健康な状態を保つ。"
            }
        ],
        "stageId": 5,
        "confusables": [
            12,
            84
        ]
    },
    {
        "id": 137,
        "kanji": "団",
        "strokes": 6,
        "onyomi": [
            "ダン"
        ],
        "kunyomi": [],
        "meaning": "人が集まった組織",
        "parts": [
            {
                "char": "囗",
                "label": "くにがまえ",
                "note": "かこい"
            },
            {
                "char": "寸",
                "label": "すん",
                "note": "まとまり"
            }
        ],
        "partsStory": "かこい(囗)の中に人が集まりまとまった団体を表す。",
        "compounds": [
            {
                "word": "団体",
                "reading": "だんたい",
                "sentence": "団体で旅行する。"
            },
            {
                "word": "集団",
                "reading": "しゅうだん",
                "sentence": "集団で行動する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            4,
            148
        ]
    },
    {
        "id": 138,
        "kanji": "断",
        "strokes": 11,
        "onyomi": [
            "ダン"
        ],
        "kunyomi": [
            "た(つ)"
        ],
        "meaning": "切ること、決めること",
        "parts": [
            {
                "char": "米",
                "label": "べい",
                "note": "糸をより分ける"
            },
            {
                "char": "斤",
                "label": "おの",
                "note": "おの"
            }
        ],
        "partsStory": "より分けた糸を斧(斤)で断ち切ることを表す。",
        "compounds": [
            {
                "word": "判断",
                "reading": "はんだん",
                "sentence": "正しく判断する。"
            },
            {
                "word": "断定",
                "reading": "だんてい",
                "sentence": "事実だと断定する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            115,
            185
        ]
    },
    {
        "id": 139,
        "kanji": "築",
        "strokes": 16,
        "onyomi": [
            "チク"
        ],
        "kunyomi": [
            "きず(く)"
        ],
        "meaning": "建物などをきずくこと",
        "parts": [
            {
                "char": "竹",
                "label": "たけかんむり",
                "note": "竹"
            },
            {
                "char": "木",
                "label": "き",
                "note": "木"
            }
        ],
        "partsStory": "竹(竹)や木(木)を組んで工夫し、きずくことを表す。",
        "compounds": [
            {
                "word": "建築",
                "reading": "けんちく",
                "sentence": "新しいビルを建築する。"
            },
            {
                "word": "築城",
                "reading": "ちくじょう",
                "sentence": "お城を築城する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            26,
            22
        ]
    },
    {
        "id": 140,
        "kanji": "貯",
        "strokes": 12,
        "onyomi": [
            "チョ"
        ],
        "kunyomi": [],
        "meaning": "たくわえること",
        "parts": [
            {
                "char": "貝",
                "label": "かいへん",
                "note": "お金"
            },
            {
                "char": "宁",
                "label": "ちょ",
                "note": "落ち着ける"
            }
        ],
        "partsStory": "財産(貝)を家の中に落ち着けて(宁)たくわえることを表す。",
        "compounds": [
            {
                "word": "貯金",
                "reading": "ちょきん",
                "sentence": "毎月貯金する。"
            },
            {
                "word": "貯水",
                "reading": "ちょすい",
                "sentence": "ダムで貯水する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            80,
            118
        ]
    },
    {
        "id": 141,
        "kanji": "張",
        "strokes": 11,
        "onyomi": [
            "チョウ"
        ],
        "kunyomi": [
            "は(る)"
        ],
        "meaning": "はること、広げること",
        "parts": [
            {
                "char": "弓",
                "label": "ゆみへん",
                "note": "弓"
            },
            {
                "char": "長",
                "label": "ちょう",
                "note": "長い"
            }
        ],
        "partsStory": "弓(ゆみ)の弦を長く(長)引っぱることを表す。",
        "compounds": [
            {
                "word": "主張",
                "reading": "しゅちょう",
                "sentence": "自分の意見を主張する。"
            },
            {
                "word": "出張",
                "reading": "しゅっちょう",
                "sentence": "仕事で出張する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            143,
            128
        ]
    },
    {
        "id": 142,
        "kanji": "停",
        "strokes": 11,
        "onyomi": [
            "テイ"
        ],
        "kunyomi": [],
        "meaning": "とまること",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "亭",
                "label": "てい",
                "note": "建物"
            }
        ],
        "partsStory": "人(イ)が建物(亭)の前で立ちどまることを表す。",
        "compounds": [
            {
                "word": "停止",
                "reading": "ていし",
                "sentence": "車が停止する。"
            },
            {
                "word": "停車",
                "reading": "ていしゃ",
                "sentence": "バスが停車する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            16,
            96
        ]
    },
    {
        "id": 143,
        "kanji": "提",
        "strokes": 12,
        "onyomi": [
            "テイ"
        ],
        "kunyomi": [
            "さ(げる)"
        ],
        "meaning": "さし出すこと、さげること",
        "parts": [
            {
                "char": "扌",
                "label": "てへん",
                "note": "手"
            },
            {
                "char": "是",
                "label": "ぜ",
                "note": "正しい"
            }
        ],
        "partsStory": "手(扌)で正しく(是)さし出すことを表す。",
        "compounds": [
            {
                "word": "提出",
                "reading": "ていしゅつ",
                "sentence": "宿題を提出する。"
            },
            {
                "word": "提案",
                "reading": "ていあん",
                "sentence": "新しい案を提案する。"
            }
        ],
        "stageId": 5,
        "confusables": [
            34,
            95
        ]
    },
    {
        "id": 144,
        "kanji": "程",
        "strokes": 12,
        "onyomi": [
            "テイ"
        ],
        "kunyomi": [
            "ほど"
        ],
        "meaning": "程度、みちのり",
        "parts": [
            {
                "char": "禾",
                "label": "のぎへん",
                "note": "いね"
            },
            {
                "char": "呈",
                "label": "てい",
                "note": "さし示す"
            }
        ],
        "partsStory": "稲(禾)の実り具合をさし示す(呈)ように、程度を表す。",
        "compounds": [
            {
                "word": "程度",
                "reading": "ていど",
                "sentence": "ちょうどよい程度にする。"
            },
            {
                "word": "日程",
                "reading": "にってい",
                "sentence": "旅行の日程を決める。"
            }
        ],
        "stageId": 5,
        "confusables": [
            3,
            117
        ]
    },
    {
        "id": 145,
        "kanji": "統",
        "strokes": 12,
        "onyomi": [
            "トウ"
        ],
        "kunyomi": [],
        "meaning": "すべてをまとめおさめること",
        "parts": [
            {
                "char": "糸",
                "label": "いとへん",
                "note": "糸"
            },
            {
                "char": "充",
                "label": "じゅう",
                "note": "満たす"
            }
        ],
        "partsStory": "糸(糸)を一つにまとめて満たす(充)ように統率することを表す。",
        "compounds": [
            {
                "word": "統一",
                "reading": "とういつ",
                "sentence": "意見を統一する。"
            },
            {
                "word": "伝統",
                "reading": "でんとう",
                "sentence": "伝統をうけつぐ。"
            }
        ],
        "stageId": 6,
        "confusables": [
            29,
            119
        ]
    },
    {
        "id": 146,
        "kanji": "堂",
        "strokes": 11,
        "onyomi": [
            "ドウ"
        ],
        "kunyomi": [],
        "meaning": "立派な建物",
        "parts": [
            {
                "char": "尚",
                "label": "しょう",
                "note": "とうとい"
            },
            {
                "char": "土",
                "label": "つち",
                "note": "土台"
            }
        ],
        "partsStory": "尊い(尚)ものをまつる土台(土)の上の建物を表す。",
        "compounds": [
            {
                "word": "食堂",
                "reading": "しょくどう",
                "sentence": "学校の食堂で食べる。"
            },
            {
                "word": "講堂",
                "reading": "こうどう",
                "sentence": "講堂に集まる。"
            }
        ],
        "stageId": 6,
        "confusables": [
            1,
            104
        ]
    },
    {
        "id": 147,
        "kanji": "銅",
        "strokes": 14,
        "onyomi": [
            "ドウ"
        ],
        "kunyomi": [],
        "meaning": "あかがねという金属",
        "parts": [
            {
                "char": "釒",
                "label": "かねへん",
                "note": "金属"
            },
            {
                "char": "同",
                "label": "どう",
                "note": "同じ"
            }
        ],
        "partsStory": "金属(釒)の中で同じ(同)ように広く使われる銅を表す。",
        "compounds": [
            {
                "word": "銅像",
                "reading": "どうぞう",
                "sentence": "銅像の前で写真をとる。"
            },
            {
                "word": "青銅",
                "reading": "せいどう",
                "sentence": "青銅でできた鐘。"
            }
        ],
        "stageId": 6,
        "confusables": [
            64,
            62
        ]
    },
    {
        "id": 148,
        "kanji": "導",
        "strokes": 15,
        "onyomi": [
            "ドウ"
        ],
        "kunyomi": [
            "みちび(く)"
        ],
        "meaning": "みちびくこと",
        "parts": [
            {
                "char": "道",
                "label": "どう",
                "note": "みち"
            },
            {
                "char": "寸",
                "label": "すん",
                "note": "手"
            }
        ],
        "partsStory": "道(道)を手(寸)で示してみちびくことを表す。",
        "compounds": [
            {
                "word": "指導",
                "reading": "しどう",
                "sentence": "先生が指導する。"
            },
            {
                "word": "導入",
                "reading": "どうにゅう",
                "sentence": "新しい機械を導入する。"
            }
        ],
        "stageId": 6,
        "confusables": [
            137,
            149
        ]
    },
    {
        "id": 149,
        "kanji": "得",
        "strokes": 11,
        "onyomi": [
            "トク"
        ],
        "kunyomi": [
            "え(る)"
        ],
        "meaning": "手に入れること",
        "parts": [
            {
                "char": "彳",
                "label": "ぎょうにんべん",
                "note": "みちをゆく"
            },
            {
                "char": "寸",
                "label": "すん",
                "note": "手"
            }
        ],
        "partsStory": "道を行き(彳)手(寸)で得ることを表す。",
        "compounds": [
            {
                "word": "得意",
                "reading": "とくい",
                "sentence": "算数が得意だ。"
            },
            {
                "word": "説得",
                "reading": "せっとく",
                "sentence": "友達を説得する。"
            }
        ],
        "stageId": 6,
        "confusables": [
            137,
            148
        ]
    },
    {
        "id": 150,
        "kanji": "毒",
        "strokes": 8,
        "onyomi": [
            "ドク"
        ],
        "kunyomi": [],
        "meaning": "体に悪いもの",
        "parts": [
            {
                "char": "主の変形",
                "label": "どく",
                "note": "草の芽"
            },
            {
                "char": "母",
                "label": "はは",
                "note": "はは"
            }
        ],
        "partsStory": "体に害をなすものが根づいて広がる様子から毒を表す。",
        "compounds": [
            {
                "word": "毒物",
                "reading": "どくぶつ",
                "sentence": "毒物を管理する。"
            },
            {
                "word": "中毒",
                "reading": "ちゅうどく",
                "sentence": "食中毒に気をつける。"
            }
        ],
        "stageId": 6,
        "confusables": [
            164,
            151
        ]
    },
    {
        "id": 151,
        "kanji": "独",
        "strokes": 9,
        "onyomi": [
            "ドク"
        ],
        "kunyomi": [
            "ひと(り)"
        ],
        "meaning": "ひとりだけ",
        "parts": [
            {
                "char": "犭",
                "label": "けものへん",
                "note": "けもの"
            },
            {
                "char": "蜀",
                "label": "しょく",
                "note": "一匹"
            }
        ],
        "partsStory": "獣(犭)が一匹だけでいる(蜀)ことから、ひとりを表す。",
        "compounds": [
            {
                "word": "独立",
                "reading": "どくりつ",
                "sentence": "独立して仕事をする。"
            },
            {
                "word": "独身",
                "reading": "どくしん",
                "sentence": "独身の生活を楽しむ。"
            }
        ],
        "stageId": 6,
        "confusables": [
            156,
            131
        ]
    },
    {
        "id": 152,
        "kanji": "任",
        "strokes": 6,
        "onyomi": [
            "ニン"
        ],
        "kunyomi": [
            "まか(せる)"
        ],
        "meaning": "まかせること、つとめ",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "壬",
                "label": "じん",
                "note": "重い荷物"
            }
        ],
        "partsStory": "人(イ)に重い荷物(壬)をまかせることを表す。",
        "compounds": [
            {
                "word": "任務",
                "reading": "にんむ",
                "sentence": "任務を果たす。"
            },
            {
                "word": "責任",
                "reading": "せきにん",
                "sentence": "責任を持って行動する。"
            }
        ],
        "stageId": 6,
        "confusables": [
            96,
            17
        ]
    },
    {
        "id": 153,
        "kanji": "燃",
        "strokes": 16,
        "onyomi": [
            "ネン"
        ],
        "kunyomi": [
            "も(える)"
        ],
        "meaning": "もえること",
        "parts": [
            {
                "char": "火",
                "label": "ひへん",
                "note": "火"
            },
            {
                "char": "然",
                "label": "ぜん",
                "note": "そのまま"
            }
        ],
        "partsStory": "火(火)がそのまま(然)勢いよくもえることを表す。",
        "compounds": [
            {
                "word": "燃料",
                "reading": "ねんりょう",
                "sentence": "車の燃料を入れる。"
            },
            {
                "word": "燃焼",
                "reading": "ねんしょう",
                "sentence": "ガスが燃焼する。"
            }
        ],
        "stageId": 6,
        "confusables": [
            70
        ]
    },
    {
        "id": 154,
        "kanji": "能",
        "strokes": 10,
        "onyomi": [
            "ノウ"
        ],
        "kunyomi": [],
        "meaning": "できること、はたらき",
        "parts": [
            {
                "char": "月",
                "label": "にくづき",
                "note": "からだ"
            },
            {
                "char": "ヒ",
                "label": "ひ",
                "note": "力強い"
            }
        ],
        "partsStory": "力強い体(月)の働きから、能力を表す。",
        "compounds": [
            {
                "word": "能力",
                "reading": "のうりょく",
                "sentence": "能力を高める。"
            },
            {
                "word": "可能",
                "reading": "かのう",
                "sentence": "実現が可能だ。"
            }
        ],
        "stageId": 6,
        "confusables": [
            182,
            160
        ]
    },
    {
        "id": 155,
        "kanji": "破",
        "strokes": 10,
        "onyomi": [
            "ハ"
        ],
        "kunyomi": [
            "やぶ(る)"
        ],
        "meaning": "やぶること",
        "parts": [
            {
                "char": "石",
                "label": "いしへん",
                "note": "石"
            },
            {
                "char": "皮",
                "label": "かわ",
                "note": "かわ"
            }
        ],
        "partsStory": "石(いし)で皮(かわ)をやぶることを表す。",
        "compounds": [
            {
                "word": "破壊",
                "reading": "はかい",
                "sentence": "建物を破壊する。"
            },
            {
                "word": "突破",
                "reading": "とっぱ",
                "sentence": "記録を突破する。"
            }
        ],
        "stageId": 6,
        "confusables": [
            23
        ]
    },
    {
        "id": 156,
        "kanji": "犯",
        "strokes": 5,
        "onyomi": [
            "ハン"
        ],
        "kunyomi": [
            "おか(す)"
        ],
        "meaning": "法をおかすこと",
        "parts": [
            {
                "char": "犭",
                "label": "けものへん",
                "note": "けもの"
            },
            {
                "char": "卩",
                "label": "ふしづくり",
                "note": "ひざまずく人"
            }
        ],
        "partsStory": "獣(犭)がひざまずく人(卩)におそいかかる、法をおかすことを表す。",
        "compounds": [
            {
                "word": "犯罪",
                "reading": "はんざい",
                "sentence": "犯罪を防ぐ。"
            },
            {
                "word": "犯人",
                "reading": "はんにん",
                "sentence": "犯人を追いかける。"
            }
        ],
        "stageId": 6,
        "confusables": [
            151
        ]
    },
    {
        "id": 157,
        "kanji": "判",
        "strokes": 7,
        "onyomi": [
            "ハン"
        ],
        "kunyomi": [],
        "meaning": "はんだんすること",
        "parts": [
            {
                "char": "半",
                "label": "はん",
                "note": "半分"
            },
            {
                "char": "刂",
                "label": "りっとう",
                "note": "刀"
            }
        ],
        "partsStory": "半分(半)に刀(刂)で分けて見きわめる、判断を表す。",
        "compounds": [
            {
                "word": "判断",
                "reading": "はんだん",
                "sentence": "正しく判断する。"
            },
            {
                "word": "裁判",
                "reading": "さいばん",
                "sentence": "裁判が開かれる。"
            }
        ],
        "stageId": 6,
        "confusables": [
            111,
            25
        ]
    },
    {
        "id": 158,
        "kanji": "版",
        "strokes": 8,
        "onyomi": [
            "ハン"
        ],
        "kunyomi": [],
        "meaning": "印刷のもとになる板",
        "parts": [
            {
                "char": "片",
                "label": "かたへん",
                "note": "板切れ"
            },
            {
                "char": "反",
                "label": "はん",
                "note": "反転させる"
            }
        ],
        "partsStory": "板切れ(片)を反転させて(反)刷る、版を表す。",
        "compounds": [
            {
                "word": "出版",
                "reading": "しゅっぱん",
                "sentence": "本を出版する。"
            },
            {
                "word": "版画",
                "reading": "はんが",
                "sentence": "版画をほる。"
            }
        ],
        "stageId": 6,
        "confusables": [
            16
        ]
    },
    {
        "id": 159,
        "kanji": "比",
        "strokes": 4,
        "onyomi": [
            "ヒ"
        ],
        "kunyomi": [
            "くら(べる)"
        ],
        "meaning": "くらべること",
        "parts": [
            {
                "char": "匕",
                "label": "ひ",
                "note": "人"
            },
            {
                "char": "匕",
                "label": "ひ",
                "note": "人"
            }
        ],
        "partsStory": "二人の人が並ぶ形から、くらべることを表す。",
        "compounds": [
            {
                "word": "比較",
                "reading": "ひかく",
                "sentence": "二つの品物を比較する。"
            },
            {
                "word": "比率",
                "reading": "ひりつ",
                "sentence": "男女の比率を調べる。"
            }
        ],
        "stageId": 6,
        "confusables": [
            155,
            163
        ]
    },
    {
        "id": 160,
        "kanji": "肥",
        "strokes": 8,
        "onyomi": [
            "ヒ"
        ],
        "kunyomi": [
            "こ(える)"
        ],
        "meaning": "こえること、こやし",
        "parts": [
            {
                "char": "月",
                "label": "にくづき",
                "note": "からだ"
            },
            {
                "char": "巴",
                "label": "は",
                "note": "まるくふくらむ"
            }
        ],
        "partsStory": "体(月)がまるく(巴)ふくらむように、こえることを表す。",
        "compounds": [
            {
                "word": "肥料",
                "reading": "ひりょう",
                "sentence": "畑に肥料をまく。"
            },
            {
                "word": "肥満",
                "reading": "ひまん",
                "sentence": "肥満に気をつける。"
            }
        ],
        "stageId": 6,
        "confusables": [
            154,
            182
        ]
    },
    {
        "id": 161,
        "kanji": "非",
        "strokes": 8,
        "onyomi": [
            "ヒ"
        ],
        "kunyomi": [],
        "meaning": "正しくない、そうでない",
        "parts": [
            {
                "char": "非",
                "label": "ひ",
                "note": "羽が反対向きに並ぶ形"
            }
        ],
        "partsStory": "羽が左右反対に並ぶ形から、そむく・正しくないことを表す。",
        "compounds": [
            {
                "word": "非常",
                "reading": "ひじょう",
                "sentence": "非常口を確認する。"
            },
            {
                "word": "是非",
                "reading": "ぜひ",
                "sentence": "是非来てください。"
            }
        ],
        "stageId": 6,
        "confusables": [
            76
        ]
    },
    {
        "id": 162,
        "kanji": "費",
        "strokes": 12,
        "onyomi": [
            "ヒ"
        ],
        "kunyomi": [
            "つい(やす)"
        ],
        "meaning": "お金や時間をつかうこと",
        "parts": [
            {
                "char": "弗",
                "label": "ふつ",
                "note": "分かれる"
            },
            {
                "char": "貝",
                "label": "かい",
                "note": "お金"
            }
        ],
        "partsStory": "お金(貝)が分かれて(弗)出ていく、ついやすことを表す。",
        "compounds": [
            {
                "word": "費用",
                "reading": "ひよう",
                "sentence": "旅行の費用を計算する。"
            },
            {
                "word": "消費",
                "reading": "しょうひ",
                "sentence": "電気を消費する。"
            }
        ],
        "stageId": 6,
        "confusables": [
            135,
            80
        ]
    },
    {
        "id": 163,
        "kanji": "備",
        "strokes": 12,
        "onyomi": [
            "ビ"
        ],
        "kunyomi": [
            "そな(える)"
        ],
        "meaning": "そなえること",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "用",
                "label": "よう",
                "note": "用意する"
            }
        ],
        "partsStory": "人(イ)が矢を入れる道具を用意し(用)、そなえることを表す。",
        "compounds": [
            {
                "word": "準備",
                "reading": "じゅんび",
                "sentence": "旅行の準備をする。"
            },
            {
                "word": "設備",
                "reading": "せつび",
                "sentence": "最新の設備をそろえる。"
            }
        ],
        "stageId": 6,
        "confusables": [
            90,
            16
        ]
    },
    {
        "id": 164,
        "kanji": "評",
        "strokes": 12,
        "onyomi": [
            "ヒョウ"
        ],
        "kunyomi": [],
        "meaning": "よい悪いを決めること",
        "parts": [
            {
                "char": "言",
                "label": "ごんべん",
                "note": "ことば"
            },
            {
                "char": "平",
                "label": "へい",
                "note": "平等に"
            }
        ],
        "partsStory": "言葉(言)で平等(平)に良し悪しを決める、評することを表す。",
        "compounds": [
            {
                "word": "評価",
                "reading": "ひょうか",
                "sentence": "作品を評価する。"
            },
            {
                "word": "批評",
                "reading": "ひひょう",
                "sentence": "映画を批評する。"
            }
        ],
        "stageId": 6,
        "confusables": [
            121,
            91
        ]
    },
    {
        "id": 165,
        "kanji": "貧",
        "strokes": 11,
        "onyomi": [
            "ヒン"
        ],
        "kunyomi": [
            "まず(しい)"
        ],
        "meaning": "まずしいこと",
        "parts": [
            {
                "char": "分",
                "label": "ぶん",
                "note": "分かれる"
            },
            {
                "char": "貝",
                "label": "かい",
                "note": "お金"
            }
        ],
        "partsStory": "お金(貝)が分かれて(分)少なくなり、まずしいことを表す。",
        "compounds": [
            {
                "word": "貧困",
                "reading": "ひんこん",
                "sentence": "貧困について学ぶ。"
            },
            {
                "word": "貧富",
                "reading": "ひんぷ",
                "sentence": "貧富の差が広がる。"
            }
        ],
        "stageId": 6,
        "confusables": [
            180,
            129
        ]
    },
    {
        "id": 166,
        "kanji": "布",
        "strokes": 5,
        "onyomi": [
            "フ"
        ],
        "kunyomi": [
            "ぬの"
        ],
        "meaning": "ぬの",
        "parts": [
            {
                "char": "巾",
                "label": "はば",
                "note": "ぬの"
            },
            {
                "char": "父の変形",
                "label": "ふ",
                "note": "手で広げる"
            }
        ],
        "partsStory": "手で布(巾)を広げる様子を表す。",
        "compounds": [
            {
                "word": "毛布",
                "reading": "もうふ",
                "sentence": "あたたかい毛布をかける。"
            },
            {
                "word": "布地",
                "reading": "ぬのじ",
                "sentence": "服の布地を選ぶ。"
            }
        ],
        "stageId": 6,
        "confusables": [
            107
        ]
    },
    {
        "id": 167,
        "kanji": "婦",
        "strokes": 11,
        "onyomi": [
            "フ"
        ],
        "kunyomi": [],
        "meaning": "女の人、つま",
        "parts": [
            {
                "char": "女",
                "label": "おんなへん",
                "note": "おんな"
            },
            {
                "char": "帚",
                "label": "そう",
                "note": "ほうき"
            }
        ],
        "partsStory": "女(女)がほうき(帚)を持って家事をする様子を表す。",
        "compounds": [
            {
                "word": "夫婦",
                "reading": "ふうふ",
                "sentence": "夫婦で旅行に行く。"
            },
            {
                "word": "主婦",
                "reading": "しゅふ",
                "sentence": "主婦として働く。"
            }
        ],
        "stageId": 6,
        "confusables": [
            71
        ]
    },
    {
        "id": 168,
        "kanji": "武",
        "strokes": 8,
        "onyomi": [
            "ブ"
        ],
        "kunyomi": [],
        "meaning": "武力、武士",
        "parts": [
            {
                "char": "止",
                "label": "とめる",
                "note": "止める"
            },
            {
                "char": "戈",
                "label": "ほこ",
                "note": "矛"
            }
        ],
        "partsStory": "矛(戈)を止める(止)ことこそ本当の武であるという意味を表す。",
        "compounds": [
            {
                "word": "武士",
                "reading": "ぶし",
                "sentence": "武士の時代を学ぶ。"
            },
            {
                "word": "武器",
                "reading": "ぶき",
                "sentence": "武器を持たない。"
            }
        ],
        "stageId": 6,
        "confusables": [
            165,
            152
        ]
    },
    {
        "id": 169,
        "kanji": "復",
        "strokes": 12,
        "onyomi": [
            "フク"
        ],
        "kunyomi": [],
        "meaning": "もとにもどること",
        "parts": [
            {
                "char": "彳",
                "label": "ぎょうにんべん",
                "note": "みちをゆく"
            },
            {
                "char": "复",
                "label": "ふく",
                "note": "くり返す"
            }
        ],
        "partsStory": "道を行き(彳)、くり返して(复)もとにもどることを表す。",
        "compounds": [
            {
                "word": "回復",
                "reading": "かいふく",
                "sentence": "体力が回復する。"
            },
            {
                "word": "復習",
                "reading": "ふくしゅう",
                "sentence": "授業の復習をする。"
            }
        ],
        "stageId": 7,
        "confusables": [
            13,
            149
        ]
    },
    {
        "id": 170,
        "kanji": "複",
        "strokes": 14,
        "onyomi": [
            "フク"
        ],
        "kunyomi": [],
        "meaning": "かさなること、いくつもあること",
        "parts": [
            {
                "char": "衤",
                "label": "ころもへん",
                "note": "衣"
            },
            {
                "char": "复",
                "label": "ふく",
                "note": "くり返す"
            }
        ],
        "partsStory": "衣(衤)をくり返し(复)重ねて着る様子から、複数を表す。",
        "compounds": [
            {
                "word": "複雑",
                "reading": "ふくざつ",
                "sentence": "複雑な問題を解く。"
            },
            {
                "word": "複数",
                "reading": "ふくすう",
                "sentence": "複数の意見が出る。"
            }
        ],
        "stageId": 7,
        "confusables": [
            169
        ]
    },
    {
        "id": 171,
        "kanji": "仏",
        "strokes": 4,
        "onyomi": [
            "ブツ"
        ],
        "kunyomi": [
            "ほとけ"
        ],
        "meaning": "ほとけ",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "ム",
                "label": "む",
                "note": "人とはちがう"
            }
        ],
        "partsStory": "人(イ)がふつうの人とはちがう(ム)すがた、ほとけを表す。",
        "compounds": [
            {
                "word": "仏像",
                "reading": "ぶつぞう",
                "sentence": "お寺の仏像を見る。"
            },
            {
                "word": "大仏",
                "reading": "だいぶつ",
                "sentence": "奈良の大仏を見学する。"
            }
        ],
        "stageId": 7,
        "confusables": [
            152,
            56
        ]
    },
    {
        "id": 172,
        "kanji": "粉",
        "strokes": 10,
        "onyomi": [
            "フン"
        ],
        "kunyomi": [
            "こな"
        ],
        "meaning": "こな",
        "parts": [
            {
                "char": "米",
                "label": "こめへん",
                "note": "米"
            },
            {
                "char": "分",
                "label": "ぶん",
                "note": "分ける"
            }
        ],
        "partsStory": "米(米)を分けて(分)細かくした、こなを表す。",
        "compounds": [
            {
                "word": "粉末",
                "reading": "ふんまつ",
                "sentence": "薬を粉末にする。"
            },
            {
                "word": "花粉",
                "reading": "かふん",
                "sentence": "花粉がとぶ季節。"
            }
        ],
        "stageId": 7,
        "confusables": [
            165,
            115
        ]
    },
    {
        "id": 173,
        "kanji": "編",
        "strokes": 15,
        "onyomi": [
            "ヘン"
        ],
        "kunyomi": [
            "あ(む)"
        ],
        "meaning": "あむこと、まとめること",
        "parts": [
            {
                "char": "糸",
                "label": "いとへん",
                "note": "糸"
            },
            {
                "char": "扁",
                "label": "へん",
                "note": "うすく平ら"
            }
        ],
        "partsStory": "糸(糸)をうすく平ら(扁)にあんでいくことを表す。",
        "compounds": [
            {
                "word": "編集",
                "reading": "へんしゅう",
                "sentence": "雑誌を編集する。"
            },
            {
                "word": "編成",
                "reading": "へんせい",
                "sentence": "チームを編成する。"
            }
        ],
        "stageId": 7,
        "confusables": [
            124,
            186
        ]
    },
    {
        "id": 174,
        "kanji": "弁",
        "strokes": 5,
        "onyomi": [
            "ベン"
        ],
        "kunyomi": [],
        "meaning": "はなすこと、区別すること",
        "parts": [
            {
                "char": "厶",
                "label": "む",
                "note": "わける"
            },
            {
                "char": "廾",
                "label": "きょう",
                "note": "両手"
            }
        ],
        "partsStory": "両手(廾)で物事を分け、言葉で述べる弁を表す。",
        "compounds": [
            {
                "word": "弁当",
                "reading": "べんとう",
                "sentence": "お弁当を食べる。"
            },
            {
                "word": "弁護士",
                "reading": "べんごし",
                "sentence": "弁護士に相談する。"
            }
        ],
        "stageId": 7,
        "confusables": [
            183,
            181
        ]
    },
    {
        "id": 175,
        "kanji": "保",
        "strokes": 9,
        "onyomi": [
            "ホ"
        ],
        "kunyomi": [
            "たも(つ)"
        ],
        "meaning": "たもつこと、まもること",
        "parts": [
            {
                "char": "イ",
                "label": "にんべん",
                "note": "ひと"
            },
            {
                "char": "呆",
                "label": "ほう",
                "note": "赤ちゃん"
            }
        ],
        "partsStory": "人(イ)が赤ちゃん(呆)を大切にたもち守ることを表す。",
        "compounds": [
            {
                "word": "保護",
                "reading": "ほご",
                "sentence": "動物を保護する。"
            },
            {
                "word": "保健",
                "reading": "ほけん",
                "sentence": "保健室で休む。"
            }
        ],
        "stageId": 7,
        "confusables": [
            96,
            152
        ]
    },
    {
        "id": 176,
        "kanji": "墓",
        "strokes": 13,
        "onyomi": [
            "ボ"
        ],
        "kunyomi": [
            "はか"
        ],
        "meaning": "はか",
        "parts": [
            {
                "char": "莫",
                "label": "ばく",
                "note": "草に隠れる"
            },
            {
                "char": "土",
                "label": "つち",
                "note": "土"
            }
        ],
        "partsStory": "日が草(莫)に隠れるように、土(土)の中に眠る場所、墓を表す。",
        "compounds": [
            {
                "word": "墓地",
                "reading": "ぼち",
                "sentence": "墓地をおまいりする。"
            },
            {
                "word": "お墓",
                "reading": "おはか",
                "sentence": "お墓参りに行く。"
            }
        ],
        "stageId": 7,
        "confusables": [
            1,
            74
        ]
    },
    {
        "id": 177,
        "kanji": "報",
        "strokes": 12,
        "onyomi": [
            "ホウ"
        ],
        "kunyomi": [
            "むく(いる)"
        ],
        "meaning": "知らせること、むくいること",
        "parts": [
            {
                "char": "幸",
                "label": "こう",
                "note": "幸せ"
            },
            {
                "char": "又",
                "label": "また",
                "note": "手"
            }
        ],
        "partsStory": "幸せ(幸)を手(又)で伝え知らせることを表す。",
        "compounds": [
            {
                "word": "報告",
                "reading": "ほうこく",
                "sentence": "結果を報告する。"
            },
            {
                "word": "情報",
                "reading": "じょうほう",
                "sentence": "最新の情報を得る。"
            }
        ],
        "stageId": 7,
        "confusables": [
            82
        ]
    },
    {
        "id": 178,
        "kanji": "豊",
        "strokes": 13,
        "onyomi": [
            "ホウ"
        ],
        "kunyomi": [
            "ゆた(か)"
        ],
        "meaning": "ゆたかなこと",
        "parts": [
            {
                "char": "曲",
                "label": "きょく",
                "note": "高く盛る"
            },
            {
                "char": "豆",
                "label": "たいこの形",
                "note": "たいこ"
            }
        ],
        "partsStory": "たいこ(豆)に穀物が高く盛られる様子から、豊かさを表す。",
        "compounds": [
            {
                "word": "豊作",
                "reading": "ほうさく",
                "sentence": "お米が豊作だ。"
            },
            {
                "word": "豊富",
                "reading": "ほうふ",
                "sentence": "豊富な知識を持つ。"
            }
        ],
        "stageId": 7,
        "confusables": [
            33
        ]
    },
    {
        "id": 179,
        "kanji": "防",
        "strokes": 7,
        "onyomi": [
            "ボウ"
        ],
        "kunyomi": [
            "ふせ(ぐ)"
        ],
        "meaning": "ふせぐこと",
        "parts": [
            {
                "char": "阝",
                "label": "こざとへん",
                "note": "土手"
            },
            {
                "char": "方",
                "label": "ほう",
                "note": "方向"
            }
        ],
        "partsStory": "土手(阝)をある方向(方)に築いて、ふせぐことを表す。",
        "compounds": [
            {
                "word": "防止",
                "reading": "ぼうし",
                "sentence": "事故を防止する。"
            },
            {
                "word": "消防",
                "reading": "しょうぼう",
                "sentence": "消防車が出動する。"
            }
        ],
        "stageId": 7,
        "confusables": [
            73,
            50
        ]
    },
    {
        "id": 180,
        "kanji": "貿",
        "strokes": 12,
        "onyomi": [
            "ボウ"
        ],
        "kunyomi": [],
        "meaning": "品物を交換すること",
        "parts": [
            {
                "char": "卯",
                "label": "ぼう",
                "note": "交換"
            },
            {
                "char": "貝",
                "label": "かい",
                "note": "お金"
            }
        ],
        "partsStory": "お金(貝)を使って品物を交換する(卯)、貿易を表す。",
        "compounds": [
            {
                "word": "貿易",
                "reading": "ぼうえき",
                "sentence": "外国と貿易する。"
            },
            {
                "word": "貿易風",
                "reading": "ぼうえきふう",
                "sentence": "貿易風が吹く。"
            }
        ],
        "stageId": 7,
        "confusables": [
            140,
            129
        ]
    },
    {
        "id": 181,
        "kanji": "暴",
        "strokes": 15,
        "onyomi": [
            "ボウ"
        ],
        "kunyomi": [
            "あば(れる)"
        ],
        "meaning": "荒々しいこと",
        "parts": [
            {
                "char": "日",
                "label": "ひ",
                "note": "太陽"
            },
            {
                "char": "共",
                "label": "きょう",
                "note": "共に"
            }
        ],
        "partsStory": "日(太陽)の下で勢いが共に(共)荒々しく出ることを表す。",
        "compounds": [
            {
                "word": "暴風",
                "reading": "ぼうふう",
                "sentence": "暴風に気をつける。"
            },
            {
                "word": "乱暴",
                "reading": "らんぼう",
                "sentence": "乱暴な言葉を使わない。"
            }
        ],
        "stageId": 7,
        "confusables": [
            38,
            8
        ]
    },
    {
        "id": 182,
        "kanji": "脈",
        "strokes": 10,
        "onyomi": [
            "ミャク"
        ],
        "kunyomi": [],
        "meaning": "すじ、血管",
        "parts": [
            {
                "char": "月",
                "label": "にくづき",
                "note": "からだ"
            },
            {
                "char": "永の変形",
                "label": "みゃく",
                "note": "長く流れる"
            }
        ],
        "partsStory": "体(月)の中を長く流れる血のすじ、脈を表す。",
        "compounds": [
            {
                "word": "山脈",
                "reading": "さんみゃく",
                "sentence": "高い山脈を見る。"
            },
            {
                "word": "脈拍",
                "reading": "みゃくはく",
                "sentence": "脈拍を測る。"
            }
        ],
        "stageId": 7,
        "confusables": [
            154,
            160
        ]
    },
    {
        "id": 183,
        "kanji": "務",
        "strokes": 11,
        "onyomi": [
            "ム"
        ],
        "kunyomi": [
            "つと(める)"
        ],
        "meaning": "つとめ、仕事",
        "parts": [
            {
                "char": "矛",
                "label": "ほこ",
                "note": "矛"
            },
            {
                "char": "攵",
                "label": "ぼくづくり",
                "note": "力をつくす"
            }
        ],
        "partsStory": "矛(ほこ)を持ち力を尽くして(攵)つとめることを表す。",
        "compounds": [
            {
                "word": "義務",
                "reading": "ぎむ",
                "sentence": "納税は国民の義務だ。"
            },
            {
                "word": "事務",
                "reading": "じむ",
                "sentence": "事務の仕事をする。"
            }
        ],
        "stageId": 7,
        "confusables": [
            39,
            113
        ]
    },
    {
        "id": 184,
        "kanji": "夢",
        "strokes": 13,
        "onyomi": [
            "ム"
        ],
        "kunyomi": [
            "ゆめ"
        ],
        "meaning": "ゆめ",
        "parts": [
            {
                "char": "艹",
                "label": "くさかんむり",
                "note": "草"
            },
            {
                "char": "夕",
                "label": "ゆう",
                "note": "夜"
            }
        ],
        "partsStory": "夜(夕)に見る、ぼんやりとした景色、ゆめを表す。",
        "compounds": [
            {
                "word": "夢中",
                "reading": "むちゅう",
                "sentence": "読書に夢中になる。"
            },
            {
                "word": "初夢",
                "reading": "はつゆめ",
                "sentence": "お正月に初夢を見る。"
            }
        ],
        "stageId": 7,
        "confusables": [
            192,
            170
        ]
    },
    {
        "id": 185,
        "kanji": "迷",
        "strokes": 9,
        "onyomi": [
            "メイ"
        ],
        "kunyomi": [
            "まよ(う)"
        ],
        "meaning": "まようこと",
        "parts": [
            {
                "char": "辶",
                "label": "しんにょう",
                "note": "すすむ"
            },
            {
                "char": "米",
                "label": "べい",
                "note": "散らばる"
            }
        ],
        "partsStory": "道を進む(辶)途中、米粒のように散らばった道でまよう様子を表す。",
        "compounds": [
            {
                "word": "迷路",
                "reading": "めいろ",
                "sentence": "迷路であそぶ。"
            },
            {
                "word": "迷信",
                "reading": "めいしん",
                "sentence": "古い迷信を信じない。"
            }
        ],
        "stageId": 7,
        "confusables": [
            172,
            19
        ]
    },
    {
        "id": 186,
        "kanji": "綿",
        "strokes": 14,
        "onyomi": [
            "メン"
        ],
        "kunyomi": [
            "わた"
        ],
        "meaning": "わた、木綿",
        "parts": [
            {
                "char": "糸",
                "label": "いとへん",
                "note": "糸"
            },
            {
                "char": "白",
                "label": "しろ",
                "note": "白い布"
            }
        ],
        "partsStory": "糸(糸)と白い布(白)からできた、わたを表す。",
        "compounds": [
            {
                "word": "綿花",
                "reading": "めんか",
                "sentence": "綿花を栽培する。"
            },
            {
                "word": "木綿",
                "reading": "もめん",
                "sentence": "木綿のシャツを着る。"
            }
        ],
        "stageId": 7,
        "confusables": [
            119,
            173
        ]
    },
    {
        "id": 187,
        "kanji": "輸",
        "strokes": 16,
        "onyomi": [
            "ユ"
        ],
        "kunyomi": [],
        "meaning": "物を運ぶこと",
        "parts": [
            {
                "char": "車",
                "label": "くるまへん",
                "note": "車"
            },
            {
                "char": "兪",
                "label": "ゆ",
                "note": "すいすい進む"
            }
        ],
        "partsStory": "車(車)に乗せてすいすい(兪)運ぶことを表す。",
        "compounds": [
            {
                "word": "輸入",
                "reading": "ゆにゅう",
                "sentence": "外国から輸入する。"
            },
            {
                "word": "輸出",
                "reading": "ゆしゅつ",
                "sentence": "製品を輸出する。"
            }
        ],
        "stageId": 7,
        "confusables": [
            192,
            171
        ]
    },
    {
        "id": 188,
        "kanji": "余",
        "strokes": 7,
        "onyomi": [
            "ヨ"
        ],
        "kunyomi": [
            "あま(る)"
        ],
        "meaning": "あまること",
        "parts": [
            {
                "char": "人",
                "label": "ひと",
                "note": "やね"
            },
            {
                "char": "二",
                "label": "に",
                "note": "ゆとり"
            }
        ],
        "partsStory": "屋根の下にゆとりがあり、あまることを表す。",
        "compounds": [
            {
                "word": "余分",
                "reading": "よぶん",
                "sentence": "余分に用意する。"
            },
            {
                "word": "余裕",
                "reading": "よゆう",
                "sentence": "時間に余裕を持つ。"
            }
        ],
        "stageId": 7,
        "confusables": [
            93,
            89
        ]
    },
    {
        "id": 189,
        "kanji": "容",
        "strokes": 10,
        "onyomi": [
            "ヨウ"
        ],
        "kunyomi": [],
        "meaning": "中身、ゆるすこと",
        "parts": [
            {
                "char": "宀",
                "label": "うかんむり",
                "note": "いえ"
            },
            {
                "char": "谷",
                "label": "たに",
                "note": "広く受け入れる"
            }
        ],
        "partsStory": "家(宀)が谷(たに)のように広く中身を受け入れることを表す。",
        "compounds": [
            {
                "word": "内容",
                "reading": "ないよう",
                "sentence": "手紙の内容を読む。"
            },
            {
                "word": "容器",
                "reading": "ようき",
                "sentence": "容器に入れて保存する。"
            }
        ],
        "stageId": 7,
        "confusables": [
            31
        ]
    },
    {
        "id": 190,
        "kanji": "略",
        "strokes": 11,
        "onyomi": [
            "リャク"
        ],
        "kunyomi": [],
        "meaning": "はぶくこと、あらまし",
        "parts": [
            {
                "char": "田",
                "label": "た",
                "note": "田"
            },
            {
                "char": "各",
                "label": "かく",
                "note": "それぞれ"
            }
        ],
        "partsStory": "田をそれぞれ(各)に分けて、要点をはぶきまとめることを表す。",
        "compounds": [
            {
                "word": "省略",
                "reading": "しょうりゃく",
                "sentence": "説明を省略する。"
            },
            {
                "word": "略図",
                "reading": "りゃくず",
                "sentence": "道の略図をかく。"
            }
        ],
        "stageId": 7,
        "confusables": [
            191,
            22
        ]
    },
    {
        "id": 191,
        "kanji": "留",
        "strokes": 10,
        "onyomi": [
            "リュウ"
        ],
        "kunyomi": [
            "と(める)"
        ],
        "meaning": "とどまること",
        "parts": [
            {
                "char": "卯",
                "label": "ぼう",
                "note": "とどめる"
            },
            {
                "char": "田",
                "label": "た",
                "note": "田"
            }
        ],
        "partsStory": "田(田)に水をとどめる(卯)ように、とどまることを表す。",
        "compounds": [
            {
                "word": "留学",
                "reading": "りゅうがく",
                "sentence": "外国に留学する。"
            },
            {
                "word": "留守",
                "reading": "るす",
                "sentence": "家を留守にする。"
            }
        ],
        "stageId": 7,
        "confusables": [
            190,
            180
        ]
    },
    {
        "id": 192,
        "kanji": "領",
        "strokes": 14,
        "onyomi": [
            "リョウ"
        ],
        "kunyomi": [],
        "meaning": "治める土地、大切な部分",
        "parts": [
            {
                "char": "令",
                "label": "れい",
                "note": "命令"
            },
            {
                "char": "頁",
                "label": "おおがい",
                "note": "頭"
            }
        ],
        "partsStory": "命令(令)を出し人々の頭(頁)を治める、領地を表す。",
        "compounds": [
            {
                "word": "領土",
                "reading": "りょうど",
                "sentence": "領土について学ぶ。"
            },
            {
                "word": "大統領",
                "reading": "だいとうりょう",
                "sentence": "大統領が演説する。"
            }
        ],
        "stageId": 7,
        "confusables": [
            24
        ]
    },
    {
        "id": 193,
        "kanji": "歴",
        "strokes": 14,
        "onyomi": [
            "レキ"
        ],
        "kunyomi": [],
        "meaning": "つぎつぎと過ぎてきたこと",
        "parts": [
            {
                "char": "厂",
                "label": "がんだれ",
                "note": "がけ"
            },
            {
                "char": "秝",
                "label": "れき",
                "note": "稲がならぶ"
            }
        ],
        "partsStory": "がけ(厂)のそばを稲(秝)が次々に通り過ぎるように、歴史を表す。",
        "compounds": [
            {
                "word": "歴史",
                "reading": "れきし",
                "sentence": "歴史の本を読む。"
            },
            {
                "word": "経歴",
                "reading": "けいれき",
                "sentence": "経歴を書類に書く。"
            }
        ],
        "stageId": 7,
        "confusables": [
            59,
            1
        ]
    }
];

const KANJI_BY_ID = {};
KANJI_LIST.forEach(k => { KANJI_BY_ID[k.id] = k; });

const STAGES = [
    {
        "id": 0,
        "name": "うつりゆく大地",
        "icon": "🌪️",
        "enemy": {
            "name": "変化のもののけ",
            "sprite": "🌪️",
            "maxHp": 480
        },
        "color": "#3498db",
        "description": "自然や社会がうつり変わるようすを表す漢字が眠るエリア。",
        "kanjiIds": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24
        ]
    },
    {
        "id": 1,
        "name": "まなびの学び舎",
        "icon": "📚",
        "enemy": {
            "name": "規則のふくろう",
            "sprite": "🦉",
            "maxHp": 480
        },
        "color": "#9b59b6",
        "description": "学ぶこと・きまりに関する漢字が集まるエリア。",
        "kanjiIds": [
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48
        ]
    },
    {
        "id": 2,
        "name": "くらしの街かど",
        "icon": "🏘️",
        "enemy": {
            "name": "制度のゴーレム",
            "sprite": "🗿",
            "maxHp": 480
        },
        "color": "#e8871a",
        "description": "くらしや制度、しくみに関する漢字が集まるエリア。",
        "kanjiIds": [
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72
        ]
    },
    {
        "id": 3,
        "name": "こころと歴史の遺跡",
        "icon": "⛩️",
        "enemy": {
            "name": "記憶の亡霊",
            "sprite": "👻",
            "maxHp": 480
        },
        "color": "#8e44ad",
        "description": "こころの動きや歴史に関する漢字が集まるエリア。",
        "kanjiIds": [
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96
        ]
    },
    {
        "id": 4,
        "name": "せいどの宮殿",
        "icon": "🏛️",
        "enemy": {
            "name": "法典の番人",
            "sprite": "🗿",
            "maxHp": 480
        },
        "color": "#2ecc71",
        "description": "政治やせいど、しごとに関する漢字が集まるエリア。",
        "kanjiIds": [
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120
        ]
    },
    {
        "id": 5,
        "name": "ものづくりの工房",
        "icon": "⚙️",
        "enemy": {
            "name": "建造マシーン",
            "sprite": "🤖",
            "maxHp": 480
        },
        "color": "#e67e22",
        "description": "ものを作り、たくわえることに関する漢字が集まるエリア。",
        "kanjiIds": [
            121,
            122,
            123,
            124,
            125,
            126,
            127,
            128,
            129,
            130,
            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140,
            141,
            142,
            143,
            144
        ]
    },
    {
        "id": 6,
        "name": "ちからの山脈",
        "icon": "🔥",
        "enemy": {
            "name": "エネルギー獣",
            "sprite": "🐉",
            "maxHp": 480
        },
        "color": "#e74c3c",
        "description": "ちからや性質、はたらきに関する漢字が集まるエリア。",
        "kanjiIds": [
            145,
            146,
            147,
            148,
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156,
            157,
            158,
            159,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168
        ]
    },
    {
        "id": 7,
        "name": "みらいと貿易の港",
        "icon": "⚓",
        "enemy": {
            "name": "輸送クラーケン",
            "sprite": "🐙",
            "maxHp": 500
        },
        "color": "#1abc9c",
        "description": "みらいや貿易、くらしのゆたかさに関する漢字が集まるエリア。",
        "kanjiIds": [
            169,
            170,
            171,
            172,
            173,
            174,
            175,
            176,
            177,
            178,
            179,
            180,
            181,
            182,
            183,
            184,
            185,
            186,
            187,
            188,
            189,
            190,
            191,
            192,
            193
        ]
    },
    {
        "id": 8,
        "name": "総まとめの試練",
        "icon": "👑",
        "enemy": {
            "name": "五年漢字の大魔王",
            "sprite": "🐉",
            "maxHp": 260
        },
        "color": "#f7d774",
        "description": "新出漢字はなし。これまで学んだ漢字の中から、まぎらわしい字だけを集めた最終試練。",
        "kanjiIds": []
    }
];
