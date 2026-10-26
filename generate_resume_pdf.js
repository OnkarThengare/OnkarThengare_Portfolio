import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({ margin: 40, size: 'A4' });
const writeStream = fs.createWriteStream('public/resume.pdf');
doc.pipe(writeStream);

// Primary colors
const primaryColor = '#1F2937';
const accentColor = '#6C5CE7';
const darkGray = '#374151';
const lightGray = '#4B5563';

// Header Name
doc.fontSize(22).font('Helvetica-Bold').fillColor(primaryColor).text('ONKAR THENGARE', { align: 'center' });
doc.moveDown(0.3);

// Contact Info
doc.fontSize(9).font('Helvetica').fillColor(lightGray).text(
  '+91-8080682186  |  onkarthengare2002@gmail.com  |  linkedin.com/in/onkar-thengare  |  github.com/OnkarThengare',
  { align: 'center' }
);
doc.moveDown(0.8);

function drawSectionHeader(title) {
  doc.fontSize(11).font('Helvetica-Bold').fillColor(primaryColor).text(title.toUpperCase());
  doc.strokeColor('#D1D5DB').lineWidth(0.75).moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke();
  doc.moveDown(0.4);
}

// Objective
drawSectionHeader('Objective');
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text(
  'Aspiring Java Developer with a strong foundation in Core Java, Object-Oriented Programming, Data Structures, SQL, JDBC, Spring Core, and Spring JDBC, with experience in full-stack application development using Java and React.js. Seeking an opportunity to apply programming and backend development skills while growing expertise in enterprise Java development.',
  { lineGap: 2 }
);
doc.moveDown(0.8);

// Education
drawSectionHeader('Education');
doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('Full Stack Java Development', { continued: true });
doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Feb 2026 - Present', { align: 'right' });
doc.fontSize(9).font('Helvetica').fillColor(lightGray).text('Naresh IT, Hyderabad');
doc.moveDown(0.4);

doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('Shri Ramdeobaba College of Engineering and Management', { continued: true });
doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Dec 2021 - May 2025', { align: 'right' });
doc.fontSize(9).font('Helvetica').fillColor(lightGray).text('B.Tech in Electronics Engineering', { continued: true });
doc.fontSize(9).font('Helvetica-Bold').fillColor('#059669').text('  |  CGPA: 8.17', { align: 'left' });
doc.moveDown(0.8);

// Technical Skills
drawSectionHeader('Technical Skills');
doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('- Programming: ', { continued: true });
doc.font('Helvetica').fillColor(darkGray).text('Java');
doc.font('Helvetica-Bold').fillColor(primaryColor).text('- Core Java: ', { continued: true });
doc.font('Helvetica').fillColor(darkGray).text('OOP, Data Structures, Exception Handling, Collections, Multithreading');
doc.font('Helvetica-Bold').fillColor(primaryColor).text('- Java Web: ', { continued: true });
doc.font('Helvetica').fillColor(darkGray).text('JDBC, Servlets, JSP');
doc.font('Helvetica-Bold').fillColor(primaryColor).text('- Backend: ', { continued: true });
doc.font('Helvetica').fillColor(darkGray).text('Spring Core, Spring JDBC');
doc.font('Helvetica-Bold').fillColor(primaryColor).text('- Frontend: ', { continued: true });
doc.font('Helvetica').fillColor(darkGray).text('HTML5, CSS3, JavaScript, React.js, Tailwind CSS');
doc.font('Helvetica-Bold').fillColor(primaryColor).text('- Database: ', { continued: true });
doc.font('Helvetica').fillColor(darkGray).text('MySQL');
doc.font('Helvetica-Bold').fillColor(primaryColor).text('- Tools: ', { continued: true });
doc.font('Helvetica').fillColor(darkGray).text('Eclipse IDE, Git, GitHub, VS Code');
doc.moveDown(0.8);

// Internship
drawSectionHeader('Internship');
doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('Infosys Springboard 7.0 - Virtual Internship', { continued: true });
doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('2026 - Present', { align: 'right' });
doc.fontSize(9).font('Helvetica-Bold').fillColor('#0284C7').text('Selected - Project-Based Internship');
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text('• Selected for the Infosys Springboard 7.0 Virtual Internship Program and currently working on a project as part of the internship.', { lineGap: 1.5 });
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text('• Collaborating on project development and applying software development concepts to build and implement project requirements.', { lineGap: 1.5 });
doc.moveDown(0.8);

// Projects
drawSectionHeader('Projects');
doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('OneShop - Multivendor E-Commerce Platform | GitHub');
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text('• Developed a full-stack multivendor e-commerce application using Java, Spring Boot, React.js, and MySQL for customer, seller, and admin operations.');
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text('• Implemented REST APIs for user authentication, product management, seller operations, cart, and order management.');
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text('• Implemented role-based authentication and authorization using Spring Security and JWT and used Spring Data JPA/Hibernate for database persistence.');
doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#6C5CE7').text('Tech Stack: Java, Spring Boot, Spring Security, JWT, Spring Data JPA, Hibernate, MySQL, React.js');
doc.moveDown(0.5);

doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('Nutrifit | GitHub');
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text('• Developed a responsive web application providing nutritional analysis of food items using an external Nutrition API.');
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text('• Integrated external APIs for nutritional information and health-related news and built the interface using React.js and Tailwind CSS.');
doc.fontSize(8.5).font('Helvetica-Bold').fillColor('#0D9488').text('Tech Stack: React.js, Tailwind CSS, REST APIs');
doc.moveDown(0.8);

// Certifications
drawSectionHeader('Certifications');
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text('- Databases for Developers: Foundations - Oracle Dev Gym');
doc.fontSize(9).font('Helvetica').fillColor(darkGray).text('- SQL - HackerRank');
doc.moveDown(0.8);

// Achievements
drawSectionHeader('Achievements');
doc.fontSize(9).font('Helvetica-Bold').fillColor('#059669').text('- Design Patent Granted - Automated Microfluidic System for Flow and Pressure Control');

doc.end();

writeStream.on('finish', () => {
  console.log('Successfully generated public/resume.pdf');
});
