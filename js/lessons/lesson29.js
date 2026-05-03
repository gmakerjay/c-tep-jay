LESSONS.push({
    id: 29,
    part: 3,
    titleTh: 'ตะลุย Error Identification: Connectors',
    titleEn: 'Grammar: Connectors and Conjunctions',
    icon: '🔗',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: คำเชื่อมและโครงสร้างคู่ขนาน (Parallelism)',
            contentTh: 'คำเชื่อม (Connectors) ไม่ใช่แค่ต้องแปลความหมายให้ถูก แต่ต้องดู "ไวยากรณ์" ที่ตามมาด้วย เช่น Because ตามด้วยประโยค (S+V) แต่ Because of ต้องตามด้วย Noun นอกจากนี้คำเชื่อมอย่าง And/Or ต้องเชื่อมสิ่งที่ "หน้าตาเหมือนกัน" (Parallelism)',
            contentEn: 'Connectors join ideas together. You must ensure that words joined by "and", "or", or "but" share the same grammatical form (Parallel Structure). Also, distinguish between conjunctions (followed by clauses) and prepositions (followed by nouns).',
            bullets: [
                'Clause (S+V): Because, Although, While, Since',
                'Phrase (Noun/V.ing): Because of, Due to, Despite, During',
                'Parallelism: I like swimming, running, and to bike. ❌ (ผิด เพราะ to bike ไม่เข้าพวก ต้องแก้เป็น biking)'
            ]
        },
        {
            type: 'grammar',
            title: 'การใช้โครงสร้างคู่ขนาน (Parallel Structure)',
            contentTh: 'คำเชื่อม And / But / Or เปรียบเสมือนตาชั่ง หน้าและหลังต้องสมดุลกัน',
            contentEn: 'Conjunctions like "and" act like a scale; the grammatical structures on both sides must be balanced.',
            rules: [
                {
                    formula: 'A and B / A, B, and C',
                    explanation: 'ถ้า A เป็น Noun, B และ C ก็ต้องเป็น Noun. ถ้าเป็น V.ing ก็ต้อง V.ing ทั้งหมด',
                    examples: [
                        { correct: 'She enjoys reading, writing, and painting.', incorrect: 'She enjoys reading, writing, and to paint.', why: 'to paint ไม่ขนานกับ reading และ writing' }
                    ]
                }
            ]
        },
        {
            type: 'quiz',
            title: 'Quiz: จับผิดคำเชื่อม (10 ข้อ)',
            questions: [
                {
                    question: 'Identify the error: (A) Because of (B) the flight was delayed, (C) we missed (D) our meeting.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Because of',
                        '(B) the flight was delayed,',
                        '(C) we missed',
                        '(D) our meeting'
                    ],
                    answer: 0,
                    explanationTh: 'ตามหลังมีประธานและกริยา (the flight was delayed) จึงเป็นประโยค (Clause) ต้องใช้ "Because" เฉยๆ (Because of ต้องตามด้วยนาม)',
                    explanationEn: '"The flight was delayed" is a full clause. Therefore, you must use "Because", not "Because of".'
                },
                {
                    question: 'Identify the error: (A) She is (B) intelligent, hardworking, (C) and has creativity (D) in her job.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) She is',
                        '(B) intelligent, hardworking,',
                        '(C) and has creativity',
                        '(D) in her job'
                    ],
                    answer: 2,
                    explanationTh: 'โครงสร้างคู่ขนาน (Parallelism) intelligent กับ hardworking เป็น Adjective ดังนั้นหลัง and ก็ต้องเป็น Adjective แก้เป็น "and creative"',
                    explanationEn: 'To maintain parallel structure with the adjectives "intelligent" and "hardworking", change "has creativity" to "creative".'
                },
                {
                    question: 'Identify the error: (A) Although (B) the heavy snow, (C) the train (D) arrived on time.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Although',
                        '(B) the heavy snow,',
                        '(C) the train',
                        '(D) arrived on time'
                    ],
                    answer: 0,
                    explanationTh: '"the heavy snow" เป็นกลุ่มคำนาม (Noun Phrase) ไม่มีกริยา ดังนั้นใช้ Although ไม่ได้ ต้องใช้ Preposition คือ "Despite" หรือ "In spite of"',
                    explanationEn: '"The heavy snow" is a noun phrase, so a preposition like "Despite" or "In spite of" is required, not "Although".'
                },
                {
                    question: 'Identify the error: (A) Not only (B) did he forget his keys, (C) but he also (D) leaving his phone at home.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Not only',
                        '(B) did he forget his keys,',
                        '(C) but he also',
                        '(D) leaving his phone at home'
                    ],
                    answer: 3,
                    explanationTh: 'โครงสร้าง Not only... but also ต้องขนานกัน ส่วนแรกใช้ forget (V.1/กริยาแท้) ส่วนหลังจึงต้องเป็น "left" (V.2 เพื่อให้สอดคล้องกับ did he forget) ห้ามใช้ leaving',
                    explanationEn: 'Parallel structure requires the verb after "but also" to match the tense. Change "leaving" to "left".'
                },
                {
                    question: 'Identify the error: (A) During (B) I was studying, (C) the electricity (D) went out.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) During',
                        '(B) I was studying,',
                        '(C) the electricity',
                        '(D) went out'
                    ],
                    answer: 0,
                    explanationTh: 'During ต้องตามด้วยคำนาม (เช่น during the storm) แต่ "I was studying" เป็นประโยค ต้องเปลี่ยนใช้คำเชื่อม "While"',
                    explanationEn: '"During" is followed by a noun. For a full clause like "I was studying", use "While".'
                },
                {
                    question: 'Identify the error: (A) The hotel is (B) cheap, clean, (C) and it is located (D) near the beach.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The hotel is',
                        '(B) cheap, clean,',
                        '(C) and it is located',
                        '(D) near the beach'
                    ],
                    answer: 2,
                    explanationTh: 'โครงสร้างคู่ขนานเสีย cheap, clean เป็น Adjective หลัง and ควรเป็น Adjective เช่นกัน แก้เป็น "and convenient" หรือ "and well-located" (ตัด it is ออก)',
                    explanationEn: 'To be parallel with "cheap" and "clean", drop "it is" so the list contains only adjectives/modifiers.'
                },
                {
                    question: 'Identify the error: (A) Either (B) you finish the report now, (C) nor (D) you will face the consequences.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Either',
                        '(B) you finish the report now,',
                        '(C) nor',
                        '(D) you will face the consequences'
                    ],
                    answer: 2,
                    explanationTh: 'คำเชื่อมแบบคู่ (Correlative Conjunctions) Either ต้องคู่กับ Or (ส่วน Neither คู่กับ Nor) ดังนั้นแก้ nor เป็น "or"',
                    explanationEn: 'The correlative conjunction pair is "Either... or...". Change "nor" to "or".'
                },
                {
                    question: 'Identify the error: (A) He could (B) neither read (C) and (D) write before the age of six.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) He could',
                        '(B) neither read',
                        '(C) and',
                        '(D) write before the age of six'
                    ],
                    answer: 2,
                    explanationTh: 'Neither ต้องคู่กับ Nor เสมอ ไม่ใช่ and แก้เป็น "nor"',
                    explanationEn: 'The correlative conjunction pair is "Neither... nor...". Change "and" to "nor".'
                },
                {
                    question: 'Identify the error: (A) She decided (B) to stay home (C) due to (D) she was feeling ill.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) She decided',
                        '(B) to stay home',
                        '(C) due to',
                        '(D) she was feeling ill'
                    ],
                    answer: 2,
                    explanationTh: 'Due to เป็น Preposition ต้องตามด้วย Noun แต่ "she was feeling ill" เป็นประโยค (S+V) ต้องแก้ due to เป็น "because"',
                    explanationEn: '"Due to" must be followed by a noun phrase. For a clause, use "because".'
                },
                {
                    question: 'Identify the error: (A) You must (B) choose between (C) working hard (D) or failing the class.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) You must',
                        '(B) choose between',
                        '(C) working hard',
                        '(D) or failing the class'
                    ],
                    answer: 3,
                    explanationTh: 'คำว่า Between ต้องคู่กับ And (between A and B) ไม่ใช่ or แก้เป็น "and failing"',
                    explanationEn: 'The preposition "between" is always paired with "and", not "or".'
                }
            ]
        }
    ]
});
