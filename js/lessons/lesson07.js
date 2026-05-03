LESSONS.push({
    id: 7,
    part: 1,
    titleTh: 'การจับใจความสำคัญ (Main Idea in Long Dialogues)',
    titleEn: 'Long Dialogues: Identifying the Main Idea',
    icon: '🎯',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: การหา Main Idea',
            contentTh: 'คำถามข้อแรกของ Long Dialogue มักจะเป็นคำถามภาพรวม เช่น "What are the speakers mainly discussing?" (ผู้พูดกำลังคุยเรื่องอะไรกันเป็นหลัก?)',
            contentEn: 'The first question following a long dialogue is usually a Main Idea question. You must synthesize the entire conversation rather than focusing on a single detail.',
            bullets: [
                'เทคนิค: คำตอบของคำถาม Main Idea มักจะซ่อนอยู่ใน "2-3 ประโยคแรก" ของบทสนทนา',
                'ระวังตัวหลอก (Distractors): ข้อสอบมักจะเอา "รายละเอียดปลีกย่อย (Minor details)" ที่พูดถึงแค่แปปเดียวในเรื่อง มาตั้งเป็นช้อยส์หลอก',
                'Main Idea ที่ดีต้องครอบคลุมเนื้อหาตั้งแต่ต้นจนจบ ไม่กว้างเกินไป และไม่แคบเกินไป'
            ]
        },
        {
            type: 'grammar',
            title: 'โครงสร้างคำถาม Main Idea ที่พบบ่อย',
            contentTh: 'หากคุณได้ยินประโยคคำถามเหล่านี้ แปลว่าข้อสอบกำลังถามหา Main Idea:',
            rules: [
                { formula: 'What is the main topic of this conversation?', explanation: 'หัวข้อหลักของบทสนทนานี้คืออะไร?' },
                { formula: 'What are the speakers mainly discussing?', explanation: 'ผู้พูดกำลังหารือกันเรื่องอะไรเป็นหลัก?' },
                { formula: 'What is the primary purpose of the dialogue?', explanation: 'จุดประสงค์หลักของบทสนทนานี้คืออะไร?' }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟัง: จับใจความสำคัญ (10 ข้อ)',
            questions: [
                {
                    audio: 'Man: Did you hear the announcement about the new recycling program on campus? Woman: Yes, they are placing new blue bins in every building starting next Monday. They want us to separate plastics from paper. Question: What are the speakers mainly discussing?',
                    transcript: 'Man: Did you hear the announcement about the new recycling program on campus?\nWoman: Yes, they are placing new blue bins in every building starting next Monday. They want us to separate plastics from paper.\nQuestion: What are the speakers mainly discussing?',
                    question: 'What are the speakers mainly discussing?',
                    questionTh: 'ผู้พูดกำลังคุยเรื่องอะไรกันเป็นหลัก?',
                    choices: [
                        'A new building construction.',
                        'A campus recycling program.',
                        'The color of the new bins.',
                        'How to make paper.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายเปิดเรื่องด้วย "new recycling program" และผู้หญิงก็พูดเสริมเรื่องการแยกขยะพลาสติกกับกระดาษ หัวข้อหลักจึงเป็นโครงการรีไซเคิล (A campus recycling program)',
                    explanationEn: 'The conversation is initiated by and entirely focused on the new recycling program.'
                },
                {
                    audio: 'Woman: I\'m having a really hard time keeping up with the assigned readings in Professor Smith\'s history class. Man: Have you tried joining a study group? My group meets on Tuesdays, and we divide the reading chapters among us. Question: What is the main topic of this conversation?',
                    transcript: 'Woman: I\'m having a really hard time keeping up with the assigned readings in Professor Smith\'s history class.\nMan: Have you tried joining a study group? My group meets on Tuesdays, and we divide the reading chapters among us.\nQuestion: What is the main topic of this conversation?',
                    question: 'What is the main topic of this conversation?',
                    questionTh: 'หัวข้อหลักของบทสนทนานี้คืออะไร?',
                    choices: [
                        'Professor Smith\'s teaching style.',
                        'Strategies for managing history readings.',
                        'The history of study groups.',
                        'Meeting on Tuesdays.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงบ่นเรื่องอ่านหนังสือวิชาประวัติศาสตร์ไม่ทัน และผู้ชายเสนอให้เข้ากลุ่มติว (study group) เพื่อช่วยกันอ่าน หัวข้อหลักคือ "กลยุทธ์/วิธีจัดการกับการอ่านหนังสือวิชาประวัติศาสตร์"',
                    explanationEn: 'The dialogue revolves around a problem (heavy reading load) and a proposed solution (joining a study group).'
                },
                {
                    audio: 'Man: Can you believe the traffic this morning? It took me over an hour just to get across the bridge. Woman: I know! They closed two lanes for road maintenance, and it\'s causing a massive bottleneck. Question: What are the speakers mainly discussing?',
                    transcript: 'Man: Can you believe the traffic this morning? It took me over an hour just to get across the bridge.\nWoman: I know! They closed two lanes for road maintenance, and it\'s causing a massive bottleneck.\nQuestion: What are the speakers mainly discussing?',
                    question: 'What are the speakers mainly discussing?',
                    questionTh: 'ผู้พูดคุยเรื่องอะไรกันเป็นหลัก?',
                    choices: [
                        'Building a new bridge.',
                        'The morning traffic congestion.',
                        'Buying a new car.',
                        'Road maintenance techniques.'
                    ],
                    answer: 1,
                    explanationTh: 'ทั้งคู่บ่นเรื่อง "traffic" (การจราจร) และ "bottleneck" (รถติดหนึบ) อันเกิดจากการซ่อมถนน หัวข้อหลักจึงเป็นเรื่อง "The morning traffic congestion" (รถติดตอนเช้า)',
                    explanationEn: 'They are complaining about the severe morning traffic caused by roadwork.'
                },
                {
                    audio: 'Woman: I am thinking about changing my major from Biology to Environmental Science. Man: Really? That\'s a big decision. What made you change your mind? Woman: I took an ecology elective last semester and absolutely loved the fieldwork. Question: What is the primary topic of the conversation?',
                    transcript: 'Woman: I am thinking about changing my major from Biology to Environmental Science.\nMan: Really? That\'s a big decision. What made you change your mind?\nWoman: I took an ecology elective last semester and absolutely loved the fieldwork.\nQuestion: What is the primary topic of the conversation?',
                    question: 'What is the primary topic of the conversation?',
                    questionTh: 'หัวข้อหลักของบทสนทนานี้คืออะไร?',
                    choices: [
                        'The difficulty of Biology.',
                        'The woman\'s decision to change her major.',
                        'A fieldwork excursion.',
                        'How to choose an elective.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงเปิดประเด็นเรื่อง "changing my major" (เปลี่ยนวิชาเอก) และอธิบายเหตุผล หัวข้อหลักคือเรื่องนี้',
                    explanationEn: 'The entire conversation stems from her consideration of changing her major to Environmental Science.'
                },
                {
                    audio: 'Man: Have you decided where you are going for winter break? Woman: I was planning to go skiing in Colorado, but the flights are incredibly expensive. I might just stay home and save money. Question: What are the speakers mainly discussing?',
                    transcript: 'Man: Have you decided where you are going for winter break?\nWoman: I was planning to go skiing in Colorado, but the flights are incredibly expensive. I might just stay home and save money.\nQuestion: What are the speakers mainly discussing?',
                    question: 'What are the speakers mainly discussing?',
                    questionTh: 'ผู้พูดกำลังคุยเรื่องอะไรกัน?',
                    choices: [
                        'The price of ski equipment.',
                        'Colorado\'s winter weather.',
                        'The woman\'s winter break plans.',
                        'How to book cheap flights.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายถามว่า "where you are going for winter break" (จะไปเที่ยวไหนตอนปิดเทอมฤดูหนาว) และผู้หญิงก็เล่าแผนการของเธอ',
                    explanationEn: 'The discussion is about what the woman will do during her winter break.'
                },
                {
                    audio: 'Woman: The library announced they are extending their hours during finals week. They will be open until 2 AM. Man: That is a lifesaver. I always study better late at night anyway. Question: What is the main subject of the conversation?',
                    transcript: 'Woman: The library announced they are extending their hours during finals week. They will be open until 2 AM.\nMan: That is a lifesaver. I always study better late at night anyway.\nQuestion: What is the main subject of the conversation?',
                    question: 'What is the main subject of the conversation?',
                    questionTh: 'หัวข้อหลักของบทสนทนานี้คืออะไร?',
                    choices: [
                        'The difficulty of final exams.',
                        'The library\'s extended operating hours.',
                        'The man\'s sleeping habits.',
                        'Finding a quiet place to study.'
                    ],
                    answer: 1,
                    explanationTh: 'เนื้อหาโฟกัสไปที่เรื่องการขยายเวลาเปิดห้องสมุด (extending hours) จนถึงตี 2',
                    explanationEn: 'The speakers are discussing the new extended library hours for finals week.'
                },
                {
                    audio: 'Man: I can\'t get the printer in the lab to work. It keeps showing a paper jam error, but there is no paper stuck inside. Woman: Let me take a look. Sometimes the sensor gets dirty and gives a false warning. Question: What are the speakers discussing?',
                    transcript: 'Man: I can\'t get the printer in the lab to work. It keeps showing a paper jam error, but there is no paper stuck inside.\nWoman: Let me take a look. Sometimes the sensor gets dirty and gives a false warning.\nQuestion: What are the speakers discussing?',
                    question: 'What are the speakers discussing?',
                    questionTh: 'พวกเขากำลังคุยเรื่องอะไรกัน?',
                    choices: [
                        'Buying a new printer.',
                        'A malfunctioning printer.',
                        'Cleaning the laboratory.',
                        'How to print a document.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายพูดว่า "can\'t get the printer... to work" (ใช้เครื่องปรินต์ไม่ได้) และผู้หญิงอาสาช่วยดู หัวข้อคือ เครื่องปรินต์ที่ทำงานผิดปกติ (malfunctioning printer)',
                    explanationEn: 'The topic is a printer that is showing a false paper jam error (malfunctioning).'
                },
                {
                    audio: 'Woman: Are you going to audition for the university play this semester? They are doing a Shakespearean comedy. Man: I\'m too busy with my thesis right now. I don\'t have the time for daily rehearsals. Question: What is the main topic of the conversation?',
                    transcript: 'Woman: Are you going to audition for the university play this semester? They are doing a Shakespearean comedy.\nMan: I\'m too busy with my thesis right now. I don\'t have the time for daily rehearsals.\nQuestion: What is the main topic of the conversation?',
                    question: 'What is the main topic of the conversation?',
                    questionTh: 'บทสนทนานี้คุยเรื่องอะไรเป็นหลัก?',
                    choices: [
                        'The man\'s thesis topic.',
                        'Shakespearean comedies.',
                        'Auditioning for a play.',
                        'University schedules.'
                    ],
                    answer: 2,
                    explanationTh: 'บทสนทนาเริ่มด้วยการถามเรื่องการไปคัดตัวแสดงละคร (audition for the university play) แม้ผู้ชายจะตอบเรื่องวิทยานิพนธ์ แต่นั่นก็คือเหตุผลที่เขาไม่ไปออดิชั่น หัวข้อหลักจึงยังคงเป็นการออดิชั่นละคร',
                    explanationEn: 'The entire dialogue centers around whether the man will audition for the upcoming play.'
                },
                {
                    audio: 'Man: Did you see the memo about the new dress code policy at the office? We have to wear business professional attire every day now. Woman: Yes, no more casual Fridays. I guess I will have to buy some new suits this weekend. Question: What are the speakers mainly discussing?',
                    transcript: 'Man: Did you see the memo about the new dress code policy at the office? We have to wear business professional attire every day now.\nWoman: Yes, no more casual Fridays. I guess I will have to buy some new suits this weekend.\nQuestion: What are the speakers mainly discussing?',
                    question: 'What are the speakers mainly discussing?',
                    questionTh: 'พวกเขาคุยเรื่องอะไรกันเป็นหลัก?',
                    choices: [
                        'Shopping for clothes on the weekend.',
                        'A new office dress code policy.',
                        'Writing an office memo.',
                        'Working on Fridays.'
                    ],
                    answer: 1,
                    explanationTh: 'ประเด็นหลักคือ "new dress code policy" (นโยบายการแต่งกายใหม่ของบริษัท) ที่บังคับใส่ชุดธุรกิจ',
                    explanationEn: 'The conversation is fundamentally about the newly implemented dress code policy at their workplace.'
                },
                {
                    audio: 'Woman: I noticed that the cafeteria has completely changed its menu. There are a lot more vegetarian options now. Man: Yeah, the student council requested it last month to promote healthier eating habits on campus. Question: What is the primary topic of the dialogue?',
                    transcript: 'Woman: I noticed that the cafeteria has completely changed its menu. There are a lot more vegetarian options now.\nMan: Yeah, the student council requested it last month to promote healthier eating habits on campus.\nQuestion: What is the primary topic of the dialogue?',
                    question: 'What is the primary topic of the dialogue?',
                    questionTh: 'หัวข้อหลักของบทสนทนานี้คืออะไร?',
                    choices: [
                        'The student council elections.',
                        'How to cook vegetarian food.',
                        'Changes to the cafeteria menu.',
                        'Dieting for weight loss.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงทักเรื่อง "cafeteria has completely changed its menu" (โรงอาหารเปลี่ยนเมนูใหม่) และผู้ชายเสริมเรื่องการผลักดันเมนูมังสวิรัติ หัวข้อหลักคือความเปลี่ยนแปลงของเมนูโรงอาหาร',
                    explanationEn: 'The speakers are discussing the recent additions of vegetarian options to the cafeteria menu.'
                }
            ]
        }
    ]
});
