LESSONS.push({
    id: 34,
    part: 2,
    titleTh: 'Reading Comprehension: Long Passage (Science & Tech)',
    titleEn: 'Long Reading: Science and Technology',
    icon: '🧬',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: การอ่านบทความยาวระดับ CU-TEP',
            contentTh: 'บทนี้จะเป็นการอ่านบทความขนาดยาว (Long Passage) ซึ่งเหมือนกับในข้อสอบจริง หัวข้อ Science and Technology มักจะมีศัพท์เทคนิค (Jargon) แทรกอยู่ เทคนิคคือ "ไม่ต้องแปลศัพท์เทคนิคออกทุกคำ" ให้เดาจากบริบทรอบข้าง (Context Clues)',
            contentEn: 'Long reading passages on the CU-TEP often include technical terms. Do not panic if you do not know them; use context clues to infer their meanings. Focus on the main idea of each paragraph.',
            bullets: [
                'อ่านย่อหน้าแรก (Introduction) และย่อหน้าสุดท้าย (Conclusion) อย่างละเอียด',
                'ประโยคแรกของแต่ละย่อหน้า (Topic Sentence) มักจะบอกใจความสำคัญของย่อหน้านั้น',
                'ข้ามศัพท์เทคนิคที่ไม่จำเป็นต่อการตอบคำถามไปได้เลย'
            ]
        },
        {
            type: 'passage',
            title: 'Passage: The Rise of Artificial Intelligence in Medicine',
            contentEn: `Artificial Intelligence (AI) is rapidly transforming the healthcare landscape, moving from a concept of science fiction to a tangible tool used in clinical settings. One of the most significant applications of AI in medicine is in the field of diagnostic imaging. Machine learning algorithms, trained on vast datasets of X-rays, MRIs, and CT scans, can now detect anomalies such as tumors or fractures with an accuracy that frequently matches, and sometimes surpasses, that of human radiologists. This capability not only speeds up the diagnostic process but also reduces the likelihood of human error caused by fatigue.

However, the integration of AI into healthcare is not without challenges. A primary concern is data privacy. AI systems require access to massive amounts of personal health information to function effectively, raising questions about how this data is stored, shared, and protected against cyberattacks. Furthermore, there is the "black box" problem: many deep learning models make decisions through complex, non-linear processes that are difficult for human doctors to interpret. If an AI system recommends a controversial treatment plan, a physician may be hesitant to follow it without understanding the underlying reasoning.

Despite these hurdles, the consensus among medical professionals is that AI will not replace doctors; rather, it will augment their capabilities. By automating routine and time-consuming tasks, AI allows physicians to dedicate more time to direct patient care and complex decision-making. The future of medicine likely lies in a collaborative approach, where human empathy and clinical judgment work hand-in-hand with the computational power of artificial intelligence.`,
            contentTh: `ปัญญาประดิษฐ์ (AI) กำลังเปลี่ยนแปลงภูมิทัศน์ด้านการดูแลสุขภาพอย่างรวดเร็ว... (คำแปลแบบซ่อนได้)`,
            vocabulary: [
                { w: 'Transform', p: 'ทรานส-ฟอร์ม', m: 'เปลี่ยนแปลงรูปร่าง/รูปแบบ' },
                { w: 'Tangible', p: 'แทน-จิ-เบิล', m: 'จับต้องได้, ชัดเจน' },
                { w: 'Diagnostic', p: 'ได-แอก-นอส-ติก', m: 'เกี่ยวกับการวินิจฉัยโรค' },
                { w: 'Anomaly', p: 'อะ-นอม-มะ-ลี่', m: 'ความผิดปกติ' },
                { w: 'Surpass', p: 'เซอร์-พาส', m: 'เหนือกว่า, เกินกว่า' },
                { w: 'Integration', p: 'อิน-ทิ-เกร-ชั่น', m: 'การบูรณาการ, การรวมเข้าด้วยกัน' },
                { w: 'Controversial', p: 'คอน-โทร-เวอร์-เชียล', m: 'ซึ่งก่อให้เกิดความขัดแย้ง/ข้อถกเถียง' },
                { w: 'Consensus', p: 'คอน-เซน-ซัส', m: 'ความเห็นพ้องต้องกัน' },
                { w: 'Augment', p: 'ออก-เมนท์', m: 'เพิ่มพูน, ทำให้เพิ่มขึ้น' }
            ]
        },
        {
            type: 'quiz',
            title: 'Quiz: Reading Comprehension (5 Questions)',
            questions: [
                {
                    question: 'What is the main idea of the passage?',
                    questionTh: 'ใจความสำคัญของบทความนี้คืออะไร?',
                    choices: [
                        'AI is dangerous because it compromises patient privacy.',
                        'AI will soon completely replace human doctors in hospitals.',
                        'AI is improving medical diagnostics but faces challenges like data privacy and interpretability.',
                        'Machine learning algorithms are primarily used to store medical records securely.'
                    ],
                    answer: 2,
                    explanationTh: 'บทความพูดถึงทั้งข้อดี (การวินิจฉัยโรค) และความท้าทาย (ความเป็นส่วนตัว, ปัญหา Black box) ของ AI ในวงการแพทย์ ช้อยส์ 2 ครอบคลุมที่สุด',
                    explanationEn: 'The passage discusses both the benefits (diagnostic imaging) and the challenges (privacy, the "black box" problem) of AI in medicine.'
                },
                {
                    question: 'According to paragraph 1, how does AI benefit diagnostic imaging?',
                    questionTh: 'ตามย่อหน้าที่ 1 AI มีประโยชน์ต่อภาพถ่ายทางการแพทย์อย่างไร?',
                    choices: [
                        'It allows patients to take their own X-rays at home.',
                        'It can detect anomalies with high accuracy and reduce human error.',
                        'It helps radiologists work fewer hours per week.',
                        'It completely eliminates the need for MRI and CT scans.'
                    ],
                    answer: 1,
                    explanationTh: 'ย่อหน้า 1 ระบุว่า AI สามารถตรวจจับความผิดปกติ (anomalies) ด้วยความแม่นยำสูง และลดความผิดพลาดของมนุษย์ (reduces human error)',
                    explanationEn: 'The text states that AI can "detect anomalies... with an accuracy that frequently matches... human radiologists" and "reduces the likelihood of human error".'
                },
                {
                    question: 'The phrase "black box problem" in paragraph 2 refers to:',
                    questionTh: 'วลี "black box problem" ในย่อหน้าที่ 2 หมายถึงอะไร?',
                    choices: [
                        'The physical computer hardware used in hospitals.',
                        'The inability of doctors to understand how the AI arrives at a decision.',
                        'A cyberattack that destroys medical data.',
                        'The high cost of maintaining AI software.'
                    ],
                    answer: 1,
                    explanationTh: 'ย่อหน้า 2 อธิบายว่า deep learning models ตัดสินใจผ่านกระบวนการที่ยากที่หมอจะตีความได้ (difficult for human doctors to interpret)',
                    explanationEn: 'The passage defines it as models making decisions through processes "that are difficult for human doctors to interpret".'
                },
                {
                    question: 'The word "augment" in paragraph 3 is closest in meaning to:',
                    questionTh: 'คำว่า "augment" ในย่อหน้าที่ 3 มีความหมายใกล้เคียงกับคำใดมากที่สุด?',
                    choices: [
                        'Replace',
                        'Decrease',
                        'Enhance',
                        'Complicate'
                    ],
                    answer: 2,
                    explanationTh: 'บทความบอกว่า AI จะไม่ replace (แทนที่) หมอ แต่จะ augment (เพิ่มพูน/เสริม) ความสามารถ ดังนั้นความหมายใกล้เคียงคือ Enhance',
                    explanationEn: '"Augment" means to make greater or improve. "Enhance" is the closest synonym in this context.'
                },
                {
                    question: 'What is the author\'s attitude toward the future of AI in medicine?',
                    questionTh: 'ผู้เขียนมีทัศนคติต่ออนาคตของ AI ในวงการแพทย์อย่างไร?',
                    choices: [
                        'Pessimistic',
                        'Indifferent',
                        'Cautiously optimistic',
                        'Highly critical'
                    ],
                    answer: 2,
                    explanationTh: 'ผู้เขียนมองเห็นข้อดีและเชื่อว่ามันจะมาช่วยหมอ (optimistic) แต่ก็ยังระบุถึงปัญหาและข้อควรระวัง (cautious) จึงเป็นการมองโลกในแง่ดีอย่างระมัดระวัง',
                    explanationEn: 'The author recognizes the immense benefits but also highlights significant hurdles, leading to a cautiously optimistic view (a collaborative future).'
                }
            ]
        }
    ]
});
