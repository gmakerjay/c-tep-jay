LESSONS.push({
    id: 12,
    part: 1,
    titleTh: 'การฟังเลกเชอร์วิชาการ (Academic Lectures)',
    titleEn: 'Short Talks: Academic Lectures',
    icon: '🎓',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: ทำความเข้าใจเลกเชอร์วิชาการ',
            contentTh: 'เลกเชอร์คือรูปแบบที่ "ยากที่สุด" ในพาร์ทการฟัง เพราะมีคำศัพท์เฉพาะทาง (Technical terms) และเนื้อหาเชิงวิชาการ เช่น ประวัติศาสตร์ ชีววิทยา หรือธุรกิจ',
            contentEn: 'Academic lectures are often considered the hardest part of the listening test. They are filled with technical jargon and complex concepts. However, the questions usually focus on the main ideas, not the overly technical words.',
            bullets: [
                'ไม่ต้องตกใจถ้าแปลคำศัพท์เฉพาะไม่ออก! ข้อสอบมักจะถามเรื่องโครงสร้าง หรือสาเหตุและผลลัพธ์ (Cause and Effect)',
                'ตั้งใจฟังคำใบ้การแบ่งหัวข้อ เช่น "First of all", "Another reason is", "Finally" เพื่อจดโน้ตได้เป็นระเบียบ',
                'บทสรุปของเลกเชอร์ (Conclusion) มักจะเป็นคำตอบของข้อสุดท้ายเสมอ'
            ]
        },
        {
            type: 'vocabulary',
            title: 'คำศัพท์ที่พบบ่อยในเลกเชอร์ (Academic Vocabulary)',
            words: [
                { word: 'Phenomenon', pron: '/fɪˈnɒmɪnən/', mean: 'ปรากฏการณ์', ex: 'Global warming is a complex phenomenon.' },
                { word: 'Hypothesis', pron: '/haɪˈpɒθɪsɪs/', mean: 'สมมติฐาน', ex: 'The scientist proposed a new hypothesis.' },
                { word: 'Evolution', pron: '/ˌiːvəˈluːʃən/', mean: 'วิวัฒนาการ', ex: 'We will study the evolution of mammals.' },
                { word: 'Determine', pron: '/dɪˈtɜːrmɪn/', mean: 'กำหนด, ตัดสิน', ex: 'Many factors determine the outcome of the experiment.' },
                { word: 'Significant', pron: '/sɪgˈnɪfɪkənt/', mean: 'สำคัญ, มีความหมาย', ex: 'There was a significant change in the data.' }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟัง: เลกเชอร์วิชาการ (10 ข้อ)',
            questions: [
                {
                    audio: '[Lecture 1] Good morning, class. Today we are going to shift our focus from terrestrial ecosystems to marine biology, specifically coral reefs. Coral reefs are often called the rainforests of the sea because of their incredible biodiversity. Despite covering less than one percent of the ocean floor, they support roughly twenty-five percent of all marine species. Question 1: What is the main topic of today\'s lecture?',
                    transcript: '[Lecture 1 for Q1-Q3]\nGood morning, class. Today we are going to shift our focus from terrestrial ecosystems to marine biology, specifically coral reefs. Coral reefs are often called the rainforests of the sea because of their incredible biodiversity. Despite covering less than one percent of the ocean floor, they support roughly twenty-five percent of all marine species.\n\nQuestion 1: What is the main topic of today\'s lecture?',
                    question: 'What is the main topic of today\'s lecture?',
                    questionTh: 'หัวข้อหลักของเลกเชอร์วันนี้คืออะไร?',
                    choices: [
                        'Terrestrial ecosystems.',
                        'The history of rainforests.',
                        'Coral reefs and their biodiversity.',
                        'How to scuba dive safely.'
                    ],
                    answer: 2,
                    explanationTh: 'อาจารย์เกริ่นนำว่า "shift our focus... to marine biology, specifically coral reefs" (เปลี่ยนจุดโฟกัสมาที่ชีววิทยาทางทะเล โดยเฉพาะปะการัง)',
                    explanationEn: 'The professor explicitly states the topic is marine biology, specifically coral reefs.'
                },
                {
                    audio: '[Lecture 1] Good morning, class. Today we are going to shift our focus from terrestrial ecosystems to marine biology, specifically coral reefs. Coral reefs are often called the rainforests of the sea because of their incredible biodiversity. Despite covering less than one percent of the ocean floor, they support roughly twenty-five percent of all marine species. Question 2: Why are coral reefs compared to rainforests?',
                    transcript: '[Same Audio: Lecture 1]\n\nQuestion 2: Why are coral reefs compared to rainforests?',
                    question: 'Why are coral reefs compared to rainforests?',
                    questionTh: 'ทำไมปะการังถึงถูกเปรียบเทียบกับป่าฝน?',
                    choices: [
                        'Because they have many tall plants.',
                        'Because they receive a lot of rain.',
                        'Because of their incredible biodiversity.',
                        'Because they cover a huge area of the Earth.'
                    ],
                    answer: 2,
                    explanationTh: 'อาจารย์บอกว่า "because of their incredible biodiversity" (เพราะความหลากหลายทางชีวภาพที่น่าทึ่งของพวกมัน)',
                    explanationEn: 'They are called the rainforests of the sea due to their high level of biodiversity.'
                },
                {
                    audio: '[Lecture 1] Good morning, class. Today we are going to shift our focus from terrestrial ecosystems to marine biology, specifically coral reefs. Coral reefs are often called the rainforests of the sea because of their incredible biodiversity. Despite covering less than one percent of the ocean floor, they support roughly twenty-five percent of all marine species. Question 3: How much of the ocean floor do coral reefs cover?',
                    transcript: '[Same Audio: Lecture 1]\n\nQuestion 3: How much of the ocean floor do coral reefs cover?',
                    question: 'How much of the ocean floor do coral reefs cover?',
                    questionTh: 'แนวปะการังครอบคลุมพื้นที่ก้นสมุทรเท่าไหร่?',
                    choices: [
                        'Less than one percent.',
                        'About twenty-five percent.',
                        'Exactly fifty percent.',
                        'More than eighty percent.'
                    ],
                    answer: 0,
                    explanationTh: 'ในเสียงพูดระบุชัดเจนว่า "Despite covering less than one percent of the ocean floor" (แม้จะครอบคลุมพื้นที่น้อยกว่า 1 เปอร์เซ็นต์)',
                    explanationEn: 'The lecture states they cover less than one percent of the ocean floor.'
                },
                {
                    audio: '[Lecture 2] Let\'s turn our attention to the Industrial Revolution in the 18th century. This period marked a massive transition from hand production methods to machines, primarily in Great Britain. One of the most critical inventions of this era was the steam engine, improved by James Watt. It allowed factories to be located anywhere, not just near rivers, which drastically changed the landscape of cities. Question 4: What is the main subject of this lecture?',
                    transcript: '[Lecture 2 for Q4-Q7]\nLet\'s turn our attention to the Industrial Revolution in the 18th century. This period marked a massive transition from hand production methods to machines, primarily in Great Britain. One of the most critical inventions of this era was the steam engine, improved by James Watt. It allowed factories to be located anywhere, not just near rivers, which drastically changed the landscape of cities.\n\nQuestion 4: What is the main subject of this lecture?',
                    question: 'What is the main subject of this lecture?',
                    questionTh: 'หัวข้อหลักของเลกเชอร์นี้คืออะไร?',
                    choices: [
                        'The history of Great Britain.',
                        'The life of James Watt.',
                        'The Industrial Revolution and the steam engine.',
                        'How to build a machine by hand.'
                    ],
                    answer: 2,
                    explanationTh: 'อาจารย์เกริ่นถึงการปฏิวัติอุตสาหกรรม (Industrial Revolution) และยกตัวอย่างเครื่องจักรไอน้ำ (steam engine) เป็นประเด็นหลัก',
                    explanationEn: 'The lecture introduces the Industrial Revolution and focuses heavily on the impact of the steam engine.'
                },
                {
                    audio: '[Lecture 2] Let\'s turn our attention to the Industrial Revolution in the 18th century. This period marked a massive transition from hand production methods to machines, primarily in Great Britain. One of the most critical inventions of this era was the steam engine, improved by James Watt. It allowed factories to be located anywhere, not just near rivers, which drastically changed the landscape of cities. Question 5: Where did the transition to machines primarily begin?',
                    transcript: '[Same Audio: Lecture 2]\n\nQuestion 5: Where did the transition to machines primarily begin?',
                    question: 'Where did the transition to machines primarily begin?',
                    questionTh: 'การเปลี่ยนผ่านสู่การใช้เครื่องจักรเริ่มต้นที่ไหนเป็นหลัก?',
                    choices: [
                        'In the United States.',
                        'In France.',
                        'In Great Britain.',
                        'In China.'
                    ],
                    answer: 2,
                    explanationTh: 'ข้อความบอกว่า "primarily in Great Britain" (โดยหลักแล้วในสหราชอาณาจักร)',
                    explanationEn: 'The transition from hand production to machines occurred primarily in Great Britain.'
                },
                {
                    audio: '[Lecture 2] Let\'s turn our attention to the Industrial Revolution in the 18th century. This period marked a massive transition from hand production methods to machines, primarily in Great Britain. One of the most critical inventions of this era was the steam engine, improved by James Watt. It allowed factories to be located anywhere, not just near rivers, which drastically changed the landscape of cities. Question 6: Who improved the steam engine?',
                    transcript: '[Same Audio: Lecture 2]\n\nQuestion 6: Who improved the steam engine?',
                    question: 'Who improved the steam engine?',
                    questionTh: 'ใครเป็นผู้พัฒนา/ปรับปรุงเครื่องจักรไอน้ำ?',
                    choices: [
                        'Thomas Edison.',
                        'James Watt.',
                        'Albert Einstein.',
                        'Henry Ford.'
                    ],
                    answer: 1,
                    explanationTh: 'อาจารย์กล่าวว่า "the steam engine, improved by James Watt" (เครื่องจักรไอน้ำ ซึ่งปรับปรุงโดยเจมส์ วัตต์)',
                    explanationEn: 'The steam engine was improved by James Watt.'
                },
                {
                    audio: '[Lecture 2] Let\'s turn our attention to the Industrial Revolution in the 18th century. This period marked a massive transition from hand production methods to machines, primarily in Great Britain. One of the most critical inventions of this era was the steam engine, improved by James Watt. It allowed factories to be located anywhere, not just near rivers, which drastically changed the landscape of cities. Question 7: How did the steam engine change the location of factories?',
                    transcript: '[Same Audio: Lecture 2]\n\nQuestion 7: How did the steam engine change the location of factories?',
                    question: 'How did the steam engine change the location of factories?',
                    questionTh: 'เครื่องจักรไอน้ำเปลี่ยนแปลงตำแหน่งที่ตั้งของโรงงานอย่างไร?',
                    choices: [
                        'They had to be built next to rivers.',
                        'They could be located anywhere.',
                        'They had to be built underground.',
                        'They were moved to other countries.'
                    ],
                    answer: 1,
                    explanationTh: 'เสียงบอกชัดเจนว่า "It allowed factories to be located anywhere, not just near rivers" (มันทำให้โรงงานไปตั้งที่ไหนก็ได้ ไม่ใช่แค่ใกล้แม่น้ำ)',
                    explanationEn: 'The steam engine freed factories from needing to be built near water sources.'
                },
                {
                    audio: '[Lecture 3] In marketing, the concept of brand loyalty is crucial. Brand loyalty occurs when consumers repeatedly purchase a specific product over others, despite convenience or price differences. For example, some people will drive an extra ten miles just to buy their favorite brand of coffee. Companies spend millions of dollars building this loyalty because retaining an existing customer is much cheaper than acquiring a new one. Question 8: What is the main topic of the talk?',
                    transcript: '[Lecture 3 for Q8-Q10]\nIn marketing, the concept of brand loyalty is crucial. Brand loyalty occurs when consumers repeatedly purchase a specific product over others, despite convenience or price differences. For example, some people will drive an extra ten miles just to buy their favorite brand of coffee. Companies spend millions of dollars building this loyalty because retaining an existing customer is much cheaper than acquiring a new one.\n\nQuestion 8: What is the main topic of the talk?',
                    question: 'What is the main topic of the talk?',
                    questionTh: 'หัวข้อหลักของการบรรยายนี้คืออะไร?',
                    choices: [
                        'How to make good coffee.',
                        'The high cost of marketing.',
                        'The concept of brand loyalty.',
                        'Why people drive long distances.'
                    ],
                    answer: 2,
                    explanationTh: 'อาจารย์เปิดหัวข้อด้วยคำว่า "concept of brand loyalty is crucial" (แนวคิดความภักดีต่อแบรนด์นั้นสำคัญมาก)',
                    explanationEn: 'The entire lecture defines and explains the concept of brand loyalty.'
                },
                {
                    audio: '[Lecture 3] In marketing, the concept of brand loyalty is crucial. Brand loyalty occurs when consumers repeatedly purchase a specific product over others, despite convenience or price differences. For example, some people will drive an extra ten miles just to buy their favorite brand of coffee. Companies spend millions of dollars building this loyalty because retaining an existing customer is much cheaper than acquiring a new one. Question 9: How does the speaker illustrate brand loyalty?',
                    transcript: '[Same Audio: Lecture 3]\n\nQuestion 9: How does the speaker illustrate brand loyalty?',
                    question: 'How does the speaker illustrate brand loyalty?',
                    questionTh: 'ผู้พูดอธิบาย/ยกตัวอย่างความภักดีต่อแบรนด์ให้เห็นภาพอย่างไร?',
                    choices: [
                        'By explaining how shoes are made.',
                        'By talking about people driving far for a specific coffee.',
                        'By showing a television advertisement.',
                        'By analyzing the stock market.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้พูดใช้ตัวอย่าง (For example) ว่าบางคนยอมขับรถไกลพิเศษ 10 ไมล์เพื่อซื้อกาแฟแบรนด์โปรด (driving far for a specific coffee)',
                    explanationEn: 'The speaker uses the example of a consumer driving an extra ten miles for their favorite coffee.'
                },
                {
                    audio: '[Lecture 3] In marketing, the concept of brand loyalty is crucial. Brand loyalty occurs when consumers repeatedly purchase a specific product over others, despite convenience or price differences. For example, some people will drive an extra ten miles just to buy their favorite brand of coffee. Companies spend millions of dollars building this loyalty because retaining an existing customer is much cheaper than acquiring a new one. Question 10: Why do companies spend millions building brand loyalty?',
                    transcript: '[Same Audio: Lecture 3]\n\nQuestion 10: Why do companies spend millions building brand loyalty?',
                    question: 'Why do companies spend millions building brand loyalty?',
                    questionTh: 'ทำไมบริษัทถึงยอมจ่ายเงินมหาศาลเพื่อสร้างความภักดีต่อแบรนด์?',
                    choices: [
                        'Because they have too much money.',
                        'Because the government requires it.',
                        'Because it makes their coffee taste better.',
                        'Because keeping old customers is cheaper than finding new ones.'
                    ],
                    answer: 3,
                    explanationTh: 'ในประโยคสุดท้ายระบุว่า "because retaining an existing customer is much cheaper than acquiring a new one" (เพราะการรักษาลูกค้าเก่ามันถูกกว่าการหาลูกค้าใหม่มาก)',
                    explanationEn: 'Retaining existing customers is significantly cheaper than acquiring new ones, justifying the high investment.'
                }
            ]
        }
    ]
});
