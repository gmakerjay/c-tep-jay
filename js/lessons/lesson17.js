LESSONS.push({
    id: 17,
    part: 2,
    titleTh: 'ปูพื้นฐาน Cloze Test (ไวยากรณ์)',
    titleEn: 'Reading Comprehension: Grammar Cloze',
    icon: '🧩',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: ไวยากรณ์ใน Cloze Test',
            contentTh: 'นอกจากการเติมคำศัพท์แล้ว Cloze Test ยังทดสอบความแม่นยำด้านไวยากรณ์ (Grammar) ด้วย เช่น การใช้ Tense ให้ถูกต้อง การเลือกคำบุพบท (Prepositions) หรือการใช้คำเชื่อม (Connectors) หน้าที่ของเราคือการวิเคราะห์โครงสร้างประโยครอบๆ ช่องว่าง',
            contentEn: 'A grammar cloze test evaluates your knowledge of sentence structure, verb tenses, prepositions, and conjunctions. Always look at the words immediately before and after the blank.',
            bullets: [
                'เช็ค Subject-Verb Agreement: ถ้าประธานเอกพจน์ กริยาต้องเติม s/es',
                'เช็ค Tense: ดูตัวบอกเวลาในประโยค (เช่น last year, since, currently)',
                'เช็ค Part of Speech: หลัง Preposition มักตามด้วย Noun หรือ V.ing'
            ]
        },
        {
            type: 'passage',
            title: 'บทความ: The History of the Internet (ประวัติศาสตร์ของอินเทอร์เน็ต)',
            text: `The Internet ___(1)___ revolutionized the way we live, work, and communicate. Originally developed in the 1960s by the United States Department of Defense, it was initially used ___(2)___ military communication. It wasn't until the 1990s that the World Wide Web was invented, making the Internet accessible to the general public.
            
Since then, technology ___(3)___ rapidly. Today, billions of people rely ___(4)___ the Internet for daily tasks. However, this convenience comes with risks. Cybersecurity threats have become a major concern, ___(5)___ prompts experts to develop stronger data protection methods. ___(6)___ these challenges, the digital age continues to thrive.`,
            translationTh: `อินเทอร์เน็ต ___(1)___ ปฏิวัติวิถีชีวิต การทำงาน และการสื่อสารของเรา แต่เดิมถูกพัฒนาขึ้นในทศวรรษที่ 1960 โดยกระทรวงกลาโหมสหรัฐอเมริกา ในระยะแรกมันถูกใช้ ___(2)___ การสื่อสารทางการทหาร จนกระทั่งช่วงปี 1990 ที่ World Wide Web ถูกคิดค้นขึ้น ทำให้อินเทอร์เน็ตเข้าถึงได้สำหรับคนทั่วไป
            
ตั้งแต่นั้นมา เทคโนโลยีก็ ___(3)___ อย่างรวดเร็ว ทุกวันนี้ ผู้คนหลายพันล้านคนพึ่งพา ___(4)___ อินเทอร์เน็ตสำหรับงานประจำวัน อย่างไรก็ตาม ความสะดวกสบายนี้มาพร้อมกับความเสี่ยง ภัยคุกคามทางไซเบอร์ได้กลายเป็นข้อกังวลหลัก ___(5)___ กระตุ้นให้ผู้เชี่ยวชาญพัฒนาวิธีการปกป้องข้อมูลที่แข็งแกร่งขึ้น ___(6)___ ความท้าทายเหล่านี้ ยุคดิจิทัลก็ยังคงเติบโตต่อไป`
        },
        {
            type: 'quiz',
            title: 'Quiz: เลือกคำตอบที่ถูกต้องตามหลักไวยากรณ์',
            questions: [
                {
                    question: 'Blank (1) "The Internet _____ revolutionized the way we live..."',
                    questionTh: 'ช่องว่าง (1)',
                    choices: [
                        'has',
                        'have',
                        'is',
                        'was'
                    ],
                    answer: 0,
                    explanationTh: 'ประธาน "The Internet" เป็นเอกพจน์ ต้องใช้ has + V.3 (revolutionized) เพื่อบอกเหตุการณ์ที่ส่งผลตั้งแต่อดีตจนถึงปัจจุบัน (Present Perfect)',
                    explanationEn: '"The Internet" is singular, so we use "has" + V.3 to form the Present Perfect tense.'
                },
                {
                    question: 'Blank (2) "...it was initially used _____ military communication."',
                    questionTh: 'ช่องว่าง (2)',
                    choices: [
                        'in',
                        'on',
                        'for',
                        'at'
                    ],
                    answer: 2,
                    explanationTh: 'ใช้ (used) "เพื่อ" (for) วัตถุประสงค์บางอย่าง',
                    explanationEn: 'The preposition "for" is used to indicate purpose (used for military communication).'
                },
                {
                    question: 'Blank (3) "Since then, technology _____ rapidly."',
                    questionTh: 'ช่องว่าง (3)',
                    choices: [
                        'advances',
                        'advanced',
                        'is advancing',
                        'has advanced'
                    ],
                    answer: 3,
                    explanationTh: 'มีคำบอกเวลา "Since then" (ตั้งแต่นั้นมา) โครงสร้างประโยคต้องเป็น Present Perfect Tense (has/have + V.3)',
                    explanationEn: 'The phrase "Since then" requires the Present Perfect tense (has advanced).'
                },
                {
                    question: 'Blank (4) "Today, billions of people rely _____ the Internet..."',
                    questionTh: 'ช่องว่าง (4)',
                    choices: [
                        'on',
                        'with',
                        'to',
                        'by'
                    ],
                    answer: 0,
                    explanationTh: 'คำกริยา "rely" ต้องมาคู่กับ preposition "on" (rely on = พึ่งพาอาศัย)',
                    explanationEn: 'The verb "rely" is always followed by the preposition "on".'
                },
                {
                    question: 'Blank (5) "Cybersecurity threats have become a major concern, _____ prompts experts..."',
                    questionTh: 'ช่องว่าง (5)',
                    choices: [
                        'who',
                        'which',
                        'where',
                        'what'
                    ],
                    answer: 1,
                    explanationTh: 'ใช้ "which" (ซึ่ง) เป็น Relative Pronoun ขยายประโยคข้างหน้าที่พูดถึงภัยคุกคามทางไซเบอร์ที่กลายเป็นปัญหาหลัก (ไม่ใช่คนจึงใช้ who ไม่ได้)',
                    explanationEn: '"Which" is used as a relative pronoun to refer to the entire preceding clause.'
                },
                {
                    question: 'Blank (6) "_____ these challenges, the digital age continues to thrive."',
                    questionTh: 'ช่องว่าง (6)',
                    choices: [
                        'Because',
                        'Although',
                        'Despite',
                        'Therefore'
                    ],
                    answer: 2,
                    explanationTh: 'ประโยคนี้มีความขัดแย้ง (มีความท้าทาย แต่ยุคดิจิทัลก็ยังเติบโต) ต้องใช้ "Despite" (ทั้งๆที่) เพราะตามด้วยคำนาม (these challenges) ถ้าใช้ Although ต้องตามด้วยประโยค (S+V)',
                    explanationEn: '"Despite" shows contrast and is followed by a noun phrase (these challenges).'
                }
            ]
        }
    ]
});
