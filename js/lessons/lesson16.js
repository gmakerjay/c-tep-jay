LESSONS.push({
    id: 16,
    part: 2,
    titleTh: 'ปูพื้นฐาน Cloze Test (การเติมคำศัพท์)',
    titleEn: 'Reading Comprehension: Vocabulary Cloze',
    icon: '🧩',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: ทำความรู้จักกับ Cloze Test',
            contentTh: 'Part 2 ของข้อสอบ CU-TEP คือ Reading Comprehension (การอ่าน) ซึ่งส่วนแรกมักจะเป็น Cloze Test (การเติมคำในช่องว่าง) โดยจะแบ่งเป็นการเติมคำศัพท์ (Vocabulary) และการเติมไวยากรณ์ (Grammar) ในบทนี้เราจะเน้นที่การเดาคำศัพท์จากบริบทรอบข้าง (Context Clues)',
            contentEn: 'The Reading Comprehension section often begins with a Cloze Test. You must fill in the blanks using context clues to determine the most appropriate vocabulary word.',
            bullets: [
                'Context Clues คือคำใบ้ที่ซ่อนอยู่ในประโยคก่อนหน้าหรือหลังช่องว่าง',
                'สังเกตคำเชื่อม (Conjunctions) เช่น "but", "however" ที่บอกความขัดแย้ง จะช่วยให้เดาศัพท์ตรงข้ามได้',
                'พยายามแปลความหมายรวมๆ ของประโยคก่อนดูตัวเลือก'
            ]
        },
        {
            type: 'passage',
            title: 'บทความ: The Impact of Climate Change (ผลกระทบของการเปลี่ยนแปลงสภาพภูมิอากาศ)',
            text: `Climate change is one of the most pressing ___(1)___ of our time. Over the past century, global temperatures have risen significantly due to the increased ___(2)___ of greenhouse gases. If this trend continues, many coastal cities will be at risk of severe ___(3)___ caused by rising sea levels. 
            
Furthermore, extreme weather events such as hurricanes and droughts are becoming more ___(4)___. Governments around the world are being urged to ___(5)___ strict environmental policies to reduce carbon footprints. However, transitioning to renewable energy sources requires ___(6)___ investment and international cooperation.`,
            translationTh: `การเปลี่ยนแปลงสภาพภูมิอากาศเป็นหนึ่งใน ___(1)___ ที่เร่งด่วนที่สุดในยุคของเรา ในช่วงศตวรรษที่ผ่านมา อุณหภูมิโลกได้สูงขึ้นอย่างมีนัยสำคัญเนื่องจากการเพิ่มขึ้นของ ___(2)___ ก๊าซเรือนกระจก หากแนวโน้มนี้ยังคงดำเนินต่อไป เมืองชายฝั่งหลายแห่งจะตกอยู่ในความเสี่ยงต่อ ___(3)___ ที่รุนแรงซึ่งเกิดจากระดับน้ำทะเลที่สูงขึ้น
            
นอกจากนี้ เหตุการณ์สภาพอากาศสุดขั้ว เช่น พายุเฮอริเคนและภัยแล้ง กำลังกลายเป็นเรื่องที่ ___(4)___ มากขึ้น รัฐบาลทั่วโลกกำลังถูกเรียกร้องให้ ___(5)___ นโยบายสิ่งแวดล้อมที่เข้มงวดเพื่อลดปริมาณคาร์บอนฟุตพริ้นท์ อย่างไรก็ตาม การเปลี่ยนผ่านไปสู่แหล่งพลังงานหมุนเวียนนั้นต้องอาศัยการลงทุนที่ ___(6)___ และความร่วมมือระหว่างประเทศ`
        },
        {
            type: 'quiz',
            title: 'Quiz: เลือกคำศัพท์ที่เหมาะสมที่สุดเติมลงในช่องว่าง',
            questions: [
                {
                    question: 'Blank (1) "Climate change is one of the most pressing _____ of our time."',
                    questionTh: 'ช่องว่าง (1)',
                    choices: [
                        'issues',
                        'benefits',
                        'rewards',
                        'illusions'
                    ],
                    answer: 0,
                    explanationTh: 'บริบทพูดถึงเรื่องซีเรียส (pressing = เร่งด่วน) คำที่เหมาะสมคือ "issues" (ปัญหา/ประเด็น) ส่วน benefits/rewards แปลว่าข้อดีซึ่งขัดแย้งกับบริบท',
                    explanationEn: '"Issues" fits the context of a pressing (urgent) problem like climate change.'
                },
                {
                    question: 'Blank (2) "...global temperatures have risen significantly due to the increased _____ of greenhouse gases."',
                    questionTh: 'ช่องว่าง (2)',
                    choices: [
                        'reduction',
                        'emission',
                        'protection',
                        'extinction'
                    ],
                    answer: 1,
                    explanationTh: 'อุณหภูมิสูงขึ้นเพราะการ "ปล่อย" (emission) ก๊าซเรือนกระจกเพิ่มขึ้น',
                    explanationEn: '"Emission" refers to the release of gases, which causes global warming.'
                },
                {
                    question: 'Blank (3) "...many coastal cities will be at risk of severe _____ caused by rising sea levels."',
                    questionTh: 'ช่องว่าง (3)',
                    choices: [
                        'flooding',
                        'starvation',
                        'development',
                        'population'
                    ],
                    answer: 0,
                    explanationTh: 'ระดับน้ำทะเลที่สูงขึ้น (rising sea levels) จะทำให้เมืองชายฝั่งเสี่ยงต่อการเกิด "น้ำท่วม" (flooding)',
                    explanationEn: 'Rising sea levels naturally lead to "flooding" for coastal cities.'
                },
                {
                    question: 'Blank (4) "Furthermore, extreme weather events such as hurricanes and droughts are becoming more _____."',
                    questionTh: 'ช่องว่าง (4)',
                    choices: [
                        'rare',
                        'frequent',
                        'pleasant',
                        'invisible'
                    ],
                    answer: 1,
                    explanationTh: 'สภาพอากาศสุดขั้วกำลังเกิดขึ้น "บ่อยครั้ง" (frequent) มากขึ้น ซึ่งเป็นผลเสีย',
                    explanationEn: 'Climate change makes extreme weather more "frequent" (occurring often).'
                },
                {
                    question: 'Blank (5) "Governments around the world are being urged to _____ strict environmental policies..."',
                    questionTh: 'ช่องว่าง (5)',
                    choices: [
                        'ignore',
                        'violate',
                        'implement',
                        'abandon'
                    ],
                    answer: 2,
                    explanationTh: 'รัฐบาลถูกเรียกร้องให้ "บังคับใช้/นำไปปฏิบัติ" (implement) นโยบายที่เข้มงวด',
                    explanationEn: 'Governments are urged to "implement" (put into effect) policies.'
                },
                {
                    question: 'Blank (6) "...transitioning to renewable energy sources requires _____ investment..."',
                    questionTh: 'ช่องว่าง (6)',
                    choices: [
                        'trivial',
                        'minimal',
                        'substantial',
                        'temporary'
                    ],
                    answer: 2,
                    explanationTh: 'การเปลี่ยนไปใช้พลังงานหมุนเวียนระดับโลก ต้องใช้การลงทุนที่ "มากมาย/มหาศาล" (substantial)',
                    explanationEn: '"Substantial" means large or significant in amount, which fits the massive investment needed.'
                }
            ]
        }
    ]
});
