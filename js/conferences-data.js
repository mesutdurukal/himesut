// Conference Data Structure
const conferencesData = {
    upcoming: [
        { img: "ttf.png", alt: "Test Talks Festival", url: null }
    ],
    
    "2025": [
        { img: "2025.png", alt: "2025 Conferences", url: null },
        { img: "kwsqa.png", alt: "KWSQA Conference", url: null },
        { img: "softcon.png", alt: "SoftCon", url: null },
        { img: "hustefLogo.png", alt: "Hustef Conference", url: null },
        { img: "pnsqc.jpg", alt: "PNSQC Conference", url: null },
        { img: "handson.png", alt: "Hands-On Conference", url: "https://www.youtube.com/live/XaFqLMkMHpM" },
        { img: "kcdc.png", alt: "KCDC Conference", url: null },
        { img: "sparks.jpg", alt: "Sparks Conference", url: null },
        { img: "atd.png", alt: "ATD Conference", url: "https://youtu.be/lWlfRO4Fu9E" },
        { img: "a4q.png", alt: "A4Q Conference", url: "https://www.youtube.com/live/6SL_Js-JmzY" },
        { img: "cityjs.jpg", alt: "CityJS Conference", url: "https://youtu.be/4jQJ_R48VaU" },
        { img: "live2test.jpg", alt: "Live2Test Conference", url: null },
        { img: "stf.png", alt: "STF Conference", url: null },
        { img: "ndc.png", alt: "NDC Conference", url: "https://youtu.be/vXsO7YlflO0" },
        { img: "gsdc.png", alt: "GSDC Conference", url: null },
        { img: "jotb.jpg", alt: "JOTB Conference", url: "https://youtu.be/pvXyuuCZENc" },
        { img: "maythefourth.jpg", alt: "May the Fourth Conference", url: null },
        { img: "niigata.png", alt: "Niigata Conference", url: null },
        { img: "jasst.png", alt: "JaSST Conference", url: null },
        { img: "prod.png", alt: "Product Conference", url: "https://gitnation.com/contents/can-machines-learn-bug-language" },
        { img: "witd.png", alt: "WITD Conference", url: null },
        { img: "rsgt.jpg", alt: "RSGT Conference", url: "https://youtu.be/A7lPTnUPiXI" },
        { img: "conf42.png", alt: "Conf42", url: "https://youtu.be/fyx3x6MX7SU" }
    ],
    
    "2024": [
        { img: "2024.png", alt: "2024 Conferences", url: null },
        { img: "yava.png", alt: "YAVA Conference", url: null },
        { img: "festive.png", alt: "Festive Tech Conference", url: "https://youtu.be/d08CkYwE_1Q" },
        { img: "jsconfjp.png", alt: "JSConf JP", url: "https://youtu.be/s_iJA5WEe2Y" },
        { img: "testconeu.png", alt: "TestCon Europe", url: null },
        { img: "testflix.png", alt: "Testflix", url: "https://youtu.be/b1B5EubjNVM" },
        { img: "softcon.png", alt: "SoftCon", url: null },
        { img: "addo.png", alt: "ADDO Conference", url: null },
        { img: "handson.png", alt: "Hands-On Conference", url: "https://youtu.be/jtSKwIp9GZE" },
        { img: "testmu.jpg", alt: "TestMu Conference", url: "https://youtu.be/cnfHKyJgWEg" },
        { img: "kcdc.png", alt: "KCDC Conference", url: null },
        { img: "mstech.png", alt: "MS Tech Conference", url: null },
        { img: "developerweekeurope.png", alt: "Developer Week Europe", url: null },
        { img: "devopspro.png", alt: "DevOps Pro", url: null },
        { img: "ittage23.png", alt: "IT Tage 2023", url: null },
        { img: "maythefourth.jpg", alt: "May the Fourth Conference", url: null },
        { img: "witd.png", alt: "WITD Conference", url: null },
        { img: "jasst.png", alt: "JaSST Conference", url: null },
        { img: "booster.jpg", alt: "Booster Conference", url: null },
        { img: "webhack.png", alt: "WebHack Conference", url: "pages/webhack.html" },
        { img: "dw.jpg", alt: "Developer Week", url: null },
        { img: "worqference.png", alt: "Worqference", url: null },
        { img: "conf42.png", alt: "Conf42", url: "pages/conf42.html" },
        { img: "mottokyo.png", alt: "MOT Tokyo", url: "pages/mottokyo.html" },
        { img: "90days.png", alt: "90 Days of DevOps", url: "pages/90days.html" }
    ],
    
    "2023": [
        { img: "2023.png", alt: "2023 Conferences", url: null },
        { img: "festive.png", alt: "Festive Tech Conference", url: "pages/festive23.html" },
        { img: "testjs.png", alt: "TestJS Summit", url: null },
        { img: "devai.png", alt: "Dev AI Conference", url: null },
        { img: "yava.png", alt: "YAVA Conference", url: null },
        { img: "dss.png", alt: "DSS Conference", url: null },
        { img: "tas.png", alt: "TAS Conference", url: null },
        { img: "ucaatLogo.jpg", alt: "UCAAT Conference", url: null },
        { img: "atd.png", alt: "ATD Conference", url: null },
        { img: "addo.png", alt: "ADDO Conference", url: "pages/addo23.html" },
        { img: "hustefLogo.png", alt: "Hustef Conference", url: "pages/hustef23.html" },
        { img: "heisenbug.jpg", alt: "Heisenbug Conference", url: "pages/heisenbug23-2.html" },
        { img: "qualitycon.png", alt: "QualityCon", url: null },
        { img: "stw.png", alt: "Software Testing World", url: null },
        { img: "pnsqc.jpg", alt: "PNSQC Conference", url: null },
        { img: "qstagLogo.jpeg", alt: "Q-STAG Conference", url: null },
        { img: "testflix.png", alt: "Testflix", url: "pages/testflix23.html" },
        { img: "taipei.png", alt: "Taipei Conference", url: null },
        { img: "handson.png", alt: "Hands-On Conference", url: null },
        { img: "testmu.jpg", alt: "TestMu Conference", url: "pages/testmu.html" },
        { img: "scottish.png", alt: "Scottish Summit", url: "pages/scottish23.html" },
        { img: "stag.jpeg", alt: "STAG Conference", url: "pages/stag.html" },
        { img: "maythefourth.jpg", alt: "May the Fourth Conference", url: "pages/maythefourth.html" },
        { img: "sqd.png", alt: "SQD Conference", url: null },
        { img: "javadayist.jpg", alt: "Java Day Istanbul", url: "pages/javadayist.html" },
        { img: "agilemanchester.png", alt: "Agile Manchester", url: null },
        { img: "bugraptors.png", alt: "BugRaptors Conference", url: "pages/bugraptors.html" },
        { img: "skilup.jpeg", alt: "SkilUp Conference", url: "pages/skilup.html" },
        { img: "inflectra.jpg", alt: "Inflectra Conference", url: "pages/inflectra.html" },
        { img: "tokyo.png", alt: "Tokyo Conference", url: "pages/tokyo23.html" },
        { img: "heisenbug.jpg", alt: "Heisenbug Conference", url: "pages/heisenbug23.html" },
        { img: "witd.png", alt: "WITD Conference", url: "pages/witd.html" },
        { img: "ittage365.png", alt: "IT Tage 365", url: "pages/ittage365-23.html" },
        { img: "jasst.png", alt: "JaSST Conference", url: null },
        { img: "confoo.png", alt: "ConFoo Conference", url: null },
        { img: "dw.jpg", alt: "Developer Week", url: null },
        { img: "codegen.png", alt: "CodeGen Conference", url: "pages/codegen.html" },
        { img: "breakfree.png", alt: "Break Free Conference", url: "pages/breakfree.html" },
        { img: "jsworld.png", alt: "JS World Conference", url: "pages/jsworld.html" }
    ],
    
    // Add more years as needed...
};

// Podcasts & Tech Talks Data
const podcastsData = [
    { img: "qacast.png", alt: "QA Cast Podcast", url: "https://youtu.be/uNQALqs3-0I" },
    { img: "qatts.jpg", alt: "QA TTS Podcast", url: "https://youtu.be/Xlc1SgET3uQ" },
    { img: "testeryou.png", alt: "Tester You Podcast", url: "https://youtu.be/uOY4ltHaCns" },
    { img: "ejable.jpg", alt: "Ejable Podcast", url: "https://youtu.be/DQMYLENe9gI" },
    { img: "creativeTech.png", alt: "Creative Tech Podcast", url: "https://youtu.be/b1JyNRocZGs" },
    { img: "creativeTech.png", alt: "Creative Tech Podcast on Spotify", url: "https://open.spotify.com/episode/6IeoSfz68L9V9aK8m5IzNA" },
    { img: "richie.png", alt: "Richie's Podcast", url: "https://youtu.be/a_-1JILpLRI" },
    { img: "richie.png", alt: "Richie's Podcast on Spotify", url: "https://open.spotify.com/show/1Jo5HkUXGGEJOlfJW88w9W" },
    { img: "vitaly.jpg", alt: "Vitaly's Tech Talk", url: "https://youtu.be/5yd3IUJcgTk" },
    { img: "senor.jpg", alt: "Senor Testing", url: "https://www.youtube.com/live/qfv3tXgTcsM" }
];

// Interviews Data
const interviewsData = [
    { img: "agileindia.png", alt: "Agile India Interview", url: "https://confengine.com/conferences/agile-india-2022/speaker/interview/mesut-durukal?utm_source=twitter&utm_medium=organicsocial&utm_campaign=speakerinterviews" },
    { img: "mentorifi.jpg", alt: "Mentorifi Interview", url: "https://mentorifi.eventible.com/speakers-corner-featuring-mesut-durukal-quality-assurance-automation-engineer-indeed-com/" },
    { img: "infoq.png", alt: "InfoQ Interview", url: "https://www.infoq.com/news/2021/03/machine-learning-testing/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=culture-methods" },
    { img: "bugraptors.png", alt: "BugRaptors Interview", url: "https://www.bugraptors.com/blog/tech-talks-with-mesut-durukal" },
    { img: "ejable.jpg", alt: "Ejable Interview", url: "https://www.ejable.com/interviews-with-engineers-in-japan/interview-with-mesut-durukal-of-indeed-japan/" },
    { img: "stw.png", alt: "Software Testing World Interview", url: "https://www.bigdataworldasia.com/show-news/ai-meets-software-testing-insights-indeeds-mesut-durukal" },
    { img: "tribe.png", alt: "Test Tribe Interview", url: "https://www.thetesttribe.com/blog/roadmap-playwright-tool/?" },
    { img: "creativeTech.png", alt: "Creative Tech Interview", url: "https://medium.com/@KaoreenRei/moving-to-tokyo-from-abroad-with-technology-skills-30-b0ba41a2ea3b" }
];

// Books & Contributions Data
const booksData = [
    { img: "amazon.png", alt: "Book on Amazon", url: "https://www.amazon.com/Searching-Website-Via-Spoken-Questions/dp/3846508144" },
    { img: "80testers.jfif", alt: "Around The World With 80 Software Testers", url: "https://leanpub.com/AroundTheWorldWith80SoftwareTesters" },
    { img: "80testersFromHome.jfif", alt: "Software People Work From Home", url: "https://leanpub.com/softwarepeopleworkfromhome" }
];

// Articles Data
const articlesData = [
    { img: "ieee.png", alt: "IEEE Article", url: "https://ieeexplore.ieee.org/document/7129820" },
    { img: "tm.gif", alt: "ThinkMind Article", url: "http://www.thinkmind.org/index.php?view=instance&instance=VALID+2019" },
    { img: "iiste.jpg", alt: "IISTE Article", url: "https://www.iiste.org/Journals/index.php/JSTR/article/view/23702/24273" },
    { img: "ij.png", alt: "IJSRCSEIT Article", url: "http://ijsrcseit.com/archive.php?v=5&i=28&pyear=2019" },
    { img: "agile2021.png", alt: "Agile Alliance Paper", url: "https://www.agilealliance.org/wp-content/uploads/2021/06/M.Durukal.Do-Bugs-Speak.pdf" },
    { img: "pnsqc.jpg", alt: "PNSQC Paper", url: "https://www.pnsqc.org/docs/PROP54426337-DurukalFinal_Camera-Ready.pdf" }
];

// Travel Data
const travelData = [
    { img: "icon_turkey.png", alt: "Turkey", url: "pages/turkey.html" },
    { img: "icon_ger.png", alt: "Germany", url: "pages/germany.html" },
    { img: "icon_bosnia.png", alt: "Bosnia", url: "pages/bosnia.html" },
    { img: "icon_croatia.png", alt: "Croatia", url: "pages/croatia.html" },
    { img: "icon_france.png", alt: "France", url: "pages/france.html" },
    { img: "icon_italy.png", alt: "Italy", url: "pages/italy.html" },
    { img: "icon_holland.png", alt: "Netherlands", url: "pages/holland.html" },
    { img: "icon_montenegro.png", alt: "Montenegro", url: "pages/montenegro.html" },
    { img: "icon_spain.png", alt: "Spain", url: "pages/spain.html" },
    { img: "icon_czech.png", alt: "Czech Republic", url: "pages/czech.html" },
    { img: "icon_hungary.png", alt: "Hungary", url: "pages/hungary.html" },
    { img: "icon_austria.png", alt: "Austria", url: "pages/austria.html" },
    { img: "icon_belgium.png", alt: "Belgium", url: "pages/belgium.html" },
    { img: "icon_portugal.png", alt: "Portugal", url: "pages/portugal.html" },
    { img: "icon-japan.jpg", alt: "Japan", url: "pages/japan.html" },
    { img: "icon_greece.png", alt: "Greece", url: "pages/greece.html" },
    { img: "icon_usa.png", alt: "United States", url: "pages/usa.html" },
    { img: "icon_canada.png", alt: "Canada", url: "pages/canada.html" },
    { img: "icon_england.png", alt: "England", url: "pages/england.html" },
    { img: "icon_singapore.png", alt: "Singapore", url: "pages/singapore.html" },
    { img: "icon_taiwan.png", alt: "Taiwan", url: "pages/taiwan.html" },
    { img: "icon_thai.png", alt: "Thailand", url: "pages/thailand.html" },
    { img: "icon_phi.png", alt: "Philippines", url: "pages/philiphines.html" },
    { img: "icon_vietnam.png", alt: "Vietnam", url: "pages/vietnam.html" }
];
