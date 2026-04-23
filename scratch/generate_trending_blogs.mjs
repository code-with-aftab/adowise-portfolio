import fs from 'fs';
import path from 'path';

const seoBlogsDir = path.join(process.cwd(), 'src/content/seo-blogs');

if (!fs.existsSync(seoBlogsDir)) {
  fs.mkdirSync(seoBlogsDir, { recursive: true });
}

const topics = [
  {
    title: "UP Board Result 2026: Direct Link & How to Check Class 10th, 12th Results",
    keyword: "UP Board Result 2026",
    summary: "The UP Board Result 2026 is finally here. Millions of students can now check their Class 10 and 12 results online. Get the direct link, toppers list, and step-by-step guide to download your mark sheet.",
    tags: ["up-board", "result-2026", "education", "india"],
    content: `
<h2>UP Board Result 2026 Announced: Check Your Score Now</h2>
<p>The Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP) has officially released the <strong>UP Board Result 2026</strong> for both Class 10th (High School) and Class 12th (Intermediate). With over 50 lakh students appearing for the exams this year, the tension was high, but the wait is finally over.</p>

<h3>How to Check UP Board Result 2026 Online</h3>
<p>To check your results without any technical glitches, follow these simple steps:</p>
<ol>
  <li>Visit the official website: <strong>upresults.nic.in</strong> or <strong>upmsp.edu.in</strong>.</li>
  <li>Click on the link 'UP Board High School (Class X) Examination - 2026 Results' or 'UP Board Intermediate (Class XII) Examination - 2026 Results'.</li>
  <li>Enter your 7-digit or 10-digit Roll Number.</li>
  <li>Verify your school code as mentioned on the admit card.</li>
  <li>Click 'Submit' and your result will appear on the screen.</li>
</ol>

<h3>Passing Percentage and Toppers of 2026</h3>
<p>This year, the overall passing percentage has seen a significant improvement. Female students have once again outperformed male students in both categories. The board is expected to release the official toppers list shortly, highlighting the academic excellence of students from Prayagraj, Lucknow, and Varanasi.</p>

<p><em>Note: If the official website is slow due to heavy traffic, please stay patient and try again after a few minutes.</em></p>
    `
  },
  {
    title: "CSK vs MI Match Scorecard & Highlights: Hardik vs Ruturaj in IPL 2026 Thriller",
    keyword: "CSK vs MI match scorecard",
    summary: "Catch the latest CSK vs MI match scorecard and highlights. Chennai Super Kings and Mumbai Indians face off in the El Clásico of IPL 2026. Detailed analysis, player stats, and key moments.",
    tags: ["ipl-2026", "csk-vs-mi", "cricket-scorecard", "ruturaj-gaikwad", "hardik-pandya"],
    content: `
<h2>CSK vs MI: The Ultimate IPL 2026 Showdown</h2>
<p>The rivalry continues! The <strong>CSK vs MI match scorecard</strong> is the most searched item today as the two giants of the Indian Premier League clashed in a high-octane battle at the Wankhede Stadium. Fans witnessed a masterclass in T20 cricket as both teams fought for dominance in the points table.</p>

<h3>CSK vs MI Match Highlights</h3>
<p>Mumbai Indians, led by Hardik Pandya, won the toss and elected to bowl first. The CSK openers, Ruturaj Gaikwad and Rachin Ravindra, gave a steady start. However, it was the middle-order explosion from <strong>Shivam Dube</strong> that changed the game's momentum. His power-hitting against the spinners left the MI fans stunned.</p>

<h3>Bumrah's Magic and MI's Chase</h3>
<p><strong>Jasprit Bumrah</strong> once again proved why he is the world's best, taking crucial wickets in the death overs. In the second innings, MI started strong with Ishan Kishan, but the spin duo of CSK tightened the screws in the middle overs. <strong>Dewald Brevis</strong> showed glimpses of brilliance, but the target proved to be just out of reach.</p>

<p>For a detailed ball-by-ball <strong>CSK vs MI match scorecard</strong>, check the official IPL app or Cricbuzz.</p>
    `
  },
  {
    title: "Infosys Q4 Results 2026: Revenue Growth, Guidance, and Dividend Details",
    keyword: "Infosys Q4 Results",
    summary: "Infosys has announced its Q4 results for the financial year 2026. Read about the revenue growth, deal wins, future guidance, and the final dividend declared for shareholders.",
    tags: ["infosys", "q4-results", "stock-market", "it-sector", "finance"],
    content: `
<h2>Infosys Q4 Earnings Report: A Tech Giant's Performance</h2>
<p>The <strong>Infosys Q4 results</strong> have been the talk of the town in the financial world. As India's second-largest IT services company, its performance is often seen as a bellwether for the entire technology sector. This quarter's report highlights the company's resilience amidst global economic fluctuations.</p>

<h3>Key Highlights of Infosys Q4 2026</h3>
<ul>
  <li><strong>Revenue Growth:</strong> A steady increase in constant currency revenue, driven by digital and cloud services.</li>
  <li><strong>Large Deal Wins:</strong> The company reported a record number of large deals, showcasing strong demand for AI-driven transformation.</li>
  <li><strong>Operating Margin:</strong> Maintained within the expected range despite rising talent costs.</li>
  <li><strong>Dividend:</strong> The board has recommended a final dividend of Rs. 20 per share.</li>
</ul>

<h3>Future Guidance and AI Integration</h3>
<p>Infosys CEO Salil Parekh emphasized the role of generative AI in their future strategy. The company has integrated AI across its service lines, helping clients improve efficiency and innovation. The guidance for the next fiscal year remains optimistic, suggesting a robust pipeline of work.</p>
    `
  },
  {
    title: "Tamil Nadu Voting Percentage 2026: District-wise Turnout and Election News",
    keyword: "voting percentage in tamil nadu",
    summary: "Check the latest voting percentage in Tamil Nadu for the 2026 Assembly Elections. Stay updated with live turnout data from Chennai, Madurai, Coimbatore, and other districts.",
    tags: ["tamil-nadu-elections", "voting-percentage", "politics", "india-news"],
    content: `
<h2>Tamil Nadu Assembly Elections 2026: Democracy in Action</h2>
<p>The <strong>voting percentage in Tamil Nadu</strong> is being monitored closely today as citizens across the state exercise their right to vote. From the bustling streets of Chennai to the rural heartlands, the enthusiasm for the 2026 Assembly Elections is palpable.</p>

<h3>District-wise Voting Turnout</h3>
<p>According to the latest reports from the Election Commission, the state has seen a healthy turnout. Districts like Dharmapuri and Karur are leading with over 75% turnout by late afternoon, while urban centers like Chennai are seeing a steady increase in the evening hours.</p>

<h3>Key Issues and Voter Sentiment</h3>
<p>Voters have highlighted issues such as infrastructure development, unemployment, and welfare schemes as their primary concerns. The technological integration in this election, including real-time queue monitoring, has helped improve the voting experience for many.</p>
    `
  },
  {
    title: "Who is Kartik Sharma? The Rising Star of Indian Media and Entrepreneurship",
    keyword: "Kartik Sharma",
    summary: "Explore the journey of Kartik Sharma, a visionary leader in the media and technology space. Learn about his contributions to digital innovation and his impact on the industry.",
    tags: ["kartik-sharma", "entrepreneurship", "media-innovation", "biography"],
    content: `
<h2>Kartik Sharma: A Profile in Excellence</h2>
<p><strong>Kartik Sharma</strong> has become a household name for those following the intersection of media and entrepreneurship in India. His career is a testament to the power of vision and persistence in a rapidly changing digital landscape.</p>

<h3>Early Career and Vision</h3>
<p>Starting with a focus on core media values, Kartik Sharma quickly realized the potential of digital transformation. He has been instrumental in pivoting traditional models towards a more interactive and user-centric approach, ensuring that content remains relevant in the age of social media.</p>

<h3>Impact on the Tech Ecosystem</h3>
<p>Beyond media, Kartik's influence extends to the tech startup ecosystem. By mentoring young entrepreneurs and investing in innovative solutions, he has helped foster a culture of creativity and problem-solving. His leadership style is characterized by a balance of strategic thinking and empathetic management.</p>
    `
  },
  {
    title: "Barcelona vs Celta Vigo Scorecard: Lewandowski and Lamine Yamal Shine in La Liga",
    keyword: "barcelona vs celta vigo",
    summary: "Barcelona faces Celta Vigo in a crucial La Liga match. Get the live scorecard, goals, and match summary of this exciting football encounter.",
    tags: ["la-liga", "barcelona", "celta-vigo", "football-scorecard", "lamine-yamal"],
    content: `
<h2>Barça vs Celta: A Tactical Battle at Camp Nou</h2>
<p>The <strong>Barcelona vs Celta Vigo</strong> clash is always a highlight for football fans. Under the lights, the Catalan giants looked to secure three points to stay at the top of the La Liga table. Celta Vigo, known for their resilient defense and quick counter-attacks, proved to be a tough nut to crack.</p>

<h3>Match Analysis and Key Goals</h3>
<p>Robert Lewandowski continued his fine form, finding the back of the net early in the second half. However, it was the young sensation <strong>Lamine Yamal</strong> who stole the show with his incredible dribbling and vision. Celta's Iago Aspas threatened the Barça goal several times, but Ter Stegen's saves kept the lead intact.</p>

<p>For the complete <strong>Barcelona vs Celta Vigo</strong> stats, including possession, shots on target, and player ratings, visit the official La Liga website.</p>
    `
  },
  {
    title: "JAC 10th Result 2026: Jharkhand Board Result Date and Link",
    keyword: "jac 10th result 2026",
    summary: "The Jharkhand Academic Council (JAC) is set to release the 10th board results for 2026. Find out the expected date, time, and where to check your JAC Matric result.",
    tags: ["jac-result", "jharkhand-board", "education", "10th-result"],
    content: `
<h2>JAC Matric Result 2026: What You Need to Know</h2>
<p>Students in Jharkhand are eagerly waiting for the <strong>JAC 10th result 2026</strong>. The Jharkhand Academic Council has conducted the exams across hundreds of centers, and the evaluation process is now in its final stages.</p>

<h3>Where to Check JAC 10th Result</h3>
<p>Once officially announced, the results will be available at <strong>jacresults.com</strong> and <strong>jac.jharkhand.gov.in</strong>. Students will need their roll code and roll number to access their scorecards.</p>
    `
  },
  {
    title: "Jackky Bhagnani: The Evolution of a Multi-Talented Actor and Producer",
    keyword: "jackky bhagnani",
    summary: "From acting to producing blockbuster films, Jackky Bhagnani's journey in Bollywood is truly inspiring. Read about his latest projects and his vision for Pooja Entertainment.",
    tags: ["jackky-bhagnani", "bollywood", "pooja-entertainment", "producer-life"],
    content: `
<h2>Jackky Bhagnani: Redefining Modern Indian Cinema</h2>
<p><strong>Jackky Bhagnani</strong> has successfully transitioned from being a promising actor to one of the most dynamic producers in the Indian film industry. As the head of Pooja Entertainment, he is bringing global production standards to Bollywood.</p>

<h3>Latest Hits and Future Projects</h3>
<p>With recent successes in the action and comedy genres, Jackky is now focusing on large-scale spectacles that appeal to a pan-India audience. His commitment to bringing fresh talent to the screen has made him a respected figure among his peers.</p>
    `
  }
];

let startId = 30001;

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

console.log(`Successfully generated ${topics.length} long-form trending blogs for SEO.`);
