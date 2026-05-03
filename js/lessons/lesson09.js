LESSONS.push({
    id: 9,
    part: 1,
    titleTh: 'การอนุมานและสรุปความ (Inferences in Long Dialogues)',
    titleEn: 'Long Dialogues: Making Inferences and Conclusions',
    icon: '🤔',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: การตีความจากน้ำเสียงและบริบท',
            contentTh: 'คำถาม Inferences คือคำถามที่ "ไม่ได้บอกคำตอบมาตรงๆ" คุณต้องใช้เหตุผลและการปะติดปะต่อข้อมูลเพื่อเดาเหตุการณ์ที่น่าจะเกิดขึ้นต่อไป หรือสรุปความรู้สึกของผู้พูด',
            contentEn: 'Inference questions require you to read between the lines. The answer is not explicitly stated in the dialogue; instead, you must conclude it based on the facts provided and the speaker\'s tone.',
            bullets: [
                'คำถามยอดฮิต: "What will the man probably do next?" (ผู้ชายจะทำอะไรต่อไป?)',
                'คำถามยอดฮิต: "What can be inferred about the woman?" (เราสามารถสรุปเกี่ยวกับผู้หญิงได้ว่าอย่างไร?)',
                'ฟังคำเชื่อม: คำอย่างเช่น "However" หรือ "But" มักจะนำไปสู่ข้อสรุปที่หักมุม'
            ]
        },
        {
            type: 'grammar',
            title: 'วิธีตีความจากสถานการณ์ (Situational Cues)',
            contentTh: 'ถ้าคุณได้ยินสถานการณ์เหล่านี้ ให้เตรียมตีความล่วงหน้าได้เลย:',
            rules: [
                { formula: 'ปัญหา + การปฏิเสธความช่วยเหลือ', explanation: 'สรุปได้ว่า ผู้พูดจะพยายามแก้ปัญหาด้วยตัวเอง' },
                { formula: 'ปัญหา + การรับฟังคำแนะนำ', explanation: 'สรุปได้ว่า ผู้พูดจะทำตามที่ได้รับคำแนะนำ (What will they do next?)' },
                { formula: 'การบ่น + การแสดงความผิดหวัง', explanation: 'สรุปได้ว่า ผู้พูดไม่มีความสุขหรือผิดหวังกับสิ่งที่เกิดขึ้น' }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟัง: อนุมานเรื่องราว (10 ข้อ)',
            questions: [
                {
                    audio: 'Man: The weather forecast said it\'s going to rain heavily this afternoon, and our tennis match is scheduled outdoors. Woman: I know. The sports center has some indoor courts, but they are usually fully booked by members. Question: What will the speakers probably do next?',
                    transcript: 'Man: The weather forecast said it\'s going to rain heavily this afternoon, and our tennis match is scheduled outdoors.\nWoman: I know. The sports center has some indoor courts, but they are usually fully booked by members.\nQuestion: What will the speakers probably do next?',
                    question: 'What will the speakers probably do next?',
                    questionTh: 'ผู้พูดน่าจะทำอะไรต่อไป?',
                    choices: [
                        'Play tennis in the rain.',
                        'Cancel the tennis match entirely.',
                        'Call the sports center to check for indoor court availability.',
                        'Join a gym membership.'
                    ],
                    answer: 2,
                    explanationTh: 'ฝนกำลังจะตกและผู้หญิงเสนอเรื่องสนามในร่ม (indoor courts) แม้จะบอกว่ามักจะเต็ม แต่สิ่งที่มีเหตุผลที่สุดที่ต้องทำต่อไปคือ การโทรไปเช็คว่าว่างไหม',
                    explanationEn: 'Given the rain and the mention of indoor courts, it is highly probable they will try to book one.'
                },
                {
                    audio: 'Woman: Are you coming to the networking event tonight? It\'s a great opportunity to meet the regional directors. Man: I still have fifty exams to grade before tomorrow morning, and I haven\'t even started on the rubric. Question: What can be inferred about the man?',
                    transcript: 'Woman: Are you coming to the networking event tonight? It\'s a great opportunity to meet the regional directors.\nMan: I still have fifty exams to grade before tomorrow morning, and I haven\'t even started on the rubric.\nQuestion: What can be inferred about the man?',
                    question: 'What can be inferred about the man?',
                    questionTh: 'เราสามารถอนุมานเกี่ยวกับผู้ชายได้ว่าอย่างไร?',
                    choices: [
                        'He is excited to meet the directors.',
                        'He is a regional director.',
                        'He will not attend the networking event.',
                        'He failed his exam.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายบอกว่าเขามีข้อสอบ 50 ชุดที่ต้องตรวจให้เสร็จก่อนพรุ่งนี้เช้า แปลว่าเขายุ่งมากและน่าจะไม่ได้ไปงานคืนนี้ (He will not attend)',
                    explanationEn: 'His heavy workload implies he will not have time to attend the networking event.'
                },
                {
                    audio: 'Man: I can\'t believe I got a parking ticket! I was only parked there for five minutes while I grabbed a coffee. Woman: Did you see the red line on the curb? It means no parking at any time. Question: What can be inferred from the conversation?',
                    transcript: 'Man: I can\'t believe I got a parking ticket! I was only parked there for five minutes while I grabbed a coffee.\nWoman: Did you see the red line on the curb? It means no parking at any time.\nQuestion: What can be inferred from the conversation?',
                    question: 'What can be inferred from the conversation?',
                    questionTh: 'อนุมานจากบทสนทนาได้ว่าอย่างไร?',
                    choices: [
                        'The man parked illegally.',
                        'The coffee was very expensive.',
                        'The woman gave him the ticket.',
                        'The man loves red cars.'
                    ],
                    answer: 0,
                    explanationTh: 'ผู้ชายได้ใบสั่ง (parking ticket) และผู้หญิงชี้ให้เห็นว่าจอดตรงเส้นแดงซึ่งห้ามจอดเด็ดขาด แสดงว่าเขาจอดรถผิดกฎหมาย (parked illegally)',
                    explanationEn: 'Getting a ticket for parking in a no-parking zone (red line) means he parked illegally.'
                },
                {
                    audio: 'Woman: I applied for the marketing director position three weeks ago, but I haven\'t heard anything back. Man: Don\'t lose hope yet. They said during the meeting that the HR department is completely overwhelmed with applications this month. Question: What does the man imply?',
                    transcript: 'Woman: I applied for the marketing director position three weeks ago, but I haven\'t heard anything back.\nMan: Don\'t lose hope yet. They said during the meeting that the HR department is completely overwhelmed with applications this month.\nQuestion: What does the man imply?',
                    question: 'What does the man imply?',
                    questionTh: 'ผู้ชายบอกใบ้ว่าอะไร?',
                    choices: [
                        'The woman did not get the job.',
                        'The HR department lost her application.',
                        'The hiring process is just taking longer than usual.',
                        'The woman should apply for a different job.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายบอกว่า "HR ยุ่งมากเพราะใบสมัครเยอะ" (overwhelmed with applications) แสดงว่าขั้นตอนการจ้างงานแค่ล่าช้ากว่าปกติเฉยๆ ยังพอมีความหวัง',
                    explanationEn: 'The man implies that the delay is due to HR being busy, not because she was rejected.'
                },
                {
                    audio: 'Man: My laptop is incredibly slow today, and it keeps shutting down randomly. Woman: You should take it to the IT support center. They close at 5 PM though. Man: It\'s already 4:30. I better hurry. Question: What will the man probably do next?',
                    transcript: 'Man: My laptop is incredibly slow today, and it keeps shutting down randomly.\nWoman: You should take it to the IT support center. They close at 5 PM though.\nMan: It\'s already 4:30. I better hurry.\nQuestion: What will the man probably do next?',
                    question: 'What will the man probably do next?',
                    questionTh: 'ผู้ชายน่าจะทำอะไรต่อไป?',
                    choices: [
                        'Buy a new laptop.',
                        'Go to the IT support center immediately.',
                        'Wait until tomorrow.',
                        'Fix the laptop himself.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายบอกว่าตอนนี้ 4:30 แล้ว (ศูนย์ปิด 5 โมง) และพูดว่า "I better hurry" (ฉันควรรีบไป) แสดงว่าเขาจะรีบไปที่ศูนย์ไอทีทันที',
                    explanationEn: 'He acknowledges the closing time and says he must hurry, implying he is going there right now.'
                },
                {
                    audio: 'Woman: How was your vacation in Hawaii? Man: The hotel was nice, but it rained for six straight days out of the seven we were there. Question: What can be inferred about the man\'s vacation?',
                    transcript: 'Woman: How was your vacation in Hawaii?\nMan: The hotel was nice, but it rained for six straight days out of the seven we were there.\nQuestion: What can be inferred about the man\'s vacation?',
                    question: 'What can be inferred about the man\'s vacation?',
                    questionTh: 'อนุมานเกี่ยวกับวันหยุดพักผ่อนของผู้ชายได้ว่าอย่างไร?',
                    choices: [
                        'He stayed in Hawaii for six days.',
                        'He got heavily sunburned.',
                        'His vacation was largely ruined by bad weather.',
                        'He enjoyed the rain.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายไปเที่ยว 7 วัน แต่ฝนตกไปซะ 6 วัน แสดงว่าวันหยุดของเขาพังทลายเพราะสภาพอากาศที่เลวร้าย (largely ruined by bad weather)',
                    explanationEn: 'Raining for six out of seven days during a tropical vacation implies it was mostly ruined.'
                },
                {
                    audio: 'Man: I thought Professor Green\'s policy on late assignments was strict, but he let me submit my essay a week late! Woman: Really? He must have made an exception because you were in the hospital. Question: What can be inferred about Professor Green?',
                    transcript: 'Man: I thought Professor Green\'s policy on late assignments was strict, but he let me submit my essay a week late!\nWoman: Really? He must have made an exception because you were in the hospital.\nQuestion: What can be inferred about Professor Green?',
                    question: 'What can be inferred about Professor Green?',
                    questionTh: 'อนุมานเกี่ยวกับศาสตราจารย์กรีนได้ว่าอย่างไร?',
                    choices: [
                        'He is generally lenient with all students.',
                        'He rarely allows late submissions.',
                        'He is a medical doctor.',
                        'He didn\'t read the essay.'
                    ],
                    answer: 1,
                    explanationTh: 'ทั้งคู่พูดว่าปกติแล้วนโยบายเรื่องส่งงานช้าของอาจารย์นั้นเข้มงวดมาก (strict) การที่เขายอมให้ส่งช้าได้ครั้งนี้ถือเป็นข้อยกเว้น (exception) แสดงว่าปกติเขาไม่ค่อยยอม',
                    explanationEn: 'He is known for being strict and this was an exception, implying he rarely allows late work.'
                },
                {
                    audio: 'Woman: Have you finished reviewing the financial report? Man: I\'m on page two, and I have already found three calculation errors. Question: What will the man probably do?',
                    transcript: 'Woman: Have you finished reviewing the financial report?\nMan: I\'m on page two, and I have already found three calculation errors.\nQuestion: What will the man probably do?',
                    question: 'What will the man probably do?',
                    questionTh: 'ผู้ชายน่าจะทำอะไร?',
                    choices: [
                        'Approve the financial report immediately.',
                        'Praise the accountant for a good job.',
                        'Continue reviewing the rest of the report carefully.',
                        'Stop reading and throw the report away.'
                    ],
                    answer: 2,
                    explanationTh: 'เขาเพิ่งอ่านถึงหน้า 2 แต่เจอข้อผิดพลาดถึง 3 จุดแล้ว เขาจึงต้องอ่านส่วนที่เหลือต่อไปอย่างระมัดระวังแน่นอน',
                    explanationEn: 'Finding multiple errors early on means he must continue reviewing the document very carefully.'
                },
                {
                    audio: 'Man: I don\'t think I can afford to live off-campus next semester. Rent prices have skyrocketed. Woman: Have you considered applying for a Resident Assistant position? You get free housing in the dorms if you are selected. Question: What is the woman doing?',
                    transcript: 'Man: I don\'t think I can afford to live off-campus next semester. Rent prices have skyrocketed.\nWoman: Have you considered applying for a Resident Assistant position? You get free housing in the dorms if you are selected.\nQuestion: What is the woman doing?',
                    question: 'What is the woman doing?',
                    questionTh: 'ผู้หญิงกำลังทำอะไร?',
                    choices: [
                        'Offering the man a place to live.',
                        'Complaining about rent prices.',
                        'Applying for a job herself.',
                        'Suggesting a solution to the man\'s financial problem.'
                    ],
                    answer: 3,
                    explanationTh: 'ผู้ชายมีปัญหาเรื่องเงินค่าเช่า (financial problem) ผู้หญิงจึง "suggesting" (เสนอแนะ) ให้ไปสมัครเป็นผู้ช่วยหอพักเพื่อจะได้อยู่ฟรี ซึ่งเป็นการเสนอทางแก้ปัญหาให้เขา',
                    explanationEn: 'She is providing a suggestion (becoming an RA) to solve his housing affordability issue.'
                },
                {
                    audio: 'Woman: Do you know if the library is still open? Man: It\'s past midnight on a Sunday. Question: What does the man imply?',
                    transcript: 'Woman: Do you know if the library is still open?\nMan: It\'s past midnight on a Sunday.\nQuestion: What does the man imply?',
                    question: 'What does the man imply?',
                    questionTh: 'ผู้ชายบอกใบ้ว่าอะไร?',
                    choices: [
                        'The library is crowded.',
                        'The library is definitely closed.',
                        'He doesn\'t know what day it is.',
                        'He wants to go to sleep.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายไม่ได้ตอบ Yes/No แต่ตอบแบบบอกใบ้ว่า "นี่มันเลยเที่ยงคืนวันอาทิตย์แล้วนะ" ซึ่งทุกคนรู้ดีว่าเวลาแบบนี้ห้องสมุดปิดแน่นอน (The library is definitely closed)',
                    explanationEn: 'By pointing out that it is extremely late on a Sunday, he implies that the library is closed.'
                }
            ]
        }
    ]
});
