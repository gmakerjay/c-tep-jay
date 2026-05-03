LESSONS.push({
    id: 28,
    part: 3,
    titleTh: 'ตะลุย Error Identification: Parts of Speech',
    titleEn: 'Grammar: Parts of Speech',
    icon: '🧩',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: วางผิดที่ ชีวิตเปลี่ยน',
            contentTh: 'Parts of Speech (ชนิดของคำ) เช่น Noun, Verb, Adjective, Adverb มีหน้าที่และ "ตำแหน่ง" เฉพาะตัวในประโยค ข้อสอบมักจะหลอกโดยเอา Adjective ไปขยาย Verb หรือเอา Noun ไปวางหน้า Noun โดยไม่จำเป็น',
            contentEn: 'Each part of speech has a specific role and position in a sentence. Adjectives modify nouns, while adverbs modify verbs, adjectives, or other adverbs. Do not mix them up!',
            bullets: [
                'Adjective (ขยายนาม) วางหน้า Noun หรือหลัง Verb to be (เช่น beautiful girl, she is beautiful)',
                'Adverb (ลงท้าย -ly) ห้ามนำไปขยาย Noun! ให้ใช้ขยาย Verb หรือ Adjective เท่านั้น',
                'Preposition (in, on, at, of) ต้องตามด้วย Noun หรือ V.ing เสมอ'
            ]
        },
        {
            type: 'grammar',
            title: 'การสังเกต Suffix (หางคำ)',
            contentTh: 'หางคำช่วยบอกได้ว่าคำนั้นเป็นชนิดอะไร',
            contentEn: 'Suffixes can help you identify the part of speech of a word.',
            rules: [
                {
                    formula: 'Noun Suffixes',
                    explanation: '-tion, -ment, -ness, -ity, -ance, -ence',
                    examples: [
                        { correct: 'Information, Development, Happiness' }
                    ]
                },
                {
                    formula: 'Adjective Suffixes',
                    explanation: '-ful, -less, -ous, -able, -ive, -al',
                    examples: [
                        { correct: 'Beautiful, Harmless, Dangerous, Attractive' }
                    ]
                }
            ]
        },
        {
            type: 'quiz',
            title: 'Quiz: จับผิด Parts of Speech (10 ข้อ)',
            questions: [
                {
                    question: 'Identify the error: (A) She spoke (B) very quiet (C) so that nobody (D) could hear her.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) She spoke',
                        '(B) very quiet',
                        '(C) so that nobody',
                        '(D) could hear her'
                    ],
                    answer: 1,
                    explanationTh: 'จุดที่ผิดคือ (B) quiet เพราะต้องการขยายกริยา spoke (พูดอย่างไร? พูดอย่างเงียบๆ) ต้องใช้ Adverb เติม -ly เป็น "quietly"',
                    explanationEn: 'To modify the verb "spoke", you need an adverb ("quietly"), not an adjective ("quiet").'
                },
                {
                    question: 'Identify the error: (A) The company (B) needs to (C) improvement (D) its customer service.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The company',
                        '(B) needs to',
                        '(C) improvement',
                        '(D) its customer service'
                    ],
                    answer: 2,
                    explanationTh: 'หลัง "to" ต้องเป็นกริยาช่อง 1 (Infinitive) แต่ improvement เป็นคำนาม ต้องเปลี่ยนเป็นกริยา "improve"',
                    explanationEn: 'After "to", a base verb is required. "Improvement" is a noun; it should be the verb "improve".'
                },
                {
                    question: 'Identify the error: (A) It is (B) importance (C) to read (D) the instructions carefully.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) It is',
                        '(B) importance',
                        '(C) to read',
                        '(D) the instructions carefully'
                    ],
                    answer: 1,
                    explanationTh: 'หลัง Verb to be (is) ตรงนี้ต้องการ Adjective เพื่อบอกลักษณะ แต่ importance เป็นนาม (Noun) ต้องแก้เป็น "important"',
                    explanationEn: 'Following the verb "is", an adjective is needed to describe the subject. Change "importance" to "important".'
                },
                {
                    question: 'Identify the error: (A) The manager looked (B) angry (C) at the employee (D) who was late.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The manager looked',
                        '(B) angry',
                        '(C) at the employee',
                        '(D) who was late'
                    ],
                    answer: 1,
                    explanationTh: 'กริยา looked at แปลว่า "มองดู" เป็น Action Verb ต้องใช้ Adverb ขยาย (มองดูอย่างโกรธจัด) แก้เป็น "angrily" (ถ้า looked เฉยๆ แปลว่า ดูเหมือน จะใช้ Adjective ได้)',
                    explanationEn: '"Look at" is an action verb requiring an adverb. Change "angry" to "angrily".'
                },
                {
                    question: 'Identify the error: (A) The (B) successfully (C) of the project depends (D) on teamwork.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The',
                        '(B) successfully',
                        '(C) of the project depends',
                        '(D) on teamwork'
                    ],
                    answer: 1,
                    explanationTh: 'หลัง Article "The" ต้องเป็นคำนาม แต่ successfully เป็น Adverb ต้องแก้เป็นคำนามคือ "success" (ความสำเร็จ)',
                    explanationEn: 'An article like "The" must be followed by a noun. Change "successfully" to "success".'
                },
                {
                    question: 'Identify the error: (A) We found the (B) presentation (C) extremely (D) bore.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) We found the',
                        '(B) presentation',
                        '(C) extremely',
                        '(D) bore'
                    ],
                    answer: 3,
                    explanationTh: 'ต้องการ Adjective เพื่อขยาย presentation ว่าน่าเบื่อ ต้องเปลี่ยนคำกริยา bore เป็น "boring"',
                    explanationEn: 'An adjective is needed to describe the presentation. Change "bore" to "boring".'
                },
                {
                    question: 'Identify the error: (A) She is (B) a very (C) beautifully (D) singer.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) She is',
                        '(B) a very',
                        '(C) beautifully',
                        '(D) singer'
                    ],
                    answer: 2,
                    explanationTh: 'คำว่า singer เป็น Noun ต้องใช้ Adjective ขยาย (วางหน้า Noun) ห้ามใช้ Adverb ต้องแก้ beautifully เป็น "beautiful"',
                    explanationEn: 'To modify the noun "singer", use the adjective "beautiful", not the adverb "beautifully".'
                },
                {
                    question: 'Identify the error: (A) He is interested (B) in (C) learn (D) a new language.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) He is interested',
                        '(B) in',
                        '(C) learn',
                        '(D) a new language'
                    ],
                    answer: 2,
                    explanationTh: 'คำว่า "in" เป็น Preposition ต้องตามด้วย Noun หรือ V.ing (Gerund) ต้องแก้ learn เป็น "learning"',
                    explanationEn: 'Prepositions must be followed by a noun or a gerund (V.ing). Change "learn" to "learning".'
                },
                {
                    question: 'Identify the error: (A) Despite of (B) the heavy rain, (C) they went (D) out for dinner.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Despite of',
                        '(B) the heavy rain,',
                        '(C) they went',
                        '(D) out for dinner'
                    ],
                    answer: 0,
                    explanationTh: 'คำว่า Despite (ทั้งๆที่) เป็น Preposition ในตัวมันเองแล้ว ไม่ต้องมี "of" ตามหลัง (ถ้าจะใช้ of ต้องเป็น In spite of) ต้องตัด of ทิ้ง',
                    explanationEn: '"Despite" never takes "of". It should just be "Despite". ("In spite of" is the alternative).'
                },
                {
                    question: 'Identify the error: (A) The computer works (B) perfect (C) after it was (D) repaired.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The computer works',
                        '(B) perfect',
                        '(C) after it was',
                        '(D) repaired'
                    ],
                    answer: 1,
                    explanationTh: 'คำว่า works เป็น Verb ต้องถูกขยายด้วย Adverb (ทำงานอย่างสมบูรณ์แบบ) แก้ perfect เป็น "perfectly"',
                    explanationEn: 'The verb "works" must be modified by an adverb. Change "perfect" to "perfectly".'
                }
            ]
        }
    ]
});
