var answers=[];

let questions = [
    {
        "question":"你做事是一個值得信賴的人嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你個性溫和嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你有活力嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你善解人意嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你獨立嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你受人愛戴嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你做事認真且正直嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你富有同情心嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你有說服力嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你大膽嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你精確嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你適應能力強嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你組織能力好嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你是否積極主動？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你害羞嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你強勢嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你鎮定嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你勇於學習嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你反應快嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你外向嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你注意細節嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你愛說話嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你的協調能力好嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你勤勞嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你慷慨嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你小心翼翼嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你令人愉快嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你傳統嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你親切嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"你工作足夠有效率嗎？",
        "answers":[
            ["5分",5],
            ["4分",4],
            ["3分",3],
            ["2分",2],
            ["1分",1],
        ]
    },
    {
        "question":"測試結果"
    },
];

let finalAnswers=[{
    "answers":[
        ["老虎型","有自信，夠權威，決斷力高，競爭性強，胸懷大志，喜歡評估。"],
        ["孔雀型","很熱心，夠樂觀，口才流暢，好交朋友，風度翩翩，誠懇熱心。"],
        ["無尾熊型","很穩定，夠敦厚，溫和規律，不好衝突。"],
        ["貓頭鷹型","很傳統，注重細節，條理分明，責任感強，重視紀律"],
        ["變色龍型","善於在工作中調整自己的角色去適應環境，具有很好的溝通能力。"]
    ]
}];