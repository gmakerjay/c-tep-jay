LESSONS.push({
    id: 30,
    part: 3,
    titleTh: 'ข้อสอบจำลอง: Master Simulation (Error Identification)',
    titleEn: 'Simulation: Error Identification',
    icon: '🏆',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: ทบทวนวิชาจับผิดแกรมม่า',
            contentTh: 'บทนี้จะเป็นการจำลองข้อสอบ Error Identification รวม 15 ข้อ ที่มีทั้งเรื่อง Subject-Verb Agreement, Tense, Parts of Speech และ Connectors ปะปนกัน อ่านประโยคให้จบ วิเคราะห์โครงสร้าง แล้วฟันธงเลยครับ!',
            contentEn: 'This lesson provides a full 15-question simulation of the Error Identification section. It mixes all the grammar concepts we have covered. Analyze the sentence structure carefully before choosing your answer.',
            bullets: [
                'มองหาประธานและกริยาแท้ของประโยคเป็นอันดับแรกเสมอ',
                'ตัดส่วนขยาย (Prepositional Phrases) ออกเวลาวิเคราะห์โครงสร้างหลัก',
                'คำที่ไม่ได้ขีดเส้นใต้ ถือเป็นคำที่ "ถูกต้องเสมอ" ให้ใช้เป็นเบาะแสในการแก้จุดที่ขีดเส้นใต้'
            ]
        },
        {
            type: 'quiz',
            title: 'Simulation Test: 15 Questions',
            questions: [
                {
                    question: 'Identify the error: (A) Everyone (B) who comes to the party (C) are expected to (D) bring a gift.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Everyone',
                        '(B) who comes to the party',
                        '(C) are expected to',
                        '(D) bring a gift'
                    ],
                    answer: 2,
                    explanationTh: 'Everyone ถือเป็นประธานเอกพจน์ กริยาแท้ของประโยคนี้ต้องเป็น is ไม่ใช่ are (แก้ are เป็น is)',
                    explanationEn: '"Everyone" is a singular subject and requires the singular verb "is".'
                },
                {
                    question: 'Identify the error: (A) The rapid (B) grow of the city (C) caused many (D) environmental problems.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The rapid',
                        '(B) grow of the city',
                        '(C) caused many',
                        '(D) environmental problems'
                    ],
                    answer: 1,
                    explanationTh: 'หลัง Adjective (rapid) ต้องเป็นคำนาม แต่ grow เป็นกริยา ต้องแก้เป็นคำนามคือ "growth"',
                    explanationEn: 'An adjective ("rapid") modifies a noun. "Grow" is a verb; it should be the noun "growth".'
                },
                {
                    question: 'Identify the error: (A) I have been (B) living in (C) this neighborhood (D) since five years.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) I have been',
                        '(B) living in',
                        '(C) this neighborhood',
                        '(D) since five years'
                    ],
                    answer: 3,
                    explanationTh: '"five years" เป็นระยะเวลา (จำนวนเวลา) ต้องใช้ "for" (เป็นเวลา) ไม่ใช่ since (ตั้งแต่)',
                    explanationEn: '"Five years" is a duration of time. You must use "for", not "since".'
                },
                {
                    question: 'Identify the error: (A) She dances (B) so graceful (C) that everyone (D) stops to watch her.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) She dances',
                        '(B) so graceful',
                        '(C) that everyone',
                        '(D) stops to watch her'
                    ],
                    answer: 1,
                    explanationTh: 'คำว่า graceful ต้องขยายกริยา dances (เต้นอย่างไร?) จึงต้องเป็น Adverb เติม -ly เป็น "gracefully"',
                    explanationEn: 'To modify the verb "dances", an adverb is required. Change "graceful" to "gracefully".'
                },
                {
                    question: 'Identify the error: (A) Neither the teacher (B) nor the students (C) was prepared (D) for the fire drill.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Neither the teacher',
                        '(B) nor the students',
                        '(C) was prepared',
                        '(D) for the fire drill'
                    ],
                    answer: 2,
                    explanationTh: 'ในโครงสร้าง Neither A nor B กริยาผันตามประธานตัวหลัง (the students) ซึ่งเป็นพหูพจน์ ต้องแก้ was เป็น "were"',
                    explanationEn: 'With "Neither... nor...", the verb agrees with the closest subject ("students", which is plural). Use "were".'
                },
                {
                    question: 'Identify the error: (A) The books (B) that I bought (C) yesterday (D) is very interesting.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The books',
                        '(B) that I bought',
                        '(C) yesterday',
                        '(D) is very interesting'
                    ],
                    answer: 3,
                    explanationTh: 'ประธานหลักคือ "The books" (พหูพจน์) ดังนั้นกริยาแท้ต้องเป็น "are" ไม่ใช่ is',
                    explanationEn: 'The core subject is "The books" (plural). The verb must be "are".'
                },
                {
                    question: 'Identify the error: (A) Despite (B) it was raining, (C) they went (D) to the park.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Despite',
                        '(B) it was raining,',
                        '(C) they went',
                        '(D) to the park'
                    ],
                    answer: 0,
                    explanationTh: '"it was raining" เป็นประโยค (S+V) ดังนั้นใช้ Despite ไม่ได้ ต้องเปลี่ยนเป็น "Although" หรือ "Even though"',
                    explanationEn: '"Despite" must be followed by a noun phrase. Since "it was raining" is a clause, use "Although".'
                },
                {
                    question: 'Identify the error: (A) The package (B) will be send (C) to your office (D) tomorrow morning.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The package',
                        '(B) will be send',
                        '(C) to your office',
                        '(D) tomorrow morning'
                    ],
                    answer: 1,
                    explanationTh: 'พัสดุถูกส่งเป็น Passive Voice โครงสร้างคือ be + V.3 ต้องแก้ send (V.1) เป็น "sent" (V.3)',
                    explanationEn: 'Passive voice requires a past participle. Change "send" to "sent".'
                },
                {
                    question: 'Identify the error: (A) We are looking (B) forward (C) to see (D) you at the event.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) We are looking',
                        '(B) forward',
                        '(C) to see',
                        '(D) you at the event'
                    ],
                    answer: 2,
                    explanationTh: 'สำนวน look forward to (ตั้งตารอ) เป็นข้อยกเว้นที่ to ต้องตามด้วย V.ing หรือ Noun เสมอ ต้องแก้เป็น "to seeing"',
                    explanationEn: 'The phrase "look forward to" is always followed by a gerund (V.ing). Change "to see" to "to seeing".'
                },
                {
                    question: 'Identify the error: (A) Information (B) about the new policies (C) were distributed (D) to all staff.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Information',
                        '(B) about the new policies',
                        '(C) were distributed',
                        '(D) to all staff'
                    ],
                    answer: 2,
                    explanationTh: 'คำว่า Information เป็นนามนับไม่ได้ ถือเป็นเอกพจน์เสมอ กริยาต้องแก้จาก were เป็น "was"',
                    explanationEn: '"Information" is an uncountable, singular noun. Change "were" to "was".'
                },
                {
                    question: 'Identify the error: (A) He is (B) not only a talented musician (C) but also (D) writes beautifully.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) He is',
                        '(B) not only a talented musician',
                        '(C) but also',
                        '(D) writes beautifully'
                    ],
                    answer: 3,
                    explanationTh: 'โครงสร้างคู่ขนาน (Parallelism) หลัง not only เป็นกลุ่มคำนาม (a talented musician) ดังนั้นหลัง but also ก็ควรเป็นคำนาม เช่น "a beautiful writer"',
                    explanationEn: 'Parallel structure is broken. It should be "but also a beautiful writer" to match the noun phrase after "not only".'
                },
                {
                    question: 'Identify the error: (A) Any student (B) who want (C) to join the trip (D) must sign up here.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) Any student',
                        '(B) who want',
                        '(C) to join the trip',
                        '(D) must sign up here'
                    ],
                    answer: 1,
                    explanationTh: 'who แทนคำว่า student ซึ่งเป็นเอกพจน์ กริยา want จึงต้องเติม s เป็น "wants"',
                    explanationEn: 'The relative pronoun "who" refers to the singular "student". The verb must be "wants".'
                },
                {
                    question: 'Identify the error: (A) She (B) makes (C) fewer mistakes (D) than her sister do.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) She',
                        '(B) makes',
                        '(C) fewer mistakes',
                        '(D) than her sister do'
                    ],
                    answer: 3,
                    explanationTh: 'ประธานคือ her sister (เอกพจน์) กริยาช่วย (Auxiliary verb) ในส่วนท้ายจึงต้องเป็น "does" ไม่ใช่ do',
                    explanationEn: '"Her sister" is singular, so the auxiliary verb should be "does", not "do".'
                },
                {
                    question: 'Identify the error: (A) The (B) economical (C) situation in the country (D) is improving.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) The',
                        '(B) economical',
                        '(C) situation in the country',
                        '(D) is improving'
                    ],
                    answer: 1,
                    explanationTh: 'คำว่า economical แปลว่า "ประหยัด" แต่บริบทนี้ต้องการคำว่า "ทางเศรษฐกิจ" ซึ่งต้องใช้ "economic" (economic situation = สถานการณ์ทางเศรษฐกิจ)',
                    explanationEn: '"Economical" means thrifty. The correct word for "related to the economy" is "economic".'
                },
                {
                    question: 'Identify the error: (A) I (B) will call you (C) as soon as I (D) will arrive at the hotel.',
                    questionTh: 'หาจุดที่ผิด',
                    choices: [
                        '(A) I',
                        '(B) will call you',
                        '(C) as soon as I',
                        '(D) will arrive at the hotel'
                    ],
                    answer: 3,
                    explanationTh: 'หลังคำบอกเวลาบอกเงื่อนไข (as soon as, when, before, if) เราจะไม่ใช้ Future Tense (will) แต่จะใช้ Present Simple แทน ต้องแก้เป็น "arrive"',
                    explanationEn: 'In time clauses (after "as soon as"), use the Present Simple, not the Future tense. Change "will arrive" to "arrive".'
                }
            ]
        }
    ]
});
