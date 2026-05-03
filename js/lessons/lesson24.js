LESSONS.push({
    id: 24,
    part: 1,
    titleTh: 'เจาะลึกการฟัง: กับดักการออกเสียง (Pronunciation Traps)',
    titleEn: 'Advanced Listening: Pronunciation Traps',
    icon: '👂',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: คู่คำที่ออกเสียงคล้ายกัน (Minimal Pairs)',
            contentTh: 'ข้อสอบ CU-TEP มักจะหลอกด้วย "คำที่ออกเสียงคล้ายกันมาก" (Minimal Pairs) เช่น walk/work, accept/except หรือ can/can\'t ถ้าฟังผิดแค่เสียงเดียว ความหมายจะเปลี่ยนไปคนละเรื่องเลยครับ',
            contentEn: 'The CU-TEP exam frequently uses minimal pairs—words that sound almost identical but have completely different meanings—to confuse test-takers. Mishearing a single vowel or consonant sound can lead you to choose the wrong answer.',
            bullets: [
                'Can vs Can\'t: เสียง t ใน can\'t มักจะถูกกลืน (glottal stop) แต่จังหวะการพูดจะเน้นเสียงที่ can\'t หนักกว่า can',
                'vowel sounds (สระ): เช่น leave (อี ยาว) vs live (อิ สั้น) หรือ sheep (อี ยาว) vs ship (อิ สั้น)',
                'การเชื่อมเสียง (Linking sounds): เช่น "an apple" จะฟังคล้าย "a napple" ต้องตั้งใจฟังบริบทให้ดี'
            ]
        },
        {
            type: 'vocabulary',
            title: 'คู่คำที่มักฟังผิด (Common Minimal Pairs)',
            words: [
                { word: 'Accept / Except', pron: '/əkˈsɛpt/ vs /ɪkˈsɛpt/', mean: 'ยอมรับ / ยกเว้น', ex: 'I accept all the cards except that one.' },
                { word: 'Affect / Effect', pron: '/əˈfɛkt/ vs /ɪˈfɛkt/', mean: 'ส่งผลกระทบ (กริยา) / ผลกระทบ (คำนาม)', ex: 'The medicine will affect your sleep. The effect is drowsiness.' },
                { word: 'Desert / Dessert', pron: '/ˈdɛzərt/ vs /dɪˈzɜrt/', mean: 'ทะเลทราย / ของหวาน', ex: 'It is too hot in the desert. Let\'s eat dessert.' },
                { word: 'Lose / Loose', pron: '/luːz/ vs /luːs/', mean: 'สูญเสีย, แพ้ / หลวม', ex: 'Don\'t lose that loose button.' },
                { word: 'Wander / Wonder', pron: '/ˈwɒndər/ vs /ˈwʌndər/', mean: 'เดินเตร็ดเตร่ / สงสัย, พิศวง', ex: 'I wonder where he will wander next.' }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟัง: แยกแยะเสียงหลอก (10 ข้อ)',
            questions: [
                {
                    audio: 'Man: Did you accept the job offer?\nWoman: Yes, I did. I start next Monday.\nQuestion: What does the woman mean?',
                    transcript: 'Man: Did you accept the job offer?\nWoman: Yes, I did. I start next Monday.\nQuestion: What does the woman mean?',
                    question: 'What does the woman mean?',
                    questionTh: 'ผู้หญิงหมายความว่าอย่างไร?',
                    choices: [
                        'She made an exception.',
                        'She took the job.',
                        'She rejected the offer.',
                        'She expects to find a job next Monday.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายถามว่า "accept" (ยอมรับ/ตกลงรับ) งานหรือเปล่า ผู้หญิงตอบรับ จึงแปลว่า She took the job.',
                    explanationEn: 'The word is "accept" (to agree to take), not "except". She agreed to take the job.'
                },
                {
                    audio: 'Woman: How do you usually get to the office?\nMan: I walk every day because it\'s close to my house.\nQuestion: How does the man commute?',
                    transcript: 'Woman: How do you usually get to the office?\nMan: I walk every day because it\'s close to my house.\nQuestion: How does the man commute?',
                    question: 'How does the man commute?',
                    questionTh: 'ผู้ชายเดินทางไปทำงานอย่างไร?',
                    choices: [
                        'He drives to work.',
                        'He takes a bus.',
                        'He goes on foot.',
                        'He works from home.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายพูดว่า "walk" (เดิน) ระวังเสียงสับสนกับ "work" (ทำงาน)',
                    explanationEn: 'He says he "walks" (travels on foot), which can sound similar to "work".'
                },
                {
                    audio: 'Man: We need to leave for the airport right now.\nWoman: But I haven\'t packed my bags yet!\nQuestion: What does the man want to do?',
                    transcript: 'Man: We need to leave for the airport right now.\nWoman: But I haven\'t packed my bags yet!\nQuestion: What does the man want to do?',
                    question: 'What does the man want to do?',
                    questionTh: 'ผู้ชายต้องการทำอะไร?',
                    choices: [
                        'Live at the airport.',
                        'Depart immediately.',
                        'Pack his bags.',
                        'Lift something heavy.'
                    ],
                    answer: 1,
                    explanationTh: 'คำว่า "leave" (อี ยาว) แปลว่าออกเดินทาง (Depart) ระวังเสียงสับสนกับ "live" (อิ สั้น) หรือ "lift"',
                    explanationEn: 'The man uses the word "leave" (to depart), which should not be confused with "live".'
                },
                {
                    audio: 'Woman: Did you buy the shirt we saw yesterday?\nMan: No, it was too loose around the shoulders.\nQuestion: Why didn\'t the man buy the shirt?',
                    transcript: 'Woman: Did you buy the shirt we saw yesterday?\nMan: No, it was too loose around the shoulders.\nQuestion: Why didn\'t the man buy the shirt?',
                    question: 'Why didn\'t the man buy the shirt?',
                    questionTh: 'ทำไมผู้ชายไม่ซื้อเสื้อเชิ้ต?',
                    choices: [
                        'He lost his money.',
                        'It was too big for him.',
                        'It was too tight.',
                        'He didn\'t like the color.'
                    ],
                    answer: 1,
                    explanationTh: 'คำว่า "loose" (ลูซ) แปลว่า หลวมเกินไป (too big) ระวังเสียงสับสนกับ "lose" (สูญเสีย)',
                    explanationEn: 'The word "loose" means not tightly fitted (too big).'
                },
                {
                    audio: 'Man: I wonder if the train will arrive on time today.\nWoman: It usually does during this time of day.\nQuestion: What is the man doing?',
                    transcript: 'Man: I wonder if the train will arrive on time today.\nWoman: It usually does during this time of day.\nQuestion: What is the man doing?',
                    question: 'What is the man doing?',
                    questionTh: 'ผู้ชายกำลังทำอะไร?',
                    choices: [
                        'Walking around the station.',
                        'Expressing curiosity about the train\'s schedule.',
                        'Buying a train ticket.',
                        'Wandering aimlessly.'
                    ],
                    answer: 1,
                    explanationTh: 'คำว่า "wonder" (สงสัย/อยากรู้) ระวังเสียงสับสนกับ "wander" (เดินเตร็ดเตร่)',
                    explanationEn: 'The word is "wonder" (to be curious), not "wander" (to walk aimlessly).'
                },
                {
                    audio: 'Woman: Are we having ice cream after dinner?\nMan: Yes, I bought some chocolate cake for dessert, too.\nQuestion: What did the man buy?',
                    transcript: 'Woman: Are we having ice cream after dinner?\nMan: Yes, I bought some chocolate cake for dessert, too.\nQuestion: What did the man buy?',
                    question: 'What did the man buy?',
                    questionTh: 'ผู้ชายซื้ออะไรมา?',
                    choices: [
                        'A sweet treat to eat after the meal.',
                        'Sand from a dry region.',
                        'Main course dishes.',
                        'Drinks for dinner.'
                    ],
                    answer: 0,
                    explanationTh: 'คำว่า "dessert" (ดิ-เซิร์ท) เน้นพยางค์หลัง แปลว่าของหวาน ระวังเสียงสับสนกับ "desert" (เดซ-เซิร์ท) ที่แปลว่าทะเลทราย',
                    explanationEn: 'He bought "dessert" (a sweet treat), which is pronounced with the stress on the second syllable, unlike "desert".'
                },
                {
                    audio: 'Man: Did the new policy affect your department?\nWoman: Yes, the effect was immediate. We had to change our schedules.\nQuestion: What happened to the woman\'s department?',
                    transcript: 'Man: Did the new policy affect your department?\nWoman: Yes, the effect was immediate. We had to change our schedules.\nQuestion: What happened to the woman\'s department?',
                    question: 'What happened to the woman\'s department?',
                    questionTh: 'เกิดอะไรขึ้นกับแผนกของผู้หญิง?',
                    choices: [
                        'They ignored the policy.',
                        'They experienced immediate changes due to the policy.',
                        'They created a new policy.',
                        'Their schedules remained the same.'
                    ],
                    answer: 1,
                    explanationTh: 'Affect (กริยา: ส่งผลกระทบ) และ Effect (นาม: ผลกระทบ) ถูกใช้ทั้งคู่ แผนกของเธอได้รับผลกระทบให้ต้องเปลี่ยนตารางเวลา',
                    explanationEn: 'The policy affected (influenced) them, and the effect (result) was an immediate schedule change.'
                },
                {
                    audio: 'Woman: We can\'t leave the building until the alarm stops.\nMan: I know. We just have to wait here.\nQuestion: What must the people do?',
                    transcript: 'Woman: We can\'t leave the building until the alarm stops.\nMan: I know. We just have to wait here.\nQuestion: What must the people do?',
                    question: 'What must the people do?',
                    questionTh: 'ผู้คนต้องทำอะไร?',
                    choices: [
                        'Leave the building immediately.',
                        'Stop the alarm.',
                        'Stay inside the building.',
                        'Wait outside.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงพูดว่า "can\'t leave" (ออกไปไม่ได้) แปลว่าต้องอยู่ข้างใน (Stay inside)',
                    explanationEn: 'The word "can\'t" (cannot) is stressed. They are not allowed to leave, so they must stay inside.'
                },
                {
                    audio: 'Man: Which animal did you like the most at the farm?\nWoman: The sheep were definitely my favorite.\nQuestion: What is the woman\'s favorite animal?',
                    transcript: 'Man: Which animal did you like the most at the farm?\nWoman: The sheep were definitely my favorite.\nQuestion: What is the woman\'s favorite animal?',
                    question: 'What is the woman\'s favorite animal?',
                    questionTh: 'สัตว์ตัวโปรดของผู้หญิงคืออะไร?',
                    choices: [
                        'A large boat.',
                        'A wool-producing farm animal.',
                        'A type of dog.',
                        'A cheap item.'
                    ],
                    answer: 1,
                    explanationTh: 'คำว่า "sheep" (แกะ - สระอียาว) ระวังฟังผิดเป็น "ship" (เรือ - สระอิสั้น) หรือ "cheap" (ราคาถูก)',
                    explanationEn: '"Sheep" (an animal) has a long /i:/ sound, distinguishing it from "ship" (a boat) which has a short /ɪ/ sound.'
                },
                {
                    audio: 'Woman: This old knife is completely useless.\nMan: Yeah, it has lost its edge. We should buy a new one.\nQuestion: What does the man say about the knife?',
                    transcript: 'Woman: This old knife is completely useless.\nMan: Yeah, it has lost its edge. We should buy a new one.\nQuestion: What does the man say about the knife?',
                    question: 'What does the man say about the knife?',
                    questionTh: 'ผู้ชายพูดเกี่ยวกับมีดว่าอย่างไร?',
                    choices: [
                        'He lost the knife.',
                        'The knife is not sharp anymore.',
                        'The knife is very sharp.',
                        'He wants to sell the knife.'
                    ],
                    answer: 1,
                    explanationTh: 'คำว่า "lost its edge" แปลว่าสูญเสียความคม (ทื่อแล้ว) ไม่ได้แปลว่าทำมีดหาย (lose the knife)',
                    explanationEn: '"Lost its edge" means the knife is dull and no longer sharp.'
                }
            ]
        }
    ]
});
