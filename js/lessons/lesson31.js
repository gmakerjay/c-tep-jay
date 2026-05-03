LESSONS.push({
    id: 31,
    part: 3,
    titleTh: 'ตะลุย Error: Participles & Modifiers',
    titleEn: 'Grammar: Participles and Modifiers',
    icon: '✨',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: V.ing (ทำเอง) vs V.3 (ถูกทำ)',
            contentTh: 'Participles คือการเอาคำกริยามาทำหน้าที่เป็น "ส่วนขยาย" (Adjective) ซึ่งในข้อสอบ Error มักจะออกเรื่องนี้บ่อยมาก! หลักการจำง่ายๆ คือ V.ing = สิ่งนั้นทำเอง, ส่วน V.3 = สิ่งนั้นถูกกระทำ',
            contentEn: 'Participles function as adjectives modifying nouns. Present participles (V.ing) indicate active meaning, while past participles (V.3) indicate passive meaning.',
            bullets: [
                'The crying baby (เด็กทารกที่กำลังร้องไห้ - ทำเองใช้ V.ing)',
                'The broken window (หน้าต่างที่ถูกพัง - ถูกทำใช้ V.3)',
                'ระวัง Dangling Modifier: ส่วนขยายที่ขึ้นต้นประโยค ต้องขยาย "ประธาน" ที่อยู่หลังเครื่องหมายจุลภาค (,)'
            ]
        },
        {
            type: 'grammar',
            title: 'Dangling Modifiers (ส่วนขยายห้อยต่องแต่ง)',
            contentTh: 'ส่วนขยายขึ้นต้นประโยค ต้องสัมพันธ์กับประธานตัวถัดไป',
            contentEn: 'A modifier at the beginning of a sentence must logically describe the subject of the main clause.',
            rules: [
                {
                    formula: 'V.ing / V.3 Phrase, + Subject + Verb',
                    explanation: 'ประธานต้องสามารถทำกริยา V.ing หรือ ถูกทำ V.3 ตามที่ขึ้นต้นมาได้',
                    examples: [
                        { correct: 'Walking down the street, I saw a dog.', incorrect: 'Walking down the street, a dog bit me.', why: 'ประโยคที่ผิดแปลว่าหมาเดินเล่นอยู่บนถนน ซึ่งผิดบริบท' }
                    ]
                }
            ]
        },
        {
            type: 'quiz',
            title: 'Quiz: จับผิด Participles (10 ข้อ)',
            questions: [
                {
                    question: 'Identify the error: (A) The man (B) stand (C) next to the door is (D) my uncle.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The man',
                        '(B) stand',
                        '(C) next to the door is',
                        '(D) my uncle'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้ชายทำกริยายืนเอง ต้องใช้ V.ing ขยายคำนาม แก้ stand เป็น "standing" (The man standing...)',
                    explanationEn: 'The man performs the action of standing. Use the present participle "standing" to modify the noun.'
                },
                {
                    question: 'Identify the error: (A) Exhausting (B) from the long trip, (C) she fell (D) asleep immediately.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Exhausting',
                        '(B) from the long trip,',
                        '(C) she fell',
                        '(D) asleep immediately'
                    ],
                    answer: 0,
                    explanationTh: 'เธอ "รู้สึก" เหนื่อยล้า (ถูกทำให้เหนื่อยโดยการเดินทาง) ต้องใช้ Past Participle (V.3) แก้เป็น "Exhausted"',
                    explanationEn: 'She feels tired (acted upon by the trip). Use the past participle "Exhausted", not "Exhausting".'
                },
                {
                    question: 'Identify the error: (A) The letter, (B) writing (C) in Spanish, was difficult (D) to translate.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The letter,',
                        '(B) writing',
                        '(C) in Spanish, was difficult',
                        '(D) to translate'
                    ],
                    answer: 1,
                    explanationTh: 'จดหมายเขียนตัวเองไม่ได้ ต้องใช้ V.3 ขยาย แก้ writing เป็น "written"',
                    explanationEn: 'The letter cannot write itself; it was written. Change "writing" to "written".'
                },
                {
                    question: 'Identify the error: (A) Looking (B) out the window, (C) the mountains (D) appeared majestic.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Looking',
                        '(B) out the window,',
                        '(C) the mountains',
                        '(D) appeared majestic'
                    ],
                    answer: 2,
                    explanationTh: 'Dangling Modifier: ประโยคนี้แปลว่า "ภูเขากำลังมองออกไปนอกหน้าต่าง" ซึ่งผิดตรรกะ ต้องแก้ประธานหลักเป็นคน เช่น "I saw the majestic mountains"',
                    explanationEn: 'Dangling modifier: "Looking" must modify a person, not "the mountains".'
                },
                {
                    question: 'Identify the error: (A) The (B) stole car (C) was found (D) in the forest.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The',
                        '(B) stole car',
                        '(C) was found',
                        '(D) in the forest'
                    ],
                    answer: 1,
                    explanationTh: 'รถที่ถูกขโมยต้องใช้ V.3 (stolen) ไม่ใช่ V.2 (stole) นำมาวางหน้า Noun เพื่อเป็น Adjective แก้เป็น "stolen car"',
                    explanationEn: 'To modify a noun passively, use the V.3 form "stolen", not the V.2 "stole".'
                },
                {
                    question: 'Identify the error: (A) The movie was (B) so bored (C) that half the audience (D) left early.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The movie was',
                        '(B) so bored',
                        '(C) that half the audience',
                        '(D) left early'
                    ],
                    answer: 1,
                    explanationTh: 'ภาพยนตร์ต้อง "น่าเบื่อ" (boring) ไม่ใช่ "รู้สึกเบื่อ" (bored) แก้เป็น "boring"',
                    explanationEn: 'The movie causes the feeling, so it is "boring". People feel "bored".'
                },
                {
                    question: 'Identify the error: (A) Injuring (B) in the accident, (C) he was taken (D) to the hospital.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Injuring',
                        '(B) in the accident,',
                        '(C) he was taken',
                        '(D) to the hospital'
                    ],
                    answer: 0,
                    explanationTh: 'เขาถูกทำให้บาดเจ็บจากอุบัติเหตุ (ถูกกระทำ) ต้องขึ้นต้นด้วย V.3 แก้เป็น "Injured"',
                    explanationEn: 'He received the injury, so it requires the past participle "Injured".'
                },
                {
                    question: 'Identify the error: (A) The instructions (B) given by the teacher (C) was (D) confusing.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The instructions',
                        '(B) given by the teacher',
                        '(C) was',
                        '(D) confusing'
                    ],
                    answer: 2,
                    explanationTh: 'ประธานคือ "The instructions" (พหูพจน์) ส่วน given by the teacher เป็นแค่ส่วนขยาย กริยาต้องแก้ was เป็น "were"',
                    explanationEn: 'The subject "instructions" is plural. The verb must be "were".'
                },
                {
                    question: 'Identify the error: (A) Any students (B) wish (C) to enroll must (D) fill out this form.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Any students',
                        '(B) wish',
                        '(C) to enroll must',
                        '(D) fill out this form'
                    ],
                    answer: 1,
                    explanationTh: 'ประโยคนี้มีกริยาแท้คือ must fill out แล้ว ดังนั้น wish ต้องเปลี่ยนเป็นส่วนขยายแบบ V.ing คือ "wishing" (นักเรียนที่ปรารถนาจะ...)',
                    explanationEn: 'The main verb is "must fill out". "Wish" should be a participle modifier "wishing".'
                },
                {
                    question: 'Identify the error: (A) The results of the (B) newly (C) publishing research (D) are shocking.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The results of the',
                        '(B) newly',
                        '(C) publishing research',
                        '(D) are shocking'
                    ],
                    answer: 2,
                    explanationTh: 'งานวิจัยตีพิมพ์ตัวเองไม่ได้ (ต้องถูกตีพิมพ์) ต้องใช้ V.3 แก้เป็น "published research"',
                    explanationEn: 'Research is published by someone, it does not publish itself. Use the past participle "published".'
                }
            ]
        }
    ]
});
