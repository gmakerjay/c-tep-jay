LESSONS.push({
    id: 37,
    part: 3,
    titleTh: 'Sentence Completion: เติมคำให้สมบูรณ์',
    titleEn: 'Grammar: Sentence Completion',
    icon: '📝',
    sections: [
        {
            type: 'intro',
            title: 'บทนำ: เติมคำที่หายไปในประโยค',
            contentTh: 'Sentence Completion เป็นโจทย์ที่ให้ประโยคที่เว้นช่องว่างไว้ แล้วเลือกตัวเลือกที่เหมาะสมที่สุดมาเติม',
            contentEn: 'Sentence Completion tests both grammar and vocabulary simultaneously.',
            bullets: ['อ่านประโยคทั้งหมดก่อน อย่าเพิ่งรีบดูตัวเลือก', 'สังเกต Clue Words รอบๆ ช่องว่าง', 'ตรวจสอบ Part of Speech ที่ต้องเติม']
        },
        {
            type: 'quiz',
            title: 'Quiz: Sentence Completion (15 ข้อ)',
            questions: [
                { question: 'The company decided to _____ its operations in Asia.', questionTh: 'บริษัทตัดสินใจ _____ การดำเนินงานในเอเชีย', choices: ['expand', 'expanse', 'expansion', 'expansive'], answer: 0, explanationTh: 'หลัง to ต้องเป็น V.infinitive', explanationEn: 'After "to", use a base verb.' },
                { question: 'The firm remained _____ profitable throughout the year.', questionTh: 'บริษัทยังคง _____ มีกำไรตลอดปี', choices: ['high', 'higher', 'highly', 'height'], answer: 2, explanationTh: 'ต้องการ Adverb ขยาย Adj (profitable)', explanationEn: 'An adverb modifies "profitable".' },
                { question: 'The professor asked the students _____ their essays by Friday.', questionTh: 'อาจารย์ขอให้นักศึกษา _____ เรียงความภายในวันศุกร์', choices: ['submit', 'to submit', 'submitting', 'submitted'], answer: 1, explanationTh: 'ask + someone + to + V.inf', explanationEn: '"Ask someone TO do something".' },
                { question: 'Had I known about the traffic, I _____ earlier.', questionTh: 'ถ้ารู้เรื่องรถติด ฉัน _____ เร็วกว่านี้', choices: ['will leave', 'would leave', 'would have left', 'had left'], answer: 2, explanationTh: 'If เงื่อนไขแบบ 3: Had I known → would have + V.3', explanationEn: 'Type 3 conditional: "would have + past participle".' },
                { question: 'The restaurant is known _____ its exceptional seafood.', questionTh: 'ร้านนี้เป็นที่รู้จัก _____ อาหารทะเลชั้นยอด', choices: ['for', 'with', 'by', 'to'], answer: 0, explanationTh: 'Collocation: known for', explanationEn: '"Known for" = famous for a quality.' },
                { question: 'Not until the report was published _____ the severity of the problem.', questionTh: 'จนกว่ารายงานจะตีพิมพ์ _____ ความรุนแรงของปัญหา', choices: ['we realized', 'did we realize', 'we did realize', 'realized we'], answer: 1, explanationTh: '"Not until" ต้อง Inversion', explanationEn: '"Not until" triggers inversion.' },
                { question: 'The policy has been _____ implemented across all departments.', questionTh: 'นโยบายถูก _____ นำไปปฏิบัติในทุกแผนก', choices: ['success', 'successful', 'successfully', 'succeed'], answer: 2, explanationTh: 'Adverb ขยาย V (implemented)', explanationEn: 'Adverb modifies the verb.' },
                { question: 'She would rather _____ at home than go to the party.', questionTh: 'เธออยาก _____ อยู่บ้านมากกว่าไปปาร์ตี้', choices: ['stay', 'to stay', 'staying', 'stayed'], answer: 0, explanationTh: 'would rather + V.inf (ไม่ต้อง to)', explanationEn: '"Would rather" + bare infinitive.' },
                { question: 'The _____ of the experiment surprised the researchers.', questionTh: '_____ ของการทดลองทำให้นักวิจัยตกใจ', choices: ['result', 'resulting', 'resultant', 'results'], answer: 3, explanationTh: 'กริยา surprised ไม่เติม s = ประธานพหูพจน์ ใช้ results', explanationEn: 'Verb without "s" means plural subject.' },
                { question: 'It is essential that every employee _____ the safety course.', questionTh: 'จำเป็นที่พนักงานทุกคน _____ หลักสูตรความปลอดภัย', choices: ['completes', 'complete', 'completing', 'will complete'], answer: 1, explanationTh: 'Subjunctive: essential that + V.ไม่ผัน', explanationEn: 'Subjunctive mood requires base verb.' },
                { question: 'The more you practice, _____ you will become.', questionTh: 'ยิ่งฝึกมาก _____ คุณก็จะยิ่งเก่งขึ้น', choices: ['the better', 'better', 'the best', 'good'], answer: 0, explanationTh: 'The more... the + comparative', explanationEn: '"The more..., the + comparative..."' },
                { question: 'By the time the ambulance arrived, the patient _____ consciousness.', questionTh: 'ตอนรถพยาบาลมาถึง ผู้ป่วย _____ สติไปแล้ว', choices: ['lost', 'has lost', 'had lost', 'was losing'], answer: 2, explanationTh: 'By the time + Past → เหตุการณ์ก่อน = Past Perfect', explanationEn: 'Past Perfect for the earlier event.' },
                { question: 'The government should take _____ action to address the crisis.', questionTh: 'รัฐบาลควรดำเนิน _____ การเพื่อแก้วิกฤต', choices: ['immediately', 'immediate', 'immediacy', 'immediateness'], answer: 1, explanationTh: 'Adj ขยาย Noun (action)', explanationEn: 'Adjective modifies noun "action".' },
                { question: '_____ having studied for months, she was still nervous.', questionTh: '_____ เรียนมาหลายเดือน เธอก็ยังประหม่า', choices: ['Although', 'Despite', 'Because', 'Since'], answer: 1, explanationTh: 'ตามด้วย V.ing ต้องใช้ Despite (Preposition)', explanationEn: '"Despite" before gerund phrases.' },
                { question: 'The software enables users _____ their workflow efficiently.', questionTh: 'ซอฟต์แวร์ช่วยให้ผู้ใช้ _____ ขั้นตอนงานได้', choices: ['manage', 'to manage', 'managing', 'managed'], answer: 1, explanationTh: 'enable + someone + to + V.inf', explanationEn: '"Enable someone TO do something".' }
            ]
        }
    ]
});
