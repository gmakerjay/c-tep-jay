LESSONS.push({
    id: 5,
    part: 1,
    titleTh: 'ปูพื้นฐานความหมายแฝง (Implications & Idioms)',
    titleEn: 'Foundation: Understanding Implications and Idioms',
    icon: '🎭',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: ทำไมเขาถึงไม่ตอบตรงๆ?',
            contentTh: 'ในพาร์ทฟังของ CU-TEP ข้อสอบระดับยากจะใช้การตอบแบบ "ไม่ตรงไปตรงมา" (Indirect Answers) ผู้พูดมักจะเลี่ยงการตอบ Yes/No แต่จะใช้สำนวน ประชดประชัน หรือตอบด้วยคำถามแทน (Rhetorical question) เพื่อให้เราต้องตีความเอง',
            contentEn: 'Higher difficulty questions in the listening section often feature indirect answers. Instead of a simple "yes" or "no", the speaker might use an idiom, a rhetorical question, or sarcasm.',
            bullets: [
                'คำเตือน 1: เมื่อไหร่ที่คำตอบเป็นคำถามย้อนกลับ (เช่น Do I have a choice?) มักแปลว่า "ไม่มีทางเลือก / ต้องทำ"',
                'คำเตือน 2: บางครั้งน้ำเสียง (Tone) จะช่วยบอกว่าเขาพูดประชด (Sarcasm) เช่น "That\'s just great!" ถ้าน้ำเสียงหงุดหงิด แปลว่า แย่มาก',
                'ต้องฝึกเดาเจตนา (Intention) จากบริบท ไม่ใช่จากคำแปลตรงตัว'
            ]
        },
        {
            type: 'vocabulary',
            title: 'สำนวนความหมายแฝง (Idioms with Implied Meanings)',
            words: [
                { word: 'Be out of the question', pron: '/bi aʊt ɒv ðə ˈkwɛsʧən/', mean: 'เป็นไปไม่ได้ / ไม่อนุญาตเด็ดขาด', ex: 'A: Can we leave early? B: That\'s out of the question.' },
                { word: 'Cross one\'s mind', pron: '/krɒs wʌnz maɪnd/', mean: 'นึกขึ้นได้ / แวบเข้ามาในหัว', ex: 'It never crossed my mind that he would quit.' },
                { word: 'Slip one\'s mind', pron: '/slɪp wʌnz maɪnd/', mean: 'ลืมสนิท', ex: 'I meant to call you, but it completely slipped my mind.' },
                { word: 'Give it a shot', pron: '/gɪv ɪt ə ʃɒt/', mean: 'ลองดูสักตั้ง', ex: 'A: I don\'t know if I can do this. B: Just give it a shot!' },
                { word: 'Beat around the bush', pron: '/biːt əˈraʊnd ðə bʊʃ/', mean: 'พูดอ้อมค้อม', ex: 'Stop beating around the bush and tell me the truth.' }
            ]
        },
        {
            type: 'dialogue',
            title: 'ฝึกฟังบทสนทนาที่ 1: ตอบด้วยคำถาม',
            lines: [
                { speaker: 'Woman', text: 'Are you going to attend the mandatory staff meeting this afternoon?', th: 'คุณจะเข้าร่วมการประชุมพนักงานที่บังคับเข้าบ่ายนี้ไหม?' },
                { speaker: 'Man', text: 'Do I have a choice?', th: 'ฉันมีทางเลือกด้วยเหรอ? (แปลว่า: ไม่อยากไป แต่ก็ต้องไป)' }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟังและตีความ: Implications (10 ข้อ)',
            questions: [
                {
                    audio: 'Woman: Have you seen my keys? I need to leave for work. Man: Have you checked the kitchen counter? Question: What does the man imply?',
                    transcript: 'Woman: Have you seen my keys? I need to leave for work.\nMan: Have you checked the kitchen counter?\nQuestion: What does the man imply?',
                    question: 'What does the man imply?',
                    questionTh: 'ผู้ชายบอกใบ้ว่าอะไร?',
                    choices: [
                        'He wants to know if the kitchen is clean.',
                        'He thinks the keys might be on the kitchen counter.',
                        'He took the keys to the kitchen.',
                        'He is making breakfast on the counter.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายไม่ได้ตอบว่าเห็นหรือไม่ แต่ใช้คำถามย้อนว่า "ไปดูที่เคาน์เตอร์ครัวหรือยัง" ซึ่งหมายถึงเขาเดาว่ากุญแจน่านะอยู่ที่นั่น (He thinks the keys might be there)',
                    explanationEn: 'By asking if she checked the counter, he implies that the keys could be there.'
                },
                {
                    audio: 'Man: Can I borrow your car to go to the grocery store? Woman: Are you kidding? You crashed it last time! Question: What does the woman mean?',
                    transcript: 'Man: Can I borrow your car to go to the grocery store?\nWoman: Are you kidding? You crashed it last time!\nQuestion: What does the woman mean?',
                    question: 'What does the woman mean?',
                    questionTh: 'ผู้หญิงหมายความว่าอย่างไร?',
                    choices: [
                        'She thinks it is a funny joke.',
                        'She will drive him to the store.',
                        'She refuses to lend him the car.',
                        'She wants him to buy a new car.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงบอกว่า "Are you kidding?" (ล้อเล่นป่าวเนี่ย) เพราะคราวที่แล้วผู้ชายทำรถชน หมายความว่าเธอปฏิเสธเด็ดขาด (She refuses to lend it)',
                    explanationEn: '"Are you kidding?" in this context is a strong refusal because of his past mistakes.'
                },
                {
                    audio: 'Woman: Did you remember to pay the electricity bill? Man: Oh no, it completely slipped my mind! Question: What does the man mean?',
                    transcript: 'Woman: Did you remember to pay the electricity bill?\nMan: Oh no, it completely slipped my mind!\nQuestion: What does the man mean?',
                    question: 'What does the man mean?',
                    questionTh: 'ผู้ชายหมายความว่าอย่างไร?',
                    choices: [
                        'He paid the bill.',
                        'He lost his mind.',
                        'He slipped and fell down.',
                        'He forgot to pay the bill.'
                    ],
                    answer: 3,
                    explanationTh: 'สำนวน "slipped my mind" แปลว่า "ลืมสนิท" ดังนั้นเขาจึงลืมจ่ายบิล (forgot to pay)',
                    explanationEn: 'The idiom "slip one\'s mind" means to forget to do something.'
                },
                {
                    audio: 'Man: Do you think we can persuade the boss to give us a raise? Woman: That is out of the question right now. Sales have been terrible. Question: What does the woman mean?',
                    transcript: 'Man: Do you think we can persuade the boss to give us a raise?\nWoman: That is out of the question right now. Sales have been terrible.\nQuestion: What does the woman mean?',
                    question: 'What does the woman mean?',
                    questionTh: 'ผู้หญิงหมายความว่าอย่างไร?',
                    choices: [
                        'They should ask a different question.',
                        'It is impossible to get a raise at this time.',
                        'The boss is out of the office.',
                        'Sales will improve soon.'
                    ],
                    answer: 1,
                    explanationTh: 'สำนวน "out of the question" แปลว่า เป็นไปไม่ได้เลย หรือ ไม่อนุญาตเด็ดขาด (impossible)',
                    explanationEn: 'The idiom "out of the question" means impossible or not allowed.'
                },
                {
                    audio: 'Woman: Are you going to apply for the manager position? Man: I might as well give it a shot. Question: What will the man probably do?',
                    transcript: 'Woman: Are you going to apply for the manager position?\nMan: I might as well give it a shot.\nQuestion: What will the man probably do?',
                    question: 'What will the man probably do?',
                    questionTh: 'ผู้ชายน่าจะทำอะไร?',
                    choices: [
                        'He will shoot a gun.',
                        'He will not apply for the job.',
                        'He will try to get the position.',
                        'He will give the woman a job.'
                    ],
                    answer: 2,
                    explanationTh: 'สำนวน "give it a shot" แปลว่า "ขอลองดูสักตั้ง" (try to do something) ดังนั้นเขาจะลองสมัครงานดู',
                    explanationEn: 'The idiom "give it a shot" means to try doing something.'
                },
                {
                    audio: 'Man: How did your presentation go? Woman: It was a piece of cake. Question: What does the woman imply?',
                    transcript: 'Man: How did your presentation go?\nWoman: It was a piece of cake.\nQuestion: What does the woman imply?',
                    question: 'What does the woman imply?',
                    questionTh: 'ผู้หญิงบอกใบ้ว่าอะไร?',
                    choices: [
                        'She ate cake during the presentation.',
                        'The presentation was extremely easy.',
                        'The presentation was canceled.',
                        'She brought cake for everyone.'
                    ],
                    answer: 1,
                    explanationTh: 'สำนวน "a piece of cake" แปลว่า เรื่องกล้วยๆ ง่ายมากๆ (extremely easy)',
                    explanationEn: '"A piece of cake" is a common idiom meaning something is very easy to do.'
                },
                {
                    audio: 'Woman: Do you know what the new password is for the wifi? Man: Your guess is as good as mine. Question: What does the man mean?',
                    transcript: 'Woman: Do you know what the new password is for the wifi?\nMan: Your guess is as good as mine.\nQuestion: What does the man mean?',
                    question: 'What does the man mean?',
                    questionTh: 'ผู้ชายคนนี้หมายความว่าอย่างไร?',
                    choices: [
                        'He thinks the woman is good at guessing.',
                        'He doesn\'t know the password either.',
                        'He wants the woman to guess the password.',
                        'He thinks the wifi is broken.'
                    ],
                    answer: 1,
                    explanationTh: 'สำนวน "Your guess is as good as mine" แปลว่า "ฉันก็ไม่รู้เหมือนกัน" (เดาได้เท่าๆ กัน)',
                    explanationEn: 'This idiom is used to say that you do not know the answer to a question.'
                },
                {
                    audio: 'Man: Sarah seemed really upset about the test results. Woman: I know. She was in tears when she left the room. Question: What can be inferred about Sarah?',
                    transcript: 'Man: Sarah seemed really upset about the test results.\nWoman: I know. She was in tears when she left the room.\nQuestion: What can be inferred about Sarah?',
                    question: 'What can be inferred about Sarah?',
                    questionTh: 'เราสามารถอนุมาน (ตีความ) เกี่ยวกับ Sarah ได้ว่าอย่างไร?',
                    choices: [
                        'She did very well on the test.',
                        'She had something in her eye.',
                        'She performed poorly on the test.',
                        'She is moving to a new room.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงบอกว่า Sarah "was in tears" (ร้องไห้) หลังจากทราบผลสอบ ตีความได้ว่าเธอทำข้อสอบได้ไม่ดี (performed poorly)',
                    explanationEn: 'If someone is crying (in tears) over test results, it implies they failed or did poorly.'
                },
                {
                    audio: 'Woman: Is it okay if I turn in my assignment a day late? Man: I wouldn\'t push my luck if I were you. The professor is very strict. Question: What does the man mean?',
                    transcript: 'Woman: Is it okay if I turn in my assignment a day late?\nMan: I wouldn\'t push my luck if I were you. The professor is very strict.\nQuestion: What does the man mean?',
                    question: 'What does the man mean?',
                    questionTh: 'ผู้ชายหมายความว่าอย่างไร?',
                    choices: [
                        'The woman should try her luck in a casino.',
                        'The woman should not ask for an extension.',
                        'The professor will probably accept it.',
                        'The professor is a lucky person.'
                    ],
                    answer: 1,
                    explanationTh: 'สำนวน "push one\'s luck" แปลว่า "เสี่ยงโชค/ได้คืบจะเอาศอก" ผู้ชายเตือนว่าอย่าเสี่ยงดีกว่า เพราะอาจารย์ดุมาก แปลว่าไม่ควรขอเลื่อนส่งงาน (should not ask for an extension)',
                    explanationEn: 'To "push your luck" means to take a risk because you have been lucky so far. The man advises against taking this risk.'
                },
                {
                    audio: 'Man: I hear John got promoted to regional director. Woman: It\'s about time! He has been working so hard for years. Question: What does the woman imply?',
                    transcript: 'Man: I hear John got promoted to regional director.\nWoman: It\'s about time! He has been working so hard for years.\nQuestion: What does the woman imply?',
                    question: 'What does the woman imply?',
                    questionTh: 'ผู้หญิงบอกใบ้ว่าอะไร?',
                    choices: [
                        'John doesn\'t have enough time for the new job.',
                        'John was promoted quickly.',
                        'John deserved the promotion a long time ago.',
                        'She doesn\'t know what time it is.'
                    ],
                    answer: 2,
                    explanationTh: 'สำนวน "It\'s about time!" แปลว่า "มันถึงเวลาตั้งนานแล้ว!" หรือ "สมควรจะได้ตั้งนานแล้ว" (deserved a long time ago)',
                    explanationEn: '"It\'s about time" is used to say that something should have happened sooner.'
                }
            ]
        }
    ]
});
