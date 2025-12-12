// Recordings data organized by category
const recordingsData = {
    "Warehouse Automation Testing": [
        { url: "https://youtu.be/WlgaquXdmx0", img: "teaser.jpg" },
        { url: "https://youtu.be/Sj7GOuPsuqQ", img: "sample.jpg" },
        { url: "https://youtu.be/yr0jIhX0XmM", img: "sample.jpg" },
        { url: "https://youtu.be/7DSKsfJBPLQ", img: "heisenbug.jpg" },
        { url: "https://youtu.be/yr0jIhX0XmM", img: "witd.png" },
        { url: "https://youtu.be/5FF7ycjRKOw", img: "handson.png" },
        { url: "https://youtu.be/rXOBLO5JUyk", img: "pnsqc.jpg" },
        { url: "https://youtu.be/pwx8HZM41GM", img: "hustefLogo.png" }
    ],
    "Teamwork": [
        { url: "https://youtu.be/3K8_GOcV2jg", img: "mottokyo.png" },
        { url: "https://youtu.be/8U8wmXzQZRg", img: "sample.jpg" }
    ],
    "Reliable Pipeline": [
        { url: "https://youtu.be/id8itz0qvLQ", img: "sample.jpg" },
        { url: "https://youtu.be/d08CkYwE_1Q", img: "festive.png" },
        { url: "https://youtu.be/UjGD64fBF44", img: "engflow.png" }
    ],
    "TQM": [
        { url: "https://youtu.be/PvZE--CG4hA", img: "teaser.jpg" },
        { url: "https://youtu.be/mXONr5S7dFc", img: "pnsqc.jpg" }
    ],
    "Level Up Your Career": [
        { url: "https://youtu.be/gMVRyG8q6rs", img: "teaser.jpg" }
    ],
    "How Not To Test": [
        { url: "https://youtu.be/TFEBiAnukoE", img: "teaser.jpg" }
    ],
    "Code Review": [
        { url: "https://youtu.be/6jkBYqPR5PY", img: "teaser.jpg" },
        { url: "https://youtu.be/_5FdUFfaSFY", img: "sample.jpg" },
        { url: "https://youtu.be/iRbNkCqB-V4", img: "testflix.png" }
    ],
    "Quality Guide": [
        { url: "https://youtu.be/ibP8g30EaDk", img: "teaser.jpg" },
        { url: "https://youtu.be/HKYczLey4dM", img: "sample.jpg" },
        { url: "https://youtu.be/6Mxo9PKlNPM", img: "sample.jpg" },
        { url: "https://youtu.be/MXiBt54yEvU", img: "sample.jpg" },
        { url: "https://youtu.be/4nuiaPMeooM", img: "kariera.png" },
        { url: "https://youtu.be/I0aXCPl6N3g", img: "yava.png" },
        { url: "https://youtu.be/OR9MGKG-L7g", img: "agileindia.png" },
        { url: "https://youtu.be/jAAMd5UDnLI", img: "teaser.jpg" },
        { url: "https://youtu.be/B4ktqnUlf-c", img: "sample.jpg" },
        { url: "https://youtu.be/we7MJHmIDK0", img: "sample.jpg" },
        { url: "https://youtu.be/Jsr4SM112OA", img: "sample.jpg" },
        { url: "https://youtu.be/Sv6PT_l04n4", img: "sample.jpg" },
        { url: "https://player.vimeo.com/video/820542043", img: "skilup.jpeg" },
        { url: "https://youtu.be/GWE7Qe8QaIo", img: "agilille.png" },
        { url: "https://youtu.be/rZKwOFUNgJM", img: "testflix.png" },
        { url: "https://youtu.be/GNNswKS6mHU", img: "ankara22.jpg" },
        { url: "https://youtu.be/776fQ-qZ5Nk", img: "ucaatLogo.jpg" },
        { url: "https://youtu.be/fyx3x6MX7SU", img: "conf42.png" },
        { url: "https://youtu.be/4jQJ_R48VaU", img: "cityjs.jpg" }
    ],
    "Using Cypress to Improve Test Reusability": [
        { url: "https://youtu.be/ynydengyZbM", img: "teaser.jpg" },
        { url: "https://youtu.be/6KSzyibHYWc", img: "sample.jpg" },
        { url: "https://youtu.be/WTZhmgJXSos", img: "festive.png" },
        { url: "https://youtu.be/Pyeqnd8GL3k", img: "jsworld.png" },
        { url: "https://youtu.be/43fP9Vt8hX0", img: "codegen.png" },
        { url: "https://youtu.be/Dvkr0yG6Ngg", img: "heisenbug.jpg" }
    ],
    "Testing as a Service": [
        { url: "https://youtu.be/q5k06zagUBk", img: "teaser.jpg" },
        { url: "https://youtu.be/qSVStOtnAoQ", img: "sample.jpg" },
        { url: "https://youtu.be/rAqkf55KviM", img: "sample.jpg" },
        { url: "https://youtu.be/CAGm5pnVmfY", img: "addo.png" },
        { url: "https://youtu.be/RN0rHWdTLOY", img: "javadayist.jpg" },
        { url: "https://youtu.be/xO5vpMknQtA", img: "bugraptors.png" },
        { url: "https://youtu.be/svbz3g9FXxQ", img: "stag.jpeg" },
        { url: "https://youtu.be/80YNZXZIRE0", img: "festive.png" },
        { url: "https://youtu.be/-OzxBp5Z89U", img: "testmu.jpg" },
        { url: "https://youtu.be/s_iJA5WEe2Y", img: "jsconfjp.png" }
    ],
    "E2E Test Automation Frameworks": [
        { url: "https://youtu.be/VDV2zCoM4Dw", img: "teaser.jpg" },
        { url: "https://youtu.be/EpEEORKG2_A", img: "teaser.jpg" },
        { url: "https://youtu.be/Oyc-M169sMk", img: "sample.jpg" },
        { url: "https://youtu.be/6P9hyYwW6bI", img: "sample.jpg" },
        { url: "https://youtu.be/8T54HXinFyI", img: "sample.jpg" },
        { url: "https://youtu.be/N0aZn0-t6kM", img: "breakfree.png" },
        { url: "https://youtu.be/pdk1UPVASx0", img: "testflix.png" }
    ],
    "Building Quality": [
        { url: "https://youtu.be/gSDAFxm6nH4", img: "teaser.jpg" },
        { url: "https://youtu.be/ZSRTBeRQDHs", img: "sample.jpg" },
        { url: "https://youtu.be/K2z0n8J3g5o", img: "inflectra.jpg" },
        { url: "https://youtu.be/i9GJ1daqeMY", img: "agilearizona.png" }
    ],
    "QA as a Devops Touchstone": [
        { url: "https://youtu.be/psf1YiB9iyQ", img: "teaser.jpg" },
        { url: "https://youtu.be/T62kuSAnU0Q", img: "sample.jpg" },
        { url: "https://youtu.be/RsGZudfRbio", img: "conf42.png" }
    ],
    "Hardware Testing": [
        { url: "https://youtu.be/2byxBZ6b7Yc", img: "teaser.jpg" }
    ],
    "Zen of Testing": [
        { url: "https://youtu.be/pvXyuuCZENc", img: "jotb.jpg" },
        { url: "https://youtu.be/vKpVlrWufug", img: "hustefLogo.png" }
    ],
    "Keyword Driven Testing": [
        { url: "https://youtu.be/V4AVg0bXyb4", img: "teaser.jpg" }
    ],
    "Crafting a User Friendly Test Automation Framework": [
        { url: "https://youtu.be/nVj7ht4dQv4", img: "teaser.jpg" },
        { url: "https://youtu.be/krYT8ywlRfU", img: "sample.jpg" },
        { url: "https://youtu.be/jtSKwIp9GZE", img: "handson.png" }
    ],
    "Being a Tester": [
        { url: "https://youtu.be/qK-6IU2KzSM", img: "teaser.jpg" },
        { url: "https://youtu.be/tYMfGLiJY4o", img: "sample.jpg" },
        { url: "https://youtu.be/tYMfGLiJY4o", img: "ittage2022.png" },
        { url: "https://youtu.be/FbeYvlWRBGU", img: "tokyo.png" },
        { url: "https://youtu.be/YDQzVyfrwFM", img: "pnsqc.jpg" }
    ],
    "Evolution of Software Testing": [
        { url: "https://youtu.be/h_gzA96N1Sg", img: "teaser.jpg" },
        { url: "https://youtu.be/zvhFJHY0wUk", img: "sample.jpg" },
        { url: "https://youtu.be/ac_lq6A_MI8", img: "testconeu.png" },
        { url: "https://youtu.be/GGvQ1y1KmQM", img: "pnsqc.jpg" },
        { url: "https://youtu.be/WxKC389C-jM", img: "ittage2022.png" },
        { url: "https://youtu.be/M658BtALxOo", img: "atd.png" },
        { url: "https://youtu.be/Q2Uu6TFPYJA", img: "ucaatLogo.jpg" },
        { url: "https://youtu.be/5O15Epx3HRw", img: "testcon.png" }
    ],
    "Successful Agile Test Automation": [
        { url: "https://youtu.be/vzqOqcYiGq0", img: "teaser.jpg" },
        { url: "https://youtu.be/LLS1C3e9P7g", img: "sample.jpg" },
        { url: "https://youtu.be/kLx1uzTqrvQ", img: "webhack.png" },
        { url: "https://youtu.be/a4GcWFLYfI0", img: "testconeu.png" },
        { url: "https://youtu.be/yH-c3-w7Ba4", img: "addo.png" },
        { url: "https://youtu.be/j9egdel7EXc", img: "hustef2020Logo.png" },
        { url: "https://youtu.be/YW9mSKykuAw", img: "scottish.png" },
        { url: "https://youtu.be/3X0UbB2t-MM", img: "techorama.png" },
        { url: "https://youtu.be/GRpggUVQjY4", img: "qaday.png" },
        { url: "https://youtu.be/xIumtXHJNfQ", img: "yava.png" },
        { url: "https://youtu.be/c5ILG8fjW5M", img: "ucaatLogo.jpg" },
        { url: "https://youtu.be/fLFuV5nFtyE", img: "tsqa.jpg" },
        { url: "https://youtu.be/UMJLZbgy9xY", img: "buildstuff.png" },
        { url: "https://youtu.be/n0A9OmPf4U4", img: "qstagLogo.jpeg" },
        { url: "https://youtu.be/7-gmfuyBzbg", img: "ittage2022.png" }
    ],
    "Bug Management": [
        { url: "https://youtu.be/cezToUlyZCY", img: "teaser.jpg" },
        { url: "https://youtu.be/MwUHBPCbZF4", img: "sample.jpg" },
        { url: "https://youtu.be/ACw13Tncz8k", img: "agilille.png" },
        { url: "https://youtu.be/yF_HMd4zPZc", img: "palousa.png" },
        { url: "https://youtu.be/S4myxSw2xdU", img: "agile2021.png" },
        { url: "https://youtu.be/yM1b6hCN3bg", img: "tesinguy.png" },
        { url: "https://youtu.be/vvrvrYl7F9E", img: "hustef2020Logo.png" },
        { url: "https://youtu.be/kMVUxbkDQYc", img: "gtr.png" },
        { url: "https://youtu.be/GfZ8Mrfl9zI", img: "handson.png" },
        { url: "https://youtu.be/CNnjdkWG7CA", img: "tokyo.png" },
        { url: "https://youtu.be/XrmP2h9zyFk", img: "ittage365.png" },
        { url: "https://youtu.be/lWlfRO4Fu9E", img: "atd.png" },
        { url: "https://www.youtube.com/live/6SL_Js-JmzY", img: "a4q.png" }
    ],
    "Machine Learning in Software Testing": [
        { url: "https://youtu.be/hV3E_m-j2tI", img: "teaser.jpg" },
        { url: "https://youtu.be/XkIhp7ZxyrQ", img: "iariaLogo.png" },
        { url: "https://youtu.be/ORTYqpdrdOg", img: "testingstagelogo.png" },
        { url: "https://youtu.be/6bWtIx1wOZk", img: "dataxdays.png" },
        { url: "https://youtu.be/KsFKz9PqEb0", img: "palousa.png" },
        { url: "https://youtu.be/pR9z7C-_xHA", img: "globalai.png" },
        { url: "https://youtu.be/JecgYHFu0Mo", img: "aadays.png" },
        { url: "https://youtu.be/25abr1QG-jM", img: "devopscairo.jpg" },
        { url: "https://youtu.be/FI0tDWuuvRs", img: "testcon.png" },
        { url: "https://youtu.be/yqWJcXlHw1I", img: "ndcsydney.png" },
        { url: "https://youtu.be/Fr-uAnJ-o40", img: "scottish.png" },
        { url: "https://youtu.be/nKwfX-A8F4Q", img: "buildstuff.png" },
        { url: "https://youtu.be/CatMs_BXhUY", img: "tesenalogo.png" },
        { url: "https://youtu.be/McCHHCl2uwA", img: "aginextlogo.png" },
        { url: "https://youtu.be/wDPdewjEYOA", img: "voxxedthes.jpg" },
        { url: "https://youtu.be/XnoPGgT_COE", img: "heisenbug.jpg" }
    ],
    "Test Smells": [
        { url: "https://youtu.be/cc4xdh_bpoM", img: "hustefLogo.png" },
        { url: "https://youtu.be/dCJWJ0bJFCc", img: "tesenalogo.png" },
        { url: "https://youtu.be/8_Xbc1EzqmM", img: "devopspro.png" },
        { url: "https://youtu.be/fS2UoOi1rTY", img: "wfh.png" },
        { url: "https://youtu.be/SCsHBwSBqtk", img: "devopsdaysist.png" },
        { url: "https://youtu.be/6qwxXWCHKts", img: "ittage2022.png" }
    ],
    "Quality Metrics": [
        { url: "https://youtu.be/Lhh9Hm3dyvI", img: "teaser.jpg" },
        { url: "https://youtu.be/V4Uzhwj2vgs", img: "sample.jpg" },
        { url: "https://youtu.be/cnfHKyJgWEg", img: "testmu.jpg" },
        { url: "https://youtu.be/2S61e14sBVI", img: "dw.jpg" },
        { url: "https://youtu.be/jpoNepJP2fk", img: "paristest.png" },
        { url: "https://youtu.be/ZZ5XU5als9c", img: "devconf.png" },
        { url: "https://youtu.be/V4Uzhwj2vgs", img: "witd.png" },
        { url: "https://youtu.be/A7lPTnUPiXI", img: "rsgt.jpg" }
    ],
    "Best Development Skill: Quality Assurance": [
        { url: "https://youtu.be/fb6sM3Br4ec", img: "tokyo.png" }
    ],
    "Usability": [
        { url: "https://youtu.be/CESDJVFkCo8", img: "sample.jpg" }
    ],
    "Testing A Cloud-Based IoT Platform": [
        { url: "https://youtu.be/C-kAhsNPdhI", img: "cloudouest.png" }
    ],
    "The Quality Odyssey, The Six Labors of the Tester": [
        { url: "https://youtu.be/-2iD22Ynri8", img: "teaser.jpg" },
        { url: "https://youtu.be/Y9cjx70mFik", img: "sample.jpg" },
        { url: "https://www.youtube.com/live/XaFqLMkMHpM", img: "handson.png" }
    ]
};
