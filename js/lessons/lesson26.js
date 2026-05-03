LESSONS.push({
    id: 26,
    part: 3,
    titleTh: 'ตะลุย Error Identification: Subject-Verb Agreement',
    titleEn: 'Grammar: Subject-Verb Agreement',
    icon: '🔍',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: พาร์ทหาที่ผิด (Error Identification)',
            contentTh: 'Part 3 ของ CU-TEP คือการหาจุดที่ผิดแกรมม่า (Error Identification) หัวข้อที่ออกสอบบ่อยที่สุดและแจกคะแนนฟรีคือ Subject-Verb Agreement (ประธานและกริยาต้องสอดคล้องกัน) ถ้าประธานเอกพจน์ กริยาเติม s/es ถ้าประธานพหูพจน์ กริยาไม่ต้องเติม!',
            contentEn: 'Part 3 tests your ability to identify grammatical errors. The most common error is Subject-Verb Agreement. A singular subject takes a singular verb, and a plural subject takes a plural verb.',
            bullets: [
                'ระวังส่วนขยาย (Modifiers) ที่มาคั่นกลางระหว่างประธานและกริยา เช่น "The boy (in the red shoes) IS walking."',
                'คำนามที่ดูเหมือนพหูพจน์แต่เป็นเอกพจน์ (เช่น Physics, News, Information) ต้องใช้กริยาเอกพจน์',
                'Each, Every, Everyone, Someone ถือเป็นประธาน "เอกพจน์" เสมอ'
            ]
        },
        {
            type: 'grammar',
            title: 'กฎทองของ Subject-Verb Agreement',
            contentTh: 'อย่าหลงกลส่วนขยายที่ทำให้ประธานดูเหมือนเปลี่ยนไป',
            contentEn: 'Do not be fooled by prepositional phrases or relative clauses that separate the subject from its verb.',
            rules: [
                {
                    formula: 'Subject + [Prepositional Phrase] + Verb',
                    explanation: 'กริยาต้องผันตามประธานตัวหน้าสุด ไม่ใช่คำนามที่อยู่ในส่วนขยาย',
                    examples: [
                        { correct: 'The box of chocolates is empty.', incorrect: 'The box of chocolates are empty.', why: 'ประธานหลักคือ "The box" (เอกพจน์) ส่วน "of chocolates" เป็นแค่ส่วนขยาย จึงต้องใช้ is' }
                    ]
                },
                {
                    formula: 'Each / Every + Noun + Singular Verb',
                    explanation: 'คำว่า Each และ Every ถือเป็นเอกพจน์เสมอ',
                    examples: [
                        { correct: 'Every student has a textbook.', incorrect: 'Every student have a textbook.', why: 'Every student ถือเป็นเอกพจน์ จึงต้องใช้ has' }
                    ]
                }
            ]
        },
        {
            type: 'quiz',
            title: 'Quiz: หาจุดที่ผิดแกรมม่า (10 ข้อ)',
            questions: [
                {
                    question: 'Identify the error: (A) The list of (B) items (C) are on (D) the desk.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The list',
                        '(B) items',
                        '(C) are',
                        '(D) the desk'
                    ],
                    answer: 2,
                    explanationTh: 'จุดที่ผิดคือ (C) are เพราะประธานหลักคือ "The list" (เอกพจน์) ส่วน "of items" เป็นส่วนขยาย ดังนั้นต้องแก้ are เป็น is',
                    explanationEn: 'The core subject is "The list" (singular), so the verb should be "is", not "are".'
                },
                {
                    question: 'Identify the error: (A) Neither of (B) the boys (C) have passed (D) the exam.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Neither of',
                        '(B) the boys',
                        '(C) have passed',
                        '(D) the exam'
                    ],
                    answer: 2,
                    explanationTh: 'จุดที่ผิดคือ (C) have passed เพราะโครงสร้าง "Neither of + Noun พหูพจน์" จะต้องใช้กริยาเอกพจน์เสมอ ต้องแก้เป็น "has passed"',
                    explanationEn: '"Neither of" is treated as singular. The verb must be "has", not "have".'
                },
                {
                    question: 'Identify the error: (A) Everyone (B) in the room (C) know about (D) the surprise party.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Everyone',
                        '(B) in the room',
                        '(C) know about',
                        '(D) the surprise party'
                    ],
                    answer: 2,
                    explanationTh: 'จุดที่ผิดคือ (C) know about เพราะ Everyone ถือเป็นประธานเอกพจน์ กริยาจึงต้องเติม s แก้เป็น "knows about"',
                    explanationEn: '"Everyone" is an indefinite pronoun and takes a singular verb ("knows").'
                },
                {
                    question: 'Identify the error: (A) A team of (B) engineers (C) were sent (D) to the site.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) A team of',
                        '(B) engineers',
                        '(C) were sent',
                        '(D) to the site'
                    ],
                    answer: 2,
                    explanationTh: 'จุดที่ผิดคือ (C) were sent ประธานหลักคือ "A team" (เอกพจน์) ต้องแก้ were เป็น was',
                    explanationEn: 'The subject is "A team" (singular), so the verb must be "was".'
                },
                {
                    question: 'Identify the error: (A) The news (B) about the accident (C) are completely (D) unverified.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The news',
                        '(B) about the accident',
                        '(C) are completely',
                        '(D) unverified'
                    ],
                    answer: 2,
                    explanationTh: 'จุดที่ผิดคือ (C) are completely เพราะคำว่า News (ข่าว) ถือเป็นคำนามนับไม่ได้และเป็นเอกพจน์เสมอ ต้องใช้ is',
                    explanationEn: 'The word "news" is uncountable and singular. The verb must be "is".'
                },
                {
                    question: 'Identify the error: (A) John, (B) along with his friends, (C) are going (D) to the cinema.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) John,',
                        '(B) along with his friends,',
                        '(C) are going',
                        '(D) to the cinema.'
                    ],
                    answer: 2,
                    explanationTh: 'โครงสร้าง "Subject 1 + along with/as well as + Subject 2" กริยาต้องผันตามประธานตัวแรก (John) ซึ่งเป็นเอกพจน์ ต้องแก้ are เป็น is',
                    explanationEn: 'When subjects are joined by "along with", the verb agrees with the first subject ("John").'
                },
                {
                    question: 'Identify the error: (A) Fifty dollars (B) seem like (C) a lot of money (D) to pay for a shirt.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Fifty dollars',
                        '(B) seem like',
                        '(C) a lot of money',
                        '(D) to pay for a shirt.'
                    ],
                    answer: 1,
                    explanationTh: 'จุดที่ผิดคือ (B) seem like เพราะจำนวนเงิน ระยะทาง หรือเวลา แม้จะเติม s แต่ถือเป็นก้อนเดียว (เอกพจน์) ต้องแก้เป็น seems',
                    explanationEn: 'Amounts of money, time, and distance are considered singular entities. "Seem" should be "seems".'
                },
                {
                    question: 'Identify the error: (A) The number of (B) students (C) have increased (D) this year.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The number of',
                        '(B) students',
                        '(C) have increased',
                        '(D) this year'
                    ],
                    answer: 2,
                    explanationTh: 'โครงสร้าง "The number of" (จำนวนของ) ถือเป็นเอกพจน์ ต้องแก้ have เป็น has (ต่างจาก A number of ที่เป็นพหูพจน์)',
                    explanationEn: '"The number of" takes a singular verb, whereas "A number of" takes a plural verb.'
                },
                {
                    question: 'Identify the error: (A) Either the manager (B) or the employees (C) is responsible (D) for the mistake.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Either the manager',
                        '(B) or the employees',
                        '(C) is responsible',
                        '(D) for the mistake'
                    ],
                    answer: 2,
                    explanationTh: 'โครงสร้าง "Either A or B" กริยาต้องผันตามประธานตัวที่อยู่ใกล้ที่สุด (B = the employees ซึ่งเป็นพหูพจน์) ต้องแก้ is เป็น are',
                    explanationEn: 'In "Either... or...", the verb agrees with the subject closest to it ("employees" is plural).'
                },
                {
                    question: 'Identify the error: (A) Physics (B) are (C) one of the most difficult (D) subjects in school.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Physics',
                        '(B) are',
                        '(C) one of the most difficult',
                        '(D) subjects in school'
                    ],
                    answer: 1,
                    explanationTh: 'ชื่อวิชา เช่น Physics, Mathematics แม้จะลงท้ายด้วย s แต่ถือเป็นเอกพจน์ ต้องแก้ are เป็น is',
                    explanationEn: 'Academic subjects like "Physics" ending in -s are singular.'
                }
            ]
        }
    ]
});
