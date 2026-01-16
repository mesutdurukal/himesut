const DATA = {
    "AB Testing": [
        {
            title: "Managing Experiments and Behavior Dynamically with Proctor",
            speakers: ["Matt Schemmel", "Tom Bergman"],
            event: "@IndeedEng Talks",
            city: "Austin",
            year: 2013,
            url: "https://www.youtube.com/watch?v=Q1T5J0KXUwY"
        },
        {
            title: "Data-Driven Product Design",
            speakers: ["J Christopher Garcia", "Chris Hyams"],
            event: "@IndeedEng Talks",
            city: "Austin",
            year: 2013,
            url: "https://www.youtube.com/watch?v=Y6NI8y21xhg"
        },
        {
            title: "Beyond A/B: Test automation approaches for web variants from A to Z",
            speakers: ["Giuseppe Donati"],
            event: "Hustef",
            city: "Budapest",
            year: 2025,
            url: "https://www.youtube.com/watch?v=M2AX7NvdDKc"
        }
    ],
    "o11y & monitoring": [
        {
            title: "Logrepo: Enabling Data-Driven Decisions",
            speakers: ["Jeff Chien", "Jason Koppe"],
            event: "IndeedEng Talks",
            city: "Austin",
            year: 2012,
            url: "https://www.youtube.com/watch?v=y0WC1cxLsfo"
        }
    ],
    "i18n": [
        {
            title: "Launching Indeed Around the World",
            speakers: ["Davide Novelli","David Tulig"],
            event: "@IndeedEng Talks",
            city: "Austin",
            year: 2013,
            url: "https://www.youtube.com/watch?v=WcutrMiAhLk"
        },
        {
            title: "Tokens and Millicents",
            speakers: ["Dan Heller","Preetha Appan"],
            event: "@IndeedEng Talks",
            city: "Austin",
            year: 2014,
            url: "https://www.youtube.com/watch?v=JMVEmzkh7II"
        },
        {
            title: "Eita! Why Internationalization and Localization matter",
            speakers: ["Nicolle Cysneiros"],
            event: "DjangoCon 2019",
            city: "San Diego",
            year: 2019,
            url: "https://www.youtube.com/watch?v=ByqODbNBE4M"
        },
        {
            title: "End-to-End i18n",
            speakers: ["Luke Ehresman"],
            event: "React Conference",
            city: "Gazelle USA",
            year: 2021,
            url: "https://www.youtube.com/watch?v=hpUWx6F5QOM"
        },
        {
            title: "Building Angular apps with internationalization (i18n) in mind",
            speakers: ["Naomi Meyer"],
            event: "Angular Connect",
            city: "London",
            year: 2019,
            url: "https://www.youtube.com/watch?v=cUDUqqOtBvM"
        },
        {
            title: "Internationalization is a Piece of Cake",
            speakers: ["Eli Schutze Ramirez"],
            event: "GOTO 2019",
            city: "Copenhagen",
            year: 2019,
            url: "https://www.youtube.com/watch?v=nsGmQ0v36bo"
        },
        {
            title: "Pardon my French or The technical aspects of i18n and l10n",
            speakers: ["Andreas Heigl"],
            event: "Fwdays PHP",
            city: "Online",
            year: 2024,
            url: "https://www.youtube.com/watch?v=2G4PKa6eFX8"
        }
    ],
    "Exploratory Testing": [
        {
            title: "Getting The Most Out of Team Exploratory Testing Sessions",
            speakers: ["Julia DURÁN"],
            event: "Hustef",
            city: "Budapest",
            year: 2023,
            url: "https://www.youtube.com/watch?v=Niof-eVb9wc"
        }
    ],
    "Test Smells & Flakiness": [
        {
            title: "What's That Smell? Identify Code Smells, Clean Up Test Code",
            speakers: ["Angie Jones"],
            event: "SauceCon",
            city: "Austin",
            year: 2019,
            url: "https://www.youtube.com/watch?v=w_SHQFzOosg"
        },
        {
            title: "CI and the great flakiness adventure",
            speakers: ["Simon Stewart"],
            event: "HUSTEF 2025 meet-up",
            city: "Budapest, Hungary",
            year: 2025,
            url: "https://youtu.be/sDzuS8T46mQ"
        }
    ],
    "Mutation Testing": [
        {
            title: "Kill All Mutants! (Intro to Mutation Testing)",
            speakers: ["Dave Aronson"],
            event: "ACCU",
            city: "Bristol, UK",
            year: 2022,
            url: "https://www.youtube.com/watch?v=u78zWfkCZ1Q"
        },
        {
            title: "Kill All Mutants! (Intro to Mutation Testing)",
            speakers: ["Dave Aronson"],
            event: "NDC",
            city: "Sydney, Australia",
            year: 2020,
            url: "https://youtu.be/vQrnVD6CbxU"
        }
    ],
    "Test Automation Patterns": [
        {
            title: "Design patterns to boost your test automation",
            speakers: ["Christian BAUMANN"],
            event: "Hustef",
            city: "Budapest",
            year: 2023,
            url: "https://www.youtube.com/watch?v=yGq4lRc7Cvo"
        }
    ],
    "Code Review": [
        {
            title: "Looks GREAT To Me: Getting Past Bare Minimum Code Reviews",
            speakers: ["Adrienne Braganza Tacke"],
            event: "Shift Conference",
            city: "Zadar, Croatia",
            year: 2024,
            url: "https://www.youtube.com/watch?v=1FdcIvfSi_A"
        },
        {
            title: "Better Code Reviews FTW!",
            speakers: ["Tess Ferrandez-Norlander"],
            event: "NDC London",
            city: "London",
            year: 2024,
            url: "https://www.youtube.com/watch?v=VuG4QhA89es"
        },
        {
            title: "Better Code Reviews FTW!",
            speakers: ["Tess Ferrandez-Norlander"],
            event: "NDC Copenhagen",
            city: "Copenhagen",
            year: 2025,
            url: "https://youtu.be/2vacqx2ISms"
        },
        {
            title: "How to Do Code Reviews Like a Human",
            speakers: ["Michael Lynch"],
            event: "PyGotham",
            city: "New York",
            year: 2018,
            url: "https://youtu.be/0t4_MfHgb_A"
        }
    ],
    "UI/UX": [
        {
            title: "The Chips and Pickle Story: What's Really Behind Infamous, Historic UI Failures?",
            speakers: ["Dean Schuster"],
            event: "NDC",
            city: "Copenhagen, Denmark",
            year: 2025,
            url: "https://youtu.be/D1bTz3ez7V8"
        },            {
            title: "A Tester's UX Diaries: Lessons Learned from Frustrating User Experiences",
            speakers: ["Prashant Hegde"],
            event: "HUSTEF",
            city: "Budapest, Hungary",
            year: 2025,
            url: "https://youtu.be/pN56mUiNdcs"
        }
    ],
    "Git": [
        {
            title: "Git, Bildiğiniz Gibi Değil",
            speakers: ["Lemi Orhan Ergin"],
            event: "Internal",
            city: "Online",
            year: 2025,
            url: "https://youtu.be/OOmsCltczCA"
        }
    ],
    "API Testing": [
        {
            title: "API testing journey through web protocols",
            speakers: ["Dawid Pacia"],
            event: "Hustef",
            city: "Budapest, Hungary",
            year: 2025,
            url: "https://youtu.be/Q9XgVT8m2hc"
        }
    ],
    "Contract Testing": [
        {
            title: "Contracts for Hire",
            speakers: ["Craig Risi"],
            event: "Hustef",
            city: "Budapest, Hungary",
            year: 2025,
            url: "https://youtu.be/mIL46wIrq6w"
        }
    ],
    "Monitoring / Metrics": [
        {
            title: "Putting the Q in DevEx",
            speakers: ["Martijn Goossens"],
            event: "Hustef",
            city: "Budapest, Hungary",
            year: 2025,
            url: "https://youtu.be/pP4BdmQsFbs"
        }
    ],
    "Tester Relations / Communication": [
        {
            title: "Be a Better Test Friend to Your Team",
            speakers: ["Martijn Goossens"],
            event: "TestCon",
            city: "Vilnius, Lithuania",
            year: 2024,
            url: "https://youtu.be/kNR3RxtKCvc"
        }
    ],
    "Social / Personal": [
        {
            title: "Succeeding as an introvert",
            speakers: ["Elizabeth Zagroba"],
            event: "Dutch PHP Conference",
            city: "Netherlands",
            year: 2017,
            url: "https://youtu.be/3SdoCJQsXB4"
        }
    ],
    "Agentic AI / LLMs": [
        {
            title: "From Faster Tests to Smarter Strategies: Agentic AI in Quality Engineering",
            speakers: ["Manoj Kumar"],
            event: "Testing Talks",
            city: "Melbourne, Australia",
            year: 2025,
            url: "https://youtu.be/BSPIsWbqWqU"
        }
    ],
    "Robots / Warehouse Automation": [
        {
            title: "How to train your robot?",
            speakers: ["Irja Straus"],
            event: "Hustef",
            city: "Budapest, Hungary",
            year: 2025,
            url: "https://youtu.be/TxTqsuL4HcE"
        }
    ]
};
