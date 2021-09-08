const quiz = [
    {
        question: 'Đường mòn Hồ Chí Minh là tuyến đường có số hiệu bao nhiêu',
        options: [1, 2, 3, 4],
        answer: 3
    },
    {
        question: 'Chủ tịch nước Việt Nam là ai?',
        options: ['Nguyễn Phú Trọng', 'Nguyễn Xuân Phúc', 'Phạm Bình Minh', 'Trần Văn Minh'],
        answer: 1
    },
    {
        question: 'Món ăn truyền thống của việt Nam vào ngày Tết cổ truyền?',
        options: ['Dưa hành', 'Bánh chưng', 'Bánh ngào', 'Xôi'],
        answer: 1
    },
    {
        question: '1+1=?',
        options: [1, 3, 2],
        answer: 2
    },
    {
        question: 'Nanocovax là vacxin do Việt Nam sản xuất?',
        options: ['Đúng', 'Sai'],
        answer: 0
    },
    {
        question: 'Trưa nay ăn gì nhỉ?',
        options: ['Gà hầm hạt sen', 'Cháo lươn xứ Nghệ', 'Cơm nấu đủ vị', 'Bào ngư, Tôm hùm'],
        answer: 3
    }
]
var getElementsQuiz = [];

const sampleSize = ([...quiz], n = 1) => {
    let m = quiz.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [quiz[m], quiz[i]] = [quiz[i], quiz[m]];
    }
    return quiz.slice(0, n);
};

getElementsQuiz = sampleSize(quiz, 5)

