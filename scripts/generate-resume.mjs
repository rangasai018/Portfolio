import PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '../public/Ranga_Sai_CH_Resume.pdf');

const doc = new PDFDocument({ margin: 50 });
const stream = createWriteStream(outputPath);
doc.pipe(stream);

doc.fontSize(22).fillColor('#0a192f').text('Ranga Sai CH', { align: 'center' });
doc.moveDown(0.3);
doc.fontSize(11).fillColor('#555').text('CSE (Cyber Security) Student | Web Developer', { align: 'center' });
doc.text('chiraboinarangasai@gmail.com | linkedin.com/in/ranga-sai-ch | github.com/RangaSaiCh', { align: 'center' });
doc.moveDown(1.2);

const section = (title) => {
  doc.moveDown(0.6);
  doc.fontSize(13).fillColor('#0a192f').text(title.toUpperCase());
  doc.moveDown(0.2);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#64ffda').lineWidth(1).stroke();
  doc.moveDown(0.4);
};

const body = (text) => doc.fontSize(10).fillColor('#333').text(text, { lineGap: 3 });
const bullet = (text) => doc.fontSize(10).fillColor('#333').text(`• ${text}`, { indent: 12, lineGap: 2 });

section('Summary');
body(
  'Computer Science Engineering student specializing in cyber security with hands-on experience in network analysis, penetration testing tools, and modern web development using HTML, CSS, JavaScript, and React.'
);

section('Education');
doc.fontSize(11).fillColor('#0a192f').text('B.Tech in Computer Science & Engineering (Cyber Security)');
body('Your University Name | 2022 — Present');
body('Coursework: Network Security, Ethical Hacking, Secure Software Development, Threat Analysis');

section('Experience');
doc.fontSize(11).fillColor('#0a192f').text('Cyber Security Projects & Labs');
body('Academic & Self-Directed | 2023 — Present');
bullet('Performed packet analysis with Wireshark and identified unencrypted traffic risks');
bullet('Practiced reconnaissance and testing workflows with Nmap, Burp Suite, and Metasploit');

doc.moveDown(0.4);
doc.fontSize(11).fillColor('#0a192f').text('Web Development Projects');
body('Personal Portfolio & Coursework | 2023 — Present');
bullet('Built responsive portfolio using React and Vite');
bullet('Applied modern UI patterns, accessibility, and mobile-first design');

section('Projects');
doc.fontSize(11).fillColor('#0a192f').text('Sniffing Unencrypted Network Traffic');
body('Captured and analyzed HTTP data using Wireshark to demonstrate security risks of plaintext communication.');

doc.moveDown(0.3);
doc.fontSize(11).fillColor('#0a192f').text('Instagram Drug Detection');
body('ML-based system to detect drug-related content on social media platforms using Python.');

doc.moveDown(0.3);
doc.fontSize(11).fillColor('#0a192f').text('Threat Intelligence Collector');
body('Automated collection and analysis of cyber threat feeds for actionable security insights.');

section('Skills');
body(
  'Languages & Web: HTML, CSS, JavaScript, Java, Python, React\nSecurity Tools: Nmap, Burp Suite, Wireshark, Metasploit\nTools: Git, GitHub, Docker'
);

section('Certifications');
body('Introduction to Cyber Security — Online Learning Platform (2024)');
body('Python for Everybody — Online Learning Platform (2023)');

doc.end();

stream.on('finish', () => {
  console.log(`Resume generated at ${outputPath}`);
});
