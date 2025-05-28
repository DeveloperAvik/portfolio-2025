// import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
// import logo from './logo.png';
// import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_img.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    // logo,
    // logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'Software Development',
        description: 'Web development is the process of building, programming, and maintaining websites or web apps using modern stacks like MERN.',
        link: '/services/software-development'
    },
    {
        icon: assets.mobile_icon,
        title: 'Web/App Development',
        description: 'Web/App development involves creating responsive and high-performance applications for iOS and Android platforms.',
        link: '/services/mobile-app'
    },
    {
        icon: assets.security_icon,
        title: 'Cybersecurity & Pentesting',
        description: 'Security assessments, bug bounty testing, and penetration testing services to uncover and mitigate vulnerabilities in web applications.',
        link: '/services/cybersecurity'
    },
    {
        icon: assets.education_icon,
        title: 'Technical Education & Mentorship',
        description: 'Cybersecurity courses, YouTube tutorials, and one-on-one mentorship to empower learners and aspiring professionals.',
        link: '/services/education'
    },
    {
        icon: assets.tools_icon,
        title: 'Security Tooling & Automation',
        description: 'Custom tool development for recon, scanning, and automation to streamline offensive security operations.',
        link: '/services/security-tools'
    }
];

export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Languages & Technologies',
        description: 'HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Redux, Python, Django, DBMS, Prism, C, C++, Java'
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'Bachelor of Technology (B.Tech) in Computer Science'
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Projects',
        description: 'Built and deployed over 70+ full-stack and cybersecurity-focused projects.'
    }
];

export const experienceData = [
    {
        role: 'Cybersecurity Consultant',
        company: 'ThinkCloudly – California, United States',
        period: 'May 2025 – Present',
        description:
            'Provided security assessments, penetration testing, and vulnerability mitigation for web applications and cloud systems. Collaborated with dev teams to implement secure coding practices and fix issues like XSS, IDOR, and auth flaws.'
    },
    {
        role: 'Freelance Bug Hunter',
        company: 'Bugcrowd – Kolkata, India',
        period: 'Oct 2024 – Present',
        description:
            'Identified real-world vulnerabilities across various web apps, reported 30+ valid bugs, and conducted manual testing, recon, and exploit development.'
    },
    {
        role: 'Instructor',
        company: 'Udemy – California, United States',
        period: 'Sep 2024 – Present',
        description:
            'Delivered cybersecurity courses covering ethical hacking, web app security, and pentesting. Trained over 600 students via video content and direct support.'
    },
    {
        role: 'CEO & Software Development Engineer',
        company: 'Tytosoft',
        period: 'Mar 2023 – Present',
        description:
            'Led a team to build impactful software solutions. Managed full project cycles from concept to deployment with a focus on innovation and scalability.'
    },
    {
        role: 'Full Stack Web Developer (MERN)',
        company: 'Fn\'s Software',
        period: '2022 – Present',
        description:
            'Built and maintained modern full-stack web applications using the MERN stack. Integrated APIs, handled authentication, and optimized for performance.'
    },
    {
        role: 'Offensive Security Content Creator',
        company: 'YouTube',
        period: 'Apr 2022 – Present',
        description:
            'Published 50+ ethical hacking and pentesting tutorials. Grew a community of 600+ subscribers and 10K+ views focused on real-world security skills.'
    }
];


export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];