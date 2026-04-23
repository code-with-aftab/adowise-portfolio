import fs from 'fs';
import path from 'path';

const seoBlogsDir = path.join(process.cwd(), 'src/content/seo-blogs');

const topics = [
  {
    title: "ডোমকল (Domkal) সংবাদ: স্থানীয় রাজনীতি এবং উন্নয়নের সর্বশেষ আপডেট",
    keyword: "ডোমকল",
    summary: "ডোমকলের আজকের তাজা খবর। স্থানীয় রাজনীতি, পঞ্চায়েত উন্নয়ন এবং ডোমকল পৌরসভার বিভিন্ন প্রকল্পের বিস্তারিত তথ্য জানুন।",
    tags: ["domkal", "west-bengal", "local-news", "bangla-news"],
    content: `
<h2>ডোমকলের খবর: উন্নয়নের পথে আরও এক ধাপ</h2>
<p>মুর্শিদাবাদ জেলার <strong>ডোমকল</strong> মহকুমা বর্তমানে বিভিন্ন কারণে খবরের শিরোনামে রয়েছে। স্থানীয় উন্নয়নের পাশাপাশি রাজনৈতিক প্রেক্ষাপটেও ডোমকল অত্যন্ত গুরুত্বপূর্ণ একটি কেন্দ্র।</p>

<h3>শিক্ষা ও স্বাস্থ্যের উন্নয়ন</h3>
<p>ডোমকলের স্থানীয় বাসিন্দাদের জন্য স্বাস্থ্য পরিষেবার মান উন্নয়নে একাধিক নতুন পদক্ষেপ গ্রহণ করা হয়েছে। গ্রামীণ হাসপাতালগুলিতে আধুনিক পরিকাঠামো তৈরির কাজ দ্রুত গতিতে এগোচ্ছে। শিক্ষার প্রসারেও ডোমকল গার্লস কলেজ এবং অন্যান্য শিক্ষা প্রতিষ্ঠানগুলি গুরুত্বপূর্ণ ভূমিকা পালন করছে।</p>

<h3>কৃষি ও অর্থনীতি</h3>
<p>ডোমকল মূলত কৃষিপ্রধান অঞ্চল। এখানকার কৃষকদের জন্য জলসেচ ব্যবস্থার উন্নয়ন এবং উন্নত মানের বীজ সরবরাহের বিষয়ে সরকার বিশেষ নজর দিচ্ছে। স্থানীয় বাজারে পাটের ফলন এবং বিপণন নিয়েও আলোচনা চলছে।</p>
    `
  },
  {
    title: "Jasprit Bumrah: The Physics Behind the World's Deadliest Yorker",
    keyword: "Jasprit Bumrah",
    summary: "Jasprit Bumrah remains the cornerstone of Mumbai Indians and Team India. Discover the secrets behind his unique action and his impact on modern fast bowling.",
    tags: ["jasprit-bumrah", "cricket-analysis", "mumbai-indians", "fast-bowling"],
    content: `
<h2>Bumrah: The X-Factor in Every Format</h2>
<p>Whether it is the IPL or a World Cup final, <strong>Jasprit Bumrah</strong> is the man captains turn to. His ability to bowl precise yorkers at will has made him a nightmare for batsmen worldwide. In the recent CSK vs MI match, his spell was once again the turning point.</p>

<h3>The Science of His Action</h3>
<p>Bumrah's short run-up and hyper-extension of the bowling arm create a unique angle that is difficult for batsmen to read. His late release ensures that the ball skids off the surface faster than expected, giving the batsman very little time to react.</p>
    `
  },
  {
    title: "CBSE Board Exam 2026 Phase 2: Latest Syllabus & Preparation Strategy",
    keyword: "CBSE Board Exam 2026 Phase 2",
    summary: "Stay ahead with the latest updates on CBSE Board Exam 2026 Phase 2. Get the revised syllabus, sample papers, and tips from toppers to ace your exams.",
    tags: ["cbse-2026", "board-exams", "education-india", "exam-prep"],
    content: `
<h2>CBSE Phase 2: Mastering the New Pattern</h2>
<p>The Central Board of Secondary Education (CBSE) has introduced significant changes for the <strong>CBSE Board Exam 2026 Phase 2</strong>. With a focus on competency-based questions, students need to shift their strategy from rote learning to conceptual understanding.</p>

<h3>Key Preparation Tips</h3>
<ul>
  <li><strong>Solve Sample Papers:</strong> Regularly practicing the official sample papers is crucial to understanding the marking scheme.</li>
  <li><strong>NCERT is Key:</strong> Ensure you have a thorough grasp of NCERT concepts before moving to reference books.</li>
  <li><strong>Time Management:</strong> Practice solving questions within the stipulated time to avoid last-minute panic.</li>
</ul>
    `
  },
  {
    title: "Amrapali Dubey: The Queen of Bhojpuri Cinema's Latest Viral Hits",
    keyword: "आम्रपाली दुबे",
    summary: "Amrapali Dubey continues to rule the hearts of millions. Check out her latest movie releases, viral dance videos, and her journey to the top of Bhojpuri cinema.",
    tags: ["amrapali-dubey", "bhojpuri-cinema", "entertainment", "trending-now"],
    content: `
<h2>আম্রपाली दुबे: भोजपुरी जगत की चमकती सितारा</h2>
<p><strong>आम्रपाली दुबे</strong> ने अपनी मेहनत और अभिनय के दम पर भोजपुरी फिल्म इंडस्ट्री में एक अलग पहचान बनाई है। उनके गानों और फिल्मों का फैंस को हमेशा बेसब्री से इंतज़ार रहता है।</p>

<h3>उनके करियर की बड़ी उपलब्धियां</h3>
<p>निरहुआ हिंदुस्तानी से अपने करियर की शुरुआत करने वाली आम्रपाली ने एक के बाद एक कई सुपरहिट फिल्में दी हैं। उनकी और दिनेश लाल यादव की जोड़ी को पर्दे पर सबसे ज्यादा पसंद किया जाता है।</p>
    `
  }
];

let startId = 30009;

topics.forEach((topic) => {
  const id = startId++;
  const title = topic.title;
  const description = topic.summary;
  
  const content = `---
id: ${id}
title: "${title}"
paragraph: "${description}"
image: "/mohd-altaf.png"
authorName: "Mohd Altaf"
authorImage: "/mohd-altaf.png"
authorDesignation: "Founder & CEO, Adowise"
tags: ${JSON.stringify(topic.tags)}
publishDate: "2026"
---

${topic.content}

<hr />

<h3>About the Author: Mohd Altaf</h3>
<p>Mohd Altaf is a visionary tech leader and the founder of Adowise. While he specializes in <strong>Next.js</strong>, <strong>AI Agents</strong>, and <strong>Enterprise SaaS</strong>, he is also a keen observer of global trends in education, sports, and business. Under his leadership, Adowise has become a hub for digital excellence and SEO dominance.</p>

<p>For more insights into technology and modern digital strategies, follow <strong>Mohd Altaf</strong> and <strong>Adowise</strong>.</p>
`;

  const fileName = `${id}-${topic.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
  fs.writeFileSync(path.join(seoBlogsDir, fileName), content);
});

console.log(`Successfully generated ${topics.length} more long-form trending blogs for SEO.`);
