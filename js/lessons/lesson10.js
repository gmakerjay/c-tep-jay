LESSONS.push({
    id: 10,
    part: 1,
    titleTh: 'จำลองสอบ Long Dialogues (Simulation)',
    titleEn: 'Long Dialogues: Mixed Practice Simulation',
    icon: '🏆',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: การจำลองสอบเสมือนจริง',
            contentTh: 'ในบทนี้ คุณจะได้เจอกับบทสนทนาขนาดยาว (Long Dialogues) โดย 1 บทสนทนาจะถูกนำมาใช้ตอบคำถาม 3-4 ข้อต่อเนื่องกันแบบข้อสอบจริง ให้คุณตั้งใจฟัง จดโน้ต และเลือกคำตอบให้ถูกต้อง',
            contentEn: 'This lesson simulates the actual CU-TEP exam format. You will listen to extended dialogues and answer a series of questions based on each audio clip.',
            bullets: [
                'คำถามข้อ 1-3 ใช้บทสนทนาที่ 1 (Campus Event)',
                'คำถามข้อ 4-6 ใช้บทสนทนาที่ 2 (Academic Advising)',
                'คำถามข้อ 7-10 ใช้บทสนทนาที่ 3 (Travel & Booking)'
            ]
        },
        {
            type: 'quiz',
            title: 'Long Dialogues Simulation (10 ข้อ)',
            questions: [
                {
                    audio: '[Dialogue 1] Man: Have you seen the flyers for the International Food Festival? Woman: Yes, it\'s going to be in the main quad this Saturday, right? Man: Actually, they moved it to the student union building because rain is in the forecast. Woman: Oh, that\'s a smart move. Are you volunteering this year? Man: Yeah, I\'m helping out at the Japanese booth. We are serving takoyaki. Question: Where will the festival be held?',
                    transcript: '[Dialogue 1 for Q1-Q3]\nMan: Have you seen the flyers for the International Food Festival?\nWoman: Yes, it\'s going to be in the main quad this Saturday, right?\nMan: Actually, they moved it to the student union building because rain is in the forecast.\nWoman: Oh, that\'s a smart move. Are you volunteering this year?\nMan: Yeah, I\'m helping out at the Japanese booth. We are serving takoyaki.\n\nQuestion 1: Where will the festival be held?',
                    question: 'Where will the festival be held?',
                    questionTh: 'เทศกาลจะจัดขึ้นที่ไหน?',
                    choices: [
                        'In the main quad.',
                        'At a Japanese restaurant.',
                        'In the student union building.',
                        'At the local park.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายบอกว่า "they moved it to the student union building" (พวกเขาย้ายไปที่ตึกกิจกรรมนักศึกษาแล้ว)',
                    explanationEn: 'The location was changed from the main quad to the student union building due to the weather.'
                },
                {
                    audio: '[Dialogue 1] Man: Have you seen the flyers for the International Food Festival? Woman: Yes, it\'s going to be in the main quad this Saturday, right? Man: Actually, they moved it to the student union building because rain is in the forecast. Woman: Oh, that\'s a smart move. Are you volunteering this year? Man: Yeah, I\'m helping out at the Japanese booth. We are serving takoyaki. Question: Why was the location changed?',
                    transcript: '[Same Audio: Dialogue 1]\n\nQuestion 2: Why was the location changed?',
                    question: 'Why was the location changed?',
                    questionTh: 'ทำไมสถานที่จัดงานถึงถูกเปลี่ยน?',
                    choices: [
                        'Because the main quad is under construction.',
                        'Because they expect bad weather.',
                        'Because the student union is larger.',
                        'Because the Japanese booth needed electricity.'
                    ],
                    answer: 1,
                    explanationTh: 'เหตุผลที่เปลี่ยนคือ "because rain is in the forecast" (เพราะพยากรณ์ว่าฝนจะตก) ตรงกับ bad weather',
                    explanationEn: '"Rain is in the forecast" implies bad weather conditions.'
                },
                {
                    audio: '[Dialogue 1] Man: Have you seen the flyers for the International Food Festival? Woman: Yes, it\'s going to be in the main quad this Saturday, right? Man: Actually, they moved it to the student union building because rain is in the forecast. Woman: Oh, that\'s a smart move. Are you volunteering this year? Man: Yeah, I\'m helping out at the Japanese booth. We are serving takoyaki. Question: What is the man\'s role at the festival?',
                    transcript: '[Same Audio: Dialogue 1]\n\nQuestion 3: What is the man\'s role at the festival?',
                    question: 'What is the man\'s role at the festival?',
                    questionTh: 'บทบาทของผู้ชายในงานเทศกาลคืออะไร?',
                    choices: [
                        'He is the organizer.',
                        'He is a volunteer at a food booth.',
                        'He is a paying customer.',
                        'He is the chef of the student union.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายตอบว่า "Yeah, I\'m helping out at the Japanese booth" แปลว่าเขาเป็นอาสาสมัคร (volunteer)',
                    explanationEn: 'He confirms he is volunteering and helping out at the Japanese booth.'
                },
                {
                    audio: '[Dialogue 2] Woman: Professor Davis, do you have a moment? Man: Sure, Lisa. What can I help you with? Woman: I am struggling with my graduation requirements. I need one more humanities credit, but the Art History class clashes with my Biology lab. Man: Let me see your transcript. Ah, you could take Intro to Philosophy online. It fulfills the requirement and gives you a flexible schedule. Question: What is the woman\'s problem?',
                    transcript: '[Dialogue 2 for Q4-Q6]\nWoman: Professor Davis, do you have a moment?\nMan: Sure, Lisa. What can I help you with?\nWoman: I am struggling with my graduation requirements. I need one more humanities credit, but the Art History class clashes with my Biology lab.\nMan: Let me see your transcript. Ah, you could take Intro to Philosophy online. It fulfills the requirement and gives you a flexible schedule.\n\nQuestion 4: What is the woman\'s problem?',
                    question: 'What is the woman\'s problem?',
                    questionTh: 'ปัญหาของผู้หญิงคืออะไร?',
                    choices: [
                        'She failed her Biology lab.',
                        'She cannot find the philosophy building.',
                        'She has a scheduling conflict for a required class.',
                        'She wants to drop out of college.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงบอกว่า "Art History class clashes with my Biology lab" (วิชาประวัติศาสตร์ศิลปะเวลาชนกับแล็บชีวะ) แปลว่าเธอมีปัญหาตารางเรียนชนกัน (scheduling conflict)',
                    explanationEn: 'The word "clashes" indicates a scheduling conflict.'
                },
                {
                    audio: '[Dialogue 2] Woman: Professor Davis, do you have a moment? Man: Sure, Lisa. What can I help you with? Woman: I am struggling with my graduation requirements. I need one more humanities credit, but the Art History class clashes with my Biology lab. Man: Let me see your transcript. Ah, you could take Intro to Philosophy online. It fulfills the requirement and gives you a flexible schedule. Question: What does the professor suggest?',
                    transcript: '[Same Audio: Dialogue 2]\n\nQuestion 5: What does the professor suggest?',
                    question: 'What does the professor suggest?',
                    questionTh: 'ศาสตราจารย์แนะนำอะไร?',
                    choices: [
                        'Skip the Biology lab.',
                        'Take an online philosophy course.',
                        'Delay graduation by one semester.',
                        'Switch her major to humanities.'
                    ],
                    answer: 1,
                    explanationTh: 'อาจารย์แนะนำว่า "you could take Intro to Philosophy online" (ไปเรียนปรัชญาออนไลน์สิ)',
                    explanationEn: 'He suggests taking Intro to Philosophy online to avoid the scheduling conflict.'
                },
                {
                    audio: '[Dialogue 2] Woman: Professor Davis, do you have a moment? Man: Sure, Lisa. What can I help you with? Woman: I am struggling with my graduation requirements. I need one more humanities credit, but the Art History class clashes with my Biology lab. Man: Let me see your transcript. Ah, you could take Intro to Philosophy online. It fulfills the requirement and gives you a flexible schedule. Question: What is the main advantage of the professor\'s suggestion?',
                    transcript: '[Same Audio: Dialogue 2]\n\nQuestion 6: What is the main advantage of the professor\'s suggestion?',
                    question: 'What is the main advantage of the professor\'s suggestion?',
                    questionTh: 'ข้อได้เปรียบหลักของคำแนะนำของอาจารย์คืออะไร?',
                    choices: [
                        'It is cheaper.',
                        'It offers a flexible schedule.',
                        'It has no homework.',
                        'It is taught by Professor Davis.'
                    ],
                    answer: 1,
                    explanationTh: 'อาจารย์บอกว่าเรียนออนไลน์จะ "gives you a flexible schedule" (มีตารางเวลาที่ยืดหยุ่นได้)',
                    explanationEn: 'The online course offers a flexible schedule, which solves her time conflict.'
                },
                {
                    audio: '[Dialogue 3] Man: I would like to book a flight to Chicago for the 15th of November, returning on the 20th. Woman: Let me check the availability. Do you prefer a morning or an evening departure? Man: Morning, preferably before 9 AM. I have a business meeting at 1 PM. Woman: I have a direct flight leaving at 7:30 AM. The total comes to three hundred and fifty dollars. Question: What is the man\'s destination?',
                    transcript: '[Dialogue 3 for Q7-Q10]\nMan: I would like to book a flight to Chicago for the 15th of November, returning on the 20th.\nWoman: Let me check the availability. Do you prefer a morning or an evening departure?\nMan: Morning, preferably before 9 AM. I have a business meeting at 1 PM.\nWoman: I have a direct flight leaving at 7:30 AM. The total comes to three hundred and fifty dollars.\n\nQuestion 7: What is the man\'s destination?',
                    question: 'What is the man\'s destination?',
                    questionTh: 'จุดหมายปลายทางของผู้ชายคือที่ไหน?',
                    choices: [
                        'New York.',
                        'Chicago.',
                        'London.',
                        'Los Angeles.'
                    ],
                    answer: 1,
                    explanationTh: 'เขาบอกว่า "book a flight to Chicago" (จองเที่ยวบินไปชิคาโก)',
                    explanationEn: 'He explicitly asks to book a flight to Chicago.'
                },
                {
                    audio: '[Dialogue 3] Man: I would like to book a flight to Chicago for the 15th of November, returning on the 20th. Woman: Let me check the availability. Do you prefer a morning or an evening departure? Man: Morning, preferably before 9 AM. I have a business meeting at 1 PM. Woman: I have a direct flight leaving at 7:30 AM. The total comes to three hundred and fifty dollars. Question: Why does the man want an early flight?',
                    transcript: '[Same Audio: Dialogue 3]\n\nQuestion 8: Why does the man want an early flight?',
                    question: 'Why does the man want an early flight?',
                    questionTh: 'ทำไมผู้ชายถึงต้องการเที่ยวบินรอบเช้า?',
                    choices: [
                        'He wants to see the sunrise.',
                        'He has a business meeting in the afternoon.',
                        'Morning flights are cheaper.',
                        'He hates flying at night.'
                    ],
                    answer: 1,
                    explanationTh: 'เขาบอกว่า "I have a business meeting at 1 PM" (มีประชุมงานตอนบ่ายโมง)',
                    explanationEn: 'He needs to arrive in time for his 1 PM business meeting.'
                },
                {
                    audio: '[Dialogue 3] Man: I would like to book a flight to Chicago for the 15th of November, returning on the 20th. Woman: Let me check the availability. Do you prefer a morning or an evening departure? Man: Morning, preferably before 9 AM. I have a business meeting at 1 PM. Woman: I have a direct flight leaving at 7:30 AM. The total comes to three hundred and fifty dollars. Question: How much does the flight cost?',
                    transcript: '[Same Audio: Dialogue 3]\n\nQuestion 9: How much does the flight cost?',
                    question: 'How much does the flight cost?',
                    questionTh: 'เที่ยวบินนี้ราคาเท่าไหร่?',
                    choices: [
                        '$250',
                        '$300',
                        '$350',
                        '$400'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงบอกว่า "three hundred and fifty dollars" (350 ดอลลาร์)',
                    explanationEn: 'The agent states the total is three hundred and fifty dollars.'
                },
                {
                    audio: '[Dialogue 3] Man: I would like to book a flight to Chicago for the 15th of November, returning on the 20th. Woman: Let me check the availability. Do you prefer a morning or an evening departure? Man: Morning, preferably before 9 AM. I have a business meeting at 1 PM. Woman: I have a direct flight leaving at 7:30 AM. The total comes to three hundred and fifty dollars. Question: What kind of flight did the woman find?',
                    transcript: '[Same Audio: Dialogue 3]\n\nQuestion 10: What kind of flight did the woman find?',
                    question: 'What kind of flight did the woman find?',
                    questionTh: 'ผู้หญิงหาเที่ยวบินแบบไหนให้เขาได้?',
                    choices: [
                        'A connecting flight with two stops.',
                        'An overnight flight.',
                        'A direct flight leaving at 7:30 AM.',
                        'A delayed flight.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงเสนอ "a direct flight leaving at 7:30 AM" (บินตรงออกตอน 7 โมงครึ่ง)',
                    explanationEn: 'She specifically offers a direct flight that departs at 7:30 AM.'
                }
            ]
        }
    ]
});
