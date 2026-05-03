LESSONS.push({
    id: 33,
    part: 3,
    titleTh: 'ตะลุย Error: Relative Clauses',
    titleEn: 'Grammar: Relative Clauses',
    icon: '👥',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: Who, Whom, Which, That',
            contentTh: 'Relative Clauses คือประโยคย่อยที่ทำหน้าที่เหมือน Adjective เพื่อขยายคำนามที่อยู่ข้างหน้า ข้อสอบมักจะหลอกโดยการใช้ Relative Pronoun ผิดประเภท เช่น ใช้ which ขยายคน หรือใช้ who แทน whom',
            contentEn: 'Relative clauses modify nouns. Ensure you use the correct relative pronoun: "who" for people (subjects), "whom" for people (objects), "which" for things, and "whose" for possession.',
            bullets: [
                'Who: แทนคนที่เป็น "ประธาน" (ตามด้วยกริยา)',
                'Whom: แทนคนที่เป็น "กรรม" (ตามด้วยประธาน + กริยา)',
                'Which: แทนสัตว์/สิ่งของ',
                'Whose: แสดงความเป็นเจ้าของ (ตามด้วยคำนาม)',
                'Where: แทนสถานที่ (เท่ากับ in/at/on which)'
            ]
        },
        {
            type: 'grammar',
            title: 'จุดสังเกต Relative Pronoun',
            contentTh: 'ดูว่าคำนามที่ถูกขยายคืออะไร เป็นคน หรือ สิ่งของ',
            contentEn: 'Look at the antecedent (the noun being modified) to determine the correct pronoun.',
            rules: [
                {
                    formula: 'Noun (Person) + who + Verb',
                    explanation: 'ถ้าข้างหลังเป็นกริยา ต้องใช้ who',
                    examples: [
                        { correct: 'The man who lives here is friendly.', incorrect: 'The man whom lives here is friendly.', why: 'lives เป็นกริยา จึงต้องใช้ who เป็นประธาน' }
                    ]
                },
                {
                    formula: 'Noun (Person) + whom + S + V',
                    explanation: 'ถ้าข้างหลังเป็นประธานและกริยา (มีคนกระทำอยู่แล้ว) ต้องใช้ whom',
                    examples: [
                        { correct: 'The woman whom I met is a doctor.', incorrect: 'The woman who I met is a doctor.', why: 'I met เป็น S+V ดังนั้น woman ทำหน้าที่เป็นกรรม (whom)' }
                    ]
                }
            ]
        },
        {
            type: 'quiz',
            title: 'Quiz: จับผิด Relative Clauses (10 ข้อ)',
            questions: [
                {
                    question: 'Identify the error: (A) The student (B) which gets (C) the highest score (D) will win a prize.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The student',
                        '(B) which gets',
                        '(C) the highest score',
                        '(D) will win a prize'
                    ],
                    answer: 1,
                    explanationTh: 'The student เป็นคน ต้องใช้ relative pronoun คือ "who" ไม่ใช่ which',
                    explanationEn: '"Student" is a person. Use "who" instead of "which".'
                },
                {
                    question: 'Identify the error: (A) The company, (B) who was founded (C) in 1990, (D) recently expanded overseas.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The company,',
                        '(B) who was founded',
                        '(C) in 1990,',
                        '(D) recently expanded overseas'
                    ],
                    answer: 1,
                    explanationTh: 'The company เป็นองค์กร/สิ่งของ ไม่ใช่คน ต้องแก้ who เป็น "which"',
                    explanationEn: '"The company" is an entity/thing, not a person. Use "which".'
                },
                {
                    question: 'Identify the error: (A) The man (B) to who (C) you were speaking (D) is my boss.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The man',
                        '(B) to who',
                        '(C) you were speaking',
                        '(D) is my boss'
                    ],
                    answer: 1,
                    explanationTh: 'หลัง Preposition (to, for, with) ถ้าเป็นคน ต้องใช้รูปกรรม (whom) เสมอ แก้เป็น "to whom"',
                    explanationEn: 'After a preposition like "to", the objective case "whom" must be used.'
                },
                {
                    question: 'Identify the error: (A) She is the artist (B) who (C) paintings are displayed (D) in the gallery.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) She is the artist',
                        '(B) who',
                        '(C) paintings are displayed',
                        '(D) in the gallery'
                    ],
                    answer: 1,
                    explanationTh: 'ต้องการบอกว่า "ภาพวาดของเธอ" (แสดงความเป็นเจ้าของ) ต้องใช้ "whose" นำหน้า paintings ไม่ใช่ who',
                    explanationEn: 'To show possession ("her paintings"), use "whose" instead of "who".'
                },
                {
                    question: 'Identify the error: (A) The hotel (B) where (C) we stayed at (D) was excellent.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The hotel',
                        '(B) where',
                        '(C) we stayed at',
                        '(D) was excellent'
                    ],
                    answer: 2,
                    explanationTh: 'where มีความหมายเท่ากับ in/at which อยู่แล้ว จึงไม่ต้องมี preposition (at) ตามมาข้างหลังอีก แก้โดยการตัด "at" ทิ้ง หรือใช้ which we stayed at',
                    explanationEn: '"Where" implies the preposition. You should drop "at" or change "where" to "which".'
                },
                {
                    question: 'Identify the error: (A) I don\'t know (B) the reason (C) because (D) he resigned.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) I don\'t know',
                        '(B) the reason',
                        '(C) because',
                        '(D) he resigned'
                    ],
                    answer: 2,
                    explanationTh: 'คำว่า the reason มักคู่กับ "why" (the reason why...) ไม่ใช่ because (เหตุผลว่าทำไมเขาถึงลาออก)',
                    explanationEn: 'The noun "reason" is typically followed by the relative adverb "why", not "because".'
                },
                {
                    question: 'Identify the error: (A) The committee, (B) that (C) meets every Friday, (D) makes important decisions.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The committee,',
                        '(B) that',
                        '(C) meets every Friday,',
                        '(D) makes important decisions'
                    ],
                    answer: 1,
                    explanationTh: 'ในประโยคที่มีเครื่องหมายคอมม่า (,) หรือ Non-defining relative clause ห้ามใช้ "that" เด็ดขาด! ต้องแก้เป็น "which"',
                    explanationEn: 'In a non-defining relative clause (with commas), you cannot use "that". Use "which".'
                },
                {
                    question: 'Identify the error: (A) Anyone (B) whom (C) wishes to participate (D) must register online.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Anyone',
                        '(B) whom',
                        '(C) wishes to participate',
                        '(D) must register online'
                    ],
                    answer: 1,
                    explanationTh: 'หลัง relative pronoun เป็นคำกริยา (wishes) แสดงว่าตัวมันทำหน้าที่เป็น "ประธาน" ต้องใช้ "who" ไม่ใช่ whom',
                    explanationEn: 'The pronoun acts as the subject for the verb "wishes", so "who" is required, not "whom".'
                },
                {
                    question: 'Identify the error: (A) The book (B) which I lent it (C) to you (D) is due tomorrow.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The book',
                        '(B) which I lent it',
                        '(C) to you',
                        '(D) is due tomorrow'
                    ],
                    answer: 1,
                    explanationTh: 'which ทำหน้าที่แทน the book ไปแล้ว จึงไม่ต้องมีกรรม "it" ซ้ำซ้อนอยู่ข้างในอีก แก้เป็น "which I lent to you" (ตัด it ทิ้ง)',
                    explanationEn: 'The relative pronoun "which" replaces "the book". The pronoun "it" is redundant and must be removed.'
                },
                {
                    question: 'Identify the error: (A) This is the exact (B) spot (C) which (D) the accident occurred.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) This is the exact',
                        '(B) spot',
                        '(C) which',
                        '(D) the accident occurred'
                    ],
                    answer: 2,
                    explanationTh: 'spot เป็นสถานที่ (ที่ซึ่งเกิดอุบัติเหตุ) ควรใช้ "where" หรือ "in which" ถ้าใช้ which เฉยๆ จะไม่สมบูรณ์',
                    explanationEn: '"Spot" is a location, so the relative adverb "where" (or "in which") is needed.'
                }
            ]
        }
    ]
});
