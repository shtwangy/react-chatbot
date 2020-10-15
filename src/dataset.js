const defaultDataset = {
    "init": {
        answers: [
            {content: "買取を依頼したい", nextId: "sell"},
            {content: "リペアを依頼したい", nextId: "repair"},
            {content: "電話で相談したい", nextId: "tel"},
            {content: "楽器を探したい", nextId: "https://www.digimart.net/"}
        ],
        question: "こんにちは！Magic Tone Guitarsへようこそ🎸ご用件はなんですか？",
    },
    "sell": {
        answers: [
            {content: "店舗買取を依頼したい", nextId: "store"},
            {content: "宅配買取を依頼したい", nextId: "delivery"},
            {content: "出張買取を依頼したい", nextId: "business_trip"},
            {content: "まずは電話で相談したい", nextId: "tel"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "当店では専門スタッフがしっかり丁寧に査定・鑑定を行います💁‍3つの買取プランを用意しています。",
    },
    "store": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "店舗買取ですね。コチラからお問い合わせできます。",
    },
    "delivery": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "宅配買取ですね。コチラからお問い合わせできます。",
    },
    "business_trip": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "出張買取ですね。コチラからお問い合わせできます。",
    },
    "tel": {
        answers: [
            {content: "0120-xxx-xxx", nextId: "tel"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "こちらの電話番号にご相談ください",
    },
    "repair": {
        answers: [
            {content: "ギター・ベースのリペア", nextId: "guitar_bass"},
            {content: "管楽器のリペア", nextId: "wind_instrument"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "楽器の能力・可能性を最大限尊重したリペアを実施いたします🔧",
    },
    "guitar_bass": {
        answers: [
            {content: "どんなメンテナンスができるの？", nextId: "maintenance"},
            {content: "リペア料金を確認したい", nextId: "repair_fee"},
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ネック矯正やフレットなどの交換、電気系統の悩み事など、プロのリペアマンにお任せください！",
    },
    "wind_instrument": {
        answers: [
            {content: "リペア料金を確認したい", nextId: "repair_fee"},
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "管体歪みのチェックやタンポ交換、サビやバネの修理など何でもご相談ください！",
    }
}

export default defaultDataset
