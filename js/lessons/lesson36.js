LESSONS.push({
    id: 36,
    part: 2,
    titleTh: 'Reading: Long Passage (Environment)',
    titleEn: 'Long Reading: Environment & Climate',
    icon: '🌍',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: หัวข้อสิ่งแวดล้อมและภูมิอากาศ',
            contentTh: 'หัวข้อเรื่องสิ่งแวดล้อม (Environment) เป็นหัวข้อยอดนิยมในข้อสอบ CU-TEP มักจะมีคำศัพท์เฉพาะทาง เช่น emissions, deforestation, sustainable development ฝึกใช้ Context Clues ในการเดาความหมายให้ได้',
            contentEn: 'Environmental topics frequently appear in the CU-TEP. You will encounter specialized vocabulary related to climate change, pollution, and sustainability. Use context clues to infer meanings of unfamiliar terms.',
            bullets: [
                'ศัพท์สำคัญ: Carbon footprint (ปริมาณก๊าซเรือนกระจกที่ปล่อย), Greenhouse effect (ปรากฏการณ์เรือนกระจก)',
                'สังเกต Cause-Effect: ปัญหา → ผลกระทบ → วิธีแก้ (Problem-Effect-Solution)',
                'อ่าน Topic Sentence ของแต่ละย่อหน้าเพื่อสรุปใจความหลัก'
            ]
        },
        {
            type: 'passage',
            title: 'Passage: Plastic Pollution in the World\'s Oceans',
            contentEn: `Every year, approximately eight million metric tons of plastic waste enter the world's oceans. This staggering figure is equivalent to dumping a garbage truck full of plastic into the sea every single minute. The consequences of this pollution are devastating for marine ecosystems, as plastic debris harms over 700 species, including sea turtles, whales, and seabirds, through ingestion and entanglement.

One of the most insidious aspects of plastic pollution is the formation of microplastics—tiny fragments smaller than five millimeters that result from the breakdown of larger plastic items by sunlight and wave action. These microscopic particles have been found in virtually every corner of the ocean, from the deepest ocean trenches to Arctic sea ice. Alarmingly, microplastics have also been detected in seafood, drinking water, and even the air we breathe, raising serious concerns about their potential impact on human health.

Efforts to combat ocean plastic pollution are gaining momentum worldwide. Many countries have implemented bans on single-use plastic items such as straws, bags, and cutlery. Innovative cleanup technologies, like the Ocean Cleanup project's floating barriers, are being deployed to intercept plastic waste before it reaches the open sea. However, experts emphasize that cleanup alone is insufficient; the focus must shift toward reducing plastic production and consumption at the source. A circular economy model, in which plastic products are designed to be reused, recycled, or composted, is increasingly seen as the most viable long-term solution.`,
            contentTh: 'ทุกปีมีขยะพลาสติกประมาณ 8 ล้านเมตริกตันไหลลงสู่มหาสมุทรของโลก... (ซ่อนคำแปล)',
            vocabulary: [
                { w: 'Staggering', p: 'สแตก-เกอ-ริ่ง', m: 'น่าตกใจ, มหาศาล' },
                { w: 'Devastating', p: 'เดฟ-วาส-เท-ติ้ง', m: 'ทำลายล้าง' },
                { w: 'Ingestion', p: 'อิน-เจส-ชั่น', m: 'การกิน/กลืนเข้าไป' },
                { w: 'Entanglement', p: 'เอน-แทง-เกิล-เมนท์', m: 'การพันเกี่ยว' },
                { w: 'Insidious', p: 'อิน-ซิด-ดิ-เอิส', m: 'ร้ายกาจอย่างแนบเนียน' },
                { w: 'Microplastics', p: 'ไมโคร-พลาส-ติกส์', m: 'ชิ้นส่วนพลาสติกขนาดจิ๋ว' },
                { w: 'Momentum', p: 'โม-เมน-ตัม', m: 'แรงส่ง, พลังขับเคลื่อน' },
                { w: 'Circular economy', p: 'เซอร์-คิว-ลาร์-อี-คอน-โน-มี่', m: 'เศรษฐกิจหมุนเวียน' },
                { w: 'Viable', p: 'ไว-เอ-เบิล', m: 'ที่ทำได้จริง, เป็นไปได้' }
            ]
        },
        {
            type: 'quiz',
            title: 'Quiz: Reading Comprehension (5 Questions)',
            questions: [
                {
                    question: 'What is the main purpose of the passage?',
                    questionTh: 'จุดประสงค์หลักของบทความคืออะไร?',
                    choices: ['To describe how plastic is manufactured.', 'To explain ocean plastic pollution, its effects, and solutions.', 'To advertise the Ocean Cleanup project.', 'To argue that microplastics are harmless.'],
                    answer: 1,
                    explanationTh: 'บทความอธิบายทั้งปัญหา (ขยะพลาสติก) ผลกระทบ (ต่อสัตว์ทะเลและสุขภาพมนุษย์) และแนวทางแก้ไข (ห้ามใช้พลาสติกครั้งเดียว, เศรษฐกิจหมุนเวียน)',
                    explanationEn: 'The passage covers the problem, effects, and proposed solutions for ocean plastic pollution.'
                },
                {
                    question: 'According to paragraph 1, how much plastic enters the ocean annually?',
                    questionTh: 'ตามย่อหน้าที่ 1 มีพลาสติกเข้าสู่มหาสมุทรปีละเท่าไร?',
                    choices: ['Five million metric tons.', 'Eight million metric tons.', 'Seven hundred tons.', 'One garbage truck per day.'],
                    answer: 1,
                    explanationTh: 'ย่อหน้า 1 ระบุว่า "approximately eight million metric tons"',
                    explanationEn: 'The passage states "approximately eight million metric tons" enter the oceans annually.'
                },
                {
                    question: 'The word "insidious" in paragraph 2 is closest in meaning to:',
                    questionTh: 'คำว่า "insidious" ในย่อหน้าที่ 2 มีความหมายใกล้เคียงกับ:',
                    choices: ['Obviously harmful.', 'Harmfully deceptive or gradual.', 'Completely harmless.', 'Instantly dangerous.'],
                    answer: 1,
                    explanationTh: 'Insidious หมายถึงร้ายกาจแบบค่อยเป็นค่อยไป แนบเนียนจนไม่รู้ตัว ไม่ใช่อันตรายที่เห็นได้ชัด',
                    explanationEn: '"Insidious" means harmful in a way that is gradual or not immediately apparent.'
                },
                {
                    question: 'Which of the following is NOT a solution mentioned in the passage?',
                    questionTh: 'ข้อใดไม่ได้ถูกกล่าวถึงเป็นวิธีแก้ปัญหาในบทความ?',
                    choices: ['Banning single-use plastics.', 'Using floating barriers to collect waste.', 'Increasing plastic production for recycling.', 'Adopting a circular economy model.'],
                    answer: 2,
                    explanationTh: 'บทความบอกว่าต้อง "reducing plastic production" (ลดการผลิต) ไม่ใช่เพิ่มการผลิต',
                    explanationEn: 'The passage calls for reducing production, not increasing it.'
                },
                {
                    question: 'What does the author imply about cleanup efforts?',
                    questionTh: 'ผู้เขียนสื่อความหมายว่าอย่างไรเกี่ยวกับความพยายามทำความสะอาด?',
                    choices: ['They are the best long-term solution.', 'They are necessary but not enough by themselves.', 'They are completely ineffective.', 'They cause more pollution.'],
                    answer: 1,
                    explanationTh: '"experts emphasize that cleanup alone is insufficient" → ทำความสะอาดอย่างเดียวไม่เพียงพอ ต้องลดตั้งแต่ต้นทาง',
                    explanationEn: 'The passage states "cleanup alone is insufficient", implying it helps but is not a standalone solution.'
                }
            ]
        }
    ]
});
