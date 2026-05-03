LESSONS.push({
    id: 6,
    part: 1,
    titleTh: 'ปูพื้นฐาน Long Dialogues & Note-Taking',
    titleEn: 'Long Dialogues: Introduction and Note-Taking Strategy',
    icon: '📝',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: ความท้าทายของ Long Dialogues',
            contentTh: 'พาร์ท Long Dialogues (บทสนทนายาว) จะมีความยาวประมาณ 2-3 นาที และมีคำถามต่อเนื่อง 3-5 ข้อต่อ 1 บทสนทนา ความท้าทายหลักคือ "ความจำ" เพราะคุณจะไม่ได้ยินคำถามจนกว่าบทสนทนาจะจบลง ดังนั้นทักษะการจดโน้ตย่อ (Note-Taking) จึงเป็นกุญแจสำคัญที่สุด',
            contentEn: 'Long Dialogues test your auditory stamina and memory. Since you won\'t see or hear the questions beforehand, effective note-taking is essential to capture the flow of information.',
            bullets: [
                'อย่าจดทุกคำ! ให้จดเฉพาะ Keyword เช่น ชื่อคน (Who), ตัวเลข/เวลา (When/How much), และสถานที่ (Where)',
                'ใช้สัญลักษณ์ย่อ (Symbols) เช่น ลูกศรขึ้น (↑) = เพิ่มขึ้น, ลูกศรขวา (→) = ส่งผลให้เกิด',
                'บทสนทนามักจะเรียงลำดับเนื้อหาตามคำถาม (Chronological order) ดังนั้นโน้ตที่คุณจดจากบนลงล่าง จะใช้ตอบคำถามข้อ 1, 2, 3 เรียงตามลำดับได้เลย'
            ]
        },
        {
            type: 'vocabulary',
            title: 'คำศัพท์หมวดชีวิตในมหาวิทยาลัย (Campus Life)',
            words: [
                { word: 'Enrollment', pron: '/ɪnˈroʊlmənt/', mean: 'การลงทะเบียนเรียน', ex: 'The enrollment period ends next Friday.' },
                { word: 'Prerequisite', pron: '/priːˈrɛkwəzɪt/', mean: 'วิชาบังคับก่อน', ex: 'Biology 101 is a prerequisite for this course.' },
                { word: 'Dormitory', pron: '/ˈdɔːrmɪtɔːri/', mean: 'หอพักนักศึกษา (Dorm)', ex: 'Living in the dormitory is required for freshmen.' },
                { word: 'Orientation', pron: '/ˌɔːriɛnˈteɪʃən/', mean: 'ปฐมนิเทศ', ex: 'All new students must attend the orientation.' },
                { word: 'Scholarship', pron: '/ˈskɒlərʃɪp/', mean: 'ทุนการศึกษา', ex: 'She applied for a full scholarship.' },
                { word: 'Tuition fee', pron: '/tjuˈɪʃən fiː/', mean: 'ค่าเล่าเรียน', ex: 'The tuition fee has increased by 5%.' },
                { word: 'Assignment', pron: '/əˈsaɪnmənt/', mean: 'งานที่ได้รับมอบหมาย', ex: 'The assignment is due tomorrow.' },
                { word: 'Extension', pron: '/ɪkˈstɛnʃən/', mean: 'การขอเลื่อนเวลา (ส่งงาน)', ex: 'I need to ask the professor for an extension.' }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกจดโน้ตและตอบคำถาม (10 ข้อ)',
            questions: [
                {
                    audio: 'Man: Hi, Sarah. Did you manage to register for the Advanced Physics class? Woman: No, I didn\'t. When I logged into the system this morning, the class was already full. I have been placed on the waiting list. Question: Why didn\'t the woman register for the class?',
                    transcript: 'Man: Hi, Sarah. Did you manage to register for the Advanced Physics class?\nWoman: No, I didn\'t. When I logged into the system this morning, the class was already full. I have been placed on the waiting list.\nQuestion: Why didn\'t the woman register for the class?',
                    question: 'Why didn\'t the woman register for the class?',
                    questionTh: 'ทำไมผู้หญิงถึงไม่ได้ลงทะเบียนเรียนวิชานี้?',
                    choices: [
                        'She forgot her password.',
                        'The class was fully booked.',
                        'She doesn\'t like Physics.',
                        'She woke up too late.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงบอกว่า "the class was already full" (วิชาเรียนเต็มแล้ว) ซึ่งตรงกับ fully booked (ถูกจองเต็มแล้ว)',
                    explanationEn: 'The woman states the class was already full, meaning it was fully booked.'
                },
                {
                    audio: 'Man: Hi, Sarah. Did you manage to register for the Advanced Physics class? Woman: No, I didn\'t. When I logged into the system this morning, the class was already full. I have been placed on the waiting list. Question: What is the woman\'s current status?',
                    transcript: '[Same Audio as Q1] Man: Hi, Sarah... I have been placed on the waiting list.\nQuestion: What is the woman\'s current status?',
                    question: 'What is the woman\'s current status regarding the class?',
                    questionTh: 'สถานะปัจจุบันของผู้หญิงเกี่ยวกับวิชานี้คืออะไร?',
                    choices: [
                        'She is officially enrolled.',
                        'She is teaching the class.',
                        'She is on the waiting list.',
                        'She dropped the class.'
                    ],
                    answer: 2,
                    explanationTh: 'เธอพูดอย่างชัดเจนว่า "I have been placed on the waiting list" (ฉันถูกจัดให้อยู่ในรายชื่อสำรองรอเรียก)',
                    explanationEn: 'She explicitly states that she has been placed on the waiting list.'
                },
                {
                    audio: 'Woman: Excuse me, Professor. I was wondering if I could get an extension on my term paper. I have been really sick for the past three days. Man: I\'m sorry to hear that. I can give you an extra 48 hours, but no more than that. Question: What is the woman asking for?',
                    transcript: 'Woman: Excuse me, Professor. I was wondering if I could get an extension on my term paper. I have been really sick for the past three days.\nMan: I\'m sorry to hear that. I can give you an extra 48 hours, but no more than that.\nQuestion: What is the woman asking for?',
                    question: 'What is the woman asking for?',
                    questionTh: 'ผู้หญิงกำลังขออะไร?',
                    choices: [
                        'A higher grade on her paper.',
                        'Medicine for her sickness.',
                        'More time to finish her assignment.',
                        'Permission to skip the exam.'
                    ],
                    answer: 2,
                    explanationTh: 'คำว่า "extension" ในบริบทของการส่งงาน หมายถึง การขอเลื่อนกำหนดเวลาส่ง (More time to finish her assignment)',
                    explanationEn: 'An extension on a term paper means asking for more time to complete it.'
                },
                {
                    audio: 'Woman: Excuse me, Professor. I was wondering if I could get an extension on my term paper. I have been really sick for the past three days. Man: I\'m sorry to hear that. I can give you an extra 48 hours, but no more than that. Question: How much extra time does the professor give her?',
                    transcript: '[Same Audio as Q3] Man: ...I can give you an extra 48 hours, but no more than that.\nQuestion: How much extra time does the professor give her?',
                    question: 'How much extra time does the professor give her?',
                    questionTh: 'อาจารย์ให้เวลาเพิ่มเท่าไหร่?',
                    choices: [
                        'One day.',
                        'Two days.',
                        'Three days.',
                        'A week.'
                    ],
                    answer: 1,
                    explanationTh: 'อาจารย์บอกว่าให้ "extra 48 hours" (เพิ่มอีก 48 ชั่วโมง) ซึ่งเท่ากับ 2 วัน (Two days)',
                    explanationEn: '48 hours is equivalent to two days.'
                },
                {
                    audio: 'Man: Are you going to the freshman orientation tomorrow at the main auditorium? Woman: I want to, but I have a part-time job shift from 9 AM to 1 PM. Man: That\'s a shame. They are giving away free university t-shirts. Question: Why is the woman unable to attend the orientation?',
                    transcript: 'Man: Are you going to the freshman orientation tomorrow at the main auditorium?\nWoman: I want to, but I have a part-time job shift from 9 AM to 1 PM.\nMan: That\'s a shame. They are giving away free university t-shirts.\nQuestion: Why is the woman unable to attend the orientation?',
                    question: 'Why is the woman unable to attend the orientation?',
                    questionTh: 'ทำไมผู้หญิงถึงไม่สามารถเข้าร่วมปฐมนิเทศได้?',
                    choices: [
                        'She doesn\'t know where the auditorium is.',
                        'She has to work.',
                        'She doesn\'t want a free t-shirt.',
                        'She is not a freshman.'
                    ],
                    answer: 1,
                    explanationTh: 'เธอบอกว่า "I have a part-time job shift" ซึ่งแปลว่า เธอต้องทำงาน (She has to work)',
                    explanationEn: 'Having a part-time job shift means she has to work during that time.'
                },
                {
                    audio: 'Man: Are you going to the freshman orientation tomorrow at the main auditorium? Woman: I want to, but I have a part-time job shift from 9 AM to 1 PM. Man: That\'s a shame. They are giving away free university t-shirts. Question: What will attendees receive at the orientation?',
                    transcript: '[Same Audio as Q5] Man: ...They are giving away free university t-shirts.\nQuestion: What will attendees receive at the orientation?',
                    question: 'What will attendees receive at the orientation?',
                    questionTh: 'ผู้เข้าร่วมจะได้รับอะไรที่งานปฐมนิเทศ?',
                    choices: [
                        'A textbook.',
                        'Free food.',
                        'A university t-shirt.',
                        'A part-time job.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายพูดชัดเจนว่า "giving away free university t-shirts" (แจกเสื้อยืดมหาวิทยาลัยฟรี)',
                    explanationEn: 'The man mentions that they are giving away free university t-shirts.'
                },
                {
                    audio: 'Woman: Have you checked the housing portal? I saw that dormitory assignments have been posted. Man: Yes, I got assigned to West Hall. It\'s a bit far from the science building, though. Question: What are the speakers discussing?',
                    transcript: 'Woman: Have you checked the housing portal? I saw that dormitory assignments have been posted.\nMan: Yes, I got assigned to West Hall. It\'s a bit far from the science building, though.\nQuestion: What are the speakers discussing?',
                    question: 'What are the speakers discussing?',
                    questionTh: 'ผู้พูดกำลังคุยเรื่องอะไรกัน?',
                    choices: [
                        'Science projects.',
                        'Dormitory assignments.',
                        'A new web portal.',
                        'Traveling to the west.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงเปิดเรื่องมาด้วย "dormitory assignments have been posted" (ประกาศหอพักแล้ว) และผู้ชายก็คุยต่อเรื่องหอพักที่ได้',
                    explanationEn: 'The conversation centers around housing and dormitory assignments.'
                },
                {
                    audio: 'Woman: Have you checked the housing portal? I saw that dormitory assignments have been posted. Man: Yes, I got assigned to West Hall. It\'s a bit far from the science building, though. Question: What is the man\'s complaint about his dormitory?',
                    transcript: '[Same Audio as Q7] Man: ...It\'s a bit far from the science building, though.\nQuestion: What is the man\'s complaint about his dormitory?',
                    question: 'What is the man\'s complaint about his dormitory?',
                    questionTh: 'ผู้ชายบ่นเรื่องอะไรเกี่ยวกับหอพักของเขา?',
                    choices: [
                        'It is too noisy.',
                        'It is too expensive.',
                        'It is far from his classes.',
                        'It has no internet access.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายบ่นว่า "It\'s a bit far from the science building" (มันค่อนข้างไกลจากตึกวิทย์) ซึ่งหมายถึงไกลจากที่เรียน (far from his classes)',
                    explanationEn: 'He complains that West Hall is far from the science building, implying a long walk to his classes.'
                },
                {
                    audio: 'Man: The tuition fee for international students has increased by ten percent this year. Woman: I know. It is putting a lot of financial strain on my family. I might have to apply for another scholarship. Question: How has the tuition fee changed?',
                    transcript: 'Man: The tuition fee for international students has increased by ten percent this year.\nWoman: I know. It is putting a lot of financial strain on my family. I might have to apply for another scholarship.\nQuestion: How has the tuition fee changed?',
                    question: 'How has the tuition fee changed?',
                    questionTh: 'ค่าเล่าเรียนมีการเปลี่ยนแปลงอย่างไร?',
                    choices: [
                        'It has decreased by 10%.',
                        'It has increased by 10%.',
                        'It has increased by 20%.',
                        'It has remained the same.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายพูดว่า "increased by ten percent" (เพิ่มขึ้น 10 เปอร์เซ็นต์)',
                    explanationEn: 'The man explicitly states an increase of ten percent.'
                },
                {
                    audio: 'Man: The tuition fee for international students has increased by ten percent this year. Woman: I know. It is putting a lot of financial strain on my family. I might have to apply for another scholarship. Question: What might the woman do as a result?',
                    transcript: '[Same Audio as Q9] Woman: ...I might have to apply for another scholarship.\nQuestion: What might the woman do as a result?',
                    question: 'What might the woman do as a result?',
                    questionTh: 'ผู้หญิงอาจจะทำอะไรอันเป็นผลมาจากการเปลี่ยนแปลงนี้?',
                    choices: [
                        'Drop out of school.',
                        'Ask the man for money.',
                        'Apply for a scholarship.',
                        'Return to her home country.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงบอกว่า "I might have to apply for another scholarship" (ฉันอาจจะต้องสมัครขอทุนการศึกษาเพิ่ม)',
                    explanationEn: 'Because of the financial strain, she states she might apply for another scholarship.'
                }
            ]
        }
    ]
});
