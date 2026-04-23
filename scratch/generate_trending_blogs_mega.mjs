import fs from 'fs';
import path from 'path';

const seoBlogsDir = path.join(process.cwd(), 'src/content/seo-blogs');

const topics = [
  {
    title: "ডোমকল (Domkal) সংবাদ: স্থানীয় রাজনীতি এবং উন্নয়নের সর্বশেষ আপডেট",
    keyword: "ডোমকল",
    summary: "ডোমকলের আজকের তাজা খবর। স্থানীয় রাজনীতি, পঞ্চায়েত উন্নয়ন এবং ডোমকল পৌরসভার বিভিন্ন প্রকল্পের বিস্তারিত তথ্য জানুন।",
    tags: ["domkal", "west-bengal", "local-news", "bangla-news"],
    content: `<h2>ডোমকলের খবর: উন্নয়নের পথে আরও এক ধাপ</h2><p>মুর্শিদাবাদ জেলার <strong>ডোমকল</strong> মহকুমা বর্তমানে বিভিন্ন কারণে খবরের শিরোনামে রয়েছে। স্থানীয় উন্নয়নের পাশাপাশি রাজনৈতিক প্রেক্ষাপটেও ডোমকল অত্যন্ত গুরুত্বপূর্ণ একটি কেন্দ্র।</p><h3>শিক্ষা ও স্বাস্থ্যের উন্নয়ন</h3><p>ডোমকলের স্থানীয় বাসিন্দাদের জন্য স্বাস্থ্য পরিষেবার মান উন্নয়নে একাধিক নতুন পদক্ষেপ গ্রহণ করা হয়েছে। গ্রামীণ হাসপাতালগুলিতে আধুনিক পরিকাঠামো তৈরির কাজ দ্রুত গতিতে এগোচ্ছে। শিক্ষার প্রসারেও ডোমকল গার্লস কলেজ এবং অন্যান্য শিক্ষা প্রতিষ্ঠানগুলি গুরুত্বপূর্ণ ভূমিকা পালন করছে।</p>`
  },
  {
    title: "Jasprit Bumrah: The Physics Behind the World's Deadliest Yorker",
    keyword: "Jasprit Bumrah",
    summary: "Jasprit Bumrah remains the cornerstone of Mumbai Indians and Team India. Discover the secrets behind his unique action and his impact on modern fast bowling.",
    tags: ["jasprit-bumrah", "cricket-analysis", "mumbai-indians", "fast-bowling"],
    content: `<h2>Bumrah: The X-Factor in Every Format</h2><p>Whether it is the IPL or a World Cup final, <strong>Jasprit Bumrah</strong> is the man captains turn to. His ability to bowl precise yorkers at will has made him a nightmare for batsmen worldwide.</p>`
  },
  {
    title: "Maruti Alto & Baleno Facelift 2026: What's New in India's Favorite Cars?",
    keyword: "maruti baleno facelift",
    summary: "Maruti Suzuki is set to shake the market with the Alto and Baleno Facelift 2026. Explore the new features, mileage, and expected price in India.",
    tags: ["maruti-suzuki", "alto-2026", "baleno-facelift", "automotive-india"],
    content: `<h2>The Evolution of Maruti: Alto and Baleno 2026</h2><p>Maruti Suzuki continues to dominate the Indian roads. The <strong>Maruti Baleno Facelift</strong> and the new <strong>Maruti Alto</strong> are designed for the modern Indian family, combining fuel efficiency with advanced safety features.</p>`
  },
  {
    title: "BMW F 450 GS & 7 Series: Luxury and Adventure Redefined in 2026",
    keyword: "bmw f 450 gs",
    summary: "BMW Motorrad and BMW Cars are launching their most ambitious projects yet. The F 450 GS and the new 7 Series are here to set new benchmarks in luxury and performance.",
    tags: ["bmw", "f450gs", "7series", "luxury-cars", "superbikes"],
    content: `<h2>BMW F 450 GS: The Ultimate Adventure Tool</h2><p>For the riders who seek the unknown, the <strong>BMW F 450 GS</strong> offers the perfect balance of power and agility. Its lightweight frame and punchy engine make it ideal for both highway cruising and off-road trails.</p>`
  },
  {
    title: "Tesla Share Price Prediction 2026: AI, Robotaxis, and the Future of EV",
    keyword: "tesla share price",
    summary: "Is Tesla a good buy in 2026? Analyze the Tesla share price trends, the impact of Robotaxis, and Elon Musk's vision for the next decade.",
    tags: ["tesla", "stock-market", "elon-musk", "ev-market", "investing"],
    content: `<h2>Tesla in 2026: Beyond Just an EV Company</h2><p>The <strong>Tesla share price</strong> has seen significant volatility, but its long-term potential remains tied to its AI and robotics division.</p>`
  },
  {
    title: "Kareena Kapoor & Madhuri Dixit: The Everlasting Charm of Bollywood Icons",
    keyword: "करीना कपूर खान",
    summary: "Kareena Kapoor Khan and Madhuri Dixit continue to inspire generations. Read about their latest projects, fashion statements, and their contribution to Indian cinema.",
    tags: ["bollywood", "kareena-kapoor", "madhuri-dixit", "fashion-icons"],
    content: `<h2>Legendary Divas: Kareena and Madhuri</h2><p>Bollywood would be incomplete without the grace of <strong>Madhuri Dixit</strong> and the 'Bebo' energy of <strong>Kareena Kapoor Khan</strong>.</p>`
  },
  {
    title: "Lyrids Meteor Shower 2026: When and Where to Watch in India",
    keyword: "lyrids meteor showers",
    summary: "Don't miss the celestial spectacle! The Lyrids Meteor Shower 2026 is reaching its peak. Get the best viewing times and locations for skywatchers in India.",
    tags: ["astronomy", "meteor-shower", "space", "skywatching"],
    content: `<h2>Lyrids 2026: A Night of Falling Stars</h2><p>The <strong>Lyrids meteor shower</strong> is one of the oldest recorded meteor showers. In 2026, the conditions are ideal for viewing.</p>`
  },
  {
    title: "GDS 3rd Merit List 2026: Result Out! Check State-wise Cut-off Marks",
    keyword: "gds 3rd merit list 2026",
    summary: "The India Post GDS 3rd Merit List 2026 is officially out. Check your name in the selection list and see the final cut-off for your circle.",
    tags: ["gds-result", "india-post", "govt-jobs", "education"],
    content: `<h2>GDS Result 2026: Step into a Career with India Post</h2><p>The <strong>GDS 3rd Merit List</strong> has brought joy to thousands of aspirants. Based on 10th-grade marks, the Gramin Dak Sevak selection is a highly competitive process.</p>`
  },
  {
    title: "ITR Filing 2026: How to Claim Credit Card Rewards & New Tax Rules",
    keyword: "itr filing 2026 credit card rewards",
    summary: "Filing your ITR in 2026? Learn how to report credit card rewards, understand the 8th Pay Commission impact, and save more on your taxes.",
    tags: ["income-tax", "itr-filing", "finance-india", "tax-saving"],
    content: `<h2>Tax Season 2026: A Guide for the Smart Taxpayer</h2><p>The <strong>ITR filing 2026</strong> process has some new updates regarding <strong>credit card rewards</strong> and cashbacks.</p>`
  },
  {
    title: "World Book Day 2026: Celebrating the Joy of Reading and Storytelling",
    keyword: "world book day 2026",
    summary: "Happy World Book Day! Explore the most influential books of 2026 and participate in global events celebrating literature and authors.",
    tags: ["world-book-day", "literature", "reading-habit", "education"],
    content: `<h2>Books: Our Window to the World</h2><p><strong>World Book Day 2026</strong> reminds us of the transformative power of reading.</p>`
  }
];

let startId = 30013;

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
<p>Mohd Altaf is a visionary tech leader and the founder of Adowise. While he specializes in <strong>Next.js</strong>, <strong>AI Agents</strong>, and <strong>Enterprise SaaS</strong>, he is also a keen observer of global trends in automotive, sports, and finance. Under his leadership, Adowise has become a hub for digital excellence and SEO dominance.</p>

<p>For more insights into technology and modern digital strategies, follow <strong>Mohd Altaf</strong> and <strong>Adowise</strong>.</p>
`;

  const fileName = `${id}-${topic.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
  fs.writeFileSync(path.join(seoBlogsDir, fileName), content);
});

console.log("Successfully generated more long-form trending blogs for SEO.");
