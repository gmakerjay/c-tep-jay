LESSONS.push({
    id: 23,
    part: 1,
    titleTh: 'เจาะลึกการฟัง: การจับน้ำเสียงและอารมณ์ (Tone & Emotion Inference)',
    titleEn: 'Advanced Listening: Tone and Emotion Inference',
    icon: '🎭',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: ฟังให้ออกว่าเขา "รู้สึก" อย่างไร',
            contentTh: 'บางครั้งคำตอบไม่ได้อยู่ที่ "คำพูด" แต่อยู่ที่ "น้ำเสียง" (Tone of voice) ผู้พูดอาจจะพูดคำว่า "Great" แต่ใช้น้ำเสียงประชดประชัน (Sarcastic) ซึ่งแปลว่าแย่มาก การฝึกจับอารมณ์จะช่วยให้คุณตอบคำถามประเภท Inference ได้ทะลุปรุโปร่ง',
            contentEn: 'Sometimes the answer lies not in what is said, but how it is said. A speaker might say "Great" with a sarcastic tone, meaning the exact opposite. Paying attention to emotion, hesitation, and intonation is key to making correct inferences.',
            bullets: [
                'Sarcasm (การประชด): คำพูดเป็นบวก แต่น้ำเสียงลากยาวหรือถอนหายใจ = ความหมายลบ',
                'Hesitation (การลังเล): การพูดอึกอัก "Well... um..." แสดงถึงความไม่แน่ใจ หรือการปฏิเสธแบบอ้อมๆ',
                'Surprise (ประหลาดใจ): เสียงสูงขึ้นที่ปลายประโยค แสดงว่าไม่ได้คาดคิดว่าเรื่องนั้นจะเกิดขึ้น'
            ]
        },
        {
            type: 'vocabulary',
            title: 'คำศัพท์บอกอารมณ์ในตัวเลือก (Emotion Vocabulary)',
            words: [
                { word: 'Sarcastic', pron: '/sɑːrˈkæstɪk/', mean: 'เหน็บแนม, ประชดประชัน', ex: 'He made a sarcastic comment about my late arrival.' },
                { word: 'Relieved', pron: '/rɪˈliːvd/', mean: 'โล่งใจ', ex: 'She felt relieved after passing the difficult exam.' },
                { word: 'Frustrated', pron: '/ˈfrʌstreɪtɪd/', mean: 'หงุดหงิด, คับข้องใจ', ex: 'I am frustrated with this slow internet connection.' },
                { word: 'Hesitant', pron: '/ˈhɛzɪtənt/', mean: 'ลังเล, อึกอัก', ex: 'He was hesitant to accept the job offer.' },
                { word: 'Astonished', pron: '/əˈstɒnɪʃt/', mean: 'ประหลาดใจมาก, ตื่นตะลึง', ex: 'We were astonished by the magic trick.' }
            ]
        },
        {
            type: 'quiz',
            title: 'เกมส์ฝึกฟัง: ถอดรหัสอารมณ์ (10 ข้อ)',
            questions: [
                {
                    audio: 'Man: Did you see the mess in the kitchen?\nWoman: Oh, great. Just what I needed after a twelve-hour shift.\nQuestion: What is the woman\'s tone?',
                    transcript: 'Man: Did you see the mess in the kitchen?\nWoman: Oh, great. Just what I needed after a twelve-hour shift.\nQuestion: What is the woman\'s tone?',
                    question: 'What is the woman\'s tone?',
                    questionTh: 'น้ำเสียงของผู้หญิงเป็นอย่างไร?',
                    choices: [
                        'Excited.',
                        'Sarcastic and annoyed.',
                        'Grateful.',
                        'Confused.'
                    ],
                    answer: 1,
                    explanationTh: 'ผู้หญิงพูดว่า "Oh, great." (เยี่ยมเลย) หลังจากทำงานมา 12 ชั่วโมง เป็นการประชดประชัน (Sarcastic) และหงุดหงิด (Annoyed)',
                    explanationEn: 'Saying "Oh, great" about a mess after a long day is clearly sarcastic and indicates annoyance.'
                },
                {
                    audio: 'Woman: Have you made a decision about moving to London?\nMan: Well... um... I mean, it\'s a big step. I guess I need more time to think about it.\nQuestion: How does the man feel about moving?',
                    transcript: 'Woman: Have you made a decision about moving to London?\nMan: Well... um... I mean, it\'s a big step. I guess I need more time to think about it.\nQuestion: How does the man feel about moving?',
                    question: 'How does the man feel about moving?',
                    questionTh: 'ผู้ชายรู้สึกอย่างไรเกี่ยวกับการย้ายไปลอนดอน?',
                    choices: [
                        'He is totally confident.',
                        'He is extremely angry.',
                        'He is hesitant and unsure.',
                        'He is relieved.'
                    ],
                    answer: 2,
                    explanationTh: 'การพูดอึกอัก "Well... um..." และขอดูเวลาคิดเพิ่ม บ่งบอกถึงความลังเลและไม่แน่ใจ (hesitant and unsure)',
                    explanationEn: 'His stuttering ("Well... um...") and need for more time show that he is hesitant and unsure.'
                },
                {
                    audio: 'Man: The doctor said your test results came back completely normal. There is nothing to worry about.\nWoman: (Sighs heavily) Thank goodness! I couldn\'t sleep all week worrying about it.\nQuestion: How does the woman feel?',
                    transcript: 'Man: The doctor said your test results came back completely normal. There is nothing to worry about.\nWoman: (Sighs heavily) Thank goodness! I couldn\'t sleep all week worrying about it.\nQuestion: How does the woman feel?',
                    question: 'How does the woman feel?',
                    questionTh: 'ผู้หญิงรู้สึกอย่างไร?',
                    choices: [
                        'Relieved.',
                        'Devastated.',
                        'Furious.',
                        'Indifferent.'
                    ],
                    answer: 0,
                    explanationTh: 'การถอนหายใจพร้อมพูดว่า "Thank goodness!" (ขอบคุณพระเจ้า!) หลังจากกังวลมาทั้งสัปดาห์ แสดงถึงความโล่งใจ (Relieved)',
                    explanationEn: 'Sighing and saying "Thank goodness" after being worried indicates a strong feeling of relief.'
                },
                {
                    audio: 'Woman: I spent three hours fixing this printer, and now it\'s jammed again!\nMan: Maybe we should just buy a new one.\nQuestion: What emotion is the woman expressing?',
                    transcript: 'Woman: I spent three hours fixing this printer, and now it\'s jammed again!\nMan: Maybe we should just buy a new one.\nQuestion: What emotion is the woman expressing?',
                    question: 'What emotion is the woman expressing?',
                    questionTh: 'ผู้หญิงกำลังแสดงอารมณ์ใด?',
                    choices: [
                        'Joy.',
                        'Frustration.',
                        'Pride.',
                        'Sympathy.'
                    ],
                    answer: 1,
                    explanationTh: 'การบ่นว่าซ่อมมา 3 ชั่วโมงแล้วยังพังอีก แสดงถึงความหงุดหงิด/คับข้องใจ (Frustration)',
                    explanationEn: 'Complaining about wasting three hours on a broken printer expresses deep frustration.'
                },
                {
                    audio: 'Man: Did you hear that Sarah won the first prize in the national writing competition?\nWoman: Sarah? Really? But she barely even studied for it!\nQuestion: How does the woman sound?',
                    transcript: 'Man: Did you hear that Sarah won the first prize in the national writing competition?\nWoman: Sarah? Really? But she barely even studied for it!\nQuestion: How does the woman sound?',
                    question: 'How does the woman sound?',
                    questionTh: 'ผู้หญิงมีน้ำเสียงอย่างไร?',
                    choices: [
                        'Jealous and angry.',
                        'Bored and sleepy.',
                        'Astonished and surprised.',
                        'Confident and proud.'
                    ],
                    answer: 2,
                    explanationTh: 'การพูดว่า "Sarah? Really?" ด้วยความตกใจเพราะซาร่าแทบจะไม่ได้เตรียมตัว แสดงถึงความประหลาดใจอย่างมาก (Astonished and surprised)',
                    explanationEn: 'Questioning the news ("Sarah? Really?") because she didn\'t study shows astonishment and surprise.'
                },
                {
                    audio: 'Woman: I\'m so sorry, sir, but your flight to Tokyo has been delayed by another six hours.\nMan: You have got to be kidding me! This is the third delay today!\nQuestion: How does the man feel?',
                    transcript: 'Woman: I\'m so sorry, sir, but your flight to Tokyo has been delayed by another six hours.\nMan: You have got to be kidding me! This is the third delay today!\nQuestion: How does the man feel?',
                    question: 'How does the man feel?',
                    questionTh: 'ผู้ชายรู้สึกอย่างไร?',
                    choices: [
                        'Patient.',
                        'Delighted.',
                        'Furious and exasperated.',
                        'Amused.'
                    ],
                    answer: 2,
                    explanationTh: 'การตะโกนว่า "You have got to be kidding me!" (คุณล้อเล่นใช่มั้ยเนี่ย!) เมื่อรู้ว่าเที่ยวบินดีเลย์ครั้งที่ 3 แสดงถึงความโกรธจัดและเหลืออด (Furious and exasperated)',
                    explanationEn: 'Saying "You have got to be kidding me!" after a third delay expresses extreme anger and exasperation.'
                },
                {
                    audio: 'Man: I brought you some chicken soup. I heard you caught a cold.\nWoman: Oh, you didn\'t have to do that. That\'s so sweet of you.\nQuestion: What is the woman\'s attitude?',
                    transcript: 'Man: I brought you some chicken soup. I heard you caught a cold.\nWoman: Oh, you didn\'t have to do that. That\'s so sweet of you.\nQuestion: What is the woman\'s attitude?',
                    question: 'What is the woman\'s attitude?',
                    questionTh: 'ทัศนคติของผู้หญิงเป็นอย่างไร?',
                    choices: [
                        'Appreciative and touched.',
                        'Offended.',
                        'Suspicious.',
                        'Indifferent.'
                    ],
                    answer: 0,
                    explanationTh: 'การพูดว่า "That\'s so sweet of you" (คุณน่ารักจัง) แสดงถึงความซาบซึ้งใจและรู้สึกขอบคุณ (Appreciative and touched)',
                    explanationEn: 'Saying "That\'s so sweet of you" shows that she is appreciative and touched by the gesture.'
                },
                {
                    audio: 'Woman: Are you sure you locked the front door before we left?\nMan: I... I think so. Wait, maybe I didn\'t. Oh no.\nQuestion: What can be inferred about the man?',
                    transcript: 'Woman: Are you sure you locked the front door before we left?\nMan: I... I think so. Wait, maybe I didn\'t. Oh no.\nQuestion: What can be inferred about the man?',
                    question: 'What can be inferred about the man?',
                    questionTh: 'สามารถตีความเกี่ยวกับผู้ชายคนนี้ได้อย่างไร?',
                    choices: [
                        'He is certain he locked the door.',
                        'He is feeling anxious because he forgot.',
                        'He does not care about the door.',
                        'He is angry at the woman.'
                    ],
                    answer: 1,
                    explanationTh: 'อาการตอบตะกุกตะกัก "I think so... Oh no." แสดงว่าเขารู้สึกกังวลเพราะลืมล็อคประตู (Anxious)',
                    explanationEn: 'His stuttering and realization ("Oh no") indicate he is anxious because he likely forgot to lock the door.'
                },
                {
                    audio: 'Man: Could you please keep your voice down? This is a library.\nWoman: Oh! I am so sorry. I didn\'t realize how loud we were talking.\nQuestion: How does the woman react?',
                    transcript: 'Man: Could you please keep your voice down? This is a library.\nWoman: Oh! I am so sorry. I didn\'t realize how loud we were talking.\nQuestion: How does the woman react?',
                    question: 'How does the woman react?',
                    questionTh: 'ผู้หญิงมีปฏิกิริยาอย่างไร?',
                    choices: [
                        'She is defensive and angry.',
                        'She is apologetic and embarrassed.',
                        'She ignores the man.',
                        'She laughs loudly.'
                    ],
                    answer: 1,
                    explanationTh: 'การร้อง "Oh!" และรีบขอโทษ แสดงว่าเธอรู้สึกผิดและเขินอายที่คุยเสียงดังในห้องสมุด (Apologetic and embarrassed)',
                    explanationEn: 'Her quick apology shows she is apologetic and likely embarrassed for being loud in a library.'
                },
                {
                    audio: 'Woman: The presentation is tomorrow, and half the slides are missing.\nMan: Look, don\'t panic. Let\'s just sit down, divide the work, and get it done tonight.\nQuestion: What is the man\'s tone?',
                    transcript: 'Woman: The presentation is tomorrow, and half the slides are missing.\nMan: Look, don\'t panic. Let\'s just sit down, divide the work, and get it done tonight.\nQuestion: What is the man\'s tone?',
                    question: 'What is the man\'s tone?',
                    questionTh: 'น้ำเสียงของผู้ชายเป็นอย่างไร?',
                    choices: [
                        'Panicked and stressed.',
                        'Calm and reassuring.',
                        'Sarcastic.',
                        'Depressed.'
                    ],
                    answer: 1,
                    explanationTh: 'การบอกว่า "don\'t panic" (อย่าตื่นตระหนก) และเสนอวิธีแก้ปัญหาอย่างมีสติ แสดงถึงความใจเย็นและให้ความมั่นใจ (Calm and reassuring)',
                    explanationEn: 'By telling her not to panic and offering a practical solution, his tone is calm and reassuring.'
                }
            ]
        }
    ]
});
