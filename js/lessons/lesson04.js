LESSONS.push({
    id: 4,
    part: 1,
    titleTh: 'ปูพื้นฐานการให้คำแนะนำ (Suggestions & Advice)',
    titleEn: 'Foundation: Giving Suggestions and Advice',
    icon: '💡',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: รูปแบบการให้คำแนะนำ',
            contentTh: 'ในบางบทสนทนา ผู้พูดคนที่ 1 จะมีปัญหาหรือความกังวลบางอย่าง และผู้พูดคนที่ 2 จะทำหน้าที่ "ให้คำแนะนำ" (Give a suggestion/advice) ข้อสอบมักจะถามว่า "ผู้พูดคนที่ 2 แนะนำให้ทำอะไร?"',
            contentEn: 'When the first speaker expresses a problem, the second speaker often responds with a suggestion. The question will typically ask what the second speaker suggests the first speaker do.',
            bullets: [
                'คำเตือน: การให้คำแนะนำมักจะมาในรูปของ "คำถาม" (เช่น Why don\'t you...?) ไม่ใช่ประโยคบอกเล่าเสมอไป',
                'ต้องจับใจความให้ได้ว่า "ใคร" เป็นคนต้องทำสิ่งที่ถูกแนะนำ (ผู้พูดคนที่ 1 หรือ 2 หรือทำด้วยกัน)',
                'จำโครงสร้างประโยคเหล่านี้ให้แม่นยำ เพราะมันมักจะตามด้วยคำตอบของข้อสอบเสมอ'
            ]
        },
        {
            type: 'grammar',
            title: 'โครงสร้างประโยคแนะนำที่พบบ่อย (Common Suggestion Patterns)',
            contentTh: 'ถ้าคุณได้ยินโครงสร้างประโยคเหล่านี้ ให้เตรียมตัวฟังสิ่งที่ตามมาให้ดี เพราะนั่นคือคำตอบ:',
            rules: [
                { formula: 'Why don\'t you + [Verb]?', explanation: 'ทำไมคุณไม่...ดูล่ะ? (เป็นการแนะนำให้อีกฝ่ายทำ)' },
                { formula: 'Why don\'t we + [Verb]?', explanation: 'ทำไมเราไม่...ดูล่ะ? (เป็นการแนะนำให้ "ทำด้วยกัน")' },
                { formula: 'How about / What about + [V.ing / Noun]?', explanation: 'แล้วเรื่อง...ล่ะ เอาไหม?' },
                { formula: 'If I were you, I would + [Verb]', explanation: 'ถ้าฉันเป็นคุณ ฉันจะ... (ให้คำแนะนำแบบสมมติ)' },
                { formula: 'You had better (You\'d better) + [Verb]', explanation: 'คุณควรจะ...ดีกว่านะ (เป็นการแนะนำแกมเตือน)' }
            ]
        },
        {
            type: 'dialogue',
            title: 'ฝึกฟังบทสนทนาที่ 1: การใช้ Why don\'t you',
            lines: [
                { speaker: 'Man', text: 'I have a terrible headache. I can\'t focus on this report.', th: 'ผมปวดหัวมากเลย ไม่สามารถโฟกัสกับรายงานนี้ได้เลย' },
                { speaker: 'Woman', text: 'Why don\'t you take a break and get some fresh air?', th: 'ทำไมคุณไม่พักสักหน่อยแล้วไปสูดอากาศบริสุทธิ์ดูล่ะ?' }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟังและตีความ: Suggestions (10 ข้อ)',
            questions: [
                {
                    audio: 'Man: This box is way too heavy for me to carry alone. Woman: Why don\'t you ask Mark to give you a hand? Question: What does the woman suggest the man do?',
                    transcript: 'Man: This box is way too heavy for me to carry alone.\nWoman: Why don\'t you ask Mark to give you a hand?\nQuestion: What does the woman suggest the man do?',
                    question: 'What does the woman suggest the man do?',
                    questionTh: 'ผู้หญิงแนะนำให้ผู้ชายทำอะไร?',
                    choices: [
                        'Carry the box by himself.',
                        'Ask Mark for help.',
                        'Give Mark a heavy box.',
                        'Shake hands with Mark.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงใช้โครงสร้าง "Why don\'t you..." แนะนำให้ถาม Mark เพื่อ "give you a hand" (ช่วยเหลือ) ตรงกับข้อ B',
                    explanationEn: 'The woman suggests asking Mark for help using the idiom "give you a hand".'
                },
                {
                    audio: 'Woman: Our train leaves in exactly 45 minutes, and we haven\'t packed yet! Man: We had better hurry up then, or we\'ll miss it. Question: What does the man mean?',
                    transcript: 'Woman: Our train leaves in exactly 45 minutes, and we haven\'t packed yet!\nMan: We had better hurry up then, or we\'ll miss it.\nQuestion: What does the man mean?',
                    question: 'What does the man mean?',
                    questionTh: 'ผู้ชายหมายความว่าอย่างไร?',
                    choices: [
                        'They should pack more slowly.',
                        'They need to rush.',
                        'The train is delayed.',
                        'He wants to miss the train.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายใช้โครงสร้าง "had better" (ควรจะ...ดีกว่า) แนะนำให้ "hurry up" (รีบ) ซึ่งตรงกับ They need to rush (พวกเขาต้องรีบ)',
                    explanationEn: '"Had better hurry up" implies that they need to act quickly or rush to avoid missing the train.'
                },
                {
                    audio: 'Man: I really want to buy that new laptop, but it\'s so expensive. Woman: If I were you, I would wait for the holiday sale next month. Question: What does the woman advise the man to do?',
                    transcript: 'Man: I really want to buy that new laptop, but it\'s so expensive.\nWoman: If I were you, I would wait for the holiday sale next month.\nQuestion: What does the woman advise the man to do?',
                    question: 'What does the woman advise the man to do?',
                    questionTh: 'ผู้หญิงแนะนำให้ผู้ชายทำอะไร?',
                    choices: [
                        'Buy the laptop immediately.',
                        'Borrow money to buy the laptop.',
                        'Delay the purchase until there is a sale.',
                        'Buy a different laptop.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงใช้ "If I were you..." แนะนำให้ "wait" (รอ) จนกว่าจะถึงช่วงเซลล์ ซึ่งตรงกับการ Delay the purchase (ชะลอการซื้อออกไป)',
                    explanationEn: 'The woman advises waiting for a sale, which is paraphrased as "delay the purchase".'
                },
                {
                    audio: 'Woman: I don\'t feel like cooking tonight. Man: How about ordering some Chinese takeout instead? Question: What does the man suggest?',
                    transcript: 'Woman: I don\'t feel like cooking tonight.\nMan: How about ordering some Chinese takeout instead?\nQuestion: What does the man suggest?',
                    question: 'What does the man suggest?',
                    questionTh: 'ผู้ชายแนะนำอะไร?',
                    choices: [
                        'They should cook Chinese food.',
                        'They should eat at a Chinese restaurant.',
                        'They should get food delivered.',
                        'They should skip dinner.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายใช้ "How about..." แนะนำให้สั่ง takeout (อาหารห่อกลับบ้าน/เดลิเวอรี่) ซึ่งตรงกับ get food delivered',
                    explanationEn: 'Ordering takeout is synonymous with getting food delivered.'
                },
                {
                    audio: 'Man: The library is closed, and I need a quiet place to study for my finals. Woman: Why not try the coffee shop on Main Street? It\'s usually pretty empty. Question: What does the woman suggest?',
                    transcript: 'Man: The library is closed, and I need a quiet place to study for my finals.\nWoman: Why not try the coffee shop on Main Street? It\'s usually pretty empty.\nQuestion: What does the woman suggest?',
                    question: 'What does the woman suggest?',
                    questionTh: 'ผู้หญิงแนะนำอะไร?',
                    choices: [
                        'Waiting for the library to open.',
                        'Studying at a coffee shop.',
                        'Opening a new coffee shop.',
                        'Studying in the street.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงใช้โครงสร้าง "Why not..." เสนอให้ไปที่ร้านกาแฟ (try the coffee shop)',
                    explanationEn: 'The woman suggests the coffee shop as an alternative study location.'
                },
                {
                    audio: 'Woman: I am having a lot of trouble understanding this chemistry chapter. Man: You ought to ask the professor for some extra help during office hours. Question: What does the man suggest the woman do?',
                    transcript: 'Woman: I am having a lot of trouble understanding this chemistry chapter.\nMan: You ought to ask the professor for some extra help during office hours.\nQuestion: What does the man suggest the woman do?',
                    question: 'What does the man suggest the woman do?',
                    questionTh: 'ผู้ชายแนะนำให้ผู้หญิงทำอะไร?',
                    choices: [
                        'Drop the chemistry class.',
                        'Help the professor.',
                        'Read the chapter again.',
                        'Seek assistance from the teacher.'
                    ],
                    answer: 3,
                    explanationTh: 'ผู้ชายใช้คำว่า "ought to" (ควรจะ) แนะนำให้ไปถาม professor (อาจารย์) ซึ่งก็คือ Seek assistance from the teacher (ขอความช่วยเหลือจากครู)',
                    explanationEn: '"Ought to ask the professor for extra help" paraphrases to "seek assistance from the teacher".'
                },
                {
                    audio: 'Man: I spilled coffee all over my shirt, and I have an interview in an hour! Woman: If I were in your shoes, I\'d run to the mall across the street and buy a new one. Question: What does the woman suggest?',
                    transcript: 'Man: I spilled coffee all over my shirt, and I have an interview in an hour!\nWoman: If I were in your shoes, I\'d run to the mall across the street and buy a new one.\nQuestion: What does the woman suggest?',
                    question: 'What does the woman suggest?',
                    questionTh: 'ผู้หญิงแนะนำอะไร?',
                    choices: [
                        'The man should wash his shirt.',
                        'The man should buy a new pair of shoes.',
                        'The man should purchase a new shirt.',
                        'The man should cancel the interview.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงพูดว่า "If I were in your shoes" (เป็นสำนวนแปลว่า ถ้าฉันเป็นคุณ ไม่ได้แปลว่าอยู่ในรองเท้า) เธอแนะนำให้ไปซื้อเสื้อใหม่ (buy a new one)',
                    explanationEn: 'The idiom "if I were in your shoes" means "if I were you". The suggestion is to buy a new shirt.'
                },
                {
                    audio: 'Woman: The copy machine is jammed again, and I need these documents for the meeting. Man: Let\'s use the machine on the second floor instead. Question: What does the man mean?',
                    transcript: 'Woman: The copy machine is jammed again, and I need these documents for the meeting.\nMan: Let\'s use the machine on the second floor instead.\nQuestion: What does the man mean?',
                    question: 'What does the man mean?',
                    questionTh: 'ผู้ชายคนนี้หมายความว่าอย่างไร?',
                    choices: [
                        'He will fix the jammed machine.',
                        'They should go to another floor to make copies.',
                        'The meeting has been moved to the second floor.',
                        'They should postpone the meeting.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายใช้ "Let\'s..." (เป็นการเสนอแนะให้ทำด้วยกัน) แนะนำให้ไปใช้เครื่องถ่ายเอกสารอีกเครื่องที่ชั้น 2',
                    explanationEn: '"Let\'s" is a suggestion to do something together. He suggests using a different machine on another floor.'
                },
                {
                    audio: 'Man: I can\'t decide whether to take Spanish or French next semester. Woman: Why don\'t you flip a coin? Question: What does the woman mean?',
                    transcript: 'Man: I can\'t decide whether to take Spanish or French next semester.\nWoman: Why don\'t you flip a coin?\nQuestion: What does the woman mean?',
                    question: 'What does the woman mean?',
                    questionTh: 'ผู้หญิงคนนี้หมายความว่าอย่างไร?',
                    choices: [
                        'The man should toss a coin to make the decision.',
                        'The man should take both languages.',
                        'The man should pay with coins.',
                        'Language classes are very cheap.'
                    ],
                    answer: 0,
                    explanationTh: 'ผู้หญิงเสนอให้ "flip a coin" (โยนหัวก้อย) เพื่อใช้ในการตัดสินใจ (toss a coin to make the decision)',
                    explanationEn: 'Flipping a coin is a common way to decide between two equal options.'
                },
                {
                    audio: 'Woman: This hotel room is incredibly noisy. I can hear the traffic from the street. Man: You should call the front desk and ask to be moved to a room in the back. Question: What does the man advise the woman to do?',
                    transcript: 'Woman: This hotel room is incredibly noisy. I can hear the traffic from the street.\nMan: You should call the front desk and ask to be moved to a room in the back.\nQuestion: What does the man advise the woman to do?',
                    question: 'What does the man advise the woman to do?',
                    questionTh: 'ผู้ชายแนะนำให้ผู้หญิงทำอะไร?',
                    choices: [
                        'Complain to the police about the traffic.',
                        'Move the bed to the back of the room.',
                        'Request a room change from the hotel staff.',
                        'Sleep at the front desk.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายแนะนำให้โทรหา front desk (แผนกต้อนรับ) เพื่อขอเปลี่ยนห้อง (ask to be moved) ซึ่งตรงกับ Request a room change',
                    explanationEn: 'Calling the front desk to be moved is equivalent to requesting a room change from the staff.'
                }
            ]
        }
    ]
});
