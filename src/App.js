import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);


  const questions = [
    {
      question: "ما الذي يجذبك أكثر عند زيارة تطبيق او موقع الكتروني؟",
      options: [
        "الإبداع في التصميم",
        "سهولة الاستخدام",
        "الأمان وحماية البيانات",
        "التطوير المبتكر",
        "خلوه من الاخطاء"
      ],
    },
    {
      question: "أي من هذه الأنشطة تفضل القيام بها؟",
      options: [
        "رسم وتصميم شخصيات أو رسومات",
        "كتابة أكواد لحل مشكلة تقنية",
        "ملاحظة اخطاء المواقع والتطبيقات",
        "قراءة مقالات أو كتب عن الابتكارات التقنية",
      ],
    },
    {
      question: "ما الذي تفضله عند مشاهدة مقاطع الفيديو التقنية؟",
      options: [
        "تعلم كيفية التصميم على أدوات جديدة",
        "فهم كيف تعمل الأجهزة أو الأنظمة",
        "مشاهدة فيديوهات عن ألعاب جديدة",
        "التعرف على كيفية حماية الخصوصية على الإنترنت",
      ],
    },
    {
      question: "ما هو المجال الذي تفضل استكشافه؟",
      options: [
        "تصميم تطبيقات الهواتف أو الويب",
        "تطوير مواقع الكترونية",
        "تطوير تطبيقات الهواتف",
        "إنشاء برامج مبتكرة",
        "تطوير ألعاب ممتعة",
        "تحليل البيانات واستخلاص المعلومات",
        "تصميم وانشاء شبكات",
        "حماية المعلومات الشخصية",
        "اختبار البرمجيات واستكشاف الاخطاء فيها",
      ],
    },
    {
      question: "إذا كان لديك فريق تقني، أي دور تختاره؟",
      options: [
        "مصمم واجهات وتجربة مستخدم",
        "قائد فريق التطوير",
        "مطوّر ألعاب",
        "محلل بيانات أو خبير أمني",
        "مسؤول عن الجودة وخلو البرامج من الاخطاء",
        "مطور مواقع الكترونية",
        "مطور تطبيقات الهواتف",
        "مسؤول عن امان الشبكات",
        "مصمم شبكات",
      ],
    },
  ];


  const analyzeAnswers = (answers) => {
    const scores = {
      uiux: 0,
      development: 0,
      gaming: 0,
      cybersecurity: 0,
      dataScience: 0,
      quality: 0,
      fullstak:0,
      network:0,
      mobile:0,
    };

    answers.forEach((answer) => {
      if (answer.includes("تصميم") || answer.includes("إبداع") || answer.includes("تجربة مستخدم")) scores.uiux++;
      if (answer.includes("برامج") || answer.includes("التقنية")) scores.development++;
      if (answer.includes("تطبيقات الهواتف") || answer.includes("تطوير")) scores.mobile++;
      if (answer.includes("ألعاب") || answer.includes("تحديات")) scores.gaming++;
      if (answer.includes("الأمان") || answer.includes("حماية")) scores.cybersecurity++;
      if (answer.includes("تحليل") || answer.includes("البيانات")) scores.dataScience++;
      if (answer.includes("مواقع الكترونية") || answer.includes("اكواد")) scores.fullstak++;
      if (answer.includes("تصميم وانشاء شبكات") || answer.includes("شبكات")) scores.network++;
      if (answer.includes("الاخطاء") || answer.includes("الجودة") || answer.includes("اختبار")|| answer.includes("اخطاء")) scores.quality++;
    });

    const field = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    const details = {
      uiux: {
        field: "تصميم واجهات وتجربة مستخدم",
        description: "تعلم تصميم واجهات باستخدام Figma أو Adobe XD.",
        image: "assets/UI-UX.png",
      },
      development: {
        field: "تطوير البرامج",
        description: "ابدأ بتعلم Python أو Java لتطوير التطبيقات.",
        image: "https://via.placeholder.com/300?text=Development",
      },
      gaming: {
        field: "تطوير الألعاب",
        description: "تعلم Unity أو Unreal Engine لتطوير الألعاب.",
        image: "https://via.placeholder.com/300?text=Gaming",
      },
      cybersecurity: {
        field: "الأمن السيبراني",
        description: "تعرف على Kali Linux وطرق حماية الشبكات.",
        image: "assets/Hacker-bro.png",
      },
      dataScience: {
        field: "تحليل البيانات",
        description: "تعلم Python لتحليل البيانات باستخدام Pandas.",
        image: "assets/Analysis.png",
      },
      quality: {
        field: "ضمان جودة البرمجيات",
        description: "تعلم كيفية ملاحظة الاخطاء في المواقع والتطبيقات وكيفية الابلاغ عنها",
        image: "https://via.placeholder.com/300?text=Data+Science",
      },
      fullstak: {
        field: "مطور مواقع الكترونية",
        description: "تعرف اكثر عن المجال وحدد اذا كنت تريد ان تكون Frontend dev او Backend dev",
        image: "assets/web.png",
      },
     mobile: {
        field: "مطور تطبيقات جوال",
        description: "تعرف على تقنيات تطوير تطبيقات الجوال واللغات الخاصه بها مثل kotlin , java و swift او اطر العمل مثل react native و flutter",
        image: "assets/mobile.png",
      },
    };

    return details[field];
  };

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = analyzeAnswers(answers);
      setResult(result);
    }
  };

  if (result) {
    return (
      <>
      <header className="header">
      <div className="logo">
        <img src="assets/logo.png" alt="Logo" className="logo-img" />
      </div>
      <div className="other-images">
        <img src="assets/image1.png" alt="شعار صلة" className="header-img" />
        <img src="assets/image2.png" alt="شعار متطوعين" className="header-img" />
        <img src="assets/image3.png" alt="شعار التطوع" className="header-img" />
      </div>
    </header>
      <div className="result-container">
         <img src={result.image} alt={result.field} />
        <h2>نتيجتك: {result.field}</h2>
        <p>{result.description}</p>
      </div>
      </>
    );
  }
  
  return (
    <>
    <header className="header">
      <div className="logo">
        <img src="assets/logo.png" alt="Logo" className="logo-img" />
      </div>
      <div className="other-images">
    <img src="assets/image1.png" alt="شعار صلة" className="header-img" />
    <img src="assets/image2.png" alt="شعار متطوعين" className="header-img" />
    <img src="assets/image3.png" alt="شعار التطوع" className="header-img" />
        
      </div>
    </header>
    <div className="quiz-container">
      <h1>اختبار: اكتشف ميولك التقنية</h1>
      <div className="question-section">
        <p>{questions[currentQuestion].question}</p>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default App;
