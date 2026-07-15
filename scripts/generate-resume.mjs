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
doc.text('chiraboinarangasai@gmail.com | linkedin.com/in/ranga-sai-ch-275300256 | github.com/rangasai018', {
  align: 'center',
});
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
  'Computer Science Engineering student specializing in cyber security with hands-on experience in network analysis, secure application development, and modern web technologies including React, Java, and Python.'
);

section('Education');
doc.fontSize(11).fillColor('#0a192f').text('B.Tech in Computer Science & Engineering (Cyber Security)');
body('CMR College of Engineering & Technology, Hyderabad, India | 2022 — 2026');
body('Focused on network security, ethical hacking, secure software development, and threat analysis.');

section('Projects');
doc.fontSize(11).fillColor('#0a192f').text('E-Commerce Platform');
body('Full-stack e-commerce application using Spring Boot, Java, MySQL, Docker, HTML, CSS, and JavaScript.');

doc.moveDown(0.3);
doc.fontSize(11).fillColor('#0a192f').text('Encrypted & Compressed Key-Value Store');
body('Secure cloud-native key-value store using FastAPI, AES-Fernet encryption, LZ4 compression, and JWT authentication.');

doc.moveDown(0.3);
doc.fontSize(11).fillColor('#0a192f').text('Android Malware Detection');
body('Ensemble ML system using XGBoost, LightGBM, CatBoost, Random Forest, and SVM to classify Android apps.');

doc.moveDown(0.3);
doc.fontSize(11).fillColor('#0a192f').text('Java Chat Application');
body('Real-time client-server chat application built with Java Socket Programming.');

section('Skills');
body(
  'Languages & Web: HTML, CSS, JavaScript, Java, Python, React\nSecurity Tools: Nmap, Burp Suite, Wireshark, Metasploit\nTools: Git, GitHub, Docker, MySQL, FastAPI, Spring Boot'
);

section('Certifications');
body('GenAI Governance — Skillsoft (2025)');
body('Ethical Hacker — Cisco Networking Academy (2024)');
body('Introduction to Cybersecurity — Cisco Networking Academy (2024)');
body('Tata Group Data Analytics Job Simulation — Forage (2025)');
body('Deloitte Australia Data Analytics Job Simulation — Forage (2025)');
body('Deloitte Australia Cyber Job Simulation — Forage (2025)');

doc.end();

stream.on('finish', () => {
  console.log(`Resume generated at ${outputPath}`);
});
