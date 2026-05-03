LESSONS.push({
    id: 32,
    part: 3,
    titleTh: 'ตะลุย Error: Subjunctive & Inversion',
    titleEn: 'Grammar: Subjunctive and Inversion',
    icon: '🔮',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: โครงสร้างประโยคสายดาร์ก',
            contentTh: 'Subjunctive Mood คือการใช้กริยาช่อง 1 (Infinitive แบบไม่ผัน ไม่เติม s/es) ตามหลังคำที่แสดงการแนะนำ/คำสั่ง เช่น suggest, recommend, insist ส่วน Inversion คือการเอา กริยาช่วย มาไว้หน้าประธาน มักเจอเมื่อเอาคำปฏิเสธขึ้นต้นประโยค',
            contentEn: 'Subjunctive mood uses the base form of the verb after certain expressions of suggestion or demand. Inversion involves placing the auxiliary verb before the subject, usually after negative adverbials.',
            bullets: [
                'Subjunctive: I suggest that he GO (ไม่ใช่ goes) to the doctor.',
                'Inversion: Never HAVE I SEEN such a beautiful sunset. (ไม่ใช่ I have seen)'
            ]
        },
        {
            type: 'grammar',
            title: 'กฎเหล็กของ Subjunctive และ Inversion',
            contentTh: 'ระวังโครงสร้างเหล่านี้ให้ดี เพราะถ้าแปลตรงๆ จะดูเหมือนไม่ผิด',
            contentEn: 'Be careful with these structures as they defy normal Subject-Verb agreement rules.',
            rules: [
                {
                    formula: 'Suggest/Recommend/Insist + that + Subject + [Verb รูปไม่ผัน]',
                    explanation: 'ไม่ว่าประธานจะเป็น He, She, It กริยาที่ตามมาห้ามเติม s, es, ed หรือ ing เด็ดขาด (ใช้ be แทน is/am/are)',
                    examples: [
                        { correct: 'The doctor advised that she rest.', incorrect: 'The doctor advised that she rests.', why: 'หลัง advised that ต้องใช้ Verb รูปไม่ผัน' }
                    ]
                },
                {
                    formula: 'คำปฏิเสธ (Never, Rarely, Seldom, Not only) + กริยาช่วย + ประธาน',
                    explanation: 'เมื่อนำคำพวกนี้ขึ้นต้นประโยค ต้องสลับที่ประธานกับกริยาช่วยคล้ายประโยคคำถาม',
                    examples: [
                        { correct: 'Rarely do we go out.', incorrect: 'Rarely we go out.', why: 'ต้องเอากริยาช่วย do มาคั่นกลาง' }
                    ]
                }
            ]
        },
        {
            type: 'quiz',
            title: 'Quiz: จับผิด Subjunctive & Inversion (10 ข้อ)',
            questions: [
                {
                    question: 'Identify the error: (A) The manager (B) insisted that (C) John (D) comes to the meeting.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The manager',
                        '(B) insisted that',
                        '(C) John',
                        '(D) comes to the meeting'
                    ],
                    answer: 3,
                    explanationTh: 'หลัง insisted that ต้องใช้ Subjunctive Mood กริยาห้ามเติม s/es แก้ comes เป็น "come"',
                    explanationEn: 'After "insisted that", the subjunctive mood requires the base verb. Change "comes" to "come".'
                },
                {
                    question: 'Identify the error: (A) Never (B) I have seen (C) such a massive (D) building.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Never',
                        '(B) I have seen',
                        '(C) such a massive',
                        '(D) building'
                    ],
                    answer: 1,
                    explanationTh: 'คำปฏิเสธ Never ขึ้นต้นประโยค ต้องทำ Inversion โดยเอากริยาช่วยมาหน้าประธาน แก้เป็น "have I seen"',
                    explanationEn: 'Negative adverbials at the beginning require inversion. Change "I have seen" to "have I seen".'
                },
                {
                    question: 'Identify the error: (A) It is crucial (B) that the system (C) is updated (D) regularly.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) It is crucial',
                        '(B) that the system',
                        '(C) is updated',
                        '(D) regularly'
                    ],
                    answer: 2,
                    explanationTh: 'คำว่า It is crucial that (มันสำคัญมากที่...) เป็นการใช้ Subjunctive ต้องเปลี่ยน is เป็นรูปไม่ผันคือ "be updated"',
                    explanationEn: 'Expressions of necessity take the subjunctive. Change "is updated" to "be updated".'
                },
                {
                    question: 'Identify the error: (A) Not only (B) he arrived late, (C) but he also (D) forgot his documents.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Not only',
                        '(B) he arrived late,',
                        '(C) but he also',
                        '(D) forgot his documents'
                    ],
                    answer: 1,
                    explanationTh: 'Not only ขึ้นต้นประโยค ต้องทำ Inversion ประโยคเป็นอดีต (arrived) ต้องเอา did มาช่วย แก้เป็น "did he arrive late"',
                    explanationEn: '"Not only" at the beginning requires inversion. Change "he arrived late" to "did he arrive late".'
                },
                {
                    question: 'Identify the error: (A) The board (B) recommends that (C) the budget (D) cuts immediately.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The board',
                        '(B) recommends that',
                        '(C) the budget',
                        '(D) cuts immediately'
                    ],
                    answer: 3,
                    explanationTh: 'งบประมาณต้อง "ถูกตัด" (Passive) และอยู่ในโครงสร้าง Subjunctive (หลัง recommends that) ต้องเป็น be + V.3 แก้เป็น "be cut"',
                    explanationEn: 'The budget is acted upon (passive) and requires the subjunctive form. Change "cuts" to "be cut".'
                },
                {
                    question: 'Identify the error: (A) Seldom (B) does she (C) complains (D) about her workload.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Seldom',
                        '(B) does she',
                        '(C) complains',
                        '(D) about her workload'
                    ],
                    answer: 2,
                    explanationTh: 'ในประโยค Inversion เมื่อมี does มาช่วยแล้ว กริยาแท้ต้องไม่เติม s/es อีก แก้ complains เป็น "complain"',
                    explanationEn: 'In an inverted sentence with "does", the main verb must be in its base form. Change "complains" to "complain".'
                },
                {
                    question: 'Identify the error: (A) It is vital (B) that she (C) tells the truth (D) to the committee.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) It is vital',
                        '(B) that she',
                        '(C) tells the truth',
                        '(D) to the committee'
                    ],
                    answer: 2,
                    explanationTh: 'It is vital that เป็นโครงสร้าง Subjunctive กริยาห้ามเติม s/es แก้ tells เป็น "tell"',
                    explanationEn: 'The subjunctive mood requires the base verb. Change "tells" to "tell".'
                },
                {
                    question: 'Identify the error: (A) Hardly (B) had I stepped outside (C) than (D) it started to rain.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Hardly',
                        '(B) had I stepped outside',
                        '(C) than',
                        '(D) it started to rain'
                    ],
                    answer: 2,
                    explanationTh: 'คู่คำเชื่อม (Inversion) Hardly... คู่กับ "when" ไม่ใช่ than (No sooner... ถึงจะคู่กับ than) แก้ than เป็น "when"',
                    explanationEn: 'The correct pair is "Hardly... when". Change "than" to "when".'
                },
                {
                    question: 'Identify the error: (A) They (B) requested that (C) the music (D) is turned down.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) They',
                        '(B) requested that',
                        '(C) the music',
                        '(D) is turned down'
                    ],
                    answer: 3,
                    explanationTh: 'หลัง requested that ต้องเป็น Subjunctive (รูปไม่ผัน) แก้ is turned down เป็น "be turned down"',
                    explanationEn: '"Requested that" triggers the subjunctive mood. Change "is" to "be".'
                },
                {
                    question: 'Identify the error: (A) Only after (B) the meeting ended (C) he realized (D) his mistake.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Only after',
                        '(B) the meeting ended',
                        '(C) he realized',
                        '(D) his mistake'
                    ],
                    answer: 2,
                    explanationTh: 'Only after เป็นคำบอกเวลาเชิงปฏิเสธ เมื่อนำหน้าประโยค ต้องเกิด Inversion ใน clause หลัก แก้เป็น "did he realize"',
                    explanationEn: 'Phrases starting with "Only after" require inversion in the main clause. Change "he realized" to "did he realize".'
                }
            ]
        }
    ]
});
