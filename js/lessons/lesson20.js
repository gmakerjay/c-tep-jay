LESSONS.push({
    id: 20,
    part: 2,
    titleTh: 'การตีความและการอ้างอิง (Inference & Reference)',
    titleEn: 'Reading: Inference and Reference',
    icon: '🔍',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: การอ่านระหว่างบรรทัด (Reading Between the Lines)',
            contentTh: 'คำถามแนว Inference คือการถามในสิ่งที่ "ผู้เขียนไม่ได้บอกตรงๆ" แต่เราต้องตีความเอาเองจากหลักฐานในบทความ ส่วนคำถามแนว Reference คือการถามว่า คำสรรพนาม (it, they, them) อ้างอิงถึงคำนามตัวไหนที่กล่าวไปแล้ว',
            contentEn: 'Inference questions ask you to draw logical conclusions based on hints in the text. Reference questions ask you to identify the noun that a pronoun replaces.',
            bullets: [
                'Inference Clues: มองหาคำว่า "imply" (บอกใบ้), "suggest" (ชี้แนะ), หรือ "infer" (ตีความได้ว่า)',
                'Reference Clues: เมื่อเจอคำถามถามถึง "it" หรือ "they" ให้ย้อนกลับไปอ่าน 1-2 ประโยคก่อนหน้า เพื่อหาคำนามที่สอดคล้องกัน (เอกพจน์/พหูพจน์)'
            ]
        },
        {
            type: 'passage',
            title: 'บทความ: The Mystery of the Moai Statues',
            text: `Easter Island, a remote volcanic island in Polynesia, is famous for its nearly 1,000 monumental statues, known as moai. Created by the early Rapa Nui people, these massive stone figures have puzzled archaeologists for centuries. Averaging 13 feet tall and weighing 14 tons, they were carved from solidified volcanic ash and transported across the island without the use of wheels or large animals. 

Many researchers believe that the statues represented deceased ancestors and were placed strategically to watch over the villages. However, the environmental cost of this obsession was catastrophic. To move the heavy stones, the islanders likely cut down millions of palm trees to use as rollers and sleds. This massive deforestation led to soil erosion, crop failure, and eventually, the near collapse of the Rapa Nui civilization.

When European explorers first arrived in 1722, they found a barren landscape and a much-diminished population. The grand moai statues, once symbols of power and reverence, were found toppled over, suggesting internal conflict and rebellion among the starving survivors.`,
            translationTh: `เกาะอีสเตอร์ เกาะภูเขาไฟอันห่างไกลในโปลินีเซีย มีชื่อเสียงในเรื่องรูปปั้นหินขนาดมหึมาเกือบ 1,000 ตัว ซึ่งรู้จักกันในชื่อ โมอาย (moai) สร้างขึ้นโดยชาวราปานุยในยุคแรก หุ่นหินขนาดใหญ่เหล่านี้สร้างความฉงนให้กับนักโบราณคดีมาหลายศตวรรษ ด้วยความสูงเฉลี่ย 13 ฟุตและหนัก 14 ตัน พวกมันถูกแกะสลักจากเถ้าภูเขาไฟที่แข็งตัว และถูกขนส่งข้ามเกาะโดยไม่ได้ใช้ล้อหรือสัตว์ขนาดใหญ่
            
นักวิจัยหลายคนเชื่อว่ารูปปั้นเหล่านี้เป็นตัวแทนของบรรพบุรุษที่ล่วงลับไปแล้ว และถูกจัดวางอย่างมียุทธศาสตร์เพื่อคอยเฝ้าดูหมู่บ้าน อย่างไรก็ตาม ต้นทุนทางสิ่งแวดล้อมจากความหมกมุ่นนี้นั้นรุนแรงถึงขั้นหายนะ เพื่อเคลื่อนย้ายหินที่หนักหน่วง ชาวเกาะน่าจะตัดต้นปาล์มหลายล้านต้นเพื่อใช้เป็นลูกกลิ้งและเลื่อน การตัดไม้ทำลายป่าครั้งใหญ่นี้นำไปสู่การพังทลายของดิน ความล้มเหลวในการเพาะปลูก และในที่สุด การล่มสลายของอารยธรรมราปานุยที่เกือบจะสมบูรณ์

เมื่อนักสำรวจชาวยุโรปมาถึงครั้งแรกในปี ค.ศ. 1722 พวกเขาพบภูมิทัศน์ที่แห้งแล้งและประชากรที่ลดลงอย่างมาก รูปปั้นโมอายอันยิ่งใหญ่ ซึ่งครั้งหนึ่งเคยเป็นสัญลักษณ์ของอำนาจและความเคารพ ถูกพบในสภาพโค่นล้ม ซึ่งบ่งบอกถึงความขัดแย้งภายในและการกบฏในหมู่ผู้รอดชีวิตที่หิวโหย`
        },
        {
            type: 'quiz',
            title: 'Quiz: ฝึกการตีความและการหาจุดอ้างอิง (6 ข้อ)',
            questions: [
                {
                    question: 'Reference: In the first paragraph, what does the word "they" refer to? ("...they were carved from solidified volcanic ash...")',
                    questionTh: 'คำว่า "they" ในย่อหน้าแรกอ้างอิงถึงอะไร?',
                    choices: [
                        'The Rapa Nui people',
                        'The archaeologists',
                        'The massive stone figures (moai)',
                        'The wheels'
                    ],
                    answer: 2,
                    explanationTh: 'ย้อนกลับไปดูประโยคหน้า: "these massive stone figures have puzzled archaeologists... they were carved..." สรรพนาม they อ้างถึงรูปปั้นหินขนาดใหญ่ที่ถูกนำมาแกะสลัก',
                    explanationEn: 'The pronoun "they" replaces "these massive stone figures" from the previous sentence.'
                },
                {
                    question: 'Inference: What can be inferred about the technology of the Rapa Nui people?',
                    questionTh: 'สามารถตีความเกี่ยวกับเทคโนโลยีของชาวราปานุยได้อย่างไร?',
                    choices: [
                        'They possessed highly advanced modern machinery.',
                        'They relied entirely on large animals for transport.',
                        'They moved heavy objects using human labor and natural resources.',
                        'They used wheels imported from Europe.'
                    ],
                    answer: 2,
                    explanationTh: 'บทความบอกว่าเคลื่อนย้ายรูปปั้น "without the use of wheels or large animals" (โดยไม่ใช้ล้อหรือสัตว์) แต่ตัดต้นปาล์มมาทำลูกกลิ้ง (ใช้ทรัพยากรธรรมชาติและแรงคน)',
                    explanationEn: 'Since they didn\'t have wheels or large animals, they used human labor and tree logs (natural resources) to move the statues.'
                },
                {
                    question: 'Reference: In the second paragraph, what does the word "This" refer to? ("This massive deforestation led to...")',
                    questionTh: 'คำว่า "This" ในย่อหน้าที่สองอ้างอิงถึงเหตุการณ์ใด?',
                    choices: [
                        'The building of villages.',
                        'The cutting down of millions of palm trees.',
                        'The collapse of the civilization.',
                        'The death of ancestors.'
                    ],
                    answer: 1,
                    explanationTh: 'Deforestation แปลว่าการตัดไม้ทำลายป่า ซึ่งเชื่อมโยงกับประโยคก่อนหน้าที่บอกว่า "cut down millions of palm trees" (ตัดต้นปาล์มหลายล้านต้น)',
                    explanationEn: '"This massive deforestation" refers directly to the previous sentence about cutting down millions of palm trees.'
                },
                {
                    question: 'Inference: Why did the Rapa Nui civilization collapse?',
                    questionTh: 'ตีความได้ว่าทำไมอารยธรรมราปานุยถึงล่มสลาย?',
                    choices: [
                        'European explorers killed them all in 1722.',
                        'A volcanic eruption destroyed the island.',
                        'Environmental destruction caused a lack of food and resources.',
                        'The statues fell and crushed the villages.'
                    ],
                    answer: 2,
                    explanationTh: 'บทความบอกว่าตัดต้นไม้ทำลูกกลิ้ง ➔ ดินพังทลาย ➔ ปลูกพืชไม่ได้ (crop failure) ➔ อารยธรรมล่มสลายและคนหิวโหย (starving) ซึ่งสรุปได้ว่าเกิดจากปัญหาทรัพยากร/สิ่งแวดล้อมถูกทำลาย',
                    explanationEn: 'The text links deforestation to soil erosion and crop failure, meaning environmental destruction led to starvation and collapse.'
                },
                {
                    question: 'Inference: What does the fact that the statues were found "toppled over" suggest?',
                    questionTh: 'ความจริงที่ว่ารูปปั้นถูกพบในสภาพ "โค่นล้ม" บ่งบอกถึงอะไร?',
                    choices: [
                        'A strong earthquake hit the island.',
                        'The statues were not built properly.',
                        'The islanders lost respect for the statues and fought each other.',
                        'European explorers pushed them down.'
                    ],
                    answer: 2,
                    explanationTh: 'ประโยคสุดท้ายบอกว่า "toppled over, suggesting internal conflict and rebellion among the starving survivors" (โค่นล้ม บ่งบอกถึงความขัดแย้งและการกบฏภายใน)',
                    explanationEn: 'The text implies the starving survivors rebelled and pushed the statues over during internal conflicts.'
                },
                {
                    question: 'Vocabulary in Context: What is the closest meaning to the word "barren" in the last paragraph?',
                    questionTh: 'คำว่า "barren" ในย่อหน้าสุดท้ายมีความหมายใกล้เคียงกับคำใดมากที่สุด?',
                    choices: [
                        'Lush and green',
                        'Lifeless and empty',
                        'Highly populated',
                        'Extremely cold'
                    ],
                    answer: 1,
                    explanationTh: 'ชาวยุโรปพบว่าเกาะมัน barren (แห้งแล้ง, ไร้ชีวิตชีวา) เพราะต้นไม้ถูกตัดไปหมดแล้ว',
                    explanationEn: 'Since all the trees were cut down and the soil eroded, the landscape became "lifeless and empty" (barren).'
                }
            ]
        }
    ]
});
