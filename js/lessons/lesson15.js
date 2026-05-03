LESSONS.push({
    id: 15,
    part: 1,
    titleTh: 'จำลองสอบ Short Talks (Simulation)',
    titleEn: 'Short Talks: Mixed Practice Simulation',
    icon: '🏆',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: การจำลองสอบเสมือนจริง',
            contentTh: 'ในบทนี้ คุณจะได้เจอกับการบรรยายเดี่ยว (Monologues) จำนวน 3 เรื่อง แบบคละประเภท (ข่าว, เลกเชอร์, ประกาศ) โดย 1 เรื่องจะถูกนำมาใช้ตอบคำถาม 3-4 ข้อรวด ให้คุณตั้งใจฟังและจับประเด็นให้ดี',
            contentEn: 'This lesson simulates the actual CU-TEP exam format for Part 3. You will listen to extended monologues and answer a series of questions based on each audio clip without seeing the questions beforehand in a real exam.',
            bullets: [
                'คำถามข้อ 1-3 ใช้บทบรรยายที่ 1 (Radio News)',
                'คำถามข้อ 4-6 ใช้บทบรรยายที่ 2 (Museum Tour)',
                'คำถามข้อ 7-10 ใช้บทบรรยายที่ 3 (Business Lecture)'
            ]
        },
        {
            type: 'quiz',
            title: 'Short Talks Simulation (10 ข้อ)',
            questions: [
                {
                    audio: '[Talk 1] You are listening to City FM News. In local headlines, the mayor has officially announced the opening of the new downtown subway line, which will begin operations next Monday. This project, which took over five years to complete, is expected to reduce city traffic by nearly twenty percent. To celebrate, all subway rides on the new line will be completely free for the first week. Now, let\'s move on to the sports update. Question 1: What is the main subject of the news report?',
                    transcript: '[Talk 1 for Q1-Q3]\nYou are listening to City FM News. In local headlines, the mayor has officially announced the opening of the new downtown subway line, which will begin operations next Monday. This project, which took over five years to complete, is expected to reduce city traffic by nearly twenty percent. To celebrate, all subway rides on the new line will be completely free for the first week. Now, let\'s move on to the sports update.\n\nQuestion 1: What is the main subject of the news report?',
                    question: 'What is the main subject of the news report?',
                    questionTh: 'หัวข้อหลักของรายงานข่าวนี้คืออะไร?',
                    choices: [
                        'A recent sports event.',
                        'The election of a new mayor.',
                        'The opening of a new subway line.',
                        'A sudden increase in city traffic.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ประกาศข่าวกล่าวว่า "mayor has officially announced the opening of the new downtown subway line" (นายกเทศมนตรีประกาศเปิดใช้รถไฟใต้ดินสายใหม่)',
                    explanationEn: 'The news focuses on the new downtown subway line opening.'
                },
                {
                    audio: '[Talk 1] You are listening to City FM News. In local headlines, the mayor has officially announced the opening of the new downtown subway line, which will begin operations next Monday. This project, which took over five years to complete, is expected to reduce city traffic by nearly twenty percent. To celebrate, all subway rides on the new line will be completely free for the first week. Now, let\'s move on to the sports update. Question 2: How long did the project take to complete?',
                    transcript: '[Same Audio: Talk 1]\n\nQuestion 2: How long did the project take to complete?',
                    question: 'How long did the project take to complete?',
                    questionTh: 'โครงการนี้ใช้เวลาสร้างนานเท่าไหร่?',
                    choices: [
                        'One week.',
                        'Nearly twenty years.',
                        'Over five years.',
                        'Since last Monday.'
                    ],
                    answer: 2,
                    explanationTh: 'ในข่าวระบุว่า "This project, which took over five years to complete" (โครงการนี้ใช้เวลาสร้างกว่า 5 ปี)',
                    explanationEn: 'The reporter explicitly states the project took over five years to complete.'
                },
                {
                    audio: '[Talk 1] You are listening to City FM News. In local headlines, the mayor has officially announced the opening of the new downtown subway line, which will begin operations next Monday. This project, which took over five years to complete, is expected to reduce city traffic by nearly twenty percent. To celebrate, all subway rides on the new line will be completely free for the first week. Now, let\'s move on to the sports update. Question 3: What special promotion is offered for the new subway line?',
                    transcript: '[Same Audio: Talk 1]\n\nQuestion 3: What special promotion is offered for the new subway line?',
                    question: 'What special promotion is offered for the new subway line?',
                    questionTh: 'มีโปรโมชั่นพิเศษอะไรสำหรับรถไฟสายใหม่?',
                    choices: [
                        'Free tickets for the mayor.',
                        'Free rides for the first week.',
                        'A twenty percent discount on tickets.',
                        'Free snacks on the train.'
                    ],
                    answer: 1,
                    explanationTh: 'ข่าวแจ้งว่า "all subway rides on the new line will be completely free for the first week" (ขึ้นรถไฟฟรีตลอดสัปดาห์แรก)',
                    explanationEn: 'Rides will be completely free for the first week to celebrate the opening.'
                },
                {
                    audio: '[Talk 2] Welcome to the National History Museum. Today, we will be exploring the Ancient Egypt exhibit. Please note that food and drinks are strictly prohibited in all gallery areas to protect the artifacts. If you need a break, there is a cafe located on the ground floor next to the main entrance. We will begin our tour in the Mummy Room, so please follow me. Question 4: Where is this talk taking place?',
                    transcript: '[Talk 2 for Q4-Q6]\nWelcome to the National History Museum. Today, we will be exploring the Ancient Egypt exhibit. Please note that food and drinks are strictly prohibited in all gallery areas to protect the artifacts. If you need a break, there is a cafe located on the ground floor next to the main entrance. We will begin our tour in the Mummy Room, so please follow me.\n\nQuestion 4: Where is this talk taking place?',
                    question: 'Where is this talk taking place?',
                    questionTh: 'การบรรยายนี้เกิดขึ้นที่ไหน?',
                    choices: [
                        'In a hospital.',
                        'At an amusement park.',
                        'At a museum.',
                        'In an Egyptian tomb.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้พูดทักทายว่า "Welcome to the National History Museum" (ยินดีต้อนรับสู่พิพิธภัณฑ์ประวัติศาสตร์แห่งชาติ)',
                    explanationEn: 'The speaker explicitly says "Welcome to the National History Museum."'
                },
                {
                    audio: '[Talk 2] Welcome to the National History Museum. Today, we will be exploring the Ancient Egypt exhibit. Please note that food and drinks are strictly prohibited in all gallery areas to protect the artifacts. If you need a break, there is a cafe located on the ground floor next to the main entrance. We will begin our tour in the Mummy Room, so please follow me. Question 5: Why are food and drinks prohibited?',
                    transcript: '[Same Audio: Talk 2]\n\nQuestion 5: Why are food and drinks prohibited?',
                    question: 'Why are food and drinks prohibited?',
                    questionTh: 'ทำไมถึงห้ามนำอาหารและเครื่องดื่มเข้ามา?',
                    choices: [
                        'To keep the floors clean.',
                        'Because the cafe wants more customers.',
                        'To protect the historical artifacts.',
                        'Because they smell bad.'
                    ],
                    answer: 2,
                    explanationTh: 'ไกด์อธิบายเหตุผลว่า "to protect the artifacts" (เพื่อปกป้องโบราณวัตถุ)',
                    explanationEn: 'Food and drinks are prohibited specifically to protect the artifacts.'
                },
                {
                    audio: '[Talk 2] Welcome to the National History Museum. Today, we will be exploring the Ancient Egypt exhibit. Please note that food and drinks are strictly prohibited in all gallery areas to protect the artifacts. If you need a break, there is a cafe located on the ground floor next to the main entrance. We will begin our tour in the Mummy Room, so please follow me. Question 6: Where is the cafe located?',
                    transcript: '[Same Audio: Talk 2]\n\nQuestion 6: Where is the cafe located?',
                    question: 'Where is the cafe located?',
                    questionTh: 'คาเฟ่ตั้งอยู่ที่ไหน?',
                    choices: [
                        'In the Mummy Room.',
                        'On the second floor.',
                        'Outside the building.',
                        'On the ground floor next to the main entrance.'
                    ],
                    answer: 3,
                    explanationTh: 'ไกด์บอกชัดเจนว่า "a cafe located on the ground floor next to the main entrance" (ชั้นล่างติดกับทางเข้าหลัก)',
                    explanationEn: 'The cafe is on the ground floor next to the main entrance.'
                },
                {
                    audio: '[Talk 3] In today\'s business management seminar, we are going to discuss the importance of workplace ergonomics. Ergonomics is the science of designing the workspace to fit the worker, rather than forcing the worker to fit the workspace. Poor ergonomics, like having a chair that is too low or a monitor that is too high, can lead to severe back pain and decreased productivity. By investing in adjustable desks and proper chairs, companies can reduce sick leave and boost overall efficiency. Question 7: What is the main topic of the seminar?',
                    transcript: '[Talk 3 for Q7-Q10]\nIn today\'s business management seminar, we are going to discuss the importance of workplace ergonomics. Ergonomics is the science of designing the workspace to fit the worker, rather than forcing the worker to fit the workspace. Poor ergonomics, like having a chair that is too low or a monitor that is too high, can lead to severe back pain and decreased productivity. By investing in adjustable desks and proper chairs, companies can reduce sick leave and boost overall efficiency.\n\nQuestion 7: What is the main topic of the seminar?',
                    question: 'What is the main topic of the seminar?',
                    questionTh: 'หัวข้อหลักของสัมมนาคืออะไร?',
                    choices: [
                        'How to build a wooden desk.',
                        'Workplace ergonomics.',
                        'How to treat severe back pain.',
                        'Business accounting.'
                    ],
                    answer: 1,
                    explanationTh: 'อาจารย์เกริ่นนำชัดเจนว่า "discuss the importance of workplace ergonomics" (การยศาสตร์ในที่ทำงาน)',
                    explanationEn: 'The seminar focuses on workplace ergonomics and its importance.'
                },
                {
                    audio: '[Talk 3] In today\'s business management seminar, we are going to discuss the importance of workplace ergonomics. Ergonomics is the science of designing the workspace to fit the worker, rather than forcing the worker to fit the workspace. Poor ergonomics, like having a chair that is too low or a monitor that is too high, can lead to severe back pain and decreased productivity. By investing in adjustable desks and proper chairs, companies can reduce sick leave and boost overall efficiency. Question 8: How does the speaker define ergonomics?',
                    transcript: '[Same Audio: Talk 3]\n\nQuestion 8: How does the speaker define ergonomics?',
                    question: 'How does the speaker define ergonomics?',
                    questionTh: 'ผู้พูดให้นิยามคำว่า Ergonomics ว่าอย่างไร?',
                    choices: [
                        'Designing the workspace to fit the worker.',
                        'Forcing the worker to work harder.',
                        'The science of making chairs.',
                        'A type of physical therapy.'
                    ],
                    answer: 0,
                    explanationTh: 'ผู้พูดนิยามว่า "designing the workspace to fit the worker" (การออกแบบพื้นที่ทำงานให้เข้ากับตัวพนักงาน)',
                    explanationEn: 'Ergonomics is defined as designing the workspace to fit the worker.'
                },
                {
                    audio: '[Talk 3] In today\'s business management seminar, we are going to discuss the importance of workplace ergonomics. Ergonomics is the science of designing the workspace to fit the worker, rather than forcing the worker to fit the workspace. Poor ergonomics, like having a chair that is too low or a monitor that is too high, can lead to severe back pain and decreased productivity. By investing in adjustable desks and proper chairs, companies can reduce sick leave and boost overall efficiency. Question 9: What is one negative effect of poor ergonomics mentioned by the speaker?',
                    transcript: '[Same Audio: Talk 3]\n\nQuestion 9: What is one negative effect of poor ergonomics mentioned by the speaker?',
                    question: 'What is one negative effect of poor ergonomics mentioned by the speaker?',
                    questionTh: 'ผลกระทบด้านลบหนึ่งอย่างของการยศาสตร์ที่แย่คืออะไร?',
                    choices: [
                        'Increased company profits.',
                        'Severe back pain.',
                        'A messy desk.',
                        'Too much free time.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้พูดยกตัวอย่างว่า เก้าอี้ต่ำไปอาจทำให้เกิด "severe back pain" (ปวดหลังอย่างรุนแรง)',
                    explanationEn: 'Poor ergonomics can lead to severe back pain and decreased productivity.'
                },
                {
                    audio: '[Talk 3] In today\'s business management seminar, we are going to discuss the importance of workplace ergonomics. Ergonomics is the science of designing the workspace to fit the worker, rather than forcing the worker to fit the workspace. Poor ergonomics, like having a chair that is too low or a monitor that is too high, can lead to severe back pain and decreased productivity. By investing in adjustable desks and proper chairs, companies can reduce sick leave and boost overall efficiency. Question 10: How can companies benefit from investing in proper chairs?',
                    transcript: '[Same Audio: Talk 3]\n\nQuestion 10: How can companies benefit from investing in proper chairs?',
                    question: 'How can companies benefit from investing in proper chairs?',
                    questionTh: 'บริษัทจะได้ประโยชน์อะไรจากการลงทุนซื้อเก้าอี้ที่ดี?',
                    choices: [
                        'They can pay employees less.',
                        'They can sell the chairs for a profit.',
                        'They can reduce sick leave and boost efficiency.',
                        'They can avoid paying taxes.'
                    ],
                    answer: 2,
                    explanationTh: 'ประโยคสุดท้ายบอกว่า "companies can reduce sick leave and boost overall efficiency" (ลดวันลาป่วยและเพิ่มประสิทธิภาพ)',
                    explanationEn: 'Proper equipment reduces sick leave and boosts overall efficiency.'
                }
            ]
        }
    ]
});
