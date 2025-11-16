// Dynamic page content data
// This file contains all content that was previously in 256 separate HTML files

const pagesData = {
    // Conference/Talk pages (video embeds)
    conferences: {
        'addo': {
            type: 'video',
            videoId: 'yH-c3-w7Ba4',
            title: 'ADDO Conference'
        },
        'addo23': {
            type: 'video',
            videoId: 'yH-c3-w7Ba4',
            title: 'ADDO Conference 2023'
        },
        'festive': {
            type: 'video',
            videoId: '80YNZXZIRE0',
            title: 'Festive Tech Calendar',
            link: { url: 'https://festivetechcalendar.com/', text: 'Festive Tech Calendar' }
        },
        'festive23': {
            type: 'video',
            videoId: '80YNZXZIRE0',
            title: 'Festive Tech Calendar 2023',
            link: { url: 'https://festivetechcalendar.com/', text: 'Festive Tech Calendar' }
        },
        'webhack': {
            type: 'video',
            videoId: 'example',
            title: 'WebHack Conference'
        },
        'conf42': {
            type: 'video',
            videoId: 'example',
            title: 'Conf42'
        },
        'mottokyo': {
            type: 'video',
            videoId: 'example',
            title: 'MOT Tokyo'
        },
        '90days': {
            type: 'video',
            videoId: 'example',
            title: '90 Days of DevOps'
        }
        // Add more conference pages as needed
    },
    
    // Travel pages (photo galleries)
    travel: {
        'turkey': {
            type: 'gallery',
            title: 'Turkey',
            images: [
                { src: 'travel_istanbul.jpg', caption: 'Istanbul' },
                { src: 'travel_kapadokya.jpg', caption: 'Kapadokya' },
                { src: 'travel_safranbolu.jpg', caption: 'Safranbolu' },
                { src: 'travel_alanya.jpg', caption: 'Alanya', size: 'col-md-6' },
                { src: 'travel_demre.jpg', caption: 'Demre', size: 'col-md-6' },
                { src: 'travel_kas.jpg', caption: 'Kas' },
                { src: 'travel_alacati.jpg', caption: 'Alacati' },
                { src: 'travel_sigacik.jpg', caption: 'Sigacik' },
                { src: 'travel_bodrum.jpg', caption: 'Bodrum' },
                { src: 'travel_datca.jpg', caption: 'Datca' },
                { src: 'travel_golyazi.jpg', caption: 'Golyazı' },
                { src: 'travel_antakya.jpg', caption: 'Antakya' },
                { src: 'travel_adana.jpg', caption: 'Adana' },
                { src: 'travel_assos.jpg', caption: 'Assos' },
                { src: 'travel_adatepe.jpg', caption: 'Adatepe' },
                { src: 'travel_kkuyu.jpg', caption: 'Kucukkuyu' },
                { src: 'travel_sdere.jpg', caption: 'Sahindere' }
            ]
        },
        'japan': {
            type: 'gallery',
            title: 'Japan',
            images: [
                { src: 'travel_tokyo.jpg', caption: 'Tokyo' },
                { src: 'travel_kyoto.jpg', caption: 'Kyoto' },
                { src: 'travel_nara.jpg', caption: 'Nara' },
                { src: 'travel_nikko.jpg', caption: 'Nikko' },
                { src: 'travel_hakone.jpg', caption: 'Hakone' },
                { src: 'travel_chiba.jpg', caption: 'Chiba' },
                { src: 'travel_shirakawa.jpg', caption: 'Shirakawa-go' },
                { src: 'travel_fuji.jpg', caption: 'Mount Fuji' },
                { src: 'travel_okinawa.jpg', caption: 'Okinawa' }
            ]
        },
        'germany': {
            type: 'gallery',
            title: 'Germany',
            images: []  // Add images as needed
        },
        'france': {
            type: 'gallery',
            title: 'France',
            images: []
        }
        // Add more travel destinations as needed
    },
    
    // Technical tutorial pages
    technical: {
        'async': {
            type: 'article',
            title: 'Async and Sync Code in Cypress',
            sections: [
                {
                    heading: 'Introduction',
                    content: `When I first start using Cypress, I was frequently getting errors with "undefined" values after calling a function. The function was returning before the previous assignment was completed. Later, I realized it was due to asynchronous working way. It means, basically all the commands are queued and called sequentially. There is still no issues. However whenever we mix sync and async code, then we start to mix the execution order. In Playwright there is a trivial way to ensure the completion of a call with 'await' keyword. But in Cypess, it is a bit different. Let's see how it works.`
                },
                {
                    heading: '1. Sync and Async Code together',
                    image: 'mixedorder.png',
                    content: `In this simple code, what I want to see is:<br>1<br>2<br>wait 3 secs<br>3<br>4<br>test passes.<br><br>But what I has is, I already get the 3 & 4 logs before waiting for 3 seconds. Which means <code>cy.wait(3000)</code> was not waited to be completed before moving to next call.`
                },
                {
                    heading: '2. Then',
                    image: 'then.png',
                    content: `This time what we do is, ensuring that wait is completed before moving to log3. What I see in the console is:<br>1<br>2<br>4<br>wait 3 secs<br>3<br>test passes.<br><br>So, log3 is waiting for the previous call, but log4 is still running before them.`
                },
                {
                    heading: '3. Promises',
                    image: 'promise.png',
                    content: `In Cypress, we can create 'Promises' which promise to return properly. When I execute the above code, what I see is: <br>1<br>2<br>4<br>test passes<br>wait 3 secs<br>3<br><br> Even the test finished before wait and log3. Seems like I could not wait for promise properly.`
                },
                {
                    heading: '4. Tasks',
                    image: 'task.png',
                    content: `Instead of calling the promise function, we can just start it as a 'task'. For this purpose, we have to register this task name in the plugins file.`
                },
                {
                    heading: '5. Wrap',
                    image: 'wrap.png',
                    content: `If I wait for promise to be resolved, I see test passes after the promise: <br>1<br>2<br>4<br>wait 3 secs<br>3<br>test passes.<br><br> It is basically same with the second section: connecting log3 and wait with 'then'.`
                },
                {
                    heading: '6. Wrap and Then',
                    image: 'wrapthen.png',
                    content: `If I continue to next calls after the promise is resolved, finally I get what I want: <br>1<br>2<br>wait 3 secs<br>3<br>4<br>test passes.`
                }
            ]
        }
        // Add more technical articles as needed
    }
};

// Helper function to get page data
function getPageData(category, pageId) {
    if (pagesData[category] && pagesData[category][pageId]) {
        return pagesData[category][pageId];
    }
    return null;
}
