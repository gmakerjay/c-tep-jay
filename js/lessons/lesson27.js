LESSONS.push({
    id: 27,
    part: 3,
    titleTh: 'ตะลุย Error Identification: Tense & Voice',
    titleEn: 'Grammar: Tense and Voice',
    icon: '⏳',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: ทำเองหรือถูกทำ? เกิดขึ้นตอนไหน?',
            contentTh: 'เรื่อง Tense (กาลเวลา) และ Voice (ประธานกระทำเอง หรือ ถูกกระทำ) เป็นจุดจับผิดที่สำคัญมากในข้อสอบ Error ให้มองหาคีย์เวิร์ดบอกเวลา และพิจารณาว่าประธานในประโยคเป็นคน/สิ่งของที่สามารถ "ทำกริยานั้นได้ด้วยตัวเอง" หรือไม่',
            contentEn: 'Tense indicates when an action happened, while Voice (Active/Passive) indicates whether the subject performed the action or received it. Always check time markers and the logical ability of the subject to act.',
            bullets: [
                'Passive Voice (ถูกกระทำ) = Verb to be + V.3',
                'ถ้าประธานเป็นสิ่งของ มักจะต้องอยู่ในรูป Passive Voice (เช่น รถถูกซ่อม, จดหมายถูกส่ง)',
                'สังเกตคำบอกเวลา: Yesterday ➔ Past Simple (V.2), Since/For ➔ Present Perfect (has/have + V.3)'
            ]
        },
        {
            type: 'grammar',
            title: 'จุดหลอก Tense & Voice ยอดฮิต',
            contentTh: 'ข้อสอบมักจะหลอกโดยใช้ Active Voice กับสิ่งของ หรือใช้ Tense ผิดบริบท',
            contentEn: 'The exam often tries to trick you by using the active voice for inanimate objects or mismatching tenses with time markers.',
            rules: [
                {
                    formula: 'สิ่งของ + Verb to be + V.3',
                    explanation: 'เมื่อประธานคือสิ่งของ มักจะไม่สามารถกระทำกริยาเองได้',
                    examples: [
                        { correct: 'The report was completed yesterday.', incorrect: 'The report completed yesterday.', why: 'รายงานเสร็จตัวเองไม่ได้ ต้องถูกทำ (was completed)' }
                    ]
                },
                {
                    formula: 'Since / For + Present Perfect',
                    explanation: 'เมื่อเจอ Since หรือ For ต้องใช้ Has/Have + V.3',
                    examples: [
                        { correct: 'She has worked here since 2010.', incorrect: 'She worked here since 2010.', why: 'since 2010 เป็นจุดเริ่มต้นของเวลาที่ส่งผลถึงปัจจุบัน ต้องใช้ Present Perfect' }
                    ]
                }
            ]
        },
        {
            type: 'quiz',
            title: 'Quiz: จับผิด Tense และ Voice (10 ข้อ)',
            questions: [
                {
                    question: 'Identify the error: (A) The new bridge (B) built (C) by the government (D) last year.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The new bridge',
                        '(B) built',
                        '(C) by the government',
                        '(D) last year'
                    ],
                    answer: 1,
                    explanationTh: 'จุดที่ผิดคือ (B) built สะพานสร้างตัวเองไม่ได้ ต้องถูกสร้าง (Passive Voice) จึงต้องแก้เป็น "was built"',
                    explanationEn: 'A bridge cannot build itself. It must be passive voice: "was built".'
                },
                {
                    question: 'Identify the error: (A) By the time (B) we arrived, the movie (C) already (D) started.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) By the time',
                        '(B) we arrived',
                        '(C) already',
                        '(D) started'
                    ],
                    answer: 3,
                    explanationTh: 'เหตุการณ์ที่เกิดขึ้นและจบไปแล้วก่อนอีกเหตุการณ์ในอดีต (By the time we arrived) ต้องใช้ Past Perfect (had + V.3) แก้เป็น "had already started"',
                    explanationEn: 'The movie started before they arrived. Use Past Perfect: "had already started".'
                },
                {
                    question: 'Identify the error: (A) Water (B) is boiling (C) at 100 degrees (D) Celsius.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Water',
                        '(B) is boiling',
                        '(C) at 100 degrees',
                        '(D) Celsius'
                    ],
                    answer: 1,
                    explanationTh: 'ข้อเท็จจริงทางวิทยาศาสตร์ต้องใช้ Present Simple เสมอ แก้ is boiling (กำลังเดือด) เป็น "boils"',
                    explanationEn: 'Scientific facts are expressed in the Present Simple tense. Change "is boiling" to "boils".'
                },
                {
                    question: 'Identify the error: (A) The package (B) has delivered (C) to your house (D) this morning.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The package',
                        '(B) has delivered',
                        '(C) to your house',
                        '(D) this morning'
                    ],
                    answer: 1,
                    explanationTh: 'กล่องพัสดุส่งตัวเองไม่ได้ ต้องถูกส่ง (Passive) และเกิดขึ้นแล้วในอดีต (this morning) ควรแก้เป็น "was delivered"',
                    explanationEn: 'A package cannot deliver itself. It requires the passive voice: "was delivered".'
                },
                {
                    question: 'Identify the error: (A) I (B) am knowing (C) him for (D) more than ten years.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) I',
                        '(B) am knowing',
                        '(C) him for',
                        '(D) more than ten years'
                    ],
                    answer: 1,
                    explanationTh: 'กริยาบอกความรู้สึก/รับรู้ เช่น know ไม่ใช้รูป -ing (Continuous) และมีคำว่า for ต้องใช้ Present Perfect แก้เป็น "have known"',
                    explanationEn: 'State verbs like "know" are not used in continuous forms. Use Present Perfect: "have known".'
                },
                {
                    question: 'Identify the error: (A) The criminal (B) was catch (C) by the police (D) near the border.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The criminal',
                        '(B) was catch',
                        '(C) by the police',
                        '(D) near the border'
                    ],
                    answer: 1,
                    explanationTh: 'โครงสร้าง Passive Voice คือ V.to be + V.3 ต้องเปลี่ยน catch เป็นช่อง 3 คือ "was caught"',
                    explanationEn: 'Passive voice requires a past participle (V.3). Change "catch" to "caught".'
                },
                {
                    question: 'Identify the error: (A) He (B) will graduates (C) from the university (D) next year.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) He',
                        '(B) will graduates',
                        '(C) from the university',
                        '(D) next year'
                    ],
                    answer: 1,
                    explanationTh: 'หลัง Modal Verb (will, would, can, could) ต้องตามด้วย V.infinitive แบบไม่เติม s/es เด็ดขาด แก้เป็น "will graduate"',
                    explanationEn: 'Modal verbs (will) must be followed by a base verb without "s".'
                },
                {
                    question: 'Identify the error: (A) They (B) live in (C) this city (D) since 1995.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) They',
                        '(B) live in',
                        '(C) this city',
                        '(D) since 1995'
                    ],
                    answer: 1,
                    explanationTh: 'มีคำว่า "since" บ่งบอกเวลาที่ต่อเนื่องถึงปัจจุบัน ต้องใช้ Present Perfect (have lived) ไม่ใช่ Present Simple (live)',
                    explanationEn: 'The word "since" requires the Present Perfect tense: "have lived".'
                },
                {
                    question: 'Identify the error: (A) The letter (B) wrote (C) by the manager (D) was very polite.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The letter',
                        '(B) wrote',
                        '(C) by the manager',
                        '(D) was very polite'
                    ],
                    answer: 1,
                    explanationTh: 'จดหมายเขียนตัวเองไม่ได้ ต้องเป็น Passive Voice ในรูปส่วนขยาย (Past Participle) แก้ wrote เป็น "written"',
                    explanationEn: 'The letter cannot write itself. It must be a past participle modifier: "written".'
                },
                {
                    question: 'Identify the error: (A) When I (B) woke up, the sun (C) was shone (D) brightly.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) When I',
                        '(B) woke up,',
                        '(C) was shone',
                        '(D) brightly'
                    ],
                    answer: 2,
                    explanationTh: 'พระอาทิตย์สามารถส่องแสงได้เอง (Active) และกำลังทำอยู่ในตอนนั้น (Past Continuous) ต้องใช้ "was shining" ไม่ใช่ was shone',
                    explanationEn: 'The sun performs the action of shining. It should be Past Continuous: "was shining".'
                }
            ]
        }
    ]
});
