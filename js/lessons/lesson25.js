LESSONS.push({
    id: 25,
    part: 1,
    titleTh: 'ข้อสอบจำลอง: Master Simulation (Listening Part 1)',
    titleEn: 'Simulation: Listening Comprehension',
    icon: '🏆',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: แบบทดสอบรวมมิตร',
            contentTh: 'บทนี้จะเป็นการจำลองข้อสอบ Listening ครบทุกรูปแบบที่เราเรียนมา ทั้งสำนวน (Idioms), การปฏิเสธซ้อน (Double Negatives), การจับอารมณ์ และ Short Talks ขอให้ตั้งสมาธิให้ดีก่อนกดฟังนะครับ!',
            contentEn: 'This lesson serves as a comprehensive simulation of the Listening Comprehension section. It mixes idioms, tricky phrasing, emotional inferences, and short talks. Stay focused and listen carefully to the context!',
            bullets: [
                'รอบนี้คำถามจะสลับรูปแบบกันไปมา',
                'พยายามมองตัวเลือกแบบกวาดสายตาก่อนที่เสียงจะเริ่มพูด',
                'ห้ามแปลตรงตัว! ให้แปลความหมายรวมๆ ของประโยค'
            ]
        },
        {
            type: 'quiz',
            title: 'Simulation Test: 15 Questions',
            questions: [
                {
                    audio: 'Man: Did you manage to get tickets for the concert?\nWoman: By the time I logged in, they were completely sold out.\nQuestion: What does the woman mean?',
                    transcript: 'Man: Did you manage to get tickets for the concert?\nWoman: By the time I logged in, they were completely sold out.\nQuestion: What does the woman mean?',
                    question: 'What does the woman mean?',
                    questionTh: 'ผู้หญิงหมายความว่าอย่างไร?',
                    choices: [
                        'She bought all the tickets.',
                        'She successfully got the tickets.',
                        'There were no tickets left when she tried to buy them.',
                        'She sold her tickets to someone else.'
                    ],
                    answer: 2,
                    explanationTh: 'Sold out แปลว่าขายหมดแล้ว เธอจึงไม่ได้ตั๋ว',
                    explanationEn: 'The tickets were "sold out," meaning there were none left for her to buy.'
                },
                {
                    audio: 'Woman: It\'s pouring outside! I am soaked to the bone.\nMan: You should have brought an umbrella like I suggested.\nQuestion: What can be inferred about the woman?',
                    transcript: 'Woman: It\'s pouring outside! I am soaked to the bone.\nMan: You should have brought an umbrella like I suggested.\nQuestion: What can be inferred about the woman?',
                    question: 'What can be inferred about the woman?',
                    questionTh: 'สามารถตีความเกี่ยวกับผู้หญิงคนนี้ได้อย่างไร?',
                    choices: [
                        'She is very thirsty.',
                        'She followed the man\'s advice.',
                        'She is completely wet from the rain.',
                        'She is carrying an umbrella.'
                    ],
                    answer: 2,
                    explanationTh: 'สำนวน "soaked to the bone" แปลว่าเปียกโชกไปถึงกระดูก (เปียกปอนมาก)',
                    explanationEn: 'The idiom "soaked to the bone" means she is completely wet from the heavy rain.'
                },
                {
                    audio: 'Man: I can\'t believe the professor gave us another assignment.\nWoman: Tell me about it! I barely have time to sleep as it is.\nQuestion: What does the woman mean by saying "Tell me about it"?',
                    transcript: 'Man: I can\'t believe the professor gave us another assignment.\nWoman: Tell me about it! I barely have time to sleep as it is.\nQuestion: What does the woman mean by saying "Tell me about it"?',
                    question: 'What does the woman mean by saying "Tell me about it"?',
                    questionTh: 'คำพูดที่ว่า "Tell me about it" สื่อถึงอะไร?',
                    choices: [
                        'She wants the man to explain the assignment.',
                        'She completely agrees with the man\'s frustration.',
                        'She did not hear what the man said.',
                        'She is interested in the professor\'s life.'
                    ],
                    answer: 1,
                    explanationTh: 'สำนวน "Tell me about it!" ใช้เมื่อเราเห็นด้วยกับสิ่งแย่ๆ ที่อีกฝ่ายพูด (อารมณ์ประมาณ "ใช่เลย! ฉันก็โดนเหมือนกัน")',
                    explanationEn: 'The idiom "Tell me about it!" is used to express strong agreement, usually regarding a negative situation.'
                },
                {
                    audio: 'Woman: Was the new restaurant any good?\nMan: Well, the food wasn\'t terrible, but the service was incredibly slow.\nQuestion: How did the man feel about his dining experience?',
                    transcript: 'Woman: Was the new restaurant any good?\nMan: Well, the food wasn\'t terrible, but the service was incredibly slow.\nQuestion: How did the man feel about his dining experience?',
                    question: 'How did the man feel about his dining experience?',
                    questionTh: 'ผู้ชายรู้สึกอย่างไรกับประสบการณ์ทานอาหาร?',
                    choices: [
                        'He thought everything was perfect.',
                        'He found the food acceptable but hated the slow service.',
                        'He thought the food was the worst he ever had.',
                        'He loved the fast service.'
                    ],
                    answer: 1,
                    explanationTh: 'อาหาร "wasn\'t terrible" (ไม่ได้แย่) แต่บริการช้ามาก',
                    explanationEn: 'He thought the food was okay (not terrible), but was unhappy with the slow service.'
                },
                {
                    audio: 'Man: Would you mind keeping an eye on my suitcase for a minute?\nWoman: Not at all. I\'ll be right here.\nQuestion: What will the woman do?',
                    transcript: 'Man: Would you mind keeping an eye on my suitcase for a minute?\nWoman: Not at all. I\'ll be right here.\nQuestion: What will the woman do?',
                    question: 'What will the woman do?',
                    questionTh: 'ผู้หญิงจะทำอะไร?',
                    choices: [
                        'Watch the man\'s luggage.',
                        'Open the suitcase.',
                        'Take the suitcase with her.',
                        'Ignore the suitcase.'
                    ],
                    answer: 0,
                    explanationTh: 'สำนวน keep an eye on แปลว่าเฝ้าดูให้',
                    explanationEn: 'To keep an eye on something means to watch or look after it.'
                },
                {
                    audio: 'Woman: The boss wants the final report by 3 PM.\nMan: 3 PM? That\'s out of the question! We haven\'t even finished the data analysis.\nQuestion: What does the man mean?',
                    transcript: 'Woman: The boss wants the final report by 3 PM.\nMan: 3 PM? That\'s out of the question! We haven\'t even finished the data analysis.\nQuestion: What does the man mean?',
                    question: 'What does the man mean?',
                    questionTh: 'ผู้ชายหมายความว่าอย่างไร?',
                    choices: [
                        'He has a question for the boss.',
                        'It is impossible to finish the report by 3 PM.',
                        'He will definitely finish the report by 3 PM.',
                        'The data analysis is already complete.'
                    ],
                    answer: 1,
                    explanationTh: 'สำนวน "out of the question" แปลว่าเป็นไปไม่ได้เด็ดขาด',
                    explanationEn: 'The idiom "out of the question" means something is completely impossible or unacceptable.'
                },
                {
                    audio: 'Man: Did you hear about the software update?\nWoman: Yes, and it\'s about time! The old system was crashing every single day.\nQuestion: What is the woman\'s attitude toward the update?',
                    transcript: 'Man: Did you hear about the software update?\nWoman: Yes, and it\'s about time! The old system was crashing every single day.\nQuestion: What is the woman\'s attitude toward the update?',
                    question: 'What is the woman\'s attitude toward the update?',
                    questionTh: 'ทัศนคติของผู้หญิงที่มีต่อการอัปเดตเป็นอย่างไร?',
                    choices: [
                        'She is worried it will crash.',
                        'She is relieved and thinks it was long overdue.',
                        'She prefers the old system.',
                        'She is confused about the time.'
                    ],
                    answer: 1,
                    explanationTh: 'สำนวน "it\'s about time!" แปลว่า "มันถึงเวลาซะที!" (รอนานแล้ว) แสดงว่าเธอโล่งใจที่มีการอัปเดต',
                    explanationEn: 'Saying "it\'s about time" indicates she believes the update is long overdue and is glad it\'s happening.'
                },
                {
                    audio: 'Woman: How did your job interview go?\nMan: I don\'t want to jinx it, but I think they really liked my portfolio.\nQuestion: What does the man imply?',
                    transcript: 'Woman: How did your job interview go?\nMan: I don\'t want to jinx it, but I think they really liked my portfolio.\nQuestion: What does the man imply?',
                    question: 'What does the man imply?',
                    questionTh: 'ผู้ชายสื่อถึงอะไร?',
                    choices: [
                        'He thinks he failed the interview.',
                        'He lost his portfolio.',
                        'He is cautiously optimistic about getting the job.',
                        'He does not want the job anymore.'
                    ],
                    answer: 2,
                    explanationTh: 'สำนวน "don\'t want to jinx it" แปลว่าไม่อยากพูดก่อนเดี๋ยวจะโชคร้าย (แต่ลึกๆ แล้วมองในแง่ดีว่าสัมภาษณ์ผ่านแน่ๆ)',
                    explanationEn: '"I don\'t want to jinx it" means he is hopeful and optimistic, but doesn\'t want to celebrate too early and bring bad luck.'
                },
                {
                    audio: 'Man: Are you going to the gym tonight?\nWoman: I rarely skip a workout, but tonight I\'m just too exhausted.\nQuestion: What will the woman most likely do tonight?',
                    transcript: 'Man: Are you going to the gym tonight?\nWoman: I rarely skip a workout, but tonight I\'m just too exhausted.\nQuestion: What will the woman most likely do tonight?',
                    question: 'What will the woman most likely do tonight?',
                    questionTh: 'ผู้หญิงน่าจะทำอะไรในคืนนี้?',
                    choices: [
                        'Go to the gym as usual.',
                        'Skip her workout and rest.',
                        'Work late at the office.',
                        'Exhaust herself at the gym.'
                    ],
                    answer: 1,
                    explanationTh: 'ปกติเธอแทบจะไม่เคยโดดยิมเลย (rarely skip) แต่คืนนี้เหนื่อยเกินไป ดังนั้นเธอจะพักผ่อน',
                    explanationEn: 'Although she usually works out, she says she is too exhausted tonight, implying she will skip it and rest.'
                },
                {
                    audio: 'Woman: I can\'t figure out how to use this new coffee machine.\nMan: Let me give you a hand. It\'s actually quite simple once you know the steps.\nQuestion: What does the man offer to do?',
                    transcript: 'Woman: I can\'t figure out how to use this new coffee machine.\nMan: Let me give you a hand. It\'s actually quite simple once you know the steps.\nQuestion: What does the man offer to do?',
                    question: 'What does the man offer to do?',
                    questionTh: 'ผู้ชายเสนอตัวทำอะไร?',
                    choices: [
                        'Shake the woman\'s hand.',
                        'Buy a simpler coffee machine.',
                        'Help her operate the coffee machine.',
                        'Drink the coffee for her.'
                    ],
                    answer: 2,
                    explanationTh: 'สำนวน "give you a hand" แปลว่าช่วยเหลือ',
                    explanationEn: 'To "give a hand" means to offer help or assistance.'
                },
                {
                    audio: 'Man: Is the library open on Sundays during the summer?\nWoman: Not unless it\'s the week before final exams.\nQuestion: When is the library open on Sundays in the summer?',
                    transcript: 'Man: Is the library open on Sundays during the summer?\nWoman: Not unless it\'s the week before final exams.\nQuestion: When is the library open on Sundays in the summer?',
                    question: 'When is the library open on Sundays in the summer?',
                    questionTh: 'ห้องสมุดเปิดวันอาทิตย์ช่วงฤดูร้อนเมื่อใด?',
                    choices: [
                        'Every Sunday.',
                        'Never.',
                        'Only during the week before finals.',
                        'All summer long.'
                    ],
                    answer: 2,
                    explanationTh: '"Not unless" แปลว่า "จะไม่มีทาง... เว้นเสียแต่ว่า" ดังนั้นเปิดเฉพาะสัปดาห์ก่อนสอบไฟนอล',
                    explanationEn: '"Not unless" sets a specific condition: it is closed on Sundays except during the week before finals.'
                },
                {
                    audio: 'Woman: The marketing director stepped down yesterday.\nMan: I know, it happened completely out of the blue. Nobody saw it coming.\nQuestion: What does the man say about the director\'s resignation?',
                    transcript: 'Woman: The marketing director stepped down yesterday.\nMan: I know, it happened completely out of the blue. Nobody saw it coming.\nQuestion: What does the man say about the director\'s resignation?',
                    question: 'What does the man say about the director\'s resignation?',
                    questionTh: 'ผู้ชายพูดเกี่ยวกับการลาออกของผู้อำนวยการว่าอย่างไร?',
                    choices: [
                        'It was expected by everyone.',
                        'It was a complete surprise.',
                        'The director was wearing blue.',
                        'The director moved to a blue building.'
                    ],
                    answer: 1,
                    explanationTh: 'สำนวน "out of the blue" และ "Nobody saw it coming" แปลว่าคาดไม่ถึง เซอร์ไพรส์มาก',
                    explanationEn: '"Out of the blue" and "nobody saw it coming" mean the event was completely unexpected and surprising.'
                },
                {
                    audio: 'Man: Did you finish the book I lent you?\nWoman: I found it rather dull, to be honest. I couldn\'t get past the first chapter.\nQuestion: What did the woman think of the book?',
                    transcript: 'Man: Did you finish the book I lent you?\nWoman: I found it rather dull, to be honest. I couldn\'t get past the first chapter.\nQuestion: What did the woman think of the book?',
                    question: 'What did the woman think of the book?',
                    questionTh: 'ผู้หญิงคิดอย่างไรกับหนังสือเล่มนี้?',
                    choices: [
                        'It was very exciting.',
                        'It was boring.',
                        'She read the whole book quickly.',
                        'It was too heavy to carry.'
                    ],
                    answer: 1,
                    explanationTh: 'คำว่า "dull" แปลว่าน่าเบื่อ (Boring) จนอ่านต่อไม่ไหว',
                    explanationEn: '"Dull" is a synonym for boring or uninteresting.'
                },
                {
                    audio: 'Woman: I\'m so nervous about the interview tomorrow. I\'ve been preparing all week.\nMan: Just relax and be yourself. You\'re going to do great.\nQuestion: What is the man trying to do?',
                    transcript: 'Woman: I\'m so nervous about the interview tomorrow. I\'ve been preparing all week.\nMan: Just relax and be yourself. You\'re going to do great.\nQuestion: What is the man trying to do?',
                    question: 'What is the man trying to do?',
                    questionTh: 'ผู้ชายกำลังพยายามทำอะไร?',
                    choices: [
                        'Make the woman more nervous.',
                        'Encourage and reassure the woman.',
                        'Prepare for his own interview.',
                        'Tell her she will fail.'
                    ],
                    answer: 1,
                    explanationTh: 'เขาปลอบให้เธอผ่อนคลายและให้กำลังใจว่า "เธอจะทำได้ดี" (Encourage and reassure)',
                    explanationEn: 'The man is offering words of encouragement and reassurance to calm her nerves.'
                },
                {
                    audio: 'Man: Attention passengers, flight 402 to Chicago has been canceled due to severe weather conditions.\nQuestion: What is the main purpose of this announcement?',
                    transcript: 'Man: Attention passengers, flight 402 to Chicago has been canceled due to severe weather conditions.\nQuestion: What is the main purpose of this announcement?',
                    question: 'What is the main purpose of this announcement?',
                    questionTh: 'จุดประสงค์หลักของประกาศนี้คืออะไร?',
                    choices: [
                        'To inform passengers about a delay.',
                        'To announce that a flight will not depart because of bad weather.',
                        'To warn passengers about a storm inside the airport.',
                        'To offer free tickets to Chicago.'
                    ],
                    answer: 1,
                    explanationTh: 'ประกาศว่าเที่ยวบินถูกยกเลิก (canceled) เนื่องจากสภาพอากาศรุนแรง (severe weather)',
                    explanationEn: 'The announcement states the flight is canceled (will not depart) because of severe weather.'
                }
            ]
        }
    ]
});
