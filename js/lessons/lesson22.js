LESSONS.push({
    id: 22,
    part: 1,
    titleTh: 'เจาะลึกการฟัง: ประโยคซ้อนปฏิเสธ (Double Negatives & Tricky Phrasing)',
    titleEn: 'Advanced Listening: Double Negatives & Tricky Phrasing',
    icon: '🪤',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: กับดักประโยคปฏิเสธ',
            contentTh: 'ข้อสอบมักจะหลอกเราด้วยประโยคที่มีคำปฏิเสธซ้อนกัน (Double Negatives) เช่น "not uncommon" ซึ่งแปลว่า common (เป็นเรื่องปกติ) การฟังประโยคเหล่านี้ต้องมีสติและแปลความหมายในหัวให้ทัน',
            contentEn: 'The exam often uses tricky phrasing, particularly double negatives like "not unusual" or "hardly ever fail." Two negative words cancel each other out, making the overall meaning positive. You must stay alert and decode the true meaning quickly.',
            bullets: [
                'Negative + Negative = Positive: เช่น "I don\'t disagree" = I agree (ฉันเห็นด้วย)',
                'Negative Adverbs: คำอย่าง hardly, barely, scarcely, rarely มีความหมายเชิงปฏิเสธ (แทบจะไม่) ห้ามแปลเป็นบอกเล่าเด็ดขาด!',
                'ระวัง prefix ปฏิเสธ: เช่น un-, in-, dis-, non- (not unlikely = likely)'
            ]
        },
        {
            type: 'grammar',
            title: 'ตัวอย่างการหลอกด้วย Double Negatives',
            contentTh: 'ลองฟังตัวอย่างประโยคเหล่านี้ และสังเกตการกลับความหมายจากปฏิเสธเป็นบอกเล่า:',
            contentEn: 'Listen to these examples and notice how the meaning flips from negative to positive.',
            rules: [
                {
                    formula: 'Not + Un-',
                    explanation: 'การใช้ Not คู่กับคำที่มี prefix ปฏิเสธ ทำให้ความหมายกลายเป็นบวก',
                    examples: [
                        { correct: 'It is not uncommon to see snow here in April.', incorrect: 'It is very rare to see snow here in April.', why: 'not uncommon แปลว่า เป็นเรื่องปกติ (common) ดังนั้นจึงไม่ใช่เรื่องหายาก' }
                    ]
                },
                {
                    formula: 'Hardly / Barely + Without',
                    explanation: 'คำวิเศษณ์เชิงปฏิเสธชนกับ Without',
                    examples: [
                        { correct: 'He hardly ever goes to the gym without taking his water bottle.', incorrect: 'He rarely takes his water bottle to the gym.', why: 'hardly...without แปลว่า แทบจะไม่เคยไปยิมโดยไม่พกขวดน้ำ = พกขวดน้ำไปยิมเสมอ' }
                    ]
                },
                {
                    formula: 'Not + Dislike / Disagree',
                    explanation: 'การใช้ Not กับคำกริยาเชิงลบ',
                    examples: [
                        { correct: 'I don\'t disagree with your proposal.', incorrect: 'I am against your proposal.', why: 'don\'t disagree แปลว่า เห็นด้วย (agree)' }
                    ]
                }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟัง: สับขาหลอกปฏิเสธ (10 ข้อ)',
            questions: [
                {
                    audio: 'Man: Did you think the movie was boring?\nWoman: Well, it wasn\'t uninteresting. The plot had some good twists.\nQuestion: What does the woman mean?',
                    transcript: 'Man: Did you think the movie was boring?\nWoman: Well, it wasn\'t uninteresting. The plot had some good twists.\nQuestion: What does the woman mean?',
                    question: 'What does the woman mean?',
                    questionTh: 'ผู้หญิงหมายความว่าอย่างไร?',
                    choices: [
                        'She found the movie completely boring.',
                        'She thought the movie was somewhat interesting.',
                        'She did not watch the movie.',
                        'She fell asleep because it was uninteresting.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงพูดว่า "wasn\'t uninteresting" (ไม่ใช่ว่าไม่น่าสนใจ) ซึ่งก็คือ น่าสนใจระดับหนึ่ง (interesting)',
                    explanationEn: 'The double negative "wasn\'t uninteresting" means that she actually found it interesting.'
                },
                {
                    audio: 'Woman: Is John going to fail the math test again?\nMan: He has been studying every night. It\'s not impossible that he will pass.\nQuestion: What does the man think about John?',
                    transcript: 'Woman: Is John going to fail the math test again?\nMan: He has been studying every night. It\'s not impossible that he will pass.\nQuestion: What does the man think about John?',
                    question: 'What does the man think about John?',
                    questionTh: 'ผู้ชายคิดอย่างไรเกี่ยวกับจอห์น?',
                    choices: [
                        'John will definitely fail the test.',
                        'It is impossible for John to pass.',
                        'There is a chance that John will pass.',
                        'John is taking the test right now.'
                    ],
                    answer: 2,
                    explanationTh: '"not impossible" (ไม่ใช่ว่าจะเป็นไปไม่ได้) แปลว่า เป็นไปได้ (possible) ที่จอห์นจะสอบผ่าน',
                    explanationEn: '"Not impossible" means that it is possible for him to pass.'
                },
                {
                    audio: 'Man: You rarely complain about the food here. \nWoman: That\'s because they hardly ever make a bad meal. \nQuestion: What does the woman imply?',
                    transcript: 'Man: You rarely complain about the food here. \nWoman: That\'s because they hardly ever make a bad meal. \nQuestion: What does the woman imply?',
                    question: 'What does the woman imply?',
                    questionTh: 'ผู้หญิงสื่อถึงอะไร?',
                    choices: [
                        'The food is almost always good.',
                        'The food is usually bad.',
                        'She hates the food here.',
                        'She hardly ever eats here.'
                    ],
                    answer: 0,
                    explanationTh: '"hardly ever make a bad meal" (แทบจะไม่เคยทำอาหารแย่ๆ เลย) แปลว่า อาหารมักจะอร่อยเสมอ (always good)',
                    explanationEn: '"Hardly ever... bad" means the meals are almost always good.'
                },
                {
                    audio: 'Woman: Did you finish reading that thick novel?\nMan: I didn\'t completely dislike it, but it took forever to read.\nQuestion: How did the man feel about the novel?',
                    transcript: 'Woman: Did you finish reading that thick novel?\nMan: I didn\'t completely dislike it, but it took forever to read.\nQuestion: How did the man feel about the novel?',
                    question: 'How did the man feel about the novel?',
                    questionTh: 'ผู้ชายรู้สึกอย่างไรกับนิยายเล่มนั้น?',
                    choices: [
                        'He hated it completely.',
                        'He thought it was the best book ever.',
                        'He somewhat liked it, despite its length.',
                        'He hasn\'t started reading it yet.'
                    ],
                    answer: 2,
                    explanationTh: '"didn\'t completely dislike it" (ไม่ได้เกลียดมันซะทีเดียว) แปลว่า เขาก็มีความชอบอยู่บ้าง (somewhat liked it)',
                    explanationEn: '"Didn\'t completely dislike" implies a mild level of enjoyment or tolerance, meaning he somewhat liked it.'
                },
                {
                    audio: 'Man: I hear the new manager is very strict.\nWoman: She is, but she is not unfair to her employees.\nQuestion: What does the woman say about the manager?',
                    transcript: 'Man: I hear the new manager is very strict.\nWoman: She is, but she is not unfair to her employees.\nQuestion: What does the woman say about the manager?',
                    question: 'What does the woman say about the manager?',
                    questionTh: 'ผู้หญิงพูดเกี่ยวกับผู้จัดการว่าอย่างไร?',
                    choices: [
                        'She treats her employees unfairly.',
                        'She is fair to her employees.',
                        'She does not have any employees.',
                        'She is not strict at all.'
                    ],
                    answer: 1,
                    explanationTh: '"not unfair" (ไม่ได้ไม่ยุติธรรม) แปลว่า ยุติธรรม (fair)',
                    explanationEn: 'The double negative "not unfair" translates to the positive "fair."'
                },
                {
                    audio: 'Woman: Are we allowed to park in front of the building?\nMan: It\'s not illegal, but I wouldn\'t recommend it during rush hour.\nQuestion: What does the man mean?',
                    transcript: 'Woman: Are we allowed to park in front of the building?\nMan: It\'s not illegal, but I wouldn\'t recommend it during rush hour.\nQuestion: What does the man mean?',
                    question: 'What does the man mean?',
                    questionTh: 'ผู้ชายหมายความว่าอย่างไร?',
                    choices: [
                        'Parking there is against the law.',
                        'Parking there is legal, but it might be a bad idea right now.',
                        'They must park there immediately.',
                        'The police will arrest them.'
                    ],
                    answer: 1,
                    explanationTh: '"not illegal" (ไม่ผิดกฎหมาย) แปลว่า ถูกกฎหมาย (legal) แต่เขาก็ไม่แนะนำให้จอดตอนรถติด',
                    explanationEn: '"Not illegal" means it is legal, though the man advises against it due to traffic.'
                },
                {
                    audio: 'Man: How often do you visit your parents?\nWoman: Scarcely a week goes by without me visiting them.\nQuestion: How often does the woman visit her parents?',
                    transcript: 'Man: How often do you visit your parents?\nWoman: Scarcely a week goes by without me visiting them.\nQuestion: How often does the woman visit her parents?',
                    question: 'How often does the woman visit her parents?',
                    questionTh: 'ผู้หญิงไปเยี่ยมพ่อแม่บ่อยแค่ไหน?',
                    choices: [
                        'She visits them very rarely.',
                        'She visits them at least once a week.',
                        'She has never visited them.',
                        'She visits them only on holidays.'
                    ],
                    answer: 1,
                    explanationTh: '"Scarcely a week goes by without me visiting them" (แทบจะไม่มีสัปดาห์ไหนผ่านไปโดยที่ฉันไม่ได้ไปเยี่ยม) แปลว่า ไปเยี่ยมแทบทุกสัปดาห์',
                    explanationEn: 'The phrase means that almost no week passes without a visit, indicating she visits them weekly.'
                },
                {
                    audio: 'Woman: Do you think we have enough budget for the marketing campaign?\nMan: I don\'t disagree that we need more money, but we have to make do with what we have.\nQuestion: What does the man mean?',
                    transcript: 'Woman: Do you think we have enough budget for the marketing campaign?\nMan: I don\'t disagree that we need more money, but we have to make do with what we have.\nQuestion: What does the man mean?',
                    question: 'What does the man mean?',
                    questionTh: 'ผู้ชายหมายความว่าอย่างไร?',
                    choices: [
                        'He strongly disagrees with the woman.',
                        'He thinks they have too much money.',
                        'He agrees that they need more money.',
                        'He wants to cancel the campaign.'
                    ],
                    answer: 2,
                    explanationTh: '"don\'t disagree" (ไม่ได้ไม่เห็นด้วย) แปลว่า เห็นด้วย (agree) ว่าต้องการเงินเพิ่ม',
                    explanationEn: 'To "not disagree" is to agree. He agrees they need more money.'
                },
                {
                    audio: 'Man: Did Mary seem nervous during her presentation?\nWoman: She appeared nothing short of confident.\nQuestion: How did Mary appear?',
                    transcript: 'Man: Did Mary seem nervous during her presentation?\nWoman: She appeared nothing short of confident.\nQuestion: How did Mary appear?',
                    question: 'How did Mary appear?',
                    questionTh: 'แมรี่มีท่าทีอย่างไร?',
                    choices: [
                        'She appeared very short.',
                        'She appeared extremely nervous.',
                        'She lacked confidence.',
                        'She appeared very confident.'
                    ],
                    answer: 3,
                    explanationTh: '"nothing short of" เป็นสำนวนแปลว่า "อย่างยิ่ง / อย่างเต็มที่" ดังนั้น "nothing short of confident" คือ มั่นใจสุดๆ',
                    explanationEn: '"Nothing short of" is an idiom meaning "absolutely" or "completely." She was very confident.'
                },
                {
                    audio: 'Woman: Why didn\'t you submit your assignment on time?\nMan: I barely had enough time to finish reading the instructions, let alone write the essay.\nQuestion: What is the man\'s excuse?',
                    transcript: 'Woman: Why didn\'t you submit your assignment on time?\nMan: I barely had enough time to finish reading the instructions, let alone write the essay.\nQuestion: What is the man\'s excuse?',
                    question: 'What is the man\'s excuse?',
                    questionTh: 'ข้ออ้างของผู้ชายคืออะไร?',
                    choices: [
                        'He finished the essay early.',
                        'He did not even have enough time to read the instructions.',
                        'He lost the instructions.',
                        'He submitted it on time.'
                    ],
                    answer: 1,
                    explanationTh: '"barely had enough time" (แทบจะไม่มีเวลาพอ) แค่อ่านคำสั่งยังไม่ทันเลย นับประสาอะไรกับการเขียนเรียงความ',
                    explanationEn: '"Barely had enough time" means he had almost no time, not even enough to read the instructions.'
                }
            ]
        }
    ]
});
