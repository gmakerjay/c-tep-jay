LESSONS.push({
    id: 2,
    part: 1,
    titleTh: 'ปูพื้นฐานการตีความ (Who, What, Where)',
    titleEn: 'Foundation: Inference Questions in Short Dialogues',
    icon: '🎯',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: การตีความบุคคลและสถานที่ (Inference)',
            contentTh: 'ในข้อสอบ CU-TEP มากกว่า 50% ของพาร์ทการฟัง จะไม่ได้บอกตรงๆ ว่าคนพูดคือใคร หรืออยู่ที่ไหน แต่จะใช้คำใบ้ (Context Clues) เช่น ถ้าผู้หญิงพูดว่า "Please fasten your seatbelt" เราต้องตีความ (Infer) ให้ได้ว่าเธอคือ แอร์โฮสเตส และสถานที่คือ บนเครื่องบิน',
            contentEn: 'You will often need to infer the relationship between speakers, their occupations, or their location based on the vocabulary they use. The answers are rarely stated directly.',
            bullets: [
                'เทคนิคที่ 1: สังเกตคำศัพท์เฉพาะทาง (Jargon) เช่น คำว่า prescription, symptoms -> แพทย์/คลินิก',
                'เทคนิคที่ 2: ฟังโทนเสียงและการโต้ตอบ (Tone & Interaction) เช่น การบริการลูกค้า หรือการคุยแบบเพื่อน',
                'กฎเหล็ก: อย่าคิดไปเอง! ให้ยึดจากคำศัพท์ที่ได้ยินในบทสนทนาเป็นหลัก (Evidence-based guessing)'
            ]
        },
        {
            type: 'vocabulary',
            title: 'คำใบ้สถานที่และอาชีพที่ต้องรู้ (Location & Occupation Clues)',
            words: [
                { word: 'Prescription / Symptoms', pron: '/prɪˈskrɪpʃən/', mean: 'ใบสั่งยา / อาการป่วย', ex: 'Clue for: Doctor, Clinic, Pharmacy' },
                { word: 'Boarding pass / Gate', pron: '/ˈbɔːrdɪŋ pæs/', mean: 'บัตรขึ้นเครื่อง / ประตูทางออก', ex: 'Clue for: Airport, Flight Attendant' },
                { word: 'Deposit / Overdrawn', pron: '/dɪˈpɒzɪt/', mean: 'ฝากเงิน / เบิกเกินบัญชี', ex: 'Clue for: Bank, Teller' },
                { word: 'Appetizer / Fully booked', pron: '/ˈæpɪtaɪzər/', mean: 'อาหารเรียกน้ำย่อย / จองเต็มแล้ว', ex: 'Clue for: Restaurant, Waiter' },
                { word: 'Assignment / Deadline', pron: '/əˈsaɪnmənt/', mean: 'งานที่ได้รับมอบหมาย / กำหนดส่ง', ex: 'Clue for: Student, Professor, School' },
                { word: 'Aisle / Checkout', pron: '/aɪl/', mean: 'ทางเดินระหว่างชั้นวางของ / จุดชำระเงิน', ex: 'Clue for: Supermarket, Cashier' },
                { word: 'Fare / Exact change', pron: '/fɛər/', mean: 'ค่าโดยสาร / เงินพอดี (ไม่ทอน)', ex: 'Clue for: Bus, Taxi, Driver' },
                { word: 'Exhibition / Masterpiece', pron: '/ˌɛksɪˈbɪʃən/', mean: 'นิทรรศการ / ผลงานชิ้นเอก', ex: 'Clue for: Museum, Art Gallery' }
            ]
        },
        {
            type: 'dialogue',
            title: 'ฝึกฟังบทสนทนาที่ 1: เดาสถานที่ (Where are they?)',
            lines: [
                { speaker: 'Man', text: 'Excuse me, could you tell me where the fiction section is?', th: 'ขอโทษครับ ช่วยบอกหน่อยได้ไหมว่าหมวดหนังสือนิยายอยู่ตรงไหน?' },
                { speaker: 'Woman', text: 'Sure, it is right down this aisle, past the magazines, on your left. You can check out up to five books at a time.', th: 'ได้ค่ะ เดินตรงไปตามทางเดินนี้ เลยโซนนิตยสารไป จะอยู่ซ้ายมือค่ะ คุณสามารถยืมหนังสือได้ครั้งละ 5 เล่มนะคะ' }
            ]
        },
        {
            type: 'grammar',
            title: 'วิเคราะห์โครงสร้างและคำใบ้ (Analysis)',
            contentTh: 'จากบทสนทนาที่ 1 เราจะเห็นคำใบ้ที่ชัดเจนมาก ให้สังเกตคำเหล่านี้:',
            rules: [
                { 
                    formula: 'Fiction + Magazines + Check out (ยืมหนังสือ)', 
                    explanation: 'เมื่อรวมคำใบ้เหล่านี้เข้าด้วยกัน สถานที่เดียวที่เป็นไปได้คือ "ห้องสมุด (Library)" หากเป็นร้านขายหนังสือ (Bookstore) จะใช้คำว่า Buy หรือ Purchase แทนคำว่า Check out (ยืม)'
                }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟังและตีความ: HD Quizzes (10 ข้อ)',
            questions: [
                {
                    audio: 'Man: I would like to deposit this check into my savings account, please. Woman: Certainly, sir. Could you please endorse the back of the check first? Question: Where does this conversation most likely take place?',
                    transcript: 'Man: I would like to deposit this check into my savings account, please.\nWoman: Certainly, sir. Could you please endorse the back of the check first?\nQuestion: Where does this conversation most likely take place?',
                    question: 'Where does this conversation most likely take place?',
                    questionTh: 'บทสนทนานี้น่าจะเกิดขึ้นที่ไหน?',
                    choices: [
                        'In a department store.',
                        'At a police station.',
                        'In a bank.',
                        'At a post office.'
                    ],
                    answer: 2,
                    explanationTh: 'คำใบ้คือ deposit (ฝากเงิน), savings account (บัญชีออมทรัพย์), และ check (เช็คเงินสด) จึงสรุปได้ทันทีว่าอยู่ที่ธนาคาร (Bank)',
                    explanationEn: 'The vocabulary "deposit", "savings account", and "check" strongly indicate a bank setting.'
                },
                {
                    audio: 'Woman: Are you ready to order, or do you need a few more minutes with the menu? Man: I think we are ready. We will start with the garlic bread. Question: Who is the woman?',
                    transcript: 'Woman: Are you ready to order, or do you need a few more minutes with the menu?\nMan: I think we are ready. We will start with the garlic bread.\nQuestion: Who is the woman?',
                    question: 'Who is the woman?',
                    questionTh: 'ผู้หญิงคนนี้คือใคร?',
                    choices: [
                        'A chef.',
                        'A waitress.',
                        'A cashier.',
                        'A customer.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงถามว่า "พร้อมจะสั่งอาหาร(order)หรือยัง หรือต้องการดูเมนูเพิ่ม" คำใบ้เหล่านี้ชัดเจนว่าเป็นพนักงานเสิร์ฟ (Waitress)',
                    explanationEn: 'Asking if the customer is "ready to order" and mentioning a "menu" are typical actions of a waitress.'
                },
                {
                    audio: 'Man: Please make sure your seatbelts are securely fastened and your tray tables are in the upright position. Woman: Excuse me, can I get a glass of water before takeoff? Question: Where are these people?',
                    transcript: 'Man: Please make sure your seatbelts are securely fastened and your tray tables are in the upright position.\nWoman: Excuse me, can I get a glass of water before takeoff?\nQuestion: Where are these people?',
                    question: 'Where are these people?',
                    questionTh: 'พวกเขาอยู่ที่ไหน?',
                    choices: [
                        'On a train.',
                        'In a restaurant.',
                        'On an airplane.',
                        'In a movie theater.'
                    ],
                    answer: 2,
                    explanationTh: 'คำใบ้คือ seatbelts (เข็มขัดนิรภัย), tray tables (ถาดอาหารพับได้), และ takeoff (เครื่องบินขึ้น) สถานที่จึงต้องเป็นบนเครื่องบิน (On an airplane)',
                    explanationEn: 'Keywords like "seatbelts fastened", "tray tables upright", and "takeoff" exclusively refer to an airplane.'
                },
                {
                    audio: 'Woman: I prescribe these antibiotics for your infection. Take two pills daily after meals. Man: Thank you. Should I come back next week? Question: Who is the woman?',
                    transcript: 'Woman: I prescribe these antibiotics for your infection. Take two pills daily after meals.\nMan: Thank you. Should I come back next week?\nQuestion: Who is the woman?',
                    question: 'Who is the woman?',
                    questionTh: 'ผู้หญิงคนนี้คือใคร?',
                    choices: [
                        'A pharmacist.',
                        'A dentist.',
                        'A doctor.',
                        'A nurse.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงบอกว่า "I prescribe..." (หมอเป็นคนสั่งยา/จ่ายยา) และตรวจเจอ infection (การติดเชื้อ) เธอจึงเป็นหมอ (Doctor) ไม่ใช่แค่เภสัชกร (Pharmacist) เพราะเภสัชกรไม่มีสิทธิ์ prescribe ยาในบริบททั่วไป',
                    explanationEn: 'The action of prescribing (I prescribe) antibiotics for an infection indicates she is a medical doctor.'
                },
                {
                    audio: 'Man: How long can I keep this reference book? Woman: Regular books can be borrowed for two weeks, but reference books cannot leave the building. Question: Where is the man?',
                    transcript: 'Man: How long can I keep this reference book?\nWoman: Regular books can be borrowed for two weeks, but reference books cannot leave the building.\nQuestion: Where is the man?',
                    question: 'Where is the man?',
                    questionTh: 'ผู้ชายอยู่ที่ไหน?',
                    choices: [
                        'In a bookstore.',
                        'In a library.',
                        'In a publishing house.',
                        'In a classroom.'
                    ],
                    answer: 1,
                    explanationTh: 'มีคำว่า "borrowed" (ถูกยืม) และ "reference book cannot leave the building" (หนังสืออ้างอิงห้ามนำออกจากอาคาร) ซึ่งเป็นกฎคลาสสิกของห้องสมุด (Library)',
                    explanationEn: 'Borrowing books and restrictions on reference materials are standard library policies.'
                },
                {
                    audio: 'Woman: Your total comes to forty-five dollars and fifty cents. Would you like a bag for these groceries? Man: Yes, please. Here is a fifty-dollar bill. Question: Who is the woman?',
                    transcript: 'Woman: Your total comes to forty-five dollars and fifty cents. Would you like a bag for these groceries?\nMan: Yes, please. Here is a fifty-dollar bill.\nQuestion: Who is the woman?',
                    question: 'Who is the woman?',
                    questionTh: 'ผู้หญิงคนนี้คือใคร?',
                    choices: [
                        'A bank teller.',
                        'A waitress.',
                        'A cashier.',
                        'A sales manager.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้หญิงบอกยอดรวม (total comes to...) และถามว่าจะใส่ถุงไหมสำหรับ "groceries" (ของชำ) เธอจึงเป็นพนักงานเก็บเงิน (Cashier) ในซูเปอร์มาร์เก็ต',
                    explanationEn: 'Calculating a total and offering a bag for groceries are duties of a supermarket cashier.'
                },
                {
                    audio: 'Man: I have a reservation under the name of Smith for two nights. Woman: Let me check the system. Ah yes, Mr. Smith, a double room with an ocean view. Question: Where does this conversation take place?',
                    transcript: 'Man: I have a reservation under the name of Smith for two nights.\nWoman: Let me check the system. Ah yes, Mr. Smith, a double room with an ocean view.\nQuestion: Where does this conversation take place?',
                    question: 'Where does this conversation take place?',
                    questionTh: 'บทสนทนานี้เกิดขึ้นที่ไหน?',
                    choices: [
                        'At a travel agency.',
                        'At a restaurant.',
                        'At an airport ticket counter.',
                        'At a hotel front desk.'
                    ],
                    answer: 3,
                    explanationTh: 'คำใบ้คือ reservation (การจอง) สำหรับ two nights (2 คืน) และ double room with an ocean view (ห้องเตียงคู่พักได้ 2 คนวิวทะเล) ชัดเจนว่าเป็นที่เคาน์เตอร์โรงแรม (Hotel front desk)',
                    explanationEn: 'Reservations for a certain number of nights and specific room types (double room, ocean view) point directly to a hotel.'
                },
                {
                    audio: 'Woman: The assignment is due next Friday, and it must be at least ten pages long. Man: Do we need to include a bibliography? Question: What is the relationship between the speakers?',
                    transcript: 'Woman: The assignment is due next Friday, and it must be at least ten pages long.\nMan: Do we need to include a bibliography?\nQuestion: What is the relationship between the speakers?',
                    question: 'What is the relationship between the speakers?',
                    questionTh: 'ความสัมพันธ์ของสองคนนี้คืออะไร?',
                    choices: [
                        'Boss and employee.',
                        'Professor and student.',
                        'Editor and writer.',
                        'Salesperson and customer.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงสั่งงาน (assignment) กำหนดส่ง (due) และความยาว 10 หน้า ส่วนผู้ชายถามเรื่องบรรณานุกรม (bibliography) ความสัมพันธ์คือ อาจารย์กับนักศึกษา (Professor and student)',
                    explanationEn: 'The terms assignment, due dates, page lengths, and bibliographies are academic terms used between a professor and a student.'
                },
                {
                    audio: 'Man: Can I see your license and registration, please? You were going sixty in a forty zone. Woman: I am so sorry, officer. I didn\'t realize how fast I was driving. Question: Who is the man?',
                    transcript: 'Man: Can I see your license and registration, please? You were going sixty in a forty zone.\nWoman: I am so sorry, officer. I didn\'t realize how fast I was driving.\nQuestion: Who is the man?',
                    question: 'Who is the man?',
                    questionTh: 'ผู้ชายคนนี้คือใคร?',
                    choices: [
                        'A driving instructor.',
                        'A toll booth operator.',
                        'A police officer.',
                        'A mechanic.'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้ชายขอเรียกดู license (ใบขับขี่) และ registration (ทะเบียนรถ) พร้อมแจ้งว่าขับรถเร็วเกินกำหนด ผู้หญิงยังเรียกเขาว่า "officer" ด้วย เขาจึงเป็นตำรวจ (Police officer)',
                    explanationEn: 'Asking for a license/registration and enforcing speed limits are duties of a police officer. The woman also explicitly calls him "officer".'
                },
                {
                    audio: 'Woman: This painting is one of the artist\'s earliest works, characterized by bold brushstrokes. Man: It\'s fascinating. When was it added to the collection? Question: Where are they?',
                    transcript: 'Woman: This painting is one of the artist\'s earliest works, characterized by bold brushstrokes.\nMan: It\'s fascinating. When was it added to the collection?\nQuestion: Where are they?',
                    question: 'Where are they?',
                    questionTh: 'พวกเขาอยู่ที่ไหน?',
                    choices: [
                        'In an art gallery or museum.',
                        'In a painting studio.',
                        'In a history classroom.',
                        'In a furniture store.'
                    ],
                    answer: 0,
                    explanationTh: 'มีการบรรยายถึง painting (ภาพวาด), artist\'s works (ผลงานศิลปิน), brushstrokes (รอยแปรง) และถามถึงการนำเข้ามาอยู่ใน collection สถานที่จึงเป็นพิพิธภัณฑ์หรือหอศิลป์',
                    explanationEn: 'Discussing paintings, artist techniques (brushstrokes), and collections strongly indicates an art gallery or museum environment.'
                }
            ]
        }
    ]
});
