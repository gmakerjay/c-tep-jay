LESSONS.push({
    id: 8,
    part: 1,
    titleTh: 'การฟังเก็บรายละเอียด (Detail Questions)',
    titleEn: 'Long Dialogues: Listening for Specific Details',
    icon: '🔍',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: ตามล่าหาความจริง (Hunting for Facts)',
            contentTh: 'คำถามประเภท Detail Questions จะถามเกี่ยวกับข้อมูลเฉพาะเจาะจงที่ถูกพูดถึงในบทสนทนา เช่น ตัวเลข เวลา สถานที่ หรือเหตุผล ข้อสอบมักจะใช้เทคนิค Paraphrasing (การใช้คำอื่นที่ความหมายเหมือนกัน) ในตัวเลือกเพื่อหลอกเรา',
            contentEn: 'Detail questions ask for specific pieces of information mentioned by the speakers. The correct answer choice will almost always paraphrase the exact words used in the audio.',
            bullets: [
                'จดจ่อกับตัวเลข: วันที่ เวลา ราคา มักจะเป็นจุดที่ถูกนำมาถามบ่อยที่สุด',
                'ระวังการ Paraphrase: ถ้าในเสียงพูดว่า "mandatory" (บังคับ) ในตัวเลือกอาจจะใช้คำว่า "required" (จำเป็น/บังคับ)',
                'อย่าพึ่งความจำระยะสั้นเพียงอย่างเดียว การจดโน้ตย่อ (Short-hand notes) จะช่วยชีวิตคุณได้ในพาร์ทนี้'
            ]
        },
        {
            type: 'vocabulary',
            title: 'คำศัพท์พ้องความหมายที่ออกสอบบ่อย (Common Paraphrases)',
            words: [
                { word: 'Mandatory = Required', pron: '/ˈmændətɔːri/ = /rɪˈkwaɪərd/', mean: 'บังคับ / จำเป็นต้องทำ' },
                { word: 'Postpone = Delay = Put off', pron: '/poʊstˈpoʊn/', mean: 'เลื่อนออกไป' },
                { word: 'Flaw = Defect = Fault', pron: '/flɔː/', mean: 'ข้อบกพร่อง / ตำหนิ' },
                { word: 'Prohibit = Forbid = Ban', pron: '/proʊˈhɪbɪt/', mean: 'สั่งห้าม' },
                { word: 'Abundant = Plentiful', pron: '/əˈbʌndənt/', mean: 'มากมาย / อุดมสมบูรณ์' }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟัง: เก็บรายละเอียด (10 ข้อ)',
            questions: [
                {
                    audio: 'Man: Did you buy the tickets for the concert next Friday? Woman: Yes, but they were more expensive than I thought. The regular tickets were sold out, so I had to buy the VIP ones for seventy-five dollars each. Question: How much did the woman pay for ONE ticket?',
                    transcript: 'Man: Did you buy the tickets for the concert next Friday?\nWoman: Yes, but they were more expensive than I thought. The regular tickets were sold out, so I had to buy the VIP ones for seventy-five dollars each.\nQuestion: How much did the woman pay for ONE ticket?',
                    question: 'How much did the woman pay for ONE ticket?',
                    questionTh: 'ผู้หญิงจ่ายค่าตั๋ว "1 ใบ" ในราคาเท่าไหร่?',
                    choices: [
                        'Twenty-five dollars.',
                        'Fifty dollars.',
                        'Seventy-five dollars.',
                        'One hundred dollars.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงบอกชัดเจนว่า "seventy-five dollars each" (75 ดอลลาร์ต่อใบ)',
                    explanationEn: 'The audio explicitly states she bought the VIP tickets for seventy-five dollars each.'
                },
                {
                    audio: 'Woman: We need to submit the final report by 5 PM tomorrow. Man: I thought the deadline was extended to Friday! Woman: The professor changed his mind and sent an email about the new deadline this morning. Question: When is the final report due?',
                    transcript: 'Woman: We need to submit the final report by 5 PM tomorrow.\nMan: I thought the deadline was extended to Friday!\nWoman: The professor changed his mind and sent an email about the new deadline this morning.\nQuestion: When is the final report due?',
                    question: 'When is the final report due?',
                    questionTh: 'รายงานฉบับสมบูรณ์มีกำหนดส่งเมื่อไหร่?',
                    choices: [
                        'This morning.',
                        'Tomorrow at 5 PM.',
                        'Friday morning.',
                        'Next week.'
                    ],
                    answer: 1,
                    explanationTh: 'แม้ผู้ชายจะเข้าใจว่าเป็นวันศุกร์ (Friday) แต่ผู้หญิงยืนยันว่ากำหนดการใหม่คือ "by 5 PM tomorrow" (พรุ่งนี้ 5 โมงเย็น)',
                    explanationEn: 'The woman corrects the man, stating the new deadline is tomorrow at 5 PM.'
                },
                {
                    audio: 'Man: I am having trouble logging into the student portal. My password isn\'t working. Woman: You need to contact the IT helpdesk. They are located on the third floor of the library. Question: Where is the IT helpdesk located?',
                    transcript: 'Man: I am having trouble logging into the student portal. My password isn\'t working.\nWoman: You need to contact the IT helpdesk. They are located on the third floor of the library.\nQuestion: Where is the IT helpdesk located?',
                    question: 'Where is the IT helpdesk located?',
                    questionTh: 'ฝ่ายช่วยเหลือด้านไอทีตั้งอยู่ที่ไหน?',
                    choices: [
                        'On the first floor of the library.',
                        'On the third floor of the library.',
                        'In the computer lab.',
                        'In the main administration building.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงบอกตำแหน่งชัดเจนว่า "on the third floor of the library" (ชั้น 3 ของห้องสมุด)',
                    explanationEn: 'The woman states exactly where the IT helpdesk is: the third floor of the library.'
                },
                {
                    audio: 'Woman: Welcome to the Riverside Museum. Just a quick reminder, photography is completely prohibited inside the galleries, but you may take pictures in the main lobby. Man: Thank you. I will put my camera away. Question: According to the woman, what is NOT allowed in the galleries?',
                    transcript: 'Woman: Welcome to the Riverside Museum. Just a quick reminder, photography is completely prohibited inside the galleries, but you may take pictures in the main lobby.\nMan: Thank you. I will put my camera away.\nQuestion: According to the woman, what is NOT allowed in the galleries?',
                    question: 'According to the woman, what is NOT allowed in the galleries?',
                    questionTh: 'จากที่ผู้หญิงกล่าว สิ่งใดที่ไม่ได้รับอนุญาตให้ทำในแกลเลอรี?',
                    choices: [
                        'Talking loudly.',
                        'Eating food.',
                        'Taking photographs.',
                        'Entering with a backpack.'
                    ],
                    answer: 2,
                    explanationTh: 'เธอพูดว่า "photography is completely prohibited" (การถ่ายภาพถูกสั่งห้ามโดยเด็ดขาด) ตรงกับการ Taking photographs',
                    explanationEn: 'Prohibited means not allowed. Photography is taking pictures.'
                },
                {
                    audio: 'Man: The flight from London was delayed by three hours due to heavy snow. Woman: That\'s exhausting. So, what time did you finally land in New York? Man: We touched down around midnight. Question: Why was the flight delayed?',
                    transcript: 'Man: The flight from London was delayed by three hours due to heavy snow.\nWoman: That\'s exhausting. So, what time did you finally land in New York?\nMan: We touched down around midnight.\nQuestion: Why was the flight delayed?',
                    question: 'Why was the flight delayed?',
                    questionTh: 'ทำไมเที่ยวบินถึงล่าช้า?',
                    choices: [
                        'Because of engine failure.',
                        'Because of heavy snow.',
                        'Because of a pilot strike.',
                        'Because it arrived at midnight.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายอธิบายเหตุผลชัดเจนว่า "due to heavy snow" (เนื่องจากหิมะตกหนัก)',
                    explanationEn: 'The man explicitly says the delay was "due to heavy snow".'
                },
                {
                    audio: 'Woman: Are you going to buy the required textbook for the Economics course? Man: I think I will rent it from the campus bookstore instead. It costs fifty dollars to rent for the semester, but buying it new is over one hundred and twenty dollars. Question: How much does it cost to rent the textbook?',
                    transcript: 'Woman: Are you going to buy the required textbook for the Economics course?\nMan: I think I will rent it from the campus bookstore instead. It costs fifty dollars to rent for the semester, but buying it new is over one hundred and twenty dollars.\nQuestion: How much does it cost to rent the textbook?',
                    question: 'How much does it cost to rent the textbook?',
                    questionTh: 'ค่าเช่าหนังสือเรียนคือเท่าไหร่?',
                    choices: [
                        'Fifty dollars.',
                        'One hundred dollars.',
                        'One hundred and twenty dollars.',
                        'It is free.'
                    ],
                    answer: 0,
                    explanationTh: 'ผู้ชายพูดว่า "costs fifty dollars to rent" (ค่าเช่า 50 ดอลลาร์) ส่วน 120 ดอลลาร์คือราคาซื้อใหม่ (buying it new)',
                    explanationEn: 'He clearly contrasts the $50 rental fee with the $120 purchase price.'
                },
                {
                    audio: 'Man: I need to schedule an appointment with Dr. Adams. Woman: Dr. Adams only sees patients on Mondays and Wednesdays. Her schedule for this week is completely full, but she has an opening next Monday at 10 AM. Question: Which days does Dr. Adams see patients?',
                    transcript: 'Man: I need to schedule an appointment with Dr. Adams.\nWoman: Dr. Adams only sees patients on Mondays and Wednesdays. Her schedule for this week is completely full, but she has an opening next Monday at 10 AM.\nQuestion: Which days does Dr. Adams see patients?',
                    question: 'Which days does Dr. Adams see patients?',
                    questionTh: 'หมออดัมส์รับตรวจคนไข้วันไหนบ้าง?',
                    choices: [
                        'Tuesdays and Thursdays.',
                        'Mondays and Fridays.',
                        'Mondays and Wednesdays.',
                        'Every day.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงบอกว่า "only sees patients on Mondays and Wednesdays" (รับตรวจเฉพาะวันจันทร์และพุธ)',
                    explanationEn: 'The receptionist states Dr. Adams is only available on Mondays and Wednesdays.'
                },
                {
                    audio: 'Woman: I love this apartment, but does the rent include utilities? Man: The rent covers water and trash collection, but you are responsible for paying the electricity and internet bills separately. Question: Which utility is NOT included in the rent?',
                    transcript: 'Woman: I love this apartment, but does the rent include utilities?\nMan: The rent covers water and trash collection, but you are responsible for paying the electricity and internet bills separately.\nQuestion: Which utility is NOT included in the rent?',
                    question: 'Which utility is NOT included in the rent?',
                    questionTh: 'ค่าสาธารณูปโภคใดที่ "ไม่" รวมอยู่ในค่าเช่า?',
                    choices: [
                        'Water.',
                        'Trash collection.',
                        'Electricity.',
                        'Apartment maintenance.'
                    ],
                    answer: 2,
                    explanationTh: 'ค่าเช่าครอบคลุม (covers) น้ำและขยะ แต่ผู้เช่าต้องจ่ายค่าไฟฟ้า (electricity) และอินเทอร์เน็ตเอง',
                    explanationEn: 'Water and trash are covered, but electricity and internet must be paid separately.'
                },
                {
                    audio: 'Man: To complete the registration for the marathon, you need to sign this waiver and provide an emergency contact number. Woman: Okay, I have signed it. My brother will be my emergency contact. Question: What two things are required to complete the registration?',
                    transcript: 'Man: To complete the registration for the marathon, you need to sign this waiver and provide an emergency contact number.\nWoman: Okay, I have signed it. My brother will be my emergency contact.\nQuestion: What two things are required to complete the registration?',
                    question: 'What two things are required to complete the registration?',
                    questionTh: 'สิ่งใด 2 อย่างที่จำเป็นสำหรับการลงทะเบียน?',
                    choices: [
                        'A waiver and an ID card.',
                        'A signature and a payment fee.',
                        'A waiver and an emergency contact.',
                        'A medical certificate and a waiver.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายระบุว่า "sign this waiver" (เซ็นใบยินยอม) และ "provide an emergency contact number" (ให้เบอร์ติดต่อฉุกเฉิน)',
                    explanationEn: 'A waiver and an emergency contact number are explicitly requested.'
                },
                {
                    audio: 'Woman: The chef\'s special tonight is the grilled salmon served with asparagus and mashed potatoes. Man: That sounds delicious, but I am allergic to asparagus. Can I substitute it with a side salad? Question: What comes with the grilled salmon by default?',
                    transcript: 'Woman: The chef\'s special tonight is the grilled salmon served with asparagus and mashed potatoes.\nMan: That sounds delicious, but I am allergic to asparagus. Can I substitute it with a side salad?\nQuestion: What comes with the grilled salmon by default?',
                    question: 'What comes with the grilled salmon by default?',
                    questionTh: 'โดยปกติเมนูแซลมอนย่างจะเสิร์ฟพร้อมกับอะไร?',
                    choices: [
                        'Side salad and mashed potatoes.',
                        'Asparagus and mashed potatoes.',
                        'Asparagus and a side salad.',
                        'Rice and steamed vegetables.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงแนะนำเมนูว่าเสิร์ฟพร้อมกับ "asparagus and mashed potatoes" (หน่อไม้ฝรั่งและมันบด)',
                    explanationEn: 'The chef\'s special defaults to asparagus and mashed potatoes.'
                }
            ]
        }
    ]
});
